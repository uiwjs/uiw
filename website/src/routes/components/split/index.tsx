import React from 'react';
import { Split, Divider, Button, Menu } from 'uiw';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/react-split/edit/master/README.md"
    dependencies={{ Split, Divider, Button, Menu }}
    renderPage={async () => {
      const md = await import('@uiw/react-split/README.md');
      return md.default || md;
    }}
  />
);
