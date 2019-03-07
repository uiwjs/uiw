formatter 时间格式化
===

用于时间格式化，时间格式化是组件无依赖可单独使用，Node.js 后端也可以使用 [uiwjs/date-formatter](https://github.com/uiwjs/date-formatter) 。

```jsx
import { formatter } from 'uiw';

console.log(formatter('YYYY/MM/DD mm:ss'));
//=> 2019-02-16 02:18
console.log(formatter.utc());
//=> 2019-02-16
```

## 基础实例

<!--DemoStart,bgWhite-->
```js
const Demo = () => {
  return (
    <div>
      <Tag title="formatter('YYYY ? MM # DD')" color="#1C7CEB">{formatter('YYYY ? MM # DD')}</Tag>
      <Divider />
      <Tag title="formatter.utc()">{formatter.utc()}</Tag>
      <Divider />
      {formatter('YYYY / MM / DD', new Date(1987, 2, 4))}
    </div>
  );
};
```
<!--End-->

## 格式化时间

```js
console.log(formatter('YYYYMMDD'));
//=> 20190217
console.log(formatter.utc('YYYYMMDD'));
//=> 20190217

console.log(formatter('YYYYMMDD:ss'));
//=> 20190217:24
console.log(formatter.utc('YYYYMMDD:ss'));
//=> 20190217:24

console.log(formatter('YYYY/MM/DD:mm:ss'));
//=> 2019/02/17:46:24
console.log(formatter.utc('YYYY/MM/DD:mm:ss'));
//=> 2019/02/17:46:24

console.log(formatter('YYYY:MM:DD'));
//=> 2019:02:17
console.log(formatter.utc('YYYY:MM:DD'));
//=> 2019:02:17

console.log(formatter('[YYYY:MM:DD]'));
//=> [2019:02:17]
console.log(formatter.utc('[YYYY:MM:DD]'));
//=> [2019:02:17]

console.log(formatter('YYYY/MM/DD'));
//=> 2019/02/17
console.log(formatter.utc('YYYY/MM/DD'));
//=> 2019/02/17

console.log(formatter('YYYY:MM'));
//=> 2019:02
console.log(formatter.utc('YYYY:MM'));
//=> 2019:02

console.log(formatter('YYYY'));
//=> 2019
console.log(formatter.utc('YYYY'));
//=> 2019

console.log(formatter('MM'));
//=> 10
console.log(formatter.utc('MM'));
//=> 10

console.log(formatter('DD'));
//=> 26
console.log(formatter.utc('DD'));
//=> 26

console.log(formatter('HH'));
//=> 00
console.log(formatter.utc('HH'));
//=> 04

console.log(formatter('mm'));
//=> 46
console.log(formatter.utc('mm'));
//=> 46

console.log(formatter('ss'));
//=> 24
console.log(formatter.utc('ss'));
//=> 24

console.log(formatter('ms'));
//=> 186
console.log(formatter.utc('ms'));
//=> 186
```

## 时区转换

`TZC` 为时区转换，有个应用场景，服务器时间时区，将时区转换成跟客户端时区一致，例如西面是转换到东八区时间。

<!--DemoStart,bgWhite-->
```js
function timeZoneConverter(date, timeZone) {
  const oldDate = new Date(date);
  const newDate = new Date();
  const stamp = oldDate.getTime();
  if (!timeZone) return oldDate;
  return (isNaN(timeZone) && !timeZone)
    ? oldDate :
    new Date(stamp + (newDate.getTimezoneOffset() * 60 * 1000) + (timeZone * 60 * 60 * 1000));
}
const Demo = () => {
  const date = timeZoneConverter('Wed Nov 22 2017 02:06:01 GMT+100 (CST)', 8);
  return (
    <div>
      {formatter('YYYY / MM / DD', new Date(date))}
      <Divider />
      {date.toString()}
    </div>
  );
};
```
<!--End-->

## API

```js
formatter(rule: String, date: Date, utc: Number);
formatter.utc(rule: String, date: Date);
```

下面方法，解决因时区变更，导致显示服务器时间不准确

```js
function timeZoneConverter(date, timeZone) {
  const oldDate = new Date(date);
  const newDate = new Date();
  const stamp = oldDate.getTime();
  if (!timeZone) return oldDate;
  return (isNaN(timeZone) && !timeZone)
    ? oldDate :
    new Date(stamp + (newDate.getTimezoneOffset() * 60 * 1000) + (timeZone * 60 * 60 * 1000));
}
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
