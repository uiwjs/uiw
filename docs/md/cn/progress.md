Progress 进度条
===

用于展示操作进度，告知用户当前状态和预期。

### 基本用法

<!--DemoStart--> 
```js
render() {
  const sty = {marginBottom:10}
  return (
    <div style={{maxWidth:400}}>
      <Progress style={sty} percent={30} />
      <Progress style={sty} percent={50} status="active" />
      <Progress style={sty} percent={70} status="exception" />
      <Progress style={sty} percent={100} />
      <Progress style={sty} percent={50} showText={false} />
    </div>
  )
}
```
<!--End-->

### 进度条大小设置

设置参数`strokeWidth`即可

<!--DemoStart--> 
```js
render() {
  const sty = {marginBottom:15}
  return (
    <div style={{maxWidth:400}}>
      <Progress style={sty} strokeWidth={14} percent={30} />
      <Progress style={sty} strokeWidth={14} percent={50} status="active" />
      <Progress style={sty} strokeWidth={14} percent={70} status="exception" />
      <Progress style={sty} strokeWidth={14} percent={100} />
      <Progress style={sty} strokeWidth={14} percent={50} showText={false} />
    </div>
  )
}
```
<!--End-->

## API

### Progress

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| percent | 百分比 | Number | `0` |
| showText | 是否显示进度条文字内容 | Boolean | `true` |
| type | 类型 | Enum{'`line`', '`circle`'} | `line` |
| strokeWidth | 进度条线的宽度 | Number | `6` |
| status | 状态，可选：`success` `exception` `active` | Enum{'`success`', '`exception`'} | - |