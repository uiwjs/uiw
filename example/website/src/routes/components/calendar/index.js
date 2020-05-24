import { Calendar, Badge } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-calendar/README.md';
  dependencies = { Calendar, Badge };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-calendar/README.md');
    return md.default || md;
  }
}
