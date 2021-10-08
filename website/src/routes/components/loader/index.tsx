import React from 'react';
import { Loader, Row, Col, Message, Card, Icon, Button } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-loader/README.md"
      dependencies={{ ...React, Loader, Row, Col, Message, Card, Icon, Button }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-loader/README.md');
        return md.default || md;
      }}
    />
  );
}
