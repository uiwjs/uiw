import { Overlay, Button, Icon, Card, Divider } from 'uiw';
import Markdown from '@/components/Markdown';
import './index.less';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-overlay/README.md';
  dependencies = { Overlay, Button, Icon, Card, Divider };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-overlay/README.md');
    return md.default || md;
  }
}
