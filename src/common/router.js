import React from 'react';
import dynamic from 'react-dynamic-loadable';
import { store } from '../store';

// wrapper of dynamic
const dynamicWrapper = (models, component) => dynamic({
  models: () => models.map((m) => {
    return import(`../models/${m}.js`).then((md) => {
      const modelData = md.default || md;
      store.model({ name: m, ...modelData });
    });
  }),
  component,
  LoadingComponent: () => <span>loading....</span>,
});

export const getRouterData = () => {
  const conf = {
    '/components': {
      component: dynamicWrapper([], () => import('../routes/overview')),
    },
    '/guide/quick-start': {
      component: dynamicWrapper([], () => import('../routes/guide/quick-start')),
    },
    '/guide/changelog': {
      component: dynamicWrapper([], () => import('../routes/guide/changelog')),
    },
    '/guide/recommendation': {
      component: dynamicWrapper([], () => import('../routes/guide/recommendation')),
    },
    '/components/colors': {
      component: dynamicWrapper([], () => import('../routes/components/colors')),
    },
    '/components/layout': {
      component: dynamicWrapper([], () => import('../routes/components/layout')),
    },
    '/components/icon': {
      component: dynamicWrapper([], () => import('../routes/components/icon')),
    },
    '/components/divider': {
      component: dynamicWrapper([], () => import('../routes/components/divider')),
    },
  };
  return conf;
};
