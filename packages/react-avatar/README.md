Avatar 头像
===

用来代表用户或事物，支持图片、图标或字符展示。

```jsx
import { Avatar } from 'uiw';
// or
import Avatar from '@uiw/react-avatar';
```

## 基本用法

头像有四种尺寸，两种形状可选。

<!--DemoStart,bgWhite,codePen--> 
```js
import { Avatar, Icon } from 'uiw';

ReactDOM.render(
  <div>
    <div style={{ paddingBottom: 20 }}>
      <Avatar size="large" icon={<Icon type="user"/>} />
      <Avatar icon="user" />
      <Avatar size="small" icon="user" />
      <Avatar size="mini" icon={<Icon type="user"/>} />
    </div>
    <div>
      <Avatar shape="square" size="large" icon="user" />
      <Avatar shape="square" icon="user" />
      <Avatar shape="square" size="small" icon="user" />
      <Avatar shape="square" size="mini" icon="user" />
    </div>
  </div>,
  _mount_
);
```
<!--End-->

## 其它类型

支持三种类型：Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

<!--DemoStart,bgWhite,codePen--> 
```js
import { Avatar, Icon } from 'uiw';

ReactDOM.render(
  <div>
    <Avatar icon={<Icon type="user"/>} />
    <Avatar>U</Avatar>
    <Avatar src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
  </div>,
  _mount_
);
```
<!--End-->

## 图片支持

在组件上使用`onError`事件，处理显示错误的图片。

<!--DemoStart,bgWhite,codePen-->
```js
import { Avatar, Icon } from 'uiw';

const App = () => {
  const [src, setSrc] = React.useState('https://avatars2.githubusercontent.com/ua/1680273?s=40&v=4')
  return (
    <div>
      <Avatar
        src='https://avatars2.githubusercontent.com/ua/1680273?s=40&v=4'
        onError={(e) => {
          if (e) {
            e.target.src = 'https://avatars2.githubusercontent.com/u/1680275?s=40&v=4'
          }
          return false;
        }}
      />
      <Avatar
        src={src}
        onError={(e) => {
          if (e) {
            setSrc('https://avatars2.githubusercontent.com/u/1680275?s=40&v=4');
          }
        }}
      />
    </div>
  )
}

ReactDOM.render(
  <App />
  ,
  _mount_
);
```
<!--End-->

## 带徽标的头像

<!--DemoStart,bgWhite,codePen--> 
```js
import { Avatar, Badge } from 'uiw';

ReactDOM.render(
  <div>
    <span style={{ marginRight: 24 }}>
      <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
    </span>
    <span>
      <Badge dot><Avatar shape="square" icon="user" /></Badge>
    </span>
  </div>,
  _mount_
);
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| icon | 设置头像的图标类型，参考 Icon 组件 | String、ReactNode | - |
| shape | 指定头像的形状 `square` 正方形或者 `circle` 圆	 | Enum{'`circle`', '`square`' } | - |
| size | 设置头像的大小 | Enum{ '`large`', '`small`','`mini`', '`default`' } | `default` |
| src | 图片类头像的资源地址 | String | - |
| alt | 规定图像的替代文本 | String | - |
| onError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean | - |
