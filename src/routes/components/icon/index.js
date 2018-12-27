import { Icon } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/colors/index.md';
  dependencies = { Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/icon/index.md');
    return md.default || md;
  }
}
