DatePickerInput 日期选择器输入框
===

显示一个月的日历，并允许用户选择单个日期。

```jsx
import { DatePickerInput } from 'uiw';
```

<!--DemoStart--> 
```js
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  onChange(selectedDate) {
    console.log('selectedDate:', selectedDate)
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <DatePickerInput onChange={this.onChange.bind(this)} style={{ marginRight: 10 }} />
        <DatePickerInput disabled onChange={this.onChange.bind(this)} />
        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>
      </div>
    )
  }
}
```
<!--End-->


## 在表单中使用

<!--DemoStart--> 
```js
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };

const Demo = () => (
  <div style={boxStyl}>
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
          initialValue: new Date(),
          labelClassName: 'fieldLabel',
          labelFor: 'date-inline',
          children: <DatePickerInput id="date-inline" />
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        console.log('fields:', state);
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

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 初始时间值 | Date | - |
| onChange | 选择一天时调用。 | Function(selectedDate:Date) | - |
| popoverProps | 将参数传递给 [`<Popover>`](#/components/popover) 组件 | Object | - |
| datePickerProps | 将参数传递给 [`<DatePicker>`](#/components/date-picker) 组件 | Object | - |
| disabled | 组件 [`<Input>`](#/components/input) 的属性，禁用日历 | Boolean | - |

更多属性文档请参考 [`<Input>`](#/components/input)。
