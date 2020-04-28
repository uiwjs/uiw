FileInput 上传输入框
===

这个组件仅仅是对 `<input type="file">` 的美化，他是基于 Input 组件封装。

```jsx
import { FileInput } from 'uiw';
```

### 基础用法

<!--DemoStart,bgWhite,codePen--> 
```js
import { FileInput } from 'uiw';

ReactDOM.render(
  <div>
    <FileInput multiple="multiple" style={{ maxWidth: 200 }} />
  </div>,
  _mount_
);
```
<!--End-->

## Props

继承 [Input](#/components/input) 组件属性。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| className | CSS类名称 | String | - |
