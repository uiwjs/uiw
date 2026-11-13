PinCode 安全码
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![Telegram Channel](https://img.shields.io/badge/%20-Telegram-00618f.svg?logo=Telegram)](https://t.me/s/AwesomeMacApps)
[![Follow On X](https://img.shields.io/badge/Follow%20on%20X-333333?logo=x&logoColor=white)](https://x.com/jaywcjlove)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-pin-code/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-pin-code.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-pin-code)
[![npm version](https://img.shields.io/npm/v/@uiw/react-pin-code.svg?label=@uiw/react-pin-code)](https://npmjs.com/@uiw/react-pin-code)

针对输入数字序列进行了优化。最常见的应用是输入一次性安全码。它经过优化，可快速输入数字。

```jsx
import { PinCode } from 'uiw';
// or
import PinCode from '@uiw/react-pin-code';
```

### 基础用法

```jsx mdx:preview&bg=#fff
import React from 'react';
import { PinCode } from 'uiw';

export default function Demo() {
  return (
    <div>
      <PinCode autoFocus value={['', '', '', '', '']} onChange={(val) => console.log(val)} />
    </div>
  );
}
```

### 在表单中使用

在 [`<Form />`](#/components/form) 表单中应用 [`<PinCode />`](#/components/pin-code) 组件

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Form, Row, Col, Icon, PinCode, Button, Notify } from 'uiw';

export default function Demo() {
  return (
    <div>
      <Form
        resetOnSubmit={false}
        onSubmitError={(error) => {
          if (error.filed) {
            return { ...error.filed };
          }
          return null;
        }}
        onSubmit={({initial, current}) => {
          const errorObj = {};
          if (current.pinCode.join('').length === 0) {
            errorObj.pinCode = '请输入安全码！';
          }
          if (current.pinCode.join('').length < 5) {
            errorObj.pinCode = '安全码没有输入完整！';
          }
          if(Object.keys(errorObj).length > 0) {
            const err = new Error();
            err.filed = errorObj;
            Notify.error({ title: '提交失败！', description: '请确认提交表单是否正确！' });
            throw err;
          }
          Notify.success({
            title: '提交成功！',
            description: `表单提交成功，安全码为：${current.pinCode.join('')}！`,
          });
        }}
        fields={{
          pinCode: {
            initialValue: ['', '', '', '', ''],
            children: <PinCode />
          },
        }}
      >
        {({ fields, state, canSubmit }) => {
          console.log('state:',state.current.pinCode.join(''))
          return (
            <div>
              <Row>
                <Col fixed>{fields.pinCode}</Col>
              </Row>
              <Row>
                <Col fixed>
                  <Button size="small" disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
                  <span style={{ paddingLeft: 16, color: '#a7a7a7', verticalAlign: 'middle' }}>
                    {state.current.pinCode.join('')}
                  </span>
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
}
```

### 更改占位符

```jsx mdx:preview&bg=#fff
import React from 'react';
import { PinCode, Divider } from 'uiw';

export default function Demo() {
  return (
    <div>
      <PinCode placeholder="■" value={['8', '7', '3', '', '']} onChange={(val) => console.log(val)} />
      <Divider />
      <PinCode placeholder="★" value={['6', '', '', '', '']} onChange={(val) => console.log(val)} />
      <Divider />
      <PinCode placeholder="🤣" value={['', '', '', '', '']} onChange={(val) => console.log(val)} />
    </div>
  );
}
```

### 输入框被禁用

```jsx mdx:preview&bg=#fff
import React from 'react';
import { PinCode, Divider } from 'uiw';

export default function Demo() {
  return (
    <div>
      <PinCode disabled value={['1', '9', '8', '7', '0']} />
      <Divider />
      <PinCode disabled value={['', '', '', '', '']} />
      <Divider />
      <PinCode disabled placeholder="🤣" value={['', '', '', '', '']} />
    </div>
  );
}
```

### 尺寸大小

```jsx mdx:preview&bg=#fff
import React from 'react';
import { PinCode, Divider } from 'uiw';

export default function Demo() {
  return (
    <div>
      <PinCode size="large" value={['1', '9', '8', '7', '0']} />
      <Divider />
      <PinCode value={['', '', '', '', '']} />
      <Divider />
      <PinCode size="small" value={['', '', '', '', '']} />
    </div>
  );
}
```

## PinCode

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 绑定值，根据数组长度，展示安全码的长度 | string[] | - |
| disabled | 禁用输入框 | Boolean | `false` |
| autoFocus | 自动获得焦点。 | Boolean | - |
| placeholder | 占位符 | string | `○` |
| size | 指定输入框的尺寸，除了默认的大小外，还提供了 `large`、`small` 和 `default` 三种尺寸。 | String | - |
| onChange | `value` 变化时回调函数 | Function(value: string[]) | - |
| onBlur | 失去焦点时运行 | Function(event: React.FocusEvent<HTMLInputElement\>) | - |
| onFocus | 获得焦点时运行 | Function(event: React.FocusEvent<HTMLInputElement\>) | - |