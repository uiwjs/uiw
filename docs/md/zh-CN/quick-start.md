## 快速上手

还未开源 `uiw` 没有任何作用

### 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Buttons } from 'uiw';

ReactDOM.render(
  <Buttons type="primary">Hello</Buttons>, 
  document.getElementById('app')
);
```


### 组件冲突

重新取一个名字

```js
import { Buttons as ButtonsView } from 'uiw';
```
