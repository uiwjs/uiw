# Loader 加载器

用于页面和区块的加载中状态。

```jsx
import { Loader } from 'uiw';
// or
import Loader from '@uiw/react-loader';
```

### 基础实例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Loader } from "uiw";

ReactDOM.render(
  <div>
    <Loader size="small" />
    <Loader />
    <Loader size="large" />
  </div>,
  _mount_
);
```


### 警告提示中加载

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Loader, Row, Col, Message, Icon } from "uiw";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <div>
        <Row gutter={10}>
          <Col>
            <Button
              style={{ marginBottom: 10 }}
              size="small"
              onClick={() => {
                this.setState({
                  loading: !this.state.loading,
                });
              }}
            >
              点击切换加载状态
            </Button>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col fixed>
            <Loader loading={this.state.loading}>
              <Message
                type="success"
                title="成功提示标题"
                description={
                  <span>
                    <Icon
                      type="uiw"
                      verticalAlign="baseline"
                      style={{ fill: "#009688" }}
                    />
                    这里是成功提示详情描述。
                  </span>
                }
              />
            </Loader>
          </Col>
          <Col fixed>
            <Loader loading={this.state.loading}>
              <Message
                type="warning"
                title="成功提示标题"
                description="这里是成功提示详情描述。"
              />
            </Loader>
          </Col>
        </Row>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```


### 卡片加载中

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Loader, Card, Col, Row } from "uiw";

ReactDOM.render(
  <Row gutter={10}>
    <Col fixed>
      <Card
        title="图标与文字一行显示"
        extra={<a href="#">更多</a>}
        style={{ minWidth: 230 }}
      >
        <Loader color="red" tip="加载中..." style={{ width: "100%" }}>
          <div>
            卡片内容
            <br />
            卡片内容
            <br />
            卡片内容
            <br />
          </div>
        </Loader>
      </Card>
    </Col>
    <Col fixed>
      <Card
        title="图标与文字垂直显示"
        extra={<a href="#">更多</a>}
        style={{ minWidth: 230 }}
      >
        <Loader tip="loading..." vertical style={{ width: "100%" }}>
          <div>
            卡片内容
            <br />
            卡片内容
            <br />
            卡片内容
            <br />
          </div>
        </Loader>
      </Card>
    </Col>
    <Col fixed>
      <Card
        title="自定义背景颜色"
        extra={<a href="#">更多</a>}
        style={{ minWidth: 230 }}
      >
        <Loader
          bgColor="rgba(0, 0, 0, 0.4)"
          color="#fff"
          tip="loading..."
          vertical
          style={{ width: "100%" }}
        >
          <div>
            卡片内容
            <br />
            卡片内容
            <br />
            卡片内容
            <br />
          </div>
        </Loader>
      </Card>
    </Col>
  </Row>,
  _mount_
);
```


### 自定义加载图标动画

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Loader, Card, Icon } from "uiw";

ReactDOM.render(
  <div>
    <Card title="Card标题" extra={<a href="#">更多</a>} style={{ width: 300 }}>
      <Loader
        tip="加载中..."
        color="red"
        indicator={
          <Icon
            type="loading"
            spin={true}
            style={{ verticalAlign: "text-top" }}
          />
        }
        style={{ width: "100%" }}
      >
        <div>
          卡片内容
          <br />
          卡片内容
          <br />
          卡片内容
          <br />
        </div>
      </Loader>
    </Card>
  </div>,
  _mount_
);
```


### 整页加载

页面数据加载时显示。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Loader, Icon, Button } from "uiw";

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      fullscreen: false,
    };
  }
  render() {
    return (
      <div>
        <Button
          style={{ marginBottom: 10 }}
          type="primary"
          onClick={() => {
            this.setState(
              {
                fullscreen: !this.state.fullscreen,
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    fullscreen: !this.state.fullscreen,
                  });
                }, 3000);
              }
            );
          }}
        >
          显示整页加载，3 秒后消失
        </Button>
        {this.state.fullscreen && (
          <Loader
            tip="加载中..."
            size="large"
            bgColor="rgba(255, 255, 255, 0.9)"
            fullscreen={this.state.fullscreen}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, _mount_);
```


### Props

| 参数       | 说明 | 类型 | 默认值 |
| ---------- | ------- | ------- | --------- |
| size       | 尺寸 | Enum{`small`, `default`, `large`} | `default` |
| loading    | 是否旋转 | Boolean | `true` |
| indicator  | 加载指示符，可以加载一个 Icon 动画   | ReactNode | - |
| tip        | 当作为包裹元素时，可以自定义描述文案 | String  | - |
| color      | 设置图标与文字的颜色 | String  | - |
| vertical   | 图标与文字垂直显示 | Boolean | - |
| bgColor    | 自定义背景颜色 | String  | - |
| fullscreen | 是否全屏显示 | Boolean | `false` |
