import { Steps, Icon, Button, Notify, Row, Col } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-steps/README.md';
  dependencies = { Steps, Icon, Button, Notify, Row, Col };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-steps/README.md');
    return md.default || md;
  }
}
