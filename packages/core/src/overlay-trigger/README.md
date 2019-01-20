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

下面配合 [`<Tooltip />`](/components/tooltip) 组件使用。

<!--DemoStart--> 
```js
const tooltip = (
  <Tooltip>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Tooltip>
);
const Demo = () => (
  <OverlayTrigger placement="top" overlay={tooltip}>
    <span>鼠标移动到此处，显示和消失触发事件</span>
  </OverlayTrigger>
)
```
<!--End-->

### 点击事件

<!--DemoStart--> 
```js
const tooltip = (
  <Tooltip>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Tooltip>
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
          overlay={tooltip}
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

### 点击事件

<!--DemoStart--> 
```js
const tooltip = (
  <Tooltip>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Tooltip>
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
          overlay={tooltip}
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
const tooltip = (
  <Tooltip>
    <strong>Hellow uiw!</strong> Check this info.<br />
    延迟进入和消失
  </Tooltip>
);
const Demo = () => (
  <OverlayTrigger delay={{ show: 0, hide: 4000 }} placement="top" overlay={tooltip}>
    <span>鼠标移动到此处，显示和消失触发事件，延迟 `4s` 消失</span>
  </OverlayTrigger>
)
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| placement | 指定弹出框位置 | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | - |
| trigger | 指定弹出框位置 | Enum{`hover`, `click`} | `hover` |
| delay | 延迟进入和消失，`{ show: 2000, hide: 4000 }` 或者直接设置 `2000`，只对 `trigger=hover` 有效 | Object/Number | - |
| defaultShow | 默认是否显示弹窗 | Enum{`hover`, `click`} | `hover` |
| onVisibleChange | 显示隐藏的回调 | Function(isVisible:bool) | - |