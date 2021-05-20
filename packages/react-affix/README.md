Affix 图钉
===

使用图钉，可以将内容固定在屏幕可视范围，并且不随页面的滚动而滚动，常用于菜单等。

```jsx
import { Affix } from 'uiw';
// or
import Affix from '@uiw/react-affix';
```

### 基本用法
 
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Affix, Button } from 'uiw';

ReactDOM.render(
  <Affix>
    <Button type="primary">当按钮距离顶部距离为 0，按钮被钉在顶部</Button>
  </Affix>,
  _mount_
);
```

### 钉在底部

这个实例需要你缩小窗口高度，就可以测试看效果啦。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Affix, Button } from 'uiw';

ReactDOM.render(
  <Affix offsetBottom={10} onChange={(affixed) => {
    console.log('affixed::', affixed);
  }}>
    <Button type="primary">当按钮距离底部距离为 0，按钮被钉在底部</Button>
  </Affix>,
  _mount_
);
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| offsetBottom | 	距离窗口底部达到指定偏移量后触发 | Number| - |
| offsetTop | 	距离窗口顶部达到指定偏移量后触发 | Number| - |
| onChange | 		固定状态改变时触发的回调函数 | Function(affixed) | - |