import { Checkbox, Button, Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/checkbox/index.md';
  dependencies = { Checkbox, Button, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/checkbox/index.md');
    return md.default || md;
  }
}
