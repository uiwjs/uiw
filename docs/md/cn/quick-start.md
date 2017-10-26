快速上手
===


### 基本用法

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    columns: [
      {title: "姓名", key: "age",width: 180, fixed: 'left'},
      {title: "年龄", key: "name", width: 180 },
      {title: "地址", key: "info"}, 
      {
        title: '操作',
        key: 'edit',
        width: 60,
        fixed: 'right',
        onCellClick(rowData){
          console.log("onCellClick",rowData)
        },
        render: (text, row, index) => <a href="javascript:void(0)" onClick={()=>{
          console.log("--->",text,row, index)
        }}>{text}</a>,
      }
    ],
    dataSource:[

{_checked:true,name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。',edit:"编辑"},
    ]
  }
}
render() {
  return (
    <Table 
      height={200}
      width={2000}
      rowSelection={{
        onSelectAll:(selectDatas,checked,e)=>{
          console.log("选择或取消选择所有选项！",selectDatas)
        },
        onSelect:()=>{
          console.log("选择单行选项！")
        },
        onCellClick(rowData){
          console.log("选择单行选项！",rowData)
        }
      }}
      data={this.state.dataSource} 
      columns={this.state.columns}/>
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

### 按需加载组件

```diff
- import { Alert } from 'uiw';
+ import { Alert } from 'uiw/src/alert';
```