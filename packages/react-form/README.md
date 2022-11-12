Form 表单
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-form/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-form.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-form)
[![npm version](https://img.shields.io/npm/v/@uiw/react-form.svg?label=@uiw/react-form)](https://npmjs.com/@uiw/react-form)

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

```jsx
import { Form, FormItem } from 'uiw';
// or
import { Form, FormItem } from '@uiw/react-form';
```

### 基本用法

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true

import React, { useState, useRef } from "react";
import { Form, Input, Row, Col, Slider, Button, Notify } from 'uiw';

function Demo() {
  const form = useRef()

  const onSubmit = () => {
    form.current.onSubmit()
  }
  const resetForm = () => {
    form.current.resetForm()
  }
  const getFieldValues = () => {
    console.log('getFieldValues', form.current.getFieldValues())
  }

  const setFieldValue=()=>{
    form.current.setFieldValue('name','UIW')
  }

  return (
    <div>
      <Form
        ref={form}
        onChange={({ initial, current }) => {
          console.log('onChange', initial, current);
        }}
        onSubmit={({ initial, current }) => {
          if (current.name === initial.name) {
            Notify.error({
              title: '提交失败！',
              description: `表单提交内容为空！`,
            });
          } else {
            Notify.success({
              title: '提交成功！',
              description: `姓名为：${current.name}，提交完成，将自动填充初始化值！`,
            });
          }
        }}
        fields={{
          name: {
            label: '姓名',
            children: <Input placeholder="请输入姓名" />
          },
        }}
      >
        {({ fields, state, canSubmit }) => {
          return (
            <div>
              <Row>
                <Col style={{ maxWidth: 300 }}>{fields.name}</Col>
              </Row>
              <Row>
                <Col>
                  <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  {JSON.stringify(state.current)}
                </Col>
              </Row>
            </div>
          )
        }}
      </Form>
      <Button type="primary" onClick={onSubmit} >submit</Button>
      <Button type="primary" onClick={resetForm}>resetForm</Button>
      <Button type="primary" onClick={getFieldValues}>getValues</Button>
      <Button type="primary" onClick={setFieldValue}>setFieldValue</Button>
    </div>
  )
}
export default Demo
```

### 自定义校验

一般校验可不需引入外部包解决，如果遇到大型工程表单比较多的地方推荐使用 [jquense/yup](https://github.com/jquense/yup)

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import { Form, Input, Notify, Checkbox, Switch, RadioGroup, Radio, Textarea, Row, Col, Button } from 'uiw';

const Demo = () => (
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
      Notify.success({
        title: '提交成功！',
        description: `姓名为：${current.userName}，提交完成，将自动填充初始化值！`,
      });
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
        children: <Input type="text" />,
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
        children: <Switch size="small" />
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
      textarea: {
        initialValue: '',
        label: '多行文本输入框',
        children: <Textarea placeholder="请输入内容" />
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
    {({ fields, state, canSubmit, resetForm }) => {
      console.log('fields:-->', state);
      return (
        <div style={{ maxWidth: 500 }}>
          <Row gutter={10}>
            <Col>{fields.userName}</Col>
            <Col>{fields.age}</Col>
          </Row>
          <Row gutter={10}>
            <Col>{fields.checkbox}</Col>
            <Col>{fields.checkboxOne}</Col>
          </Row>
          <Row gutter={10}>
            <Col>{fields.radioGroup}</Col>
          </Row>
          <Row gutter={10}>
            <Col>{fields.switch}</Col>
          </Row>
          <Row gutter={10}>
            <Col>{fields.textarea}</Col>
          </Row>
          <Row gutter={10}>
            <Col style={{ padding: '5px 0 10px 0' }}>
              {fields.terms}
            </Col>
          </Row>
          <Row gutter={10}>
            <Col fixed>
              <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
              <Button type="light" onClick={resetForm}>重置表单</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <pre style={{ padding: '10px 0 0 10px' }}>
                {JSON.stringify(state.current, null, 2)}
              </pre>
            </Col>
          </Row>
        </div>
      )
    }}
  </Form>
)
export default Demo
```

### 水平登录栏

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import { Form, Input, Row, Col, Notify, Button,Icon } from 'uiw';

const Demo = () => (
  <div>
    <Form
      onSubmit={({initial, current}) => {
        const errorObj = {};
        if (!current.username) {
          errorObj.username = '用户名不能为空！';
        }
        if (!current.password) {
          errorObj.password = '密码不能为空！';
        }
        if(Object.keys(errorObj).length > 0) {
          const err = new Error();
          err.filed = errorObj;
          Notify.error({ title: '提交失败！', description: '请确认提交表单是否正确！' });
          throw err;
        }
        console.log('-->>', initial, current);
        Notify.success({ title: '提交成功！', description: '恭喜你登录成功！' });
      }}
      onSubmitError={(error) => {
        if (error.filed) {
          return { ...error.filed };
        }
        return null;
      }}
      fields={{
        username: {
          labelClassName: 'fieldLabel',
          labelFor: 'username-inline',
          children: <Input preIcon= {<Icon type="user" />} id="username-inline" />
        },
        password: {
          labelClassName: 'fieldLabel',
          labelFor: 'password-inline',
          children: <Input  preIcon= {<Icon type="lock" />}  id="password-inline" type="password" />
        },
      }}
    >
      {({ fields, state, canSubmit, resetForm }) => {
        console.log('fields:', state);
        return (
          <div>
            <Row gutter={10}>
              <Col fixed>{fields.username}</Col>
              <Col fixed>{fields.password}</Col>
            </Row>
            <Row gutter={10}>
              <Col>
                <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
                <Button type="danger" onClick={resetForm}>重置表单</Button>
              </Col>
            </Row>
          </div>
        )
      }}
    </Form>
  </div>
);
export default Demo
```

## 登录

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import { Form, Input, Row, Col, Checkbox, Notify, Button,Icon  } from 'uiw';

const Demo = () => (
  <div>
    <Form
      onSubmit={({initial, current}) => {
        console.log('-->>', initial, current);
      }}
      fields={{
        username: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          labelFor: 'username',
          children: <Input  preIcon= {<Icon type="user" />} id="username" />
        },
        password: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          labelFor: 'password',
          children: <Input  preIcon= {<Icon type="lock" />}  id="password" type="password" />
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
              <Col fixed>{fields.username}</Col>
            </Row>
            <Row>
              <Col fixed>{fields.password}</Col>
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
export default Demo
```

### 表单提交

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import { Form, Input, Select, Row, Col, Button } from 'uiw';

const Demo = () => (
  <div>
    <Form
      onSubmit={({initial, current}) => {
        console.log('-->>', initial, current);
      }}
      fields={{
        firstName: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          inline: true,
          label: '姓氏',
          children: <Input />
        },
        lastName: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          initialValue: '先生',
          inline: true,
          label: '名字',
          children: <Input />
        },
        email: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          validator: (currentValue) => {
            return currentValue && currentValue.length < 2 ? 'Password must be 8+ characters' : null;
          },
          inline: true,
          label: 'Email',
          children: <Input />
        },
        select: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          inline: true,
          label: '选择器',
          children: (
            <Select>
              <Select.Option>Choose an item...</Select.Option>
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
            <Row gutter={10} style={{ marginBottom: 10 }}>
              <Col>{fields.firstName}</Col>
              <Col>{fields.lastName}</Col>
            </Row>
            <Row gutter={10}>
              <Col>{fields.email}</Col>
              <Col>{fields.select}</Col>
            </Row>
            <Row gutter={10}>
              <Col />
              <Col fixed align="bottom"><Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button></Col>
            </Row>
          </div>
        )
      }}
    </Form>
  </div>
)
export default Demo
```


### 自定义控件应用

下面实例是在 [`<Form />`](#/components/form) 表单组件中，应用自定义 `<CustomSelect />` 控件组件。

> ⚠️ 注意，自定义控件需要两个必要的 `props` 参数，`value` 和 `onChange`
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

- `value` 用于值传递，
- `onChange(value)` 用于值变更需要执行的回调函数，回调函数第一个参数必须是 `value`。

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import { Form, Row, Col, Dropdown, Menu, Icon, Button, Notify } from 'uiw';

// 自定义组件
function CustomSelect(props) {
  const { option = [], onChange } = props;
  const [value, setValue] = React.useState(props.value);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (value !== props.value) {
      setValue(props.value);
    }
  }, [props.value]);
  const label = option.find(item => value === item.value);
  return (
    <Dropdown
      trigger="click"
      onVisibleChange={(open) => setIsOpen(open)}
      isOpen={isOpen}
      menu={
        <Menu bordered style={{ minWidth: 120 }}>
          {option.map((item, idx) => (
            <Menu.Item active={value === item.value} key={idx} text={item.label}
              onClick={() => {
                setValue(item.value);
                setIsOpen(false)
                onChange && onChange(item.value);
              }}
            />
          ))}
        </Menu>
      }
    >
      <Button
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1)'
        }}
        type="link"
      >
        {label.label}<Icon type={isOpen ? 'up' : 'down'} />
      </Button>
    </Dropdown>
  );
}

// 自定义组件应用实例
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
        console.log('~~~', current);
        const errorObj = {};
        if (!current.select) {
          errorObj.select = '内容为空，请输入内容';
        }
        if(Object.keys(errorObj).length > 0) {
          const err = new Error();
          err.filed = errorObj;
          Notify.error({ title: '提交失败！', description: '请确认提交表单是否正确！' });
          throw err;
        }
        Notify.success({
          title: '提交成功！',
          description: `表单提交成功，内容为：${current.select}，将自动填充初始化值！`,
        });
      }}
      fields={{
        select: {
          initialValue: 0,
          children: (
            <CustomSelect option={[
              { label: '请选择', value: 0 },
              { label: '经济舱', value: 1 },
              { label: '豪华经济舱', value: 2 },
              { label: '商务舱', value: 3 },
              { label: '头等舱', value: 4 },
            ]} />
          )
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <div>
            <Row>
              <Col style={{ maxWidth: 300 }}>{fields.select}</Col>
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
export default Demo
```

### FormItem 竖排

对组件 `FormItem` 竖排展示示例。

> ⚠️ 注意：`FormItem` 组件只在 `Form` 组件中使用，在 `@v4.10.4+` 以上版本可以当普通 `form` 使用。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import { Form, FormItem, Button ,Input} from 'uiw';

const Demo = () => {
  const [formData, setFormData] = React.useState({});
  const handleSubmit = (_, e) => {
    e && e.preventDefault();
    const fData = new FormData(e.target);
    const data = {};
    fData.forEach((value, key) => { data[key] = value; });
    setFormData(data);
  }
  return (
    <Form onSubmit={handleSubmit} onReset={() => setFormData({})}>
      <FormItem
        label="可选字段"
        labelFor="item-basic-input"
        help={<span>在上面的字段中输入一个值</span>}
      >
        <Input id="item-basic-input" name="basic" type="text"/>
      </FormItem>
      <FormItem
        label="用户名"
        labelFor="item-username-input"
        help={(!formData.username || formData.username.length < 8) ? "用户名长度至少为8个字符串。" : "用户名正确 √ "}
        hasError={(!formData.username || formData.username.length < 8)}
      >
        <Input id="item-username-input" name="username" type="text"/>
      </FormItem>
      <FormItem>
        <Button type="success" htmlType="submit"> Submit </Button>
        <Button type="light" htmlType="reset"> Reset </Button>
      </FormItem>
      <pre>
      {JSON.stringify(formData, null, 2)}
      </pre>
    </Form>
  );
}
export default Demo
```

### FormItem 横排

对组件 `FormItem` 横排展示示例。

> ⚠️ 注意：`FormItem` 组件只在 `Form` 组件中使用，在 `@v4.10.4+` 以上版本可以当普通 `form` 使用。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import { Form, FormItem,Input} from 'uiw';

const Demo = () => (
  <Form>
    <FormItem
      inline={true}
      label="可选字段"
      labelFor="basic-input-inline"
      help={<span>在上面的字段中输入一个值</span>}
      onChange={() => {
        console.log('TEST::');
      }}
    >
      <Input id="basic-input-inline" name="basic" type="text"/>
    </FormItem>
    <FormItem
      inline={true}
      label="用户名"
      labelFor="username-input-inline"
      labelClassName="username"
      help="用户名长度至少为8个字符串。"
      hasError={true}
    >
      <Input id="username-input-inline" name="username" type="text"/>
    </FormItem>
  </Form>
)
export default Demo
```

## Form

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| fields | 设置字段 | object | - |
| children | 回调 {`fields`, `state`, `canSubmit`, `resetForm`} | function | - |
| onSubmit | 提交表单时调用  | `(state: FormSubmitProps, event: React.FormEvent) => any` | - |
| afterSubmit `@3.0.0+` | 提交回调 {`initial`, `current`}  | function({ initial, current }) | - |
| onChange | 表单发生改变回调函数 {`initial`, `current`}  | function({ initial, current }) | - |
| onSubmitError | 调用 `onSubmit` 抛出的任何错误。从字段名称返回对象映射。  | function | - |
| resetOnSubmit | 在 `onSubmit` 成功后将表单重置为其初始状态。| bool | `true` |
| ref | 返回form各种内部函数,可用于主动触发事件 | Ref | - |


#### fields

```js
{
  firstName: {
    initialValue: '王',
    inline: true,
    label: '姓',
    labelClassName: 'fieldLabel',
    labelStyle: { width: 60 },
    // 验证，通过 `canSubmit()` 方法获得，提交按钮是否被禁用
    validator: (currentValue) => {},
    help: '帮助提示信息！',
    children: <Input type="number" />
  },
}
```

#### ref

```jsx
  const form = useRef()
  render(<Form ref={form}/>)
```

```js
    form.current.onSubmit()                                   // 提交表单
    form.current.resetForm()                                  // 重置form
    const fieldValues = form.current.getFieldValues()         // 获取所有 field的 value对象
    const error = form.current.getError()                     // 获取所有提交时验证错误
    form.current.setFields({ /** [fieldName]: value **/  })   // 设置表单的值,覆盖 form所有 field的值
    form.current.setFieldValue(fieldName, value)              // 对单个 field设置 value,如果 value为数组请自行深度拷贝后传值,以免破坏原数组
```

## FormItem

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| label | 表单标题展示 | string | - |
| required | 表单是否必填标识 | boolean | - |
| labelClassName | 表单标题样式名称 | string | - |
| labelStyle | 表单标题样式 | object | - |
| labelFor | 列的宽度相对于同一网格中其他列的比率 | number | - |
| help | 提示信息 | ReactNode | - |
| hasError | 如果为true，则应用错误CSS。转动边框并帮助文字变红。 | number | - |
