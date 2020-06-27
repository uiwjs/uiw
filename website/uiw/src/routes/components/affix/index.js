import { Affix, Button } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-affix/README.md';
  dependencies = { Affix, Button };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-affix/README.md');
    return md.default || md;
  }
}
