import { Loader, Row, Col, Message, Card, Icon, Button } from 'uiw';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/loader/README.md';
  dependencies = { Loader, Row, Col, Message, Card, Icon, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/loader/README.md');
    return md.default || md;
  }
}
