import { Breadcrumb, Icon, Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/breadcrumb/index.md';
  dependencies = { Breadcrumb, Icon, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/breadcrumb/index.md');
    return md.default || md;
  }
}
