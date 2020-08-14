import React from 'react';
import { MonthPicker, Button, Notify, Form, Row, Col } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-month-picker/README.md"
      dependencies={{ MonthPicker, Button, Notify, Form, Row, Col }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-month-picker/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
