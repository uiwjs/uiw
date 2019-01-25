import { Popover, Button, Card } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/popover/README.md';
  dependencies = { Popover, Button, Card };
  async renderPage() {
    const md = await import('../../../../packages/core/src/popover/README.md');
    return md.default || md;
  }
}
