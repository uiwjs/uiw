// import { Rate, Icon, Divider } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/rate/README.md';
  dependencies = { };
  async renderPage() {
    const md = await import('./README.md');
    return md.default || md;
  }
}
