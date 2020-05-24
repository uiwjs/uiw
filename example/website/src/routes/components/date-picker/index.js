import { DatePicker } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/date-picker/README.md';
  dependencies = { DatePicker };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-date-picker/README.md');
    return md.default || md;
  }
}
