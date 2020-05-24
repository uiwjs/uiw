import { Card, Icon } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/card/README.md';
  dependencies = { Card, Icon };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-card/README.md');
    return md.default || md;
  }
}
