import React from 'react';
import { Badge, Divider, Row, Col, Avatar, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-badge/README.md"
      dependencies={{ Badge, Divider, Row, Col, Avatar, Icon }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-badge/README.md');
        return md.default || md;
      }}
    />
  );
}
