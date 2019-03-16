import { Tag, Divider, Dropdown, Checkbox, Menu, Button, Icon, Row, Col } from 'uiw';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/tag/README.md';
  dependencies = { Tag, Divider, Dropdown, Checkbox, Menu, Button, Icon, Row, Col };
  async renderPage() {
    const md = await import('../../../../packages/core/src/tag/README.md');
    return md.default || md;
  }
}
