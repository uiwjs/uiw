Textarea 多行文本输入框
===

标准的多行文本输入框。

```jsx
import { Textarea } from 'uiw';
```

### 基础用法

<!--DemoStart,bgWhite,codePen--> 
```js
import { Textarea } from 'uiw';

const Demo = () => (
  <div style={{ maxWidth: 300 }}>
    <Textarea placeholder="请输入内容" />
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->


### 禁用

<!--DemoStart,bgWhite,codePen--> 
```js
import { Textarea } from 'uiw';

const Demo = () => (
  <div style={{ maxWidth: 300 }}>
    <Textarea placeholder="请输入内容" disabled />
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### HTML Textarea

<!--DemoStart,bgWhite,codePen--> 
```js
import { Textarea } from 'uiw';

const Demo = () => (
  <div style={{ maxWidth: 300 }}>
    <textarea className="w-textarea" placeholder="请输入内容" defaultValue="" />
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## Props

这是一个标准组件，与 HTML 中属性保持一致。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| placeholder | 规定描述文本区域预期值的简短提示。 | String | - |
| disabled | 禁用输入框 | Boolean | - |