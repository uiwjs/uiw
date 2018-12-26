import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/components/colors/index.md';
  async renderPage() {
    const md = await import('./index.md');
    return md.default || md;
  }
}
