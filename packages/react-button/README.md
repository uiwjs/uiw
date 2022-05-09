Button 按钮
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-button/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-button.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-button)
[![npm version](https://img.shields.io/npm/v/@uiw/react-button.svg?label=@uiw/react-button)](https://npmjs.com/@uiw/react-button)

按钮用于开始一个即时操作，触发业务逻辑时使用。

```jsx
import { Button, ButtonGroup } from 'uiw';
// or
import Button from '@uiw/react-button';
import ButtonGroup from '@uiw/react-button-group';
```

### 基本用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button, Divider, Icon } from 'uiw';
const Demo = ()=>(
  <div>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">错误按钮</Button>
    <Button type="light">亮按钮</Button>
    <Button type="dark">暗按钮</Button>
    <Divider />
    <Button basic type="primary">主要按钮</Button>
    <Button basic type="success">成功按钮</Button>
    <Button basic type="warning">警告按钮</Button>
    <Button basic type="danger">错误按钮</Button>
    <Button basic type="light">亮按钮</Button>
    <Button basic type="dark">暗按钮</Button>
    <Divider />
    <Button>Normal</Button>
    <Button disabled>Disabled</Button>
    <Button type="primary" active>Button</Button>
    <Button type="primary" size="small">more <Icon type="down" /></Button>
    <Button type="link"> (超连接样式)link </Button>
  </div>
);
export default Demo

```

### 按钮组

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button, Divider, ButtonGroup } from 'uiw';

const Demo = ()=>(
  <div>
    <ButtonGroup>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">错误按钮</Button>
      <Button type="light">亮按钮</Button>
      <Button type="dark">暗按钮</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button size="small" type="primary">按钮</Button>
      <Button size="small" type="primary">按钮</Button>
      <Button size="small" type="primary">按钮</Button>
      <Button size="small" type="primary">按钮</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button type="light">按钮</Button>
      <Button type="light">按钮</Button>
      <Button type="light">按钮</Button>
      <Button type="light">按钮</Button>
    </ButtonGroup>
    <Divider style={{ maxWidth: 220 }}>添加图标</Divider>
    <ButtonGroup>
      <Button icon="copy" type="primary">复制</Button>
      <Button icon="delete" type="success">删除</Button>
      <Button icon="file-add" type="warning">添加文件</Button>
      <Button icon="map" type="danger">地图</Button>
      <Button icon="linux" type="light">Linux</Button>
      <Button icon="apple" type="dark">Apple</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button icon="copy" type="primary">复制</Button>
      <Button icon="delete" type="primary">删除</Button>
      <Button icon="file-add" type="primary">添加文件</Button>
      <Button icon="map" type="primary">地图</Button>
      <Button icon="linux" type="primary">Linux</Button>
      <Button icon="apple" type="primary">Apple</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button icon="copy">复制</Button>
      <Button icon="delete">删除</Button>
      <Button icon="file-add">添加文件</Button>
      <Button icon="map">地图</Button>
      <Button icon="linux">Linux</Button>
      <Button icon="apple">Apple</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button icon="copy" />
      <Button icon="delete" />
      <Button icon="file-add" />
      <Button icon="map" />
      <Button icon="linux" />
      <Button icon="apple" />
    </ButtonGroup>
  </div>
);
export default Demo

```

### 图标按钮

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button, Icon, Divider } from 'uiw';

const chat = <svg width="20" height="20" viewBox="0 0 20 20"> <path d="M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 0 0 1.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z" fillRule="evenodd" /> </svg>;
const open = <svg width="12" height="16" style={{ height: 16 }}> <path fillRule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" /> </svg>;
const merged = <svg width="12" height="16" viewBox="0 0 12 16" style={{ height: 16 }}> <path fillRule="evenodd" d="M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" /> </svg>;
const closed = <svg viewBox="0 0 16 16" width="16" height="16"> <path fillRule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z" /> </svg>;

const Demo = ()=>(
  <div>
    <Button icon="weibo" type="primary">主要按钮</Button>
    <Button icon="chrome" type="success">成功按钮</Button>
    <Button icon="taobao" type="warning">警告按钮</Button>
    <Button icon="weibo" type="danger" />
    <Button type="danger">
      <Icon type="reload" spin={true} />
      <span>错误<span>按钮</span></span>
      <Icon type="weibo" />
    </Button>
    <Button icon="chrome" type="light">亮按钮</Button>
    <Button icon="apple" type="dark">暗按钮</Button>
    <Button icon={chat} type="dark">暗按钮</Button>
    <Divider style={{ maxWidth: 220 }}>GitHub</Divider>
    <Button icon={open} type="success">Open</Button>
    <Button icon={merged} type="light" style={{ backgroundColor: '#6f42c1', color: '#fff' }}>Merged</Button>
    <Button icon={closed} type="danger">Closed</Button>
  </div>
);
export default Demo

```

### 按钮加载状态

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button, Icon, Divider } from 'uiw';

const Demo = ()=>(
  <div>
    <Button type="danger">
      <Icon type="reload" spin={true} />
      <span>错误<span>按钮</span></span>
      <Icon type="weibo" />
    </Button>
    <Button loading type="primary">主要按钮</Button>
    <Button loading type="success">成功按钮</Button>
    <Button loading type="warning">警告按钮</Button>
    <Button loading type="danger">错误按钮</Button>
    <Button loading type="light">亮按钮</Button>
    <Button loading type="dark">暗按钮</Button>
    <Button loading type="danger">亮按钮</Button>
    <Divider style={{ maxWidth: 220 }}>Size</Divider>
    <Button loading size="small" type="primary">主要按钮</Button>
    <Button loading size="default" type="success">成功按钮</Button>
    <Button loading size="large" type="warning">警告按钮</Button>
  </div>
);
export default Demo

```

### 禁用按钮组

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Divider } from 'uiw';

const Demo = ()=>(
  <div>
    <ButtonGroup>
      <Button disabled type="primary">主要按钮</Button>
      <Button disabled type="success">成功按钮</Button>
      <Button disabled type="warning">警告按钮</Button>
      <Button disabled type="danger">错误按钮</Button>
      <Button disabled type="light">亮按钮</Button>
      <Button disabled type="dark">暗按钮</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button disabled type="primary">按钮</Button>
      <Button disabled type="primary">按钮</Button>
      <Button disabled type="primary">按钮</Button>
      <Button disabled type="primary">按钮</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button disabled type="light">按钮</Button>
      <Button disabled type="light">按钮</Button>
      <Button type="light">按钮</Button>
      <Button disabled type="light">按钮</Button>
    </ButtonGroup>
    <Divider style={{ maxWidth: 220 }}>添加图标</Divider>
    <ButtonGroup>
      <Button disabled icon="copy" type="primary">复制</Button>
      <Button disabled icon="delete" type="success">删除</Button>
      <Button disabled icon="file-add" type="warning">添加文件</Button>
      <Button disabled icon="map" type="danger">地图</Button>
      <Button disabled icon="linux" type="light">Linux</Button>
      <Button disabled icon="apple" type="dark">Apple</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button disabled icon="copy" type="primary">复制</Button>
      <Button disabled icon="delete" type="primary">删除</Button>
      <Button icon="file-add" type="primary">添加文件</Button>
      <Button disabled icon="map" type="primary">地图</Button>
      <Button disabled icon="linux" type="primary">Linux</Button>
      <Button disabled icon="apple" type="primary">Apple</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button disabled icon="copy">复制</Button>
      <Button disabled icon="delete">删除</Button>
      <Button disabled icon="file-add">添加文件</Button>
      <Button disabled icon="map">地图</Button>
      <Button disabled icon="linux">Linux</Button>
      <Button disabled icon="apple">Apple</Button>
    </ButtonGroup>
    <div style={{ marginTop: 5 }}>
      <Button disabled icon="weibo" basic type="primary" />
      <Button disabled icon="chrome" basic type="success" />
      <Button disabled icon="taobao" basic type="warning" />
      <Button disabled icon="apple" basic type="danger" />
      <Button disabled icon="weibo" basic type="dark" />
    </div>
  </div>
);
export default Demo

```

### 垂直按钮组

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Row, Col } from 'uiw';

const Demo = ()=>(
  <Row gutter={10}>
    <Col style={{ maxWidth: 120 }}>
      <ButtonGroup vertical>
        <Button type="primary">按钮</Button>
        <Button type="primary">按钮</Button>
        <Button type="primary">按钮</Button>
        <Button type="primary">按钮</Button>
      </ButtonGroup>
    </Col>
    <Col style={{ maxWidth: 120 }}>
      <ButtonGroup vertical>
        <Button type="success">按钮</Button>
        <Button disabled type="success">按钮</Button>
        <Button type="success">按钮</Button>
        <Button type="success">按钮</Button>
      </ButtonGroup>
    </Col>
    <Col style={{ maxWidth: 120 }}>
      <ButtonGroup vertical>
        <Button type="light">按钮</Button>
        <Button type="light">按钮</Button>
        <Button type="light">按钮</Button>
        <Button type="light">按钮</Button>
      </ButtonGroup>
    </Col>
    <Col style={{ maxWidth: 120 }}>
      <ButtonGroup vertical>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">错误按钮</Button>
        <Button type="light">亮按钮</Button>
        <Button type="dark">暗按钮</Button>
      </ButtonGroup>
    </Col>
  </Row>
);
export default Demo

```

### 基本按钮

设置 `basic=true` 即可获得基本按钮，没有背景颜色的状态按钮。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button, Divider } from 'uiw';

const Demo = ()=>(
  <div>
    <Button basic type="primary">主要按钮</Button>
    <Button basic type="success">成功按钮</Button>
    <Button basic type="warning">警告按钮</Button>
    <Button basic type="danger">错误按钮</Button>
    <Button basic type="light">亮按钮</Button>
    <Button basic type="dark">暗按钮</Button>
    <Divider style={{ maxWidth: 220 }}>激活</Divider>
    <Button basic active type="primary">主要按钮</Button>
    <Button basic active type="success">成功按钮</Button>
    <Button basic active type="warning">警告按钮</Button>
    <Button basic active type="danger">错误按钮</Button>
    <Button basic active type="light">亮按钮</Button>
    <Button basic active type="dark">暗按钮</Button>
    <Divider style={{ maxWidth: 220 }}>禁用</Divider>
    <Button basic disabled type="primary">主要按钮</Button>
    <Button basic disabled type="success">成功按钮</Button>
    <Button basic disabled type="warning">警告按钮</Button>
    <Button basic disabled type="danger">错误按钮</Button>
    <Button basic disabled type="light">亮按钮</Button>
    <Button basic disabled type="dark">暗按钮</Button>
  </div>
);
export default Demo

```

### 基础按钮添加图标

设置 `basic=true` 即可获得基本按钮，没有背景颜色的状态按钮。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button, Divider } from 'uiw';

const chat = (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path d="M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 0 0 1.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z" fillRule="evenodd" />
  </svg>
)

const Demo = ()=>(
  <div>
    <Button icon="weibo" basic type="primary">主要按钮</Button>
    <Button icon="chrome" basic type="success">成功按钮</Button>
    <Button icon="taobao" basic type="warning">警告按钮</Button>
    <Button icon="apple" basic type="danger">错误按钮</Button>
    <Button icon="weibo" basic type="dark">暗按钮</Button>
    <Divider />
    <Button icon="weibo" basic type="primary" />
    <Button icon="chrome" basic type="success" />
    <Button icon="taobao" basic type="warning" />
    <Button icon="apple" basic type="danger" />
    <Button icon="weibo" basic type="dark" />
    <Button icon="weibo" basic type="dark" />
  </div>
);
export default Demo

```

### 激活按钮样式

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button } from 'uiw';

const Demo = ()=>(
  <div>
    <Button active type="primary">主要按钮</Button>
    <Button active type="success">成功按钮</Button>
    <Button active type="warning">警告按钮</Button>
    <Button active type="danger">错误按钮</Button>
    <Button active type="light">亮按钮</Button>
    <Button active type="dark">暗按钮</Button>
    <Button active type="link"> (超连接样式)link </Button>
  </div>
);
export default Demo

```

### 禁用按钮样式

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button } from 'uiw';

const Demo = ()=>(
  <div>
    <Button disabled type="primary">主要按钮</Button>
    <Button disabled type="success">成功按钮</Button>
    <Button disabled type="warning">警告按钮</Button>
    <Button disabled type="danger">错误按钮</Button>
    <Button disabled type="light">亮按钮</Button>
    <Button disabled type="dark">暗按钮</Button>
    <Button disabled type="link"> (超连接样式)link </Button>
  </div>
);
export default Demo

```


### block

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button, Row, Col } from 'uiw';

const Demo = ()=>(
  <Row gutter={10}>
    <Col style={{ maxWidth: 320 }}>
      <Button block type="primary">主要按钮</Button>
      <Button block type="success">成功按钮</Button>
      <Button block type="warning">警告按钮</Button>
      <Button block type="danger">错误按钮</Button>
      <Button block type="light">亮按钮</Button>
      <Button block type="dark">暗按钮</Button>
    </Col>
  </Row>
);
export default Demo
```

### size大小

`size` 在 `Button.Group`下面不支持。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button, Divider } from 'uiw';

const Demo =()=>{
  return <div>
    <Button size="small" type="primary">主要按钮</Button>
    <Button size="default" type="success">成功按钮</Button>
    <Button size="large" type="warning">警告按钮</Button>
    <Button size="small" type="danger">错误按钮</Button>
    <Button size="default" type="light">亮按钮</Button>
    <Button size="large" type="dark">暗按钮</Button>
    <Divider />
    <Button icon="weibo" size="small" type="primary">微博</Button>
    <Button icon="chrome" size="small" type="success">谷歌浏览器</Button>
    <Button icon="chrome" type="success">谷歌浏览器</Button>
    <Button icon="apple" size="large" type="warning">淘宝</Button>
  </div>
}

export default Demo
```

## Props

### Button

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| size | 按钮尺寸 | Enum{`large`, `default`, `small`} | `default` |
| type | 按钮状态类型附带颜色 | Enum{`primary`, `success`, `warning`, `danger`, `light`, `dark`, `link`} | `light` |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | String | `button` |
| icon | 设置按钮的图标类型 | String/ReactNode | - |
| block | 通过设置属性 `block` 可将按钮宽度设置为 100%，（块级元素），常用于弹窗内操作按钮。 | Boolean | false |
| disabled | 禁用状态 | Boolean | false |
| active | 激活状态，其表现为被按压下去（底色更深、边框夜色更深、向内投射阴影）。 | Boolean | false |
| loading | 加载中状态 | Boolean | false |

### Button.Group

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| vertical | 竖排列 | Boolean | `false` |
