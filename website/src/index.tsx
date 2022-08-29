import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { useRoutes, HashRouter } from 'react-router-dom';
import BackToUp from '@uiw/react-back-to-top';
import '@uiw/reset.css';
import { routes } from './routers';
import './styles/index.less';
import { ThemeContext, reducer, initialState } from './contexts';

const App = () => useRoutes(routes);
export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

ReactDOM.render(
  <HashRouter>
    <BackToUp style={{ zIndex: 9999 }}>Top</BackToUp>
    <Provider>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
