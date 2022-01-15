import React from 'react';
import { CopyToClipboard, Button, Input } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-copy-to-clipboard/README.md"
      dependencies={{ CopyToClipboard, Button, Input }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-copy-to-clipboard/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
