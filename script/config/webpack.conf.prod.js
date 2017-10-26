
const autoprefixer = require('autoprefixer');
const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ManifestPlugin = require('webpack-manifest-plugin');


// Webpack使用`publicPath'来确定应用程序在哪里发送。
// 它需要一个尾部斜线，或者文件资产将获得不正确的路径。
const publicPath = paths.servedPath;
// Some apps do not use client-side routing with pushState.
// 对于这些，“首页”可以设置为“.”。 以启用相对资产路径。
const shouldUseRelativeAssetPaths = publicPath === './';

// SourceMap繁重，可能导致大型源文件的内存不足问题。
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';


// 注意：在这里定义，因为它将被使用不止一次。
const cssFilename = 'css/[name].[contenthash:8].css';

// ExtractTextPlugin期望构建输出是平的。
// (见 https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27)
// 但是，我们的输出结构是用css，js和media文件夹。
// 要使此结构使用相对路径，我们必须使用自定义选项。
const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? // Making sure that the publicPath goes back to to build folder.
  { publicPath: Array(cssFilename.split('/').length).join('../') }
  : {};

module.exports = {
  // 如果有任何错误，请勿尝试继续。
  bail: true,
  // 我们在生产中生成源代码图(SourceMap)。 这很慢，但效果不错。
  // 您可以在部署期间从构建中排除* .map文件。
  // devtool: shouldUseSourceMap ? 'source-map' : false,
  // 在生产中，我们只想加载polyfills和应用程序代码。
  // 下面entry对象必须在下面webpack.optimize.CommonsChunkPlugin 中引用，否则无效
  entry: {
    'vendors': ['react', 'react-dom', 'react-router-dom'],
    'libs': [
      path.resolve(process.cwd(), 'docs/libs/markdown/index.js'),
      path.resolve(process.cwd(), 'docs/libs/markdown/canvas.js')
    ],
    'marked': ['marked'],
    'prismjs': ['prismjs'],
    'app': [
      "babel-polyfill",
      paths.appIndexJs
    ],
    'uiws': paths.readSrcSync(paths.appSrc),
    'babelstandalone': ['babel-standalone'],
  },
  // 排除不打包的依赖包
  externals: {
    // 'marked': 'marked',
    // 'prismjs': 'prismjs',
    // 'babel-standalone': 'transform'
  },
  output: {
    // 构建文件夹。
    path: paths.appBuild,
    // 生成的JS文件名（带有嵌套文件夹）。
    // 将有一个主要的bundle，每个异步块有一个文件。
    // 我们目前没有宣传代码分割，但Webpack支持它。
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    // 从主页推断出“公共路径”（如/或/ my-project）。
    publicPath: '/',
    // 将sourcemap条目指向原始磁盘位置（格式为Windows上的URL）
    devtoolModuleFilenameTemplate: info => path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    // 这允许您设置Webpack应该查找模块的后备。 
    // 我们将这些路径放在第二位，因为如果有任何冲突，我们想要“node_modules”来“win”。
    // 这符合节点解析机制。
    // https://github.com/facebookincubator/create-react-app/issues/253
    modules: ['node_modules', paths.appNodeModules].concat(
      // 它保证存在，因为我们在`env.js`中调整它
      // process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    // 这些是Node生态系统支持的合理默认值。
    // 我们还将JSX作为通用组件文件扩展名来支持一些工具，尽管我们不建议使用它，
    // 请参阅：https：//github.com/facebookincubator/create-react-app/issues/290
    // 已添加`web`扩展名前缀，以更好地支持React Native Web。
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      // 支持 React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native': 'react-native-web',
    },
    plugins: [
      // 阻止用户从 src/（或node_modules/）外部导入文件。
      // 这通常会导致混乱，因为我们只通过 babel 处理 src/中的文件。
      // 如果你愿意，要解决这个问题，我们阻止你从 src/ - 导入文件。
      // 请将文件链接到您的 node_modules/ 中并让模块编译引用进来。
      // 确保您的源文件被编译，因为它们将不会以任何方式处理。
      new ModuleScopePlugin(paths.appSrc, [paths.appPackage]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          // TODO:禁用require.ensure也不是一种标准的语言特征。
          // 我们等待https://github.com/facebookincubator/create-react-app/issues/2176。
          // { parser: { requireEnsure: false } },
          {
            // 首先运行linter。
            // 在Babel处理js之前做这一点很重要。
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),

            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        // “oneOf”将遍历所有以下加载程序，直到一个符合要求。
        // 当没有加载器匹配时，它将返回到加载程序列表末尾的“file”加载器。
        oneOf: [
          // “url”加载器像“file”加载器一样工作，
          // 除了将小于指定限制的资源嵌入数据URL以避免请求。
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          // 使用Babel处理JS
          {
            test: /\.(js|jsx)$/,
            include: [
              paths.appDocs,
              paths.appSrc,
            ],
            loader: require.resolve('babel-loader'),
            options: {
              // 这是webpack的“babel-loader”（不是Babel本身）的一个功能。
              // 它启用缓存结果./node_modules/.cache/babel-loader/
              // 用于更快重建的目录。
              cacheDirectory: true,
              // 需要安装 npm install babel-plugin-transform-runtime --save-dev 和 npm install babel-runtime --save
              // 按需加载缩小体积
              plugins: ['transform-runtime']
            },
          },
          // “postcss-loader”将autoprefixer应用到我们的CSS中。
          // “css-loader”可以解析CSS中的路径，并添加资源作为依赖关系。
          // “style-loader”将CSS转换为注入<style>标签的JS模块。
          // 在生产中，我们使用一个插件将该CSS提取到一个文件，但是
          // 在开发中“style-loader”可以对CSS进行热编辑。
          {
            test: /\.(css|less)$/,
            loader: ExtractTextPlugin.extract(
              Object.assign(
                {
                  fallback: require.resolve('style-loader'),
                  use: [
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: shouldUseSourceMap,
                      },
                    },
                    {
                      loader: require.resolve('postcss-loader'),
                      options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
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
                  ],
                },
                extractTextPluginOptions
              )
            ),
            // 注意：如果`plugins`中没有`new ExtractTextPlugin()`，这将不起作用。
          },
          {
            test: /\.md$/,
            loader: 'raw-loader'
          },
          // “file-loader”确保这些资源由WebpackDevServer服务。
          // 当您导入资源时，您将获得（虚拟）文件名。
          // 在生产中，它们将被复制到`build`文件夹。
          // 此加载程序不使用“test”，因此它将捕获所有模块
          {
            // 排除`js`文件以保持“css”加载器工作，因为它注入它的运行时，否则将通过“文件”加载器处理。
            // 还可以排除“html”和“json”扩展名，以便它们被webpacks内部加载器处理。
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ]

      }
    ]
  },
  plugins: [
    // 使用注入的<script>生成一个`index.html`文件。
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
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
        minifyURLs: true,
      },
    }),
    // 使一些环境变量可用于JS代码，例如：
    // if（process.env.NODE_ENV ==='production'）{...}。
    // 这里绝对必要NODE_ENV被设置为生产。
    // 否则，React将以非常缓慢的开发模式进行编译。
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // 在Webpack v3新引进的。使用简单，效果不错。
    // 范围提升特别是ECMAScript Module语法实现的功能。
    // 因为这个webpack可以根据你正在使用什么样的模块和其他条件来回退到正常的捆绑。
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 打包过程中，最小化id值。在Webpack v2.0以及以后的版本默认添加。
    // new webpack.optimize.OccurrenceOrderPlugin()
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'babelstandalone', 'uiws', 'marked', 'prismjs', 'libs', 'app'],
      filename: 'js/[name].[hash:8].js',
      // chunks:['uiw','marked'],
      // async: true,
      minChunks: Infinity,
      // children: true,
    }),
    // 缩小代码。
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
        // Turned on because emoji and regex is not minified properly using default
        // https://github.com/facebookincubator/create-react-app/issues/2488
        ascii_only: true,
      },
      sourceMap: shouldUseSourceMap,
    }),
    // 注意：如果在“loader”中没有ExtractTextPlugin.extract（..），这将不起作用。
    new ExtractTextPlugin({
      filename: cssFilename,
    }),
    // 生成一个清单文件，其中包含所有资产文件名映射到其相应的输出文件，
    // 以便工具可以拾取它，而无需解析“index.html”。
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
  ],
  // 有些库导入Node modules，但不要在浏览器中使用它们。
  // 告诉Webpack为他们提供空的mock，以便导入它们。
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
}