import React from 'react';
import { Select, Form, Notify, Row, Col, Button, SearchSelect } from 'uiw';
import Markdown from '@/components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-select/README.md"
    dependencies={{ Select, Form, Notify, Row, Col, Button, SearchSelect }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-select/README.md');
      return md.default || md;
    }}
  />
);
