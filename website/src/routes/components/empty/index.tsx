import React from 'react';
import { Empty, Button } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-empty/README.md"
      dependencies={{ Empty, Button }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-empty/README.md');
        return md.default || md;
      }}
    />
  );
}
