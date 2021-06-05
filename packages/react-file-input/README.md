FileInput 上传输入框
===

这个组件仅仅是对 `<input type="file">` 的美化，他是基于 Input 组件封装。

```jsx
import { FileInput } from 'uiw';
// or
import FileInput from '@uiw/react-file-input';
```

### 基础用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { FileInput } from 'uiw';

ReactDOM.render(
  <div>
    <FileInput multiple="multiple" style={{ maxWidth: 200 }} size="small" />
    <br />
    <FileInput multiple="multiple" style={{ maxWidth: 200 }} />
    <br />
    <FileInput multiple="multiple" style={{ maxWidth: 200 }} size="large" />
  </div>,
  _mount_
);
```

## Props

继承 [Input](#/components/input) 组件属性。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| className | CSS类名称 | String | - |
| data-label | 设置 button 文本 | String | - |
