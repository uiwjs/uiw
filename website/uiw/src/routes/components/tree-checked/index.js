import React from 'react';
import { TreeChecked, Row, Col, Card, Icon } from 'uiw';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-tree-checked/README.md"
    dependencies={{ TreeChecked, Row, Col, Card, Icon }}
    renderPage={async () => {
      const md = await import(
        'uiw/node_modules/@uiw/react-tree-checked/README.md'
      );
      return md.default || md;
    }}
  />
);
