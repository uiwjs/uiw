import React from 'react';
import { Overlay, Button, Icon, Card, Divider } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-overlay/README.md"
      dependencies={{ Overlay, Button, Icon, Card, Divider }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-overlay/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
