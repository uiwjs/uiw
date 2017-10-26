快速上手
===

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

### 按需加载组件

```diff
- import { Alert } from 'uiw';
+ import { Alert } from 'uiw/src/alert';
```