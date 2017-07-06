## Slider 滑块

通过拖动滑块在一个固定区间内进行选择



### 基本用法

按钮样式的单选组合。

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    value: 20
  }
}
render() {
  return (
    <div>
      <Slider value={this.state.value} 
        onChange={(e,value)=>console.log(`Value: ${value}`)} 
        onDragChange={(e,value)=>console.log(`Drag value: ${value}`)} 
      />
    </div>
  )
}
```
<!--End-->


### 禁用

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    value: 50
  }
}
render() {
  return (
    <div>
      <Slider disabled value={this.state.value} 
        onChange={(e,value)=>console.log(`Value: ${value}`)} 
        onDragChange={(e,value)=>console.log(`Drag value: ${value}`)} 
      />
    </div>
  )
}
```
<!--End-->


### 垂直方向

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    value: 20
  }
}
render() {
  return (
    <div style={{height:200}}>
      <Slider disabled style={{display:'inline-block'}} vertical value={this.state.value} 
        onChange={(e,value)=>console.log(`Value: ${value}`)} 
        onDragChange={(e,value)=>console.log(`Drag value: ${value}`)} 
      />
      <Slider style={{display:'inline-block'}} vertical value={70} 
        //onChange={(e,value)=>console.log(`Value: ${value}`)} 
        //onDragChange={(e,value)=>console.log(`Drag value: ${value}`)} 
      />
    </div>
  )
}
```
<!--End-->

### 离散值

选项可以是离散的。

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    value: 0
  }
}
render() {
  return (
    <div>
      <div style={{height:30}}>
        <Slider value={this.state.value}
          marks={{
            0:"0°C",
            10:"10°C",
            20:"20°C",
            100:{
              style: {
                color: '#f50',
              },
              label: <strong>100°C</strong>,
            },
          }} 
          step={10}
          dots={true}
          onChange={(e,value)=>{
            this.setState({
              value:value
            })
            console.log(`Value: ${value}`)
          }} 
          onDragChange={(e,value)=>console.log(`Drag value: ${value}`)} 
        />
      </div>
      <div style={{height:30}}>
        <Slider value={this.state.value}
          marks={true} 
          step={10}
          onChange={(e,value)=>{
            this.setState({
              value:value
            })
            console.log(`Value: ${value}`)
          }} 
          onDragChange={(e,value)=>console.log(`Drag value: ${value}`)} 
        />
      </div>
      <div style={{height:200,width:100,display:'inline-block'}}>
        <Slider value={this.state.value}
          marks={{
            20:"20°C"
          }} 
          vertical
          step={10}
          onChange={(e,value)=>{
            this.setState({
              value:value
            })
            console.log(`Value: ${value}`)
          }} 
          onDragChange={(e,value)=>console.log(`Drag value: ${value}`)} 
        />
      </div>
      <div style={{height:200,display:'inline-block'}}>
        <Slider value={this.state.value}
          marks={{
            0:"0°C",
            20:"20°C",
            40:"40°C",
            60:"60°C",
            80:"80°C",
            100:{
              style: {
                color: '#f50',
              },
              label: <strong>100°C</strong>,
            },
          }} 
          vertical
          step={20}
          dots={true}
          onChange={(e,value)=>{
            this.setState({
              value:value
            })
            console.log(`Value: ${value}`)
          }} 
          onDragChange={(e,value)=>console.log(`Drag value: ${value}`)} 
        />
      </div>
    </div>
  )
}
```
<!--End-->



## API

### Slider

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 选择的数值，为数组时即可开启范围选择，并且指定范围 | Number/Number[] | `0` |
| min | 最小值 | Number | `0` |
| max | 最大值 | Number | `100` |
| disabled | 是否禁用 | Boolean | `false` |
| step | 间步长度 | Number | `1` |
| dots | 是否只能拖拽到刻度上 | Boolean | `false` |
| marks | 刻度标记，`key` 的类型必须为 `number` 且取值在闭区间 `min`, `max` 内，每个标签可以单独设置样式，当值为`Boolean`值时表示是否显示刻度 | Object/Boolean | - |
| tooltip | 是否显示提示 | Boolean | `ture` |
| vertical | 值为 `true` 时，`Slider` 为垂直方向 | Boolean | `false` |
| onDragChange | 拖拽，值改变时触发 | Function(e,value) | - |
| onChange | 值改变时触发 | Function(e,value) | - |