import { Switch, Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/switch/index.md';
  dependencies = { Switch, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/switch/index.md');
    return md.default || md;
  }
}
