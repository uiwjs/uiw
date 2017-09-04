const path = require('path');
const webpack = require('webpack');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const paths = require('./paths');
const merge = require('merge-array-object');
const webpackConfig = require('./webpack.config');
const autoprefixer = require('autoprefixer');

const config = merge(webpackConfig, {
  // devtool: 'source-map',
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
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   async: true,
    //   children: true,
    //   minChunks: 2,
    // }),
    // // Minify the code.
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     // Disabled because of an issue with Uglify breaking seemingly valid code:
    //     // https://github.com/facebookincubator/create-react-app/issues/2376
    //     // Pending further investigation:
    //     // https://github.com/mishoo/UglifyJS2/issues/2011
    //     comparisons: false,
    //   },
    //   output: {
    //     comments: false,
    //   },
    //   sourceMap: true,
    // }),
  ],
  module: {
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
      },
      {
        test: /\.(less|css)$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: require.resolve('less-loader'),
          },
        ]
      }
    ]
  }
})

module.exports = config
