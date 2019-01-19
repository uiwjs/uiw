import { Progress } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/progress/README.md';
  dependencies = { Progress };
  async renderPage() {
    const md = await import('../../../../packages/core/src/progress/README.md');
    return md.default || md;
  }
}
