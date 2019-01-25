import { List } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/list/README.md';
  dependencies = { List };
  async renderPage() {
    const md = await import('../../../../packages/core/src/list/README.md');
    return md.default || md;
  }
}
