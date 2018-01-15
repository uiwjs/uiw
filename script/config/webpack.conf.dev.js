const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const paths = require('./paths');

module.exports = {
  // 如果您希望在DevTools中看到编译的输出，您可能需要'eval'。
  // 参见https://github.com/facebookincubator/create-react-app/issues/343中的讨论。
  devtool: 'cheap-module-source-map',
  entry: [
    // 默认加载一些兼容方法
    "babel-polyfill",
    // 为WebpackDevServer添加备用客户端。
    // 客户端的工作是通过socket连接到WebpackDevServer，并获得有关更改的通知。
    // 保存文件时，客户端将应用热更新（在更改CSS的情况下）或刷新页面（如果是JS更改）。
    // 当您发出语法错误时，此客户端将显示语法错误覆盖。
    // 注意：代替默认的WebpackDevServer客户端，我们使用自定义的方式为创建React App用户带来更好的体验。
    // 如果您喜欢stock客户端，您可以用以下两行代替以下行：
    // require.resolve('webpack-dev-server/client') + '?/',
    // require.resolve('webpack/hot/dev-server'),
    require.resolve('react-dev-utils/webpackHotDevClient'),
    // 最后，这是你的应用程序的代码：
    paths.appIndexJs,
  ],
  output: {
    // 下一行未在dev中使用，但WebpackDevServer没有崩溃：
    path: paths.appBuild,
    // 高级输出配置
    // https://webpack.js.org/configuration/output/#output-path
    // 告诉Webpack将包含有关所包含模块信息的包含注释。
    // 此选项默认为false，不应在生产中使用，但在读取生成的代码时非常有用。
    pathinfo: true,
    // 这不会产生真实的文件。
    // 这只是WebpackDevServer在开发中提供的虚拟路径。
    // 这是包含所有入口点的代码和Webpack运行时的JS包。
    filename: 'static/js/bundle.js',
    // 这是应用程式的网址。 我们在开发中使用“/”。
    publicPath: '/',
    // 将源映射条目指向原始磁盘位置（格式为Windows上的URL）
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
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
            },
          },
          // “postcss-loader”将autoprefixer应用到我们的CSS中。
          // “css-loader”可以解析CSS中的路径，并添加资源作为依赖关系。
          // “style-loader”将CSS转换为注入<style>标签的JS模块。
          // 在生产中，我们使用一个插件将该CSS提取到一个文件，但是
          // 在开发中“style-loader”可以对CSS进行热编辑。
          {
            test: /\.(css|less)$/,
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
    // DefinePlugin 允许创建一个在编译时可以配置的全局常量。这可能会对开发模式和发布模式的构建允许不同的行为非常有用。
    // 如果在开发构建中，而不在发布构建中执行日志记录，则可以使用全局常量来决定是否记录日志。
    // 这就是 DefinePlugin 的用处，设置它，就可以忘记开发和发布构建的规则。
    // 在我们的业务代码和第三方包的代码中很多时候需要判断 `process.env.NODE_ENV` 来做不同处理，而在生产环境中我们显然不需要非 `production` 的处理部分。
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new FaviconsWebpackPlugin(paths.appFavicon),
    // 生成一个`index.html`文件，并注入<script>。
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    // 将模块名称添加到工厂功能，以便它们显示在浏览器分析器中。
    new webpack.NamedModulesPlugin(),
    // 如果您需要一个缺少的模块，然后再安装npm，那么您仍然需要重新启动Webpack的开发服务器来发现它。
    // 此插件使自动发现，所以您不必重新启动。
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
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
  // 在开发过程中关闭性能提示，因为我们不做任何感兴趣的拆分或缩小。
  // 这些警告变得很麻烦。
  performance: {
    hints: false,
  },
}
