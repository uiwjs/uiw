import path from "path";

export const loaderOneOf = [
  require.resolve("@kkt/loader-less"),
  require.resolve("@kkt/loader-raw"),
];

export default (conf, { paths }, webpack) => {
  conf.resolve.alias = {
    "@": paths.appSrc,
    react: path.resolve("./node_modules/react"),
  };
  const pkg = require(path.resolve(
    process.cwd(),
    "node_modules/uiw/package.json"
  ));

  const regexp = /^(ModuleScopePlugin)/;
  conf.resolve.plugins = conf.resolve.plugins
    .map((item) => {
      if (
        item.constructor &&
        item.constructor.name &&
        regexp.test(item.constructor.name)
      ) {
        return null;
      }
      return item;
    })
    .filter(Boolean);

  // 获取版本
  conf.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );
  conf.output = { ...conf.output, publicPath: "./" };
  return conf;
};
