FileInput 上传输入框
===

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
    <FileInput
      uploadType="card"
      onPreview={(file) => console.log(file)}
      value={[
        { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4'}
      ]}
    >
      <Icon type="plus" />
    </FileInput>
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

## Props 

- `input` 基础输入框上传

- `picture` 图片列展示列表，显示图片

- `text` 图片列展示列表，不显示图片

- `card` 图片墙列表

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| uploadType | 上传展示类型 | `input`、`picture`、`text`、`card` | `input` |
| multiple | 是否多选上传 | boolean | - |


### Props uploadType 非input类型

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 默认图片列表  | FileType[] | - |
| readonly | 是否是只读模式 | boolean | false |
| maxNumber | 文件上传数量 | boolean | false |
| onChange | 文件上传回调 | (value: FileType[]) => void | - |
| onPreview | 预览图标时的回调 | (value: FileType[]) => void | - |

