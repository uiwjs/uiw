
### 配合组件使用

下面配合 [`<Card />`](#/components/card) 组件使用。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { OverlayTrigger, Card } from 'uiw';

const card = (
  <Card active>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);
const Demo = () => (
  <OverlayTrigger placement="top" overlay={card}>
    <span>鼠标移动到此处，显示和消失触发事件</span>
  </OverlayTrigger>
)
ReactDOM.render(<Demo />, _mount_);
```

### 位置

位置有 12 个方向，根据 placement 参数来设置。

```jsx
import ReactDOM from 'react-dom';
import { OverlayTrigger, Card, Button } from 'uiw';
const btnStl = {position: 'relative', width: 70, height: 50 }

const card = (
  <Card active>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);
const Demo = () => (
  <div>
    <div style={{ position: 'relative' }}>
      <OverlayTrigger placement="topLeft" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>TL</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={card}>
        <Button style={{ ...btnStl, left: 70}}>Top</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="topRight" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>TR</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="leftTop" overlay={card}>
        <Button style={{ ...btnStl }}>LT</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="rightTop" overlay={card}>
        <Button style={{ ...btnStl, left: 216 }}>RT</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="left" overlay={card}>
        <Button style={{ ...btnStl }}>Left</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="right" overlay={card}>
        <Button style={{ ...btnStl, left: 216 }}>Right</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="leftBottom" overlay={card}>
        <Button style={{ ...btnStl }}>LB</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="rightBottom" overlay={card}>
        <Button style={{ ...btnStl, left: 216 }}>RB</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="bottomLeft" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>BL</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="bottom" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>Bottom</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="bottomRight" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>BR</Button>
      </OverlayTrigger>
    </div>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```
