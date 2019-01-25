import { Alert, Button, ButtonGroup } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/alert/README.md';
  dependencies = { Alert, Button, ButtonGroup };
  async renderPage() {
    const md = await import('../../../../packages/core/src/alert/README.md');
    return md.default || md;
  }
}
