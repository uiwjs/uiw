import { Input } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/input/index.md';
  dependencies = { Input };
  async renderPage() {
    const md = await import('../../../../packages/core/src/input/index.md');
    return md.default || md;
  }
}
