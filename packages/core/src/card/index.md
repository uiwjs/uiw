Card 卡片
===

通用卡片容器，将信息聚合在卡片容器中展示，用来显示文字、列表、图文等内容。

## 基础用法

包含标题、内容、操作区域。

<!--DemoStart--> 
```js
const Demo = () => (
  <Card title="Card标题" extra={<a href="#">更多</a>} style={{ width: 300 }}>
    卡片内容<br/>
    卡片内容<br/>
    卡片内容<br/>
  </Card>
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

<!--DemoStart--> 
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

<!--DemoStart--> 
```js
let titleStyle = { padding: `10px 16px` };
const Demo = () => (
  <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
    <div>
      <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />
    </div>
    <div style={titleStyle}>
      <h3 style={{margin:0}}>我爱漂亮妹妹</h3>
      <p style={{margin:0}}><a href="https://uiw-react.github.io">https://uiw-react.github.io</a></p>
    </div>
  </Card>
)
```
<!--End-->