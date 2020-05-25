import { Alert, Button, ButtonGroup } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-alert/README.md';
  dependencies = { Alert, Button, ButtonGroup };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-alert/README.md');
    return md.default || md;
  }
}
