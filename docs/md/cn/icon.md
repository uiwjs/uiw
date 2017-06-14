## Icon 图标

语义化的矢量图形，内置的图标属于UI框架常用图形字体。

### 如何使用

使用 `<Icon />` 标签声明组件，指定图标对应的 `type` 属性，示例代码如下:

```html
<Icon type="arrow-down" />
```

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

### 方向

<!--DemoStart--> 
```js
render() {
  const {Row,Col} = Layout;
  const styleItem = {textAlign:"center",padding:"20px 10px",background: "#f4f4f4",marginBottom:"10px"};
  const iconList = ["arrow-up", "arrow-left", "arrow-right", "arrow-down", "caret-bottom",  "caret-left", "caret-top", "caret-right","d-arrow-left", "d-arrow-right"]
  return (
    <div>
      <Row gutter="10">
      {
        iconList.map((item,idx) => {
          return (
            <Col key={idx} xs="8" sm="6" md="4" lg="4">
              <div style={styleItem}>
                  <Icon type={item} />
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

### 默认自带图标列表

<!--DemoStart--> 
```js
render() {
  const {Row,Col} = Layout;
  const styleItem = {textAlign:"center",padding:"20px 10px",background: "#f4f4f4",marginBottom:"10px"};
  const iconList = ["asterisk", "check", "circle-check-o", "circle-check", "circle-close-o", "close", "circle-close", "copyright", "date", "d-caret", "delete", "date1", "document", "download", "download1", "frown-o", "frown", "heart-off", "heart-on", "information-o", "information", "menu", "loading", "edit", "filter", "lock", "message-o", "minus", "more", "message", "picture", "paper-clip", "pay", "plus", "question-circle-o", "question-circle", "search", "smile-o", "share", "setting", "smile", "setting1", "star-off", "star-on", "time", "upload", "upload1", "user", "verification", "unlock", "view", "warning", "warning-o"]
  return (
    <div>
      <Row gutter="10">
      {
        iconList.map((item,idx) => {
          return (
            <Col key={idx} xs="8" sm="6" md="4" lg="4">
              <div style={styleItem}>
                  <Icon type={item} />
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