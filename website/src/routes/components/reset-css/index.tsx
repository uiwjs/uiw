import data from './README.md';
import Markdown from '../../../components/Markdown/Markdown';

export default function Page() {
  return <Markdown {...data} path="https://github.com/uiwjs/reset-css/blob/master/README.md" />;
}
