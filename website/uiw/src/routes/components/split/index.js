import { Split, Divider, Button, Menu } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/react-shields/README.md';
  dependencies = { Split, Divider, Button, Menu };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-split/README.md');
    return md.default || md;
  }
}
