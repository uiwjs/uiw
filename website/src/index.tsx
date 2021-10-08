import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { History } from 'history';
import { StaticContext } from 'react-router';
import { Provider } from 'react-redux';
import '@uiw/reset.css';
import { getRouterData } from './common/router';
import RoutersController from './Router';
import { store } from './store';
import './styles/index.less';

export type DefaultProps = React.PropsWithChildren<
  RouteComponentProps<any, StaticContext, History>
> & {
  routerData: typeof getRouterData;
};

const RoutersContainer = withRouter((props) => {
  const routerData = getRouterData;
  const resetProps: DefaultProps = {
    ...props,
    routerData,
  };
  return <RoutersController {...resetProps} />;
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RoutersContainer />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
