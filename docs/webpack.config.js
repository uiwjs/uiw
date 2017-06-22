const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ManifestPlugin = require('webpack-manifest-plugin');

const basePath = path.resolve(__dirname, '../');

const cssFilename = 'static/css/[name].[contenthash:8].css';

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

// const extractCSS = new ExtractTextPlugin('css/[contenthash].css');
// const extractLESS = new ExtractTextPlugin('css/[contenthash].css')

module.exports = {
  entry: {
    docs: path.join(basePath, 'docs')
  },
  output: {
    path: path.resolve(basePath, 'dist/site'),
    chunkFilename: '[chunkhash:12].js',
    filename: '[chunkhash:12].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      // {
      //   exclude: [
      //     /\.html$/,
      //     // We have to write /\.(js|jsx)(\?.*)?$/ rather than just /\.(js|jsx)$/
      //     // because you might change the hot reloading server from the custom one
      //     // to Webpack's built-in webpack-dev-server/client?/, which would not
      //     // get properly excluded by /\.(js|jsx)$/ because of the query string.
      //     // Webpack 2 fixes this, but for now we include this hack.
      //     // https://github.com/facebookincubator/create-react-app/issues/1713
      //     /\.(js|jsx)(\?.*)?$/,
      //     /\.css$/,
      //     /\.less$/,
      //     /\.json$/,
      //     /\.svg$/,
      //     /\.md$/,
      //     /\.png$/,
      //     /\.jpe?g$/
      //   ],
      //   use:[{
      //     loader: 'file-loader',
      //     query: {
      //       name: '[name].[ext]'
      //     }
      //   }]
      // },  
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        include: [
          path.join(basePath, 'docs'),
          path.join(basePath, 'src'),
        ]
      },


      // {
      //   // "css-loader" 可以解析CSS中的路径，并添加资源作为依赖关系。
      //   // "style-loader" 将CSS转换为注入<style>标签的JS模块。
      //   // 在生产中，我们使用一个插件将该CSS提取到一个文件，但是
      //   // 在开发中“样式”装载器可以对CSS进行热编辑。
      //   test: /\.css$/,
      //   use: extractCSS.extract({
      //       use:[
      //         'style-loader',
      //         {
      //           loader:'css-loader',
      //           options: {
      //             // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader 
      //             importLoaders: 1 
      //           }
      //         }
      //       ] 
      //   })
      // },
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
  },

  plugins: [
    extractLess,
    new HtmlWebpackPlugin({
      inject: true,
      // inject: "head",
      template: './build.html',
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
};
