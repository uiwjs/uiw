import React from 'react';
import * as uiw from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/react-layout/edit/main/core/README-zh.md"
      dependencies={{ ...uiw }}
      renderPage={async () => {
        const md = await import('@uiw/react-layout/README-zh.md');
        return md.default || md;
      }}
    />
  );
}
