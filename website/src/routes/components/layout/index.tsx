import React from 'react';
import { Layout, Divider } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/react-layout/edit/main/core/README-zh.md"
      dependencies={{ Layout, Divider }}
      renderPage={async () => {
        const md = await import('@uiw/react-layout/README-zh.md');
        return md.default || md;
      }}
    />
  );
}
