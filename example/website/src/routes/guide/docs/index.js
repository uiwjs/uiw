import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'https://github.com/uiwjs/uiw/tree/master/example/website/src/routes/guide/docs/README.md';
  async renderPage() {
    const md = await import('./README.md');
    return md.default || md;
  }
}
