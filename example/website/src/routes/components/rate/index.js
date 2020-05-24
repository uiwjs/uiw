import { Rate, Icon, Divider } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/rate/README.md';
  dependencies = { Rate, Icon, Divider };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-rate/README.md');
    return md.default || md;
  }
}
