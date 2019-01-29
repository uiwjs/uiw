import { Portal } from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/portal/README.md';
  dependencies = { Portal };
  async renderPage() {
    const md = await import('../../../../packages/core/src/portal/README.md');
    return md.default || md;
  }
}
