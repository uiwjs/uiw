AutoLink 文本超链接
===

将字符串呈现为纯文本，并将 URL 转换为适当的链接元素。

```jsx
import { AutoLink } from 'uiw';
// or
import AutoLink from '@uiw/react-auto-link';
```

### 基础用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { AutoLink } from 'uiw';

ReactDOM.render(
  <div>
    <AutoLink
      text="uiw uiwjs uiw https://github.com/uiwjs uiwjs http://github.com/uiwjs"
      target="__blank"
    />
  </div>,
  _mount_
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --------- | -------- | --------- | -------- |
| text | 需要处理的文本 | String | - |
