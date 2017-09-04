const path = require('path');
const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const paths = require('./paths');

module.exports = {
  output: {
    path: paths.appBuild,
    publicPath: '/',
  },
  plugins: [
    new FaviconsWebpackPlugin(paths.appFavicon),
  ],
  resolve: {
    // 这些是Node生态系统支持的合理默认值。
    // 我们还将支持JSX作为通用组件文件扩展名，来支持一些工具，尽管我们不建议使用它，
    extensions: ['.js', '.jsx'],
    plugins: [
      // 组织用户从 src/(或者node_modules/) 以外的地方导入文件
      // 这样通常回到这混乱，因为我们Babel只处理 src/ 中的文件
      new ModuleScopePlugin(paths.appSrc),
    ],
  },
  module: {
    // 输出错误而不是警告
    strictExportPresence: true,
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|ico)(\?.+)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    ]
  }
}