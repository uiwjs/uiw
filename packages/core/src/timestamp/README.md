Timestamp 时间戳
===

用于时间格式化，时间格式化的部分是组件基于 [time-stamp](https://github.com/jonschlinkert/time-stamp) 更改。

```jsx
import { Timestamp } from 'uiw';

console.log(Timestamp('YYYY/MM/DD mm:ss'));
//=> 2019-02-16 02:18
console.log(Timestamp.utc());
//=> 2019-02-16
```

## 基础实例

<!--DemoStart--> 
```js
const Demo = () => {
  return (
    <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
      <Tag title="Timestamp('YYYY ? MM # DD')" color="#1C7CEB">{Timestamp('YYYY ? MM # DD')}</Tag>
      <Divider />
      <Tag title="Timestamp.utc()">{Timestamp.utc()}</Tag>
      <Divider />
      {Timestamp('YYYY / MM / DD', new Date(1987, 2, 4))}
    </div>
  );
};
```
<!--End-->

## 格式化时间

```js
console.log(Timestamp('YYYYMMDD'));
//=> 20190217
console.log(Timestamp.utc('YYYYMMDD'));
//=> 20190217

console.log(Timestamp('YYYYMMDD:ss'));
//=> 20190217:24
console.log(Timestamp.utc('YYYYMMDD:ss'));
//=> 20190217:24

console.log(Timestamp('YYYY/MM/DD:mm:ss'));
//=> 2019/02/17:46:24
console.log(Timestamp.utc('YYYY/MM/DD:mm:ss'));
//=> 2019/02/17:46:24

console.log(Timestamp('YYYY:MM:DD'));
//=> 2019:02:17
console.log(Timestamp.utc('YYYY:MM:DD'));
//=> 2019:02:17

console.log(Timestamp('[YYYY:MM:DD]'));
//=> [2019:02:17]
console.log(Timestamp.utc('[YYYY:MM:DD]'));
//=> [2019:02:17]

console.log(Timestamp('YYYY/MM/DD'));
//=> 2019/02/17
console.log(Timestamp.utc('YYYY/MM/DD'));
//=> 2019/02/17

console.log(Timestamp('YYYY:MM'));
//=> 2019:02
console.log(Timestamp.utc('YYYY:MM'));
//=> 2019:02

console.log(Timestamp('YYYY'));
//=> 2019
console.log(Timestamp.utc('YYYY'));
//=> 2019

console.log(Timestamp('MM'));
//=> 10
console.log(Timestamp.utc('MM'));
//=> 10

console.log(Timestamp('DD'));
//=> 26
console.log(Timestamp.utc('DD'));
//=> 26

console.log(Timestamp('HH'));
//=> 00
console.log(Timestamp.utc('HH'));
//=> 04

console.log(Timestamp('mm'));
//=> 46
console.log(Timestamp.utc('mm'));
//=> 46

console.log(Timestamp('ss'));
//=> 24
console.log(Timestamp.utc('ss'));
//=> 24

console.log(Timestamp('ms'));
//=> 186
console.log(Timestamp.utc('ms'));
//=> 186
```

## 时区转换

`TZC` 为时区转换，有个应用场景，服务器时间时区，将时区转换成跟客户端时区一致，例如西面是转换到东八区时间。

<!--DemoStart--> 
```js
const Demo = () => {
  const date = Timestamp.tzc('Wed Nov 22 2017 02:06:01 GMT+100 (CST)', 8);
  console.log('date:', date);
  return (
    <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
      {Timestamp('YYYY / MM / DD', new Date(date))}
      <Divider />
      {date.toString()}
    </div>
  );
};
```
<!--End-->

## API

```js
Timestamp(rule: String, date: Date, utc: Number);
Timestamp.utc(rule: String, date: Date);
Timestamp.tzc(date: Date, timeZone: Number);
```

## 格式化规则

| 参数 | 说明 | 中文说明 | 实例 |
|--------- |-------- |--------- |-------- |
| `YYYY` | full year | 年 | 例：`2019` |
| `MM` | month | 月 | 例：`02` |
| `DD` | day | 天 | 例: `05` |
| `HH` | hours | 时 | 例: `12` |
| `mm` | minutes | 分钟 | 例: `59` |
| `ss` | seconds | 秒 | 例: `09` |
| `ms` | milliseconds | 毫秒 | 例: `532` |
