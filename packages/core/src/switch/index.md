Switch 开关
===

表示两种相互对立的状态间的切换，多用于触发「开/关」。选中时的内容支持响应式。

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
