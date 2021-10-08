import React from 'react';
import { Form, Row, Col, Button, Notify, SearchSelect } from 'uiw';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-search-select/README.md"
    dependencies={{ Form, Row, Col, Button, Notify, SearchSelect }}
    renderPage={async () => {
      const md = await import(
        'uiw/node_modules/@uiw/react-search-select/README.md'
      );
      return md.default || md;
    }}
  />
);
