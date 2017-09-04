const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  yarnLockFile: resolveApp('yarn.lock'),
  appPackage: resolveApp('package.json'),
  appBuild: resolveApp('dist'),
  appPublic: resolveApp('docs'),
  appFavicon: resolveApp('docs/assets/favicon.png'),
  appHtml: resolveApp('docs/index.html'),
  appBuildHtml: resolveApp('docs/build.html'),
  appIndexJs: resolveApp('docs/index.js'),
  appSrc: resolveApp('src'),
  appLib: resolveApp('lib'),
  appNodeModules: resolveApp('node_modules'),
};
