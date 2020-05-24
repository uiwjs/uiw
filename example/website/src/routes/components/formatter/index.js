import { formatter, Divider, Tag, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/formatter/README.md';
  dependencies = { formatter, Divider, Tag, Icon };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/formatter/README.md');
    return md.default || md;
  }
}
