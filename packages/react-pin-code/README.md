PinCode 安全码
===

针对输入数字序列进行了优化。最常见的应用是输入一次性安全码。它经过优化，可快速输入数字。

```jsx
import { PinCode } from 'uiw';
// or
import PinCode from '@uiw/react-pin-code';
```

### 基础用法

<!--DemoStart,bgWhite,codePen,codeSandbox-->
```jsx
import ReactDOM from 'react-dom';
import { PinCode } from 'uiw';

const Demo = () => (
  <div>
    <PinCode autoFocus value={['', '', '', '', '']} onChange={(val) => console.log(val)} />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 在表单中使用

在 [`<Form />`](#/components/form) 表单中应用 [`<PinCode />`](#/components/pin-code) 组件

<!--DemoStart,bgWhite,codePen,codeSandbox-->
```jsx
import ReactDOM from 'react-dom';
import { Form, Row, Col, Icon, PinCode, Button, Notify } from 'uiw';

const Demo = () => (
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
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 更改占位符

<!--DemoStart,bgWhite,codePen,codeSandbox-->
```jsx
import ReactDOM from 'react-dom';
import { PinCode, Divider } from 'uiw';

const Demo = () => (
  <div>
    <PinCode placeholder="■" value={['8', '7', '3', '', '']} onChange={(val) => console.log(val)} />
    <Divider />
    <PinCode placeholder="★" value={['6', '', '', '', '']} onChange={(val) => console.log(val)} />
    <Divider />
    <PinCode placeholder="🤣" value={['', '', '', '', '']} onChange={(val) => console.log(val)} />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 输入框被禁用

<!--DemoStart,bgWhite,codePen,codeSandbox-->
```jsx
import ReactDOM from 'react-dom';
import { PinCode, Divider } from 'uiw';

const Demo = () => (
  <div>
    <PinCode disabled value={['1', '9', '8', '7', '0']} />
    <Divider />
    <PinCode disabled value={['', '', '', '', '']} />
    <Divider />
    <PinCode disabled placeholder="🤣" value={['', '', '', '', '']} />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 尺寸大小

<!--DemoStart,bgWhite,codePen,codeSandbox-->
```jsx
import ReactDOM from 'react-dom';
import { PinCode, Divider } from 'uiw';

const Demo = () => (
  <div>
    <PinCode size="large" value={['1', '9', '8', '7', '0']} />
    <Divider />
    <PinCode value={['', '', '', '', '']} />
    <Divider />
    <PinCode size="small" value={['', '', '', '', '']} />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

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