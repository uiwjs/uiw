const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const pkg = require('./package.json');

/**
 * Bundles a minified and unminified version of [uiw] including
 * all it's immediate dependencies (excluding React, ReactDOM, etc)
 */
module.exports = {
  plugins: [
    require.resolve('@kkt/plugin-less'),
  ],
  // Modify the webpack config
  config: (conf, { raw, env, ...other }) => {
    if (env === 'prod' && raw.BUNDLE) {
      conf.entry = './src/index.js';
      conf.output = {
        path: other.appBuildDist,
        // path: path.join(__filename, '..', 'packages', 'core', 'dist'),
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
        if (!conf.optimization) conf.optimization = {};
        conf.optimization.minimizer = [
          new TerserPlugin({
            // Use multi-process parallel running to improve the build speed
            // Default number of concurrent runs: os.cpus().length - 1
            parallel: true,
            // Enable file caching
            cache: true,
            extractComments: {
              condition: 'some',
              filename: () => 'uiw.LICENSE',
              banner: () => {
                return `${pkg.name} ${pkg.version} MIT (c) 2019 kenny wang <wowohoo@qq.com> | https://uiwjs.github.io`;
              },
            },
          }),
          new OptimizeCSSAssetsPlugin()
        ];
        conf.plugins = [
          ...conf.plugins,
          new MiniCssExtractPlugin({
            filename: 'uiw.min.css',
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
