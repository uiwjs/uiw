import { Affix, Button } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/affix/README.md';
  dependencies = { Affix, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/affix/README.md');
    return md.default || md;
  }
}
