import { Message } from 'uiw';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/message/README.md';
  dependencies = { Message };
  async renderPage() {
    const md = await import('../../../../packages/core/src/message/README.md');
    return md.default || md;
  }
}
