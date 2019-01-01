Switch 开关
===

表示两种相互对立的状态间的切换，多用于触发「开/关」。选中时的内容支持响应式。

```jsx
import { Switch } from '@uiw/core';
```

### 基本用法

<!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Switch checked style={{ marginRight: 10 }} />
    <Switch style={{ marginRight: 10 }} />
    <Switch data-checked="开" data-unchecked="关">电源</Switch>
  </div>
);
```
<!--End-->

### 设置文字

<!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Switch
      data-checked="开"
      data-unchecked="关"
      onChange={(e) => {
        console.log('e', e.target.checked);
      }}
      style={{ marginRight: 10 }}
    />
  </div>
);
```
<!--End-->


### 禁用状态

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 10, borderRadius: '5px 5px 0 0' }}>
    <Switch disabled checked style={{ marginRight: 10 }} />
    <Switch disabled style={{ marginRight: 10 }} />
    <Switch disabled data-checked="开" data-unchecked="关">电源</Switch>
  </div>
);
```
<!--End-->

### 尺寸

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 10, borderRadius: '5px 5px 0 0' }}>
    <Switch size="large" style={{ marginRight: 10 }} data-checked="开" data-unchecked="关" />
    <Switch size="large" checked style={{ marginRight: 10 }} />
    <Switch style={{ marginRight: 10 }} />
    <Switch style={{ marginRight: 10 }} data-checked="开" data-unchecked="关" />
    <Switch size="small" data-checked="开" data-unchecked="关">电源</Switch>
  </div>
);
```
<!--End-->

## Switch 

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |
| name | 用于表单对应的名称 | String | - |
| checked | 指定当前是否选中 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| onChange | 变化时回调函数 | Function(e:Event) | - |
| data-checked |  选中时的内容 | string/ReactNode | - |
| data-unchecked |  非选中时的内容 | string/ReactNode | - |
| size |  开关大小，可选值：`large` `default` `small` | string | default |
