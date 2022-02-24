SearchTree 带搜索的Tree选择控件
===

使用树选择控件可以完整展现其中的层级关系，并具有选中状态。新组件 v4.11.7+ 支持。

```jsx
import { TreeChecked } from 'uiw';
// or
import TreeChecked from '@uiw/react-tree-checked';
```

### 基础实例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { TreeChecked, SearchTree, Card, Row, Col } from 'uiw';

const data = [
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
  <SearchTree
    allowClear={true}
    onSearch={(searchValue)=>console.log('SearchTree-> SearchTreeOption',searchValue)}
    onChange={(selectedAll, selectd, isChecked)=>console.log('SearchTree-> onChange',selectedAll, selectd, isChecked)}
    value={[{ label: '东花市街道', value: '2-3-1' }]}
    options={data}
    placeholder="请输入选择"
  />
)
ReactDOM.render(<Demo />, _mount_);
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| allowClear | 支持清除 | Boolean | `false` |
| disabled | 禁用选择器 | Boolean | `false` |
| value | 指定当前选中的条目 | [{label:string, value:string}] | - |
| options | 下拉数据源 | [{label:string, value:string}] | - |
| placeholder | 选择框默认文字 | String | - |
| size | 选择框尺寸 | Enum{large, default, small } | `default` |
| onChange | 选中 option，或 input 的 value，调用此函数 | function(selectdAll, selectd, isChecked)=>void | - |
| onSearch | 文本框值变化时回调 | function(searchValue) | - |
| loading | 加载中状态 | Boolean | `false` |

