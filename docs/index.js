import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import App from './page';
import Router from './Router';

import './style/base.less';
import '../src/index.less';

render(<AppContainer><Router /></AppContainer>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./Router', () => {
    const Router = require('./Router').default;
    render(<AppContainer><Router /></AppContainer>, document.getElementById('app'));
  });
}
