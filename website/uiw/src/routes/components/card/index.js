import React from 'react';
import { Card, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-card/README.md"
      dependencies={{ Card, Icon }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-card/README.md');
        return md.default || md;
      }}
    />
  );
}
