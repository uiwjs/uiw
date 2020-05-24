import { Tag, Divider, Dropdown, Checkbox, Menu, Button, Input, Icon, Row, Col } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/packages/react-tag/README.md';
  dependencies = { Tag, Divider, Dropdown, Checkbox, Menu, Button, Input, Icon, Row, Col };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-tag/README.md');
    return md.default || md;
  }
}
