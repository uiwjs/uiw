import React from 'react';
import { Switch, Divider, Button, Form, Row, Col, Notify } from 'uiw';
import Markdown from '@/components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-switch/README.md"
    dependencies={{ Switch, Divider, Button, Form, Row, Col, Notify }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-switch/README.md');
      return md.default || md;
    }}
  />
);
