Icon 图标
===

语义化的矢量图形，内置的图标属于UI框架常用图形字体。icon字体以及样式，被抽离到一个新的仓库 [uiw icon](https://uiwjs.github.io/icons/) ，`uiw`去依赖 [uiw-iconfont](https://github.com/uiwjs/icons)，这个仓库主要是维护一套svg图片，并将svg图片转换为 `*.symbol.svg` `*.ttf` `*.woff` `*.woff2` `*.eot` `svgPaths.json` 等字体及相关文件并发布到 [npm](https://www.npmjs.com/package/uiw-iconfont) 上去。

```jsx
import { Icon } from 'uiw';
// or
import Icon from '@uiw/react-icon';
```

### 搜索图标

<!--rehype:bgWhite=true&noCode=true&codeSandbox=true&codePen=true-->
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Input, CopyToClipboard, Icon, Notify } from 'uiw';

const icons = ["adobe", "alipay", "aliwangwang", "android-o", "android", "apple", "appstore-o", "appstore", "area-chart", "down", "left", "right", "up", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "arrows-alt", "asterisk", "backward", "baidu", "bar-chart", "barcode", "bell", "camera-o", "caret-down", "caret-left", "caret-right", "caret-up", "check-square-o", "check-square", "check", "chrome", "circle-check-o", "circle-check", "circle-close-o", "circle-close", "close-square-o", "close-square", "close", "cloud-download-o", "cloud-download", "cloud-upload-o", "cloud-upload", "coffee", "component", "copy", "copyright", "css3", "cut", "d-arrow-left", "d-arrow-right", "d-caret", "dashboard", "date", "delete", "dingding", "dislike-o", "document", "dot-chart", "circle-o", "down-circle-o", "down-circle", "down-square-o", "down-square", "download", "edit", "enter", "environment-o", "environment", "eye-o", "eye", "facebook", "file-add", "file-excel", "file-jpg", "file-pdf", "file-text", "file-unknown", "filter", "firefox", "folder-add", "folder-open", "folder", "forward", "foursquare", "frown-o", "frown", "github-o", "github", "global", "heart-off", "heart-on", "home", "html5", "ie", "inbox", "information-o", "information", "laptop", "left-circle-o", "left-circle", "left-square-o", "left-square", "like-o", "link", "linkedin", "linux", "loading", "lock", "login", "logout", "man", "map", "meh-o", "meh", "menu-fold", "menu-unfold", "menu", "mail", "mail-o", "message", "minus-circle-o", "minus-circle", "minus-square-o", "minus-square", "minus", "mobile", "more", "notification", "opera", "paper-clip", "pause-circle-o", "pause-circle", "pause", "pay-circle-o", "pay", "picasa", "picture", "pie-chart", "pinterest", "play-circle-o", "play-circle", "plus-circle-o", "plus-circle", "plus-square-o", "plus-square", "plus", "poweroff", "printer", "qq", "qrcode", "question-circle-o", "question-circle", "reddit", "reload", "right-circle-o", "right-circle", "right-square-o", "right-square", "rollback", "safari", "safety", "save", "search", "setting-o", "setting", "share", "shopping-cart", "shrink", "smile-o", "smile", "star-off", "star-on", "swap-left", "swap-right", "swap", "table", "tag-o", "tag", "tags-o", "tags", "taobao", "time-o", "time", "twitter", "uiw", "unlock", "up-circle-o", "up-circle", "up-square-o", "up-square", "upload", "user-add", "user-delete", "user", "usergroup-add", "usergroup-delete", "verification", "verticle-left", "verticle-right", "video-camera", "warning-o", "warning", "weibo", "weixin", "wifi", "windows", "woman", "zoom-in", "zoom-out", 'stop-o', 'stop'];
const itemStyl = {
  fontSize: 26, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',
  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', fill: '#525252',
}
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      len: 0,
      result: [],
    }
  }
  onChange(env) {
    const value = env.target.value;
    const data = value ? icons.filter((item) => item.indexOf(value) > -1) : [];
    const len = data.length;
    const result = data.splice(0, 15);
    this.setState({ len, result });
  }
  render() {
    const { len, result } = this.state;
    return (
      <div>
        <Input preIcon="search" placeholder="请输入图标名称" type="text" style={{ maxWidth: 200 }} onChange={this.onChange.bind(this)} />
        <div style={{ padding: '10px 0' }}>
          搜索到 {this.state.len} 个结果{len > 0 && <span>，下面展示 {len > 15 ? '15' : len} 个图标，可以点击复制图标代码: </span>}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>
          {result.map((type, idx) => {
            const iconTxt = `<Icon type="${type}" />`;
            return (
              <CopyToClipboard
                key={idx}
                style={itemStyl}
                text={iconTxt}
                onClick={() => {
                  Notify.success({
                    title: '你已复制内容！',
                    description: (
                      <span>
                        已复制 <b style={{ color: 'red' }}>{iconTxt}</b> 可以去粘贴了！
                      </span>
                    ),
                  });
                }}
              >
                <div key={idx}>
                  <Icon type={type} />
                  <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>
                </div>
              </CopyToClipboard>
            )
          })}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```

## 如何使用

使用`<Icon />`组件，指定图标对应的`type`属性，示例代码：

```jsx
import { Icon } from 'uiw';
```

```jsx
<Icon type="minus" />
```

渲染为

```jsx
<span class="w-icon w-icon-middle">
  <svg viewBox="0 0 24 24">
    <path d="M16.038 3.176c2.313-.551 4.58.248 5.648 1.603.985 1.25 1.433 2.55 1.287 4.468-.105 1.383-.55 2.408-1.428 3.536-.162.208-.34.421-.563.68-.13.153-.628.72-.602.692-.88 1.008-3.471 3.535-7.814 7.62a.83.83 0 0 1-1.139-.003c-3.728-3.55-6.141-5.888-7.248-7.022-2.043-2.094-2.82-3.31-3.102-5.276-.295-2.055.27-3.742 1.538-5.053 1.19-1.229 3.319-1.684 5.42-1.25 1.231.254 2.542 1.072 3.961 2.436 1.21-1.261 2.56-2.077 4.042-2.43z" fill-rule="evenodd">
    </path>
  </svg>
</span>
```

示例如下:

```jsx
const Demo = () => (
  <div>
    <Icon type="arrow-down" />
    <Icon type="minus" />
    <Icon type="plus" />
    <Icon type="check" />
    <Icon type="close" />
  </div>
)
```

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

ReactDOM.render(
  <div style={{ fontSize: 18, lineHeight: '12px' }}>
    <Icon type="heart-on" />
    <Icon type="pie-chart" />
    <Icon type="tag" />
  </div>,
  _mount_
);
```

### 图标尺寸

默认情况下，图标非常小，它们继承了父级的字体大小。 如果没有设置字体大小，可以通过 `size` 来设置尺寸。通常情况 `size` 会很累赘没有什么用。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

ReactDOM.render(
  <div style={{ fontSize: '28px' }}>
    <Icon type="heart-on" />
    <Icon type="pie-chart" />
    <Icon type="tag" />
  </div>,
  _mount_
);
```

### 图标颜色

默认纯黑色图标，当前图标是 svg 格式展示，在为SVG设置样式时，请使用 `fill` 或 `stroke` 属性而不是 `color`。 这些可以直接在 `Icon` 上设置为 `style` 或通过 `CSS` 设置。

> 一个有用的技巧是将 `fill` 设置为 `currentColor`，以便从图标容器的文本颜色继承填充颜色。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

ReactDOM.render(
  <div style={{ fontSize: '28px',color: 'green' }}>
    <Icon type="apple" color="red" />
    <Icon type="pie-chart" style={{fill: 'currentColor'}} />
    <Icon type="frown" style={{fill: 'blue'}} />
    <Icon type="uiw" style={{stroke: 'red',fill: '#ffef00'}} />
  </div>,
  _mount_
);
```

### 与文本对齐

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import { Icon } from 'uiw';

ReactDOM.render(
  <div>
    <h3 style={{ margin: 0 }}>Exit <Icon verticalAlign="baseline" type="baidu" /></h3>
    <span>uiw</span><Icon type="uiw" verticalAlign="baseline" style={{ fill: '#009688', fontSize: 21 }} />
  </div>,
  _mount_
);
```

### 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

> \[形状?\]-\[图标名\]-\[描线?\]-\[方向?\]  
> 方向：`down`、`up`、`left`、`right`  
> 描线：`-o` 图标添加边框描线  
> 默认：`w-icon-` 默认引用的字体文件作用域  
> 自定定义：`w-icon-uiw-` 自定定义作用域  

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

ReactDOM.render(
  <div>
    <Icon type="circle-close" verticalAlign="baseline" />  图标名称：circle-close，[circle圈]-[关闭close]
    <br/>
    <Icon type="circle-close-o" verticalAlign="baseline" /> 图标名称：circle-close-o，[circle圈]-[关闭close]-[o描线]
  </div>,
  _mount_
);
```

### 图标旋转实例

通过设置参数 `spin={true}` 来设置图标旋转。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

ReactDOM.render(
  <div style={{ fontSize: 21, color: 'green' }}>
    <Icon type="loading" spin={true} color="red" />
    <Icon type="reload" spin={true} />
    <Icon type="picasa" spin={true} style={{fill: 'blue'}} />
    <Icon type="smile-o" spin={true} style={{fill: 'blue'}} />
  </div>,
  _mount_
);
```

### 自定义图标

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

const chat = (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path d="M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 0 0 1.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z" fillRule="evenodd" />
  </svg>
)
const contrast = (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path d="M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 0 0-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z" fillRule="evenodd" />
  </svg>
)
const styl = { marginRight: 10 };

ReactDOM.render(
  <div style={{ fontSize: 21, color: 'green' }}>
    <Icon style={styl} type={chat} color="red" />
    <Icon style={styl} type={contrast} spin={true} />
  </div>,
  _mount_
);
```

## 字体图标

通过引入 [uiw-iconfont](https://github.com/uiwjs/icons) 字体样式，在 [uiw-iconfont官网](https://uiwjs.github.io/icons) 找到对应的图标名称，就可以使用了，`uiw` 已经依赖 `uiw-iconfont` 你无需安装即可使用，更多使用方法[查看官方文档](https://github.com/uiwjs/icons)。

```bash
# 如果你没有安装，可单独使用，安装
npm i uiw-iconfont --save
```

引入字体样式

```jsx
import 'uiw-iconfont/fonts/w-icon.css';
```

在 HTML 中使用：

```html
<i className="w-icon-apple"></i>
```

在 React 中使用：

```jsx
const Demo = () => (
  <div style={{ color: 'green' }}>
    <i className="w-icon-apple" />
    <i className="w-icon-appstore" />
  </div>
)
```

## API

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| type | 图标的名称 | String/ReactNode | - |
| spin | 是否有旋转动画 |  Boolean | `false` |
| verticalAlign | 是否有旋转动画 | Enum {baseline, middle} | `baseline` |
| style | 设置图标的样式，例如 `fill` 和 `stroke` | Object | - |


## 所有图标

### 方向性图标

<!--rehype:bgWhite=true&noCode=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

const iconList = [
  'circle-o', 'down-square-o','down-square','up-square-o', 'up-square','left-square-o','left-square', 'right-square-o', 'right-square',
]
const itemStyl = {
  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',
}

ReactDOM.render(
  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>
    {iconList.map((type, idx) => {
      return (
        <div key={idx} style={itemStyl}>
          <Icon type={type} />
          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>
        </div>
      )
    })}
  </div>,
  _mount_
);
```

圆圈方向性图标

<!--rehype:bgWhite=true&noCode=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

const iconList = [
  'square-o', 'down-circle-o', 'down-circle','up-circle-o','up-circle','left-circle-o', 'left-circle','right-circle-o', 'right-circle','play-circle-o',  'play-circle',
]
const itemStyl = {
  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',
}
ReactDOM.render(
  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>
    {iconList.map((type, idx) => {
      return (
        <div key={idx} style={itemStyl}>
          <Icon type={type} />
          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>
        </div>
      )
    })}
  </div>,
  _mount_
);
```

其它方向性图标

<!--rehype:bgWhite=true&noCode=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

const iconList = [
  'down', 'up', 'left', 'right', 'caret-down', 'caret-up', 'caret-left', 'caret-right', 'arrow-down', 'arrow-up', 'arrow-left', 'arrow-right',
  'shrink','arrows-alt','d-arrow-left','d-arrow-right','enter',
  'rollback', 'd-caret','backward','forward',  'logout', 'login', 'swap-left', 'swap-right', 'swap',
  'verticle-left', 'verticle-right', 'menu','menu-fold', 'menu-unfold',
]
const itemStyl = {
  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',
}

ReactDOM.render(
  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>
    {iconList.map((type, idx) => {
      return (
        <div key={idx} style={itemStyl}>
          <Icon type={type} />
          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>
        </div>
      )
    })}
  </div>,
  _mount_
);
```

### 提示建议性图标

<!--rehype:bgWhite=true&noCode=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

const iconList = [
  'smile-o', 'smile','frown-o', 'frown', 'meh-o', 'meh', 
  'pause-circle-o', 'pause', 'pause-circle', 'information-o', 'information', 'warning-o', 'warning',
  'question-circle-o', 'question-circle', 'stop-o', 'stop',
];
const itemStyl = {
  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',
}

ReactDOM.render(
  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>
    {iconList.map((type, idx) => {
      return (
        <div key={idx} style={itemStyl}>
          <Icon type={type} />
          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>
        </div>
      )
    })}
  </div>,
  _mount_
);
```

## 符号

<!--rehype:bgWhite=true&noCode=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

const iconList = [
 'plus', 'plus-circle-o','plus-circle', 'plus-square', 'plus-square-o',
 'minus', 'minus-circle-o', 'minus-circle', 'minus-square', 'minus-square-o', 
 'close','circle-close-o', 'circle-close','close-square', 'close-square-o', 'asterisk',
  'check', 'circle-check-o', 'circle-check','check-square','check-square-o', 'copyright',
]
const itemStyl = {
  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',
}

ReactDOM.render(
  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>
    {iconList.map((type, idx) => {
      return (
        <div key={idx} style={itemStyl}>
          <Icon type={type} />
          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>
        </div>
      )
    })}
  </div>,
  _mount_
);
```

### 文件

<!--rehype:bgWhite=true&noCode=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

const iconList = [
  'file-text', 'file-jpg', 'file-unknown', 'file-add', 'file-excel', 'file-pdf',
  'folder-add', 'folder-open', 'paper-clip', 
]
const itemStyl = {
  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',
}

ReactDOM.render(
  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>
    {iconList.map((type, idx) => {
      return (
        <div key={idx} style={itemStyl}>
          <Icon type={type} />
          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>
        </div>
      )
    })}
  </div>,
  _mount_
);
```

### 其它

<!--rehype:bgWhite=true&noCode=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

const iconList = [
  'heart-off', 'heart-on', 'star-on', 'star-off','lock', 'unlock','dashboard',
  'area-chart', 'bar-chart', 'dot-chart','pie-chart',
  'dislike-o', 'like-o','loading', 'reload','appstore', 'appstore-o',
  'tag', 'tag-o','tags','tags-o', 'setting','setting-o','map','table','qrcode','barcode','printer',
  'cloud-upload','cloud-upload-o', 'cloud-download','cloud-download-o', 'download','message', 'mail', 'mail-o',
  'user', 'user-add', 'user-delete', 'usergroup-add', 'usergroup-delete', 'zoom-in', 'zoom-out','time', 'time-o',
  'bell', 'camera-o', 'coffee', 'document', 'delete', 'date', 'edit',  'eye-o', 'environment-o', 'filter', 'global', 'inbox', 'home', 'laptop', 'link', 'copy', 'more', 'shopping-cart', 'search', 'save', 'safety', 'poweroff', 'picasa', 'notification',
  'pay-circle-o', 'pay', 'picture', 'woman', 'man', 'verification', 'wifi', 'video-camera', 'mobile'
]
const itemStyl = {
  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',
}

ReactDOM.render(
  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>
    {iconList.map((type, idx) => {
      return (
        <div key={idx} style={itemStyl}>
          <Icon type={type} />
          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>
        </div>
      )
    })}
  </div>,
  _mount_
);
```

### 品牌标识

<!--rehype:bgWhite=true&noCode=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

const iconList = ['uiw', 'windows', 'linux', 'apple', 'facebook', 'twitter', 'adobe', 'baidu', 'alipay', 'android-o', 'android','reddit', 'github', 'github-o', 'aliwangwang',   'dingding', 'foursquare', 'linkedin', 'pinterest', 'qq',  'weibo', 'taobao', 'weixin', 'css3', 'html5'];

const itemStyl = {
  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',
}

ReactDOM.render(
  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>
    {iconList.map((type, idx) => {
      return (
        <div key={idx} style={itemStyl}>
          <Icon type={type} />
          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>
        </div>
      )
    })}
  </div>,
  _mount_
);
```

### 浏览器图标

<!--rehype:bgWhite=true&noCode=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Icon } from 'uiw';

const iconList = [ "chrome", "safari", "firefox", "opera", "ie", ];
const itemStyl = {
  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',
}

ReactDOM.render(
  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>
    {iconList.map((type, idx) => {
      return (
        <div key={idx} style={itemStyl}>
          <Icon type={type} />
          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>
        </div>
      )
    })}
  </div>,
  _mount_
);
```
