Upload 上传
===

基于 `<input type="file">` 封装的基础上传列表，支持`图片`，`pdf`，`xlsx`上传。

```jsx
import { Upload } from 'uiw';
// or
import Upload from '@uiw/react-upload';
```

### 基础用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Upload, Button } from 'uiw';

const Demo = () => {
  const [images, setImages] = React.useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Upload
      multiple
      value={images}
      onChange={onChange}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onFileUpload,
        onFileRemoveAll,
        onFileUpdate,
        onFileRemove
      }) => (
        <div>
          <Button type="primary" onClick={onFileUpload}>
            上传
          </Button>
          &nbsp;
          <Button onClick={onFileRemoveAll}>删除全部</Button>
          {imageList.map((image, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 0'
            }}>
            <div style={{ width: 60, height: 60, marginRight: 10 }}>
              <img src={image['data_url']} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
            <div>
              <Button onClick={() => onFileUpdate(index)}>修改</Button>
              <Button type="danger" onClick={() => onFileRemove(index)}>删除</Button>
            </div>
          </div>
          ))}
        </div>
      )}
    </Upload>
  )
}

ReactDOM.render(<Demo />, _mount_);
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 上传文件 | `FileType[]` | - |
| accept| 上传文件类型 | string[] | 默认所有图片类型 |
| dataURLKey | 上传的key | String | `dataURL` |
| multiple | 可接受多个值的文件上传字段 | boolean | `false` |
| maxNumber | 上传数量上限 | number | `3` |
| maxFileSize | 上传文件大小 | number | - |
| inputProps | 原生Input参数 | `React.HTMLProps<HTMLInputElement>` |  {} |
| onChange | 上传文件改变时的状态 | (value: FileType[], addUpdatedIndex?: number[]>) => void | - |
| onError | 上传失败回调 | (errors: ErrorsType ｜ null, files?: FileListType) => void | - |

### FileType

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| dataURL | 本地上传地址 | string | - |
| file | file文件 | File |  |

### ErrorsType

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| maxFileSize | 上传文件大小是否超过默认值 | boolean | - |
| maxNumber | 上传数量上限是否超过上限 | boolean | - |
| accept | 上传文件类型是否与设置一致 | boolean | - |