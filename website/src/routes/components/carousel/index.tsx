import React from 'react';
import { Carousel, Row, Col } from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-carousel/README.md"
      dependencies={{ Carousel, React, Row, Col }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-carousel/README.md');
        return md.default || md;
      }}
    />
  );
}
