// 做这个是第一件事，所以任何代码阅读它知道正确的环境。
// process.env.BABEL_ENV = 'development';
// process.env.NODE_ENV = 'development';
// 使脚本在未处理的拒绝中崩溃，而不是默默地忽略它们。 
// 将来，未处理的承诺拒绝将以非零退出代码终止Node.js进程。
// unhandledRejection 错误是针对node.js, ES6的Promise 中的吃掉的错误。
// 在Promise中,如果发生了reject,例如 Promise.reject(new Error(‘Resource not yet loaded!’)), 
// 但错误没有catch(代码中没有写处理错误的catch函数),将会发生unhandledRejection错误, 
// 通过 process.on(‘unhandledRejection’, (reason, p) => {})
process.on('unhandledRejection', err => {
  throw err;
});

const webpack = require('webpack');
// const path = require('path');
const {
  choosePort,
  createCompiler,
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
if (!checkRequiredFiles([paths.appBuildHtml, paths.appIndexJs])) {
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
    // 通过Web服务器提供由编译器生成的webpack资源
    const serverConfig = createDevServerConfig(
      urls.lanUrlForConfig
    );

    const WebpackDevServer = require('webpack-dev-server');
    const devServer = new WebpackDevServer(compiler, serverConfig)
    devServer.listen(port, 'localhost', err => {
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