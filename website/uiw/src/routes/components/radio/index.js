import { Radio, RadioGroup, Button, Divider } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-radio/README.md';
  dependencies = { Radio, RadioGroup, Button, Divider };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-radio/README.md');
    return md.default || md;
  }
}
