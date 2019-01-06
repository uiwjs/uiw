Input 输入框
===

通过鼠标或键盘输入内容，是最基础的表单域的包装。

```jsx
import { Input } from '@uiw/core';
```

### 基础用法

<!--DemoStart--> 
```js
const Demo = () => (
  <Input placeholder="请输入内容" />
)
```
<!--End-->

### 插入图标

<!--DemoStart--> 
```js
const stylItem = { margin: 20 };
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0',justifyContent: 'center', display: 'flex' }}>
    <div style={stylItem}>
      <Input preIcon="delete" placeholder="请输入内容" />
    </div>
    <div style={stylItem}>
      <Input preIcon="tag" placeholder="请输入内容" />
    </div>
    <div style={stylItem}>
      <Input preIcon="picasa" placeholder="请输入内容" />
    </div>
    <div style={stylItem}>
      <Input preIcon="like-o" placeholder="请输入内容" />
    </div>
  </div>
)
```
<!--End-->
