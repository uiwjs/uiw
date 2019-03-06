Calendar 日历
---

按照日历形式展示数据的容器。

### 基础用法

下面是基础使用方法，可以设置日历通知事项，在日历渲染单元格时，会根据 data 内容来渲染单元格通知事项。

<!--DemoStart,bgWhite-->
```js
const data = [
  { type: 'default', date: '8', label: '中国电动车初创公司蔚来据称考虑明年赴美上市。' },
  { type: 'success', date: '8', label: '苹果收购一批新专利 或用于iPhone 3D摄像头' },
  { type: 'default', date: '8', label: '高通再诉iPhone侵犯专利 苹果正面反驳' },
  { type: 'error', date: '8', label: '谷歌安全团队报告macOS文件系统高危漏洞' },
  { type: 'default', date: '8', label: 'iPhone销量下滑使富士康工人待遇降低' },
  { type: 'default', date: '8', label: 'Flutter 1.0重磅发布，它还想做桌面和Web开发' },
  { type: 'warning', date: '15', label: '月圆的日子?', style: { color: 'red' } },
  { type: 'success', date: '1/1', label: '元旦节' },
  { type: 'error', date: '3/12', label: '植树节' },
  { type: 'info', date: '3/5', label: '学雷锋日' },
  { type: 'default', date: '3/8', label: '妇女节' },
  { type: 'success', date: '2019/3/8', label: '2019植树节' },
  { type: 'warning', date: '5/1', label: '劳动节' },
  { type: 'default', date: '5/4', label: '青年节' },
  { type: 'success', date: '6/1', label: '儿童节' },
  { type: 'warning', date: '7/1', label: '建党节' },
  { type: 'success', date: '8/1', label: '建军节' },
  { type: 'warning', date: '9/10', label: '教师节' },
  { type: 'default', date: '10/1', label: '国庆节' },
]
function filterData(dt) {
  return dt.map((item) => {
    let color = '';
    switch (item.type) {
      case 'success': color = '#28a745'; break;
      case 'error': color = '#dc3545'; break;
      case 'warning': color = '#F95C2B'; break;
      case 'default': color = '#393E48'; break;
      case 'info': color = '#008EF0'; break;
    }
    item.label = <Badge color={color}>{item.label}</Badge>;
    return item;
  });
}
const Demo = () => (
  <div>
    <Calendar data={filterData(data)} />
  </div>
);
```
<!--End-->


### 禁用日历

<!--DemoStart,bgWhite-->
```js
const data = [
  { type: 'default', date: '8', label: '中国电动车初创公司蔚来据称考虑明年赴美上市。' },
  { type: 'success', date: '8', label: '苹果收购一批新专利 或用于iPhone 3D摄像头' },
  { type: 'default', date: '8', label: '高通再诉iPhone侵犯专利 苹果正面反驳' },
  { type: 'error', date: '8', label: '谷歌安全团队报告macOS文件系统高危漏洞' },
  { type: 'default', date: '8', label: 'iPhone销量下滑使富士康工人待遇降低' },
  { type: 'default', date: '8', label: 'Flutter 1.0重磅发布，它还想做桌面和Web开发' },
  { type: 'warning', date: '15', label: '月圆的日子?', style: { color: 'red' } },
  { type: 'success', date: '1/1', label: '元旦节' },
  { type: 'error', date: '3/12', label: '植树节' },
  { type: 'info', date: '3/5', label: '学雷锋日' },
  { type: 'default', date: '3/8', label: '妇女节' },
  { type: 'success', date: '2019/3/8', label: '2019植树节' },
  { type: 'warning', date: '5/1', label: '劳动节' },
  { type: 'default', date: '5/4', label: '青年节' },
  { type: 'success', date: '6/1', label: '儿童节' },
  { type: 'warning', date: '7/1', label: '建党节' },
  { type: 'success', date: '8/1', label: '建军节' },
  { type: 'warning', date: '9/10', label: '教师节' },
  { type: 'default', date: '10/1', label: '国庆节' },
]
function filterData(dt) {
  return dt.map((item) => {
    let color = '';
    switch (item.type) {
      case 'success': color = '#28a745'; break;
      case 'error': color = '#dc3545'; break;
      case 'warning': color = '#F95C2B'; break;
      case 'default': color = '#393E48'; break;
      case 'info': color = '#008EF0'; break;
    }
    item.label = <Badge color={color}>{item.label}</Badge>;
    return item;
  });
}
function disabledDate(currentDate) {
  // 今天和今天之前不能选择
  return currentDate && currentDate.valueOf() < Date.now();
}
const Demo = () => (
  <div>
    <Calendar disabledDate={disabledDate} data={filterData(data)} />
  </div>
);
```
<!--End-->

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| data | 在日历面板上面添加通知，数组中的对象可以设置 ElementProps，如：`style`, `onClick` 等属性。 | `Array[{ date: YYYY/MM/DD, label: String/RabeNode }]` | - |
| titleFormat | 设置日历面板上面的日期标题。 | String | `YYYY年MM月` |
| date[`<DatePicker>`](#/components/date-picker) | 选中的日期 | Date | - |
| panelDate[`<DatePicker>`](#/components/date-picker) | 日历面板默认展示哪一页 | Date | `new Date` |
| disabledDate[`<DatePicker>`](#/components/date-picker) | 不可选择的日期，函数返回 `true` 当前日期被禁用无法选择。 | Date | `new Date` |
| today[`<DatePicker>`](#/components/date-picker) | 默认高亮当天日期 | Function(currentDate) | - |
| weekTitle[`<DatePicker>`](#/components/date-picker) | 星期显示文本提示 | Array | \[`星期天`, `星期一`, `星期二`, `星期三`, `星期四`, `星期五`, `星期六`\] |
| weekday[`<DatePicker>`](#/components/date-picker) | 星期显示文本 | Array | \[`日`, `一`, `二`, `三`, `四`, `五`, `六`\] |
| monthLabel[`<DatePicker>`](#/components/date-picker) | 月份显示文本 | Array | \[`一月`, `二月`, `三月`, `四月`, `五月`, `六月`, `七月`, `八月`, `九月`, `十月`, `十一月`, `十二月`\] |