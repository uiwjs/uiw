import { Table, Notify, Button } from 'uiw';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/table/README.md';
  dependencies = { Table, Notify, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/table/README.md');
    return md.default || md;
  }
}
