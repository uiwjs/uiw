Timestamp 时间戳
===

用于时间格式化。

## 基础实例

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20
    }
  }
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
      </div>
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
import { CopyToClipboard } from 'uiw';
// or
import Timestamp from 'uiw/lib/timestamp';
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 日期值作为ISO8601字符串或Date对象 | String | - |
| format | 格式化时间 | String | - |
