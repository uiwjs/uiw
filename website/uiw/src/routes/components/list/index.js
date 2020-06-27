import { List } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-list/README.md';
  dependencies = { List };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-list/README.md');
    return md.default || md;
  }
}
