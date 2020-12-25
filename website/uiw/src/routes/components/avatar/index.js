import React from 'react';
import { Icon, Avatar, Badge } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-avatar/README.md"
      dependencies={{ Icon, Avatar, Badge }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-avatar/README.md');
        return md.default || md;
      }}
    />
  );
}
