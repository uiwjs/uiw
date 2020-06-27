import { Loader, Row, Col, Message, Card, Icon, Button } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-loader/README.md';
  dependencies = { Loader, Row, Col, Message, Card, Icon, Button };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-loader/README.md');
    return md.default || md;
  }
}
