Card 卡片
===

通用卡片容器，将信息聚合在卡片容器中展示，用来显示文字、列表、图文等内容。

```jsx
import { Card } from 'uiw';
```

## 基础用法

包含标题、内容、操作区域。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Card title="Card标题" extra={<a href="#">更多</a>} style={{ width: 300 }}>
      卡片内容<br/>
      卡片内容<br/>
      卡片内容<br/>
    </Card>
  </div>
)
```
<!--End-->

## 无边框

在灰色背景上使用无边框的卡片。

<!--DemoStart--> 
```js
const Demo = () => (
  <Card title="Card标题" bordered={false} style={{ width: 300 }}>
    卡片内容<br/>
    卡片内容<br/>
    卡片内容<br/>
  </Card>
)
```
<!--End-->

## 简洁卡片

只包含内容区域。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Card style={{ width: 300 }}>
    卡片内容<br/>
    卡片内容<br/>
    卡片内容<br/>
  </Card>
)
```
<!--End-->

## 更灵活的内容展示

可以调整默认边距，设定宽度。

<!--DemoStart,bgWhite--> 
```js
let titleStyle = { padding: `10px 16px` };
const Demo = () => (
  <Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>
    <div>
      <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />
    </div>
    <div style={titleStyle}>
      <h3 style={{margin:0}}>我爱漂亮妹妹</h3>
      <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>
    </div>
  </Card>
)
```
<!--End-->

## 添加页脚

<!--DemoStart,bgWhite--> 
```js
const footer = (
  <a href="https://uiwjs.github.io">
    <Icon type='user' />&nbsp;
    16 Friends
  </a>
)
const Demo = () => (
  <Card
    title="Card标题"
    footer={footer}
    style={{ width: 240 }} 
    bodyStyle={{ padding: 0 }}
  >
    <div>
      <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />
    </div>
    <div style={{ padding: `10px 16px` }}>
      <h3 style={{margin:0}}>我爱漂亮妹妹</h3>
      <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>
    </div>
  </Card>
);
```
<!--End-->

## 激活

设置属性 `active=true` 将激活卡片，默认展示鼠标经过的样式。

<!--DemoStart,bgWhite--> 
```js
const footer = (
  <a href="https://uiwjs.github.io">
    <Icon type='user' />&nbsp;
    16 Friends
  </a>
)
const Demo = () => (
  <Card
    active
    title="Card标题"
    footer={footer}
    style={{ width: 240 }} 
    bodyStyle={{ padding: 0 }}
  >
    <div>
      <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />
    </div>
    <div style={{ padding: `10px 16px` }}>
      <h3 style={{margin:0}}>我爱漂亮妹妹</h3>
      <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>
    </div>
  </Card>
);
```
<!--End-->

## API

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| title | 卡片标题 | String/ReactNode | - |
| footer | 页脚内容的简写 | String/ReactNode | - |
| extra | 卡片右上角的操作区域 | String/ReactNode | - |
| bordered | 是否显示边框 | Boolean | `true` |
| active | 展示鼠标经过的样式。 | Boolean | `false` |
| noHover | 取消鼠标移过时边框阴影 | Boolean | `false` |
| bodyStyle | 设置 `body` 的样式 | Object | - |
| bodyClassName | 设置 `body` 的 `className` | String | - |