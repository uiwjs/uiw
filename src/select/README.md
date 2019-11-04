Select 选择器
===

当选项过多时，使用下拉菜单展示并选择内容。

```jsx
import { Select } from 'uiw';
```

### 基础用法

适用广泛的基础单选 `value` 的值为当前被选中的 `Option` 的 `value` 属性值。自定义 `Select` 请查看 [`<Dropdown />`](#/components/dropdown) 组件实例。

<!--DemoStart,bgWhite,codePen--> 
```js
import { Row, Col, Select } from 'uiw';

const Demo = () => (
  <Row>
    <Col fixed>
      <Select defaultValue="w">
        <Select.Option value="w">Choose an item...</Select.Option>
        <Select.Option value="1">One</Select.Option>
        <Select.Option value="2">Two</Select.Option>
        <Select.Option value="3">Three</Select.Option>
        <Select.Option value="4">Four</Select.Option>
      </Select>
    </Col>
  </Row>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->


### 禁用选择器

<!--DemoStart,bgWhite,codePen--> 
```js
import { Row, Col, Select } from 'uiw';

const Demo = () => (
  <Row>
    <Col fixed>
      <Select disabled defaultValue="3">
        <Select.Option value="w">Choose an item...</Select.Option>
        <Select.Option value="1">One</Select.Option>
        <Select.Option value="2">Two</Select.Option>
        <Select.Option value="3">Three</Select.Option>
        <Select.Option value="4">Four</Select.Option>
      </Select>
    </Col>
  </Row>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->


### 尺寸

通过 `size` 属性设置选择器的尺寸，提供三个尺寸参数设置。

<!--DemoStart,bgWhite,codePen--> 
```js
import { Row, Col, Select, Button } from 'uiw';

const rowSty = { marginBottom: 10 };
const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Select size="small" disabled defaultValue="3" style={rowSty}>
          <Select.Option value="w">Choose an item...</Select.Option>
          <Select.Option value="1">One</Select.Option>
          <Select.Option value="2">Two</Select.Option>
          <Select.Option value="3">Three</Select.Option>
          <Select.Option value="4">Four</Select.Option>
        </Select>
      </Col>
      <Col fixed>
        <Button size="small">小尺寸</Button>
      </Col>
    </Row>
    <Row gutter={10} style={rowSty}>
      <Col fixed>
        <Select defaultValue="3">
          <Select.Option value="w">Choose an item...</Select.Option>
          <Select.Option value="1">One</Select.Option>
          <Select.Option value="2">Two</Select.Option>
          <Select.Option value="3">Three</Select.Option>
          <Select.Option value="4">Four</Select.Option>
        </Select>
      </Col>
      <Col fixed>
        <Button size="default">默认尺寸</Button>
      </Col>
    </Row>
    <Row gutter={10}>
      <Col fixed>
        <Select size="large" defaultValue="3">
          <Select.Option value="w">Choose an item...</Select.Option>
          <Select.Option value="1">One</Select.Option>
          <Select.Option value="2">Two</Select.Option>
          <Select.Option value="3">Three</Select.Option>
          <Select.Option value="4">Four</Select.Option>
        </Select>
      </Col>
      <Col fixed>
        <Button size="large">大尺寸</Button>
      </Col>
    </Row>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 选项组

<!--DemoStart,bgWhite,codePen--> 
```js
import { Row, Col, Select } from 'uiw';

const Demo = () => (
  <Row>
    <Col fixed>
      <Select defaultValue="w">
        <Select.Option value="w">Choose an item...</Select.Option>
        <Select.Group label="Group 1">
          <Select.Option value="1">One</Select.Option>
          <Select.Option value="2">Two</Select.Option>
        </Select.Group>
        <Select.Group label="Group 2">
          <Select.Option value="3">Three</Select.Option>
          <Select.Option value="4">Four</Select.Option>
        </Select.Group>
      </Select>
    </Col>
  </Row>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->


### 在表单中使用

在 [`<Form />`](#/components/form) 表单中应用 [`<Select />`](#/components/select) 组件

<!--DemoStart,bgWhite,codePen--> 
```js
import { Form, Row, Col, Select, Button, Notify } from 'uiw';

const Demo = () => (
  <div>
    <Form
      onSubmitError={(error) => {
        if (error.filed) {
          return { ...error.filed };
        }
        return null;
      }}
      onSubmit={({initial, current}) => {
        const errorObj = {};
        if (!current.selectField) {
          errorObj.selectField = '默认需要选择内容，选择入内容';
        }
        if(Object.keys(errorObj).length > 0) {
          const err = new Error();
          err.filed = errorObj;
          Notify.error({ title: '提交失败！', description: '请确认提交表单是否正确！' });
          throw err;
        }
        Notify.success({
          title: '提交成功！',
          description: `表单提交成功，选择值为：${current.selectField}，将自动填充初始化值！`,
        });
      }}
      fields={{
        selectField: {
          children: (
            <Select>
              <Select.Option value="w">Choose an item...</Select.Option>
              <Select.Option value="1">One</Select.Option>
              <Select.Option value="2">Two</Select.Option>
              <Select.Option value="3">Three</Select.Option>
              <Select.Option value="4">Four</Select.Option>
            </Select>
          )
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <div>
            <Row>
              <Col fixed>{fields.selectField}</Col>
            </Row>
            <Row>
              <Col fixed>
                <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
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

### HTML select

这个组件是最简单的基础样式组件，可以直接引用样式，使用 `w-select` 纯样式即可达到效果，下拉框右边箭头效果通过样式更改，通过 [`b64`](http://b64.io/) 工具，转换成 `base64` 格式。

```jsx
import 'uiw/lib/esm/select/style/index.less';
```

<!--DemoStart,bgWhite,codePen--> 
```js
import { Row, Col, Select } from 'uiw';

const Demo = () => (
  <Row style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }} gutter={10}>
    <Col fixed>
      <select className="w-select" defaultValue="w">
        <option value="w">Choose an item...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    </Col>
    <Col fixed>
      <select disabled className="w-select" defaultValue="w">
        <option value="w">Choose an item...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    </Col>
  </Row>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## 搜索下拉组件
<!--DemoStart,bgWhite,codePen--> 
```js
import { SearchSelect } from 'uiw';

const Demo = () => {
  const [option, setOption] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [value, setValue] = React.useState(undefined)
  function handleSearch(e) {
    setLoading(true)
    setTimeout(() =>  {
      setOption([{label: 'a', value: 2}, {label: 'aa', value: 3}, {label: 'aaa', value: 4}])
      setLoading(false)
    }, 2000)
  }
 return(
   <SearchSelect
    style={{'maxWidth': 200 }}
    showSearch={true}
    allowClear
    value={value}
    disabled={false}
    placeholder="请输入选择"
    onSearch={handleSearch}
    loading={loading}
    option={option}
    onChange={(value) => { setValue(value) }}
  />)
};
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->


## Select

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 控制时 `select` 的值必须与 `onChange` 函数一起使用才能更新 `select` 的值 | Any | - |
| disabled | 禁用选择器 | Boolean | `false` |
| defaultValue | 根据 `value` 进行比较，判断是否选中 | Any | - |
| size | 选择框尺寸 | Enum {`large`, `default`, `small` } | `default` |

## SearchSelect

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| allowClear | 支持清除 | Boolean | `false` |
| disabled | 禁用选择器 | Boolean | `false` |
| defaultValue | 指定默认选中的条目 | String \| Number | - |
| value | 指定选中的条目的值 | String \| Number | - |
| placeholder | 选择框默认文字 | String | - |
| showSearch | 使单选模式可搜索 | Boolean | - |
| size | 选择框尺寸 | Enum {`large`, `default`, `small` } | `default` |
| onChange | 选中 option，或 input 的 value，调用此函数 | `function(value, option:Option/Array<Option>)` | - |
| onSearch | 文本框值变化时回调 | `function(value: String)` | - |
| onSelect | 被选中时调用，参数为选中项的 value | `function(value: String \|  Number )` | - |
| loading | 加载中状态 | Boolean | false |
