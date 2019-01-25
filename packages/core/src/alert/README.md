Alert 确认对话框
===

弹出对话框会在继续之前，通知用户重要信息，点击确定后异步关闭对话框。

```jsx
import { Alert } from '@uiw/core';
```

## 基本用法

<!--DemoStart--> 
```js
class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible1: false,
      visible2: false,
    }
  }
  onClick(type) {
    this.setState({ [type]: !this.state[type] });
  }
  onClosed(type) {
    this.setState({ [type]: false });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <Alert
          isOpen={this.state.visible1}
          confirmText="确定按钮"
          onClosed={this.onClosed.bind(this, 'visible1')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible2}
          confirmText="确定按钮"
          cancelText="取消按钮"
          type="danger"
          onConfirm={() => console.log('您点击了确定按钮！')}
          onCancel={() => console.log('您点击了取消按钮！')}
          onClosed={this.onClosed.bind(this, 'visible2')}
        >
          这个对话框有两个按钮，单击 “<b>确定按钮</b>” 或 “<b>取消按钮</b>” 后，此对话框将关闭，触发 “<b>onConfirm</b>” 或 “<b>onCancel</b>” 事件。用作通知用户重要信息。
        </Alert>
        <ButtonGroup style={{ marginTop: 5 }}>
          <Button onClick={this.onClick.bind(this, 'visible1')}>单个按钮确认对话框</Button>
          <Button onClick={this.onClick.bind(this, 'visible2')}>确认对话框</Button>
        </ButtonGroup>
      </div>
    )
  }
}
```
<!--End-->

## 延迟关闭对话框

这里是利用 `Promise` 等它执行完成再去关闭窗口

<!--DemoStart--> 
```js
class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }
  onClick() {
    this.setState({ visible: !this.statevisible });
  }
  onClosed() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <Alert
          icon="delete"
          isOpen={this.state.visible}
          confirmText="确定按钮"
          type="danger"
          onConfirm={() => {
            console.log('确定回调！, 这里是利用Promise等执行完成再去关闭窗口');
            return new Promise((resolve, reject) => {
              const random = Math.random();
              console.log('测试，随机值大于 0.5 执行 resolve 事件，否则 执行 reject 触发 catch 错误', random, random > 0.5)
              setTimeout(random > 0.5 ? resolve : reject, 3000);
            }).catch(() => {
              // 可以通过下面方式，阻止弹框消失
              // throw new Error();
            });
          }}
          onClosed={this.onClosed.bind(this, 'visible')}
        >
          这是一个单击 “<b>确定按钮</b>” 延迟关闭对话框的实例，关闭对话框触发 “<b>onConfirm</b>” 或 “<b>onCancel</b>” 事件。<br /><br /> 这里是利用 <b>Promise</b> 的特性，等它执行完成后，再去关闭窗口，达到延迟关闭的效果。<br /><br />
          这个测试例子，生成随机值判断是否大于 <b>0.5</b> 执行 <b>resolve</b> 事件，否则 执行 <b>reject</b> 触发 <b>catch</b> 错误。
        </Alert>
        <Button onClick={this.onClick.bind(this, 'visible')}>延迟关闭对话框</Button>
      </div>
    )
  }
}
```
<!--End-->

## 带图标的弹出框

通过设置 `icon` 和 `type` 参数设置带状态的弹出对话框。

<!--DemoStart--> 
```js
class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible1: false,
      visible2: false,
    }
  }
  onClick(type) {
    this.setState({ [type]: !this.state[type] });
  }
  onClosed(type) {
    this.setState({ [type]: false });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <Alert
          isOpen={this.state.visible1}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="information"
          type="primary"
          onClosed={this.onClosed.bind(this, 'visible1')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible2}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="circle-check"
          type="success"
          onClosed={this.onClosed.bind(this, 'visible2')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible3}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="warning"
          type="warning"
          onClosed={this.onClosed.bind(this, 'visible3')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible4}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="circle-close"
          type="danger"
          onClosed={this.onClosed.bind(this, 'visible4')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible5}
          confirmText="确定按钮"
          cancelText="取消按钮"
          type="light"
          onClosed={this.onClosed.bind(this, 'visible5')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible6}
          confirmText="确定按钮"
          cancelText="取消按钮"
          type="dark"
          onClosed={this.onClosed.bind(this, 'visible6')}
        >
          这个对话框有两个按钮，单击 “<b>确定按钮</b>” 或 “<b>取消按钮</b>” 后，此对话框将关闭，触发 “<b>onConfirm</b>” 或 “<b>onCancel</b>” 事件。用作通知用户重要信息。
        </Alert>
        <ButtonGroup style={{ marginTop: 5 }}>
          <Button onClick={this.onClick.bind(this, 'visible1')} type="primary">主要</Button>
          <Button onClick={this.onClick.bind(this, 'visible2')} type="success">成功</Button>
          <Button onClick={this.onClick.bind(this, 'visible3')} type="warning">警告</Button>
          <Button onClick={this.onClick.bind(this, 'visible4')} type="danger">错误</Button>
          <Button onClick={this.onClick.bind(this, 'visible5')} type="light">亮按钮</Button>
          <Button onClick={this.onClick.bind(this, 'visible6')} type="dark">暗按钮</Button>
        </ButtonGroup>
      </div>
    )
  }
}
```
<!--End-->

## Props

此组件继承 [`<Overlay>`](/components/overlay) 的属性，所以部分参数可以参考 `<Overlay>` 组件。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| onCancel | 取消按钮的回调函数 | Function(e) | - |
| onConfirm | 点击确定按钮回调 | Function(e) | - |
| cancelText | 取消按钮文字， | String | - |
| confirmText | 确认按钮文字 | String | `确认` |
| icon | 设置对话框右上角图标，，设置 `type` 将图标设置不同的颜色。当前属性为 [`<Icon>`]](/components/icon) 组件的 `type` 属性，所以可以参考该组件自定义图标。 | String/ReactNode | `确认` |
| isOpen[`<Overlay>`](/components/overlay) | 对话框是否可见 | Boolean | `false` |
| type | 按钮类型跟 `<Button>` 组件的 `type` 参数一致，同时会影响按钮颜色。 | String | `light` |
