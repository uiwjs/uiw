import React from 'react';
import { Icon, CopyToClipboard, Notify, Input } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-icon/README.md"
      dependencies={{ Icon, CopyToClipboard, Notify, Input }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-icon/README.md');
        return md.default || md;
      }}
    />
  );
}
