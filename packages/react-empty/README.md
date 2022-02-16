Empty 空状态
===

[![npm version](https://img.shields.io/npm/v/@uiw/react-empty.svg)](https://npmjs.com/@uiw/react-empty)

空状态时的展示占位图。新组件 `v4.11.0+` 支持。

```jsx
import { Empty } from 'uiw';
// or
import Empty from '@uiw/react-empty';
```

### 基本使用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Empty, Button } from 'uiw';

ReactDOM.render(<Empty />, _mount_);
```

### 自定义

通过自定义属性定制个性化展示。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Empty, Icon } from 'uiw';

const Demo = () => {
  return(
    <Empty
      description={
        <span>
          Customize <a href="#">Description</a>
        </span>
      }
      icon={<Icon type="shopping-cart"  style={{ fontSize: '39px' }} />}
    >
      <Button type="primary">新增数据</Button>
    </Empty>
  )
}

ReactDOM.render(<Demo />, _mount_);
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| description | 自定义描述内容 | `ReactNode` | `暂无数据` |
| icon | 可以替换内置图标 | `ReactNode` | - |
| size | 内置 svg 图标：尺寸 | `number | string` | - |
| iconProps | 内置 svg 图标：属性设置| `React.SVGProps<SVGSVGElement>` | - |
