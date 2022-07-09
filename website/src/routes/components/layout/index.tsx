import React from 'react';
import * as uiw from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/react-layout/edit/main/core/README.md"
      dependencies={{ ...uiw }}
      renderPage={async () => {
        const md = await import('@uiw/react-layout/README.md');
        return md.default || md;
      }}
    />
  );
}
