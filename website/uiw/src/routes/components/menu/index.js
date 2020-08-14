import React from 'react';
import { Menu, Row, Col, Switch, Icon, Popover, Button } from 'uiw';
import Markdown from '@/components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-menu/README.md"
      dependencies={{ Menu, Row, Col, Switch, Icon, Popover, Button }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-menu/README.md');
        return md.default || md;
      }}
    />
  );
}
