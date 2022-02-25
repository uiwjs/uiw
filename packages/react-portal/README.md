Portal 入口
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-portal/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-portal.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-portal)
[![npm version](https://img.shields.io/npm/v/@uiw/react-portal.svg?label=@uiw/react-portal)](https://npmjs.com/@uiw/react-portal)

[`Portals`](https://reactjs.org/docs/portals.html#event-bubbling-through-portals) 是 react 16 提供的官方解决方案，使得组件可以脱离父组件层级挂载在 DOM 树的任何位置，我们利用这个方法，可将模态对话框生成到根节点的外面。 

```jsx
import { Portal } from 'uiw';
// or
import Portal from '@uiw/react-portal';
```

### 基本使用

```jsx
import { Portal } from 'uiw';

<Portal>
  此文本在 document.body 的末尾传送！
</Portal>
<Portal node={document && document.getElementById('dom-id')}>
  此文本在显示在 dom-id 的 dom 对象中 
</Portal>

```

切换不同的 `<Portal />`

```jsx
{isVisiable && <Portal>切换不同的 Portal</Portal>}
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| container | 指定容器节点生成，服务端渲染默认为 `null` | any | `document.body` |
| ~~visible~~ | ~~当值为 `true` 的时候才会创建 `createPortal`，可避免初始化创建多余的 `dom` 节点挂载~~ `@v4.9.0+`<!--rehype:style=color:red--> 之后移除了  | boolean | - |
| ~~onChildrenMount~~ | ~~渲染后的回调函数~~ `@v4.9.0+`<!--rehype:style=color:red--> 之后移除了 | () => void | - |