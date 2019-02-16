DatePicker 日期选择器
===

显示一个月的日历，并允许用户选择单个日期。

```jsx
import { DatePicker } from 'uiw';
```

### 基础用法

<!--DemoStart--> 
```js
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }
  onChange(selectedDate) {
    console.log('selectedDate:', selectedDate)
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <DatePicker date={this.state.date} onChange={this.onChange.bind(this)} />
        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>
      </div>
    )
  }
}
```
<!--End-->

### 设置本地语言

<!--DemoStart--> 
```js
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }
  onChange(selectedDate) {
    console.log('selectedDate:', selectedDate)
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <DatePicker
          weekTitle={['星期天','星期一','星期二','星期三','星期四','星期五','星期六']}
          weekday={['日', '一', '二', '三', '四', '五', '六']}
          monthLabel={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
          date={this.state.date}
          onChange={this.onChange.bind(this)}
        />
        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>
      </div>
    )
  }
}
```
<!--End-->

### 初始展示日期

<!--DemoStart--> 
```js
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelDate: new Date(1987, 3, 3),
      date: null,
    };
  }
  onChange(selectedDate) {
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <DatePicker
          weekTitle={['星期天','星期一','星期二','星期三','星期四','星期五','星期六']}
          weekday={['日', '一', '二', '三', '四', '五', '六']}
          monthLabel={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
          panelDate={this.state.panelDate}
          date={this.state.date}
          onChange={this.onChange.bind(this)}
        />
        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>
      </div>
    );
  }
}
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| date | 选中的日期 | Date | - |
| today | 默认高亮当天日期 | Date | `new Date` |
| panelDate | 日历面板默认展示哪一页 | Date | `new Date` |
| onChange | 选择一天时调用。 | Function(selectedDate:Date) | - |
| weekTitle | 星期显示文本提示 | Array | \[`Sunday`, `Monday`, `Tuesday`, <br /> `Wednesday`, `Thursday`, `Friday`, `Saturday`\] |
| weekday | 星期显示文本 | Array | \[`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`\] |
| monthLabel | 月份显示文本 | Array | \[`January`, `February`, `March`, `April`, <br /> `May`, `June`, `July`, `August`, <br /> `September`, `October`, `November`, `December`\], |