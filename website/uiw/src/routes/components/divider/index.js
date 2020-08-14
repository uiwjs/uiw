import React from 'react';
import { Divider } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-divider/README.md"
      dependencies={{ Divider }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-divider/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
