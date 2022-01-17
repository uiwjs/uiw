import React from 'react';
import { Message, Divider } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-message/README.md"
      dependencies={{ Message, Divider }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-message/README.md');
        return md.default || md;
      }}
    />
  );
}
