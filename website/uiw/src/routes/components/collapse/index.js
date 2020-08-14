import React from 'react';
import { Collapse, Button, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-collapse/README.md"
      dependencies={{ Collapse, Button, Icon }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-collapse/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
