Descriptions 描述列表
===

成组展示多个只读字段。

```jsx
import { Descriptions } from 'uiw';
// or
import Descriptions from '@uiw/react-descriptions';
```

## 基础用法

简单的展示。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true-->
```js
import ReactDOM from 'react-dom';
import { Descriptions } from 'uiw';

ReactDOM.render(
  <Descriptions title="用户信息">
    <Descriptions.Item label="姓名">调调</Descriptions.Item>
    <Descriptions.Item label="手机号码">1360000000</Descriptions.Item>
    <Descriptions.Item label="居住地">上海市，青浦区</Descriptions.Item>
    <Descriptions.Item label="备注">-</Descriptions.Item>
    <Descriptions.Item label="地址">
      中国湖北省黄冈市罗田县666号
    </Descriptions.Item>
  </Descriptions>,
  _mount_
);
```

## 带边框的

带边框和背景颜色列表。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true-->
```js
import ReactDOM from 'react-dom';
import { Descriptions, Badge } from 'uiw';

ReactDOM.render(
  <Descriptions title="详细信息" bordered>
    <Descriptions.Item label="项目">UI组件库</Descriptions.Item>
    <Descriptions.Item label="是否收费">免费</Descriptions.Item>
    <Descriptions.Item label="是否持续维护">是</Descriptions.Item>
    <Descriptions.Item label="创建时间">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="更新时间" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="状态" span={3}>
      <Badge color="#008EF0" processing> 正在运行中</Badge>
    </Descriptions.Item>
    <Descriptions.Item label="定制组件">￥280.00</Descriptions.Item>
    <Descriptions.Item label="远程协助">￥20.00</Descriptions.Item>
    <Descriptions.Item label="修复bug">￥60.00</Descriptions.Item>
    <Descriptions.Item label="详细说明">
      五十多个组件库
      <br />
      当前版本 3.4.1
      <br />
      当前 react 版本 >= 16.7.0
    </Descriptions.Item>
  </Descriptions>,
  _mount_,
);
```

## 自定义尺寸

自定义尺寸，适应在各种容器中展示。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true-->
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Descriptions, Divider, Radio, RadioGroup } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'default',
    }
  }
  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <RadioGroup value={this.state.value} onChange={this.onChange.bind(this)}>
          <Radio value="default">默认(default)</Radio>
          <Radio value="large">大尺寸(large)</Radio>
          <Radio value="small">小尺寸(small)</Radio>
        </RadioGroup>
        <Divider />
        <Descriptions bordered title="详细信息"  size={this.state.value}>
          <Descriptions.Item label="项目">UI组件库</Descriptions.Item>
          <Descriptions.Item label="是否收费">免费</Descriptions.Item>
          <Descriptions.Item label="是否持续维护">是</Descriptions.Item>
          <Descriptions.Item label="创建时间">2018-04-24 18:00:00</Descriptions.Item>
          <Descriptions.Item label="更新时间" span={2}>
            2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="状态" span={3}>
            <Badge color="#008EF0" processing> 正在运行中</Badge>
          </Descriptions.Item>
          <Descriptions.Item label="定制组件">￥280.00</Descriptions.Item>
          <Descriptions.Item label="远程协助">￥20.00</Descriptions.Item>
          <Descriptions.Item label="修复bug">￥60.00</Descriptions.Item>
          <Descriptions.Item label="详细说明">
            五十多个组件库
            <br />
            当前版本 3.4.1
            <br />
            当前 react 版本 >= 16.7.0
          </Descriptions.Item>
        </Descriptions>
        <Divider />
        <Descriptions title="自定义尺寸"  size={this.state.value}>
          <Descriptions.Item label="姓名">调调</Descriptions.Item>
          <Descriptions.Item label="手机号码">1360000000</Descriptions.Item>
          <Descriptions.Item label="居住地">上海市，青浦区</Descriptions.Item>
          <Descriptions.Item label="备注">-</Descriptions.Item>
          <Descriptions.Item label="地址">
            中国湖北省黄冈市罗田县666号
          </Descriptions.Item>
        </Descriptions>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

## 垂直

垂直的列表。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true-->
```js
import ReactDOM from 'react-dom';
import { Descriptions, Divider } from 'uiw';

ReactDOM.render(
  <>
    <Descriptions title="垂直的列表" layout="vertical">
      <Descriptions.Item label="姓名">调调</Descriptions.Item>
      <Descriptions.Item label="手机号码">1360000000</Descriptions.Item>
      <Descriptions.Item label="居住地">上海市，青浦区</Descriptions.Item>
      <Descriptions.Item label="备注">垂直列表设置 layout 值为 vertical。</Descriptions.Item>
      <Descriptions.Item label="地址">
        中国湖北省黄冈市罗田县666号
      </Descriptions.Item>
    </Descriptions>
    <Divider />
    <Descriptions title="垂直的列表" layout="vertical" bordered>
      <Descriptions.Item label="姓名">调调</Descriptions.Item>
      <Descriptions.Item label="手机号码">1360000000</Descriptions.Item>
      <Descriptions.Item label="居住地">上海市，青浦区</Descriptions.Item>
      <Descriptions.Item label="备注">垂直列表设置 layout 值为 vertical。</Descriptions.Item>
      <Descriptions.Item label="地址">
        中国湖北省黄冈市罗田县666号
      </Descriptions.Item>
    </Descriptions>
  </>,
  _mount_,
);
```

## Props

### Descriptions

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| title | 标题 | ReactNode | - |
| bordered | 是否展示边框 | boolean | `false` |
| colon | 类容表述 `label` 添加 `:` 冒号 | boolean | `true` |
| size | 设置列表的大小。设置 `bordered={ture}` 生效。 | `large`, `small`, `default` | `default` |
| layout | 描述布局 | `horizontal`, `vertical` | `horizontal` |
| column | 一行的 `DescriptionItems` 数量 | Number | 3 |

### Descriptions.Item

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| label | 内容的描述 | ReactNode | - |
| span | 包含列的数量 | Number | 1 |