## Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

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



### 禁用状态

为`Select`设置`disabled`属性，则整个选择器不可用。

<!--DemoStart--> 
```js
constructor(props) {
  super(props);

  this.state = {
    options: [
      { value: '选项1', label: '红葡萄酒' }, 
      { value: '选项2', label: '绍兴黄酒' }, 
      { value: '选项3', label: '燕京啤酒' }, 
      { value: '选项4', label: '楚乡王白酒' }, 
      { value: '选项5', label: '五粮液' },
    ],
    value: ''
  };
}
render() {
  return (
    <Select style={{width:200}} value={this.state.value} disabled={true}>
      {
        this.state.options.map(el => {
          return <Select.Option key={el.value} label={el.label} value={el.value} />
        })
      }
    </Select>
  )
}
```
<!--End-->