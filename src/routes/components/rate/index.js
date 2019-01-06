import { Rate, Icon, Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/rate/index.md';
  dependencies = { Rate, Icon, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/rate/index.md');
    return md.default || md;
  }
}
