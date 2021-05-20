Badge 标记
===

出现在按钮、图标旁的数字或状态标记。

```jsx
import { Badge } from 'uiw';
// or
import Badge from '@uiw/react-badge';
```

### 基础用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true--> 
```jsx
import ReactDOM from 'react-dom';
import { Badge, Row, Col, Avatar, Divider } from 'uiw';

ReactDOM.render(
  <div>
    <Row gutter={20}>
      <Col fixed>
        <Badge count={9}>
          <Avatar shape="square" size="large" />
        </Badge>
      </Col>
      <Col fixed>
        <Badge count={100}>
          <Avatar shape="square" size="large" />
        </Badge>
      </Col>
      <Col>
        <Badge dot count={9}>
          <Avatar shape="square" size="large" />
        </Badge>
      </Col>
    </Row>
    <Divider />
    <Badge count={12}>
      评论
    </Badge>
  </div>,
  _mount_
);
```

### 封顶数字

不包裹任何元素即是独立使用，可自定样式展现。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true--> 
```jsx
import ReactDOM from 'react-dom';
import { Badge, Row, Col, Avatar, Divider } from 'uiw';

const styl={ marginRight: 20, display: 'inline-block' }

ReactDOM.render(
  <Row gutter={20}>
    <Col fixed>
      <Badge count={99}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Col>
    <Col fixed>
      <Badge count={100} style={{ backgroundColor: '#87d068' }}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Col>
    <Col fixed>
      <Badge count={99} max={10} style={styl}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Col>
    <Col fixed>
      <Badge count={100} max={999} style={styl}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Col>
    <Col fixed>
      <Badge count={100} max={999} style={styl}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Col>
  </Row>,
  _mount_
);
```

### 独立使用

不包裹任何元素即是独立使用，可自定样式展现。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true--> 
```jsx
import ReactDOM from 'react-dom';
import { Badge, Row, Col } from 'uiw';

ReactDOM.render(
  <Row gutter={10}>
    <Col fixed>
      <Badge count={25} />
    </Col>
    <Col fixed>
      <Badge count={4} style={{ backgroundColor: '#fff', color: '#f04134', boxShadow: 'rgb(217, 217, 217) 0px 0px 0px 1px inset' }} /> 
    </Col>
    <Col fixed>
      <Badge count={109} style={{ backgroundColor: '#87d068' }} /> 
    </Col>
  </Row>,
  _mount_
);
```

### 小红点

以红点的形式标注需要关注的内容。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true--> 
```jsx
import ReactDOM from 'react-dom';
import { Badge } from 'uiw';

ReactDOM.render(
  <div>
    <Badge dot style={{ marginRight: 10 }}>
      数据查询
    </Badge>
    <Badge dot count={4}>
      <Icon type='mail-o' />
    </Badge>
  </div>,
  _mount_
);
```

### 状态点

用于表示状态的小圆点，可以设置 `processing={true}` 让状态点，显示动画效果。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true--> 
```jsx
import { Badge } from 'uiw';

ReactDOM.render(
  <div>
    <Badge color="#28a745" />
    <Badge color="#008EF0" />
    <Badge color="#dc3545" />
    <Badge color="#393E48" />
    <Badge color="#ffc107" />
    <Badge color="#f95c2b" />
    <Badge color="#dc3545"/>
    <Badge color="#c2c2c2"/>
    <Badge color="#F95C2B" processing />
    <br />
    <Badge color="#28a745">Success</Badge>
    <br />
    <Badge color="#dc3545">Error</Badge>
    <br />
    <Badge color="#c2c2c2">Default</Badge>
    <br />
    <Badge color="#008EF0" processing>Processing</Badge>
    <br />
    <Badge color="#ffc107">Warning</Badge>
    <Badge color="#ffc107" processing>Warning</Badge>
  </div>,
  _mount_
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| style | 默认设置计数圆点样式，设置 `color`，`style` 设置外层节点样式 | Object | - |
| count | 展示的数字 | Number | - |
| max | 最大值，超过最大值会显示 '{max}+' | Number | `99` |
| dot | 不展示数字，只有一个小红点 | Boolean | `false` |
| processing | 不展示数字，只有一个小红点 | Boolean | - |
| color | 设置 Badge 为状态点的颜色 | String | - |
