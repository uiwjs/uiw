Slider 滑块
===

通过拖动滑块在一个固定区间内进行选择。

### 基本用法

按钮样式的单选组合。

<!--DemoStart,bgWhite--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
      value2: 10,
    };
  }
  render() {
    return (
      <div>
        <Slider
          value={this.state.value}
          onChange={(value)=> {
            this.setState({ value });
          }}
        />
        <div>当前值：{this.state.value}</div>
        <Divider />
        <Slider
          min={10}
          max={40}
          onChange={(value2)=> {
            // console.log('value2:', value2);
            this.setState({ value2 });
          }}
        />
        <div>可选10~40值范围：<b>{this.state.value2}</b></div>
      </div>
    )
  }
}
```
<!--End-->

## 在表单中使用

在 [`<Form />`](#/components/form) 表单中应用 [`<Slider />`](#/components/slider) 组件，需要设置 `initialValue` 初始值。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <div>
    <Form
      onSubmit={({initial, current}) => {
        if(current.age === initial.age) {
          Notify.error({
            title: '提交失败！',
            description: `表单提交年龄失败，年龄为：${current.age}，与初始化值是一样滴！`,
          });
        } else {
          Notify.success({
            title: '提交成功！',
            description: `表单提交年龄成功，年龄为：${current.age}，将自动填充初始化值！`,
          });
        }
      }}
      fields={{
        age: {
          initialValue: 0,
          labelClassName: 'fieldLabel',
          labelFor: 'age-inline',
          inline: true,
          label: '年龄',
          children: <Slider />
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <div>
            <Row gutter={10}>
              <Col style={{ maxWidth: 300 }}>{fields.age}</Col>
              <Col>{state.current.age}</Col>
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

### 禁用样式

<!--DemoStart,bgWhite--> 
```js
class Demo extends Component {
  render() {
    return (
      <Slider value={25} disabled />
    )
  }
}
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 选择的数值，为数组时即可开启范围选择，并且指定范围 | Number | `0` |
| min | 最小值 | Number | `0` |
| max | 最大值 | Number | `100` |
| disabled | 是否禁用 | Boolean | `false` |
| onChange | 值改变时触发 | Function(value) | - |