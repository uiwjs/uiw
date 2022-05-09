import { Icon, Divider, Button, ButtonGroup, Row, Col } from 'uiw';
import Markdown from '../../../components/Markdown';
import { useFileSuffix } from 'components/useMdData';
export default function Page() {
  const fileSuffix = useFileSuffix();

  return (
    <Markdown
      path={`https://github.com/uiwjs/uiw/tree/master/packages/react-button/README${fileSuffix}.md`}
      dependencies={{ Icon, Divider, Button, ButtonGroup, Row, Col }}
      renderPage={async () => {
        const md = await import(`uiw/node_modules/@uiw/react-button/README${fileSuffix}.md`);
        return md.default || md;
      }}
    />
  );
}
