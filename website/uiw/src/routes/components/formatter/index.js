import React from 'react';
import { formatter, Divider, Tag, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/date-formatter/blob/master/README.md"
      dependencies={{ formatter, Divider, Tag, Icon }}
      renderPage={async () => {
        const md = await import('@uiw/formatter/README.md');
        return md.default || md;
      }}
    />
  );
}
