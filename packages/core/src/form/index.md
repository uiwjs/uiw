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
        if (current.firstName.startsWith('F')) throw new Error(`First name ${current.firstName} begins with 'F'`)
      }}
      onSubmitError={(error) => error.message.indexOf('First name') > -1 ? { firstName: error.message } : null}
      fields={{
        firstName: {
          initialValue: 'FJohn',
          label: 'First Name',
          help: 'First names beginning with "F" will have errors shown here'
        },
        lastName: {
          initialValue: 'Doe',
          label: 'Last Name'
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        console.log('fields:', state);
        return (
          <div>
            <Row gutter="10">
              <Col>{fields.firstName}</Col>
              <Col>{fields.lastName}</Col>
              <Col fixed style={{ marginTop: 32 }}>
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
          inline: true,
          label: '姓'
        },
        lastName: {
          initialValue: '先生',
          inline: true,
          label: '名',
        },
        email: {
          // initialValue: '',
          validator: (currentValue) => {
            return currentValue.length < 2 ? 'Password must be 8+ characters' : null;
          },
          inline: true,
          label: 'Email',
        },
        // accept: {
        //   inline: true,
        //   label: '订阅',
        //   children: <Checkbox />
        // },
      }}
    >
      {({ fields, state, canSubmit }) => {
        console.log('fields:', state);
        return (
          <div>
            <Row>
              <Col>{fields.firstName}</Col>
              <Col>{fields.lastName}</Col>
            </Row>
            <Row>
              <Col>{fields.email}</Col>
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
      labelFor="basic-input"
      help={<span>在上面的字段中输入一个值</span>}
    >
      <Input id="basic-input" type="text"/>
    </FormItem>
    <FormItem
      inline={true}
      label="用户名"
      labelFor="username-input"
      labelClassName="username"
      help="用户名长度至少为8个字符串。"
      hasError={true}
    >
      <Input id="username-input" type="text"/>
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
    label: '姓'
  },
}
```

## FormItem

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| label | 表单标题展示 | string | - |
| labelClassName | 表单标题样式名称 | string | - |
| labelFor | 列的宽度相对于同一网格中其他列的比率 | number | - |
| help | 提示信息 | Enum{`top`, `middle`, `bottom`, `baseline`} | - |
| hasError | 如果为true，则应用错误CSS。转动边框并帮助文字变红。 | number | - |