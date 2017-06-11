## Buttons 按钮

按钮用于开始一个即时操作，触发业务逻辑时使用。

### 基本用法

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Buttons>Normal</Buttons>
        <Buttons disabled>Disabled</Buttons>
        <Buttons type="primary" active>Buttons</Buttons>
        <Buttons type="primary" size="small">more <Icon type="arrow-down" /></Buttons>
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

        &nbsp;&nbsp;

        <ButtonsGroup>
          <Buttons>Left</Buttons>
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
          <Buttons size="small">Secondary Normal</Buttons>
          <Buttons size="small">Secondary Disabled</Buttons>
          <Buttons size="small"><Icon type="arrow-down" /></Buttons>
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

### 添加图标

<!--DemoStart--> 
```js
render() {
  const ButtonsGroup = Buttons.Group;
  return (
    <div>
        <ButtonsGroup>
          <Buttons type="success" icon="upload" />
          <Buttons type="success" icon="information" />
          <Buttons type="success" icon="edit" />
        </ButtonsGroup>

        &nbsp;&nbsp;

        <ButtonsGroup>
          <Buttons size="small"><Icon type="arrow-left" />返回</Buttons>
          <Buttons size="small">前进<Icon type="arrow-right" /></Buttons>
        </ButtonsGroup>

        <br/><br/>
  
        <ButtonsGroup>
          <Buttons icon="upload" />
          <Buttons icon="information" />
          <Buttons icon="edit" />
          <Buttons icon="delete" />
          <Buttons icon="information" />
          <Buttons icon="verification" />
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

        &nbsp;&nbsp;

        <ButtonsGroup vertical>
          <Buttons size="small" type="primary">Left</Buttons>
          <Buttons size="small" type="primary">Middle</Buttons>
          <Buttons size="small" type="primary" disabled>Disabled</Buttons>
          <Buttons size="small" type="primary">Right</Buttons>
        </ButtonsGroup>

        &nbsp;&nbsp;

        <ButtonsGroup vertical>
          <Buttons size="small" icon="upload"></Buttons>
          <Buttons size="small" icon="menu">Middle</Buttons>
          <Buttons size="small" icon="share" disabled>Disabled</Buttons>
          <Buttons size="small" icon="verification">Right</Buttons>
        </ButtonsGroup>

        &nbsp;&nbsp;

        <ButtonsGroup vertical>
          <Buttons size="small" icon="upload"></Buttons>
          <Buttons size="small" icon="menu"></Buttons>
          <Buttons size="small" icon="share" disabled></Buttons>
          <Buttons size="small" icon="verification"></Buttons>
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

        <Buttons size="mini" loading={this.state.loading} 
          onClick={()=>{
            console.log("loading:",this.state.loading)
            this.setState({loading:true})
        }}>
          点击Loading
        </Buttons>
        <Buttons size="small" type="success" loading={this.state.loading2} 
          onClick={()=>{
            console.log("loading2:",this.state.loading2)
            this.setState({loading2:true})
        }}>
          点击Loading
        </Buttons>
        <Buttons size="small" type="info" loading={this.state.loading5} 
          onClick={()=>{
            console.log("loading5:",this.state.loading5)
        }}>
          点击Loading
        </Buttons>
        <Buttons size="default" type="success" loading={this.state.loading3} 
          onClick={()=>{
            console.log("loading3:",this.state.loading3)
            this.setState({loading3:true})
        }}>
          点击Loading
        </Buttons>
        <Buttons size="large" type="danger" loading={this.state.loading4} 
          onClick={()=>{
            console.log("loading4:",this.state.loading4)
            this.setState({loading4:true})
        }}>
          点击Loading
        </Buttons>
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
        <Buttons size="small" type="default">  默认样式 </Buttons>
        <Buttons size="small" type="primary"> （首选项）Primary </Buttons>
        <Buttons size="small" type="success"> （成功）Success </Buttons>
        <Buttons size="small" type="info"> （一般信息）Info </Buttons>
        <Buttons size="small" type="warn"> （警告）Warning </Buttons>
        <Buttons size="small" type="danger"> （危险）Danger </Buttons>
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
        <Buttons size="small" active type="default">  默认样式 </Buttons>
        <Buttons size="small" active type="primary"> （首选项）Primary </Buttons>
        <Buttons size="small" active type="success"> （成功）Success </Buttons>
        <Buttons size="small" active type="info"> （一般信息）Info </Buttons>
        <Buttons size="small" active type="warn"> （警告）Warning </Buttons>
        <Buttons size="small" active type="danger"> （危险）Danger </Buttons>
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
        <Buttons size="mini" type="default"><Icon type="arrow-down" /> mini</Buttons>
        <Buttons size="small" type="primary"><Icon type="arrow-down" /> small</Buttons>
        <Buttons size="default" type="success"><Icon type="arrow-down" /> default</Buttons>
        <Buttons size="large" type="info"><Icon type="arrow-down" /> large</Buttons>
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
  const {Row,Col} = Layout;
  return (
    <Row>
      <Col xs="8" sm="8" md="8" xs="24">
        <Buttons type="info" block size="small">（小按钮）Small button </Buttons>
        <Buttons type="info" block size="default">（默认尺寸）Default button </Buttons>
      </Col>
    </Row>
  )
}
```
<!--End-->

## API

### Buttons

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| size | `large`, `default`, `small`, `mini` |string | - |
| type | `default`,`primary`,`success`,`info`,`warn`,`error`,`danger` |string | - |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) |string | `button` |
| icon | 设置按钮的图标类型 |string | - |
| block | 通过设置属性 block 可将按钮宽度设置为 100%，（块级元素），常用于弹窗内操作按钮。 |boolean | false |
| disabled | 禁用状态 |boolean | false |
| active | 激活状态，其表现为被按压下去（底色更深、边框夜色更深、向内投射阴影）。 |boolean | false |
| loading | 加载中状态 | boolean | false |
| onClick | click 事件的 handler |function | - |