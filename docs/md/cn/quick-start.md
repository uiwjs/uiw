## 快速上手

还未开源 `uiw` 没有任何作用



<!--DemoStart-->
```js
constructor(props) {
  super(props);
  this.state = {
    checked3: true,
    disabled3: true,

    checkedList: ['Apple', 'Pear'],
    indeterminate: true,
    checkAll: false,
  }
}
render() {
    const defaultCheckedList = ['Apple', 'Orange'];
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [
      { value: 'Apple' },
      { value: 'Pear' },
      { value: 'Orange' },
    ];
    const optionsWithDisabled = [
      { value: 'Apple' },
      { value: 'Pear' },
      { value: 'Orange', disabled: false },
    ];
    const CheckboxGroup = Checkbox.Group;
    return (
      <div>            
        <div style={{ borderBottom: '1px solid #E9E9E9',margin:"0 0 10px 0",padding:"0 0 10px 0 "}}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={(e,checked) => {
              console.log("--->",e,checked)
              this.setState({
                checkedList: e.target.checked ? plainOptions : [],
                indeterminate: false,
                checkAll: e.target.checked,
              });
            }}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>

        <CheckboxGroup 
        options={plainOptions}         
        checkedValues={this.state.checkedList} 
        onChange={(e,checkedList,value,checked)=>{
          this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
          });
        }} />

        <CheckboxGroup otions={options} checkedValues={this.state.checkedList} 
        onChange={(e,checkedList,value,checked) => {
          console.log("indeterminate::",checkedList,value,checked,e)
          this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
          });
        }} />
      </div>
    )
}
```
<!--End-->

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
