## Buttons 按钮

按钮用于开始一个即时操作，触发业务逻辑时使用。

### 基本用法

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Buttons>Normal</Buttons> &nbsp;
        <Buttons disabled>Disabled</Buttons> &nbsp;
        <Buttons type="primary" active>Buttons</Buttons> &nbsp;
    </div>
  )
}
```
<!--End-->

### 按钮组

<!--DemoStart--> 
```js
render() {
  const ButtonsGroup = Buttons.Group;
  return (
    <div>
        <ButtonsGroup>
          <Buttons>Left</Buttons>
          <Buttons>Middle</Buttons>
          <Buttons disabled>Disabled</Buttons>
          <Buttons>Right</Buttons>
        </ButtonsGroup>
        <br/>
        <br/>
        <ButtonsGroup>
          <Buttons size="small" type="info">Secondary Normal</Buttons>
          <Buttons size="small" type="info">Secondary Disabled</Buttons>
        </ButtonsGroup>
        <br/>
        <br/>
        <ButtonsGroup>
          <Buttons type="warn">Warn Normal</Buttons>
          <Buttons type="warn" disabled>Disabled</Buttons>
        </ButtonsGroup>
    </div>
  )
}
```
<!--End-->

### 竖排列vertical

<!--DemoStart--> 
```js
render() {
  const ButtonsGroup = Buttons.Group;
  return (
    <div>
        <ButtonsGroup vertical>
          <Buttons>Left</Buttons>
          <Buttons>Middle</Buttons>
          <Buttons disabled>Disabled</Buttons>
          <Buttons>Right</Buttons>
        </ButtonsGroup>
        &nbsp;&nbsp;

        <ButtonsGroup vertical>
          <Buttons size="small">Left</Buttons>
          <Buttons size="small">Middle</Buttons>
          <Buttons size="small" disabled>Disabled</Buttons>
          <Buttons size="small">Right</Buttons>
        </ButtonsGroup>
    </div>
  )
}
```
<!--End-->

### 点击Loading

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    loading:false,
    loading3:false,
    loading4:false,
    loading5:true,
    loading2:false
  }
}
render() {
  const ButtonsGroup = Buttons.Group;
  return (
    <div>

        <Buttons size="extra-small" loading={this.state.loading} 
          onClick={()=>{
            console.log("loading:",this.state.loading)
            this.setState({loading:true})
        }}>
          点击Loading
        </Buttons> &nbsp;
        <Buttons size="small" type="success" loading={this.state.loading2} 
          onClick={()=>{
            console.log("loading2:",this.state.loading2)
            this.setState({loading2:true})
        }}>
          点击Loading
        </Buttons> &nbsp;
        <Buttons size="small" type="info" loading={this.state.loading5} 
          onClick={()=>{
            console.log("loading5:",this.state.loading5)
        }}>
          点击Loading
        </Buttons> &nbsp;
        <Buttons size="default" type="success" loading={this.state.loading3} 
          onClick={()=>{
            console.log("loading3:",this.state.loading3)
            this.setState({loading3:true})
        }}>
          点击Loading
        </Buttons> &nbsp;
        <Buttons size="large" type="danger" loading={this.state.loading4} 
          onClick={()=>{
            console.log("loading4:",this.state.loading4)
            this.setState({loading4:true})
        }}>
          点击Loading
        </Buttons> &nbsp;
    </div>
  )
}
```
<!--End-->

### active样式

<!--DemoStart--> 
```js
render() {
  const ButtonsGroup = Buttons.Group;
  return (
    <div>
        <Buttons size="small" type="default">  默认样式 </Buttons>&nbsp;
        <Buttons size="small" type="primary"> （首选项）Primary </Buttons>&nbsp;
        <Buttons size="small" type="success"> （成功）Success </Buttons>&nbsp;
        <Buttons size="small" type="info"> （一般信息）Info </Buttons>&nbsp;
        <Buttons size="small" type="warn"> （警告）Warning </Buttons>&nbsp;
        <Buttons size="small" type="danger"> （危险）Danger </Buttons>&nbsp;
    </div>
  )
}
```
<!--End-->

### disabled样式

<!--DemoStart--> 
```js
render() {
  const ButtonsGroup = Buttons.Group;
  return (
    <div>
        <Buttons size="small" active type="default">  默认样式 </Buttons>&nbsp;
        <Buttons size="small" active type="primary"> （首选项）Primary </Buttons>&nbsp;
        <Buttons size="small" active type="success"> （成功）Success </Buttons>&nbsp;
        <Buttons size="small" active type="info"> （一般信息）Info </Buttons>&nbsp;
        <Buttons size="small" active type="warn"> （警告）Warning </Buttons>&nbsp;
        <Buttons size="small" active type="danger"> （危险）Danger </Buttons>&nbsp;
    </div>
  )
}
```
<!--End-->

### size大小

<!--DemoStart--> 
```js
render() {
  const ButtonsGroup = Buttons.Group;
  return (
    <div>
        <Buttons size="extra-small" type="default">extra-small</Buttons> &nbsp;
        <Buttons size="small" type="primary">small</Buttons> &nbsp;
        <Buttons size="default" type="success">default</Buttons> &nbsp;
        <Buttons size="large" type="info">large</Buttons> &nbsp;
    </div>
  )
}
```
<!--End-->

### block

<!--DemoStart--> 
```js
render() {
  const ButtonsGroup = Buttons.Group;
  return (
    <div>
        <Buttons type="info" block size="small">（小按钮）Small button </Buttons>
        <Buttons type="info" block size="default">（默认尺寸）Default button </Buttons>
    </div>
  )
}
```
<!--End-->


### Buttons Attributes

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| size | ['large', 'default', 'small', 'extra-small'] |string | - |
| type | ["default","primary","success","info","warn","error","danger"] |string | - |
| block | 通过设置属性 block 可将按钮宽度设置为 100%，（块级元素），常用于弹窗内操作按钮。 |boolean | false |
| disabled | 禁用状态 |boolean | false |
| active | 激活状态，其表现为被按压下去（底色更深、边框夜色更深、向内投射阴影）。 |boolean | false |
| loading | 加载中状态 | boolean | false |
| onClick | click 事件的 handler |function | - |