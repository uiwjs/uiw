import React from 'react';
import { Affix, Button } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-affix/README.md"
      dependencies={{ Affix, Button }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-affix/README.md');
        return md.default || md;
      }}
    />
  );
}
