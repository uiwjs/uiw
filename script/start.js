import webpack from 'webpack';
import path from 'path';
import detect from 'detect-port';
import opn from 'opn';
import WebpackDevServer from 'webpack-dev-server';
import load from 'loading-cli';
import 'colors-cli/toxic';
import conf from './conf/webpack.config.dev';

let PORT = 2087;
const HOST = 'localhost';

const compiler = webpack(conf);
const loading = load('Compiler is running...'.green).start();
loading.color = 'green';

// https://webpack.js.org/api/compiler-hooks/#aftercompile
// 编译完成之后打印日志
compiler.hooks.done.tap('done', () => {
  loading.stop();
  // eslint-disable-next-line
  console.log(`\nDev Server Listening at ${`http://${HOST}:${PORT}`.green}`);
});

detect(PORT).then((_port) => {
  if (PORT !== _port) PORT = _port;
  new WebpackDevServer(compiler, {
    // contentBase: conf.output.appPublic,
    publicPath: conf.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: true,
  }).listen(PORT, HOST, (err) => {
    if (err) {
      return console.log(err); // eslint-disable-line
    }
    // open browser
    opn(`http://${HOST}:${PORT}`);
  });
}).catch((err) => {
  console.log(err); // eslint-disable-line
});
