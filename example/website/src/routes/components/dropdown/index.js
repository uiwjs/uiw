import { Dropdown, Divider, Menu, Button, ButtonGroup, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/dropdown/README.md';
  dependencies = { Dropdown, Divider, Menu, Button, ButtonGroup, Icon };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-dropdown/README.md');
    return md.default || md;
  }
}
