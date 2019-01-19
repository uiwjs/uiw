import { Badge, Icon } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/badge/README.md';
  dependencies = { Badge, Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/badge/README.md');
    return md.default || md;
  }
}
