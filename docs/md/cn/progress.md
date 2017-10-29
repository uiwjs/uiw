Progress 进度条
===

用于展示操作进度，告知用户当前状态和预期。

### 基本用法

<!--DemoStart--> 
```js
render() {
  return (
    <div style={{maxWidth:400}}>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showText={false} />
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
| status | 状态，可选：`success` `exception` `active` | Enum{'`success`', '`exception`'} | - |