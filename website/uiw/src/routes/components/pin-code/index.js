import { Divider, PinCode, Form, Row, Col, Icon, Button, Notify } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-pin-code/README.md';
  dependencies = { PinCode, Divider, Form, Row, Col, Icon, Button, Notify };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-pin-code/README.md');
    return md.default || md;
  }
}
