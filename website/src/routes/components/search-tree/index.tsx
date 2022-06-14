import React, { useState, useRef } from 'react';
import { Form, Button, TreeChecked, SearchTree, Row, Col, Card, Icon, Notify } from 'uiw';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-search-tree/README.md"
    dependencies={{ Form, Button, TreeChecked, SearchTree, Row, Col, Card, Icon, Notify, useRef, useState, React }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-search-tree/README.md');
      return md.default || md;
    }}
  />
);
