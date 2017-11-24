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
        <div><Timestamp format="yyyy年MM月dd日 hh:mm:ss" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format="yyyy年MM月dd日" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format="hh:mm:ss" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format="yyyy" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format="MM月" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format="dd日" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
        <div><Timestamp format="dd日" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/></div>
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
      <Timestamp tzc={8} format="yyyy年MM月dd日 hh:mm:ss" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"/>
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
| format | 格式化时间 | String | - |
| tzc | 服务器时区，解决因时区变更，导致显示服务器时间不准确 time Zone Converter | Number | - |
