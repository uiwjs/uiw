import React, { useRef } from 'react';
import {
  Form,
  FormItem,
  Row,
  Col,
  Icon,
  Divider,
  Button,
  Input,
  Checkbox,
  Switch,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  Notify,
  Menu,
  Dropdown,
  TreeChecked,
} from 'uiw';
import Markdown from '../../../components/Markdown';

export default function Page() {
  return (
    <Markdown
      path="https://github.com/uiwjs/uiw/tree/master/packages/react-form/README.md"
      dependencies={{
        Form,
        FormItem,
        Row,
        Col,
        Icon,
        Divider,
        Button,
        Input,
        Checkbox,
        Switch,
        Radio,
        RadioGroup,
        Select,
        Textarea,
        Notify,
        Menu,
        TreeChecked,
        Dropdown,
        useRef,
      }}
      renderPage={async () => {
        const md = await import('uiw/node_modules/@uiw/react-form/README.md');
        return md.default || md;
      }}
    />
  );
}
