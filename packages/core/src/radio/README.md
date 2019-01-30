Radio 单选框
===

单选框，在一组备选项中进行单选。

```jsx
import { Radio, RadioGroup } from 'uiw';
```

### 基础用法

适用广泛的基础最简单的用法，展示各种状态下的样式。

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Radio value="1">Radio</Radio>
    <Radio value="2" checked>选中</Radio>
    <Radio value="3" disabled>禁用</Radio>
    <Radio value="4" checked disabled>选中并禁用</Radio>
  </div>
);
```
<!--End-->

### 单选

适用广泛的基础最简单的用法。

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '未知' };
  }
  onChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <RadioGroup name="sexs" value={this.state.value} onChange={this.onChange.bind(this)}>
          <Radio value="man">男</Radio>
          <Radio value="girl">女</Radio>
          <Radio value="shemale" disabled>人妖</Radio>
          <Radio value="unknown" disabled>未知</Radio>
        </RadioGroup>
      </div>
    )
  }
}
```
<!--End-->

### 单选组

设置单选初始值

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '未知' };
  }
  onChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <RadioGroup name="other" value={this.state.value} onChange={this.onChange.bind(this)}>
          <div>Group 1</div>
          <Radio value="男">男</Radio>
          <Radio value="女">女</Radio>
          <div>Group 2</div>
          <Radio value="人妖" disabled>人妖</Radio>
          <Radio value="未知">未知</Radio>
          <div>Group 3</div>
          <Radio value="E" style={{ display: 'block' }}>Item E</Radio>
          <Radio value="F" style={{ display: 'block' }}>Item F</Radio>
        </RadioGroup>
        <Divider />
        <Button
          type="primary"
          onClick={() => {
            // console.log('set::', ['东北菜', '北京烤鸭']);
            this.setState({ value: '女' });
          }}
        >
          点击按钮选"女"
        </Button>
      </div>
    )
  }
}
```
<!--End-->

## Radio

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |
| name | 用于表单对应的名称 | String | - |
| checked | Radio是否被选中 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even) | - |

## RadioGroup 

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |
| name | 用于表单对应的名称 | String | - |
| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even) | - |
