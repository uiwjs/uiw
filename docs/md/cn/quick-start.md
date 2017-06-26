## 快速上手

还未开源 `uiw` 没有任何作用


### 基础用法

适用广泛的基础单选
`value`的值为当前被选中的Option的 `value` 属性值
<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    options: [
      { value: '选项1', label: '红葡萄酒' }, 
      { value: '选项2', label: '绍兴黄酒', disabled: true}, 
      { value: '选项3', label: '燕京啤酒' }, 
      { value: '选项4', label: '楚乡王白酒' }, 
      { value: '选项5', label: '五粮液' },
      { value: '选项6', label: '绍兴黄酒', disabled: true}, 
      { value: '选项7', label: '燕京啤酒' }, 
      { value: '选项8', label: '楚乡王白酒' }, 
      { value: '选项9', label: '五粮液' },
      { value: '选项10', label: '红葡萄酒' }, 
      { value: '选项11', label: '红葡萄酒' }, 
      { value: '选项12', label: '绍兴黄酒', disabled: true}, 
      { value: '选项13', label: '燕京啤酒' }, 
      { value: '选项14', label: '楚乡王白酒' }, 
      { value: '选项15', label: '五粮液' },
      { value: '选项16', label: '绍兴黄酒', disabled: true}, 
      { value: '选项17', label: '燕京啤酒' }, 
      { value: '选项18', label: '楚乡王白酒' }, 
      { value: '选项19', label: '五粮液' },
    ],
    value: '选项1'
  };
}
onChange(e,value){
  console.log("onChange:",value,e)
}
render() {
  return (
    <Select onChange={this.onChange.bind(this)} style={{width:200}} value={this.state.value}>
      {
        this.state.options.map(elm => {
          return <Select.Option key={elm.value} label={elm.label} value={elm.value} disabled={elm.disabled} />
        })
      }
    </Select>
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
