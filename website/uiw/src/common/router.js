import React from 'react';
import dynamic from 'react-dynamic-loadable';
import { store } from '../store';

// wrapper of dynamic
const dynamicWrapper = (models, component) =>
  dynamic({
    models: () =>
      models.map((m) => {
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
    '/extensions': {
      component: dynamicWrapper([], () => import('../routes/extensions')),
    },
    '/guide/quick-start': {
      component: dynamicWrapper([], () =>
        import('../routes/guide/quick-start'),
      ),
    },
    '/guide/import': {
      component: dynamicWrapper([], () => import('../routes/guide/import')),
    },
    '/guide/create-react-app': {
      component: dynamicWrapper([], () =>
        import('../routes/guide/create-react-app'),
      ),
    },
    '/guide/kkt': {
      component: dynamicWrapper([], () => import('../routes/guide/kkt')),
    },
    '/guide/docs': {
      component: dynamicWrapper([], () => import('../routes/guide/docs')),
    },
    '/guide/vscode': {
      component: dynamicWrapper([], () => import('../routes/guide/vscode')),
    },
    '/guide/changelog': {
      component: dynamicWrapper([], () => import('../routes/guide/changelog')),
    },
    '/guide/recommendation': {
      component: dynamicWrapper([], () =>
        import('../routes/guide/recommendation'),
      ),
    },
    '/components/colors': {
      component: dynamicWrapper([], () =>
        import('../routes/components/colors'),
      ),
    },
    '/components/reset-css': {
      component: dynamicWrapper([], () =>
        import('../routes/components/reset-css'),
      ),
    },
    '/components/alert': {
      component: dynamicWrapper([], () => import('../routes/components/alert')),
    },
    '/components/auto-link': {
      component: dynamicWrapper([], () =>
        import('../routes/components/auto-link'),
      ),
    },
    '/components/avatar': {
      component: dynamicWrapper([], () =>
        import('../routes/components/avatar'),
      ),
    },
    '/components/affix': {
      component: dynamicWrapper([], () => import('../routes/components/affix')),
    },
    '/components/calendar': {
      component: dynamicWrapper([], () =>
        import('../routes/components/calendar'),
      ),
    },
    '/components/checkbox': {
      component: dynamicWrapper([], () =>
        import('../routes/components/checkbox'),
      ),
    },
    '/components/copy-to-clipboard': {
      component: dynamicWrapper([], () =>
        import('../routes/components/copy-to-clipboard'),
      ),
    },
    '/components/collapse': {
      component: dynamicWrapper([], () =>
        import('../routes/components/collapse'),
      ),
    },
    '/components/card': {
      component: dynamicWrapper([], () => import('../routes/components/card')),
    },
    '/components/descriptions': {
      component: dynamicWrapper([], () =>
        import('../routes/components/descriptions'),
      ),
    },
    '/components/loader': {
      component: dynamicWrapper([], () =>
        import('../routes/components/loader'),
      ),
    },
    '/components/icon': {
      component: dynamicWrapper([], () => import('../routes/components/icon')),
    },
    '/components/divider': {
      component: dynamicWrapper([], () =>
        import('../routes/components/divider'),
      ),
    },
    '/components/drawer': {
      component: dynamicWrapper([], () =>
        import('../routes/components/drawer'),
      ),
    },
    '/components/date-picker': {
      component: dynamicWrapper([], () =>
        import('../routes/components/date-picker'),
      ),
    },
    '/components/date-input': {
      component: dynamicWrapper([], () =>
        import('../routes/components/date-input'),
      ),
    },
    '/components/dropdown': {
      component: dynamicWrapper([], () =>
        import('../routes/components/dropdown'),
      ),
    },
    '/components/badge': {
      component: dynamicWrapper([], () => import('../routes/components/badge')),
    },
    '/components/progress': {
      component: dynamicWrapper([], () =>
        import('../routes/components/progress'),
      ),
    },
    '/components/pagination': {
      component: dynamicWrapper([], () =>
        import('../routes/components/pagination'),
      ),
    },
    '/components/pin-code': {
      component: dynamicWrapper([], () =>
        import('../routes/components/pin-code'),
      ),
    },
    '/components/input': {
      component: dynamicWrapper([], () => import('../routes/components/input')),
    },
    '/components/button': {
      component: dynamicWrapper([], () =>
        import('../routes/components/button'),
      ),
    },
    '/components/radio': {
      component: dynamicWrapper([], () => import('../routes/components/radio')),
    },
    '/components/select': {
      component: dynamicWrapper([], () =>
        import('../routes/components/select'),
      ),
    },
    '/components/search-select': {
      component: dynamicWrapper([], () =>
        import('../routes/components/search-select'),
      ),
    },
    '/components/split': {
      component: dynamicWrapper([], () => import('../routes/components/split')),
    },
    '/components/switch': {
      component: dynamicWrapper([], () =>
        import('../routes/components/switch'),
      ),
    },
    '/components/slider': {
      component: dynamicWrapper([], () =>
        import('../routes/components/slider'),
      ),
    },
    '/components/grid': {
      component: dynamicWrapper([], () => import('../routes/components/grid')),
    },
    '/components/form': {
      component: dynamicWrapper([], () => import('../routes/components/form')),
    },
    '/components/file-input': {
      component: dynamicWrapper([], () =>
        import('../routes/components/file-input'),
      ),
    },
    '/components/breadcrumb': {
      component: dynamicWrapper([], () =>
        import('../routes/components/breadcrumb'),
      ),
    },
    '/components/list': {
      component: dynamicWrapper([], () => import('../routes/components/list')),
    },
    '/components/layout': {
      component: dynamicWrapper([], () =>
        import('../routes/components/layout'),
      ),
    },
    '/components/notify': {
      component: dynamicWrapper([], () =>
        import('../routes/components/notify'),
      ),
    },
    '/components/tree': {
      component: dynamicWrapper([], () => import('../routes/components/tree')),
    },
    '/components/tree-checked': {
      component: dynamicWrapper([], () =>
        import('../routes/components/tree-checked'),
      ),
    },
    '/components/tag': {
      component: dynamicWrapper([], () => import('../routes/components/tag')),
    },
    '/components/tabs': {
      component: dynamicWrapper([], () => import('../routes/components/tabs')),
    },
    '/components/tooltip': {
      component: dynamicWrapper([], () =>
        import('../routes/components/tooltip'),
      ),
    },
    '/components/table': {
      component: dynamicWrapper([], () => import('../routes/components/table')),
    },
    '/components/time-picker': {
      component: dynamicWrapper([], () =>
        import('../routes/components/time-picker'),
      ),
    },
    '/components/rate': {
      component: dynamicWrapper([], () => import('../routes/components/rate')),
    },
    '/components/overlay': {
      component: dynamicWrapper([], () =>
        import('../routes/components/overlay'),
      ),
    },
    '/components/back-top': {
      component: dynamicWrapper([], () =>
        import('../routes/components/back-top'),
      ),
    },
    '/components/portal': {
      component: dynamicWrapper([], () =>
        import('../routes/components/portal'),
      ),
    },
    '/components/overlay-trigger': {
      component: dynamicWrapper([], () =>
        import('../routes/components/overlay-trigger'),
      ),
    },
    '/components/popover': {
      component: dynamicWrapper([], () =>
        import('../routes/components/popover'),
      ),
    },
    '/components/message': {
      component: dynamicWrapper([], () =>
        import('../routes/components/message'),
      ),
    },
    '/components/month-picker': {
      component: dynamicWrapper([], () =>
        import('../routes/components/month-picker'),
      ),
    },
    '/components/textarea': {
      component: dynamicWrapper([], () =>
        import('../routes/components/textarea'),
      ),
    },
    '/components/modal': {
      component: dynamicWrapper([], () => import('../routes/components/modal')),
    },
    '/components/formatter': {
      component: dynamicWrapper([], () =>
        import('../routes/components/formatter'),
      ),
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
