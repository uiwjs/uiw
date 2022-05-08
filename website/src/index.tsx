import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { useRoutes, HashRouter } from 'react-router-dom';
import '@uiw/reset.css';
import { routes } from './routers';
import './styles/index.less';
import { ThemeContext, reducer, initialState } from './contexts';

const App = () => useRoutes(routes);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Provider>
      <App />
    </Provider>
  </HashRouter>,
);
