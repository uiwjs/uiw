import { BackTop, Button } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/back-top/README.md';
  dependencies = { BackTop, Button };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-back-top/README.md');
    return md.default || md;
  }
}
