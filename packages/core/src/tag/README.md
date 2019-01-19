Tag 标签
===

进行标记和分类的小标签，胶囊。

```jsx
import { Tag } from '@uiw/core';
```

## 基础用法

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Tag>限购一份</Tag>
    <Tag color="red">限购一份</Tag>
    <Tag color="#1C7CEB">限购一份</Tag>
    <Tag color="#40ba16">passing</Tag>
    <Tag color="#ea7538">6.0.1</Tag>
    <Tag color="red">failure</Tag>
    <Tag disabled color="red">unknown</Tag>
    <Divider />
    <Tag title="npm" color="#1C7CEB">6.0.1</Tag>
    <Tag title="coverage" color="#e97437">35%</Tag>
    <Tag title="npm" color="#4f4f4f">6.0.12</Tag>
    <Tag title="npm" color="#4f4f4f" />
    <Divider />
    <Tag title="成功-绿色" titleColor="#28a745" />
    <Tag title="主要-蓝色" titleColor="#008EF0" />
    <Tag title="信息-青色" titleColor="#1EABCD" />
    <Tag title="导航-藏青" titleColor="#393E48" />
    <Tag title="警告-黄色" titleColor="#ffc107" />
    <Tag title="提醒-橙色" titleColor="#F95C2B" />
    <Tag title="危险-红色" titleColor="#dc3545" />
  </div>
)
```
<!--End-->

## 胶囊盾牌

设置 `title="折扣"`。

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Tag title="折扣" color="red">限购一份</Tag>
    <Tag title="折扣" color="#1C7CEB">限购一份</Tag>
    <Tag title="折扣" disabled color="#1C7CEB">限购一份</Tag>
    <Divider />
    <Tag title="build" color="#40ba16">passing</Tag>
    <Tag title="build" color="red">failure</Tag>
    <Tag title="build" color="#ce4a32">failure</Tag>
    <Tag title="build" disabled color="#b9b9b9">unknown</Tag>
    <Divider />
    <Tag title="胶" titleColor="red" color="#ffc107">囊</Tag>
    <Tag title="build" titleColor="#1C7CEB" color="#40bf16">failure</Tag>
    <Tag title="build" titleColor="#F95C2B" color="#dc3545">failure</Tag>
    <Tag title="build" titleColor="#ea7538" color="#393E48">unknown</Tag>
    <Divider />
    <Tag title="npm">v6.0.1</Tag>
    <Tag title="npm" color="#ea7538">6.0.1</Tag>
    <Tag title="npm" color="#cfa720">6.0.1</Tag>
    <Tag title="npm" color="#1C7CEB">6.0.1</Tag>
    <Tag title="coverage" color="#e97437">35%</Tag>
    <Tag title="download" color="#40bf16">10k</Tag>
  </div>
)
```
<!--End-->


## 添加图标

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Tag title={(
      <>
        <Icon type="heart-on" verticalAlign="baseline" />
        成功-绿色
      </>
    )} titleColor="#28a745" />·
    <Tag title="折扣" color="#1C7CEB"><Icon type="heart-on" verticalAlign="baseline" /> 限购一份</Tag>
    <Tag title="胶" titleColor="red" color="#ffc107"><Icon type="heart-on" verticalAlign="baseline" />囊</Tag>
  </div>
)
```
<!--End-->

## Tag

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| title | 胶囊标题，配合 `children` 是否存在，展示胶囊样式 | String/ReactNode | - |
| titleColor | 胶囊标题颜色 | String/ReactNode | - |
| color | 颜色 | String | `#1C7CEB` |
| disabled | 禁用 | Boolean | `false` |
