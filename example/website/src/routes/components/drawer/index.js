import { Drawer, ButtonGroup, Button } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/drawer/README.md';
  dependencies = { Drawer, ButtonGroup, Button };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-drawer/README.md');
    return md.default || md;
  }
}
