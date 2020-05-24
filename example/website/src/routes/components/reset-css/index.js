// import { Rate, Icon, Divider } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-rate/README.md';
  dependencies = { };
  async renderPage() {
    const md = await import('./README.md');
    return md.default || md;
  }
}
