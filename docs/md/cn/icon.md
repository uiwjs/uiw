Icon 图标
===

语义化的矢量图形，内置的图标属于UI框架常用图形字体。

### 如何使用

使用`<Icon />`组件，指定图标对应的`type`属性，示例代码：

```html
<Icon type="minus" />
```

渲染后为：

```html
<i class="w-icon-date"></i>
```

示例如下:

<!--DemoStart--> 
```js
render() {
  return (
    <div>
      <Icon type="arrow-down" />
      <Icon type="minus" />
      <Icon type="plus" />
      <Icon type="check" />
      <Icon type="close" />
    </div>
  )
}
```
<!--End-->

### 添加自己的图标字体方法

默认建议使用 `svg` 来制作图标，如果使用字体文件，需要添加字体文件，并在 `css` 写符合规范的样式，这个文件通过 [iconfont.cn](http://iconfont.cn/) 来制作字体文件。  
`icon` 名字需要命名规范，必须加上前缀 `.w-icon-{图标名字}` 。

```css
@font-face {
  font-family: "iconfont";
  src: url('iconfont.eot'); /* IE9*/
  src: url('iconfont.eot') format('embedded-opentype'), /* IE6-IE8 */
  url('iconfont.woff') format('woff'), /* chrome, firefox */
  url('iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg') format('svg'); /* iOS 4.1- */
}

[class^="w-icon-uiw-"], [class*=" w-icon-uiw-"] {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.w-icon-uiw-wxbgongju:before { content: "\e61b"; }
.w-icon-uiw-wxbmingxingdianpu:before { content: "\e61c"; }
```

上面写好CSS之后在组件中引用，就可以通过 `Icon` 组件来调用了，例如上面定义了两个图标使用方法如下

```js
<Icon type="uiw-wxbgongju" />
<Icon type="uiw-wxbmingxingdianp" />
```

注意：这里 `.w-icon-` 是当前默认引用的字体文件，`w-icon-uiw-` 是引用自己制作的字体文件，来覆盖默认的字体文件，就当成一个新的作用域。

### 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

> [形状?]-[图标名]-[描线?]-[方向?]  
> 方向：`down`、`up`、`left`、`right`  
> 描线：`-o` 图标添加边框描线
> 默认：`w-icon-` 默认引用的字体文件作用域  
> 自定定义：`w-icon-uiw-` 自定定义作用域  

<!--DemoStart--> 
```js
render() {
  return (
    <div>
      <Icon type="circle-close" />  图标名称：circle-close，[circle圈]-[关闭close]
      <br/>
      <br/>
      <Icon type="circle-close-o" /> 图标名称：circle-close-o，[circle圈]-[关闭close]-[o描线]
    </div>
  )
}
```
<!--End-->

### API

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| spin | 是否有旋转动画 |  Boolean | `false` |
| style | 设置图标的样式，例如 fontSize 和 color |  Object | - |
| type | 图标的名称 |  String | - |

## 实例


### 图标旋转实例

通过设置参数`spin={true}`来设置图标旋转。

<!--DemoStart--> 
```js
render() {
  const {Row,Col} = Layout;
  const styleItem = {textAlign:"center",padding:"20px 10px",background: "#f4f4f4",marginBottom:10};
  const iconList = ["loading",'reload']
  return (
    <div>
      <Row gutter="10">
      {
        iconList.map((item,idx) => {
          return (
            <Col key={idx} xs="8" sm="6" md="4" lg="4">
              <div style={styleItem}>
                <Icon type={item} spin style={{fontSize:16,marginBottom:10}}/>
                <div>{item}</div>
              </div>
            </Col>
          )
        }) 
      }
      </Row>
    </div>
  )
}
```
<!--End-->

### 方向性图标

<!--DemoStart--> 
```js
render() {
  const {Row,Col} = Layout;
  const styleItem = {textAlign:"center",padding:"20px 10px",background: "#f4f4f4",marginBottom:10};
  const iconList = ['caret-down', 'caret-up', 'caret-left',  'caret-right','d-caret', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-alt', 'd-arrow-right', 'd-arrow-left', 'down-circle-o', 'down-square-o','down-square', 'backward', 'check-square-o','check-square','down-circle', 'enter', 'logout', 'login', 'left-square-o', 'swap-right', 'swap', 'verticle-left', 'verticle-right','rollback','shrink','left-square',  'left-circle-o','left-circle','play-circle-o',  'play-circle','right-square-o', 'right-square','up-square-o', 'up-circle-o','up-square',]
  return (
    <div>
      <Row gutter="10">
      {
        iconList.map((item,idx) => {
          return (
            <Col key={idx} xs="8" sm="6" md="4" lg="4">
              <div style={styleItem}>
                <Icon type={item} style={{fontSize:18,marginBottom:10}}/>
                <div>{item}</div>
              </div>
            </Col>
          )
        }) 
      }
      </Row>
    </div>
  )
}
```
<!--End-->

### 提示建议性图标

<!--DemoStart--> 
```js
render() {
  const {Row,Col} = Layout;
  const styleItem = {textAlign:"center",padding:"20px 10px",background: "#f4f4f4",marginBottom:10};
  const iconList = ['smile-o', 'smile','frown-o', 'frown', ]
  return (
    <div>
      <Row gutter="10">
      {
        iconList.map((item,idx) => {
          return (
            <Col key={idx} xs="8" sm="6" md="4" lg="4">
              <div style={styleItem}>
                <Icon type={item} style={{fontSize:18,marginBottom:10}}/>
                <div>{item}</div>
              </div>
            </Col>
          )
        }) 
      }
      </Row>
    </div>
  )
}
```
<!--End-->

### 符号

<!--DemoStart--> 
```js
render() {
  const {Row,Col} = Layout;
  const styleItem = {textAlign:"center",padding:"20px 10px",background: "#f4f4f4",marginBottom:10};
  const iconList = ["minus", "plus", "check", "close", "question-circle-o", "question-circle", "circle-check-o", "circle-check", "circle-close-o", "circle-close", "information-o", "information","asterisk", "copyright",]
  return (
    <div>
      <Row gutter="10">
      {
        iconList.map((item,idx) => {
          return (
            <Col key={idx} xs="8" sm="6" md="4" lg="4">
              <div style={styleItem}>
                <Icon type={item} style={{fontSize:18,marginBottom:10}}/>
                <div>{item}</div>
              </div>
            </Col>
          )
        }) 
      }
      </Row>
    </div>
  )
}
```
<!--End-->

### 其它

<!--DemoStart-->  
```js
render() {
  const {Row,Col} = Layout;
  const styleItem = {textAlign:"center",padding:"20px 10px",background: "#f4f4f4",marginBottom:10};
  const iconList = ['area-chart', 'appstore', 'appstore-o', 'asterisk', 'bar-chart',  'camera-o', 'check', 'circle-check-o', 'circle-check', 'circle-close', 'circle-close-o', 'close', 'close-square-o', 'close-square', 'cloud-upload-o', 'cloud-download-o', 'copyright', 'coffee', 'document', 'dislike-o', 'delete', 'dot-chart', 'date',  'edit',  'download', 'eye-o', 'environment-o', 'css', 'file-text', 'file-jpg', 'file-unknown', 'file-add', 'file-excel', 'filter', 'file-pdf', 'folder-add', 'forward', 'folder-open',  'global', 'heart-off', 'inbox', 'information-o', 'home', 'heart-on', 'information', 'html',  'like-o', 'laptop', 'link', 'lock', 'loading', 'meh', 'meh-o', 'menu-fold', 'message-o', 'menu', 'message', 'menu-unfold', 'minus-circle-o', 'minus-circle', 'minus-square', 'minus-square-o', 'mobile', 'more', 'minus', 'notification', 'pause-circle', 'pause-circle-o', 'paper-clip', 'pause', 'picture', 'picasa', 'pay-circle-o', 'pay', 'plus-circle-o', 'plus-circle', 'plus-square', 'plus', 'pie-chart', 'poweroff', 'plus-square-o', 'reload', 'right-circle-o', 'question-circle', 'right-circle', 'question-circle-o',   'save', 'safety', 'setting-o', 'search',  'shopping-cart', 'share', 'setting', 'star-on', 'star-off', 'tag', 'time', 'tags-o', 'tag-o', 'tags', 'time-o', 'twitter',  'upload', 'up-circle', 'unlock', 'user', 'usergroup-add', 'warning-o', 'warning', 'verification', 'video-camera',  'zoom-in', 'zoom-out', 'wifi', 'cloud-download', 'cloud-upload',]
  return (
    <div>
      <Row gutter="10">
      {
        iconList.map((item,idx) => {
          return (
            <Col key={idx} xs="8" sm="6" md="4" lg="4">
              <div style={styleItem}>
                <Icon type={item} style={{fontSize:18,marginBottom:10}}/>
                <div>{item}</div>
              </div>
            </Col>
          )
        }) 
      }
      </Row>
    </div>
  )
}
```
<!--End-->

### 品牌标识

<!--DemoStart-->  
```js
render() {
  const {Row,Col} = Layout;
  const styleItem = {textAlign:"center",padding:"20px 10px",background: "#f4f4f4",marginBottom:10};
  const iconList = ['uiw','adobe', 'apple','github', 'github-o', 'windows','reddit', 'facebook','android', ]
  return (
    <div>
      <Row gutter="10">
      {
        iconList.map((item,idx) => {
          return (
            <Col key={idx} xs="8" sm="6" md="4" lg="4">
              <div style={styleItem}>
                <Icon type={item} style={{fontSize:18,marginBottom:10}}/>
                <div>{item}</div>
              </div>
            </Col>
          )
        }) 
      }
      </Row>
    </div>
  )
}
```
<!--End-->
