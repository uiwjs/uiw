BackTop 返回顶部
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-back-top/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-back-top.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-back-top)
[![npm version](https://img.shields.io/npm/v/@uiw/react-back-top.svg?label=@uiw/react-back-top)](https://npmjs.com/@uiw/react-back-top)

返回页面顶部的操作按钮。

```jsx
import { BackTop } from 'uiw';
// or
import BackTop from '@uiw/react-back-top';
```

## 基本用法

```jsx mdx:preview&codeSandbox=true&codePen=true
import React from 'react';
import { BackTop } from 'uiw';

export default function Demo() {
  return (
    <div>
      <div>滚动滚动条，【快看右下角】，显示返回顶部按钮。滚动高度超过 50 像素显示</div>
      <BackTop
        offsetTop={1}
        style={{ backgroundColor: 'red', color: '#fff' }}
        showBelow={50}
        step={500}
        speed={10}
        content={<div>Top</div>}
      />
    </div>
  )
}
```


```jsx mdx:preview&codeSandbox=true&codePen=true
import React from 'react';
import { BackTop, Button } from 'uiw';

function Demo() {
  return (
      <BackTop
        fixed={false}
        step={500}
        clickable={false}
        speed={10}
      >
        {({ percent, scrollToTop }) => {
          return (
            <Button onClick={() => scrollToTop() } type="success">点击滚动到顶部{`${percent}%`}</Button>
          )
        }}
      </BackTop>
  )
}

export default Demo
```



## 组件子节点

点击按钮滚动到顶部

```jsx mdx:preview&codeSandbox=true&codePen=true
import React from 'react';
import { BackTop, Button } from 'uiw';

function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <BackTop
        fixed={false}
        step={500}
        speed={10}
      >
        <Button type="success">点击滚动到顶部</Button>
      </BackTop>
    </div>
  )
}

export default Demo
```

## Params

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| content | 滚动到顶部按钮内容 | ReactNode/String | `0` |
| offsetTop | 是否始终显示组件 | Number | `0` |
| showBelow | 滚动距离多少时显示组件 | Number | `1` |
| clickable | 是否可以点击 | Bool | `true` |
| speed | 滚动速度 | Number | `50` |
| fixed | 是否固定，默认`true` | Bool | `true` |
| style | CSS样式 | Object | - |
| className | CSS类名称 | String | - |
| onClick | 点击回调 | Function | - |
