import { Popover, Button, Input, Card } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-popover/README.md';
  dependencies = { Popover, Button, Input, Card };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-popover/README.md');
    return md.default || md;
  }
}
