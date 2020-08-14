import React from 'react';
import { Tree, Row, Col, Card, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-tree/README.md"
    dependencies={{ Tree, Row, Col, Card, Icon }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-tree/README.md');
      return md.default || md;
    }}
  />
);
