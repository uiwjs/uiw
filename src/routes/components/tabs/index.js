import { Tabs, Divider } from 'uiw';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/tabs/README.md';
  dependencies = { Tabs, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/tabs/README.md');
    return md.default || md;
  }
}
