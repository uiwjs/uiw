const path = require('path');
const webpack = require('webpack');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const paths = require('./paths');
const merge = require('merge-array-object');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devtool: 'source-map',
  devtool: 'eval',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    paths.appIndexJs
  ],
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      // inject: "head",
      template: paths.appBuildHtml,
      "chunks": {
        "head": {
          "entry": 'bundle.js',
        },
      }
    }),
    new FaviconsWebpackPlugin(paths.appFavicon),
    // 这是发送热更新（目前仅为CSS）的必要条件：
    new webpack.HotModuleReplacementPlugin(),
    // new InterpolateHtmlPlugin(paths.appFavicon),
  ],
  module: {
    // 输出错误而不是警告
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
            },
            loader: require.resolve('eslint-loader'),
            // exclude: '/node_modules/'
          },
        ],
        include: paths.appSrc,
      }
    ]
  }
})
