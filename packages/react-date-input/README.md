DateInput 日期输入框
===

显示一个月的日历，并允许用户选择单个日期。

```jsx
import { DateInput } from 'uiw';
// or
import DateInput from '@uiw/react-date-input';
```

## 基本使用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DateInput, Row, Col } from 'uiw';

class Demo extends React.Component {
  onChange(selectedDate) {
    console.log('selectedDate:', selectedDate)
  }
  render() {
    return (
      <Row gutter={10} style={{ maxWidth: 360 }}>
        <Col fixed>
          <DateInput
            value={new Date()}
            datePickerProps={{ todayButton: '今天' }}
            onChange={this.onChange.bind(this)}
          />
        </Col>
        <Col>
          <DateInput
            value={new Date()}
            disabled
            onChange={this.onChange.bind(this)}
          />
        </Col>
      </Row>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

## 在表单中使用

在 [`<Form />`](#/components/form) 表单中应用 [`<DateInput />`](#/components/date-input) 组件。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { DateInput, Notify, Button, Form, Row, Col } from 'uiw';

ReactDOM.render(
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
          initialValue: '2019/02/17',
          labelClassName: 'fieldLabel',
          labelFor: 'date-inline',
          children: <DateInput datePickerProps={{ todayButton: '今天' }} id="date-inline" />
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <Row gutter={10}>
            <Col fixed>{fields.date}</Col>
            <Col>
              <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
            </Col>
          </Row>
        )
      }}
    </Form>,
  _mount_
);
```

## 日期格式

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DateInput } from 'uiw';

class Demo extends React.Component {
  onChange(selectedDate) {
    console.log('selectedDate:', selectedDate);
  }
  render() {
    return (
      <div style={{ maxWidth: 200 }}>
        <DateInput
          format="YYYY # MM # DD"
          datePickerProps={{ todayButton: '今天' }}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

## 日期时间设置

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DateInput } from 'uiw';

class Demo extends React.Component {
  onChange(selectedDate) {
    console.log('selectedDate:', selectedDate);
  }
  render() {
    return (
      <div style={{ maxWidth: 200 }}>
        <DateInput
          format="YYYY/MM/DD HH:mm:ss"
          datePickerProps={{ showTime: true, todayButton: '今天' }}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 初始时间值 | Date | - |
| placeholder | 输入框提示文字 | String | - |
| allowClear | 是否显示清除按钮 | Boolean | true |
| format | 格式化时间，规则查看 [`<formatter>`](#/components/formatter) 文档 | String | `YYYY/MM/DD` |
| onChange | 选择一天时调用。 | Function(selectedDate:Date) | - |
| popoverProps | 将参数传递给 [`<Popover>`](#/components/popover) 组件 | Object | - |
| datePickerProps | 将参数传递给 [`<DatePicker>`](#/components/date-picker) 组件 | Object | - |
| disabled | 组件 [`<Input>`](#/components/input) 的属性，禁用日历 | Boolean | - |

更多属性文档请参考 [`<Input>`](#/components/input)。
