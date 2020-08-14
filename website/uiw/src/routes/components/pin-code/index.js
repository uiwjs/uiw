import React from 'react';
import { Divider, PinCode, Form, Row, Col, Icon, Button, Notify } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-pin-code/README.md"
      dependencies={{ Divider, PinCode, Form, Row, Col, Icon, Button, Notify }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-pin-code/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
