import { formatter, Divider, Tag, Icon } from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/formatter/README.md';
  dependencies = { formatter, Divider, Tag, Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/formatter/README.md');
    return md.default || md;
  }
}
