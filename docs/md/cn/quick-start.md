## 快速上手

还未开源 `uiw` 没有任何作用


### 基本用法

<!--DemoStart--> 
可以输入`+` `-` `.` `e` 和数字
```js
constructor(props) {
  super(props);
  this.state = {
    value: 1
  }
}
onChange(e,value) {
    console.log(`value - ${value}`)

}
render() {
  return (
    <InputNumber value={this.state.value} onChange={this.onChange.bind(this)} min="1" max="10"></InputNumber>
  )
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
