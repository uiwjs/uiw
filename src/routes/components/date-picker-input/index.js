import { DatePickerInput, Notify, Form, Row, Col, Button } from 'uiw';
import Markdown from '../../../components/Markdown';

export default class Page extends Markdown {
  path = 'packages/core/src/date-picker-input/README.md';
  dependencies = { DatePickerInput, Notify, Form, Row, Col, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/date-picker-input/README.md');
    return md.default || md;
  }
}
