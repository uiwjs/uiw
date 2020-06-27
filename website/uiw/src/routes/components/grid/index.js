import { Col, Row } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-grid/README.md';
  dependencies = { Col, Row };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-grid/README.md');
    return md.default || md;
  }
}
