import { Select, Row, Col, Button } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/select/README.md';
  dependencies = { Select, Row, Col, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/select/README.md');
    return md.default || md;
  }
}
