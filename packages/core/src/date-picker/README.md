DatePicker 日期选择器
===

显示一个月的日历，并允许用户选择单个日期，常见的应用场景在表单中应用，请查看基于 `DatePicker` 的 [`DateInput`](#/components/date-input) 组件。

```jsx
import { DatePicker } from 'uiw';
```

### 基础用法

<!--DemoStart,bgWhite--> 
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
      <div>
        <DatePicker
          date={this.state.date}
          todayButton="今天"
          onChange={this.onChange.bind(this)}
        />
        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>
      </div>
    )
  }
}
```
<!--End-->

### 设置本地语言

<!--DemoStart,bgWhite--> 
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
      <div>
        <DatePicker
          weekTitle={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
          weekday={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}
          monthLabel={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
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

<!--DemoStart,bgWhite--> 
```js
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }
  onChange(selectedDate) {
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div>
        <DatePicker
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

### 禁用时间

通过 `disabledDate` 方法设置，今天和今天之前不能选择。

<!--DemoStart,bgWhite--> 
```js
function disabledDate(currentDate) {
  // 今天和今天之前不能选择
  return currentDate && currentDate.valueOf() < Date.now();
}
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }
  onChange(selectedDate) {
    this.setState({ date: selectedDate });
  }
  render() {
    return (
      <div>
        <DatePicker
          disabledDate={disabledDate}
          date={this.state.date && new Date(this.state.date)}
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
| panelDate | 日历面板默认展示哪一页 | Date | `new Date` |
| today | 默认高亮当天日期 | Date | `new Date` |
| todayButton | 展示回到今天按钮，和提示文本。 | String | - |
| disabledDate | 不可选择的日期，函数返回 `true` 当前日期被禁用无法选择。 | Function(currentDate) | - |
| onChange | 选择一天时调用。 | Function(selectedDate:Date) | - |
| weekTitle | 星期显示文本提示 | Array | \[`星期天`, `星期一`, `星期二`, `星期三`, `星期四`, `星期五`, `星期六`\] |
| weekday | 星期显示文本 | Array | \[`日`, `一`, `二`, `三`, `四`, `五`, `六`\] |
| monthLabel | 月份显示文本 | Array | \[`一月`, `二月`, `三月`, `四月`, `五月`, `六月`, `七月`, `八月`, `九月`, `十月`, `十一月`, `十二月`\] |