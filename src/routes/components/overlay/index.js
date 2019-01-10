import { Overlay, Button, Card, Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/overlay/index.md';
  dependencies = { Overlay, Button, Card, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/overlay/index.md');
    return md.default || md;
  }
}
