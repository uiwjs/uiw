const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const paths = require('./paths');


const merge = require('merge-array-object');
const webpackConfig = require('./webpack.config');

// const cssFilename = 'static/css/[name].[contenthash:8].css';
// const extractLess = new ExtractTextPlugin({
//   filename: "[name].[contenthash].css",
//   disable: process.env.NODE_ENV === "development"
// });
module.exports = merge(webpackConfig, {
  entry: {
    docs: paths.appPublic
  },
  output: {
    path: paths.appBuild,
    chunkFilename: '[chunkhash:12].js',
    filename: '[chunkhash:12].js'
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
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      children: true,
      minChunks: 2,
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'inline',
    //   filename: 'js/[hash:8].[name].js',
    //   minChunks: Infinity
    // }),
    // new webpack.optimize.AggressiveSplittingPlugin({
    //     minSize: 3000,
    //     maxSize: 8000
    // }),
  ]
})