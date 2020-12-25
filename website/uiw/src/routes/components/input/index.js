import React from 'react';
import { Divider, Input, Form, Notify, Button, Tag, Row, Col } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-input/README.md"
      dependencies={{ Divider, Input, Form, Notify, Button, Tag, Row, Col }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-input/README.md');
        return md.default || md;
      }}
    />
  );
}
