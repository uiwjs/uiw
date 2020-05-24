import { Alert, Button, ButtonGroup } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/alert/README.md';
  dependencies = { Alert, Button, ButtonGroup };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-alert/README.md');
    return md.default || md;
  }
}
