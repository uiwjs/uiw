import data from '@uiw/react-copy-to-clipboard/README.md';
import Markdown from '../../../components/Markdown/Markdown';

export default function Page() {
  return (
    <Markdown {...data} path="https://github.com/uiwjs/uiw/tree/master/packages/react-copy-to-clipboard/README.md" />
  );
}
