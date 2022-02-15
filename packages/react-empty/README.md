Empty 空状态
===

空状态时的展示占位图。

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

ReactDOM.render(
  <Empty />,
  _mount_  
);
```

### 自定义属性

通过自定义属性定制个性化展示。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Empty } from 'uiw';

ReactDOM.render(
  <Empty 
    text="没有数据了"
    type="file-excel"
    size={60}
    iconColor="red"
    textColor="red"
    description={<Button type="primary">新增数据</Button>}
  />,
  _mount_  
);
```


## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| description | 自定义描述内容 | ReactNode | - |
| iconColor | 图标颜色| string | - |
| size | icon 大小 | string / number | - |
| type | [icon 图标](#/components/icon) | `IconsName` | - |
| text | 文字说明 | string | - |
| textColor | 文字颜色| string | - |