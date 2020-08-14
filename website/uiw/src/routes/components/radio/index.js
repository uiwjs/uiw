import React from 'react';
import { Radio, RadioGroup, Button, Divider } from 'uiw';
import Markdown from '@/components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-radio/README.md"
    dependencies={{ Radio, RadioGroup, Button, Divider }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-radio/README.md');
      return md.default || md;
    }}
  />
);
