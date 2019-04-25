import { MonthPicker, Button, Notify, Form, Row, Col } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/month-picker/README.md';
  dependencies = { MonthPicker, Button, Notify, Form, Row, Col };
  async renderPage() {
    const md = await import('../../../../packages/core/src/month-picker/README.md');
    return md.default || md;
  }
}
