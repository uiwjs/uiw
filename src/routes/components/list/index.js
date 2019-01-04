import { List } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/list/index.md';
  dependencies = { List };
  async renderPage() {
    const md = await import('../../../../packages/core/src/list/index.md');
    return md.default || md;
  }
}
