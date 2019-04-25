import { Message, Divider } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/message/README.md';
  dependencies = { Message, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/message/README.md');
    return md.default || md;
  }
}
