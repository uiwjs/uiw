import { Form, Row, Col, Button, Notify, SearchSelect } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/search-select/README.md';
  dependencies = { Form, Row, Col, Button, Notify, SearchSelect };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-search-select/README.md');
    return md.default || md;
  }
}
