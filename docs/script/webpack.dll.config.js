const path    = require('path');
const webpack = require('webpack');
const paths = require('./paths');
console.log("__dirname:1:",paths.appPublic)

module.exports = {
  entry: {
    vendor: ['react','react-router-dom','react-dom']
    // vendor:[paths.appPublic]
  },
  output: {
    path: path.resolve('./dll'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.resolve('./dll', '[name]-manifest.json'),
      name: '[name]_library'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};