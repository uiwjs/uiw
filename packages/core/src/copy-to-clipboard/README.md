CopyToClipboard 复制
===

将文本到剪切板，复制到剪贴板功能可以应用于各种元素。

```jsx
import { CopyToClipboard } from 'uiw';
```

## 基础实例

<!--DemoStart,bgWhite--> 
```js
class Demo extends Component {
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
```
<!--End-->

## 复制输入框内容

<!--DemoStart,bgWhite--> 
```js
class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      copyText: "生亦何欢，死亦何苦"
    }
  }
  onChange(e){
    this.setState({
      copyText: e.target.value
    })
  }
  render() {
    const { copyText } = this.state;
    return (
      <div>
        <div>
          <Input
            type="text"
            ref={(input) => this.input = input}
            value={copyText}
            onChange={this.onChange.bind(this)}
          />
        </div>
        <CopyToClipboard 
          style={{marginTop:10,display:'inline-block'}} 
          text={copyText}
          onClick={() => {
            // 复制提示
            this.setState({ message: '复制成功！你可以粘贴了。' }, () => {
              setTimeout(() => {
                this.setState({ message: '' });
              }, 2000);
            });
            ReactDOM.findDOMNode(this.input).querySelector('input').select();
          }}
        >
          <Button type="primary">点击复制</Button>
          <span style={{color: '#28a745'}}>{this.state.message}</span>
        </CopyToClipboard>
      </div>
    )
  }
}
```
<!--End-->

## CopyToClipboard

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| text | 拷贝的文本 | String | - |
| onClick | 点击事件 | Function(text,isCopy,event) | - |
