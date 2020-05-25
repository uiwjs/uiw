import {
  Modal, ButtonGroup, Button, Notify,
  Form, Input, Checkbox, Switch, RadioGroup, Radio, Textarea, Row, Col,
} from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-modal/README.md';
  dependencies = { Modal, ButtonGroup, Button, Notify, Form, Input, Checkbox, Switch, RadioGroup, Radio, Textarea, Row, Col };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-modal/README.md');
    return md.default || md;
  }
}
