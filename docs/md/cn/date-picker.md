DatePicker 日期选择器
===

用于选择或输入日期

## 基础实例

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : new Date()
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <DatePicker
        showToday
        value={`${value}`}
        shortcutinline={true}
        shortcuts={[{
            text: '昨天',
            onClick: ()=> {
              this.setState({value: new Date(Date.now() - 86400000)})
            }
          }, {
            text: '一周前',
            onClick: ()=> {
             this.setState({value: new Date(Date.now() - 86400000 * 7)})
            }
          }, {
            text: '一月前',
            onClick: ()=> {
             this.setState({value: new Date(Date.now() - 86400000 * 30)})
            }
          }]}/>
        <DatePicker showToday={true}  />
        <DatePicker showToday={true} value={`${new Date()}`}  />
      </div>
    )
  }
}
```
<!--End-->

## 格式化时间

通过设置`format`支持简单的格式化，特别注意`2017-11-28`这种形式，在Safari上面会报错误。

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:'2017/11/28',
      format:'yyyy闰年?MM月dd日',
      format1:'yyyy闰年?MM月dd日',
      format2:'yyyy/MM/dd',
      radioValue: 1
    }
  }
  onChangeRadio(e,value){
    const {format1,format2} = this.state;
    let format = format1;
    if(value === 2){
      format = format2;
    }
    this.setState({ radioValue: value, format});
  }
  render() {
    const {format1,format2} = this.state;
    return (
      <div>
        <DatePicker showToday={true} format={this.state.format} value={this.state.value} />
        <div style={{paddingTop:10}}>
          <Radio value={1} checked={this.state.radioValue === 1} onChange={this.onChangeRadio.bind(this)}>格式：{format1}</Radio>
        </div>
        <div style={{paddingTop:10}}>
          <Radio value={2} checked={this.state.radioValue === 2} onChange={this.onChangeRadio.bind(this)}>格式：{format2}</Radio>
        </div>
      </div>
    )
  }
}
```
<!--End-->


## 禁用控件

选择框的不可用状态。

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked:true
    }
  }
  onChange(e, checked){
    this.setState({checked})
  }
  render() {
    const {checked} = this.state;
    return (
      <div>
        <DatePicker disabled={checked} />
        <DatePicker disabled={checked} showToday={true} />
        <DatePicker disabled={checked} showToday={true} value={`${new Date()}`} />
        <div style={{paddingTop:20}}>
          <Switch onChange={this.onChange.bind(this)} checked={checked} checkedChildren="取消禁用" unCheckedChildren="禁用控件" color="#3eb54c" unColor="#ff4949" />
        </div>
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

> 输入框继承 `<Input/>` 组件。支持 Input 的部分属性如`size`,`disabled`, `size`, `autoFocus`, `preIcon`, `defaultValue`

### DatePicker

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 日期 | Date | - |
| placeholder | 占位内容 | String | - |
| format | 格式化时间，例如：`yyyy年MM月dd日 hh:mm:ss`，年`yyyy`，月`MM`，日`dd`，时`hh`，分`mm`，秒`ss` | String | `yyyy/MM/dd` |
| allowClear | 允许清除 | Boolean | - |
| showToday | 是否展示“今天”按钮 | Boolean/Node | false |
| disabled | 禁用日历 | Boolean | - |
| disabledTime | 禁用时间 | Function(date) | - |
| align | 占位内容 | Enum{`left` `center` `right`} | - |
| shortcuts | 快捷按钮 | Array | - |
| shortcutinline | inline 显示 | Boolean | `true` |
| shortcutClassName | 快捷键样式类名称 | String | - |
| onChange | 时间发生变化的回调 time:`2017-12-18 12:18:43`、timeString:`Fri Jul 28 2017 09:45:00 GMT+0800 (CST)` | function(time:String, timeString: String) | - |

#### shortcut

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| text | 显示文本内容 | String | - |
| onClick | 点击回调函数 | Function | - |
