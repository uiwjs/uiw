import React from 'react';
import Markdown from '../../../components/Markdown';
import { useFileSuffix } from 'components/useMdData';
export default function Page() {
  const fileSuffix = useFileSuffix();

  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/website/src/routes/components/colors/README.md"
      renderPage={async () => {
        const md = await import(`./README${fileSuffix}.md`);
        return md.default || md;
      }}
    />
  );
}
