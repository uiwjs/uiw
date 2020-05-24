import { Portal } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/portal/README.md';
  dependencies = { Portal };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-portal/README.md');
    return md.default || md;
  }
}
