import { Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/divider/index.md';
  dependencies = { Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/divider/index.md');
    return md.default || md;
  }
}
