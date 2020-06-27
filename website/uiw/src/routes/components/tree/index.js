import { Tree, Row, Col, Card, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-tree/README.md';
  dependencies = { Tree, Row, Col, Card, Icon };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-tree/README.md');
    return md.default || md;
  }
}
