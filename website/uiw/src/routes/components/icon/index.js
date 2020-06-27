import { Icon, CopyToClipboard, Notify, Input } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-colors/README.md';
  dependencies = { Icon, CopyToClipboard, Notify, Input };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-icon/README.md');
    return md.default || md;
  }
}
