import React from 'react';
import { Descriptions, Divider, Badge, Radio, RadioGroup } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-descriptions/README.md"
      dependencies={{ Descriptions, Divider, Badge, Radio, RadioGroup }}
      renderPage={async () => {
        const md = await import(
          'uiw/node_modules/@uiw/react-descriptions/README.md'
        );
        return md.default || md;
      }}
    />
  );
}
