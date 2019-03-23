import { DatePicker } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/date-picker/README.md';
  dependencies = { DatePicker };
  async renderPage() {
    const md = await import('../../../../packages/core/src/date-picker/README.md');
    return md.default || md;
  }
}
