OverlayTrigger 基础触发弹出
===

基础弹出触发，配合 `<Tooltip />` 组件使用，弹出框围绕对象指定位置。

```jsx
import { OverlayTrigger } from '@uiw/core';
```

### 基础用法

<!--DemoStart--> 
最简单的用法。
```js
const tooltip = (
  <div style={{ backgroundColor: '#fff', border: '1px solid #333' }}>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </div>
);
const Demo = () => (
  <OverlayTrigger placement="top" overlay={tooltip}>
    <span>鼠标移动到此处，显示和消失触发事件</span>
  </OverlayTrigger>
)
```
<!--End-->

### 配合组件使用

下面配合 [`<Card />`](/components/card) 组件使用。

<!--DemoStart--> 
```js
const card = (
  <Card>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);
const Demo = () => (
  <OverlayTrigger placement="top" overlay={card}>
    <span>鼠标移动到此处，显示和消失触发事件</span>
  </OverlayTrigger>
)
```
<!--End-->

### 点击事件

<!--DemoStart--> 
```js
const card = (
  <Card>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);

class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisbale: false,
    }
  }
  onClick(e, isVisbale) {
    this.setState({ isVisbale })
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <OverlayTrigger
          placement="top"
          trigger="click"
          overlay={card}
        >
          <span onClick={this.onClick.bind(this)}>鼠标<b>点击</b>此处，显示和消失触发子组件事件</span>
        </OverlayTrigger>
        <Divider />
        <div>状态：{this.state.isVisbale ? '' : '不'}可见</div>
      </div>
    )
  }
}
```
<!--End-->

### 鼠标经过事件

<!--DemoStart--> 
```js
const card = (
  <Card>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);

class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisbale: false,
    }
  }
  onVisibleChange(isVisbale) {
    this.setState({ isVisbale })
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <OverlayTrigger
          placement="top"
          onVisibleChange={this.onVisibleChange.bind(this)}
          overlay={card}
        >
          <span>鼠标移动到此处，显示和消失触发事件</span>
        </OverlayTrigger>
        <Divider />
        <div>状态：{this.state.isVisbale ? '' : '不'}可见</div>
      </div>
    )
  }
}
```
<!--End-->


### 延迟进入和消失

延迟属性，只针对 `trigger=hover` 有效。

<!--DemoStart--> 
```js
const card = (
  <Card>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);
const Demo = () => (
  <OverlayTrigger delay={{ show: 0, hide: 4000 }} placement="top" overlay={card}>
    <span>鼠标移动到此处，显示和消失触发事件，延迟 `4s` 消失</span>
  </OverlayTrigger>
)
```
<!--End-->


### 组件受控

通过设置属性visible可以文字提示手动控制状态的展示。

<!--DemoStart--> 
```js
const card = (
  <Card>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);

class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisbale: false,
    }
  }
  onChange(e) {
    this.setState({ isVisbale: e.target.checked });
    console.log('test2 ', e.target.checked);
  }
  onVisibleChange(isVisbale) {
    this.setState({ isVisbale });
    console.log('test1 ',isVisbale);
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <OverlayTrigger
          onVisibleChange={this.onVisibleChange.bind(this)}
          defaultVisible={this.state.isVisbale}
          placement="right"
          overlay={card}
        >
          <span>鼠标移动到此处，显示和消失触发事件，延迟 `4s` 消失</span>
        </OverlayTrigger>
        <Divider />
        <Switch checked={this.state.isVisbale} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| placement | 指定弹出框位置 | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | - |
| trigger | 指定弹出框位置 | Enum{`hover`, `click`} | `hover` |
| fixRect | 获取宽度问题，默认弹框动画出现之前将弹框缩小一倍，动画进入是一个放大效果，这个时候去获取样式的时候就会有计算不准确的情况，如目前自带动画效果，样式 `transform: scale(.5)` 将原来的节点缩小一半，我们获取 Dom 节点的宽度只有原来的一半，这个时候可以通过这个方法来校准，才能获取动画完成之后的尺寸。<br />⚠️ 这不是一个永久 `API` 后期会解决此问题 | Number | `2` |
| delay | 延迟进入和消失，`{ show: 2000, hide: 4000 }` 或者直接设置 `2000`，只对 `trigger=hover` 有效 | Object/Number | - |
| defaultVisible | 默认是否显示弹窗 | Enum{`hover`, `click`} | `hover` |
| onVisibleChange | 显示隐藏的回调 | Function(isVisible:bool) | - |