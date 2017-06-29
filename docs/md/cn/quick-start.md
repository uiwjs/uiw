## 快速上手

还未开源 `uiw` 没有任何作用


### 任意时间点

可以选择任意时间

<!--DemoStart--> 
```js
constructor(props) {
  super(props)
  this.state = {
    value: new Date(2016, 9, 10, 18, 40)
  }
}
handleUpdate(value) {
  console.debug('time-picker update: ', value)
}
render() {
  return (
    <TimePicker
      //style={{width:100}}
      onChange={this.handleUpdate.bind(this)}
      disabledHours={['00','01']}
      disabledMinutes={['01','02']}
      //selectableRange="18:30:00 - 20:30:00"
      disable={false}
      format="HH:mm:ss"
      placeholder="选择时间de拉！"
      value={this.state.value}
    />
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
