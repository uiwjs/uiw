Transition 过渡动画
===

用于页面中展示过渡动画。

### 基本用法

进入、出现、离开动画

<!--DemoStart-->
```js
constructor(props) {
  super(props);
  this.state = { show: true }
}
toggleIn () {
  this.setState({ show: !this.state.show })
}
render() {
  const { show } = this.state
  return (
    <div>  
      <div style={{padding:"0 0 20px 0"}}>
        <Transition in={show} sequence='fadeIn'>
          <div>
            淡进淡入
          </div>
        </Transition>
      </div>
      <Button size="mini" onClick={this.toggleIn.bind(this)}>
        {show?'消失':'显示'}
      </Button>
    </div>
  )
}
```
<!--End-->

### 向下淡进向上淡出

<!--DemoStart-->
```js
constructor(props) {
  super(props);
  this.state = { show: true }
}
toggleIn () {
  this.setState({ show: !this.state.show })
}
render() {
  const { show } = this.state
  return (
    <div>  
      <div style={{padding:"0 0 20px 0",width:200}}>
        <Transition in={show} sequence='fadeIn down'>
          <div>
            向下淡进向上淡出
          </div>
        </Transition>
      </div>
      <Button size="mini" onClick={this.toggleIn.bind(this)}>
        {show?'消失':'显示'}
      </Button>
    </div>
  )
}
```
<!--End-->

### 向上淡进向下淡出

<!--DemoStart-->
```js
constructor(props) {
  super(props);
  this.state = { show: true }
}
toggleIn () {
  this.setState({ show: !this.state.show })
}
render() {
  const { show } = this.state
  return (
    <div>  
      <div style={{padding:"0 0 20px 0",width:200}}>
        <Transition in={show} sequence='fadeIn up'>
          <div>
            向上淡进向下淡出
          </div>
        </Transition>
      </div>
      <Button size="mini" onClick={this.toggleIn.bind(this)}>
        {show?'消失':'显示'}
      </Button>
    </div>
  )
}
```
<!--End-->


### 在右淡进淡出

<!--DemoStart-->
```js
constructor(props) {
  super(props);
  this.state = { show: true }
}
toggleIn () {
  this.setState({ show: !this.state.show })
}
render() {
  const { show } = this.state
  return (
    <div>  
      <div style={{padding:"0 0 20px 0",width:200}}>
        <Transition in={show} sequence='fadeIn right'>
          <div>
            在右淡进淡出
          </div>
        </Transition>
      </div>
      <Button size="mini" onClick={this.toggleIn.bind(this)}>
        {show?'消失':'显示'}
      </Button>
    </div>
  )
}
```
<!--End-->


### 在左淡进淡出

<!--DemoStart-->
```js
constructor(props) {
  super(props);
  this.state = { show: true }
}
toggleIn () {
  this.setState({ show: !this.state.show })
}
render() {
  const { show } = this.state
  return (
    <div>  
      <div style={{padding:"0 0 20px 0",width:200}}>
        <Transition in={show} sequence='fadeIn left'>
          <div> 在左淡进淡出 </div>
        </Transition>
      </div>
      <Button size="mini" onClick={this.toggleIn.bind(this)}>
        {show?'消失':'显示'}
      </Button>
    </div>
  )
}
```
<!--End-->

### 自定义动画

定义动画样式`flipInX`

```less
.w-animate{
  &.is-flipInX {
    &.is-mounting { // 安装
      transform: translate3d(0, -100%, 0); 
    }
    &.is-mounted { // 安装完
      transform: translate3d(0, 0, 0); 
    }
  
    &.is-unmounting { // 卸载
      transform: translate3d(0, -100%, 0); 
    }
  
    &.is-unmounted { // 卸载完
      transform: translate3d(0, -100%, 0); 
    }
  }
}
```

引用自定义动画`flipInX`

```jsx
<Transition in={show} sequence='flipInX'>
  <div> 在左淡进淡出 </div>
</Transition>
```


## API

### Transition Attributes

可以通过 [Animate.css](https://daneden.github.io/animate.css/) 制作更多的过度动画。变化比较大，动画库重写了，请使用最新版本。

**v1.1.15+**

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| sequence | 动画效果 默认可选`fadeIn`、`down`、`up`、`right`、`left` | String | `false` |
| unmountOnExit | 设置 `true` 退出动画卸载组件 | Bool | `true` |
| in | 显示组件; 触发进入或退出状态 | Bool | `false` |
| animateOnMount | 安装动画 | Bool | `true` |
| duration | 持续时间 | Number | `200` |
| wait | 持续时间 | Number | `0` |
| onTransitionendEnter | 动画进入完成 | Function | `()=>{}` |
| onTransitionendExit | 动画退出完成 | Function | `()=>{}` |

**v1.1.13**

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| type | 指定可选项 `fade-in` 、`fade-left`、 `fade-right` 、 `fade-down` | String | - |
| visible | 动画会产生一个根节点，设置 `false` 销毁 | Bool | `true` |
| appear | 出现 | Bool | `true` |
| leave | 离开 | Bool | `true` |
| enter | 进入 | Bool | `true` |
| AppearTimeout | 出现时间[自定义过渡效果起作用] | Number | 250 |
| LeaveTimeout | 离开时间[自定义过渡效果起作用] | Number | 250 |
| EnterTimeout | 进入时间[自定义过渡效果起作用] | Number | 500 |
| prefixCls | 自定义过渡效果。自带过渡效果，时间设置是没有用的，通过这个来自定义一个样式，默认样式 “w-animate”，自定义样式会拼接成 “w-animate-fade-in”，在CSS样式里面，根据react-transition-group规则最终需要这样写样式，".w-animate-fade-in-leave" | String | w-animate |