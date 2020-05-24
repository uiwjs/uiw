import { Checkbox, Button, Form, Row, Col, Divider } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/checkbox/README.md';
  dependencies = { Checkbox, Button, Form, Row, Col, Divider };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-checkbox/README.md');
    return md.default || md;
  }
}
