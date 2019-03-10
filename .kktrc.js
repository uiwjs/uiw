const pkg = require('./packages/core/package.json');

module.exports = {
  plugins: [
    require.resolve('@kkt/plugin-less'),
  ],
  // Modify the webpack config
  config: (conf, { dev, env }, webpack) => {
    if (dev) {
      conf = {
        ...conf,
        devServer: {
          ...conf.devServer,
          // fix 'Invalid Host header'
          disableHostCheck: true,
        }
      }
    }
    if (env === 'prod') {
      conf.output.publicPath = './';
      conf = {
        ...conf,
        optimization: {
          ...conf.optimization,
          // https://webpack.js.org/plugins/split-chunks-plugin/
          splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
              }
            }
          }
        }
      };
    }
    conf.module.rules = [
      {
        test: /\.md$/,
        loader: require.resolve('raw-loader')
      },
      ...conf.module.rules,
    ];
    conf.plugins.push(new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }));
    return conf;
  },
};
