import { Collapse, Button, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-collapse/README.md';
  dependencies = { Collapse, Button, Icon };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-collapse/README.md');
    return md.default || md;
  }
}
