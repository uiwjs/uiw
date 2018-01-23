Upload 标签
===

### 点击上传

经典款式，用户点击按钮弹出文件选择框。  

<!--DemoStart--> 
```js

class Demo extends Component {
  constructor(props){
    super(props);
    this.state={
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      }],
    }
  }
  handlePreview(file){
    console.log("filePreview ::",file)
  }

  render() {
    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
          console.log('file',info.file, info.fileList);
        if (info.file.status !== 'uploading') {
          console.log('uploading');
        }
        if (info.file.status === 'done') {
          console.log('上传成功...');
          Message.success(`${info.file.name} 上传成功！`);
        } else if (info.file.status === 'error') {
          console.log('上传失败...');
          Message.error(`${info.file.name} 上传失败！`);
        }
      },
      onRemove(file){
        console.log("file::",file)
      }
  }
 
    return (
      <Upload {...props} onPreview={this.handlePreview}  >
        <Button>
          <Icon type="upload" />&nbsp;&nbsp;点击上传
        </Button>
      </Upload>
    )
  }
}
```
<!--End-->

### 拖拽上传

可批量拖拽图片上传。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <div>
        <Upload.Dragger 
          onChange={(value1)=>{
            console.log("value1::",value1)
          }}
          onRemove={(value2)=>{
            console.log("value2::",value2)
          }}
          limit={3}
        />
      </div>
    )
  }
}
```
<!--End-->



## API

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| disabled | 禁止点击按钮 | Boolean | `false` |
| defaultFileList | 默认已经上传的文件列表 | object[] | - |
| fileList | 已经上传的文件列表（受控）| object[] | - |
| onChange | 上传文件改变时的状态 | function | - |
| onRemove | 删除某张图片 | function(file) | - |
| onPreview | 点击文件链接或预览图标时的回调 | function(file) | - |

### Upload.Dragger

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| onChange | 拖拽完成回调,可获取图片的base64编码以及二进制编码容器blob | function(value) | - |
| onRemove | 删除某张图片 | function(value) | - |
| disabled | 禁止点击按钮 | Boolean | `false` |
| limit    | 限制上传张数 | Number | - |
