import { Icon, Divider, Button, ButtonGroup, Row, Col } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/button/README.md';
  dependencies = { Icon, Divider, Button, ButtonGroup, Row, Col };
  async renderPage() {
    const md = await import('../../../../packages/core/src/button/README.md');
    return md.default || md;
  }
}
