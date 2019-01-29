import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getRouterData } from './common/router';
import RoutersController from './Router';
import { store } from './store';
import './styles/index.less';

const RoutersContainer = withRouter(({ history: historyData, location }) => {
  const routerData = getRouterData();
  const resetProps = {
    location,
    history: historyData,
    routerData,
  };
  return (
    <RoutersController resetProps={resetProps} />
  );
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RoutersContainer />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
