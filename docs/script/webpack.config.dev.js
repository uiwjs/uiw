const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const autoprefixer = require('autoprefixer');
const paths = require('./paths');

module.exports = {
  devtool: 'source-map',
  devtool: 'eval',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    // 'webpack-dev-server/client?http://localhost:1987',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    // require("react-hot-loader/patch"),
    // require("react-hot-loader/patch"),
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    publicPath:'/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use:[
          'babel-loader',
        ],
        include: [
          paths.appPublic,
          paths.appSrc,
        ]
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
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader : 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader : 'url-loader'
      },
      {
        test: /\.md$/,
        loader : 'raw-loader'
      }
    ]
  }
}