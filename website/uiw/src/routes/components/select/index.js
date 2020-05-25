import { Select, Form, Notify, Row, Col, Button, SearchSelect } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-select/README.md';
  dependencies = { Select, Form, Notify, Row, Col, Button, SearchSelect };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-select/README.md');
    return md.default || md;
  }
}
