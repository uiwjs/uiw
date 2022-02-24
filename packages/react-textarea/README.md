Textarea 多行文本输入框
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-textarea/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-textarea.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-textarea)
[![npm version](https://img.shields.io/npm/v/@uiw/react-textarea.svg?label=@uiw/react-textarea)](https://npmjs.com/@uiw/react-textarea)

标准的多行文本输入框。

```jsx
import { Textarea } from 'uiw';
// or
import Textarea from '@uiw/react-textarea';
```

### 基础用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Textarea } from 'uiw';

const Demo = () => (
  <div style={{ maxWidth: 300 }}>
    <Textarea placeholder="请输入内容" />
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 在表单中使用

在 [`<Form />`](#/components/form) 表单中应用 [`<Textarea />`](#/components/textarea) 组件

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Row, Col, Textarea, Button, Notify } from 'uiw';

const Demo = () => (
  <div>
    <Form
      onSubmitError={(error) => {
        if (error.filed) {
          return { ...error.filed };
        }
        return null;
      }}
      onSubmit={({initial, current}) => {
        const errorObj = {};
        if (!current.commit) {
          errorObj.commit = '内容为空，请输入内容';
        }
        if(Object.keys(errorObj).length > 0) {
          const err = new Error();
          err.filed = errorObj;
          Notify.error({ title: '提交失败！', description: '请确认提交表单是否正确！' });
          throw err;
        }
        Notify.success({
          title: '提交成功！',
          description: `表单提交成功，内容为：${current.commit}，将自动填充初始化值！`,
        });
      }}
      fields={{
        commit: {
          children: <Textarea placeholder="请输入说明内容" />
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <div>
            <Row>
              <Col style={{ maxWidth: 300 }}>{fields.commit}</Col>
            </Row>
            <Row>
              <Col fixed>
                <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <pre style={{ padding: 10 }}>
                  {JSON.stringify(state.current, null, 2)}
                </pre>
              </Col>
            </Row>
          </div>
        )
      }}
    </Form>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```


### 禁用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Textarea } from 'uiw';

const Demo = () => (
  <div style={{ maxWidth: 300 }}>
    <Textarea placeholder="请输入内容" disabled />
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### HTML Textarea

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Textarea } from 'uiw';

const Demo = () => (
  <div style={{ maxWidth: 300 }}>
    <textarea className="w-textarea" placeholder="请输入内容" defaultValue="" />
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

## Props

这是一个标准组件，与 HTML 中属性保持一致。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| placeholder | 规定描述文本区域预期值的简短提示。 | String | - |
| disabled | 禁用输入框 | Boolean | - |