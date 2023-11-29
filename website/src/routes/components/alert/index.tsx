import data from '@uiw/react-alert/README.md';
import Markdown from '../../../components/Markdown/Markdown';

export default function Page() {
  console.log('data', data);
  return <Markdown {...data} path="https://github.com/uiwjs/uiw/tree/master/packages/react-alert/README.md" />;
}
