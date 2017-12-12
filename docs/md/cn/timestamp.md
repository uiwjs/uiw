Timestamp 时间戳
===

用于时间格式化。

## 基础实例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <Timestamp value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/>
    )
  }
}
```
<!--End-->

## 格式化时间

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <div><Timestamp format="Y年m月d日 h:i:s" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format="Y年m月d日" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format={`\\T\\o\\d\\a\\y \\i\\s d-m-Y`} value={new Date()}/></div>
        <div><Timestamp format={`今天是：Y/m/d`} value={new Date()}/></div>
        <div><Timestamp format="h:i:s" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format="Y" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format="m月" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format="d日" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format="d日" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
      </div>
    )
  }
}
```
<!--End-->

## 时区转换

`TZC` 为服务器时间时区，将时间转换到东八区时间

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <Timestamp tzc={8} format="Y年m月d日 h:i:s" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/>
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
import { Timestamp } from 'uiw';
// or
import Timestamp from 'uiw/lib/timestamp';
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 日期值作为ISO8601字符串或Date对象 | String | - |
| format | 格式化时间，例如：`Y年m月d日 H:i:s`，年`Y`，月`m`，日`d`，时`H`，分`i`，秒`s` | String | `Y-m-d H:i:s` |
| tzc | 服务器时区，解决因时区变更，导致显示服务器时间不准确 time Zone Converter | Number | - |
