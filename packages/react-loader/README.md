Loader 加载器
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-loader/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-loader.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-loader)
[![npm version](https://img.shields.io/npm/v/@uiw/react-loader.svg?label=@uiw/react-loader)](https://npmjs.com/@uiw/react-loader)

用于页面和区块的加载中状态。

```jsx
import { Loader } from 'uiw';
// or
import Loader from '@uiw/react-loader';
```

### 基础实例

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Loader } from "uiw";

export default function Demo() {
  return (
    <div>
      <Loader size="small" />
      <Loader />
      <Loader size="large" />
    </div>
  );
}
```


### 警告提示中加载

```jsx mdx:preview&bg=#fff
import React, { Component } from 'react';
import { Loader, Row, Col, Message, Icon, Button } from "uiw";

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
export default Demo;
```


### 卡片加载中

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Loader, Card, Col, Row } from "uiw";

export default function Demo() {
  return (
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
    </Row>
  );
}
```


### 自定义加载图标动画

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Loader, Card, Icon } from "uiw";

export default function Demo() {
  return (
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
    </div>
  );
}
```


### 整页加载

页面数据加载时显示。

```jsx mdx:preview&bg=#fff
import React from 'react';
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

export default Demo;
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
