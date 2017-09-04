const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const paths = require('./paths');
const autoprefixer = require('autoprefixer');

const merge = require('merge-array-object');
const webpackConfig = require('./webpack.config');

// Note: defined here because it will be used more than once.
const cssFilename = '[name].[contenthash:8].css';

const confg = merge(webpackConfig, {
  // Don't attempt to continue if there are any errors.
  // 有任何错误请不要尝试继续操作
  bail: true,
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  // devtool: 'source-map',
  entry: {
    docs: paths.appPublic
  },
  output: {
    path: paths.appBuild,
    chunkFilename: '[chunkhash:12].js',
    filename: '[chunkhash:12].js'
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        include: [
          paths.appPublic,
          paths.appSrc,
          paths.appLib,
        ]
      },
      // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/503
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: true,
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
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback:require.resolve('style-loader'),
          use:[
            // require.resolve('css-loader'), 
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: true,
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
            // require.resolve('less-loader'),
            {
              loader: require.resolve('less-loader'),
              // options: {
              //   modifyVars: { "@primary-color": "#1DA57A" },
              // },
            },
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
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    // 该功能也会让代码打包的体积变得更小，加快运行的速度
    // Scope Hoisting 和 Code splitting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   async: true,
    //   children: true,
    //   minChunks: 2,
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'inline',
      filename: 'js/[hash:8].[name].js',
      minChunks: Infinity
    }),
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        // Disabled because of an issue with Uglify breaking seemingly valid code:
        // https://github.com/facebookincubator/create-react-app/issues/2376
        // Pending further investigation:
        // https://github.com/mishoo/UglifyJS2/issues/2011
        comparisons: false,
      },
      output: {
        comments: false,
      },
      // sourceMap: true,
    }),
    // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new ExtractTextPlugin({
      filename: cssFilename,
    }),
    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how Webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new webpack.optimize.AggressiveSplittingPlugin({
    //     minSize: 3000,
    //     maxSize: 8000
    // }),
  ]
})

module.exports = confg