const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Bundles a minified and unminified version of UIW including
 * all it's immediate dependencies (excluding React, ReactDOM, etc)
 */
module.exports = {
  plugins: [
    require.resolve('@kkt/plugin-less'),
  ],
  // Modify the webpack config
  config: (conf, { env, raw, ...other }, webpack) => {
    if (env === 'prod' && raw.BUNDLE) {
      conf.entry = './src/index.ts';
      conf.output = {
        path: other.appBuildDist,
        filename: 'uiw.js',
        library: 'UIW',
        libraryTarget: 'umd',
      }
      conf.externals = {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
        },
      }
      if (raw.BUNDLE !== 'min') conf.optimization.minimize = false;
      if (raw.BUNDLE === 'min') {
        conf.output.filename = 'uiw.min.js';
        conf.plugins = [
          ...conf.plugins,
          new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'uiw.min.css',
            // allChunks: true because we want all css to be included in the main
            // css bundle when doing code splitting to avoid FOUC:
            // https://github.com/facebook/create-react-app/issues/2415
            allChunks: true,
          })
        ];
      } else {
        conf.plugins = [
          ...conf.plugins,
          new MiniCssExtractPlugin({
            filename: 'uiw.css',
            allChunks: true,
          })
        ];
      }
    }
    return conf;
  },
};
