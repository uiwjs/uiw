TreeChecked 树形选择控件
===

使用树选择控件可以完整展现其中的层级关系，并具有选中状态。

### 基础实例

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Tree, Card, Row, Col } from 'uiw';

const data = [
  {
    label: '湖北省',
    key: '0-0-0',
    children:[
      {
        label: '武汉市',
        key: '0-1-0',
        children:[
          { label: '新洲区', key: '0-1-1', disabled: true },
          { label: '武昌区', key: '0-1-2' },
          {
            label: '汉南区',
            key: '0-1-3',
            children:[
              { label: '汉南区1', key: '0-1-3-1' },
              { label: '汉南区2', key: '0-1-3-2' },
              { label: '汉南区3', key: '0-1-3-3' },
            ]
          },
        ]
      },
      { label: '黄冈市', key: '0-2-0' },
      {
        label: '黄石市',
        key: '0-3-0',
        children:[
          { label: '青山区', key: '0-3-1' },
          { label: '黄陂区', key: '0-3-2' },
          { label: '青山区', key: '0-3-3' },
        ]
      },
    ]
  },
  {
    label: '上海市',
    key: '1-0-0',
    children:[
      { label: '黄浦区', key: '1-0-1' },
      { label: '卢湾区', key: '1-0-2' },
      {
        label: '徐汇区',
        key: '1-0-3',
        children:[
          { label: '半淞园路街道', key: '1-1-0' },
          { label: '南京东路街道', key: '1-2-0' },
          { label: '外滩街道', key: '1-3-0' },
        ]
      },
    ]
  },
  {
    label: '北京市',
    key: '2-0-0',
    children:[
      { label: '东城区', key: '2-1-0' },
      { label: '西城区', key: '2-2-0' },
      {
        label: '崇文区',
        key: '2-3-0',
        children:[
          { label: '东花市街道', key: '2-3-1' },
          { label: '体育馆路街道', key: '2-3-2' },
          { label: '前门街道', key: '2-3-3' },
        ]
      },
    ]
  },
  { label: '澳门', key: '3' },
];

const Demo = () => (
  <TreeChecked
    data={data}
    selectedKeys={['0-1-1']}
    onExpand={(key, expanded, data, node) => {
      console.log(key, expanded, data, node);
    }}
    onSelected={(key, selected, item, evn) => {
      console.log('select:', key);
      console.log('select:', selected);
      console.log('select:', item);
      console.log('select:', evn);
    }}
  />
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## Props

完全继承 [Tree](#/components/Tree) 组件属性，默认初始值不一样，下面仅列出默认不一致的 Props。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| checkStrictly | 子节点受父节点控制设置 `true`，需要配合 `multiple` 参数使用。 | Boolean | `true` |
| isSelected | 是否选中当前节点 | Boolean | `false` |
| multiple | 支持点选多个节点 | Boolean | `true` |
