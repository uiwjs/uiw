## 快速上手

还未开源 `uiw` 没有任何作用


### 区间范围选择

选择某一数值范围。

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    value: [0,30]
    //value: [0,30]
  }
}
render() {
  return (
    <div style={{height:230}}>
      <Slider value={this.state.value}
        marks={{
          0:"0°C",
          10:"10°C",
          20:"20°C",
          30:{
            style: {
              color: '#f50',
            },
            label: <strong>30°C</strong>,
          },
          40:"40°C",
          50:"50°C",
        }} 
        max={50}
        //vertical
        step={10}
        dots={true}
        onChange={(value)=>{
          //this.setState({
          //  value:value
          //})
          //console.log(`Value: ${value}`)
        }} 
        onDragChange={(value)=>console.log(`Drag value: ${value}`)} 
      />
    </div>
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
