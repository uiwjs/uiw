Input 输入框
===

通过鼠标或键盘输入内容，是最基础的表单域的包装。

```jsx
import { Input } from 'uiw';
// or
import Input from '@uiw/react-input';
```

### 基础用法

<!--DemoStart,bgWhite,codePen--> 
```js
import { Input } from 'uiw';

const Demo = () => (
  <div>
    <Input placeholder="请输入内容" style={{ maxWidth: 200 }} />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 插入图标

<!--DemoStart,bgWhite,codePen--> 
```js
import { Input, Row, Col } from 'uiw';

const stylItem = { margin: 20 };
const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Input preIcon="delete" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input preIcon="tag" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input preIcon="picasa" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input preIcon="like-o" placeholder="请输入内容" />
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 后面插入内容

向后面插入 [`Button`](#/components/button) 或者 [`Tag`](#/components/tag)

<!--DemoStart,bgWhite,codePen--> 
```js
import { Input, Row, Col, Button, Tag } from 'uiw';

const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Input
          preIcon="like-o"
          placeholder="请输入密码"
          addonAfter={<Button icon="lock" size="small" basic type="light" />}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          placeholder="请输入内容"
          addonAfter={<Tag title="1000" color="#28a745" />}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="search"
          placeholder="请输入内容"
          addonAfter={<Button icon="apple" size="small" type="primary">按钮</Button>}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="primary">按钮</Button>}
        />
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->


### 输入框尺寸

<!--DemoStart,bgWhite,codePen--> 
```js
import { Input, Row, Col, Tag, Button } from 'uiw';

const Demo = () => (
  <div>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col fixed>
        <Input
          preIcon="like-o"
          size="large"
          placeholder="请输入密码"
          addonAfter={<Button icon="lock" basic type="light" />}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="search"
          placeholder="请输入内容"
          addonAfter={<Button icon="arrow-right" basic size="small" type="light" />}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          size="small"
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="primary">按钮</Button>}
        />
      </Col>
    </Row>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col fixed>
        <Input
          preIcon="like-o"
          size="large"
          placeholder="请输入密码"
          addonAfter={<Tag title="1000" color="#28a745" />}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          placeholder="请输入内容"
          addonAfter={<Tag title="药丸" color="#1C7CEB" color="#40bf16">丸</Tag>}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          size="small"
          placeholder="请输入内容"
          addonAfter={<Tag title="1000" color="#28a745" />}
        />
      </Col>
    </Row>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col fixed>
        <Input
          preIcon="like-o"
          size="large"
          placeholder="请输入密码"
          addonAfter={<Button icon="apple" type="primary">按钮</Button>}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="search"
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="primary">搜索</Button>}
        />
      </Col>
      <Col fixed>
        <Input
          preIcon="tag"
          size="small"
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="primary">按钮</Button>}
        />
      </Col>
    </Row>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Col fixed>
        <Input
          preIcon="like-o"
          placeholder="请输入密码"
          addonAfter={<Button size="small" type="light">亮按钮</Button>}
        />
      </Col>
      <Col fixed>
        <Input
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="danger">按钮</Button>}
        />
      </Col>
      <Col fixed>
        <Input
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="warning">按钮</Button>}
        />
      </Col>
    </Row>
    <Row gutter={10}>
      <Col fixed>
        <Input size="small" preIcon="like-o" placeholder="请输入密码" />
      </Col>
      <Col fixed>
        <Input size="small" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input
          size="small"
          preIcon="like-o"
          placeholder="请输入内容"
          addonAfter={<Button size="small" type="warning">按钮</Button>}
        />
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->


### 密码输入框

<!--DemoStart,bgWhite,codePen--> 
```js
import { Input, Row, Col, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      btnIcon: 'lock',
    }
  }
  onClick() {
    console.log('this.state.btnIcon:',this.state.btnIcon);
    this.setState({
      btnIcon: this.state.btnIcon === 'lock' ? 'unlock' : 'lock',
    })
  }
  render() {
    return (
      <Row gutter={10}>
        <Col fixed>
          <Input
            preIcon="like-o"
            type={this.state.btnIcon === 'lock' ? 'password' : 'text'}
            placeholder="请输入密码"
            addonAfter={<Button icon={this.state.btnIcon} onClick={this.onClick.bind(this)} size="small" basic type="light" />}
          />
        </Col>
      </Row>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 输入框被禁用

<!--DemoStart,bgWhite,codePen--> 
```js
import { Icon, Input, Row, Col} from 'uiw';

const stylItem = { margin: 20 };
const Demo = () => (
  <>
    <Row gutter={10}>
      <Col fixed>
        <Input disabled preIcon="delete" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input disabled preIcon="tag" placeholder="请输入内容" />
      </Col>
      <Col fixed>
        <Input
          disabled
          preIcon="picasa"
          placeholder="请输入内容"
          addonAfter={
            <Button icon="close" disabled size="small" basic type="light" />
          }
        />
      </Col>
      <Col fixed>
        <Input disabled preIcon="like-o" placeholder="请输入内容" />
      </Col>
    </Row>
  </>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## Input

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 绑定值 | String | - |
| disabled | 禁用输入框 | Boolean | `false` |
| preIcon | 输入框`前`面放置图标  | String/ReactNode | - |
| addonAfter | 	带标签的 input，设置后置标签 | String/ReactNode | - |
| size | 指定输入框的尺寸，除了默认的大小外，还提供了 `large`、`small` 和 `default` 三种尺寸。 | String | - |