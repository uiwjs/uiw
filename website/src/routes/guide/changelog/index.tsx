import React from 'react';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/website/src/routes/guide/changelog/README.md"
    renderPage={async () => {
      const md = await import('./README.md');
      return md.default || md;
    }}
  />
);
