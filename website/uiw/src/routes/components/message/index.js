import { Message, Divider } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-message/README.md';
  dependencies = { Message, Divider };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-message/README.md');
    return md.default || md;
  }
}
