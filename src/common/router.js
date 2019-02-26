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
    '/guide/create-react-app': {
      component: dynamicWrapper([], () => import('../routes/guide/create-react-app')),
    },
    '/guide/kkt': {
      component: dynamicWrapper([], () => import('../routes/guide/kkt')),
    },
    '/guide/docs': {
      component: dynamicWrapper([], () => import('../routes/guide/docs')),
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
    '/components/drawer': {
      component: dynamicWrapper([], () => import('../routes/components/drawer')),
    },
    '/components/date-picker': {
      component: dynamicWrapper([], () => import('../routes/components/date-picker')),
    },
    '/components/date-input': {
      component: dynamicWrapper([], () => import('../routes/components/date-input')),
    },
    '/components/card': {
      component: dynamicWrapper([], () => import('../routes/components/card')),
    },
    '/components/badge': {
      component: dynamicWrapper([], () => import('../routes/components/badge')),
    },
    '/components/progress': {
      component: dynamicWrapper([], () => import('../routes/components/progress')),
    },
    '/components/input': {
      component: dynamicWrapper([], () => import('../routes/components/input')),
    },
    '/components/button': {
      component: dynamicWrapper([], () => import('../routes/components/button')),
    },
    '/components/avatar': {
      component: dynamicWrapper([], () => import('../routes/components/avatar')),
    },
    '/components/radio': {
      component: dynamicWrapper([], () => import('../routes/components/radio')),
    },
    '/components/select': {
      component: dynamicWrapper([], () => import('../routes/components/select')),
    },
    '/components/split': {
      component: dynamicWrapper([], () => import('../routes/components/split')),
    },
    '/components/switch': {
      component: dynamicWrapper([], () => import('../routes/components/switch')),
    },
    '/components/checkbox': {
      component: dynamicWrapper([], () => import('../routes/components/checkbox')),
    },
    '/components/grid': {
      component: dynamicWrapper([], () => import('../routes/components/grid')),
    },
    '/components/form': {
      component: dynamicWrapper([], () => import('../routes/components/form')),
    },
    '/components/file-input': {
      component: dynamicWrapper([], () => import('../routes/components/file-input')),
    },
    '/components/breadcrumb': {
      component: dynamicWrapper([], () => import('../routes/components/breadcrumb')),
    },
    '/components/list': {
      component: dynamicWrapper([], () => import('../routes/components/list')),
    },
    '/components/notify': {
      component: dynamicWrapper([], () => import('../routes/components/notify')),
    },
    '/components/tag': {
      component: dynamicWrapper([], () => import('../routes/components/tag')),
    },
    '/components/tabs': {
      component: dynamicWrapper([], () => import('../routes/components/tabs')),
    },
    '/components/tooltip': {
      component: dynamicWrapper([], () => import('../routes/components/tooltip')),
    },
    '/components/time-picker': {
      component: dynamicWrapper([], () => import('../routes/components/time-picker')),
    },
    '/components/copy-to-clipboard': {
      component: dynamicWrapper([], () => import('../routes/components/copy-to-clipboard')),
    },
    '/components/collapse': {
      component: dynamicWrapper([], () => import('../routes/components/collapse')),
    },
    '/components/rate': {
      component: dynamicWrapper([], () => import('../routes/components/rate')),
    },
    '/components/overlay': {
      component: dynamicWrapper([], () => import('../routes/components/overlay')),
    },
    '/components/back-top': {
      component: dynamicWrapper([], () => import('../routes/components/back-top')),
    },
    '/components/portal': {
      component: dynamicWrapper([], () => import('../routes/components/portal')),
    },
    '/components/overlay-trigger': {
      component: dynamicWrapper([], () => import('../routes/components/overlay-trigger')),
    },
    '/components/popover': {
      component: dynamicWrapper([], () => import('../routes/components/popover')),
    },
    '/components/alert': {
      component: dynamicWrapper([], () => import('../routes/components/alert')),
    },
    '/components/message': {
      component: dynamicWrapper([], () => import('../routes/components/message')),
    },
    '/components/month-picker': {
      component: dynamicWrapper([], () => import('../routes/components/month-picker')),
    },
    '/components/textarea': {
      component: dynamicWrapper([], () => import('../routes/components/textarea')),
    },
    '/components/modal': {
      component: dynamicWrapper([], () => import('../routes/components/modal')),
    },
    '/components/timestamp': {
      component: dynamicWrapper([], () => import('../routes/components/timestamp')),
    },
    '/components/steps': {
      component: dynamicWrapper([], () => import('../routes/components/steps')),
    },
    '/components/menu': {
      component: dynamicWrapper([], () => import('../routes/components/menu')),
    },
  };
  return conf;
};
