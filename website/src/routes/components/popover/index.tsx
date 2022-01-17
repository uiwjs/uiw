import React from 'react';
import { Popover, Button, Input, Card } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-popover/README.md"
      dependencies={{ Popover, Button, Input, Card }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-popover/README.md');
        return md.default || md;
      }}
    />
  );
}
