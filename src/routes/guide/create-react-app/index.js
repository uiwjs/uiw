import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/guide/create-react-app/index.md';
  async renderPage() {
    const md = await import('./index.md');
    return md.default || md;
  }
}
