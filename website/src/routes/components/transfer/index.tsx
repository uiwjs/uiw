import React from 'react';
import { Form, Button, TreeChecked, Transfer, Row, Col, Card, Icon } from 'uiw';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-search-tree/README.md"
    dependencies={{ Form, Button, TreeChecked, Transfer, Row, Col, Card, Icon, React }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-transfer/README.md');
      return md.default || md;
    }}
  />
);
