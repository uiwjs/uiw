Progress 进度条
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-progress/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-progress.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-progress)
[![npm version](https://img.shields.io/npm/v/@uiw/react-progress.svg?label=@uiw/react-progress)](https://npmjs.com/@uiw/react-progress)

用于展示操作进度，告知用户当前状态和预期。

```jsx
import { Progress } from 'uiw';
const { Line, Circle } = Progress;
// or
import Progress from '@uiw/react-progress';
```

### 基本用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Progress } from 'uiw';

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
export default Demo
```

### 进度条大小设置

设置参数`strokeWidth`即可

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Progress } from 'uiw';

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
export default Demo
```

### 圆圈进度条

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Progress } from 'uiw';

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
export default Demo
```

### 不同尺寸圆圈进度条

通过`strokeWidth`设置圆圈进度宽带，通过`width`（`type="circle"`有效）设置圆圈大小，

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Progress } from 'uiw';

let sty = {marginRight:15}
const Demo = () => (
  <div>
    <Progress.Circle style={sty} width={80} strokeWidth={2} percent={30} />
    <Progress.Circle style={sty} width={100} strokeWidth={10} percent={75} />
    <Progress.Circle style={sty} percent={70} status="exception" />
    <Progress.Circle style={sty} width={100} strokeWidth={3} percent={75} />
  </div>
);
export default Demo
```

### 动态展示

进度条动态展示更直观。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Progress } from 'uiw';

class Demo extends React.Component {
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
export default Demo
```

## 自定义文字格式

`format` 属性指定格式。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Progress } from 'uiw';

const sty = {marginRight:10}
class Demo extends React.Component {
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
        <Progress.Line strokeWidth={18} percent={1} status="exception" />
      </div>
    )
  }
}
export default Demo
```


## API

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| percent | 百分比 | Number | `0` |
| showText | 是否显示进度条文字内容 | Boolean | `true` |
| format | 内容的模板函数，自定义文字格式。 | Function | - |
| strokeWidth | 进度条线的宽度 | Number | `6` |
| width  | 圆形进度条画布宽度，单位 px ,`type="circle"`有效| Number | `126` |
| status | 状态，可选：`success` `exception` `active` | Enum{'`success`', '`exception`'} | - |
