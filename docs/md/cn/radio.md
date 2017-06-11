## Radio单选框

单选框，在一组备选项中进行单选。


### 基础用法

适用广泛的基础最简单的用法。

<!--DemoStart--> 
```js
render() {
  return (
    <Radio onChange={(e,value)=>{
        console.log(`values= ${value}`,value)
    }}>Radio
    </Radio>
  )
}
```
<!--End-->

### 多个单选框

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    value: 1
  }
}
onChange(e,value) {
  this.setState({ value });
}
render() {
  return (
    <div>
      <Radio value={1} checked={this.state.value === 1} onChange={this.onChange.bind(this)}>备选项</Radio>
      <Radio value={2} checked={this.state.value === 2} onChange={this.onChange.bind(this)}>备选项</Radio>
    </div>
  )
}
```
<!--End-->

### 单选框禁用

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    value: 1
  }
}
onChange(e,value) {
  this.setState({ value });
}
render() {
  return (
    <div>
        <Radio disabled={true}>禁用</Radio>
        <Radio disabled={true} checked={true}>禁用</Radio>
    </div>
  )
}
```
<!--End-->

## API

### Form

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |
| checked | Radio是否被选中 | Boolean | - |
| disabled | 是否禁用 | Boolean | `false` |
| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even,value) | - |