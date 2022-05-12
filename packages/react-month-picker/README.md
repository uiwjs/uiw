MonthPicker 月份选择器
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-month-picker/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-month-picker.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-month-picker)
[![npm version](https://img.shields.io/npm/v/@uiw/react-month-picker.svg?label=@uiw/react-month-picker)](https://npmjs.com/@uiw/react-month-picker)

模态对话框。

```jsx
import { MonthPicker } from 'uiw';
// or
import MonthPicker from '@uiw/react-month-picker';
```

### 基础用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { MonthPicker, Row, Col } from 'uiw';

const Demo = () => {
  const [formatDate, setFormatDate] = React.useState('2019/04')
  function onChange(date, formatDate) {
    setFormatDate(formatDate)
  }
  return (
    <Row gutter={10}>
      <Col style={{ width: 200 }} fixed>
        <MonthPicker size="large" onChange={onChange} placeholder="Select month" />
      </Col>
      <Col style={{ width: 200 }} fixed>
        <MonthPicker disabled value={formatDate} placeholder="Select month" />
      </Col>
    </Row>
  )
}
export default Demo
```

## 在表单中使用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Form, MonthPicker, Notify, Row, Col, Button } from 'uiw';

const Demo = () => (
  <div>
    <Form
      onSubmit={({initial, current}) => {
        if(current.date) {
          Notify.success({
            title: '提交成功！',
            description: `表单提交时间成功，时间为：${current.date}`,
          });
        } else {
          Notify.error({
            title: '提交失败！',
            description: `表单提交时间成功，时间为：${current.date}，将自动填充初始化值！`,
          });
        }
        console.log('-->>', initial, current);
      }}
      fields={{
        date: {
          labelClassName: 'fieldLabel',
          labelFor: 'date-inline',
          children: <MonthPicker id="date-inline" />
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <Row gutter={10}>
            <Col style={{ width: 200 }} fixed>{fields.date}</Col>
            <Col>
              <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
            </Col>
          </Row>
        )
      }}
    </Form>
  </div>
)
export default Demo
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 初始时间值 | Date | - |
| placeholder | 输入框提示文字 | String | - |
| allowClear | 是否显示清除按钮 | Boolean | true |
| format | 格式化时间，规则查看 [`formatter`](#/components/formatter) 文档 | String | `YYYY/MM/DD` |
| onChange | 选择一天时调用。 | Function(Date, formatDate) | - |
| popoverProps | 将参数传递给内部 [`<Popover>`](#/components/popover) 组件 | Object | - |
| pickerCaptionProps | 将参数传递给内部 [`<DatePicker>`](#/components/date-picker) `PickerCaption` 组件 | [`PickerCaptionProps`](https://github.com/uiwjs/uiw/blob/207c787ed478ffb7205ecdf95754ad2c97bb69c9/packages/react-date-picker/src/DatePickerCaption.tsx#L18-L23) | - |
| disabled | 组件 [`<Input>`](#/components/input) 的属性，禁用日历 | Boolean | - |

更多属性文档请参考 [`<Input>`](#/components/input)。
