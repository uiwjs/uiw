import { Tooltip, OverlayTrigger, Switch, Button, Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/tooltip/README.md';
  dependencies = { Tooltip, OverlayTrigger, Switch, Button, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/tooltip/README.md');
    return md.default || md;
  }
}
