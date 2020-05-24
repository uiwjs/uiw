import {
  Form, FormItem, Row, Col, Icon, Divider, Button, Input, Checkbox,
  Switch, Radio, RadioGroup, Select, Textarea, Notify, Menu, Dropdown,
} from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/form/README.md';
  dependencies = { Form, FormItem, Row, Col, Icon, Divider, Button, Input, Checkbox, Switch, Radio, RadioGroup, Select, Textarea, Notify, Menu, Dropdown };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-form/README.md');
    return md.default || md;
  }
}
