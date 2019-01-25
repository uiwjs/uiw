import { Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/divider/README.md';
  dependencies = { Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/divider/README.md');
    return md.default || md;
  }
}
