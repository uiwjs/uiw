import { OverlayTrigger, Tooltip, Button, Card, Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/overlay-trigger/README.md';
  dependencies = { OverlayTrigger, Tooltip, Button, Card, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/overlay-trigger/README.md');
    return md.default || md;
  }
}
