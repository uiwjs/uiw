import React from 'react';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/website/uiw/src/routes/guide/docs/README.md"
    renderPage={async () => {
      const md = await import('./README.md');
      return md.default || md;
    }}
  />
);
