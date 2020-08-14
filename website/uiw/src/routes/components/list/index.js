import React from 'react';
import { List } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-list/README.md"
      dependencies={{ List }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-list/README.md');
        return md.default || md;
      }}
    />
  );
}
