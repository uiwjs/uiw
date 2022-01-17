import React from 'react';
import { DateInput, Notify, Form, Row, Col, Button } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-date-input/README.md"
      dependencies={{ DateInput, Notify, Form, Row, Col, Button }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-date-input/README.md');
        return md.default || md;
      }}
    />
  );
}
