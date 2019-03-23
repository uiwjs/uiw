import { Calendar, Badge } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/calendar/README.md';
  dependencies = { Calendar, Badge };
  async renderPage() {
    const md = await import('../../../../packages/core/src/calendar/README.md');
    return md.default || md;
  }
}
