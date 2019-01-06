Form 表单
===

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

```jsx
import { Form, FormItem } from '@uiw/core';
```

## 自定义校验

<!--DemoStart--> 
```js
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };

const Demo = () => (
  <div style={boxStyl}>
    <Form
      onSubmit={({initial, current}) => {
        const errorObj = {};
        if (current.userName.startsWith('u')) {
          errorObj.userName = `姓名 ${current.userName} 不能以 ‘u’ 开头`;
        }
        if (!current.checkboxOne) {
          errorObj.checkboxOne = '一个多选条件 为必填';
        }
        if (!current.terms) {
          errorObj.terms = '必须统一服务条款';
        }
        if(Object.keys(errorObj).length > 0) {
          const err = new Error();
          err.filed = errorObj;
          throw err;
        }
      }}
      onSubmitError={(error) => {
        if (error.filed) {
          return { ...error.filed };
        }
        return null;
      }}
      fields={{
        userName: {
          initialValue: 'uiw',
          label: '姓名',
          help: '以“u”开头的名字将在此处显示错误信息'
        },
        age: {
          initialValue: '9',
          label: '年龄',
          children: <Input type="number" />
        },
        checkbox: {
          initialValue: ['四川菜'],
          label: '选择你想吃的菜',
          children: (
            <Checkbox.Group>
              <div>菜系</div>
              <Checkbox value="四川菜">四川菜</Checkbox>
              <Checkbox value="湖北菜">湖北菜</Checkbox>
              <Checkbox value="西北菜">西北菜</Checkbox>
              <Checkbox value="新疆菜">新疆菜</Checkbox>
              <Checkbox value="东北菜">东北菜</Checkbox>
              <div style={{ marginTop: 10 }}>家常菜</div>
              <Checkbox value="红烧武昌鱼">红烧武昌鱼</Checkbox>
              <Checkbox value="麻婆豆腐">麻婆豆腐</Checkbox>
              <Checkbox value="北京烤鸭">北京烤鸭</Checkbox>
            </Checkbox.Group>
          )
        },
        checkboxOne: {
          inline: true,
          label: '一个多选条件',
          children: <Checkbox value="1">四川菜</Checkbox>
        },
        switch: {
          inline: true,
          initialValue: true,
          label: '开启',
          children: <Switch />
        },
        radioGroup: {
          inline: true,
          initialValue: '男',
          label: '单选',
          children: (
            <RadioGroup name="other">
              <Radio value="男">男</Radio>
              <Radio value="女">女</Radio>
              <Radio value="人妖" disabled>人妖</Radio>
              <Radio value="未知">未知</Radio>
            </RadioGroup>
          )
        },
        terms: {
          validator: (currentValue) => {
            return !currentValue ? '必须统一服务条款' : null;
          },
          style: { marginBottom: 0 },
          children: <Checkbox value="1">已阅读并同意<a href="#">服务条款</a></Checkbox>
        }
      }}
    >
      {({ fields, state, canSubmit }) => {
        console.log('fields:-->', state);
        return (
          <div>
            <Row gutter="10">
              <Col>{fields.userName}</Col>
              <Col>{fields.age}</Col>
            </Row>
            <Row gutter="10">
              <Col>{fields.checkbox}</Col>
              <Col>{fields.checkboxOne}</Col>
            </Row>
            <Row gutter="10">
              <Col>{fields.radioGroup}</Col>
            </Row>
            <Row gutter="10">
              <Col>{fields.switch}</Col>
            </Row>
            <Row gutter="10">
              <Col fixed>
                <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
              </Col>
              <Col fixed align="middle">
                {fields.terms}
              </Col>
            </Row>
          </div>
        )
      }}
    </Form>
  </div>
)
```
<!--End-->

## 水平登录栏

<!--DemoStart--> 
```js
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };

const Demo = () => (
  <div style={boxStyl}>
    <Form
      onSubmit={({initial, current}) => {
        console.log('-->>', initial, current);
      }}
      fields={{
        username: {
          labelClassName: 'fieldLabel',
          labelFor: 'username-inline',
          children: <Input preIcon="user" id="username-inline" />
        },
        password: {
          labelClassName: 'fieldLabel',
          labelFor: 'password-inline',
          children: <Input preIcon="lock" id="password-inline" type="password" />
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        console.log('fields:', state);
        return (
          <Row gutter="10">
            <Col fixed>{fields.username}</Col>
            <Col fixed>{fields.password}</Col>
            <Col>
              <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
            </Col>
          </Row>
        )
      }}
    </Form>
  </div>
)
```
<!--End-->

## 登录

<!--DemoStart--> 
```js
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };

const Demo = () => (
  <div style={boxStyl}>
    <Form
      onSubmit={({initial, current}) => {
        console.log('-->>', initial, current);
      }}
      fields={{
        username: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          labelFor: 'username',
          children: <Input preIcon="user" id="username" />
        },
        password: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          labelFor: 'password',
          children: <Input preIcon="lock" id="password" type="password" />
        },
        terms: {
          validator: (currentValue) => !currentValue ? '必须统一服务条款' : null,
          children: <Checkbox value="1">已阅读并同意</Checkbox>
        }
      }}
    >
      {({ fields, state, canSubmit }) => {
        console.log('fields:', state);
        return (
          <div>
            <Row>
              <Col>{fields.username}</Col>
            </Row>
            <Row>
              <Col>{fields.password}</Col>
            </Row>
            <Row>
              <Col fixed align="middle">{fields.terms}</Col>
              <Col fixed style={{ marginTop: -4 }}><a href="#">服务条款</a></Col>
            </Row>
            <Row>
              <Col fixed>
                <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
              </Col>
            </Row>
          </div>
        )
      }}
    </Form>
  </div>
)
```
<!--End-->

## 表单提交

<!--DemoStart--> 
```js
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };

const Demo = () => (
  <div style={boxStyl}>
    <Form
      onSubmit={({initial, current}) => {
        console.log('-->>', initial, current);
      }}
      fields={{
        firstName: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          inline: true,
          label: '姓氏'
        },
        lastName: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          initialValue: '先生',
          inline: true,
          label: '名字',
        },
        email: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          // initialValue: '',
          validator: (currentValue) => {
            return currentValue.length < 2 ? 'Password must be 8+ characters' : null;
          },
          inline: true,
          label: 'Email',
        },
        select: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          initialValue: '4',
          inline: true,
          label: '选择器',
          children: (
            <Select>
              <Select.Option value="w">Choose an item...</Select.Option>
              <Select.Option value="1">One</Select.Option>
              <Select.Option value="2">Two</Select.Option>
              <Select.Option value="3">Three</Select.Option>
              <Select.Option value="4">Four</Select.Option>
            </Select>
          ),
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        console.log('fields:', state);
        return (
          <div>
            <Row style={{ marginBottom: 10 }}>
              <Col>{fields.firstName}</Col>
              <Col>{fields.lastName}</Col>
            </Row>
            <Row>
              <Col>{fields.email}</Col>
              <Col>{fields.select}</Col>
            </Row>
            <Row>
              <Col />
              <Col fixed align="bottom"><Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button></Col>
            </Row>
          </div>
        )
      }}
    </Form>
  </div>
)
```
<!--End-->

## FormItem 竖排

对组件 `FormItem` 竖排展示示例。

<!--DemoStart--> 
```js
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };

const Demo = () => (
  <div style={boxStyl}>
    <FormItem
      label="可选字段"
      labelFor="basic-input"
      help={<span>在上面的字段中输入一个值</span>}
    >
      <Input id="basic-input" type="text"/>
    </FormItem>
    <FormItem
      label="用户名"
      labelFor="username-input"
      help="用户名长度至少为8个字符串。"
      hasError={true}
    >
      <Input id="username-input" type="text"/>
    </FormItem>
  </div>
)
```
<!--End-->


## FormItem 横排

对组件 `FormItem` 横排展示示例。

<!--DemoStart--> 
```js
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };

const Demo = () => (
  <div style={boxStyl}>
    <FormItem
      inline={true}
      label="可选字段"
      labelFor="basic-input-inline"
      help={<span>在上面的字段中输入一个值</span>}
    >
      <Input id="basic-input-inline" type="text"/>
    </FormItem>
    <FormItem
      inline={true}
      label="用户名"
      labelFor="username-input-inline"
      labelClassName="username"
      help="用户名长度至少为8个字符串。"
      hasError={true}
    >
      <Input id="username-input-inline" type="text"/>
    </FormItem>
  </div>
)
```
<!--End-->

## Form

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| fields | 设置字段 | object | - |
| children | 回调 {`fields`, `state`} | node/function | - |
| onSubmit | 提交回调 {`initial`, `current`}  | function | - |
| onSubmitError | 调用 `onSubmit` 抛出的任何错误。从字段名称返回对象映射。  | function | - |
| resetOnSubmit | 在 `onSubmit` 成功后将表单重置为其初始状态。| bool | `true` |

```js
// => fields
{
  firstName: {
    initialValue: '王',
    inline: true,
    label: '姓',
    labelClassName: 'fieldLabel',
    labelStyle: { width: 60 },
    children: <Input type="number" />
  },
}
```

## FormItem

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| label | 表单标题展示 | string | - |
| labelClassName | 表单标题样式名称 | string | - |
| labelStyle | 表单标题样式 | object | - |
| labelFor | 列的宽度相对于同一网格中其他列的比率 | number | - |
| help | 提示信息 | Enum{`top`, `middle`, `bottom`, `baseline`} | - |
| hasError | 如果为true，则应用错误CSS。转动边框并帮助文字变红。 | number | - |