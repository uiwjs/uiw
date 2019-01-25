import { Icon } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/colors/README.md';
  dependencies = { Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/icon/README.md');
    return md.default || md;
  }
}
