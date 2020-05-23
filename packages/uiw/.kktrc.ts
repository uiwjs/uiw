import path from 'path';
import { LoaderOneOf, OptionConf } from 'kkt';
import webpack from 'webpack';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

export const loaderOneOf: LoaderOneOf = [
  require.resolve('@kkt/loader-less'),
];

export interface KKTOpts extends OptionConf {
  yargsArgs: OptionConf['yargsArgs'] & {
    bundle: boolean;
    mini: boolean;
  }
}

export default (conf: webpack.Configuration, options: KKTOpts) => {
  if (options.yargsArgs && options.yargsArgs.bundle) {
    const { MiniCssExtractPlugin } = options;
    conf.devtool = false;
    const regexp = /(HtmlWebpackPlugin|InlineChunkHtmlPlugin|InterpolateHtmlPlugin|ModuleNotFoundPlugin|DefinePlugin|ManifestPlugin|IgnorePlugin|GenerateSW|MiniCssExtractPlugin)/;
    conf.plugins = conf.plugins!.map((item) => {
      if (item.constructor && item.constructor.name && regexp.test(item.constructor.name)) {
        return null;
      }
      return item;
    }).filter(Boolean) as webpack.Plugin[];
    conf.entry = path.join(process.cwd(), 'src/index.ts');
    conf.output = {
      path: path.join(process.cwd(), 'dist'),
      futureEmitAssets: true,
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
    console.log('options.isEnvProduction:', options.isEnvProduction)
    conf.optimization = {
      minimize: options.isEnvProduction,
      minimizer: [],
    };
    if (options.yargsArgs && options.yargsArgs.mini) {
      conf.optimization!.minimizer!.push(
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true, // Must be set to true if using source-maps in production
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          }
        }),
      );
      conf.output.filename = 'uiw.min.js';
      conf.plugins = [
        ...(conf.plugins || []),
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: 'uiw.min.css',
          // allChunks: true because we want all css to be included in the main
          // css bundle when doing code splitting to avoid FOUC:
          // https://github.com/facebook/create-react-app/issues/2415
          allChunks: true,
        } as any),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.min\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
          canPrint: true
        })
      ];
    } else {
      conf.optimization!.minimize = false;
      conf.plugins = [
        ...(conf.plugins || []),
        new MiniCssExtractPlugin({
          filename: 'uiw.css',
          allChunks: true,
        } as any)
      ];
    }
  }
  return conf
}
