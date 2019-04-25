import { Progress } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/progress/README.md';
  dependencies = { Progress };
  async renderPage() {
    const md = await import('../../../../packages/core/src/progress/README.md');
    return md.default || md;
  }
}
