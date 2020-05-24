import { Notify, ButtonGroup, Button } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/notify/README.md';
  dependencies = { Notify, ButtonGroup, Button };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-notify/README.md');
    return md.default || md;
  }
}
