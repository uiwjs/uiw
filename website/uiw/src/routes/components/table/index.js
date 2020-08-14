import React from 'react';
import { Table, Notify, Button, Checkbox, Pagination, Loader } from 'uiw';
import Markdown from '@/components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-table/README.md"
    dependencies={{ Table, Notify, Button, Checkbox, Pagination, Loader }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-table/README.md');
      return md.default || md;
    }}
  />
);
