import React from 'react';
import { Drawer, ButtonGroup, Button } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-drawer/README.md"
      dependencies={{ Drawer, ButtonGroup, Button }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-drawer/README.md');
        return md.default || md;
      }}
    />
  );
}
