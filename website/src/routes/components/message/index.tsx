import data from '@uiw/react-message/README.md';
import Markdown from '../../../components/Markdown/Markdown';

export default function Page() {
  return <Markdown {...data} path="https://github.com/uiwjs/uiw/tree/master/packages/react-message/README.md" />;
}
