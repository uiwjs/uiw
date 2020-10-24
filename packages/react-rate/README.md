Rate 评分
===

评分组件

```jsx
import { Rate } from 'uiw';
// or
import Rate from '@uiw/react-rate';
```

### 基本用法

按钮样式的单选组合。

<!--DemoStart,bgWhite,codePen--> 
```js
import { Rate, Divider, Icon } from 'uiw';

const Demo = () => (
  <div>
    <Rate value={3} />
    <Divider />
    <Rate allowHalf character={<Icon type="star-on" />} value={2.5} />
    <Divider />
    <Rate color="#393E48" character="☆" value={4} />
    <Divider />
    <Rate color="#28a745" character={<Icon type="heart-on" />} value={3} />
    <Divider />
    <Rate color="#dc3545" character="✿" value={4} />
  </div>
)

ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 在表单中使用

在 [`<Form />`](#/components/form) 表单中应用 [`<Rate />`](#/components/rate) 组件

<!--DemoStart,bgWhite,codePen--> 
```js
import { Form, Row, Col, Icon, Rate, Button, Notify } from 'uiw';

const Demo = () => (
  <div>
    <Form
      resetOnSubmit={false}
      onSubmitError={(error) => {
        if (error.filed) {
          return { ...error.filed };
        }
        return null;
      }}
      onSubmit={({initial, current}) => {
        const errorObj = {};
        if (current.rate < 2) {
          errorObj.rate = '评分低于 2 拒绝提交评分！';
        }
        if(Object.keys(errorObj).length > 0) {
          const err = new Error();
          err.filed = errorObj;
          Notify.error({ title: '提交失败！', description: '请确认提交表单是否正确！' });
          throw err;
        }
        Notify.success({
          title: '提交成功！',
          description: `表单提交成功，选择值为：${current.rate}！`,
        });
      }}
      fields={{
        rate: {
          initialValue: 3,
          children: <Rate style={{ fontSize: 14 }} character={<Icon type="star-on" />} />
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <div>
            <Row>
              <Col fixed>{fields.rate}</Col>
            </Row>
            <Row>
              <Col fixed>
                <Button size="small" disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
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
        )
      }}
    </Form>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 受控

<!--DemoStart,bgWhite,codePen--> 
```js
import { Rate, Divider, Icon, RadioGroup, Radio } from 'uiw';

const Demo = () => {
  const [value, setValue] = React.useState(4);
  return (
    <div>
      <Rate readOnly value={value} character={<Icon type="star-on" />} />
      <Divider />
      <RadioGroup value={value} onChange={(e) => {
        setValue(e.target.value);
      }}>
        <Radio value="0">选择 0 星</Radio>
        <Radio value="1">选择 1 星</Radio>
        <Radio value="2">选择 2 星</Radio>
        <Radio value="3">选择 3 星</Radio>
      </RadioGroup>
    </div>
  )
}

ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 只读

按钮样式的单选组合。

<!--DemoStart,bgWhite,codePen--> 
```js
import { Rate, Divider, Icon } from 'uiw';

const Demo = () => (
  <div>
    <Rate readOnly value={3} />
    <Divider />
    <Rate readOnly character="☆" value={4} />
    <Divider />
    <Rate readOnly character={<Icon type="heart-on" />} value={3.5} />
    <Divider />
    <Rate readOnly character="✿" value={4} />
  </div>
)

ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 文本

按钮样式的单选组合。

<!--DemoStart,bgWhite,codePen-->
```js
import { Rate, Divider } from 'uiw';

const Demo = () => (
  <div>
    <Rate character="美" value={4} />
    <Divider />
    <Rate color="#d80000" character="好" value={3} />
    <Divider />
    <Rate character="传" value={4} />
  </div>
)

ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 半选

<!--DemoStart,bgWhite,codePen--> 
```js
import { Rate, Divider, Icon } from 'uiw';

const Demo = () => (
  <div>
    <Rate allowHalf character={<Icon type="heart-on" />} value={3.3} />
    <Divider />
    <Rate allowHalf color="#d80000" character={<Icon type="heart-on" />} value={4.3} />
  </div>
);

ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 尺寸

<!--DemoStart,bgWhite,codePen--> 
```js
import { Rate, Divider, Icon } from 'uiw';

const Demo = () => (
  <div>
    <Rate style={{ fontSize: 34 }} character={<Icon type="heart-on" />} value={3} />
  </div>
)

ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## Rate

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 根据 value 进行比较，判断是否选中 | Number | - |
| count | star 总数 | Number | `5` |
| readOnly | 只读，无法进行交互 | Boolean | `false` |
| allowHalf | 是否允许半选 | Boolean | `false` |
| character | 自定义字符 | ReactNode | - |
| color | 自定义 Star 的颜色 | String | - |
| className | 自定义样式类名 | String | - |
| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even,value) | - |
| onHoverChange | 鼠标经过时数值变化的回调 | Funtcion(e:Even,value) | - |
