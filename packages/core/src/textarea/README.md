Textarea 多行文本输入框
===

标准的多行文本输入框。

```jsx
import { Textarea } from '@uiw/core';
```

### 基础用法

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Textarea placeholder="请输入内容" />
  </div>
)
```
<!--End-->


### 禁用

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Textarea placeholder="请输入内容" disabled />
  </div>
)
```
<!--End-->

### HTML Textarea

```html
<textarea class="w-textarea" placeholder="请输入内容"> </div>
```

## Props

这是一个标准组件，与 HTML 中属性保持一致。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| placeholder | 规定描述文本区域预期值的简短提示。 | String | - |
| disabled | 禁用输入框 | Boolean | - |