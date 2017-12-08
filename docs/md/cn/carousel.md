Carousel 走马灯
===

### 最简单的用法

<!--DemoStart--> 
```js
class Demo extends Component {
  onChange(current){
    console.log(current);
  }
  render() {
    let style = {
      textAlign: 'center',
      height: 160,
      width:100,
      linearHeight: 160,
      background: '#b7b7b7',
      overflow: 'hidden',
    };
    return (
      <Carousel   easing='linear'  afterChange={this.onChange} >
        <div style={style}><h3 style={{color:'#fff'}}>1</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>2</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>3</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>4</h3></div>
      </Carousel>
    )
  }
}
```
<!--End-->


### 垂直显示

<!--DemoStart--> 
```js
class Demo extends Component {
  onChange(current){
    console.log(current);
  }
  render() {
    let style = {
      textAlign: 'center',
      height: 160,
      linearHeight: 160,
      background: '#b7b7b7',
      overflow: 'hidden',
    };
    return (
      <div>
        <Carousel ref={(node)=>{this.carousel = node}} vertical afterChange={this.onChange} >
          <div style={style}><h3 style={{color:'#fff'}}>1</h3></div>
          <div style={style}><h3 style={{color:'#fff'}}>2</h3></div>
          <div style={style}><h3 style={{color:'#fff'}}>3</h3></div>
          <div style={style}><h3 style={{color:'#fff'}}>4</h3></div>
        </Carousel>
        <div style={{paddingTop:10}}>
          <Button size="small" onClick={()=>this.carousel.next()}>下一页</Button>
          <Button size="small" onClick={()=>this.carousel.prev()}>上一页</Button>
        </div>
      </div>
    )
  }
}
```
<!--End-->

### 渐显

<!--DemoStart--> 
```js
class Demo extends Component {
  onChange(current){
    console.log(current);
  }
  render() {
    let style = {
      textAlign: 'center',
      height: 160,
      linearHeight: 160,
      width:50,
      background: '#b7b7b7',
      overflow: 'hidden',
    };
    return (
      <Carousel effect="fade" afterChange={this.onChange} >
        <div style={style}><h3 style={{color:'#fff'}}>1</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>2</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>3</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>4</h3></div>
      </Carousel>
    )
  }
}
```
<!--End-->


### 自动切换

<!--DemoStart--> 
```js
class Demo extends Component {
  onChange(current){
    console.log(current);
  }
  render() {
    let style = {
      textAlign: 'center',
      height: 160,
      linearHeight: 160,
      background: '#b7b7b7',
      overflow: 'hidden',
    };
    return (
      <Carousel autoplay afterChange={this.onChange} >
        <div style={style}><h3 style={{color:'#fff'}}>1</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>2</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>3</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>4</h3></div>
      </Carousel>
    )
  }
}
```
<!--End-->

### 自动切换反转顺序

通过设置`rtl`，反转幻灯片顺序进行自动切换。

<!--DemoStart--> 
```js
class Demo extends Component {
  onChange(current){
    console.log(current);
  }
  render() {
    let style = {
      textAlign: 'center',
      height: 160,
      linearHeight: 160,
      background: '#b7b7b7',
      overflow: 'hidden',
    };
    let arrowBtn = {
      dots: true,
      infinite: true,
      draggable: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      rtl:true,
    }
    return (
      <Carousel autoplay afterChange={this.onChange} {...arrowBtn}>
        <div style={style}><h3 style={{color:'#fff'}}>1</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>2</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>3</h3></div>
        <div style={style}><h3 style={{color:'#fff'}}>4</h3></div>
      </Carousel>
    )
  }
}
```
<!--End-->


## 安装和使用

```bash
npm install uiw --save
```

```js
import { Carousel } from 'uiw';
// or
import Carousel from 'uiw/lib/carousel';
```

### Carousel

更多参数可参考：[akiran/react-slick](https://github.com/akiran/react-slick)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| effect | 动画效果函数，可取 scrollx, fade | String | 'srcollx' |
| dots | 是否显示面板指示点 | Boolean | `true` |
| vertical | 垂直显示 | Boolean | `false` |
| autoplay | 是否自动切换 | Boolean | `false` |
| rtl | 反转幻灯片顺序配合`autoplay`来使用 | Boolean | `false` |
| easing | 动画效果 | String | 'linear' |
| draggable | 拖拽切换 | Boolean | `false` |
| beforeChange | 切换面板的回调 | function(from, to) | 无 |
| afterChange | 切换面板的回调 | function(current) | 无 |

### 方法

| 名称 | 描述 | 
| --------- | -------- |
| goTo(slideNumber) | 切换到指定面板 |
| next() | 切换到下一面板 |
| prev() | 切换到上一面板 |
