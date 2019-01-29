import { BackTop, Button } from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/back-top/README.md';
  dependencies = { BackTop, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/back-top/README.md');
    return md.default || md;
  }
}
