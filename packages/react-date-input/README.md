DateInput 日期输入框
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-date-input/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-date-input.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-date-input)
[![npm version](https://img.shields.io/npm/v/@uiw/react-date-input.svg?label=@uiw/react-date-input)](https://npmjs.com/@uiw/react-date-input)

显示一个月的日历，并允许用户选择单个日期。

```jsx
import { DateInput, DateInputRange } from 'uiw';
// or
import DateInput,{ DateInputRange } from '@uiw/react-date-input';
// 在 `v4.13.0` 版本中增加 DateInputRange 组件
```

## 基本使用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DateInput, DateInputRange, Row, Col } from 'uiw';

function Demo () {

  const [dataRange,dataRangeSet] =React.useState(['2022-02-25 15:06:24','2022-02-27 14:47:32'])

 function onChange(selectedDate,dataRange) {
    console.log('selectedDate',selectedDate,dataRange)
  }
    return (
      <div>
        <Row gutter={10} style={{ maxWidth: 360,marginBottom:10 }}>
          <Col fixed>
            <DateInput
              value={new Date()}
              datePickerProps={{ todayButton: '今天' }}
              onChange={onChange}
            />
          </Col>
          <Col>
            <DateInput
              value={new Date()}
              disabled
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col>
            <DateInputRange
              bodyStyle={{width:350}}
              format="YYYY/MM/DD HH:mm:ss"
              value={dataRange}
              datePickerProps={{ todayButton: '今天',showTime:true }}
              onChange={onChange}
            />
          </Col>
        </Row>
      </div>
    )
}
ReactDOM.render(<Demo />, _mount_);
```

## 在表单中使用

在 [`<Form />`](#/components/form) 表单中应用 [`<DateInput />`](#/components/date-input) 组件。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DateInput,DateInputRange, Notify, Button, Form, Row, Col } from 'uiw';

function Demo(){
  const form = React.useRef(null)

  const resetDateRange = () => {
    form.current.resetForm()
  }

  const setDateRange = () => {
    form.current.setFields({dateRange:[new Date(),new Date()]})
  }

  return (
    <Form
      ref={form}
      onSubmit={({ initial, current }) => {
        if (current.date) {
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
      }}
      fields={{
        date: {
          initialValue: '2019/02/17',
          labelClassName: 'fieldLabel',
          labelFor: 'date-inline',
          children: <DateInput datePickerProps={{ todayButton: '今天' }} id="date-inline" />
        },
        dateRange: {
          initialValue: ['2019/02/17', '2019/02/20'],
          labelClassName: 'fieldLabel',
          labelFor: 'date-inline',
          children: <DateInputRange datePickerProps={{ todayButton: '今天' }} id="date-inline" />
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <div>
            <Row gutter={10}>
              <Col fixed>{fields.date}</Col>
            </Row>
            <Row gutter={10}>
              <Col fixed>{fields.dateRange}</Col>
            </Row>
            <Row gutter={10}>
              <Col>
                <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
                <Button onClick={resetDateRange} >重置</Button>
                <Button onClick={setDateRange}>setValue</Button>
              </Col>
            </Row>
          </div>
        )
      }}
    </Form>
  )
}

ReactDOM.render(<Demo />, _mount_);
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
| ---- | ---- | ---- | ---- |
| value | 初始时间值 | Date | - |
| placeholder | 输入框提示文字 | String | - |
| allowClear | 是否显示清除按钮 | Boolean | true |
| format | 格式化时间，规则查看 [`<formatter>`](#/components/formatter) 文档 | String | `YYYY/MM/DD` |
| onChange | 选择一天时调用。 | Function(selectedDate:Date) | - |
| popoverProps | 将参数传递给 [`<Popover>`](#/components/popover) 组件 | Object | - |
| datePickerProps | 将参数传递给 [`<DatePicker>`](#/components/date-picker) 组件 | Object | - |
| disabled | 组件 [`<Input>`](#/components/input) 的属性，禁用日历 | Boolean | - |

组件 `DateInput` 继承 `<Input>` 组件，更多属性文档请参考 [`<Input>`](#/components/input)。

## DateInputRange

在 `v4.13.0` 版本中增加 `DateInputRange` 组件。

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| value | 初始时间值 | Array<Date, string> | - |
| placeholder | 输入框提示文字 | String | - |
| allowClear | 是否显示清除按钮 | Boolean | true |
| format | 格式化时间，规则查看 [`<formatter>`](#/components/formatter) 文档 | String | `YYYY/MM/DD` |
| onChange | 选择一天时调用。 | Function(selectedDate:Date, dateRange: Array<Date>) | - |
| popoverProps | 将参数传递给 [`<Popover>`](#/components/popover) 组件 | Object | - |
| datePickerProps | 将参数传递给 [`<DatePicker>`](#/components/date-picker) 组件 | Object | - |
| disabled | 组件 [`<Input>`](#/components/input) 的属性，禁用日历 | Boolean | - |
| bodyStyle | 选择框样式  | Object | { width: 300 } | - |

组件 `DateInputRange` 继承 `<Input>` 组件，更多属性文档请参考 [`<Input>`](#/components/input)。

