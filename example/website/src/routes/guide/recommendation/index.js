import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiwjs.github.io/tree/dev/src/routes/guide/recommendation/README.md';
  async renderPage() {
    const md = await import('./README.md');
    return md.default || md;
  }
}
