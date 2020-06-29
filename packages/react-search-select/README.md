SearchSelect 搜索选择器
===

搜索选择器

```jsx
import { SearchSelect } from 'uiw';
// or
import SearchSelect from '@uiw/react-search-select';
```

## 基础示例

<!--DemoStart,bgWhite,codePen--> 
```js
import { SearchSelect } from 'uiw';

const Demo = () => {
  const [option, setOption] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState(undefined);
  function handleSearch(e) {
    setLoading(true)
    setTimeout(() =>  {
      setOption([
        { label: 'a', value: 2 },
        { label: 'aa', value: 3 },
        { label: 'aaa', value: 4 },
      ]);
      setLoading(false);
    }, 2000);
  }
  return(
    <SearchSelect
      style={{ maxWidth: 200 }}
      showSearch={true}
      allowClear
      value={value}
      disabled={false}
      placeholder="请输入选择"
      onSearch={handleSearch}
      loading={loading}
      option={option}
      onChange={(value) => setValue(value)}
    />
  );
};
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->


### 在表单中使用

在 [`<Form />`](#/components/form) 表单中应用 `<SearchSelect />` 组件。

<!--DemoStart,noScroll,bgWhite,codePen--> 
```js
import { Form, Row, Col, SearchSelect, Button, Notify } from 'uiw';

const Demo = () => {
  const [option, setOption] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  function handleSearch(e) {
    setLoading(true)
    setTimeout(() =>  {
      setOption([
        { label: 'a', value: 2 },
        { label: 'aa', value: 3 },
        { label: 'aaa', value: 4 },
      ]);
      setLoading(false);
    }, 2000);
  }

  return (
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
              <SearchSelect
                showSearch={true}
                allowClear
                disabled={false}
                placeholder="请输入选择"
                onSearch={handleSearch}
                option={option}
                loading={loading}
              />
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
  );
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| allowClear | 支持清除 | Boolean | `false` |
| disabled | 禁用选择器 | Boolean | `false` |
| defaultValue | 指定默认选中的条目 | String/Number | - |
| value | 指定选中的条目的值 | String/Number | - |
| placeholder | 选择框默认文字 | String | - |
| showSearch | 使单选模式可搜索 | Boolean | - |
| size | 选择框尺寸 | Enum{`large`, `default`, `small` } | `default` |
| onChange | 选中 option，或 input 的 value，调用此函数 | `function(value, option:Option/Array<Option>)` | - |
| onSearch | 文本框值变化时回调 | `function(value: String)` | - |
| onSelect | 被选中时调用，参数为选中项的 value | `function(value: String/Number )` | - |
| loading | 加载中状态 | Boolean | false |
