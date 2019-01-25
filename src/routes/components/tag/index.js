import { Tag, Divider, Icon } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/tag/README.md';
  dependencies = { Tag, Divider, Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/tag/README.md');
    return md.default || md;
  }
}
