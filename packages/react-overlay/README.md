Overlay 基础弹出层
===

这是一个基础的弹出层组件，其它弹出组件的抽象组件，都基于它来扩展比如 [`<Modal>`](#/components/modal)、[`<Dawer>`](#/components/drawer)、[`<Alert>`](#/components/alert)、[`<OverlayTrigger>`](#/components/overlay-trigger)、[`<Popover>`](#/components/popover)、[`<Tooltip>`](#/components/tooltip) 等。

```jsx
import { Overlay } from 'uiw';
```

### 基本用法

<!--DemoStart,bgWhite,codePen--> 
```js
import { Overlay, Button, Card } from 'uiw';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      hasBackdrop: true,
    }
  }
  toggleOverlay(hasBackdrop, e) {
    this.setState({ isOpen: !this.state.isOpen, hasBackdrop });
  }
  onClose(e) {
    this.setState({ isOpen: false });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.toggleOverlay.bind(this, true)}>点击弹出内容</Button>
        <Button type="primary" onClick={this.toggleOverlay.bind(this, false)}>弹出内容没有遮罩层</Button>
        <Overlay
          hasBackdrop={this.state.hasBackdrop}
          isOpen={this.state.isOpen}
          onClose={this.onClose.bind(this)}
        >
          <Card active bordered={!this.state.hasBackdrop} style={{ width: 500 }}>
            <h3 style={{margin: 0}}>基础弹出层</h3>
            <div>
              这是一个基础的弹出层组件，其它弹出层组件基于它来扩展比如 Modal、Alert
            </div>
            <br />
            <Button type="danger" onClick={this.toggleOverlay.bind(this, false)}>关闭</Button>
          </Card>
        </Overlay>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 完全定制弹出容器

<!--DemoStart,bgWhite,codePen--> 
```js
import { Overlay, Button } from 'uiw';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      hasBackdrop: true,
    }
  }
  toggleOverlay(hasBackdrop, e) {
    this.setState({ isOpen: !this.state.isOpen, hasBackdrop });
  }
  onClose(e) {
    this.setState({ isOpen: false });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.toggleOverlay.bind(this, true)}>点击弹出内容</Button>
        <Overlay
          backdropProps={{
            style: { backgroundColor: 'rgba(0, 0, 0, .5)' }
          }}
          hasBackdrop={this.state.hasBackdrop}
          isOpen={this.state.isOpen} onClose={this.onClose.bind(this)}
        >
          <div style={{ backgroundColor: '#fff', minWidth: 500 }} >
            <Icon
              onClick={this.onClose.bind(this)}
              type="circle-close"
              style={{
                position: 'absolute',
                right: 0,
                top: '-20px',
                color: '#fff',
                cursor: 'pointer',
              }}
            />
            <div
              style={{
                backgroundColor: 'rgb(0, 204, 180)',
                color: 'rgb(255, 255, 255)',
                textAlign: 'center',
                padding: '34px 24px',
              }}
            >
              <h1
                style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'rgb(255, 255, 255)',
                  lineHeight: '1.2',
                  margin: '0px',
                }}
              >
                下次预订可享 5 ￥ 优惠
              </h1>
              <div style={{ padding: '5px 0' }}>(5 ￥ ~ ¥38)</div>
              <div style={{ fontSize: '18px' }}>使用促销码： <b style={{ color: '#f8e71c', margin: '0px 4px' }}>KSGI5</b></div>
            </div>
            <div style={{ padding: '24px' }}>
              <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'rgb(23, 27, 30)', lineHeight: '1.2', margin: '0px 0px 4px' }}>订阅 uiw 组件新闻通讯</h1>
              <div style={{ color: 'rgb(70, 81, 94)' }}>在收件箱中接收独家更新信息</div>
            </div>
          </div>
        </Overlay>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### usePortal

[`Portals`](https://reactjs.org/docs/portals.html#event-bubbling-through-portals) 是 react 16 提供的官方解决方案，使得组件可以脱离父组件层级挂载在 DOM 树的任何位置，我们利用这个方法，可将模态对话框生成到根节点的外面，默认情况生成到跟节点的外面，通过将 `usePortal` 设置为 `false` 将对话框生成在父组件层级挂载的 DOM 树中。 

<!--DemoStart,bgWhite,noScroll,codePen--> 
```js
import { Overlay, Button, Card } from 'uiw';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  toggleOverlay(e) {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.toggleOverlay.bind(this)}>点击弹出内容</Button>
        <Overlay usePortal={false} isOpen={this.state.isOpen} onClose={this.toggleOverlay.bind(this)}>
          <Card active style={{ width: 500 }}>
            <h3 style={{marginTop: 0}}>基础弹出层</h3>
            <p>Portals 是 react 16 提供的官方解决方案，使得组件可以脱离父组件层级挂载在DOM树的任何位置，我们利用这个方法，可将模态对话框生成到根节点的外面，默认情况生成到跟节点的外面，通过将 usePortal 设置为 false 将对话框生成在父组件层级挂载的DOM树中。</p>
            <Button type="danger" onClick={this.toggleOverlay.bind(this)}>关闭</Button>
          </Card>
        </Overlay>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 自定义动画

动画过渡效果是根据 [`react-transition-group`](https://github.com/reactjs/react-transition-group) 组件封装。动画时长参数 `timeout={1000}` 是根据 CSS 动画样式持续时长来定义。

> 注意：`@3.2.0` ~~`transitionDuration={1000}`~~ 更名为 `timeout`

<!--DemoStart,bgWhite,codePen--> 
```js
import { Overlay, Button, Card } from 'uiw';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  toggleOverlay(e) {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
    <div>
      <Button type="primary" onClick={this.toggleOverlay.bind(this)}>点击弹出内容</Button>
      <Overlay
        transitionName="animation-flipX"
        timeout={1000}
        isOpen={this.state.isOpen}
        onClose={this.toggleOverlay.bind(this)}
      >
        <Card style={{ width: 500 }}>
          <h3 style={{marginTop: 0}}>基础弹出层</h3>
          <p>Portals 是 react 16 提供的官方解决方案，使得组件可以脱离父组件层级挂载在DOM树的任何位置，我们利用这个方法，可将模态对话框生成到根节点的外面，默认情况生成到跟节点的外面，通过将 usePortal 设置为 false 将对话框生成在父组件层级挂载的DOM树中。</p>
          <Button type="danger" onClick={this.toggleOverlay.bind(this)}>关闭</Button>
        </Card>
      </Overlay>
    </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

你可以根据动画样式库 [**`animate.css`**](https://daneden.github.io/animate.css/) 添加不同的出入动画。默认通过的 [`Less`](http://lesscss.org/) 生成 CSS 动画的实例代码，定义 `transitionName` 动画样式名字为 `animation-bouce`，下面是上面实例的样式：

```less
@animation-prefix:~"animation-flipX";
// 遮罩层动画
// Background animation
.@{animation-prefix}-enter .w-overlay-backdrop {
  opacity: 0.01;
}
.@{animation-prefix}-enter-active .w-overlay-backdrop {
  opacity: 1;
  transition: opacity 1s ease-in;
}
.@{animation-prefix}-exit .w-overlay-backdrop {
  opacity: 1;
}
.@{animation-prefix}-exit-active .w-overlay-backdrop {
  opacity: 0.01;
  transition: opacity 1s ease-in;
}
// 对话框动画
// Content animation
.@{animation-prefix}-enter-active .w-overlay-content {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: flipInX
}
.@{animation-prefix}-exit-active .w-overlay-content {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: flipOutX
}

.@{animation-prefix}-enter,
.@{animation-prefix}-enter-done,
.@{animation-prefix}-exit {
  display: inherit;
}

@keyframes flipOutX {
  0% {
      transform: perspective(400px)
  }

  30% {
      transform: perspective(400px) rotateX(-20deg);
      opacity: 1
  }

  to {
      transform: perspective(400px) rotateX(90deg);
      opacity: 0
  }
}

@keyframes flipInX {
  0% {
    transform: perspective(400px) rotateX(90deg);
    animation-timing-function: ease-in;
    opacity: 0
  }

  40% {
    transform: perspective(400px) rotateX(-20deg);
    animation-timing-function: ease-in
  }

  60% {
    transform: perspective(400px) rotateX(10deg);
    opacity: 1
  }

  80% {
    transform: perspective(400px) rotateX(-5deg)
  }

  to {
    transform: perspective(400px)
  }
}
```

## Overlay

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| isOpen | 对话框是否可见 | boolean | `false` |
| usePortal | 使用 react 16 提供的官方解决方案 [`Portals`](https://reactjs.org/docs/portals.html#event-bubbling-through-portals)，将模态对话框生成到根节点的外面。 |  boolean | `true` |
| maskClosable | 点击遮罩层是否允许关闭 | boolean | `true` |
| portalProps | 设置 [`Portal`](#/components/portal) 组件属性 | object | `{}` |
| backdropProps | 遮罩层 HTML 属性设置 | object | `{}` |
| dialogProps | 弹出目标(对话框) HTML 属性设置 | object | - |
| unmountOnExit | 默认 `true` 退出动画卸载组件 | boolean | `true` |
| hasBackdrop | 是否有背景，是否向 `<body>` 添加样式 `.w-overlay-open` 防止滚动条出现 | boolean | `true` |
| transitionName | 内部 [`CSSTransitionsss`](http://reactcommunity.org/react-transition-group/css-transition/) 的转换名称。在此提供您自己的名称将需要定义新的 CSS 过渡属性。 | string | `w-overlay` |
| timeout | ~~transitionDuration~~ 更名为 `timeout` 持续时间 | number | `300` |
| onClose | 点击遮罩层回调函数，通过这个函数设置 `isOpen=false` 关闭。**`onClosed`** 是弹出框关闭动画执行完成后的回调函数，有明显区别容易混淆。 | Function | - |
| onEnter | 顺序 `1`，应用 `enter` 或 `appear` 后立即触发 [`<CSSTransition>`](http://reactcommunity.org/react-transition-group/transition/) 回调。。 | Function(node: HtmlElement, isAppearing: bool) | - |
| onOpening | 顺序 `2`，**`打开`**立即执行，在应用 `enter-active` 或 `appear-active` 类后立即触发 [`<CSSTransition>`](http://reactcommunity.org/react-transition-group/transition/) 回调。 | Function(node: HtmlElement, isAppearing: bool) | - |
| onOpened | 顺序 `3`，**`打开`**动画播放完成执行，在应用 `exiting` 状态之前启动回调。 | Function(node: HtmlElement, isAppearing: bool) | - |
| onClosing | 顺序 `4`，**`关闭`**立即执行，应用 `exit-active` 后立即触发 [`<CSSTransition>`](http://reactcommunity.org/react-transition-group/transition/) 回调。 | Function(node: HtmlElement) | - |
| onClosed | 顺序 `5`，**`关闭`**动画播放完成立即执行，删除 `exit` 类后立即触发 [`<CSSTransition>`](http://reactcommunity.org/react-transition-group/transition/) 回调，并将 `exit-done` 类添加到 DOM 节点。 | Function(node: HtmlElement) | - |

支持传递 [`<CSSTransition>`](http://reactcommunity.org/react-transition-group/transition/) 原事件覆盖当前事件，请查看 [`<CSSTransition>`](http://reactcommunity.org/react-transition-group/transition/) 文档。