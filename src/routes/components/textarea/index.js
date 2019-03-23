import { Textarea, Divider, Icon, Form, Row, Col, Button, Notify } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/textarea/README.md';
  dependencies = { Textarea, Divider, Icon, Form, Row, Col, Button, Notify };
  async renderPage() {
    const md = await import('../../../../packages/core/src/textarea/README.md');
    return md.default || md;
  }
}
