## Tooltips 文字提示

简单的文字提示气泡框。


### 基础用法

<!--DemoStart--> 
最简单的用法。
```js
render() {
  return (
    <div>
        <Tooltips content="Prompt Text" style={{marginRight:"20px"}}>
          <Buttons>上边文字提示</Buttons>
        </Tooltips>

        <Tooltips placement="left" content="Prompt Text"  style={{marginRight:"20px"}}>
          <Buttons>左边文字提示</Buttons>
        </Tooltips>

        <Tooltips placement="bottom" content="Prompt Text"  style={{marginRight:"20px"}}>
          <Buttons>下边文字提示</Buttons>
        </Tooltips>

        <Tooltips placement="right" content="Prompt Text"  style={{marginRight:"20px"}}>
          <Buttons>右边文字提示</Buttons>
        </Tooltips>
    </div>
  )
}
```
<!--End-->


### 更多内容

展示多行文本或者是设置文本内容的格式，

<!--DemoStart--> 
`content`属性也可以是`ReactElement`。
```js
render() {
  return (
    <Tooltips placement="right" content={
        <div>
            <div>标题</div>
            <p>展示多行文本或者是设置文本内容的格式</p>
        </div>
    }>
      <Buttons>右边多行文字</Buttons>
    </Tooltips>
  )
}
```
<!--End-->



### 位置

位置有 12 个方向。

<!--DemoStart--> 
```js
render() {
  const text = <span>提示文字</span>;
  return (
    <div style={{ marginLeft: 60 }}>
        <div style={{ marginLeft: 60 }}>
          <Tooltips style={{ marginRight: 20}} placement="topLeft" content={text}>
            <Buttons>上左</Buttons>
          </Tooltips>
          <Tooltips style={{ marginRight: 20}} placement="top" content={text}>
            <Buttons>上边</Buttons>
          </Tooltips>
          <Tooltips style={{ marginRight: 20}} placement="topRight" content={text}>
            <Buttons>上右</Buttons>
          </Tooltips>
        </div>
        <div style={{ width: 60, float: 'left' }}>
          <Tooltips placement="leftTop" content={<div>
              <div>文字提示</div>
              <div>这里是文字描述！</div>
              <div>这里是文字描述！</div>
          </div>}>
            <Buttons>左上</Buttons>
          </Tooltips>
          <br/><br/>
          <Tooltips placement="left" content={text}>
            <Buttons>左边</Buttons>
          </Tooltips>
          <br/><br/>
          <Tooltips placement="leftBottom" content={<div>
              <div>文字提示</div>
              <div>这里是文字描述！</div>
              <div>这里是文字描述！</div>
          </div>}>
            <Buttons>左下</Buttons>
          </Tooltips>
        </div>
        <div style={{ width: 60, marginLeft: 270 }}>
          <Tooltips placement="rightTop" content="文字提示">
            <Buttons>右上</Buttons>
          </Tooltips>
          <br/><br/>
          <Tooltips placement="right" content="提示文字提示文字提示文字提文字">
            <Buttons>右边</Buttons>
          </Tooltips>
          <br/><br/>
          <Tooltips placement="rightBottom" content={<div>
              <div>文字提示</div>
              <div>这里是文字描述！</div>
              <div>这里是文字描述！</div>
          </div>}>
            <Buttons>右下</Buttons>
          </Tooltips>
          <br/><br/>
        </div>
        <div style={{ marginLeft: 60, clear: 'both' }}>
          <Tooltips style={{ marginRight: 20}} placement="bottomLeft" content={<div>
              <div>文字提示</div>
              <div>这里是文字描述！</div>
              <div>这里是文字描述！</div>
          </div>}>
            <Buttons>下左</Buttons>
          </Tooltips>
          <Tooltips style={{ marginRight: 20}} placement="bottom" content={text}>
            <Buttons>下边</Buttons>
          </Tooltips>
          <Tooltips style={{ marginRight: 20}} placement="bottomRight" content={text}>
            <Buttons>下右</Buttons>
          </Tooltips>
        </div>
    </div>
  )
}
```
<!--End-->

