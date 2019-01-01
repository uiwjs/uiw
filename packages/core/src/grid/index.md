Grid 删格
===

基于 `flex` 栅格系统。

```jsx
import { Row, Col } from '@uiw/core';
```

### 基础用法

<!--DemoStart--> 
```js
const styl = { border: '1px solid #A5A5A5', textAlign: 'center', paddingTop: 5, paddingButton: 5 };
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };
const Demo = () => (
  <div style={boxStyl}>
    <Row>
      <Col fixed style={{...styl, width: 120}}> Col 1 </Col>
      <Col grow={2} style={styl}> Col 2 </Col>
      <Col grow={1} style={styl}> Col 3 </Col>
    </Row>
  </div>
);
```
<!--End-->

### Gutter

栅格间隔，可以写成像素值

<!--DemoStart--> 
```js
const styl = { border: '1px solid #A5A5A5', textAlign: 'center', padding: '5px 0' };
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };
const Box = ({ num }) => <div style={styl}>Col {num}</div>
const Demo = () => (
  <div style={boxStyl}>
    <Row gutter={10}>
      <Col> <Box num={1}/> </Col>
      <Col> <Box num={2}/> </Col>
      <Col> <Box num={3}/> </Col>
    </Row>
    <Row style={{ marginTop: 10 }}>
      <Col> <Box num={1}/> </Col>
      <Col> <Box num={2}/> </Col>
      <Col> <Box num={3}/> </Col>
    </Row>
  </div>
);
```
<!--End-->


### Flex 行设置列对齐

<!--DemoStart--> 
```js
const styl = { border: '1px solid #A5A5A5', textAlign: 'center', padding: '5px 0' };
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };
const Box = ({ num, height, style }) => <div style={{...styl, ...style, height}}>Col {num}</div>
const Demo = () => (
  <div style={boxStyl}>
    <Row gutter={10} justify="center" align="top">
      <Col span="2"> <Box height={35} num={1}/> </Col>
      <Col span="2"> <Box height={50} num={2}/> </Col>
      <Col span="2"> <Box height={70} num={3}/> </Col>
    </Row>
    <Row gutter={10} justify="space-around" align="middle">
      <Col span="2"> <Box height={35} num={1}/> </Col>
      <Col span="2"> <Box height={50} num={2}/> </Col>
      <Col span="2"> <Box height={70} num={3}/> </Col>
    </Row>
    <Row gutter={10} justify="space-between" align="bottom">
      <Col span="2"> <Box height={35} num={1}/> </Col>
      <Col span="2"> <Box height={50} num={2}/> </Col>
      <Col span="2"> <Box height={70} num={3}/> </Col>
    </Row>
    <Row gutter={10} justify="flex-end" align="bottom">
      <Col span="2"> <Box height={35} num={1}/> </Col>
      <Col span="2"> <Box height={50} num={2}/> </Col>
      <Col span="2"> <Box height={70} num={3}/> </Col>
    </Row>
    <Row gutter={10} justify="center" align="baseline">
      <Col span="2"> <Box height={85} style={{ lineHeight: '85px' }} num={1}/> </Col>
      <Col span="2"> <Box height={50} num={2}/> </Col>
      <Col span="2"> <Box height={70} num={3}/> </Col>
    </Row>
  </div>
);
```
<!--End-->

### Flex 列对齐

<!--DemoStart--> 
```js
const styl = { border: '1px solid #A5A5A5', textAlign: 'center', padding: '5px 0' };
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };
const Box = ({ num, height }) => <div style={{...styl }}>Col {num}</div>
const Demo = () => (
  <div style={boxStyl}>
    <Row gutter={10} style={{height: 130}}>
      <Col align="top"> <Box num={1}/> </Col>
      <Col align="middle"> <Box num={2}/> </Col>
      <Col align="bottom"> <Box num={3}/> </Col>
    </Row>
  </div>
);
```
<!--End-->


### 24删格

可以通过指定 `24` 列中每列的宽度来创建基本网格系统。

<!--DemoStart--> 
```js
const styl = { border: '1px solid #A5A5A5', textAlign: 'center', padding: '5px 0' };
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };
const Box = ({ num }) => <div style={styl}>Col {num}</div>
const Demo = () => (
  <div style={boxStyl}>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col span="2"> <Box num={1}/> </Col>
      <Col span="2"> <Box num={2}/> </Col>
      <Col span="2"> <Box num={3}/> </Col>
      <Col span="2"> <Box num={4}/> </Col>
      <Col span="2"> <Box num={5}/> </Col>
      <Col span="2"> <Box num={6}/> </Col>
      <Col span="2"> <Box num={7}/> </Col>
      <Col span="2"> <Box num={8}/> </Col>
      <Col span="2"> <Box num={9}/> </Col>
      <Col span="2"> <Box num={10}/> </Col>
      <Col span="2"> <Box num={11}/> </Col>
      <Col span="2"> <Box num={12}/> </Col>
    </Row>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col span="16"> <Box num={1}/> </Col>
      <Col span="8"> <Box num={2}/> </Col>
    </Row>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col span="8"> <Box num={1}/> </Col>
      <Col span="8"> <Box num={2}/> </Col>
      <Col span="8"> <Box num={3}/> </Col>
    </Row>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col span="12"> <Box num={1}/> </Col>
      <Col span="12"> <Box num={2}/> </Col>
    </Row>
  </div>
);
```
<!--End-->

### 动态列增长

<!--DemoStart--> 
```js
const styl = { border: '1px solid #A5A5A5', textAlign: 'center', padding: '5px 0' };
const boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };
const Box = ({ num }) => <div style={styl}>Col {num}</div>
const Demo = () => (
  <div style={boxStyl}>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col> <Box num={1}/> </Col>
      <Col grow={2}> <Box num={2}/> </Col>
    </Row>
    <Row gutter={10}>
      <Col> <Box num={1}/> </Col>
      <Col grow={2}> <Box num={2}/> </Col>
      <Col grow={5}> <Box num={3}/> </Col>
    </Row>
  </div>
);
```
<!--End-->

## Row

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| gutter | 栅格间隔间距 | number | - |
| justify | flex 布局下的水平排列方式 | Enum{`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`} | - |
| align | flex 布局下的垂直对齐方式 | Enum{`top`, `middle`, `bottom`, `baseline`} | - |


## Col

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| fixed | 如果为`true`，则列宽固定为其内容的宽度 | boolean | - |
| grow | 列的宽度相对于同一网格中其他列的比率 | number | - |
| align | 网格中列的对齐方式 | Enum{`top`, `middle`, `bottom`, `baseline`} | - |