import React from 'react';
import { Tooltip, OverlayTrigger, Switch, Button, Input, Divider } from 'uiw';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-tooltip/README.md"
    dependencies={{ Tooltip, OverlayTrigger, Switch, Button, Input, Divider }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-tooltip/README.md');
      return md.default || md;
    }}
  />
);
