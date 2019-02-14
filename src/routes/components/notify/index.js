import { Notify, ButtonGroup, Button } from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/notify/README.md';
  dependencies = { Notify, ButtonGroup, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/notify/README.md');
    return md.default || md;
  }
}
