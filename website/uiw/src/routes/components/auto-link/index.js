import React from 'react';
import { AutoLink } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-auto-link/README.md"
      dependencies={{ AutoLink }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-auto-link/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
