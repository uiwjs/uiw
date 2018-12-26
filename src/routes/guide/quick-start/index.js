import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  async renderPage() {
    const md = await import('./index.md');
    return md.default || md;
  }
}
