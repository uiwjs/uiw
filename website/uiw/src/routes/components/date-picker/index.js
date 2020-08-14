import React from 'react';
import { DatePicker } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-date-picker/README.md"
      dependencies={{ DatePicker }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-date-picker/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
