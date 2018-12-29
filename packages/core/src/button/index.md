Button 按钮
===

按钮用于开始一个即时操作，触发业务逻辑时使用。

### 基本用法

<!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Button>Normal</Button>
    <Button disabled>Disabled</Button>
    <Button type="primary" active>Button</Button>
    <Button type="primary" size="small">more <Icon type="arrow-down" /></Button>
    <Button type="link"> (超连接样式)link </Button>
    <Divider />
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">错误按钮</Button>
    <Button type="light">亮按钮</Button>
    <Button type="dark">暗按钮</Button>
  </div>
);
```
<!--End-->


### 激活按钮样式

<!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Button active type="primary">主要按钮</Button>
    <Button active type="success">成功按钮</Button>
    <Button active type="warning">警告按钮</Button>
    <Button active type="danger">错误按钮</Button>
    <Button active type="light">亮按钮</Button>
    <Button active type="dark">暗按钮</Button>
    <Button active type="link"> (超连接样式)link </Button>
  </div>
);
```
<!--End-->

### 禁用按钮样式

<!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Button disabled type="primary">主要按钮</Button>
    <Button disabled type="success">成功按钮</Button>
    <Button disabled type="warning">警告按钮</Button>
    <Button disabled type="danger">错误按钮</Button>
    <Button disabled type="light">亮按钮</Button>
    <Button disabled type="dark">暗按钮</Button>
    <Button disabled type="link"> (超连接样式)link </Button>
  </div>
);
```
<!--End-->


### block

<!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Button block type="primary">主要按钮</Button>
    <Button block type="success">成功按钮</Button>
    <Button block type="warning">警告按钮</Button>
    <Button block type="danger">错误按钮</Button>
    <Button block type="light">亮按钮</Button>
    <Button block type="dark">暗按钮</Button>
  </div>
);
```
<!--End-->

### size大小

`size` 在 `Button.Group`下面不支持。

<!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Button size="small" type="primary">主要按钮</Button>
    <Button size="default" type="success">成功按钮</Button>
    <Button size="large" type="warning">警告按钮</Button>
    <Button size="small" type="danger">错误按钮</Button>
    <Button size="default" type="light">亮按钮</Button>
    <Button size="large" type="dark">暗按钮</Button>
  </div>
);
```
<!--End-->