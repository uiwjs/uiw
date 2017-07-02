## 快速上手

还未开源 `uiw` 没有任何作用



### 允许半选

可支持鼠标选择半星。

<!--DemoStart--> 
```js
render() {
  return <Rate value={2.5} allowHalf={true} onChange={(val) => console.log(val)} />
}
```
<!--End-->


### 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'uiw';

ReactDOM.render(
  <Button type="primary">Hello</Button>, 
  document.getElementById('app')
);
```


### 组件冲突

重新取一个名字

```js
import { Button as ButtonView } from 'uiw';
```
