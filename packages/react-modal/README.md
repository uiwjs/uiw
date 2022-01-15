Modal 模态对话框
===

模态对话框。

```jsx
import { Modal } from 'uiw';
// or
import Modal from '@uiw/react-modal';
```

### 基本用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }
  onClick() {
    this.setState({ visible: !this.state.visible });
  }
  onClosed() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Modal
          title="模态对话框"
          isOpen={this.state.visible}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="information"
          type="primary"
          onConfirm={() => console.log('您点击了确定按钮！')}
          onCancel={() => console.log('您点击了取消按钮！')}
          onClosed={this.onClosed.bind(this)}
        >
          React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。
          <br /><br />
          以声明式编写UI，可以让你的代码更加可靠，且方便调试。
          <br /><br />
          创建好拥有各自状态的组件，再由组件构成更加复杂的界面。
          <br /><br />
          无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。
          <br /><br />
          无论你现在正在使用什么技术栈，你都可以随时引入 React 开发新特性。
          <br /><br />
          <b>组件</b>
          <br /><br />
          React 组件使用一个名为 render() 的方法， 接收数据作为输入，输出页面中对应展示的内容。 下面这个示例中类似XML的写法被称为JSX. 输入的数据通过 this.props 传入 render() 方法。
          <br /><br />
          使用 React 的时候也可以不使用 JSX 语法 你可以在 <a href="https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUPGDADkdECChWeASl4AlOMOBQAIgHkAssp0aIySpogoaFBUQmISdC48QA" target="_blank">Babel REPL</a> 查看 JSX 是如何被渲染成原生 JavaScript 代码的。
        </Modal>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this)}>确认对话框</Button>
        </ButtonGroup>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

### 延迟关闭对话框

这里是利用 `Promise` 等它执行完成再去关闭窗口

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }
  onClick() {
    this.setState({ visible: !this.state.visible });
  }
  onClosed() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Modal
          title="模态对话框"
          isOpen={this.state.visible}
          confirmText="确定按钮"
          cancelText="取消按钮"
          type="danger"
          onCancel={() => console.log('您点击了取消按钮！')}
          onClosed={this.onClosed.bind(this)}
          onConfirm={() => {
            console.log('确定回调！, 这里是利用Promise等执行完成再去关闭窗口');
            return new Promise((resolve, reject) => {
              const random = Math.random();
              console.log('测试，随机值大于 0.5 执行 resolve 事件，否则 执行 reject 触发 catch 错误', random, random > 0.5)
              setTimeout(random > 0.5 ? resolve : reject, 3000);
            }).catch(() => {
              // 可以通过下面方式，阻止弹框消失
              // throw new Error();
            });
          }}
        >
          这是一个单击 “<b>确定按钮</b>” 延迟关闭对话框的实例，关闭对话框触发 “<b>onConfirm</b>” 或 “<b>onCancel</b>” 事件。<br /><br /> 这里是利用 <b>Promise</b> 的特性，等它执行完成后，再去关闭窗口，达到延迟关闭的效果。<br /><br />
          这个测试例子，生成随机值判断是否大于 <b>0.5</b> 执行 <b>resolve</b> 事件，否则 执行 <b>reject</b> 触发 <b>catch</b> 错误。
        </Modal>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this)}>延迟关闭对话框</Button>
        </ButtonGroup>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```


### 表单应用

这里是利用 `Promise` 等它执行完成再去关闭窗口

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      loading: false,
    }
  }
  onClick() {
    this.setState({ visible: !this.state.visible });
  }
  onClosed() {
    this.setState({ visible: false });
  }
  onSubmit({ initial, current }) {
    const errorObj = {};
    if (current.userName.startsWith('u')) {
      errorObj.userName = `姓名 ${current.userName} 不能以 ‘u’ 开头`;
    }
    if (!current.age || current.age < 18 || current.age > 30) {
      errorObj.age = '年龄必须在18 ~ 30岁之间。';
    }
    if (!current.textarea) {
      errorObj.textarea = '请输入描述内容';
    }
    if(Object.keys(errorObj).length > 0) {
      const err = new Error();
      err.filed = errorObj;
      throw err;
    }

    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
      Notify.success({ title: '提交成功通知！', description: '提交内容，。' });
    }, 2000);
  }
  render() {
    return (
      <div>
        <Modal
          title="模态对话框"
          width={900}
          isOpen={this.state.visible}
          onClosed={this.onClosed.bind(this)}
          type="danger"
          useButton={false}
        >
          <Form
            resetOnSubmit={false}
            onSubmit={this.onSubmit.bind(this)}
            onSubmitError={(error) => {
              if (error.filed) {
                return { ...error.filed };
              }
              return null;
            }}
            fields={{
              userName: {
                initialValue: 'uiw',
                label: '姓名',
                help: '以“u”开头的名字将在此处显示错误信息',
                children: <Input type="text" />
              },
              age: {
                initialValue: 9,
                label: '年龄',
                children: <Input type="number" />
              },
              textarea: {
                initialValue: '',
                label: '描述说明',
                children: <Textarea placeholder="请输入内容" />
              },
            }}
          >
            {({ fields, state, canSubmit }) => {
              console.log('fields:-->', state);
              return (
                <div>
                  <Row gutter={10}>
                    <Col>{fields.userName}</Col>
                    <Col>{fields.age}</Col>
                  </Row>
                  <Row gutter={10}>
                    <Col>{fields.textarea}</Col>
                  </Row>
                  <Row gutter={10} justify="flex-end">
                    <Col fixed>
                      <Button loading={this.state.loading} disabled={!canSubmit()} type="primary" htmlType="submit">提交表单</Button>
                    </Col>
                  </Row>
                </div>
              )
            }}
          </Form>
        </Modal>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this)}>表单中应用</Button>
        </ButtonGroup>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

### 自定义页脚

设置 `useButton={false}` 隐藏默认的按钮，再根据自己需求定义按钮。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }
  onClick() {
    this.setState({ visible: !this.state.visible });
  }
  onClosed() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Modal
          title="模态对话框"
          isOpen={this.state.visible}
          useButton={false}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="information"
          type="danger"
          onConfirm={() => console.log('您点击了确定按钮！')}
          onCancel={() => console.log('您点击了取消按钮！')}
          onClosed={this.onClosed.bind(this)}
        >
          React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。
          <br /><br />
          以声明式编写UI，可以让你的代码更加可靠，且方便调试。
          <br /><br />
          创建好拥有各自状态的组件，再由组件构成更加复杂的界面。
          <br /><br />
          无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。
          <br /><br />
          无论你现在正在使用什么技术栈，你都可以随时引入 React 开发新特性。
          <br /><br />
          <b>组件</b>
          <br /><br />
          React 组件使用一个名为 render() 的方法， 接收数据作为输入，输出页面中对应展示的内容。 下面这个示例中类似XML的写法被称为JSX. 输入的数据通过 this.props 传入 render() 方法。
          <br /><br />
          使用 React 的时候也可以不使用 JSX 语法 你可以在 Babel REPL 查看 JSX 是如何被渲染成原生 JavaScript 代码的。
          <div className="w-modal-footer">
            <Button type="danger" onClick={this.onClosed.bind(this)} >确定按钮</Button>
            <Button onClick={this.onClosed.bind(this)} >取消按钮</Button>
          </div>
        </Modal>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this)}>确认对话框</Button>
        </ButtonGroup>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| title | 设置标题 | Function(e) | - |
| onCancel | 取消按钮的回调函数 | Function(e) | - |
| onConfirm | 点击确定按钮回调 | Function(e) | - |
| cancelText | 取消按钮文字， | String | - |
| confirmText | 确认按钮文字 | String | `确认` |
| icon | 设置对话框右上角图标，设置 `type` 将图标设置不同的颜色。当前属性为 [`<Icon>`](#/components/icon) 组件的 `type` 属性，所以可以参考该组件自定义图标。 | String/ReactNode | - |
| useButton | 是否使用默认按钮，如果设置 `false` 需要自定义按钮关闭 | Boolean | `true` |
| type | 按钮类型跟 `<Button>` 组件的 `type` 参数一致，同时会影响按钮颜色。 | String | `light` |
| width | 设置弹出框宽度 | Number | - |
| bodyStyle | Modal body 样式 | `CSSProperties` | - |
| cancelButtonProps | cancel 按钮 props | `ButtonProps` | - |
| confirmButtonProps | confirm 按钮 props | `ButtonProps` | - |
| maxWidth | 默认弹出框最大宽度 `500` | Number | `500` |
| minWidth | 默认弹出框最小宽度 `320` | Number | `320` |
| isCloseButtonShown | 是否在对话框的标题中显示关闭按钮。 请注意，只有在提供标题时才会呈现标题。 | Boolean | `true` |
| isOpen[`<Overlay>`](#/components/overlay) | 对话框是否可见 | Boolean | `false` |
| maskClosable[`<Overlay>`](#/components/overlay) | 点击遮罩层是否允许关闭 | Boolean | `true` |

更多属性文档请参考 [Overlay](#/components/overlay)。
