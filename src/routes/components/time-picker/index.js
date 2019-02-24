import { TimePicker, Row, Col } from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/time-picker/README.md';
  dependencies = { TimePicker, Row, Col };
  async renderPage() {
    const md = await import('../../../../packages/core/src/time-picker/README.md');
    return md.default || md;
  }
}
