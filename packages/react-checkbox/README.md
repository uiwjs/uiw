Checkbox 多选框
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-checkbox/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-checkbox.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-checkbox)
[![npm version](https://img.shields.io/npm/v/@uiw/react-checkbox.svg?label=@uiw/react-checkbox)](https://npmjs.com/@uiw/react-checkbox)

一组备选项中进行多选

```jsx
import { Checkbox } from 'uiw';
// or
import Checkbox from '@uiw/react-checkbox';
```

### 基础用法

单独使用可以表示两种状态之间的切换，半选中只是样式上的表现。

```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true
import React from 'react';
import { Checkbox } from 'uiw';

const Demo =()=> (
  <div>
    <Checkbox onChange={(e) =>{
      console.log(e.target.checked)
      console.log(e.target)
    }}>未选中</Checkbox>
    <Checkbox checked >选中</Checkbox>
  </div>
);
export default Demo
```

### Form 中使用 Checkbox

```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true
import React from 'react';
import { Form, Checkbox, Row, Col, Button, Notify } from 'uiw';

const Demo = () => (
  <div>
    <Form
      onChange={({ initial, current }) => {
        console.log('onChange~~~:::', initial, current);
      }}
      onSubmit={({initial, current}) => {
        console.log('onSubmit~~~:::', initial, current)
        Notify.success({
          title: '提交成功！',
          description: `选项为：【${current.checkbox}】【${JSON.stringify(current.checkboxGroup)}】，提交完成，将自动填充初始化值！`,
        });
      }}
      fields={{
        checkbox: {
          inline: true,
          initialValue: true,
          label: '单选条件',
          children: <Checkbox>四川菜</Checkbox>,
          validator: (value) => {
            return !value ? '必须统一服务条款' : null;
          },
        },
        checkboxGroup: {
          initialValue: ['四川菜'],
          label: '选择你想吃的菜',
          children: (
            <Checkbox.Group>
              <div>菜系</div>
              <Checkbox value="四川菜">四川菜</Checkbox>
              <Checkbox value="湖北菜">湖北菜</Checkbox>
              <Checkbox value="西北菜">西北菜</Checkbox>
              <Checkbox disabled value="新疆菜">新疆菜</Checkbox>
              <Checkbox value="东北菜">东北菜</Checkbox>
              <div style={{ marginTop: 10 }}>家常菜</div>
              <Checkbox value="红烧武昌鱼">红烧武昌鱼</Checkbox>
              <Checkbox value="麻婆豆腐">麻婆豆腐</Checkbox>
              <Checkbox value="北京烤鸭">北京烤鸭</Checkbox>
            </Checkbox.Group>
          ),
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <div>
            <Row>
              <Col>{fields.checkbox}</Col>
            </Row>
            <Row>
              <Col>{fields.checkboxGroup}</Col>
            </Row>
            <Row>
              <Col>
                <Button disabled={!canSubmit()} type="primary" htmlType="submit">
                  提交
                </Button>
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
        )
      }}
    </Form>
  </div>
)
export default Demo;
```

### 禁用样式

通过设置 `disabled` 属性来禁用多选框。

```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true
import React from 'react';
import { Checkbox } from 'uiw';

const Demo= ()=>(
  <div>
    <Checkbox disabled checked>未选中禁用</Checkbox>
    <Checkbox disabled checked>选中禁用</Checkbox>
    <Checkbox disabled indeterminate>半选中禁用</Checkbox>
  </div>
);
export default Demo
```

### 全选

```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true
import React from 'react';
import { Checkbox, Divider } from 'uiw';

const checkedList = [ '四川菜', '湖北菜', '西北菜', '新疆菜', '东北菜' ];
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ['四川菜', '新疆菜'],
      indeterminate: true,
      checkAll: false,
    };
  }
  onChange(e, list) {
    console.log('list', list);
    console.log('list', checkedList);
    this.setState({
      value: list,
      indeterminate: !!list.length && (list.length < checkedList.length),
      checkAll: list.length === checkedList.length,
    });
  }
  onCheckAllChange(e) {
    this.setState({
      value: e.target.checked ? checkedList : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }
  render() {
    const { indeterminate, checkAll } = this.state;
    return (
      <div>
        <Checkbox checked={checkAll} indeterminate={indeterminate} onChange={this.onCheckAllChange.bind(this)}>全选</Checkbox>
        <Divider />
        <Checkbox.Group name="cuisine" value={this.state.value} onChange={this.onChange.bind(this)}>
          {checkedList.map((item, idx) => {
            return (
              <Checkbox key={idx} value={item}>{item}</Checkbox>
            )
          })}
        </Checkbox.Group>
      </div>
    )
  }
}

export default Demo;
```

### 多选组

方便的从数组生成 `Checkbox` 组。

```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true
import React from 'react';
import { Checkbox, Divider, Button } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ['四川菜', '新疆菜'],
    };
  }
  onChange(e, list) {
    console.log('Value:-->', e.target.value, list);
    this.setState({ value: list });
  }
  render() {
    return (
      <div>
        <Checkbox.Group name="cuisine" value={this.state.value} onChange={this.onChange.bind(this)}>
          <div>川菜</div>
          <Checkbox value="四川菜">四川菜</Checkbox>
          <Checkbox value="湖北菜">湖北菜</Checkbox>
          <div>本帮江浙菜</div>
          <Checkbox value="西北菜">西北菜</Checkbox>
          <Checkbox value="新疆菜">新疆菜</Checkbox>
          <div>家常菜</div>
          <Checkbox value="东北菜">东北菜</Checkbox>
          <Checkbox value="北京烤鸭">北京烤鸭</Checkbox>
        </Checkbox.Group>
        <Divider />
        <Button
          type="primary"
          onClick={() => {
            // console.log('set::', ['东北菜', '北京烤鸭']);
            this.setState({ value: ['东北菜', '北京烤鸭'] });
          }}
        >
          选中两个
        </Button>
      </div>
    )
  }
}
export default Demo;
```

### 控制组件

通过 `checked` 属性改变 `Checkbox` 组件状态。

```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true
import React from 'react';
import { Checkbox, Button } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    }
  }
  onChange(e) {
    console.log('e.target.checked:', e.target.checked);
    this.setState({ checked: e.target.checked });
  }
  render() {
    return (
      <div>
        <Checkbox onChange={this.onChange.bind(this)} checked={this.state.checked} style={{ marginRight: 10 }} />
        <Button
          size="small"
          type="primary"
          onClick={() => {
            this.setState({ checked: !this.state.checked });
          }}
        >
          点击按钮改变 Checkbox 状态
        </Button>
      </div>
    )
  }
}
export default Demo;
```


## Checkbox

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| options | 指定当前是否选中 | Boolean | false |
| disabled | 禁用 | Boolean | false |
| onChange | 变化时回调函数 | Function(e:Event, checked:Boolean) | - |
| checked | 指定当前是否选中 | Boolean | false |
| indeterminate | 半选中，只负责样式控制 | Boollean | false |

## Checkbox.Group

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| name | 隐藏输入的名称，在表单中使用时很有用 | string | - |
| value | 控制时 `select` 的值必须与 `onChange` 函数一起使用才能更新 `select` 的值 | Array | `[]` |
| onChange | 变化时回调函数 | Function(e:Event, checkedValues: Array) | - |
