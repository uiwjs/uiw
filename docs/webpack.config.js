const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const basePath = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    docs: path.join(basePath, 'docs')
  },
  output: {
    path: path.resolve(basePath, 'dist/site'),
    chunkFilename: '[chunkhash:12].js',
    filename: '[chunkhash:12].js'
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[chunkhash:12].css' }),
    new HtmlWebpackPlugin({ template: './build.html' }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: {
    //     keep_fnames: true
    //   },
    //   output: {
    //     comments: false
    //   }
    // })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        include: [
          path.join(basePath, 'docs'),
          path.join(basePath, 'src'),
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: 'file-loader?name=[hash:12].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader: 'url-loader?name=[hash:12].[ext]&limit=25000'
      },
      {
        test: /\.md$/,
        loader : 'raw-loader'
      }
    ]
  }
};
