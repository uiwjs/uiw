import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { useRoutes, HashRouter } from 'react-router-dom';
import '@uiw/reset.css';
import { routes } from './routers';
import './styles/index.less';
import { ThemeContext, reducer, initialState } from './contexts';
import i18n from './react-i18next-config';

const App = () => useRoutes(routes);
export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};
i18n.changeLanguage('cn');
console.log('i18n', i18n);
ReactDOM.render(
  <HashRouter>
    <Provider>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
