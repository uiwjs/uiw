import { Tree, Row, Col, Card, Icon } from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/tree/README.md';
  dependencies = { Tree, Row, Col, Card, Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/tree/README.md');
    return md.default || md;
  }
}
