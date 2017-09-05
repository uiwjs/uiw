Transition 过渡动画
===

用于页面中展示过渡动画。

### 基本用法

进入、出现、离开动画

<!--DemoStart-->
```js
constructor(props) {
  super(props);
  this.state = {
    dispaly: true,
  }
}
render() {
  return (
    <div>  
        <div style={{padding:"0 0 20px 0"}}>

            <Transition type="fade-down">
              {this.state.dispaly&&
                <div style={{}}>
                  这里测试过渡动画
                </div>
              }
            </Transition>

        </div>
        <Button size="mini" onClick={()=>{
          this.setState({
            dispaly:!this.state.dispaly
          })
        }}>
            {this.state.dispaly?'消失':'显示'}
        </Button>
    </div>
  )
}
```
<!--End-->



### Transition Attributes

可以通过 [Animate.css](https://daneden.github.io/animate.css/) 制作更多的过度动画。

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| type | 指定可选项 `fade-in` 、`fade-left`、 `fade-right` 、 `fade-down` | string | - |
| visible | 动画会产生一个根节点，设置 `false` 销毁 | Bool | `true` |
| appear | 出现 | Bool | `true` |
| leave | 离开 | Bool | `true` |
| enter | 进入 | Bool | `true` |
| AppearTimeout | 出现时间[自定义过渡效果起作用] | Number | 250 |
| LeaveTimeout | 离开时间[自定义过渡效果起作用] | Number | 250 |
| EnterTimeout | 进入时间[自定义过渡效果起作用] | Number | 500 |
| prefixCls | 自定义过渡效果。自带过渡效果，时间设置是没有用的，通过这个来自定义一个样式，默认样式 “w-animate”，自定义样式会拼接成 “w-animate-fade-in”，在CSS样式里面，根据react-transition-group规则最终需要这样写样式，".w-animate-fade-in-leave" | String | w-animate |