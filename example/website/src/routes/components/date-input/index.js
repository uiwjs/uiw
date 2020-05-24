import { DateInput, Notify, Form, Row, Col, Button } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-date-input/README.md';
  dependencies = { DateInput, Notify, Form, Row, Col, Button };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-date-input/README.md');
    return md.default || md;
  }
}
