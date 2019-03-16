import {
  Form, FormItem, Row, Col, Icon, Divider, Button, Input, Checkbox,
  Switch, Radio, RadioGroup, Select, Textarea, Notify, Menu, Dropdown,
} from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/form/README.md';
  dependencies = { Form, FormItem, Row, Col, Icon, Divider, Button, Input, Checkbox, Switch, Radio, RadioGroup, Select, Textarea, Notify, Menu, Dropdown };
  async renderPage() {
    const md = await import('../../../../packages/core/src/form/README.md');
    return md.default || md;
  }
}
