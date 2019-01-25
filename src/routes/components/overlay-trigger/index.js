import { OverlayTrigger, Card, Button, Switch, Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/overlay-trigger/README.md';
  dependencies = { OverlayTrigger, Card, Button, Switch, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/overlay-trigger/README.md');
    return md.default || md;
  }
}
