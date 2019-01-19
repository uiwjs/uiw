Select 选择器
===

当选项过多时，使用下拉菜单展示并选择内容。

```jsx
import { Select } from '@uiw/core';
```

### 基础用法

适用广泛的基础单选 `value` 的值为当前被选中的 `Option` 的 `value` 属性值。

<!--DemoStart--> 
```js
const styl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };
const Demo = () => (
  <Row style={styl}>
    <Col fixed>
      <Select defaultValue="w">
        <Select.Option value="w">Choose an item...</Select.Option>
        <Select.Option value="1">One</Select.Option>
        <Select.Option value="2">Two</Select.Option>
        <Select.Option value="3">Three</Select.Option>
        <Select.Option value="4">Four</Select.Option>
      </Select>
    </Col>
  </Row>
);
```
<!--End-->

### 纯样式使用

这个组件是最简单的基础样式组件，可以直接引用样式，使用 `w-select` 纯样式即可达到效果，下拉框右边箭头效果通过样式更改，通过 [`b64`](http://b64.io/) 工具，转换成 `base64` 格式。

```jsx
import '@uiw/core/lib/esm/select/style/index.less';
```

<!--DemoStart--> 
```js
const Demo = () => (
  <Row style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Col fixed>
      <select className="w-select" defaultValue="w">
        <option value="w">Choose an item...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    </Col>
  </Row>
);
```
<!--End-->

## Select

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 控制时 `select` 的值必须与 `onChange` 函数一起使用才能更新 `select` 的值 | Any | - |
| defaultValue | 根据 `value` 进行比较，判断是否选中 | Any | - |
