Slider 滑块输入条
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
      value2: -5,
    };
  }
  render() {
    return (
      <div>
        <Slider
          value={this.state.value}
          style={{ maxWidth: 360 }}
          onChange={(value)=> {
            this.setState({ value });
          }}
        />
        <div>设置 progress 值为 <b>"false"</b> 不显示进度条</div>
        <Slider
          progress={false}
          value={this.state.value}
          style={{ maxWidth: 360, marginTop: 30 }}
          onChange={(value)=> {
            this.setState({ value });
          }}
        />
        <div>设置 progress 值为 <b>"#dc3545"</b> 这是一个颜色值，设置进度条颜色</div>
        <Slider
          progress={false}
          progress="#dc3545"
          value={this.state.value}
          style={{ maxWidth: 360, marginTop: 30 }}
          onChange={(value)=> {
            this.setState({ value });
          }}
        />
        <div>当前值：<b>{this.state.value}</b></div>
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

通过设置 `tooltip` 的值，来控制提示的显示。

<!--DemoStart,bgWhite--> 
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <div>设置 tooltip 值为 <b>true</b>，提示将始终显示。</div>
        <Slider value={25} style={{ maxWidth: 260 }} tooltip />
        <Divider />
        <div>设置 tooltip 值为 <b>null</b>，提示将始终不显示。</div>
        <Slider value={25} style={{ maxWidth: 260 }} tooltip={null} />
        <Divider />
        <div>设置 tooltip 值为 <b>false</b>，鼠标经过显示提示。</div>
        <Slider value={25} style={{ maxWidth: 260 }} tooltip={false} />
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
      value3: 20,
    };
  }
  render() {
    return (
      <div>
        <div>刻度 <b>step=10</b> 当前值：<b>{this.state.value}</b></div>
        <Slider
          step={10}
          max={200}
          dots
          value={this.state.value}
          style={{ maxWidth: 460 }}
          onChange={(value)=> {
            this.setState({ value });
          }}
        />
        <Divider />
        <div>刻度 <b>step=0.5</b> 当前值：<b>{this.state.value2}</b></div>
        <Slider
          min={0}
          max={2}
          step={0.5}
          dots
          value={this.state.value2}
          style={{ maxWidth: 460 }}
          onChange={(value2)=> {
            this.setState({ value2 });
          }}
        />
        <Divider />
        <div>刻度 <b>step=3</b>，设置 <b>dots=false</b> 不显示刻度 当前值：<b>{this.state.value3}</b></div>
        <Slider
          value={26}
          min={20}
          max={40}
          step={2}
          value={this.state.value3}
          style={{ maxWidth: 260 }}
          onChange={(value3)=> {
            console.log('value5:', value3);
            this.setState({ value3 });
          }}
        />
      </div>
    )
  }
}
```
<!--End-->

### 标记刻度

<!--DemoStart,bgWhite--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
      value2: 1.5,
      value3: 20,
    };
  }
  render() {
    return (
      <div>
        <div>刻度 <b>step=2</b> 当前值：<b>{this.state.value}</b></div>
        <Slider
          min={-10}
          max={30}
          step={2}
          dots
          value={this.state.value}
          marks={{
            [-10]: '-10°C',
            [-2]: '-2°C',
            0: {
              style: { color: '#af00ff' },
            },
            30: {
              style: { color: '#ff7c00' },
              label: <strong>30°C</strong>,
            }
          }}
          renderMarks={(mark) => `${mark}°C`}
          onChange={(value)=> {
            this.setState({ value });
          }}
        />
        <div>刻度 <b>step=0.5</b> 当前值：<b>{this.state.value2}</b></div>
        <Slider
          min={0}
          max={2}
          step={0.5}
          dots
          marks
          value={this.state.value2}
          style={{ maxWidth: 460 }}
          onChange={(value2)=> {
            this.setState({ value2 });
          }}
        />
        <div>刻度 <b>step=3</b> 当前值：<b>{this.state.value3}</b></div>
        <Slider
          value={26}
          min={20}
          max={44}
          step={2}
          dots
          marks
          value={this.state.value3}
          style={{ maxWidth: 260 }}
          onChange={(value3)=> {
            console.log('value5:', value3);
            this.setState({ value3 });
          }}
        />
      </div>
    )
  }
}
```
<!--End-->

### 禁用样式

<!--DemoStart,bgWhite--> 
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
        <Divider />
        <Slider disabled step={2} value={26} min={20} max={44} dots marks />
      </div>
    )
  }
}
```
<!--End-->

### 垂直方向

<!--DemoStart,bgWhite--> 
```js
class Demo extends Component {
  render() {
    return (
      <Row>
        <Col fixed style={{ width: 70 }}>
          <Slider
            vertical
            min={-10}
            max={30}
            step={2}
            dots
            value={20}
            marks={{
              [-10]: '-10°C',
              [-2]: '-2°C',
              0: ' ',
              2: {
                style: { color: '#af00ff' },
              },
              30: {
                style: { color: '#ff7c00' },
                label: <strong>30°C</strong>,
              }
            }}
            style={{ height: 260 }}
            renderMarks={(mark) => `${mark}°C`}
          />
        </Col>
        <Col fixed>
          <Slider vertical value={25} style={{ height: 260 }} />
        </Col>
        <Col fixed>
          <Slider vertical value={62} progress={false} tooltip style={{ height: 260 }} />
        </Col>
        <Col fixed>
          <Slider vertical value={50} step={10} dots style={{ height: 260 }} />
        </Col>
        <Col fixed>
          <Slider vertical step={2} value={26} min={20} max={44} dots marks style={{ height: 260 }} />
        </Col>
      </Row>
    );
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
| marks | 刻度标记，`key` 的类型必须为 `number` 且取值在闭区间 `min`, `max` 内，每个标签可以单独设置样式，当值为 `Boolean` 值时表示是否显示刻度 | Object/Boolean | - |
| renderMarks | 刻度标记渲染 | Function(mark) => String | - | 
| step | 设置或返回每次拖动滑块控件时的递增量，规定合法数字间隔（如果 `step={3}`，则合法数字是 `0`,`3`,`6`，以此类推） | Number | `1` |
| disabled | 是否禁用 | Boolean | `false` |
| progress | 显示滑动的进度条，设为 `false` 不显示进度条，设为为颜色值，将进度条设为不同的颜色 | Boolean/String | `true` |
| vertical | 值为 `true` 时，`Slider` 为垂直方向。 | Boolean | `false` |
| tooltip | 是否显示提示，若设置为 `true` 提示始终显示，若设置为 `null` 将始终不显示提示。 | Boolean | `false` |
| onChange | 值改变时触发 | Function(value) | - |