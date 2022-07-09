CopyToClipboard 复制
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-copy-to-clipboard/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-copy-to-clipboard.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-copy-to-clipboard)
[![npm version](https://img.shields.io/npm/v/@uiw/react-copy-to-clipboard.svg?label=@uiw/react-copy-to-clipboard)](https://npmjs.com/@uiw/react-copy-to-clipboard)

将文本到剪切板，复制到剪贴板功能可以应用于各种元素，基于 [@uiwjs/copy-to-clipboard](https://github.com/uiwjs/copy-to-clipboard) 封装。

```jsx
import { CopyToClipboard } from 'uiw';
// or
import CopyToClipboard from '@uiw/react-copy-to-clipboard';
```

### 基础实例

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import { CopyToClipboard } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }
  render() {
    return (
      <div>
        <CopyToClipboard
          text="我被一个连接复制了！"
          onClick={() => {
            this.setState({ message: '复制成功！你可以粘贴了。' }, () => {
              setTimeout(() => {
                this.setState({ message: '' });
              }, 2000);
            });
          }}
        >
          点击我复制
        </CopyToClipboard>
        <div style={{color: '#28a745'}}>{this.state.message}</div>
      </div>
    )
  }
}
export default Demo
```

## 复制输入框内容

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import { CopyToClipboard, Input, Button } from 'uiw';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      copyText: "生亦何欢，死亦何苦"
    };
    this.input = React.createRef();
  }
  onChange(e){
    // this.setState({
    //   copyText: e.target.value
    // })
  }
  render() {
    const { copyText } = this.state;
    return (
      <div>
        <div>
          <Input
            type="text"
            ref={this.input}
            value={copyText}
            onChange={this.onChange.bind(this)}
          />
        </div>
        <CopyToClipboard 
          style={{ marginTop:10, display:'inline-block' }} 
          text={copyText}
          onClick={() => {
            // 复制提示
            this.setState({ message: '复制成功！你可以粘贴了。' }, () => {
              setTimeout(() => {
                this.setState({ message: '' });
              }, 2000);
            });
            this.input.current.select();
          }}
        >
          <Button type="primary">点击复制</Button>
          <span style={{color: '#28a745'}}>{this.state.message}</span>
        </CopyToClipboard>
      </div>
    )
  }
}
export default Demo
```

## CopyToClipboard

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| text | 拷贝的文本 | String | - |
| onClick | 点击事件 | Function(text,isCopy,event) | - |
