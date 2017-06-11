## Radio单选框

单选框，在一组备选项中进行单选。


### 基础用法

适用广泛的基础最简单的用法。

<!--DemoStart--> 
```js
render() {
  return (
    <Radio checked={true} onChange={(e,value)=>{
        console.log(`values= ${value}`,value)
    }}>
        Radio
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