import { Radio, RadioGroup, Button, Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/radio/README.md';
  dependencies = { Radio, RadioGroup, Button, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/radio/README.md');
    return md.default || md;
  }
}
