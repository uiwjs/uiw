// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});


const webpack = require('webpack');
const path = require('path');
const color = require('colors-cli/safe')
const fs = require('fs-extra');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printHostingInstructions = require('react-dev-utils/printHostingInstructions');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');
const config = require('./webpack.config.production');
const paths = require('./paths');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

// These sizes are pretty large. We'll warn for bundles exceeding them.
// 尺寸相当大弹出警告
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

measureFileSizesBeforeBuild(paths.appBuild).then(previousFileSizes => {
  // Remove all content but keep the directory so that
  // 删除所有内容，但保留目录
  // if you're in it, you don't end up in Trash
  // 如果你在里面，你最终不会在垃圾桶里
  fs.emptyDirSync(paths.appBuild);
  // Start the webpack build
  return build(previousFileSizes);
}).then(({ stats, previousFileSizes, warnings }) => {
  if (warnings.length) {
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
  const publicPath = config.output.publicPath;
  const buildFolder = path.relative(process.cwd(), paths.appBuild);
  printHostingInstructions(
    appPackage,
    publicPath,
    buildFolder,
  );

},
  err => {
    console.log(color.red('Failed to compile.\n'));
    printBuildError(err);
    process.exit(1);
  });
// 创建生产构建并打印部署说明。
function build(previousFileSizes) {
  console.log('Creating an optimized production build...');

  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      const messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
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

// function copyPublicFolder() {
//   fs.copySync(paths.appPublic, paths.appBuild, {
//     dereference: true,
//     filter: file => file !== paths.appHtml,
//   });
// }