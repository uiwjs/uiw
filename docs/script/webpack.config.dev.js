const path = require('path');
const webpack = require('webpack');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const merge = require('merge-array-object');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');


// Note: defined here because it will be used more than once.
const cssFilename = '[name].[contenthash:8].css';

module.exports = {
  devtool: 'eval',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: paths.appFavicon,
      inject: true,
      prefix: 'icons/',
      persistentCache: true,
      emitStats: false,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
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
        use: [
          require.resolve('babel-loader'),
        ],
        include: [
          paths.appPublic,
          paths.appSrc,
          paths.appLib,
        ]
      },
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
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback:require.resolve('style-loader'),
          use:[
            require.resolve('css-loader'), 
            // {
            //   loader: require.resolve('css-loader'),
            //   options: {
            //     importLoaders: 1,
            //     minimize: true,
            //     sourceMap: true,
            //   },
            // },
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
            require.resolve('less-loader'),
            // {
            //   loader: require.resolve('less-loader'),
            //   // options: {
            //   //   modifyVars: { "@primary-color": "#1DA57A" },
            //   // },
            // },
          ]
        })
      },

    ]
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
    // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new ExtractTextPlugin({
      filename: cssFilename,
    }),
    // 这是发送热更新（目前仅为CSS）的必要条件：
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  ]
}
