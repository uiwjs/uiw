import { BackTop, Button } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/back-top/index.md';
  dependencies = { BackTop, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/back-top/index.md');
    return md.default || md;
  }
}
