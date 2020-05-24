import { Badge, Divider, Row, Col, Avatar, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-badge/README.md';
  dependencies = { Badge, Divider, Row, Col, Avatar, Icon };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-badge/README.md');
    return md.default || md;
  }
}
