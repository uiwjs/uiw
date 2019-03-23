import { FileInput } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/file-input/README.md';
  dependencies = { FileInput };
  async renderPage() {
    const md = await import('../../../../packages/core/src/file-input/README.md');
    return md.default || md;
  }
}
