const path = require('path');
const webpack = require('webpack');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const merge = require('merge-array-object');
const webpackConfig = require('./webpack.config');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


// Note: defined here because it will be used more than once.
const cssFilename = '[name].[contenthash:8].css';

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
  module: {
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
      // {
      //   test: /\.(js|jsx)$/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       options: {
      //         formatter: eslintFormatter,
      //       },
      //       loader: require.resolve('eslint-loader'),
      //       // exclude: '/node_modules/'
      //     },
      //   ],
      //   include: paths.appSrc,
      // },
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
})

module.exports = config
