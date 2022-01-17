import React from 'react';
import { Breadcrumb, Icon, Divider } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-breadcrumb/README.md"
      dependencies={{ Breadcrumb, Icon, Divider }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-breadcrumb/README.md');
        return md.default || md;
      }}
    />
  );
}
