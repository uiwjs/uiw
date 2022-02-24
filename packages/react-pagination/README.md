Pagination 分页
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-pagination/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-pagination.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-pagination)
[![npm version](https://img.shields.io/npm/v/@uiw/react-pagination.svg?label=@uiw/react-pagination)](https://npmjs.com/@uiw/react-pagination)

当数据量较多时，使用分页可以快速进行数据切换，每次只加载一个页面。

```jsx
import { Pagination } from 'uiw';
// or
import Pagination from '@uiw/react-pagination';
```

### 基本用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination, Divider } from 'uiw';


const Demo = () => {
  const [pageObj, setPageObj] = React.useState({
    current: 2,
    pageSize: 10
  });
  return (
    <div>
      <Pagination
        current={pageObj.current}
        pageSize={pageObj.pageSize}
        total={30}
        divider
        pageSizeOptions={[5, 10, 20, 30]}
        onShowSizeChange={(current, pageSize) => setPageObj({
          current: current,
          pageSize: pageSize
        })}
      />
      <Divider />
      <Pagination current={2} pageSize={10} total={38} divider />
      <Divider />
      <Pagination current={1} pageSize={5} total={249} pageSizeOptions={[5, 10, 20, 30]} />
      <Divider />
      <Pagination current={1} alignment="center" pageSize={10} total={50} />
      <Divider />
      <Pagination current={1} pageSize={10} total={60} divider />
      <Divider />
      <Pagination current={1} pageSize={10} total={70} divider />
    </div>
  )
}

ReactDOM.render(
  <Demo />,
  _mount_
);
```

### 迷你分页

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Pagination, Divider } from 'uiw';

ReactDOM.render(
  <div>
    <Pagination size="small" current={1} pageSize={5} pageSizeOptions={[5, 10, 20, 30]} total={249} />
    <Divider />
    <Pagination size="small" current={1} pageSize={10} total={50} />
  </div>,
  _mount_
);
```

### 对齐

目前有三种对齐方式 `左边(left)`、`中间(center)`、`右边(right)`。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Pagination, Divider } from 'uiw';

ReactDOM.render(
  <div>
    <Pagination
      current={5}
      total={250}
      onChange={(pageNumber) => { 
        console.log(`pageNumber:${pageNumber}`)
      }}
    />
    <Divider />
    <Pagination
      current={1}
      alignment="center"
      total={250}
      onChange={(pageNumber) => { 
        console.log(`pageNumber:${pageNumber}`)
      }}
    />
    <Divider />
    <Pagination
      current={25}
      alignment="right"
      total={250}
      onChange={(pageNumber) => { 
        console.log(`pageNumber:${pageNumber}`)
      }}
    />
  </div>,
  _mount_
);
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| current | 当前页数，选中的页数 | Number | 1 |
| total | 数据总数 | Number | 0 |
| pageSize | 每页条数 | Number | 10 |
| pageSizeOptions | 指定每页可以显示多少条 | Number[] | - |
| divider | 页码之间是否间隔 | Boolean | - |
| size | 当为 `small` 时，是小尺寸分页 | Enum{`small`, `default`} | - |
| alignment | 对齐 | Enum{`left`, `center`, `right`} | `left` |
| onChange | 页码改变的回调，返回改变后的页码 | Function(current, total, pageSize) | - |
| onShowSizeChange | pageSize 变化的回调 | Function(current, pageSize) | - |