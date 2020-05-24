import { Tabs, Divider } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-tabs/README.md';
  dependencies = { Tabs, Divider };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-tabs/README.md');
    return md.default || md;
  }
}
