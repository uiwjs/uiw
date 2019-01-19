import { Col, Row } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/grid/README.md';
  dependencies = { Col, Row };
  async renderPage() {
    const md = await import('../../../../packages/core/src/grid/README.md');
    return md.default || md;
  }
}
