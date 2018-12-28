import { Card } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/card/index.md';
  dependencies = { Card };
  async renderPage() {
    const md = await import('../../../../packages/core/src/card/index.md');
    return md.default || md;
  }
}
