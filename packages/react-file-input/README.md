FileInput 上传输入框
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-file-input/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-file-input.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-file-input)
[![npm version](https://img.shields.io/npm/v/@uiw/react-file-input.svg?label=@uiw/react-file-input)](https://npmjs.com/@uiw/react-file-input)

这个组件仅仅是对 `<input type="file">` 的美化，他是基于 Input 组件封装      。

```jsx
import { FileInput } from 'uiw';
// or
import FileInput from '@uiw/react-file-input';
```

### 基础用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { FileInput, Button } from 'uiw';

const Demo = () => {
  const onChange = (e) => {
    console.log(e)
  }
  return (
    <div>
      <FileInput multiple="multiple" style={{ maxWidth: 200 }} size="small" onChange={onChange} />
      <br />
      <FileInput multiple="multiple" style={{ maxWidth: 200 }} />
      <br />
    </div>
  )
}

ReactDOM.render(
  <Demo />,
  _mount_
);
```

### 图片墙

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { FileInput, Button } from 'uiw';

const Demo = () => {
  return (
    <div>
      <FileInput
        uploadType="card"
        size="large"
        showFileIcon={{
          showPreviewIcon: false,
          showRemoveIcon: true
        }}
        onPreview={(file) => console.log(file)}
        value={[
          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4'}
        ]}
        onChange={(items) => console.log(items)}
      >
        <Icon type="plus" />
      </FileInput>
      <br />
      <FileInput
        uploadType="card"
        shape="circle"
        showFileIcon={{
          showPreviewIcon: false,
          showRemoveIcon: true
        }}
        onPreview={(file) => console.log(file)}
        value={[
          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4'}
        ]}
        onChange={(items) => console.log(items)}
      >
        <Icon type="plus" />
      </FileInput>
      <br />
      <FileInput
        uploadType="card"
        size="small"
        showFileIcon={{
          showPreviewIcon: false,
          showRemoveIcon: true
        }}
        onPreview={(file) => console.log(file)}
        value={[
          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4'}
        ]}
        onChange={(items) => console.log(items)}
      >
        <Icon type="plus" />
      </FileInput>
    </div>
  )
}

ReactDOM.render(
  <Demo />,
  _mount_
);
```

### 图片列表样式

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { FileInput, Button } from 'uiw';

ReactDOM.render(
  <div>
    <FileInput
      uploadType="picture"
      size="large"
      onPreview={() => console.log(234)}
      value={[
        { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }
      ]}
    >
      <Button>新增</Button>
    </FileInput>
    <br />
    <FileInput
      uploadType="picture"
      shape="circle"
      onPreview={() => console.log(234)}
      value={[
        { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }
      ]}
    >
      <Button>新增</Button>
    </FileInput>
    <br />
    <FileInput
      uploadType="picture"
      size="small"
      onPreview={() => console.log(234)}
      value={[
        { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }
      ]}
    >
      <Button>新增</Button>
    </FileInput>
    <br />
    <FileInput
      uploadType="text"
      multiple
      maxNumber={2}
      value={[
        { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }
      ]}
    >
      <Button>新增</Button>
    </FileInput>
  </div>,
  _mount_
);
```

### 在`Form`表单中使用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Form, Row, Col, Icon } from 'uiw';

ReactDOM.render(
  <div>
    <Form 
      fields={{
        picture1: {
          label: '图片墙',
          initialValue: [
            { 
              dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png'
            }
          ],
          children: (
            <FileInput uploadType="card">
              <Icon type="plus" />
            </FileInput>
          )
        },
        picture2: {
          label: '图片列表',
          initialValue: [
            { 
              dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png'
            }
          ],
          children: (
            <FileInput uploadType="picture">
              <Button>新增</Button>
            </FileInput>
          )
        },
        picture3: {
          label: '图片名称列表',
          children: (
            <FileInput uploadType="text">
              <Button>新增</Button>
            </FileInput>
          )
        },
      }}>
      {({ fields, state, canSubmit }) => {
        return (
          <div>
            <Row>
              <Col>{fields.picture1}</Col>
            </Row>
            <Row>
              <Col>{fields.picture2}</Col>
            </Row>
            <Row>
              <Col>{fields.picture3}</Col>
            </Row>
            <Row>
              <Col>
                <pre style={{ padding: '10px 0 0 10px' }}>
                  {JSON.stringify(state.current, null, 2)}
                </pre>
              </Col>
            </Row>
          </div>
        )
      }}
    </Form>
  </div>,
  _mount_
);
```

## Props 

- `uploadType: input` 基础输入框上传

- `uploadType: picture` 图片列展示列表，显示图片

- `uploadType: text` 图片列展示列表，不显示图片

- `uploadType: card` 图片墙列表

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| uploadType | 上传展示类型 | `input`、`picture`、`text`、`card` | `input` |
| className | CSS类名称 | String | - |
| multiple | 是否多选上传 | boolean | - |


### Props uploadType input类型

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| dataLabel | input 后置文字 | `string` | `Browse` |

更多属性文档请参考 [Input](#/components/input)。


### Props uploadType 非input类型

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 默认图片列表  | FileInputValue[] | - |
| readonly | 是否是只读模式 | boolean | false |
| maxNumber | 文件上传数量 | boolean | false |
| shape | 图片展示形状  | `circle`、`round` | `round` |
| size | 图片展示大小  | `large`、`middle`、`small` | `middle` |
| showFileIcon | 设置图标按钮是否展示 | {showPreviewIcon?: boolean,showRemoveIcon?: boolean} | {showPreviewIcon: true, showRemoveIcon: true} |
| onChange | 文件上传回调 | (value: FileInputValue[]) => void | - |
| onPreview | 预览图标时的回调 | (value: FileInputValue[]) => void | - |

