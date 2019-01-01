import { Checkbox } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/checkbox/index.md';
  dependencies = { Checkbox };
  async renderPage() {
    const md = await import('../../../../packages/core/src/checkbox/index.md');
    return md.default || md;
  }
}
