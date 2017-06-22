const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const autoprefixer = require('autoprefixer');

// "postcss-loader" 将autoprefixer应用到我们的CSS中。
// var postcsscfg = {
//   loader:'postcss-loader',
//   options:{
//     plugins:function() {
//       return [
//         autoprefixer({
//           browsers: [
//             '>1%',
//             'last 4 versions',
//             'Firefox ESR',
//             'not ie < 9', // React doesn't support IE8 anyway
//           ]
//         }),
//       ];
//     }
//   }
// };

new WebpackDevServer(webpack({
  devtool: 'source-map',
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:1987',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: [
    //       autoprefixer({
    //         browsers: [
    //           "> 1%",
    //           "last 2 versions",
    //           // '>1%',
    //           // 'last 4 versions',
    //           // 'Firefox ESR',
    //           // 'not ie < 9', // React doesn't support IE8 anyway
    //         ]
    //       })
    //     ]
    //   }
    // })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '../docs'),
          path.join(__dirname, '../src'),
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
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader',
      //     {
      //       loader: require.resolve('postcss-loader'),
      //       options: {
      //         ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
      //         plugins: () => [
      //           require('postcss-flexbugs-fixes'),
      //           autoprefixer({
      //             browsers: [
      //               '>1%',
      //               'last 4 versions',
      //               'Firefox ESR',
      //               'not ie < 9', // React doesn't support IE8 anyway
      //             ],
      //             flexbox: 'no-2009',
      //           }),
      //         ],
      //       },
      //     },
      //   ]
      // },
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
}), {
  publicPath: '/',
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(1987, 'localhost', error => {
  if (error) {
    throw error;
  }
});
