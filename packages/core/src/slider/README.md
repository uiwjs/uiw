Slider 滑块
===

通过拖动滑块在一个固定区间内进行选择，效果比 [`input`](https://www.w3.org/wiki/HTML/Elements/input/range) 类型为 [`range`](https://www.w3.org/wiki/HTML/Elements/input/range) 的功能丰富。

### 基本用法

按钮样式的单选组合。

<!--DemoStart,bgWhite--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
      value2: 30,
    };
  }
  render() {
    return (
      <div>
        <Slider
          value={this.state.value}
          style={{ maxWidth: 260 }}
          onChange={(value)=> {
            this.setState({ value });
          }}
        />
        <div>当前值：{this.state.value}</div>
        <Divider />
        <Slider
          min={-10}
          max={30}
          value={this.state.value2}
          style={{ maxWidth: 260 }}
          onChange={(value2)=> {
            this.setState({ value2 });
          }}
        />
        <div>可选 -10~30值范围：<b>{this.state.value2}</b></div>
      </div>
    )
  }
}
```
<!--End-->

### 在表单中使用

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

### 控制提示显示

<!--DemoStart,bgWhite--> 
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <Slider value={25} style={{ maxWidth: 260 }} tooltip />
        <Divider />
        <Slider value={25} style={{ maxWidth: 260 }} tooltip={null} />
      </div>
    )
  }
}
```
<!--End-->

### 刻度

通过 `step` 设置或返回每次拖动滑块控件时的递增量。

<!--DemoStart,bgWhite--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
      value2: 1.5,
    };
  }
  render() {
    return (
      <div>
        <div>刻度 step=10 当前值：{this.state.value}</div>
        <Slider
          step={10}
          max={200}
          dots
          value={this.state.value}
          style={{ maxWidth: 260 }}
          onChange={(value)=> {
            this.setState({ value });
          }}
        />
        <Divider />
        <div>刻度 step=0.5 当前值：{this.state.value2}</div>
        <Slider
          min={0}
          max={2}
          step={0.5}
          dots
          value={this.state.value2}
          style={{ maxWidth: 260 }}
          onChange={(value2)=> {
            this.setState({ value2 });
          }}
        />
        <Slider
          value={26}
          min={20}
          max={40}
          step={3}
          dots
          style={{ maxWidth: 260 }}
        />
      </div>
    )
  }
}
```
<!--End-->

### 禁用样式

```js
class Demo extends Component {
  render() {
    return (
      <div>
        <Slider value={25} disabled style={{ maxWidth: 260 }} />
        <Divider />
        <Slider
          step={10}
          disabled
          dots
          value={50}
          style={{ maxWidth: 260 }}
        />
      </div>
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
| dots | 显示 `step` 间断点，建议在 `step` 间隔不密集时使用 | Number | `false` |
| step | 设置或返回每次拖动滑块控件时的递增量，规定合法数字间隔（如果 `step={3}`，则合法数字是 `0`,`3`,`6`，以此类推） | Number | `1` |
| disabled | 是否禁用 | Boolean | `false` |
| progress | 显示滑动的进度条，设为 `false` 不显示进度条 | Boolean | `true` |
| tooltip | 是否显示提示，若设置为 `true` 提示始终显示，若设置为 `null` 将始终不显示提示。 | Boolean | `false` |
| onChange | 值改变时触发 | Function(value) | - |