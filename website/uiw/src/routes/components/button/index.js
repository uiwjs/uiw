import { Icon, Divider, Button, ButtonGroup, Row, Col } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-button/README.md';
  dependencies = { Icon, Divider, Button, ButtonGroup, Row, Col };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-button/README.md');
    return md.default || md;
  }
}
