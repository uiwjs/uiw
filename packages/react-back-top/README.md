BackTop 返回顶部
===

返回页面顶部的操作按钮。

```jsx
import { BackTop } from 'uiw';
// or
import BackTop from '@uiw/react-back-top';
```

## 基本用法

<!--rehype:codeSandbox=true&codePen=true--> 
```js
import ReactDOM from 'react-dom';
import { BackTop } from 'uiw';

ReactDOM.render(
  <div>
    <div>滚动滚动条，【快看右下角】，显示返回顶部按钮。</div>
    <BackTop
      style={{ backgroundColor: 'red', color: '#fff' }}
      step={500}
      speed={10}
      content={<div>Top</div>}
    />
  </div>,
  _mount_
);
```

## 函数子组件

点击按钮滚动到顶部

<!--rehype:codeSandbox=true&codePen=true--> 
```js
import ReactDOM from 'react-dom';
import { BackTop, Button } from 'uiw';

ReactDOM.render(
  <BackTop
    fixed={false}
    step={500}
    clickable={false}
    speed={10}
  >
    {({ percent, scrollToTop }) => (
      <Button onClick={() => scrollToTop() } type="success">点击滚动到顶部{`${percent}%`}</Button>
    )}
  </BackTop>,
  _mount_
);
```

## 组件子节点

点击按钮滚动到顶部

<!--rehype:codeSandbox=true&codePen=true--> 
```js
import ReactDOM from 'react-dom';
import { BackTop, Button } from 'uiw';

ReactDOM.render(
  <BackTop
    fixed={false}
    step={500}
    speed={10}
  >
    <Button type="success">点击滚动到顶部</Button>
  </BackTop>,
  _mount_
);
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
