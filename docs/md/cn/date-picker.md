DatePicker 日期选择器
===

用于选择或输入日期


## 基础实例

<!--DemoStart--> 
```js
class Demo extends Component {
  onChange(date, dateString){
    console.log(date, dateString);
  }
  render() {
    return (
      <div>
        <DatePicker onChange={this.onChange.bind(this)} />
        <DatePicker showToday={true} onChange={this.onChange.bind(this)} />
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
import { DatePicker } from 'uiw';
// or
import DatePicker from 'uiw/lib/date-picker';
```

### DatePicker

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 日期 | Date | - |
| placeholder | 占位内容 | String | - |
| format | 格式化时间，例如：`yyyy年MM月dd日 hh:mm:ss`，年`yyyy`，月`MM`，日`dd`，时`hh`，分`mm`，秒`ss` | String | `yyyy-MM-dd hh:mm:ss` |
| allowClear | 允许清除 | Boolean | - |
| showToday | 是否展示“今天”按钮 | Boolean/Node | false |
| disabled | 禁用日历 | Boolean | - |
| disabledTime | 禁用时间 | Function(date) | - |
| align | 占位内容 | Enum{`left` `center` `right`} | - |
| onChange | 时间发生变化的回调 time:`2017-12-18 12:18:43`、timeString:`Fri Jul 28 2017 09:45:00 GMT+0800 (CST)` | function(time:String, timeString: String) | - |
