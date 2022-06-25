Empty 空状态
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-empty/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-empty.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-empty)
[![npm version](https://img.shields.io/npm/v/@uiw/react-empty.svg?label=@uiw/react-empty)](https://npmjs.com/@uiw/react-empty)

空状态时的展示占位图。新组件 `v4.11.0+` 支持。

```jsx
import { Empty } from 'uiw';
// or
import Empty from '@uiw/react-empty';
```

### 基本使用

```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true
import React from 'react';
import { Empty } from 'uiw';

function Demo() {
  return <Empty />
}
export default Demo
```

### 自定义

通过自定义属性定制个性化展示。

```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true
import React from 'react';
import { Empty, Icon, Button } from 'uiw';

const Demo = () => {
  return(
    <Empty
      description={
        <span>
          Customize <a href="#">Description</a>
        </span>
      }
      icon={<Icon type="shopping-cart"  style={{ fontSize: '39px' }} />}
    >
      <Button type="primary">新增数据</Button>
    </Empty>
  )
}

export default Demo
```

### 无描述展示

```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true
import React from 'react';
import { Empty } from 'uiw';

function Demo() {
  return <Empty description={false} />
}
export default Demo
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| description | 自定义描述内容 | `ReactNode` | `暂无数据` |
| icon | 可以替换内置图标 | `ReactNode` | - |
| size | 内置 svg 图标：尺寸 | `number \| string` | - |
| iconProps | 内置 svg 图标：属性设置| `React.SVGProps<SVGSVGElement>` | - |
