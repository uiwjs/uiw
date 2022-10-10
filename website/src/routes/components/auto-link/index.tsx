import data from '@uiw/react-auto-link/README.md';
import Markdown from '../../../components/Markdown/Markdown';

export default function Page() {
  return <Markdown {...data} path="https://github.com/uiwjs/uiw/tree/master/packages/react-auto-link/README.md" />;
}
