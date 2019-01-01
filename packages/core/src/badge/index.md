Badge 标记
===

出现在按钮、图标旁的数字或状态标记。

```jsx
import { Badge } from '@uiw/core';
```

### 基础用法

<!--DemoStart--> 
```js
const Demo = () => (
  <Badge count={ 12 }>
    评论
  </Badge>
);
```
<!--End-->

### 封顶数字

不包裹任何元素即是独立使用，可自定样式展现。

<!--DemoStart--> 
```js
const styl={ marginRight: 20, display: 'inline-block' }
const Demo = () => (
  <div>
    <div style={styl}>
      <Badge count={99}>评论</Badge>
    </div>
    <div style={styl}>
      <Badge count={100} style={{ backgroundColor: '#87d068' }}>回复</Badge>
    </div>
    <div style={styl}>
      <Badge count={99} max={10} style={styl}>点赞</Badge>
    </div>
    <div style={styl}>
      <Badge count={100} max={999} style={styl}>打分</Badge>
    </div>
    <div style={styl}>
      <Badge count={100} max={999} style={styl}>
        <span style={{ padding: '0 10px' }}>打分</span>
      </Badge>
    </div>
  </div>
);
```
<!--End-->


### 独立使用

不包裹任何元素即是独立使用，可自定样式展现。

<!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Badge count={25} />
    <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} /> 
    <Badge count={109} style={{ backgroundColor: '#87d068' }} /> 
  </div>
);
```
<!--End-->

### 小红点

以红点的形式标注需要关注的内容。

<!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Badge dot style={{ marginRight: 10 }}>
      数据查询
    </Badge>
    <Badge dot count={4}>
      <Icon type='message-o' />
    </Badge>
  </div>
);
```
<!--End-->


### 状态点

用于表示状态的小圆点。

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success">Success</Badge>
    <br />
    <Badge status="error">Error</Badge>
    <br />
    <Badge status="default">Default</Badge>
    <br />
    <Badge status="processing">Processing</Badge>
    <br />
    <Badge status="warning">Warning</Badge>
  </div>
);
```
<!--End-->

## API

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| style | 默认设置计数圆点样式，设置`status`，`style`设置外层节点样式 | Object | - |
| count | 展示的数字 | Number | - |
| max | 最大值，超过最大值会显示 '{max}+' | Number | `99` |
| dot | 不展示数字，只有一个小红点 | Boolean | `false` |
| status | 设置 Badge 为状态点 | Enum{`success`, `processing`,`default`, `error`, `warning` } | - |
