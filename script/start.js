// 把它作为第一件事，这样读它的任何代码都知道正确的环境。
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
// 使脚本在未处理的拒绝中崩溃，而不是默默地忽略它们。
// 未处理的承诺拒绝将以非零退出代码终止Node.js进程。
process.on('unhandledRejection', err => {
  throw err;
});

const webpack = require('webpack');
const color = require('colors-cli/safe')
const WebpackDevServer = require('webpack-dev-server');
const openBrowser = require('react-dev-utils/openBrowser');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const {
  choosePort,
  createCompiler,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const paths = require('./config/paths');
const config = require('./config/webpack.conf.dev');
const createDevServerConfig = require('./config/webpack.server.conf.dev');


const isInteractive = process.stdout.isTTY;

// 如果需要的文件不存在，警告并崩溃
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 2087;
const HOST = process.env.HOST || '0.0.0.0';



choosePort(HOST, DEFAULT_PORT)
  .then(port => {
    if (port == null) {
      // 我们还没有找到一个端口。
      return;
    }
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const appName = require(paths.appPackage).name;
    const urls = prepareUrls(protocol, HOST, port);

    // 创建配置有自定义消息的Webpack编译器。
    const compiler = createCompiler(webpack, config, appName, urls);
    // 通过Web服务器提供由编译器生成的webpack资源
    const serverConfig = createDevServerConfig(
      urls.lanUrlForConfig
    );
    const devServer = new WebpackDevServer(compiler, serverConfig);

    // Launch WebpackDevServer.
    devServer.listen(port, HOST, err => {
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
      console.log(err, err.message);
    }
    process.exit(1);
  });
