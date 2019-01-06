import { Select, Row, Col } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/select/index.md';
  dependencies = { Select, Row, Col };
  async renderPage() {
    const md = await import('../../../../packages/core/src/select/index.md');
    return md.default || md;
  }
}
