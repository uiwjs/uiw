import { Radio, RadioGroup } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/radio/index.md';
  dependencies = { Radio, RadioGroup };
  async renderPage() {
    const md = await import('../../../../packages/core/src/radio/index.md');
    return md.default || md;
  }
}
