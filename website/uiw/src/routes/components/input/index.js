import { Divider, Input, Button, Tag, Row, Col } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-input/README.md';
  dependencies = { Divider, Input, Button, Tag, Row, Col };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-input/README.md');
    return md.default || md;
  }
}
