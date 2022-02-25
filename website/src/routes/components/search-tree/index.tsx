import React, { useState } from 'react';
import { Form, Button, TreeChecked, SearchTree, Row, Col, Card, Icon } from 'uiw';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-search-tree/README.md"
    dependencies={{ Form, Button, TreeChecked, SearchTree, Row, Col, Card, Icon, useState }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-search-tree/README.md');
      return md.default || md;
    }}
  />
);
