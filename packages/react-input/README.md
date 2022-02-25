Input 输入框
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-input/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-input.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-input)
[![npm version](https://img.shields.io/npm/v/@uiw/react-input.svg?label=@uiw/react-input)](https://npmjs.com/@uiw/react-input)

通过鼠标或键盘输入内容，是最基础的表单域的包装。

```jsx
import { Input } from 'uiw';
// or
import Input from '@uiw/react-input';
```

### 基础用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Input } from 'uiw';

const Demo = () => (
  <div>
    <Input placeholder="请输入内容" style={{ maxWidth: 200 }} />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

### Form 中使用 Input

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Form, Input, Row, Col, Button, Notify } from 'uiw';

const Demo = () => (
  <Form
    onChange={({ initial, current }) => { }}
    onSubmitError={(error) => {
      console.log('error:', error)
      return error && error.filed ? { ...error.filed } : null;
    }}
    onSubmit={({initial, current}) => {
      if (current.input && current.input.length > 3) {
        Notify.success({
          title: '提交成功！',
          description: `填写：【${current.input.toString()}】！`
        });
      } else {
        Notify.error({ title: '提交失败！', description: '必须长度超过 3 个字符！' });
      }
      const ErrObj = {};
      if (current.input && current.input.length < 4) {
        ErrObj.input = '😆 必须长度超过 3 个字符！';
      }
      if(Object.keys(ErrObj).length > 0) {
        const err = new Error();
        err.filed = ErrObj;
        throw err;
      }
    }}
    fields={{
      input: {
        value: 'www',
        label: '请输入内容',
        help: '必须长度超过 3 个字符！',
        validator: (value = '') => value.length < 4 ? '必填选项！' : null,
        children: <Input placeholder="请输入内容" style={{ maxWidth: 200 }} />,
      },
    }}
  >
    {({ fields, state, canSubmit }) => {
      return (
        <div>
          <Row>
            <Col>{fields.input}</Col>
          </Row>
          <Row>
            <Col>
              <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <pre style={{ padding: 10, marginTop: 10 }}>
                {JSON.stringify(state.current, null, 2)}
              </pre>
            </Col>
          </Row>
        </div>
      );
    }}
  </Form>
);

ReactDOM.render(<Demo />, _mount_);
```

### 插入图标

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Input, Row, Col } from 'uiw';

const stylItem = { margin: 20 };
const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Input preIcon="delete" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input preIcon="tag" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input preIcon="picasa" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input preIcon="like-o" placeholder="请输入内容" />
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 后面插入内容

向后面插入 [`Button`](#/components/button) 或者 [`Tag`](#/components/tag)

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Input, Row, Col, Button, Tag } from 'uiw';

const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Input
          preIcon="like-o"
          placeholder="请输入密码"
          addonAfter={<Button icon="lock" size="small" basic type="light" />}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          placeholder="请输入内容"
          addonAfter={<Tag title="1000" color="#28a745" />}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="search"
          placeholder="请输入内容"
          addonAfter={<Button icon="apple" size="small" type="primary">按钮</Button>}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="primary">按钮</Button>}
        />
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 输入框尺寸

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Input, Row, Col, Tag, Button } from 'uiw';

const Demo = () => (
  <div>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col fixed>
        <Input
          preIcon="like-o"
          size="large"
          placeholder="请输入密码"
          addonAfter={<Button icon="lock" basic type="light" />}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="search"
          placeholder="请输入内容"
          addonAfter={<Button icon="arrow-right" basic size="small" type="light" />}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          size="small"
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="primary">按钮</Button>}
        />
      </Col>
    </Row>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col fixed>
        <Input
          preIcon="like-o"
          size="large"
          placeholder="请输入密码"
          addonAfter={<Tag title="1000" color="#28a745" />}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          placeholder="请输入内容"
          addonAfter={<Tag title="药丸" color="#1C7CEB" color="#40bf16">丸</Tag>}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          size="small"
          placeholder="请输入内容"
          addonAfter={<Tag title="1000" color="#28a745" />}
        />
      </Col>
    </Row>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col fixed>
        <Input
          preIcon="like-o"
          size="large"
          placeholder="请输入密码"
          addonAfter={<Button icon="apple" type="primary">按钮</Button>}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="search"
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="primary">搜索</Button>}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          size="small"
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="primary">按钮</Button>}
        />
      </Col>
    </Row>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col fixed>
        <Input
          preIcon="like-o"
          placeholder="请输入密码"
          addonAfter={<Button size="small" type="light">亮按钮</Button>}
        />
      </Col>
      <Col fixed>
        <Input
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="danger">按钮</Button>}
        />
      </Col>
      <Col fixed>
        <Input
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="warning">按钮</Button>}
        />
      </Col>
    </Row>
    <Row gutter={10}>
      <Col fixed>
        <Input size="small" preIcon="like-o" placeholder="请输入密码" />
      </Col>
      <Col fixed>
        <Input size="small" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input
          size="small"
          preIcon="like-o"
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="warning">按钮</Button>}
        />
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 密码输入框

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Row, Col, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      btnIcon: 'lock',
    }
  }
  onClick() {
    this.setState({
      btnIcon: this.state.btnIcon === 'lock' ? 'unlock' : 'lock',
    })
  }
  render() {
    return (
      <Row gutter={10}>
        <Col fixed>
          <Input
            ref={(instance) => {
              if (instance) {
                console.log('instance:', instance);
              }
            }}
            preIcon="like-o"
            type={this.state.btnIcon === 'lock' ? 'password' : 'text'}
            placeholder="请输入密码"
            addonAfter={<Button icon={this.state.btnIcon} onClick={this.onClick.bind(this)} size="small" basic type="light" />}
          />
        </Col>
      </Row>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

### 输入框被禁用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Icon, Input, Row, Col} from 'uiw';

const stylItem = { margin: 20 };
const Demo = () => (
  <>
    <Row gutter={10}>
      <Col fixed>
        <Input disabled preIcon="delete" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input disabled preIcon="tag" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input
          disabled
          preIcon="picasa"
          placeholder="请输入内容"
          addonAfter={
            <Button icon="close" disabled size="small" basic type="light" />
          }
        />
      </Col>
      <Col fixed>
        <Input disabled preIcon="like-o" placeholder="请输入内容" />
      </Col>
    </Row>
  </>
);
ReactDOM.render(<Demo />, _mount_);
```

## Input

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 绑定值 | String | - |
| disabled | 禁用输入框 | Boolean | `false` |
| preIcon | 输入框`前`面放置图标  | String/ReactNode | - |
| addonAfter | 	带标签的 input，设置后置标签 | String/ReactNode | - |
| size | 指定输入框的尺寸，除了默认的大小外，还提供了 `large`、`small` 和 `default` 三种尺寸。 | String | - |