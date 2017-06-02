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
          <Buttons>上边</Buttons>
        </Tooltips>

        <Tooltips placement="left" content="Prompt Text"  style={{marginRight:"20px"}}>
          <Buttons>左边</Buttons>
        </Tooltips>

        <Tooltips placement="bottom" content="Prompt Text"  style={{marginRight:"20px"}}>
          <Buttons>下边</Buttons>
        </Tooltips>

        <Tooltips placement="right" content="Prompt Text"  style={{marginRight:"20px"}}>
          <Buttons>右边</Buttons>
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
    <div>
        <Tooltips placement="right" content={
            <div>
                <div>标题</div>
                <p>展示多行文本或者是设置文本内容的格式</p>
            </div>
        }>
          <Buttons>右边多行文字</Buttons>
        </Tooltips>

    </div>
  )
}
```
<!--End-->

