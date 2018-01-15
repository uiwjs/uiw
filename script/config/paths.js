const path = require('path');
const fs = require('fs');
const url = require('url');


// 确保在项目文件夹中的任何符号都解决了：
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const getPublicUrl = appPackageJson => envPublicUrl || require(appPackageJson).homepage;


const envPublicUrl = process.env.PUBLIC_URL;


function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

// 我们用` public_url `环境变量或“homepage”字段来推断“public path”的应用程序服务。
// Webpack需要知道它将正确的<script> hrefs放入HTML中，即使在可以为 /todo/42 等嵌套URL提供index.html的单页应用中也是如此。
// 我们不能在HTML中使用相对路径，因为我们不想加载像/todos/42/static/js/bundle.7289d.js这样的东西。 我们必须知道根。
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl = envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

// 返回 UI 组件库所有路径的 Array
// 这些路径用于Webpack配置中
function readSrcSync(filepath, ret) {
  ret = ret || [];
  let files = fs.readdirSync(filepath);
  for (var i = 0; i < files.length; i++) {
    let curPath = path.resolve(filepath, files[i]);
    if (isDir(curPath)) {
      if (files[i] !== 'style' && files[i] !== 'font' && files[i] !== '__test__') {
        readSrcSync(curPath, ret);
      }
    } else if (/\.(js)$/.test(files[i])) {
      ret.push(curPath);
    }
  }
  return ret;
}
//判断是不是目录
function isDir(_path) {
  return exists(_path) && fs.statSync(_path).isDirectory();
}
//检查指定路径的文件或者目录是否存在
function exists(_path) {
  return fs.existsSync(_path);
}

module.exports = {
  appPackage: resolveApp('package.json'),
  appPublic: resolveApp('script/public'),
  appBuild: resolveApp('dist'),
  appManifestDir: resolveApp('dll'),
  appManifest: resolveApp('dll/vendor-manifest.json'),
  appDocs: resolveApp('docs'),
  appFavicon: resolveApp('docs/assets/favicon.png'),
  appHtml: resolveApp('script/public/index.html'),
  appBuildHtml: resolveApp('script/public/index.html'),
  appIndexJs: resolveApp('docs/index.js'),
  appSrc: resolveApp('src'),
  appLib: resolveApp('lib'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
  readSrcSync: readSrcSync,
};
