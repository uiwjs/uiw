import React from 'react';
import { Upload, Button } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-upload/README.md"
      dependencies={{ Upload, Button }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-upload/README.md');
        return md.default || md;
      }}
    />
  );
}
