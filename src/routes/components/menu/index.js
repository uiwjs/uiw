import { Menu, Row, Col, Popover, Button } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/menu/README.md';
  dependencies = { Menu, Row, Col, Popover, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/menu/README.md');
    return md.default || md;
  }
}
