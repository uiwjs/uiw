Affix 图钉
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-affix/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-affix.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-affix)
[![npm version](https://img.shields.io/npm/v/@uiw/react-affix.svg?label=@uiw/react-affix)](https://npmjs.com/@uiw/react-affix)

使用图钉，可以将内容固定在屏幕可视范围，并且不随页面的滚动而滚动，常用于菜单等。

```jsx
import { Affix } from 'uiw';
// or
import Affix from '@uiw/react-affix';
```

### 基本用法
 
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Affix, Button } from 'uiw';

function Demo() {
  return <Affix offsetTop={60}>
    <Button type="primary">1 当按钮距离顶部距离为 0，按钮被钉在顶部</Button>
  </Affix>
}
export default Demo
```

### 钉在底部

这个实例需要你缩小窗口高度，就可以测试看效果啦。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Affix, Button } from 'uiw';

function Demo() {
  return   <Affix offsetBottom={10} onChange={(affixed) => {
    console.log('affixed::', affixed);
  }}>
    <Button type="primary" style={{ marginLeft: 20 }}>2 当按钮距离底部距离为 0，按钮被钉在底部</Button>
  </Affix>
}
export default Demo
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| offsetBottom | 	距离窗口底部达到指定偏移量后触发 | Number| - |
| offsetTop | 	距离窗口顶部达到指定偏移量后触发 | Number| - |
| onChange | 		固定状态改变时触发的回调函数 | Function(affixed) | - |
