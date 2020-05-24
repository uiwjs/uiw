import { Pagination, Divider } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/pagination/README.md';
  dependencies = { Pagination, Divider };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-pagination/README.md');
    return md.default || md;
  }
}
