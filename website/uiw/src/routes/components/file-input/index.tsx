import React from 'react';
import { FileInput } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-file-input/README.md"
      dependencies={{ FileInput }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-file-input/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
