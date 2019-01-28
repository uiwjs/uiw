OverlayTrigger 基础触发弹出
===

基础弹出触发组件，在组件 [`<Overlay>`](/components/overlay) 的基础上添加事件和 12 个方向的位置，组件 [`<Tooltip>`](/components/tooltip)，[`<Popover>`](/components/popover) 是基于这个组件封装的，弹出框围绕对象指定位置。

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
  <Card active>
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
  <Card active>
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
  <Card active>
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
  <Card active>
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
  <Card active>
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
    this.clickChecked = false;
    this.setState({ isVisbale: e.target.checked });
  }
  onVisibleChange(isVisbale) {
    console.log('onVisibleChange: ', isVisbale);
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <OverlayTrigger
          onVisibleChange={this.onVisibleChange.bind(this)}
          visible={this.state.isVisbale}
          placement="right"
          onOpening={(node, isAppearing) => {
            console.log('~~', node, isAppearing);
          }}
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

### usePortal

设置 `usePortal={false}` 将模态对话框生成到根节点的里面。

<!--DemoStart--> 
```js
const card = (
  <Card active>
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
        <div style={{ position: 'relative' }}>
          <OverlayTrigger
            usePortal={false}
            placement="top"
            trigger="click"
            onVisibleChange={this.onVisibleChange.bind(this)}
            overlay={card}
          >
            <span>鼠标移动到此处，显示和消失触发事件</span>
          </OverlayTrigger>
        </div>
        <Divider />
        <div>状态：{this.state.isVisbale ? '' : '不'}可见</div>
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
| trigger | 悬停/点击弹出窗口 | Enum{`hover`, `click`} | `hover` |
| delay | 延迟进入和消失，`{ show: 2000, hide: 4000 }` 或者直接设置 `2000`，只对 `trigger=hover` 有效 | Object/Number | - |
| visible | 默认是否显示弹窗 | Boolean | `false` |
| onVisibleChange | 显示隐藏的回调 | Function(isVisible:bool) | - |