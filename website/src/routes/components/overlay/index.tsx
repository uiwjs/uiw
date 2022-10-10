import './index.less';

import data from '@uiw/react-overlay/README.md';
import Markdown from '../../../components/Markdown/Markdown';

export default function Page() {
  return <Markdown {...data} path="https://github.com/uiwjs/uiw/tree/master/packages/react-overlay/README.md" />;
}
