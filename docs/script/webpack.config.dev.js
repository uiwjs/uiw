const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const autoprefixer = require('autoprefixer');
const paths = require('./paths');

module.exports = {
  devtool: 'source-map',
  devtool: 'eval',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    publicPath:'/',
    filename: 'bundle.js'
  },
  plugins: [
    // 这是发送热更新（目前仅为CSS）的必要条件：
    new webpack.HotModuleReplacementPlugin(),
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