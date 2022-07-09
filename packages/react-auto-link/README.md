AutoLink 文本超链接
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-auto-link/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-auto-link.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-auto-link)
[![npm version](https://img.shields.io/npm/v/@uiw/react-auto-link.svg?label=@uiw/react-auto-link)](https://npmjs.com/@uiw/react-auto-link)

将字符串呈现为纯文本，并将 URL 转换为适当的链接元素。

```jsx
import { AutoLink } from 'uiw';
// or
import AutoLink from '@uiw/react-auto-link';
```

### 基础用法

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import { AutoLink } from 'uiw';

function Demo() {
  return <div>
    <AutoLink
      text="uiw uiwjs uiw https://github.com/uiwjs uiwjs http://github.com/uiwjs"
      target="__blank"
    />
  </div>
}
export default Demo
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --------- | -------- | --------- | -------- |
| text | 需要处理的文本 | String | - |
