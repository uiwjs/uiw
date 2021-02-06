import React from 'react';
import { TimePicker, formatter, Notify, Button, Form, Row, Col } from 'uiw';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-time-picker/README.md"
    dependencies={{ TimePicker, formatter, Notify, Button, Form, Row, Col }}
    renderPage={async () => {
      const md = await import(
        'uiw/node_modules/@uiw/react-time-picker/README.md'
      );
      return md.default || md;
    }}
  />
);
