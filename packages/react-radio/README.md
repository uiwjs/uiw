Radio 单选框
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-radio/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-radio.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-radio)
[![npm version](https://img.shields.io/npm/v/@uiw/react-radio.svg?label=@uiw/react-radio)](https://npmjs.com/@uiw/react-radio)

单选框，在一组备选项中进行单选。

```jsx
import { Radio, RadioButton, RadioGroup } from 'uiw';
// or
import { Radio, RadioButton, RadioGroup } from '@uiw/react-radio';
```

### 基础用法

适用广泛的基础最简单的用法，展示各种状态下的样式。

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Radio, RadioButton } from 'uiw';

export default function Demo() {
  return (
    <div>
      <Radio value="1">Radio</Radio>
      <Radio value="2" checked>选中</Radio>
      <Radio value="3" disabled>禁用</Radio>
      <Radio value="4" checked disabled>选中并禁用</Radio>
      <Radio value="4" checked disabled>选中并禁用</Radio>
      <RadioButton value="5" >RadioButton</RadioButton>
      <RadioButton value="5" checked >RadioButton 选中</RadioButton>
    </div>
  );
}
```

### Form 中使用 Radio

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Form, Radio, RadioGroup, RadioButton, Row, Col, Button, Notify } from 'uiw';

export default function Demo() {
  return (
    <Form
      onChange={({ initial, current }) => {}}
      resetOnSubmit={false}
      onSubmitError={(error) => error && error.filed ? { ...error.filed } : null}
      onSubmit={({initial, current}) => {
        const ErrObj = {};
        if (current.radioGroup === 'unknown') {
          ErrObj.radioGroup = '请选择性别！';
        }

        if(Object.keys(ErrObj).length > 0) {
          const err = new Error();
          err.filed = ErrObj;
          throw err;
        }

        Notify.success({
          title: '提交成功！', description: `填写：【填写成功】！`
        });
      }}
      fields={{
        radioGroup: {
          value: 'girl',
          label: '请输入内容',
          help: '必须选择性别！',
          children: (
            <RadioGroup>
              <Radio value="man">男</Radio>
              <Radio value="girl">女</Radio>
              <Radio value="shemale">中性</Radio>
              <Radio value="unknown">未知</Radio>
            </RadioGroup>
          ),
        },
        radioButtonGroup: {
          value: 'girl',
          label: '请输入内容',
          help: '必须选择性别！',
          children: (
            <RadioGroup>
              <RadioButton value="man">男</RadioButton>
              <RadioButton value="girl">女</RadioButton>
              <RadioButton value="shemale">中性</RadioButton>
              <RadioButton value="unknown">未知</RadioButton>
            </RadioGroup>
          ),
        },
        radio: {
          help: '请选择！该选项为必选！',
          validator: (value) => !value ? '必填选项！' : null,
          children: <Radio value="man">已阅读</Radio>,
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <div>
            <Row>
              <Col>{fields.radioGroup}</Col>
            </Row>
            <Row>
              <Col>{fields.radioButtonGroup}</Col>
            </Row>
            <Row>
              <Col>{fields.radio}</Col>
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
}
```

### 单选

适用广泛的基础最简单的用法。

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Radio, RadioGroup, RadioButton } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '未知' };
  }
  onChange(value) {
    this.setState({ value });
  }
  render() {
    return (
      <div>
        <RadioGroup name="sexs" value={this.state.value} onChange={(e)=>this.onChange(e.target.value)}>
          <Radio value="man">男</Radio>
          <Radio value="girl">女</Radio>
          <Radio value="shemale" disabled>中性</Radio>
          <Radio value="unknown" disabled>未知</Radio>
        </RadioGroup>
        <RadioGroup name="sexs" value={this.state.value} onChange={this.onChange.bind(this)} style={{ marginTop: 20 }}>
          <RadioButton value="man">男</RadioButton>
          <RadioButton value="girl">女</RadioButton>
          <RadioButton value="shemale" disabled>中性</RadioButton>
          <RadioButton value="unknown" disabled>未知</RadioButton>
        </RadioGroup>
      </div>
    )
  }
}
export default Demo;
```

### 单选组

设置单选初始值

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Radio, RadioGroup, RadioButton, Divider, Button } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '未知' };
  }
  onChange(value) {
    this.setState({ value });
  }
  render() {
    return (
      <div>
        <RadioGroup name="other" value={this.state.value} onChange={(e)=>this.onChange(e.target.value)}>
          <div>Group 1</div>
          <Radio value="男">男</Radio>
          <Radio value="女">女</Radio>
          <div>Group 2</div>
          <Radio value="中性" disabled>中性</Radio>
          <Radio value="未知">未知</Radio>
          <div>Group 3</div>
          <Radio value="E" style={{ display: 'block' }}>Item E</Radio>
          <Radio value="F" style={{ display: 'block' }}>Item F</Radio>
          <div>Group 3</div>
        </RadioGroup>

        <RadioGroup name="other" value={this.state.value} onChange={this.onChange.bind(this)} style={{ marginTop:20 }}>
          <RadioButton value="男">男</RadioButton>
          <RadioButton value="女">女</RadioButton>
          <RadioButton value="未知">未知</RadioButton>
        </RadioGroup>
        <Divider />
        <Button
          type="primary"
          onClick={() => {
            // console.log('set::', ['东北菜', '北京烤鸭']);
            this.setState({ value: '女' });
          }}
        >
          点击按钮选"女"
        </Button>
      </div>
    )
  }
}
export default Demo;
```

## Radio

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |
| name | 用于表单对应的名称 | String | - |
| checked | Radio是否被选中 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even) | - |

## RadioGroup

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |
| name | 用于表单对应的名称 | String | - |
| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even) | - |
