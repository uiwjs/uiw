import { Popover, Button, Input, Card } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/popover/README.md';
  dependencies = { Popover, Button, Input, Card };
  async renderPage() {
    const md = await import('../../../../packages/core/src/popover/README.md');
    return md.default || md;
  }
}
