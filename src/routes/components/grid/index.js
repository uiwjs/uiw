import { Col, Row } from 'uiw';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/grid/README.md';
  dependencies = { Col, Row };
  async renderPage() {
    const md = await import('../../../../packages/core/src/grid/README.md');
    return md.default || md;
  }
}
