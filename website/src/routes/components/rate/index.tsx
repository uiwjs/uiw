import React from 'react';
import {
  Rate,
  Radio,
  RadioGroup,
  Icon,
  Divider,
  Form,
  Row,
  Col,
  Button,
  Notify,
} from 'uiw';
import Markdown from '../../../components/Markdown';

export default () => (
  <Markdown
    path="https://github.com/uiwjs/uiw/tree/master/packages/react-rate/README.md"
    dependencies={{
      Rate,
      Radio,
      RadioGroup,
      Icon,
      Divider,
      Form,
      Row,
      Col,
      Button,
      Notify,
    }}
    renderPage={async () => {
      const md = await import('uiw/node_modules/@uiw/react-rate/README.md');
      return md.default || md;
    }}
  />
);
