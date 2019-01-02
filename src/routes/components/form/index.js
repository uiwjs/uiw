import { Form, FormItem, Row, Col, Button, Input, Checkbox } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/form/index.md';
  dependencies = { Form, FormItem, Row, Col, Button, Input, Checkbox };
  async renderPage() {
    const md = await import('../../../../packages/core/src/form/index.md');
    return md.default || md;
  }
}
