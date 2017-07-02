## Rate 评分

评分组件


### 基本用法

按钮样式的单选组合。

<!--DemoStart--> 
```js
render() {
  return (
    <Rate/>
  )
}
```
<!--End-->


### 只读

按钮样式的单选组合。

<!--DemoStart--> 
```js
render() {
  return (
    <Rate value={2} disabled={true}/>
  )
}
```
<!--End-->


### 只读

按钮样式的单选组合。

<!--DemoStart--> 
```js
constructor(props){
  super(props);
  this.state={
    value:0
  };
}
handleChange(e,value){
  this.setState({ value });
}
render() {
  const { value } = this.state;
  return (
    <span>
      <Rate onChange={this.handleChange.bind(this)} value={value} />
      {value >-1&& <span> {value} stars</span>}
    </span>
  );
}
```
<!--End-->


### 允许半选

可支持鼠标选择半星。

<!--DemoStart--> 
```js
render() {
  return <Rate value={2.5} allowHalf={true} onChange={(e,val) => console.log(val)} />
}
```
<!--End-->



## API

### Rate

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 根据 value 进行比较，判断是否选中 | Number | - |
| count | star 总数 | Number | `5` |
| disabled | 只读，无法进行交互 | Boolean | `false` |
| allowHalf | 是否允许半选 | Boolean | `false` |
| character | 自定义字符 | ReactNode | - |
| className | 自定义样式类名 | String | - |
| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even,value) | - |
| onHoverChange | 鼠标经过时数值变化的回调 | Funtcion(e:Even,value) | - |