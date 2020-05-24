import { Message, Divider } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/message/README.md';
  dependencies = { Message, Divider };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-message/README.md');
    return md.default || md;
  }
}
