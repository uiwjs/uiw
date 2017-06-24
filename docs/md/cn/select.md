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

`Select`设置`disabled`属性，则整个选择器不可用。单个选项禁用,`Option`设置`disabled`属性即可。

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


### 联动

省市联动是典型的例子。

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    options: [
      { value: 'Shanghai', label: '上海' }, 
      { value: 'Beijing', label: '北京', disabled: true}, 
      { value: 'Shenzhen', label: '深圳' }
    ],
    secondOptions:{
      'Shanghai':[
        { value: '001', label: '静安区' }, 
        { value: '002', label: '青浦区', disabled: true}, 
      ],
      'Beijing':[
        { value: '001', label: '东城区' }, 
        { value: '002', label: '西城区', disabled: true}, 
        { value: '003', label: '朝阳区', disabled: true}, 
      ]
    },
    secondOptionsEmpty:[],
    value: '',
    valueSecond: ''
  };
}
onChange(e,value){
  console.log("onChange:",value,e)
}
render() {
  return (
    <div>
      <Select style={{width:100}} onChange={(e,value)=>{

        this.setState({
          secondOptionsEmpty:this.state.secondOptions[value] || [],
          value:e.props.label,
          valueSecond:""
        })

      }} value={this.state.value}>
        {
          this.state.options.map(el => {
            return <Select.Option key={el.value} label={el.label} value={el.value} />
          })
        }
      </Select>
      <Select style={{width:100}} onChange={(e,value)=>{
        
        this.setState({
          valueSecond:e.props.label
        })

      }} value={this.state.valueSecond}>
        {
          this.state.secondOptionsEmpty.map(el => {
            return <Select.Option key={el.value} label={el.label} value={el.value} />
          })
        }
      </Select>
      <div style={{paddingTop:10}}>
      您选择了：{`${this.state.value}-${this.state.valueSecond}`}
      </div>
    </div>
  )
}
```
<!--End-->

## API

### Select

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 指定当前选中的条目 | String/String[] | - |
| disabled | 是否禁用 | Boolean | - |
| multiple | 是否可多选 | Boolean | - |
| onChange | 选中值发生变化时触发 | function(option, value) | - |

### Option

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 指定当前选中的条目 | String/String[] | - |
| disabled | 是否禁用 | Boolean | false |
| label | 选项的标签，若不设置则默认与 `value` 相同 | String/Number | - |
