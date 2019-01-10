Overlay 基础弹出层
===

这是一个基础的弹出层组件，其它弹出层组件基于它来扩展比如 [`<Modal />`](#)、[`<Alert />`](#)

```jsx
import { Overlay } from '@uiw/core';
```

### 基本用法

<!--DemoStart--> 
```js
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
      <Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay.bind(this)}>
        <Card bordered={false} style={{ width: 500 }}>
            <h3 style={{marginTop: 0}}>基础弹出层</h3>
            <Divider />
            <Button type="danger" onClick={this.toggleOverlay.bind(this)}>关闭</Button>
        </Card>
      </Overlay>
    </div>
    )
  }
}
```
<!--End-->

## 动画样式

可以根据动画样式看 [`animate.css`](https://daneden.github.io/animate.css/) 添加不同的出入动画。下面是 `Overlay` 组件默认的 [`Less`](http://lesscss.org/) 生成 CSS 动画的实例代码，定义 `transitionName` 动画样式名字为 `w-overlay`

```less
@overlay-prefix:~"w-overlay";
// 遮罩层动画
.@{overlay-prefix}-backdrop.@{overlay-prefix} {
  &-enter {
    opacity: 0.01;
  }
  &-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  &-exit {
    opacity: 1;
  }
  &-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
}
// 对话框动画
.@{overlay-prefix}-content.@{overlay-prefix} {
  &-enter, &-exit-active {
    transform: scale(.5);
    opacity: 0;
  }

  &-enter-active {
    transform: translate(0);
    opacity: 1;
    transition-property: transform, opacity;
    transition-duration: 300ms;
    transition-timing-function: ease;
    transition-delay: 0
  }

  &-exit {
    transform: translate(0);
    opacity: 1
  }

  &-exit-active {
    transform: scale(.5);
    opacity: 0;
    transition-property: transform,opacity;
    transition-duration: 300ms;
    transition-timing-function: ease;
    transition-delay: 0
  }
}
```

## Overlay

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| isOpen | 对话框是否可见 | boolean | `false` |
| maskClosable | 点击遮罩层是否允许关闭 | bool | `true` |
| backdropProps | 遮罩层 HTML 属性设置 | object | `{}` |
| hasBackdrop | 是否向 `<body>` 添加样式 `.w-overlay-open` 防止滚动条出现 | bool | `true` |
| transitionName | 内部 [`CSSTransitionsss`](http://reactcommunity.org/react-transition-group/css-transition/) 的转换名称。在此提供您自己的名称将需要定义新的 CSS 过渡属性。 | string | `w-overlay` |
| transitionDuration | 持续时间 | number | `300` |
| onOpening | 顺序 `1`，**`打开`**立即执行，在应用 `enter-active` 或 `appear-active` 类后立即触发 [`<Transition>`](http://reactcommunity.org/react-transition-group/transition/) 回调。 | Function(node: HtmlElement, isAppearing: bool) | - |
| onOpened | 顺序 `2`，**`打开`**动画播放完成执行，在应用 `exiting` 状态之前启动回调。 | Function(node: HtmlElement, isAppearing: bool) | - |
| onClosing | 顺序 `3`，**`关闭`**立即执行，应用 `exit-active` 后立即触发 [`<Transition>`](http://reactcommunity.org/react-transition-group/transition/) 回调。 | Function(node: HtmlElement) | - |
| onClosed | 顺序 `4`，**`关闭`**动画播放完成立即执行，删除 `exit` 类后立即触发 [`<Transition>`](http://reactcommunity.org/react-transition-group/transition/) 回调，并将 `exit-done` 类添加到 DOM 节点。 | Function(node: HtmlElement) | - |