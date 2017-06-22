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
  appHtml: resolveApp('docs/index.html'),
  appIndexJs: resolveApp('docs/index.jsx'),
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
};
