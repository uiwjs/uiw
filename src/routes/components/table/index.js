import { Table, Button } from 'uiw';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/table/README.md';
  dependencies = { Table, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/table/README.md');
    return md.default || md;
  }
}
