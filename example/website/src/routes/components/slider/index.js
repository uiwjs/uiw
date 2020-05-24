import { Slider, Divider, Button, Notify, Form, Row, Col } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/slider/README.md';
  dependencies = { Slider, Divider, Button, Notify, Form, Row, Col };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-slider/README.md');
    return md.default || md;
  }
}
