import { Textarea, Divider, Icon, Form, Row, Col, Button, Notify } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-textarea/README.md';
  dependencies = { Textarea, Divider, Icon, Form, Row, Col, Button, Notify };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-textarea/README.md');
    return md.default || md;
  }
}
