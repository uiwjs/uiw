## 快速上手

还未开源 `uiw` 没有任何作用


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

```js
import React, { Component } from 'react';
import { Alert } from 'uiw/src/alert';

export default class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    const {drag} = this.state;
    return (
      <div>
        <Alert showIcon type="info" message="info Text"/>
        <Alert type="success" message="success Text"/>
      </div>
    )
  }
}
```