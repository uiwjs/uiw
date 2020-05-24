import { FileInput } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-file-input/README.md';
  dependencies = { FileInput };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-file-input/README.md');
    return md.default || md;
  }
}
