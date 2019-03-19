Tree 树形控件
===

使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

```jsx
import { Tree } from 'uiw';
```

### 基础用法

<!--DemoStart,bgWhite,codePen--> 
```js
import { Tree, Card } from 'uiw';

const data = [
  {
    label: '湖北省',
    key: '0-0-0',
    children:[
      {
        label: '武汉市',
        key: '0-1-0',
        children:[
          { label: '新洲区', key: '0-1-1' },
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
  }
];

const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Card title="单选">
          <Tree
            defaultExpandAll
            data={data}
            onExpand={(key, expanded, data, node) => {
              console.log(key, expanded, data, node);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
      <Col fixed>
        <Card title="多选，子节点不受控">
          <Tree
            defaultExpandAll
            data={data}
            multiple
            onExpand={(key, expanded, data, node) => {
              console.log(key, expanded, data, node);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
      <Col fixed>
        <Card title="多选，子节点受控">
          <Tree
            defaultExpandAll
            data={data}
            multiple
            checkStrictly
            onExpand={(key, expanded, data, node) => {
              console.log(key, expanded, data, node);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 自定义图标

<!--DemoStart,bgWhite,codePen--> 
```js
import { Tree, Card, Icon } from 'uiw';

const data = [
  {
    label: '湖北省',
    key: '0-0-0',
    children:[
      {
        label: '武汉市',
        key: '0-1-0',
        children:[
          { label: '新洲区', key: '0-1-1' },
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
  }
];

const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Card title="标题中添加图标">
          <Tree
            defaultExpandAll
            data={data}
            renderTitle={(item, selected, noChild) => (
              <span><Icon type={noChild ? 'smile-o' : 'apple'} />{item.label}</span>
            )}
            onExpand={(key, expanded, data, node) => {
              console.log(key, expanded, data, node);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
      <Col fixed>
        <Card title="自定义展开图标">
          <Tree
            defaultExpandAll
            data={data}
            icon={(data, isOpen, noChild) => {
              if(isOpen && !noChild) {
                return 'folder-open';
              } else if (!noChild) {
                return 'folder';
              }
              return 'file-text';
            }}
            onExpand={(key, expanded, data) => {
              console.log(key, expanded, data);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->


## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| data | 展示数据 | Array | `[]` |
| openKeys | 节点展开 `key` | Array | `[]` |
| selectedKeys | 设置选中的树节点 | Array | `[]` |
| autoExpandParent | 是否自动展开父节点 | Boolean | true |
| defaultExpandAll | 默认展开所有树节点 | Boolean | false |
| checkStrictly | 子节点受父节点控制设置 `true`，需要配合 `multiple` 参数使用。 | Boolean | false |
| multiple | 支持点选多个节点 | Boolean | false |
| icon | 重新定义，展开收缩图标 | Function(data: object, noChild: bool)/String/Node | - |
| renderTitle | 重新定义每个标题节点的显示 | Function(item, selected: bool, noChild: bool) | - |
| onSelected | 点击选择树节点触发 | Function(selectedKeys: array, key, selected: bool, data, e) | - |
| onExpand | 展开/收起节点时触发 | Function(key, expanded: bool, data, evn) | - |

### data

```json
[
  {
    "label": "湖北省",
    "key": "0-0-0",
    "children":[]
  }
  ...
]
```