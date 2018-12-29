import { Icon, Avatar, Badge } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/avatar/index.md';
  dependencies = { Icon, Avatar, Badge };
  async renderPage() {
    const md = await import('../../../../packages/core/src/avatar/index.md');
    return md.default || md;
  }
}
