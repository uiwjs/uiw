## Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。


### 基本用法

<!--DemoStart--> 
```js
render() {
  let styleCol = {background: "rgb(223, 223, 223)",lineHeight:"36px",minHeight: "36px",textAlign:"center"};
  let styleColLight = {background: "rgb(240, 240, 240)",lineHeight:"36px",minHeight: "36px",textAlign:"center"};
  let styleRow = {marginBottom: "20px"};

  const {Row,Col} = Layout;

  return (
    <div>
      <Row style={styleRow}>
        <Col span="24"><div style={styleCol}>100%</div></Col>
      </Row>
      <Row style={styleRow}>
        <Col span="12"><div style={styleCol}>50%</div></Col>
        <Col span="12"><div style={styleColLight}>50%</div></Col>
      </Row>
      <Row style={styleRow}>
        <Col span="8"><div style={styleCol}>33.33%</div></Col>
        <Col span="8"><div style={styleColLight}>33.33%</div></Col>
        <Col span="8"><div style={styleCol}>33.33%</div></Col>
      </Row>
      <Row style={styleRow}>
        <Col span="6"><div style={styleCol}>25%</div></Col>
        <Col span="6"><div style={styleColLight}>25%</div></Col>
        <Col span="6"><div style={styleCol}>25%</div></Col>
        <Col span="6"><div style={styleColLight}>25%</div></Col>
      </Row>
      <Row>
        <Col span="4"><div style={styleCol}>16.66667%</div></Col>
        <Col span="4"><div style={styleColLight}>16.66667%</div></Col>
        <Col span="4"><div style={styleCol}>16.66667%</div></Col>
        <Col span="4"><div style={styleColLight}>16.66667%</div></Col>
        <Col span="4"><div style={styleCol}>16.66667%</div></Col>
        <Col span="4"><div style={styleColLight}>16.66667%</div></Col>
      </Row>
    </div>
  )
}
```
<!--End-->

### 分栏间隔

分栏之间存在间隔，通过设置`Row` 属性 `gutter` 的值。

<!--DemoStart--> 
```js
render() {
  let styleCol = {background: "rgb(223, 223, 223)",minHeight: "36px"};
  let styleColLight = {background: "rgb(240, 240, 240)",minHeight: "36px"};

  const {Row,Col} = Layout;

  return (
    <Row gutter="20">
      <Col span="6"><div style={styleCol}></div></Col>
      <Col span="6"><div style={styleColLight}></div></Col>
      <Col span="6"><div style={styleCol}></div></Col>
      <Col span="6"><div style={styleColLight}></div></Col>
    </Row>
  )
}
```
<!--End-->

### 混合布局

<!--DemoStart--> 
```js
render() {
  let styleCol = {background: "rgb(223, 223, 223)",minHeight: "36px"};
  let styleColLight = {background: "rgb(240, 240, 240)",minHeight: "36px"};
  let styleRow = {marginBottom: "20px"};

  const {Row,Col} = Layout;

  return (
    <div>
      <Row style={styleRow} gutter="20">
        <Col span="16"><div style={styleCol}></div></Col>
        <Col span="8"><div style={styleCol}></div></Col>
      </Row>
      <Row style={styleRow} gutter="20">
        <Col span="8"><div style={styleCol}></div></Col>
        <Col span="8"><div style={styleCol}></div></Col>
        <Col span="4"><div style={styleCol}></div></Col>
        <Col span="4"><div style={styleCol}></div></Col>
      </Row>
      <Row gutter="20">
        <Col span="4"><div style={styleCol}></div></Col>
        <Col span="16"><div style={styleCol}></div></Col>
        <Col span="4"><div style={styleCol}></div></Col>
      </Row>
    </div>
  )
}
```
<!--End-->