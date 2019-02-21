Split 面板分割
===

可将一块内容，分割为可以拖拽调整宽度或高度的区域。

```jsx
import { Split } from 'uiw';
```

### 基础用法

通过设置子节点的 `minWidth` 样式，即可设置拖拽最小宽度值。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <div style={{ minWidth: 30 }}>
      Left Pane
    </div>
    <div style={{ minWidth: 30 }}>
      Right Pane
    </div>
  </Split>
);
```
<!--End-->

### 多栏分割

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <div>
      Left Pane
    </div>
    <div>
      Center Pane
    </div>
    <div>
      Center Pane
    </div>
    <div>
      Right Pane
    </div>
  </Split>
);
```
<!--End-->

### 垂直分割

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Split mode="vertical" style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <div>
      Top Pane
    </div>
    <div>
      Bottom Pane
    </div>
  </Split>
);
```
<!--End-->

### 嵌套使用

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Split style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <Split mode="vertical">
      <div>
        Top Pane
      </div>
      <Split>
        <div>
          Left Pane
        </div>
        <div>
          Right Pane
        </div>
      </Split>
    </Split>
    <div>
      Right Pane
    </div>
  </Split>
);
```
<!--End-->

### 拖拽工具不显示

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Split visiable={false} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <div style={{ minWidth: 30 }}>
      Left Pane
    </div>
    <div style={{ minWidth: 30 }}>
      Right Pane
    </div>
  </Split>
);
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 设置拖拽的工具，是否可见 | Boolean | `true` |
| mode | 类型，可选值为 `horizontal` 或 `vertical` | String | `horizontal` |
