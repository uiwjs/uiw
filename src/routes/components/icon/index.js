import { Icon } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/colors/README.md';
  dependencies = { Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/icon/README.md');
    return md.default || md;
  }
}
