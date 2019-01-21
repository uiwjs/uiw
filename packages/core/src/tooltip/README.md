Tooltip 文字提示
===

简单的文字提示气泡框。

```jsx
import { Tooltip, OverlayTrigger } from '@uiw/core';
```

### 基础用法

<!--DemoStart--> 
最简单的用法。
```js
const Demo = () => {
  return (
    <>
      <Tooltip placement="right"> 右边文字提示 </Tooltip>
      <Tooltip placement="top"> 上边文字提示 </Tooltip>
      <Tooltip placement="left"> 左边文字提示 </Tooltip>
      <Tooltip placement="bottom"> 下边文字提示 </Tooltip>
    </>
  )
}
```
<!--End-->

### 位置

位置有 `12` 个方向，配合 `<OverlayTrigger />` 组件使用。

<!--DemoStart-->
```js
const tooltip = (
  <Tooltip>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Tooltip>
);
const Demo = () => {
  return (
    <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
      <OverlayTrigger placement="left" overlay={tooltip}>
        <Button type="primary">左边文字提示(left)</Button>
      </OverlayTrigger>

      <OverlayTrigger placement="top" overlay={tooltip}>
        <Button type="primary">上边文字提示(top)</Button>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={tooltip}>
        <Button type="primary">下边文字提示(bottom)</Button>
      </OverlayTrigger>

      <OverlayTrigger placement="right" overlay={tooltip}>
        <Button type="primary">右边文字提示(right)</Button>
      </OverlayTrigger>

      <Divider />

      <OverlayTrigger placement="topLeft" overlay={tooltip}>
        <Button type="primary">上左(topLeft)</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={tooltip}>
        <Button type="primary">上(top)</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="topRight" overlay={tooltip}>
        <Button type="primary">上右(topRight)</Button>
      </OverlayTrigger>

      <Divider />

      <OverlayTrigger placement="leftTop" overlay={tooltip}>
        <Button type="primary">左上(leftTop)</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="rightTop" overlay={tooltip}>
        <Button type="primary">上右(rightTop)</Button>
      </OverlayTrigger>

      <Divider />

      <OverlayTrigger placement="left" overlay={tooltip}>
        <Button type="primary">左(left)</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="right" overlay={tooltip}>
        <Button type="primary">右(right)</Button>
      </OverlayTrigger>

      <Divider />

      <OverlayTrigger placement="leftBottom" overlay={tooltip}>
        <Button type="primary">左下(leftBottom)</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="rightBottom" overlay={tooltip}>
        <Button type="primary">右下(rightBottom)</Button>
      </OverlayTrigger>

      <Divider />

      <OverlayTrigger placement="bottomLeft" overlay={tooltip}>
        <Button type="primary">下左(bottomLeft)</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="bottom" overlay={tooltip}>
        <Button type="primary">下(bottom)</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="bottomRight" overlay={tooltip}>
        <Button type="primary">下右(right)</Button>
      </OverlayTrigger>

    </div>
  )
}
```
<!--End-->

### 事件

文字提示组件 `<Tooltip />`，配合 `<OverlayTrigger />` 组件使用，通过设置属性 `trigger` 可以文字提示操作方式。

<!--DemoStart-->
```js
const tooltip = (
  <Tooltip>
    <strong>Hellow uiw!</strong>
  </Tooltip>
);
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>

    <OverlayTrigger usePortal={false} trigger="hover" placement="top" overlay={tooltip}>
      <Button type="primary">悬浮弹出文字提示(top)</Button>
    </OverlayTrigger>
    <OverlayTrigger usePortal={false} trigger="click" placement="top" overlay={tooltip}>
      <Button type="primary">点击弹出提示(top)</Button>
    </OverlayTrigger>

  </div>
)
```
<!--End-->

### 文字提示框不显示箭头

通过设置属性 `visibleArrow` 可以文字提示框不显示箭头。

<!--DemoStart-->
```js
const tooltip = (
  <Tooltip visibleArrow={false}>
    <strong>Hellow uiw!</strong> Check this info. Check this info.
  </Tooltip>
);
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>

    <OverlayTrigger trigger="hover" placement="top" overlay={tooltip}>
      <Button type="primary">悬浮弹出文字提示(top)</Button>
    </OverlayTrigger>
    <OverlayTrigger usePortal={false} trigger="click" placement="right" overlay={tooltip}>
      <Button type="primary">点击弹出提示(right)</Button>
    </OverlayTrigger>

  </div>
)
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| placement | 气泡框位置，可现实箭头在不通的方位 | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | `top` |
| visibleArrow | 是否显示 Tooltip 箭头 | Boolean | `true` |
