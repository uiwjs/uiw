import { Icon, CopyToClipboard, Notify, Input } from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/colors/README.md';
  dependencies = { Icon, CopyToClipboard, Notify, Input };
  async renderPage() {
    const md = await import('../../../../packages/core/src/icon/README.md');
    return md.default || md;
  }
}
