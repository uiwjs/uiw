import { Badge, Divider, Row, Col, Avatar, Icon } from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/badge/README.md';
  dependencies = { Badge, Divider, Row, Col, Avatar, Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/badge/README.md');
    return md.default || md;
  }
}
