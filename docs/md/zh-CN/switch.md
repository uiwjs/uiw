## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

<!--DemoStart--> 
```js
render() {
    const styl = {marginRight:"20px"}
  return (
    <div>
      <Switch checked={false} style={styl} />
      <Switch checked={true} onChange={(checked)=>{
        console.log(`${checked?"选中":'没有选中'}`)
      }}/>
    </div>
  )
}
```
<!--End-->

### 不可用

Switch 失效状态。

<!--DemoStart--> 
```js

constructor(props){
  super(props);
  this.state = {
    disabled:true
  }
}
render() {
    const styl = {marginRight:"20px"}
  return (
    <div>
      <Switch checked={false} disabled={this.state.disabled} style={styl} />
      <Switch checked={true} disabled={this.state.disabled} style={styl} />
      <br />
      <br />
      <Buttons size="extra-small" type="default" onClick={()=>{
        this.setState({
          disabled:!this.state.disabled
        })
      }}>
        {this.state.disabled?"Toggle disabled":"Toggle undisabled"}
      </Buttons>
    </div>
  )
}
```
<!--End-->


### 文字和颜色

<!--DemoStart--> 
```js
render() {
    const styl = {marginRight:"20px"}
  return (
    <div>
      <Switch checked={false} checkedChildren="开" unCheckedChildren="关" style={styl} />
      <Switch checked={true} checkedChildren="on" unCheckedChildren="off" color="#9C27B0" unColor="#ff4949" />
    </div>
  )
}
```
<!--End-->


## API

### Switch 

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| checked | 指定当前是否选中 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| color | 打开时的背景色 | string | - |
| unColor |  关闭时的背景色 | string | - |
| checkedChildren |  选中时的内容 | string、ReactNode | - |
| unCheckedChildren |  非选中时的内容 | string、ReactNode | - |