import { Timestamp, Divider, Tag, Icon } from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/timestamp/README.md';
  dependencies = { Timestamp, Divider, Tag, Icon };
  async renderPage() {
    const md = await import('../../../../packages/core/src/timestamp/README.md');
    return md.default || md;
  }
}
