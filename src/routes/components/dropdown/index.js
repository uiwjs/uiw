import { Dropdown, Divider, Menu, Button, ButtonGroup, Icon } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/dropdown/README.md';
  dependencies = { Dropdown, Divider, Menu, Button, ButtonGroup, Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/dropdown/README.md');
    return md.default || md;
  }
}
