TimePicker 时间选择器
===

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

```jsx
import { TimePicker } from 'uiw';
```

## 基础用法

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Row gutter={10}>
    <Col fixed>
      <TimePicker
        onSelected={(formatDate, date) => {
          console.log('--->', formatDate, date);
        }}
      />
    </Col>
    <Col fixed>
      <TimePicker format="HH:mm" precision="minute" />
    </Col>
    <Col fixed>
      <TimePicker format="HH" precision="hour" />
    </Col>
  </Row>
)
```
<!--End-->

## 设置初始值

<!--DemoStart,bgWhite--> 
```js
const Demo = () => {
  const value = new Date(2018, 1, 24, 4,5,35);
  return (
    <Row gutter={10}>
      <Col fixed>
        <TimePicker value={value} />
      </Col>
      <Col fixed>
        <TimePicker value={value} format="HH:mm" precision="minute" />
      </Col>
      <Col fixed>
        <TimePicker value={value} format="HH" precision="hour" />
      </Col>
    </Row>
  )
}
```
<!--End-->

## 表单中应用

在表单返回的数据，并没有将 `format` 格式化后的数据返回给你，而是返回的一个 `Date`，你可以通过 [`<Timestamp>`](#/components/timestamp) 组件重新格式化。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <div>
    <Form
      onSubmit={({initial, current}) => {
        console.log('-->>', initial, current);
        if(current.date) {
          Notify.success({
            title: '提交成功！',
            description: `表单提交时间成功，时间为：${Timestamp('HH:mm:ss', current.date)}`,
          });
        } else {
          Notify.error({
            title: '提交失败！',
            description: <span>表单提交时间成功，时间为：<b>空</b>，将自动填充初始化值！</span>,
          });
        }
      }}
      fields={{
        date: {
          labelClassName: 'fieldLabel',
          labelFor: 'date-inline',
          children: <TimePicker />
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
    </Form>
  </div>
)
```
<!--End-->

## 禁用

可以使用 `disabledHours` `disabledMinutes` `disabledSeconds` 禁用部分时间选择。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Row gutter={10} style={{ maxWidth: 360 }}>
    <Col fixed>
      <TimePicker
        disabledHours={(hour, type, date) => {
          // console.log('~~:', hour, type, date);
          if (hour < 3) {
            return true;
          }
        }}
      />
    </Col>
    <Col>
      <TimePicker disabled />
    </Col>
  </Row>
)
```
<!--End-->

## 不显示禁用

可以使用 `hideDisabled` 将禁用的部分时间隐藏。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Row gutter={10} style={{ maxWidth: 360 }}>
    <Col fixed>
      <TimePicker
        hideDisabled
        disabledHours={(hour, date) => {
          if (hour < 3) {
            return true;
          }
        }}
      />
    </Col>
  </Row>
)
```
<!--End-->

## 间隔时间

可以使用 `hideDisabled` 将禁用的部分时间隐藏。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Row gutter={10} style={{ maxWidth: 360 }}>
    <Col fixed>
      <TimePicker
        hideDisabled
        disabledMinutes={(minute, date) => {
          if (minute % 15 !== 0) {
            return true;
          }
        }}
        disabledSeconds={(second, date) => {
          if (second % 15 !== 0) {
            return true;
          }
        }}
      />
    </Col>
  </Row>
)
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 初始时间值 | Date | - |
| placeholder | 输入框提示文字 | String | - |
| format | 格式化时间，规则查看 [`<Timestamp>`](#/components/timestamp) 文档 | Function | `HH:mm:ss` |
| precision | 选择时间精确度 | Enum{`hour`, `minute`, `second`} | `false` |
| disabled | 禁用全部操作 | Boolean | `false` |
| disabledHours | 禁止选择部分小时选项 | Function(hour, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>selectedDate) | - |
| disabledMinutes | 禁止选择部分分钟选项 | Function(minute, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>selectedDate) | - |
| disabledSeconds | 禁止选择部分秒选项 | Function(second, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>selectedDate) | - |
| hideDisabled | 不可选择的项隐藏 | Boolean | `false` |
| onChange | 时间选择的回调函数 | Function(formatDate, Date, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>, num, disableds) | - |

## Props.inputProps

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| inputProps | 将参数传递给 [`<Input>`](#/components/input) 组件 | `Object` | - |

## Props.popoverProps

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| popoverProps | 将参数传递给 [`<Popover>`](#/components/popover) 组件 | `Object` | - |
