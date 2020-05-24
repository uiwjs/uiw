import { Switch, Divider, Button } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-switch/README.md';
  dependencies = { Switch, Divider, Button };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-switch/README.md');
    return md.default || md;
  }
}
