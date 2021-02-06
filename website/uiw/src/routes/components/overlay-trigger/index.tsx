import React from 'react';
import { OverlayTrigger, Card, Button, Switch, Divider } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-overlay-trigger/README.md"
      dependencies={{ OverlayTrigger, Card, Button, Switch, Divider }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-overlay-trigger/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
