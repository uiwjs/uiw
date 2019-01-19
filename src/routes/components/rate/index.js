import { Rate, Icon, Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/rate/README.md';
  dependencies = { Rate, Icon, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/rate/README.md');
    return md.default || md;
  }
}
