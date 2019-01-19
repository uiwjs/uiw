import { Card, Icon } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/card/README.md';
  dependencies = { Card, Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/card/README.md');
    return md.default || md;
  }
}
