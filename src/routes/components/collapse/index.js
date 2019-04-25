import { Collapse, Button, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/collapse/README.md';
  dependencies = { Collapse, Button, Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/collapse/README.md');
    return md.default || md;
  }
}
