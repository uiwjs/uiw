import React from 'react';
import ReactDOM from 'react-dom';
import { Router, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history';
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
    <Router history={history}>
      <RoutersContainer />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
