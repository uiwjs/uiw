import React, { useReducer } from 'react';
import { createRoot } from 'react-dom/client';
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

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <HashRouter>
    <BackToUp style={{ zIndex: 9999 }}>Top</BackToUp>
    <Provider>
      <App />
    </Provider>
  </HashRouter>,
);
