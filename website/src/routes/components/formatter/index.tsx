import data from '@uiw/formatter/README.md';
import Markdown from '../../../components/Markdown/Markdown';

export default function Page() {
  return <Markdown {...data} path="https://github.com/uiwjs/date-formatter/blob/master/README.md" />;
}
