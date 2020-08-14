import React from 'react';
import { Layout, Divider } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-layout/README.md"
      dependencies={{ Layout, Divider }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-layout/README.md');
        return md.default || md;
      }}
    />
  );
}
