Progress 进度条
===

用于展示操作进度，告知用户当前状态和预期。

```jsx
import { Progress } from 'uiw';
const { Line, Circle } = Progress;
```

### 基本用法

<!--DemoStart,bgWhite--> 
```js
const { Line } = Progress;
const sty = {marginBottom:10}
const Demo = () => (
  <div>
    <Progress.Line style={sty} percent={30} />
    <Line style={sty} percent={50} status="active" />
    <Line style={sty} percent={70} status="exception" />
    <Line style={sty} percent={100} />
    <Line style={sty} percent={50} showText={false} />
  </div>
);
```
<!--End-->

### 进度条大小设置

设置参数`strokeWidth`即可

<!--DemoStart,bgWhite--> 
```js
const { Line } = Progress;
const sty = {marginBottom:10}
const Demo = () => (
  <div>
    <Progress.Line style={sty} strokeWidth={6} percent={30} />
    <Line style={sty} strokeWidth={14} percent={50} status="active" />
    <Line style={sty} strokeWidth={18} percent={70} status="exception" />
    <Line style={sty} strokeWidth={12} percent={100} />
    <Line style={sty} strokeWidth={14} percent={50} showText={false} />
  </div>
);
```
<!--End-->

### 圆圈进度条

<!--DemoStart,bgWhite--> 
```js
const { Circle } = Progress;
const sty = {marginBottom:10}
const Demo = () => (
  <div>
    <Progress.Circle style={sty} percent={30} />
    <Circle style={sty} percent={75} />
    <Circle style={sty} percent={70} status="exception" />
    <Circle style={sty} percent={100} />
  </div>
);
```
<!--End-->

### 不同尺寸圆圈进度条

通过`strokeWidth`设置圆圈进度宽带，通过`width`（`type="circle"`有效）设置圆圈大小，

<!--DemoStart,bgWhite--> 
```js
let sty = {marginRight:15}
const Demo = () => (
  <div>
    <Progress.Circle style={sty} width={80} strokeWidth={2} percent={30} />
    <Progress.Circle style={sty} width={100} strokeWidth={10} percent={75} />
    <Progress.Circle style={sty} percent={70} status="exception" />
    <Progress.Circle style={sty} width={100} strokeWidth={3} percent={75} />
  </div>
);
```
<!--End-->

### 动态展示

进度条动态展示更直观。

<!--DemoStart,bgWhite--> 
```js
class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      percent: 50,
    }
  }
  increase(){
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }
  decline(){
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }
  render() {
    let sty = {marginRight:15}
    return (
      <div style={{maxWidth:400}}>
        <Progress.Line percent={this.state.percent} />
        <Progress.Circle percent={this.state.percent} />
        <div>
          <button onClick={this.decline.bind(this)}>minus -</button>
          <button onClick={this.increase.bind(this)}>plus +</button>
        </div>
      </div>
    )
  }
}
```
<!--End-->

## 自定义文字格式

`format` 属性指定格式。

<!--DemoStart,bgWhite--> 
```js
const sty = {marginRight:10}
class Demo extends Component {
  render() {
    return (
      <div>
        <Progress.Circle style={sty} percent={80} type="circle" format={percent => (
            <span>
              {`${percent} %`}
              <div style={{padding:"10px 0 0 0",fontSize:21}}>已完成</div>
            </span>
          )}/>
        <Progress.Circle style={sty} percent={70} status="exception" type="circle" format={percent => (
          <span>
            {`${percent} %`}
            <div style={{padding:"10px 0 0 0",fontSize:21}}>已关闭</div>
          </span>
        )}/>
        <Progress.Circle style={sty} percent={100} type="circle" format={percent => `已完成`}/>
        <Progress.Line style={sty} percent={70} format={percent => `${percent}℃`}/>
      </div>
    )
  }
}
```
<!--End-->


## API

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| percent | 百分比 | Number | `0` |
| showText | 是否显示进度条文字内容 | Boolean | `true` |
| format | 内容的模板函数，自定义文字格式。 | Function | - |
| strokeWidth | 进度条线的宽度 | Number | `6` |
| width  | 圆形进度条画布宽度，单位 px ,`type="circle"`有效| Number | `126` |
| status | 状态，可选：`success` `exception` `active` | Enum{'`success`', '`exception`'} | - |