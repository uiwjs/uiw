import { Steps, Icon, Button, Notify, Row, Col } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/steps/README.md';
  dependencies = { Steps, Icon, Button, Notify, Row, Col };
  async renderPage() {
    const md = await import('../../../../packages/core/src/steps/README.md');
    return md.default || md;
  }
}
