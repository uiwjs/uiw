import { Collapse, Button, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/collapse/README.md';
  dependencies = { Collapse, Button, Icon };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-collapse/README.md');
    return md.default || md;
  }
}
