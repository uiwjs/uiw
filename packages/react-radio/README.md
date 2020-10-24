Radio 单选框
===

单选框，在一组备选项中进行单选。

```jsx
import { Radio, RadioGroup } from 'uiw';
// or
import { Radio, RadioGroup } from '@uiw/react-radio';
```

### 基础用法

适用广泛的基础最简单的用法，展示各种状态下的样式。

<!--DemoStart,bgWhite,codePen--> 
```js
import { Radio } from 'uiw';

const Demo = () => (
  <div>
    <Radio value="1">Radio</Radio>
    <Radio value="2" checked>选中</Radio>
    <Radio value="3" disabled>禁用</Radio>
    <Radio value="4" checked disabled>选中并禁用</Radio>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### Form 中使用 Radio

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Form, Radio, RadioGroup, Row, Col, Button, Notify } from 'uiw';

const Demo = () => (
  <Form
    onChange={({ initial, current }) => {}}
    resetOnSubmit={false}
    onSubmitError={(error) => error && error.filed ? { ...error.filed } : null}
    onSubmit={({initial, current}) => {
      const ErrObj = {};
      if (current.radioGroup === 'unknown') {
        ErrObj.radioGroup = '请选择性别！';
      }

      if(Object.keys(ErrObj).length > 0) {
        const err = new Error();
        err.filed = ErrObj;
        throw err;
      }

      Notify.success({
        title: '提交成功！', description: `填写：【填写成功】！`
      });
    }}
    fields={{
      radioGroup: {
        value: 'girl',
        label: '请输入内容',
        help: '必须选择性别！',
        children: (
          <RadioGroup>
            <Radio value="man">男</Radio>
            <Radio value="girl">女</Radio>
            <Radio value="shemale">中性</Radio>
            <Radio value="unknown">未知</Radio>
          </RadioGroup>
        ),
      },
      radio: {
        help: '请选择！该选项为必选！',
        validator: (value) => !value ? '必填选项！' : null,
        children: <Radio value="man">已阅读</Radio>,
      },
    }}
  >
    {({ fields, state, canSubmit }) => {
      return (
        <div>
          <Row>
            <Col>{fields.radioGroup}</Col>
          </Row>
          <Row>
            <Col>{fields.radio}</Col>
          </Row>
          <Row>
            <Col>
              <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <pre style={{ padding: 10, marginTop: 10 }}>
                {JSON.stringify(state.current, null, 2)}
              </pre>
            </Col>
          </Row>
        </div>
      );
    }}
  </Form>
);

ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 单选

适用广泛的基础最简单的用法。

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Radio, RadioGroup } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '未知' };
  }
  onChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div>
        <RadioGroup name="sexs" value={this.state.value} onChange={this.onChange.bind(this)}>
          <Radio value="man">男</Radio>
          <Radio value="girl">女</Radio>
          <Radio value="shemale" disabled>中性</Radio>
          <Radio value="unknown" disabled>未知</Radio>
        </RadioGroup>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 单选组

设置单选初始值

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Radio, RadioGroup, Divider, Button } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '未知' };
  }
  onChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div>
        <RadioGroup name="other" value={this.state.value} onChange={this.onChange.bind(this)}>
          <div>Group 1</div>
          <Radio value="男">男</Radio>
          <Radio value="女">女</Radio>
          <div>Group 2</div>
          <Radio value="中性" disabled>中性</Radio>
          <Radio value="未知">未知</Radio>
          <div>Group 3</div>
          <Radio value="E" style={{ display: 'block' }}>Item E</Radio>
          <Radio value="F" style={{ display: 'block' }}>Item F</Radio>
        </RadioGroup>
        <Divider />
        <Button
          type="primary"
          onClick={() => {
            // console.log('set::', ['东北菜', '北京烤鸭']);
            this.setState({ value: '女' });
          }}
        >
          点击按钮选"女"
        </Button>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## Radio

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |
| name | 用于表单对应的名称 | String | - |
| checked | Radio是否被选中 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even) | - |

## RadioGroup 

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |
| name | 用于表单对应的名称 | String | - |
| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even) | - |
