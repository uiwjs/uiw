Tooltip 文字提示
===

简单的文字提示气泡框。


### 基础用法

<!--DemoStart--> 
最简单的用法。
```js
const rightStyl = { marginRight: '10px' }
const Demo = () => {
  return (
    <>
      <Tooltip placement="right"> 上边文字提示 </Tooltip>
      <Tooltip placement="top"> 左边文字提示 </Tooltip>
      <Tooltip placement="left"> 下边文字提示 </Tooltip>
      <Tooltip placement="bottom"> 右边文字提示 </Tooltip>
    </>
  )
}
```
<!--End-->


## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| placement | 气泡框位置，可现实箭头在不通的方位 | Enum{`top`, `topLeft`, `topRight`, `left`, `leftTop`, `leftBottom`, `right`, `rightTop`, `rightBottom`, `bottom`, `bottomLeft`, `bottomRight`} | `top` |
| visibleArrow | 是否显示 Tooltip 箭头 | Boolean | `false` |
