## Time Picker 时间选择器

用于选择或输入日期

### 固定时间点

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    value: new Date(2017, 6, 28, 15, 51),
    //value: new Date("2016asdf0"),
    //value: [ new Date("2016asdf0"),  new Date("2016asdf0")]
    //value: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
 
  }
}
handleChang(value,date) {
  console.log('time-select Chang: ', value,date)
}
render() {
  return (
    <TimeSelect
      start="08:30"
      step="00:15"
      end="18:30"
      //maxTime="12:30"
      //readOnly="2323"
      minTime="9:30"
      onChange={this.handleChang.bind(this)}
      value={this.state.value}
      placeholder="选择时间"
      />
  )
}
```
<!--End-->

### 固定时间点

<!--DemoStart--> 
```js
constructor(props) {
  super(props)
  this.state = {
    startDate: new Date(2017, 9, 10, 14, 30),
    endDate: new Date(2017, 9, 10, 15, 30)
  }
}

handleStartUpdate(value,startDate) {
  console.debug('time-select startDate update: ', startDate)
  this.setState({startDate})
}

handleEndUpdate(value,endDate){
  console.debug('time-select endDate update: ', endDate)
  this.setState({endDate})
}

render() {
  return (
    <div>
      <TimeSelect
        start="08:30"
        step="00:15"
        end="18:30"
        onChange={this.handleStartUpdate.bind(this)}
        value={this.state.startDate}
        placeholder="选择时间"
        />

      <TimeSelect
        start="08:30"
        step="00:15"
        end="18:30"
        onChange={this.handleEndUpdate.bind(this)}
        value={this.state.endDate}
        minTime={this.state.startDate}
        placeholder="选择时间"
        />
    </div>

  )
}
```
<!--End-->


## API

### TimeSelect 

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| value | 值 | date/null | - |
| start | 开始时间 | string | 09:00 |
| end | 结束时间 | string | 18:00 |
| step | 间隔时间 | string | 00:30 |
| minTime | 最小时间 | date | - |
| maxTime | 最大时间 | date | - |