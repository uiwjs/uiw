import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
// import loaderUtils from 'loader-utils'; // webpack 内部插件
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import paths from './path';
import pkg from '../../package.json';


function resolve(dir) {
  return path.join(__dirname, '..', '..', dir)
}

export default {
  mode: 'production',
  entry: [
    paths.appIndexJs,
  ],
  output: {
    path: paths.appBuildDist,
    publicPath: '/',
    filename: 'js/[name].[chunkhash:8].js',
  },
  resolve: {
    // https://webpack.js.org/configuration/resolve/#resolve-alias
    alias: { },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            // 首先运行linter。
            // 在Babel处理js之前做这一点很重要。
            options: {
              // formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
              configFile: require.resolve('../../.eslintrc.js'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(css|less)$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    postcssFlexbugsFixes(),
                    // require('postcss-flexbugs-fixes'),
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
            ],
          },
          // Process JS with Babel.
          {
            test: /\.(js|jsx|mjs)$/,
            loader: require.resolve('babel-loader'),
            include: [
              paths.appDocs,
              paths.appSrc,
            ],
            options: {

              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              // 按需加载缩小体积
              plugins: ['@babel/plugin-transform-runtime']
            },
          },
          {
            test: /\.md$/,
            loader: 'raw-loader'
          },
          {
            test: /w-iconfont\.(eot|ttf|svg)$/,
            use: [
              {
                loader: require.resolve('file-loader'),
                options: {
                  name: './static/[name].[hash:8].[ext]',
                },
              },
            ],
          },
          // “file-loader”确保这些资源由WebpackDevServer服务。
          // 当您导入资源时，您将获得（虚拟）文件名。
          // 在生产中，它们将被复制到`build`文件夹。
          // 此加载程序不使用“test”，因此它将捕获所有模块
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            use: [
              {
                loader: require.resolve('file-loader'),
                options: {
                  name: 'static/[name].[hash:8].[ext]',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
  // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        },
        standalone: {
          name: 'chunk-standalone', // 单独将 standalone 拆包
          priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
          test: /[\\/]node_modules[\\/]\@babel[\\/]standalone[\\/]/
        },
        commons: {
          name: 'chunk-comomns',
          test: resolve('src'), // 可自定义拓展你的规则
          minChunks: 2, // 最小公用次数
          priority: 20,
          chunks: 'async', // 只打包初始时依赖的第三方
          // reuseExistingChunk: true // 如果当前块包含已从主束拆分的模块，则将重用它而不是生成新的块。
        }
      }
    },
    runtimeChunk: 'single',
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: {
            safari10: true
          }
        },
        sourceMap: false,
        cache: true,
        parallel: true
      }),
      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin(paths.appBuildDist, {
      root: process.cwd(),
    }),
    new HtmlWebpackPlugin({
      favicon: paths.appFavicon,
      title: 'UIW React, A high quality UI Toolkit, A Component Library for React 16+.',
      inject: true,
      template: paths.appHtml,
      minify: {
        html5: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        preserveLineBreaks: true,
        removeComments: true,
        keepClosingSlash: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true
      },
      mobile: true,
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
