import React from 'react';
import { Tabs, Divider } from 'uiw';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-tabs/README.md"
    dependencies={{ Tabs, Divider }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-tabs/README.md');
      return md.default || md;
    }}
  />
);
