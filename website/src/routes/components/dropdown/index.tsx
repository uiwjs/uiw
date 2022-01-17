import React from 'react';
import { Dropdown, Divider, Menu, Button, ButtonGroup, Icon } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-dropdown/README.md"
      dependencies={{ Dropdown, Divider, Menu, Button, ButtonGroup, Icon }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-dropdown/README.md');
        return md.default || md;
      }}
    />
  );
}
