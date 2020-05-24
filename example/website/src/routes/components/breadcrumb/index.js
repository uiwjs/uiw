import { Breadcrumb, Icon, Divider } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-breadcrumb/README.md';
  dependencies = { Breadcrumb, Icon, Divider };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-breadcrumb/README.md');
    return md.default || md;
  }
}
