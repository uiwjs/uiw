Checkbox 多选框
===

一组备选项中进行多选

```jsx
import { Checkbox } from '@uiw/core';
```


### 基础用法

单独使用可以表示两种状态之间的切换，半选中只是样式上的表现。


<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Checkbox>未选中</Checkbox>
    <Checkbox checked >选中</Checkbox>
    <Checkbox indeterminate >半选中</Checkbox>
  </div>
);
```
<!--End-->



### 禁用样式

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Checkbox disabled checked>未选中禁用</Checkbox>
    <Checkbox disabled checked>选中禁用</Checkbox>
    <Checkbox disabled indeterminate>半选中禁用</Checkbox>
  </div>
);
```
<!--End-->