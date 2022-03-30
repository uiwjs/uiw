import React from 'react';
import { Form, Row, Col, Cascader, Button } from 'uiw';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-cascader/README.md"
    dependencies={{ Form, Row, Col, React, Cascader, Button }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-cascader/README.md');
      return md.default || md;
    }}
  />
);
