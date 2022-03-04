import React, { useRef } from 'react';
import Markdown from '../../../components/Markdown';
import { Form, Input, Row, Col, TreeChecked, Slider, Button, Notify } from 'uiw';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-tree-checked/README.md"
    dependencies={{ Form, Input, Row, Col, TreeChecked, Slider, Button, Notify, useRef }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-tree-checked/README.md');
      return md.default || md;
    }}
  />
);
