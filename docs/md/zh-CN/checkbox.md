## Checkboxs 多选框

一组备选项中进行多选

### 基础用法

单独使用可以表示两种状态之间的切换，半选中只是样式上的表现。

<!--DemoStart--> 简单的Checkboxs，使用`checked`切换选中状态。
```js
render() {
  return (
    <div>
        <Checkboxs onChange={(e)=>{
          console.log(`checked = ${e.target.checked}`);
        }}>未选中</Checkboxs>
        <Checkboxs checked onChange={(e)=>{
          console.log(`checked = ${e.target.checked}`);
        }}>选中</Checkboxs>
        <Checkboxs indeterminate onChange={(e)=>{
          console.log(`checked = ${e.target.checked}`);
        }}>半选中</Checkboxs>
    </div>
  )
}
```
<!--End-->


### 不可用(禁用)

通过设置`disabled`属性来禁用多选框。

<!--DemoStart-->
```js
render() {
  return (
    <div>
        <Checkboxs disabled onChange={(e)=>{
          console.log(`checked = ${e.target.checked}`);
        }}>未选中禁用</Checkboxs>

        <Checkboxs disabled checked onChange={(e)=>{
          console.log(`checked = ${e.target.checked}`);
        }}>选中禁用</Checkboxs>

        <Checkboxs disabled indeterminate onChange={(e)=>{
          console.log(`checked = ${e.target.checked}`);
        }}>半选中禁用</Checkboxs>
    </div>
  )
}
```
<!--End-->



### 受控的

通过设置`disabled`属性来禁用多选框。

<!--DemoStart-->
```js
constructor(props) {
  super(props);

  this.state = {
    indeterminate: true
  }
}
render() {
  return (
    <div>
        <Checkboxs indeterminate={this.state.indeterminate} onChange={(e)=>{
          console.log(`checked = ${e.target.checked}`);
        }}>半选中</Checkboxs>
        <Buttons size="extra-small" onClick={()=>{
          console.log("!this.state.indeterminate::",!this.state.indeterminate)
          this.setState({
            indeterminate:!this.state.indeterminate
          })
        }}>切换半选中</Buttons>
    </div>
  )
}
```
<!--End-->


### 切换半选中

联动 `Checkboxs`。

<!--DemoStart-->
```js
constructor(props) {
  super(props);
  this.state = {
    checked3: true,
    disabled3: true,
  }
}
render() {
  return (
    <div>
      <Checkboxs
        checked={this.state.checked3}
        disabled={this.state.disabled3}
        onChange={(e) => {
          console.log('checked = ', e.target.checked);
          this.setState({
            checked3: e.target.checked,
          });
        }}
      >
        {`${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`}
      </Checkboxs>
        <div style={{padding:"10px 0 0 0"}}>
          <Buttons
            size="extra-small"
            onClick={() => {
              this.setState({ checked3: !this.state.checked3 });
            }}
          >
            {!this.state.checked3 ? 'Check' : 'Uncheck'}
          </Buttons>
          <Buttons
            style={{ marginLeft: '10px' }}
            size="extra-small"
            onClick={() => {
              this.setState({ disabled3: !this.state.disabled3 });
            }}
          >
            {!this.state.disabled3 ? 'Disable' : 'Enable'}
          </Buttons>
        </div>
    </div>
  )
}
```
<!--End-->


### Checkboxs 组

方便的从数组生成 `Checkboxs` 组。

<!--DemoStart-->
```js
constructor(props) {
  super(props);
  this.state = {
    checked3: true,
    disabled3: true,
  }
}
render() {
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
    const CheckboxsGroup = Checkboxs.Group;
    return (
      <div>            
          <CheckboxsGroup 
              options={plainOptions} 
              checkedValues={['Apple']} 
              onChange={(checkedValues,value,checked,e)=>{
                console.log('checked = ', checkedValues);
              }} />
              <br />
              <CheckboxsGroup 
              options={options} 
              checkedValues={['Pear']} 
              onChange={(checkedValues)=>{
                console.log('checked = ', checkedValues);
              }} />

              <br />
              <CheckboxsGroup 
              options={optionsWithDisabled} 
              disabled 
              checkedValues={['Apple']} 
              onChange={(checkedValues)=>{
                console.log('checked = ', checkedValues);
              }} />
      </div>
    )
}
```
<!--End-->


### 全选

在实现全选效果时，你可能会用到 `indeterminate` 属性。

<!--DemoStart-->
```js
constructor(props) {
  super(props);
  this.state = {
    checked3: true,
    disabled3: true,

    checkedList: [],
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
    const CheckboxsGroup = Checkboxs.Group;
    return (
      <div>            
        <div style={{ borderBottom: '1px solid #E9E9E9',margin:"0 0 10px 0",padding:"0 0 10px 0 "}}>
          <Checkboxs
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
          </Checkboxs>
        </div>
        <CheckboxsGroup options={plainOptions} checkedValues={this.state.checkedList} 
        onChange={(checkedList,value,checked,e) => {
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


### Checkbox Attributes

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| options | 指定当前是否选中 | boolean | false |
| disabled | 禁用 | boolean | false |
| onChange | 变化时回调函数 | Function(e:Event, checked:Boolean) | - |
| checked | 指定当前是否选中 | boolean | false |
| indeterminate | 半选中，只负责样式控制 | Jay | false |

### Checkbox Group Attributes

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| options | 指定可选 | string[] | [] |
| checkedValues | 默认选中的选 | string[] | [] |
| onChange | 变化时回调函数 | Function(checkedValues:Array, value:String, checked:Boolean, e:Event) | - |
| disabled | 禁用所有，[options]中设置，disabled=false 取消禁用 | Jay | false |