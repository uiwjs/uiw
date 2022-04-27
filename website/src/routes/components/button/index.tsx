import React from 'react';
import { Icon, Divider, Button, ButtonGroup, Row, Col } from 'uiw';
import Markdown from '../../../components/Markdown';
import i18n from 'react-i18next-config';
import { useEffect } from 'react';

export default function Page({ language }: any) {
  console.log('i18n.language', i18n.language, language);

  const fileSuffix = language ? language + '.' : '';

  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-button/README.md"
      dependencies={{ Icon, Divider, Button, ButtonGroup, Row, Col }}
      renderPage={async () => {
        const md = await import(`uiw/node_modules/@uiw/react-button/README.${fileSuffix}md`);
        return md.default || md;
      }}
    />
  );
}
