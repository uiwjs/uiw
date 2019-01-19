import { Select, Row, Col } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/select/README.md';
  dependencies = { Select, Row, Col };
  async renderPage() {
    const md = await import('../../../../packages/core/src/select/README.md');
    return md.default || md;
  }
}
