import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './page';

import './style/base.less';
import '../src/index.less';

render(<AppContainer><App /></AppContainer>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./page', () => {
    const App = require('./page').default;
    render(<AppContainer><App /></AppContainer>, document.getElementById('app'));
  });
}
