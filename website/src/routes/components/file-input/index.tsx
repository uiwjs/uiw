import React, { useRef } from 'react';
import { FileInput, Overlay, Button, Icon, Form, Row, Col } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-file-input/README.md"
      dependencies={{ FileInput, Button, Overlay, Icon, Form, Row, Col, useRef }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-file-input/README.md');
        return md.default || md;
      }}
    />
  );
}
