Message 警告提示
===

警告提示，用于页面中展示重要的提示信息。

```jsx
import { Message } from 'uiw';
```

## 垂直分割线

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <Message
          type="success"
          title="成功提示标题"
          description="这里是成功提示详情描述。"
        />
        <Message
          type="warning"
          title={<div>警告提示标题</div>}
          description="这里是警告提示详情描述。"
        />
        <Message
          type="info"
          title="说明提示标题"
          description="这里是说明提示详情描述。"
        />
        <Message
          type="error"
          title="错误提示标题"
          description="这里是错误提示详情描述。"
        />
      </div>
    )
  }
}
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| type | 指定警告提示的样式 | Enum{`success`, `warning`, `info`, `error`} | - |
| title | 警告提示标题 | String | - |
| description | 警告提示描述详情 | String | - |
| rounded | 警告提示描述详情 | String | - |