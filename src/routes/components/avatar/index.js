import { Icon, Avatar, Badge } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/avatar/README.md';
  dependencies = { Icon, Avatar, Badge };
  async renderPage() {
    const md = await import('../../../../packages/core/src/avatar/README.md');
    return md.default || md;
  }
}
