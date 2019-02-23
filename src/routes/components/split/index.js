import { Split, Button, Menu } from 'uiw';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/split/README.md';
  dependencies = { Split, Button, Menu };
  async renderPage() {
    const md = await import('../../../../packages/core/src/split/README.md');
    return md.default || md;
  }
}
