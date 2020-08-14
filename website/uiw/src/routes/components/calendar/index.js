import React from 'react';
import { Calendar, Badge } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-calendar/README.md"
      dependencies={{ Calendar, Badge }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-calendar/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
