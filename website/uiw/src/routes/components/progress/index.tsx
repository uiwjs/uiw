import React from 'react';
import { Progress } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-progress/README.md"
      dependencies={{ Progress }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-progress/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
