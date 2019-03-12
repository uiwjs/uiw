import { Pagination, Divider } from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/pagination/README.md';
  dependencies = { Pagination, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/pagination/README.md');
    return md.default || md;
  }
}
