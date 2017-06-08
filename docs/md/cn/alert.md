## Alert 警告

用于页面中展示重要的提示信息。

### 基本用法

<!--DemoStart--> 
```js
render() {
  return (
    <div>
      <Alert showIcon type="info" message="info Text"/>
      <Alert type="success" message="success Text"/>
      <Alert 
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
      />
    </div>
  )
}
```
<!--End-->

### 带图标

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Alert showIcon type="success" message="success Text"/>
        <Alert showIcon type="info" message="info Text"/>
        <Alert showIcon type="warn" message="warn Text"/>
        <Alert showIcon type="error" message="error Text"/>
        <Alert 
            message="Error Text"
            description="Error Description Error Description Error Description Error Description Error Description Error Description"
            type="error"
            showIcon
          />

        <Alert showIcon type="success" description="这里是说明！" message="Success Text"/>
        <Alert showIcon type="info" description="这里是说明！" message="Info Text"/>
        <Alert showIcon type="warn" description="这里是说明！" message="Warn Text"/>
        <Alert showIcon type="error" description="这里是说明！" message="Error Text"/>
    </div>
  )
}
```
<!--End-->

### 带关闭按钮的

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Alert 
            message="Success Text"
            description="Success Description Success Description Success Description Success Description Success Description Success Description"
            type="success"
            onClose={()=>{
                console.log("onClose::")  
            }}
          />
        <Alert 
            message="info Text"
            type="info"
            onClose={()=>{
                console.log("onClose::")  
            }}
          />
    </div>
  )
}
```
<!--End-->

### 常规颜色使用

共有四种样式 `default`、`primary`=`info`、`warn`、`error`。

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Alert type="default" message="default Text"/>
        <Alert type="primary" message="primary Text"/>
        <Alert type="success" message="success Text"/>
        <Alert type="info" message="info Text"/>
        <Alert type="warn" message="warn Text"/>

        <Alert 
            message="Error Text"
            type="error"
            onClose={()=>{
                console.log("onClose::")  
            }}
          />
    </div>
  )
}
```
<!--End-->

### Alert Attributes

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| message | 警告提示内容 | string、ReactNode | - |
| description | 警告提示的辅助性文字介绍 | string、ReactNode | - |
| onClose | 关闭时触发的回调函数，onClose方法，就会有关闭按钮 | Function | - |
| showIcon | 是否显示图标 | Boolean | false |
| type | 指定警告提示的样式，有四种选择 `default`、 `primary`、 `success`、 `info`、`warn`、 `error` | string | default |