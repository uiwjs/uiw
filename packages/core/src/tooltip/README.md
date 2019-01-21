Tooltip 文字提示
===

简单的文字提示气泡框。

```jsx
import { Tooltip, OverlayTrigger } from '@uiw/core';
```

### 基础用法

最简单的用法。

<!--DemoStart--> 
```js
const Demo = () => (
  <>
    <Tooltip placement="right" content="右边文字提示">
      <Button type="primary">右边文字提示(right)</Button>
    </Tooltip>
    <Tooltip placement="top" content="上边文字提示">
      <Button type="primary">上边文字提示(top)</Button>
    </Tooltip>
    <Tooltip placement="left" content="左边文字提示">
      <Button type="primary">左边文字提示(left)</Button>
    </Tooltip>
    <Tooltip placement="bottom" content="下边文字提示">
      <Button type="primary">下边文字提示(bottom)</Button>
    </Tooltip>
  </>
)
```
<!--End-->


### 位置

位置有 `12` 个方向，根据 `placement` 参数来设置。

<!--DemoStart-->
```js
const Demo = () => {
  return (
    <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
      <Tooltip placement="left" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">左边文字提示(left)</Button>
      </Tooltip>

      <Tooltip placement="top" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">上边文字提示(top)</Button>
      </Tooltip>

      <Tooltip placement="bottom" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">下边文字提示(bottom)</Button>
      </Tooltip>

      <Tooltip placement="right" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">右边文字提示(right)</Button>
      </Tooltip>

      <Divider />

      <Tooltip placement="topLeft" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">上左(topLeft)</Button>
      </Tooltip>
      <Tooltip placement="top" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">上(top)</Button>
      </Tooltip>
      <Tooltip placement="topRight" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">上右(topRight)</Button>
      </Tooltip>

      <Divider />

      <Tooltip placement="leftTop" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">左上(leftTop)</Button>
      </Tooltip>
      <Tooltip placement="rightTop" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">上右(rightTop)</Button>
      </Tooltip>

      <Divider />

      <Tooltip placement="left" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">左(left)</Button>
      </Tooltip>
      <Tooltip placement="right" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">右(right)</Button>
      </Tooltip>

      <Divider />

      <Tooltip placement="leftBottom" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">左下(leftBottom)</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">右下(rightBottom)</Button>
      </Tooltip>

      <Divider />

      <Tooltip placement="bottomLeft" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">下左(bottomLeft)</Button>
      </Tooltip>
      <Tooltip placement="bottom" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">下(bottom)</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" content={<strong>Hello uiw!</strong>}>
        <Button type="primary">下右(right)</Button>
      </Tooltip>

    </div>
  )
}
```
<!--End-->

### 事件

文字提示组件 `<Tooltip />`，通过设置属性 `trigger` 可以文字提示操作方式。

<!--DemoStart-->
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>

    <Tooltip trigger="hover" placement="top" content="Hello uiw!">
      <Button type="primary">悬浮弹出文字提示(top)</Button>
    </Tooltip>
    <Tooltip trigger="click" placement="top" content="Hello uiw!">
      <Button type="primary">点击弹出提示(top)</Button>
    </Tooltip>

  </div>
)
```
<!--End-->

### 文字提示框不显示箭头

通过设置属性 `visibleArrow` 可以文字提示框不显示箭头。

<!--DemoStart-->
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>

    <Tooltip visibleArrow={false} trigger="hover" placement="top" content="Hello uiw!">
      <Button type="primary">悬浮弹出文字提示(top)</Button>
    </Tooltip>
    <Tooltip visibleArrow={false} trigger="click" placement="right" content="Hello uiw!">
      <Button type="primary">点击弹出提示(right)</Button>
    </Tooltip>

  </div>
)
```
<!--End-->


## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| content | 显示的内容 | String,React.ReactNode | - |
| placement | 气泡框位置，可现实箭头在不通的方位 | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | `top` |
| visibleArrow | 是否显示 Tooltip 箭头 | Boolean | `true` |
| delay | 延迟进入和消失，`{ show: 2000, hide: 4000 }` 或者直接设置 `2000`，只对 `trigger=hover` 有效 | `<OverlayTrigger />` | - |
| visible | 状态是否可见 | `<OverlayTrigger />` | false |
| onVisibleChange | 显示隐藏的回调 | `<OverlayTrigger />` | - |

