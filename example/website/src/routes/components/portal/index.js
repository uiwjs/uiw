import { Portal } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-portal/README.md';
  dependencies = { Portal };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-portal/README.md');
    return md.default || md;
  }
}
