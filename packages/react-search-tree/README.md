SearchTree 带搜索的Tree选择控件
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-search-tree/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-search-tree.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-search-tree)
[![npm version](https://img.shields.io/npm/v/@uiw/react-search-tree.svg?label=@uiw/react-search-tree)](https://npmjs.com/@uiw/react-search-tree)

使用树选择控件可以完整展现其中的层级关系，并具有选中状态。新组件 v4.11.7+ 支持。

```jsx
import { SearchTree } from 'uiw';
// or
import SearchTree from '@uiw/react-search-tree';
```

### 基础实例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import {  SearchTree } from 'uiw';

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
    value={[{ label: '东花市街道', key: '2-3-1' }]}
    options={data}
    placeholder="请输入选择"
  />
)
ReactDOM.render(<Demo />, _mount_);
```

## Form中使用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import {  Form, Button, SearchTree, Card, Row, Col } from 'uiw';;

const Demo = () => {

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

  return (
    <div>
      <Form
        onSubmitError={(error) => {
          if (error.filed) {
            return { ...error.filed };
          }
          return null;
        }}
        onSubmit={({initial, current}) => {
          const errorObj = {};
          if (!current.selectField) {
            errorObj.selectField = '默认需要选择内容，选择入内容';
          }
          if(Object.keys(errorObj).length > 0) {
            const err = new Error();
            err.filed = errorObj;
            Notify.error({ title: '提交失败！', description: '请确认提交表单是否正确！' });
            throw err;
          }
          Notify.success({
            title: '提交成功！',
            description: `表单提交成功，选择值为：${current.selectField}，将自动填充初始化值！`,
          });
        }}
        fields={{
          searchTree: {
            initialValue:[{ label: '东花市街道', key: '2-3-1' }],
            children: (
                <SearchTree
                  allowClear={true}
                  onSearch={(searchValue)=>console.log('SearchTree-> SearchTreeOption',searchValue)}
                  onChange={(selectedAll, selectd, isChecked)=>console.log('SearchTree-> onChange',selectedAll, selectd, isChecked)}
                  options={data}
                  placeholder="请输入选择"
                />
            )
          },
        }}
      >
        {({ fields, state, canSubmit }) => {
          return (
            <div>
              <Row>
                <Col fixed>{fields.searchTree}</Col>
              </Row>
              <Row>
                <Col fixed>
                  <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <pre style={{ padding: 10, marginTop: 10 }}>
                  {console.log('state',state)}
                    {JSON.stringify(state.current, null, 2)}
                  </pre>
                </Col>
              </Row>
            </div>
          )
        }}
      </Form>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| allowClear | 支持清除 | Boolean | `false` |
| disabled | 禁用选择器 | Boolean | `false` |
| value | 指定当前选中的条目 | [{label:string, key:string}] | - |
| options | 下拉数据源,可参考Tree下拉数据源 | [{label:string, key:string, children: [{label:string, key:string}] }] | - |
| placeholder | 选择框默认文字 | String | - |
| size | 选择框尺寸 | Enum{large, default, small } | `default` |
| onChange | 选中 option，或 input 的 value，调用此函数 | function(selectdAll, selectd, isChecked)=>void | - |
| onSearch | 文本框值变化时回调 | function(searchValue) | - |
| loading | 加载中状态 | Boolean | `false` |

