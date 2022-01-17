import { Configuration } from 'webpack';
import { LoaderConfOptions } from 'kkt';
import reactLibrary from '@kkt/react-library';
import lessModules from '@kkt/less-modules';
import pkg from './package.json';

export default (conf: Configuration, env: string, options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  conf = reactLibrary(conf, env, {
    ...options,
    ...pkg,
    name: 'uiw',
    main: 'dist/uiw.js',
    // webpack externals options
    dependencies: {
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
    },
  });
  return conf;
};
