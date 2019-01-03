import { Form, FormItem, Row, Col, Divider, Button, Input, Checkbox, Switch, Radio, RadioGroup } from '@uiw/core';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/form/index.md';
  dependencies = { Form, FormItem, Row, Col, Divider, Button, Input, Checkbox, Switch, Radio, RadioGroup };
  async renderPage() {
    const md = await import('../../../../packages/core/src/form/index.md');
    return md.default || md;
  }
}
