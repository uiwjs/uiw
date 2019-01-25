import { Textarea, Divider, Icon } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/textarea/README.md';
  dependencies = { Textarea, Divider, Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/textarea/README.md');
    return md.default || md;
  }
}
