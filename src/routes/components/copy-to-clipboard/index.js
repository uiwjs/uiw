import { CopyToClipboard, Button, Input } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/copy-to-clipboard/index.md';
  dependencies = { CopyToClipboard, Button, Input };
  async renderPage() {
    const md = await import('../../../../packages/core/src/copy-to-clipboard/index.md');
    return md.default || md;
  }
}
