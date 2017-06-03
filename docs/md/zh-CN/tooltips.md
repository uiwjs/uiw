## Tooltips 文字提示

简单的文字提示气泡框。


### 基础用法

<!--DemoStart--> 
最简单的用法。
```js
render() {
  return (
    <div>
        <Tooltips content="文字提示" style={{marginRight:"20px"}}>
          <Buttons>上边文字提示</Buttons>
        </Tooltips>

        <Tooltips placement="left" content="文字提示"  style={{marginRight:"20px"}}>
          <Buttons>左边文字提示</Buttons>
        </Tooltips>

        <Tooltips placement="bottom" content="文字提示"  style={{marginRight:"20px"}}>
          <Buttons>下边文字提示</Buttons>
        </Tooltips>

        <Tooltips placement="right" content="文字提示"  style={{marginRight:"20px"}}>
          <Buttons>右边文字提示</Buttons>
        </Tooltips>
    </div>
  )
}
```
<!--End-->


### 更多内容

展示多行文本或者是设置文本内容的格式，

<!--DemoStart--> 
`content`属性也可以是`ReactElement`。
```js
render() {
  return (
    <Tooltips placement="right" content={
        <div>
            <div>标题</div>
            <p>展示多行文本或者是设置文本内容的格式</p>
        </div>
    }>
      <Buttons>右边多行文字</Buttons>
    </Tooltips>
  )
}
```
<!--End-->



### 位置

位置有 12 个方向。

<!--DemoStart--> 
```js
render() {
  const text = <span>提示文字</span>;
  return (
    <div style={{ marginLeft: 60 }}>
        <div style={{ marginLeft: 60 }}>
          <Tooltips style={{ marginRight: 20}} placement="topLeft" content={text}>
            <Buttons>上左</Buttons>
          </Tooltips>
          <Tooltips style={{ marginRight: 20}} placement="top" content={text}>
            <Buttons>上边</Buttons>
          </Tooltips>
          <Tooltips style={{ marginRight: 20}} placement="topRight" content={text}>
            <Buttons>上右</Buttons>
          </Tooltips>
        </div>
        <div style={{ width: 60, float: 'left' }}>
          <Tooltips placement="leftTop" content={<div>
              <div>文字提示</div>
              <div>这里是文字描述！</div>
              <div>这里是文字描述！</div>
          </div>}>
            <Buttons>左上</Buttons>
          </Tooltips>
          <br/><br/>
          <Tooltips placement="left" content={text}>
            <Buttons>左边</Buttons>
          </Tooltips>
          <br/><br/>
          <Tooltips placement="leftBottom" content={<div>
              <div>文字提示</div>
              <div>这里是文字描述！</div>
              <div>这里是文字描述！</div>
          </div>}>
            <Buttons>左下</Buttons>
          </Tooltips>
        </div>
        <div style={{ width: 60, marginLeft: 270 }}>
          <Tooltips placement="rightTop" content="文字提示">
            <Buttons>右上</Buttons>
          </Tooltips>
          <br/><br/>
          <Tooltips placement="right" content="提示文字提示文字提示文字提文字">
            <Buttons>右边</Buttons>
          </Tooltips>
          <br/><br/>
          <Tooltips placement="rightBottom" content={<div>
              <div>文字提示</div>
              <div>这里是文字描述！</div>
              <div>这里是文字描述！</div>
          </div>}>
            <Buttons>右下</Buttons>
          </Tooltips>
          <br/><br/>
        </div>
        <div style={{ marginLeft: 60, clear: 'both' }}>
          <Tooltips style={{ marginRight: 20}} placement="bottomLeft" content={<div>
              <div>文字提示</div>
              <div>这里是文字描述！</div>
              <div>这里是文字描述！</div>
          </div>}>
            <Buttons>下左</Buttons>
          </Tooltips>
          <Tooltips style={{ marginRight: 20}} placement="bottom" content={text}>
            <Buttons>下边</Buttons>
          </Tooltips>
          <Tooltips style={{ marginRight: 20}} placement="bottomRight" content={text}>
            <Buttons>下右</Buttons>
          </Tooltips>
        </div>
    </div>
  )
}
```
<!--End-->


### 主题

组件提供了两个不同的主题：`dark`和`light`。

<!--DemoStart--> 
```js
constructor(props){
  super(props);
  this.state = {
    disabled: false
  }
}
render() {
  return (
    <div>
        <Tooltips content="文字提示" style={{marginRight:"20px"}}>
          <Buttons>上边文字提示</Buttons>
        </Tooltips>
        <Tooltips effect="light" content="文字提示">
          <Buttons>上边文字提示</Buttons>
        </Tooltips>
    </div>
  )
}
```
<!--End-->



### 禁用 Tooltips 功能

如果需要关闭Tooltips功能，`disabled`属性可以满足这个需求，它接受一个Boolean，设置为`true`即可。

<!--DemoStart--> 
```js
constructor(props){
  super(props);
  this.state = {
    disabled: false
  }
}
render() {
  return (
    <div>
      <Tooltips disabled={ this.state.disabled } content="点击关闭 Tooltips 功能">
        <Buttons onClick={ e => this.setState({ disabled: true}) }>点击关闭   Tooltips 功能</Buttons>
      </Tooltips> &nbsp;
      <Buttons onClick={ e => this.setState({ disabled: false}) }>
         启用前面按钮的提示
      </Buttons>
    </div>
  )
}
```
<!--End-->


### 点击出现

通过设置属性`trigger`可以文字提示操作方式。

<!--DemoStart--> 
```js
render() {
  return (
    <Tooltips placement="right" trigger="click" content="文字提示" >
      <Buttons>点击</Buttons>
    </Tooltips>
  )
}
```
<!--End-->

### 显示和消失触发事件

<!--DemoStart--> 
```js
constructor(props){
  super(props);
  this.state = {
    str: '-'
  }
}
render() {
  return (
    <div>
        <Tooltips content="文字提示"
        onVisibleChange={(isVisible)=>{
            console.log("isVisible::",isVisible)
            this.setState({
                str:isVisible?"显示了！":"隐藏了！"
            })
        }}>
          鼠标移动到此处，显示和消失触发事件
        </Tooltips>
        <div style={{paddingTop:"20px"}}>显示状态：{this.state.str}</div>
    </div>
  )
}
```
<!--End-->

### 手动控制状态的展示

通过设置属性`visible`可以文字提示手动控制状态的展示。

<!--DemoStart--> 
```js
constructor(props){
  super(props);
  this.state = {
    visible: false
  }
}
render() {
  const {visible} = this.state;
  return (
    <div>
    <Tooltips visible={visible} content="文字提示"  style={{marginRight:"20px"}}>
      <div>手动控制状态的展示</div>
    </Tooltips>
    <Buttons onClick={()=>{
        this.setState({
            visible:!visible
        })
    }}>点击</Buttons>
    </div>
  )
}
```
<!--End-->


### 文字提示框不显示箭头

通过设置属性`visibleArrow`可以文字提示框不显示箭头。

<!--DemoStart--> 
```js
render() {
  return (
    <Tooltips placement="right" visibleArrow={false} content="文字提示"  style={{marginRight:"20px"}}>
      <Buttons>不显示箭头</Buttons>
    </Tooltips>
  )
}
```
<!--End-->


### 延迟进入和消失

通过设置属性`leaveDelay`可以文字提示延迟消失。`enterDelay` 为延迟进入必须配合`leaveDelay` 来使用，并且值比 `leaveDelay`小

<!--DemoStart--> 
```js
render() {
  return (
    <div>
    <Tooltips placement="right" leaveDelay={6000} trigger="click" content="文字提示"  style={{marginRight:"20px"}}>
      <Buttons>点击延迟6s消失</Buttons>
    </Tooltips>
    <Tooltips placement="right" leaveDelay={6000} content="文字提示"  style={{marginRight:"20px"}}>
      <Buttons>hove延迟6s消失</Buttons>
    </Tooltips>
    <Tooltips placement="right" enterDelay={6000}  leaveDelay={7000} content="文字提示"  style={{marginRight:"20px"}}>
      <Buttons>hove延迟6s进入</Buttons>
    </Tooltips>
    </div>
  )
}
```
<!--End-->


### Tooltips

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| content | 显示的内容 | string,React.ReactNode | - |
| placement | 气泡框位置，可选 `top`,`topLeft`,`topRight`,`left`,`leftTop`,`leftBottom`,`right`,`rightTop`,`rightBottom`, `bottom`,`bottomLeft`,`bottomRight` | string | `top` |
| effect | 默认提供的主题  `dark`, `light` | string | `dark` |
| disabled | 是否禁用提示框 | boolean | `false` |
| leaveDelay | 鼠标离开或者点击之后延时多少才隐藏 Tooltips，单位：秒 | number | - |
| enterDelay | 鼠标离开或者点击之后延时多少才隐藏 Tooltips，单位：秒，`enterDelay` 为延迟进入必须配合`leaveDelay` 来使用，并且值比 `leaveDelay`小 | number | - |
| visibleArrow | 是否显示 Tooltips 箭头 | bool | false |
| visible | 状态是否可见 | bool | false |
