'use strict';
const errorOverlayMiddleware = require('react-error-overlay/middleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function (allowedHost) {
  return {
    // WebpackDevServer 2.4.3 introduced a security fix that prevents remote
    // websites from potentially accessing local content through DNS rebinding:
    // https://github.com/webpack/webpack-dev-server/issues/887
    // https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a
    // However, it made several existing use cases such as development in cloud
    // environment or subdomains in development significantly more complicated:
    // https://github.com/facebookincubator/create-react-app/issues/2271
    // https://github.com/facebookincubator/create-react-app/issues/2233
    // While we're investigating better solutions, for now we will take a
    // compromise. Since our WDS configuration only serves files in the `public`
    // folder we won't consider accessing them a vulnerability. However, if you
    // use the `proxy` feature, it gets more dangerous because it can expose
    // remote code execution vulnerabilities in backends like Django and Rails.
    // So we will disable the host check normally, but enable it if you have
    // specified the `proxy` setting. Finally, we let you override it if you
    // really know what you're doing with a special environment variable.
    disableHostCheck: process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    // Enable gzip compression of generated files.
    // 启用gzip压缩生成的文件。
    compress: true,
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // 不显示WebpackDevServer自己的日志，因为它们通常没有用。
    // It will still show compile warnings and errors with this setting.
    // 它仍然会显示编译警告和错误与此设置。
    clientLogLevel: 'none',
    // By default WebpackDevServer serves physical files from current directory
    // in addition to all the virtual build products that it serves from memory.
    // This is confusing because those files won’t automatically be available in
    // production build folder unless we copy them. However, copying the whole
    // project directory is dangerous because we may expose sensitive files.
    // Instead, we establish a convention that only files in `public` directory
    // get served. Our build script will copy `public` into the `build` folder.
    // In `index.html`, you can get URL of `public` folder with %PUBLIC_URL%:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    // In JavaScript code, you can access it with `process.env.PUBLIC_URL`.
    // Note that we only recommend to use `public` folder as an escape hatch
    // for files like `favicon.ico`, `manifest.json`, and libraries that are
    // for some reason broken when imported through Webpack. If you just want to
    // use an image, put it in `src` and `import` it from JavaScript instead.
    contentBase: paths.appPublic,

    // By default files from `contentBase` will not trigger a page reload.
    // 默认情况下，`contentBase`的文件不会触发页面重新加载。
    watchContentBase: true,
    // Enable hot reloading server. It will provide /sockjs-node/ endpoint
    // for the WebpackDevServer client so it can learn when the files were
    // updated. The WebpackDevServer client is included as an entry point
    // in the Webpack development configuration. Note that only changes
    // to CSS are currently hot reloaded. JS changes will refresh the browser.
    // 启用热重新加载服务器。 它将为 WebpackDevServer 客户端提供 `/sockjs-node/endpoint`，以便可以了解文件何时被更新。 
    // WebpackDevServer 客户端作为Webpack开发配置中的入口点。 请注意，只有CSS的更改目前正在重新加载。 JS更改将刷新浏览器。
    hot: true,
    // It is important to tell WebpackDevServer to use the same "root" path
    // as we specified in the config. In development, we always serve from /.
    // 告诉WebpackDevServer使用与我们在config中指定的相同的“root”路径是很重要的。 
    // 在开发中，我们始终从 /。
    publicPath: '/',
    // WebpackDevServer is noisy by default so we emit custom message instead
    // by listening to the compiler events with `compiler.plugin` calls above.
    // WebpackDevServer在默认情况下是杂乱的，所以我们自定义消息，
    // 而不是通过上面的`compile.plugin`调用监听编译器事件。
    quiet: true,
    // Reportedly, this avoids CPU overload on some systems.
    // 据小道消息称，这是避免了某些系统的CPU过载。
    // https://github.com/facebookincubator/create-react-app/issues/293
    watchOptions: {
      ignored: /node_modules/,
    },
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    // 如果HTTPS环境变量设置为“true”，则启用HTTPS
    https: protocol === 'https',
    host: "127.0.0.1",
    overlay: false,
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      // 带点`.`的路径应该仍然使用历史回退。
      // See https://github.com/facebookincubator/create-react-app/issues/387.
      disableDotRule: true,
    },
    public: allowedHost,
    setup(app) {
      // This lets us open files from the runtime error overlay.
      // 这使我们可以从运行时错误叠加层打开文件。
      app.use(errorOverlayMiddleware());
      // This service worker file is effectively a 'no-op' that will reset any
      // previous service worker registered for the same host:port combination.
      // 这个服务工作者文件实际上是一个“no-op”，它会重置任何在同一个主机上注册的服务 host:port 组合。
      // We do this in development to avoid hitting the production cache if
      // it used the same host and port.
      // 我们在开发中这样做，以避免在使用相同的主机和端口时触发生产缓存。
      // https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432
      app.use(noopServiceWorkerMiddleware());
    },
  };
};
