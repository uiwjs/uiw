Message 警告提示
===

警告提示，用于页面中展示重要的提示信息。

```jsx
import { Message } from 'uiw';
// or
import Message from '@uiw/react-message';
```

### 基础用法

<!--DemoStart,bgWhite,codePen--> 
```js
import { Message, Divider } from 'uiw';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Message type="success" title="成功提示标题" description="这里是成功提示详情描述。" />
        <Message
          type="warning"
          title={<div>警告提示标题</div>}
          description="这里是警告提示详情描述。"
        />
        <Message type="info" title="说明提示标题" description="这里是说明提示详情描述。" />
        <Message type="error" title="错误提示标题" description="这里是错误提示详情描述。" />

        <Divider />
        <Message type="success" title="成功提示标题" />
        <Message type="warning" title="警告提示标题" />
        <Message type="info" title="说明提示标题" />
        <Message type="error" title="错误提示标题" />
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 显示图标

<!--DemoStart,bgWhite,codePen--> 
```js
import { Message, Divider } from 'uiw';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Message showIcon type="success" title="成功提示标题" />
        <Message showIcon type="warning" title="警告提示标题" />
        <Message showIcon type="info" title="说明提示标题" />
        <Message showIcon type="error" title="错误提示标题" />
        <Divider />
        <Message showIcon type="success" description="这里是成功提示详情描述。" />
        <Message showIcon type="warning" description="这里是警告提示详情描述。这里并没有设置 title，只设置 description 同时设置显示图标。" />
        <Message showIcon type="info" description="这里是说明提示详情描述。" />
        <Message showIcon type="error" description="这里是错误提示详情描述。" />
        <Divider />
        <Message showIcon type="success" title="成功提示标题" description="这里是成功提示详情描述。" />
        <Message
          showIcon
          type="warning"
          title="警告提示标题"
        >
          这里是警告提示详情描述。
        </Message>
        <Message showIcon type="info" title="说明提示标题" description="这里是说明提示详情描述。" />
        <Message showIcon type="error" title="错误提示标题" description="这里是错误提示详情描述。" />
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 自定义图标

<!--DemoStart,bgWhite,codePen--> 
```js
import { Message, Divider } from 'uiw';

const chat = ( <svg width="20" height="20" viewBox="0 0 20 20"> <path d="M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 0 0 1.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z" fillRule="evenodd" /> </svg> );
const closed = <svg viewBox="0 0 16 16" width="16" height="16"> <path fillRule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z" /> </svg>;
class Demo extends React.Component {
  render() {
    return (
      <div>
        <Message showIcon icon="apple" type="error" title="自定义图标" description="这里自定义Icon组件图标。" />
        <Message showIcon icon={chat} type="info" title="自定义图标" description="这里自定义 SVG 图标。" />
        <Message showIcon icon={closed} type="success" title="自定义图标" description="这里自定义 SVG 图标。" />
        <Divider />
        <Message showIcon icon={chat} type="success" title="成功提示标题，自定义图标。" />
        <Message showIcon icon={closed} type="warning" title="警告提示标题，自定义图标。" />
        <Message showIcon icon="apple" type="info" title="说明提示标题，自定义图标。" />
        <Message showIcon icon="file-jpg" type="error" title="错误提示标题，自定义图标。" />
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 关闭按钮

<!--DemoStart,bgWhite,codePen--> 
```js
import { Message, Divider } from 'uiw';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Message
          showIcon
          isCloseButtonShown
          type="success"
          title="自定义图标"
          description="这里设置参数 isCloseButtonShown 显示关闭按钮。这里设置 title 和 description 同时设置显示图标。"
        />
        <Divider />
        <Message showIcon isCloseButtonShown type="info" title="说明提示标题，自定义图标。" />
        <Message isCloseButtonShown type="error" title="错误提示标题，自定义图标。" />
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| type | 指定警告提示的样式 | Enum{`success`, `warning`, `info`, `error`} | - |
| title | 警告提示标题 | String/ReactNode | - |
| description | 警告提示描述详情 | String/ReactNode | - |
| rounded | 是否显示圆角 | Boolean | - |
| showIcon | 设定显示图标 | Boolean | - |
| isCloseButtonShown | 显示关闭按钮 | Boolean | - |
| icon | 自定义图标，设置 `showIcon=true` 才会起作用。 | String/ReactNode | - |
| onClose | 点击默认关闭按钮时触发的回调函数	 | Function | - |