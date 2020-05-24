import { MonthPicker, Button, Notify, Form, Row, Col } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/month-picker/README.md';
  dependencies = { MonthPicker, Button, Notify, Form, Row, Col };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-month-picker/README.md');
    return md.default || md;
  }
}
