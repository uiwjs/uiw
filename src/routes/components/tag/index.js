import { Tag, Divider, Icon } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/tag/index.md';
  dependencies = { Tag, Divider, Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/tag/index.md');
    return md.default || md;
  }
}
