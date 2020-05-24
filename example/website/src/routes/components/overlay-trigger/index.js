import { OverlayTrigger, Card, Button, Switch, Divider } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/overlay-trigger/README.md';
  dependencies = { OverlayTrigger, Card, Button, Switch, Divider };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-overlay-trigger/README.md');
    return md.default || md;
  }
}
