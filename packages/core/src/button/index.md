Button 按钮
===

按钮用于开始一个即时操作，触发业务逻辑时使用。

```jsx
import { Button, ButtonGroup } from '@uiw/core';
```

### 基本用法

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{padding: 10, backgroundColor: '#fff'}}>
    <Button>Normal</Button>
    <Button disabled>Disabled</Button>
    <Button type="primary" active>Button</Button>
    <Button type="primary" size="small">more <Icon type="arrow-down" /></Button>
    <Button type="link"> (超连接样式)link </Button>
    <Divider style={{ maxWidth: 220 }}>状态按钮</Divider>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">错误按钮</Button>
    <Button type="light">亮按钮</Button>
    <Button type="dark">暗按钮</Button>
    <Divider style={{ maxWidth: 220 }}>基本按钮</Divider>
    <Button basic type="primary">主要按钮</Button>
    <Button basic type="success">成功按钮</Button>
    <Button basic type="warning">警告按钮</Button>
    <Button basic type="danger">错误按钮</Button>
    <Button basic type="light">亮按钮</Button>
    <Button basic type="dark">暗按钮</Button>
    <Divider />
    <Button icon="weibo" basic type="primary" />
    <Button icon="chrome" basic type="success" />
    <Button icon="taobao" basic type="warning" />
    <Button icon="apple" basic type="danger" />
    <Button icon="weibo" basic type="dark" />
  </div>
);
```
<!--End-->

### 按钮组

<!--DemoStart--> 
```js
const Demo = () => (
  <>
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
  </>
);
```
<!--End-->


### 禁用按钮组

<!--DemoStart--> 
```js
const Demo = () => (
  <>
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
  </>
);
```
<!--End-->

### 垂直按钮组

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ maxWidth: 200 }}>
    <ButtonGroup vertical>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
    </ButtonGroup>
    <ButtonGroup vertical style={{ marginTop: 5 }}>
      <Button type="success">按钮</Button>
      <Button disabled type="success">按钮</Button>
      <Button type="success">按钮</Button>
      <Button type="success">按钮</Button>
    </ButtonGroup>
    <ButtonGroup vertical style={{ marginTop: 5 }}>
      <Button type="light">按钮</Button>
      <Button type="light">按钮</Button>
      <Button type="light">按钮</Button>
      <Button type="light">按钮</Button>
    </ButtonGroup>
    <ButtonGroup vertical style={{ marginTop: 5 }}>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">错误按钮</Button>
      <Button type="light">亮按钮</Button>
      <Button type="dark">暗按钮</Button>
    </ButtonGroup>
  </div>
);
```
<!--End-->

### 基本按钮

设置 `basic=true` 即可获得基本按钮，没有背景颜色的状态按钮。

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{padding: 10, backgroundColor: '#fff'}}>
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
```
<!--End-->


### 图标按钮

<!--DemoStart--> 
```js
const chat = (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path d="M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 0 0 1.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z" fillRule="evenodd" />
  </svg>
)
const Demo = () => (
  <div style={{padding: 10, backgroundColor: '#fff'}}>
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
  </div>
);
```
<!--End-->



### 基础按钮添加图标

设置 `basic=true` 即可获得基本按钮，没有背景颜色的状态按钮。

<!--DemoStart--> 
```js
const chat = (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path d="M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 0 0 1.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z" fillRule="evenodd" />
  </svg>
)
const Demo = () => (
  <div style={{padding: 10, backgroundColor: '#fff'}}>
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
  </div>
);
```
<!--End-->

### 激活按钮样式

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{padding: 10, backgroundColor: '#fff'}}>
    <Button active type="primary">主要按钮</Button>
    <Button active type="success">成功按钮</Button>
    <Button active type="warning">警告按钮</Button>
    <Button active type="danger">错误按钮</Button>
    <Button active type="light">亮按钮</Button>
    <Button active type="dark">暗按钮</Button>
    <Button active type="link"> (超连接样式)link </Button>
  </div>
);
```
<!--End-->

### 禁用按钮样式

<!--DemoStart--> 
```js
const Demo = () => (
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
```
<!--End-->


### block

<!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Button block type="primary">主要按钮</Button>
    <Button block type="success">成功按钮</Button>
    <Button block type="warning">警告按钮</Button>
    <Button block type="danger">错误按钮</Button>
    <Button block type="light">亮按钮</Button>
    <Button block type="dark">暗按钮</Button>
  </div>
);
```
<!--End-->

### size大小

`size` 在 `Button.Group`下面不支持。

<!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Button size="small" type="primary">主要按钮</Button>
    <Button size="default" type="success">成功按钮</Button>
    <Button size="large" type="warning">警告按钮</Button>
    <Button size="small" type="danger">错误按钮</Button>
    <Button size="default" type="light">亮按钮</Button>
    <Button size="large" type="dark">暗按钮</Button>
  </div>
);
```
<!--End-->


## Button

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| size | `large`, `default`, `small` |String | `default` |
| type | `primary`, `success`, `warning`, `danger`, `light`, `dark`, `link` | String/ReactNode | - |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) |String | `button` |
| icon | 设置按钮的图标类型 | String/ReactNode | - |
| block | 通过设置属性 `block` 可将按钮宽度设置为 100%，（块级元素），常用于弹窗内操作按钮。 |Boolean | false |
| disabled | 禁用状态 | Boolean | false |
| active | 激活状态，其表现为被按压下去（底色更深、边框夜色更深、向内投射阴影）。 |Boolean | false |
| loading | 加载中状态 | Boolean | false |

## Button.Group

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| vertical | 竖排列 | Boolean | `false` |
| vertical | 竖排列 | Boolean | `false` |