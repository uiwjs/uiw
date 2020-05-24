import { Breadcrumb, Icon, Divider } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/breadcrumb/README.md';
  dependencies = { Breadcrumb, Icon, Divider };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-breadcrumb/README.md');
    return md.default || md;
  }
}
