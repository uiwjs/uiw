// 把它作为第一件事，这样读它的任何代码都知道正确的环境。
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
// 使脚本在未处理的拒绝中崩溃，而不是默默地忽略它们。
// 未处理的承诺拒绝将以非零退出代码终止Node.js进程。
process.on('unhandledRejection', err => {
  console.log("err::",err)
  throw err;
});
const path = require('path');
const paths = require('./config/paths');
const color = require('colors-cli/safe')
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('./config/webpack.conf.prod');

const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printHostingInstructions = require('react-dev-utils/printHostingInstructions');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;


// 这些尺寸相当大。 我们将警告bundles包超过它们。
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

// 如果缺少必需的文件，则发出警告并且崩溃
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// 首先，读取构建目录中的当前文件大小。
// 这让我们可以显示以后改变了多少。
measureFileSizesBeforeBuild(paths.appBuild)
  .then(previousFileSizes => {
    // 删除所有内容，但保留目录
    // 如果你在，你不会陷入垃圾桶
    fs.emptyDirSync(paths.appBuild);
    // 合并公共文件夹
    copyPublicFolder();
    // 启动webpack构建
    return build(previousFileSizes);
  })
  .then(({stats, previousFileSizes, warnings})=>{
    if (warnings&&warnings.length) {
      console.log(color.yellow('Compiled with warnings.\n'));
      console.log(warnings.join('\n\n'));
      console.log(
        '\nSearch for the ' +
          color.underline(color.yellow('keywords')) +
          ' to learn more about each warning.'
      );
      console.log(
        'To ignore, add ' +
          color.cyan('// eslint-disable-next-line') +
          ' to the line before.\n'
      );
    } else {
      console.log(color.green('Compiled successfully.\n'));
    }
    console.log('File sizes after gzip:\n');
    printFileSizesAfterBuild(
      stats,
      previousFileSizes,
      paths.appBuild,
      WARN_AFTER_BUNDLE_GZIP_SIZE,
      WARN_AFTER_CHUNK_GZIP_SIZE
    );

    console.log();

    const appPackage = require(paths.appPackage);
    const publicUrl = paths.publicUrl;
    const publicPath = config.output.publicPath;
    const buildFolder = path.relative(process.cwd(), paths.appBuild);

    printHostingInstructions(
      appPackage,
      publicUrl,
      publicPath,
      buildFolder
    );

  },err => {
    console.log(color.red('Failed to compile.\n'));
    printBuildError(err);
    process.exit(1);
  })


// 创建生产构建并打印部署说明。
function build(previousFileSizes) {
  console.log('Creating an optimized production build...');
  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {return reject(err); }
      const messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length) {
        // 只保留第一个错误。
        // 其他人通常表现出同样的问题，但会使读者感到混乱。
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          color.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n'
          )
        );
        return reject(new Error(messages.warnings.join('\n\n')));
      }
      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      });
    });
  });
}

// 合并公共文件夹
function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}
