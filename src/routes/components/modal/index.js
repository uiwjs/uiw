import {
  Modal, ButtonGroup, Button, Notify,
  Form, Input, Checkbox, Switch, RadioGroup, Radio, Textarea, Row, Col,
} from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/modal/README.md';
  dependencies = { Modal, ButtonGroup, Button, Notify, Form, Input, Checkbox, Switch, RadioGroup, Radio, Textarea, Row, Col };
  async renderPage() {
    const md = await import('../../../../packages/core/src/modal/README.md');
    return md.default || md;
  }
}
