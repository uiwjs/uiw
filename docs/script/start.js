const webpack = require('webpack');
const path = require('path');
const {
  choosePort,
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const clearConsole = require('react-dev-utils/clearConsole');
const openBrowser = require('react-dev-utils/openBrowser');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const color = require('colors-cli/safe')
const paths = require('./paths');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 1987;
const HOST = process.env.HOST || '0.0.0.0';
const isInteractive = process.stdout.isTTY;
const fs = require('fs');

const createDevServerConfig = require('./webpackDevServer');
// 如果需要的文件不存在，警告并崩溃
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}


choosePort(HOST, DEFAULT_PORT)
  .then(port => {
    if (port == null) {
      // 还没有找到一个端口
      return;
    }
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const appName = require(paths.appPackage).name;
    const urls = prepareUrls(protocol, HOST, port);
    const config = require('./webpack.config.dev');
    const useYarn = fs.existsSync('../yarn.lock');

    // 创建配置有自定义消息的Webpack编译器。
    const compiler = createCompiler(webpack, config, appName, urls, useYarn);

    const serverConfig = createDevServerConfig(
      urls.lanUrlForConfig
    );

    const WebpackDevServer = require('webpack-dev-server');
    const devServer = new WebpackDevServer(compiler, serverConfig).listen(port, 'localhost', err => {
      if (err) {
        return console.log(err);
      }
      if (isInteractive) {
        clearConsole();
      }
      console.log(color.cyan('Starting the development server...\n'));
      openBrowser(urls.localUrlForBrowser);
    });


    ['SIGINT', 'SIGTERM'].forEach(function (sig) {
      process.on(sig, function () {
        devServer.close();
        process.exit();
      });
    });



  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });