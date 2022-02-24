Switch 开关
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-switch/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-switch.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-switch)
[![npm version](https://img.shields.io/npm/v/@uiw/react-switch.svg?label=@uiw/react-switch)](https://npmjs.com/@uiw/react-switch)

表示两种相互对立的状态间的切换，多用于触发「开/关」。选中时的内容支持响应式。

```jsx
import { Switch } from 'uiw';
// or
import Switch from '@uiw/react-switch';
```

### 基本用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Switch } from 'uiw';

const Demo = () => (
  <div>
    <Switch checked style={{ marginRight: 10 }} />
    <Switch style={{ marginRight: 10 }} />
    <Switch data-checked="开" data-unchecked="关">电源</Switch>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```


### Form 中使用 Switch

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Form, Switch, Row, Col, Button, Notify } from 'uiw';

const Demo = () => (
  <Form
    onChange={({ initial, current }) => { }}
    resetOnSubmit={false}
    onSubmitError={(error) => error && error.filed ? { ...error.filed } : null}
    onSubmit={({initial, current}) => {
      console.log('switch::', initial, current)
      const ErrObj = {};
      if(Object.keys(ErrObj).length > 0) {
        const err = new Error();
        err.filed = ErrObj;
        throw err;
      }
    }}
    fields={{
      switch: {
        checked: true,
        initialValue: true,
        label: '请输入内容',
        help: '必选选项！',
        validator: value => !value ? '必填选项！' : null,
        children: <Switch style={{ maxWidth: 200 }} />,
      },
    }}
  >
    {({ fields, state, canSubmit }) => {
      return (
        <div>
          <Row>
            <Col>{fields.switch}</Col>
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

### 设置文字

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Switch } from 'uiw';

const Demo = () => (
  <div>
    <Switch
      data-checked="开"
      data-unchecked="关"
      onChange={(e) => {
        console.log('e', e.target.checked);
      }}
      style={{ marginRight: 10 }}
    />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```


### 禁用状态

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Switch } from 'uiw';

const Demo = () => (
  <div>
    <Switch disabled checked style={{ marginRight: 10 }} />
    <Switch disabled style={{ marginRight: 10 }} />
    <Switch disabled data-checked="开" data-unchecked="关">电源</Switch>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

### 尺寸

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Switch } from 'uiw';

const Demo = () => (
  <div>
    <Switch size="large" style={{ marginRight: 10 }} data-checked="开" data-unchecked="关" />
    <Switch size="large" checked style={{ marginRight: 10 }} />
    <Switch style={{ marginRight: 10 }} />
    <Switch style={{ marginRight: 10 }} data-checked="开" data-unchecked="关" />
    <Switch size="small" data-checked="开" data-unchecked="关">电源</Switch>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

### 控制组件

通过 `checked` 属性改变 `Switch` 组件状态。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Button } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    }
  }
  onChange(e) {
    console.log('~~~:::');
    this.setState({ checked: e.target.checked });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <Switch onChange={this.onChange.bind(this)} checked={this.state.checked} style={{ marginRight: 10 }} />
        <Button
          size="small"
          type="primary"
          onClick={() => {
            this.setState({ checked: !this.state.checked });
          }}
        >
          点击按钮改变 Switch 状态
        </Button>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

## Switch 

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |
| name | 用于表单对应的名称 | String | - |
| checked | 指定当前是否选中 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| onChange | 变化时回调函数 | Function(e:Event) | - |
| data-checked |  选中时的内容 | string/ReactNode | - |
| data-unchecked |  非选中时的内容 | string/ReactNode | - |
| size |  开关大小，可选值：`large` `default` `small` | string | default |
