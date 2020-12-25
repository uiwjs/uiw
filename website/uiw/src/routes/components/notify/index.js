import React from 'react';
import { Notify, ButtonGroup, Button } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-notify/README.md"
      dependencies={{ Notify, ButtonGroup, Button }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-notify/README.md');
        return md.default || md;
      }}
    />
  );
}
