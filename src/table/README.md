Table 表格
===

表示两种相互对立的状态间的切换，多用于触发「开/关」。选中时的内容支持响应式。

```jsx
import { Table } from 'uiw';
```

### 基本使用

<!--DemoStart,bgWhite,codePen-->
```js
import { Table, Button } from 'uiw';

const columns = [
  {
    // title: '姓名',
    title: ({ key }) => {
      return (
        <span>字段: {key}</span>
      )
    },
    key: 'name', 
  }, {
    title: '年龄',
    style: { color: 'red' },
    key: 'age',
  }, {
    title: '地址',
    key: 'info',
  }, {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
  { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },
  { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },
  { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },
];
const Demo = () => (
  <div>
    <Table columns={columns} data={dataSource} />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 表头分组

表头分组通过 `columns` 数组中对象的 `children` 来实现，以渲染分组表头。。

<!--DemoStart,bgWhite,codePen-->
```js
import { Table, Button } from 'uiw';

const columns = [
  {
    title: '姓名',
    style: { color: 'red' },
    key: 'name', 
    children: [
      {
        title: '中文名字',
        key: 'cnname',
        children:[
          {
            title: '姓名',
            style: { color: 'red' },
            key: 'firstname',
            children:[
              { title: '姓', key: 'name1', width: 80 },
              { title: '名', key: 'name2', width: 80 },
            ]
          }, {
            title: '拼音',
            key: 'lastname',
            children:[
              { title: '姓', key: 'pinyin1', width: 80 },
              { title: '名', key: 'pinyin2', width: 80 },
            ],
          },
        ],
      }, {
        title: '英文名字',
        width: 100,
        key: 'name_en',
      },
    ]
  }, {
    title: '其它',
    children:[
      { title: '生日', key: 'birthday', width: 150 },
      { title: '职业', key: 'job', width: 150 },
    ],
  }, {
    title: '操作',
    key: 'edit',
    width: 150,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <span>{text} {key} - {rowNumber} - {columnNumber}</span>
      </div>
    ),
  },
];
const dataSource = [
  { name1: '邓', name2:'紫棋', pinyin1: 'deng', pinyin2: 'ziqi', name_en: 'G.E.M.', birthday: '1991年8月16日', job: '唱作歌手、作曲人', edit:'' },
  { name1: '周', name2:'杰伦', pinyin1: 'zhou', pinyin2: 'jielun', name_en: 'Jay Chou', birthday: '1979年1月18日', job: '歌手、音乐人', edit:'' },
  { name1: '邓', name2:'紫棋', pinyin1: 'deng', pinyin2: 'ziqi', name_en: 'G.E.M.', birthday: '1991年8月16日', job: '唱作歌手、作曲人', edit:'' },
  { name1: '周', name2:'杰伦', pinyin1: 'zhou', pinyin2: 'jielun', name_en: 'Jay Chou', birthday: '1979年1月18日', job: '歌手、音乐人', edit:'' },
];
const Demo = () => (
  <div>
    <Table bordered columns={columns} data={dataSource} />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 表格行/列合并

表头只支持列合并，使用 `columns` 里的 `colSpan` 进行设置。表格支持行/列合并，使用 `render` 里的单元格属性 `colSpan` 或者 `rowSpan` 设值为 0 时，设置的表格不会渲染。

<!--DemoStart,bgWhite,codePen--> 
```js
import { Table, Button } from 'uiw';

const columns = [
  {
    title: '姓名',
    key: 'name', 
  }, {
    title: '年龄',
    style: { color: 'red' },
    key: 'age',
    colSpan: 2,
    render: (text, key, rowData, rowNum, colNum) => {
      const obj = {
        children: text,
        props: {}
      }
      if (rowNum === 0) {
        obj.props.rowSpan = 2;
      }
      if (rowNum === 1) {
        obj.props.rowSpan = 0;
      }
      return obj;
    }
  }, {
    title: '地址',
    key: 'info',
    colSpan: 0,
  }, {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
  { name: '李易峰', age: '12', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
];
const Demo = () => (
  <div>
    <Table bordered columns={columns} data={dataSource} />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->


### 标题页脚

添加表格边框线，页头和页脚的展现效果。

<!--DemoStart,bgWhite,codePen-->
```js
import { Table, Button } from 'uiw';

const columns = [
  {
    title: '姓名',
    style: { color: 'red' },
    key: 'name', 
  }, {
    title: '年龄',
    key: 'age',
  }, {
    title: '地址',
    key: 'info',
  }, {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
  { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },
  { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },
  { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },
];
const Demo = () => (
  <div>
    <Table
      title={(
        <div>
          这里是标题，有边框，<b>bordered=true</b>
        </div>
      )}
      footer={(
        <div>
          这里是页脚 Footer，有边框，<b>bordered=true</b>
        </div>
      )}
      bordered columns={columns} data={dataSource} />
    <Table title="这里是标题，没有边框" footer="这里是页脚 Footer，没有边框" columns={columns} data={dataSource} />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 点击单元格

<!--DemoStart,bgWhite,codePen-->
```js
import { Table, Button, Notify } from 'uiw';

const columns = [
  {
    title: '姓名',
    style: { color: 'red' },
    key: 'name', 
  }, {
    title: '年龄',
    key: 'age',
  }, {
    title: '地址',
    key: 'info',
  }, {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
  { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },
  { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },
  { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },
];
const Demo = () => (
  <div>
    <Table
      title="表内容 tbody 单元格点击回调事件"
      onCell={(rowData, { rowNumber, columnNumber }) => {
        console.log('-->3', rowData);
        console.log('-->4', rowNumber);
        console.log('-->5', columnNumber);
        Notify.info({ description: `你点击了"${rowData.name}"。` });
      }}
      columns={columns}
      data={dataSource} />
    <Table
      title="表头单元格点击回调事件"
      onCellHead={(rowData, rowNumber, columnNumber) => {
        console.log('-->3', rowData);
        console.log('-->4', rowNumber);
        console.log('-->5', columnNumber);
        Notify.info({ description: `你点击了"${rowData.title}"。` });
      }}
      onCell={(rowData, { rowNumber, columnNumber }) => {
        console.log('-->3', rowData);
        console.log('-->4', rowNumber);
        console.log('-->5', columnNumber);
        Notify.info({ description: `你点击了"${rowData.name}"。` });
      }}
      columns={columns}
      data={dataSource} />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 原始HTML

<!--DemoStart,bgWhite,codePen-->
```js
import { Table, Button } from 'uiw';

const Demo = () => (
  <div>
    <Table bordered>
      <thead>
        <tr>
          <th>名称</th>
          <th width="60">数量</th>
          <th>详情</th>
          <th width="100">价格</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>土豆</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>萝卜</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>香蕉</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>芝麻</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
      </tbody>
    </Table>
    <Table>
      <caption>没有边框</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th width="60">数量</th>
          <th>详情</th>
          <th width="100">价格</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>土豆</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>萝卜</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>香蕉</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>芝麻</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
      </tbody>
    </Table>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 选择和操作

<!--DemoStart,bgWhite,codePen-->
```js
import { Table, Button, Checkbox, Pagination, Loader } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 选中的 key
      checked: [],
      loading: false,
      dataSource: [
        { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。' },
        { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人' },
        { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手' },
        { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。' },
        { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。' },
        { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班' },
        { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。' },
      ],
      columns: [
        {
          title: (data, rowNum, colNum) => {
            const indeterminate = this.state.dataSource.length !== this.state.checked.length && this.state.checked.length > 0;
            const checked = this.state.dataSource.length === this.state.checked.length;
            return (
              <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                onClick={(evn) => {
                  let checked = this.state.dataSource.map((item, idx) => idx);
                  if(!evn.target.checked) {
                    checked = [];
                  }
                  this.setState({ checked });
                }}
              />
            );
          },
          key: 'checked',
          render: (text, key, rowData, rowNumber, columnNumber) => {
            return (
              <Checkbox checked={rowData.checked} onClick={this.onClickCheckedItem.bind(this, rowNumber)} />
            );
          }
        }, {
          title: '名字',
          key: 'name',
        }, {
          title: '年龄',
          key: 'age',
        }, {
          title: '地址',
          key: 'info',
        },
      ]
    }
  }
  onClickCheckedItem(rowNumber, env) {
    let { checked } = this.state;
    const isChecked = env.target.checked;
    if(isChecked) {
      // 添加到选中数组中
      checked.push(rowNumber)
      checked = checked.sort((a, b) => a - b);
    } else {
      // 删除选中项
      checked.splice(checked.indexOf(rowNumber), 1);
    }
    this.setState({ checked });
  }
  render() {
    const { checked } = this.state;
    const dataSource = this.state.dataSource.map((item, idx) => {
      const isChecked = checked.indexOf(idx) > -1;
      return { checked: isChecked, ...item };
    });
    return (
      <div>
        <Loader loading={this.state.loading} style={{ display: 'block' }}>
          <Table
            columns={this.state.columns}
            data={dataSource}
            footer={
              <Pagination
                current={2}
                pageSize={10}
                total={30}
                divider
                onChange={(current, total, pageSize) => {
                  this.setState({ loading: true });
                  const timer = setTimeout(() => {
                    // 模拟变更数据
                    const dataSource = this.state.dataSource.map(item => {
                      item.age = Number(item.age) + current;
                      return item;
                    });
                    // 翻页 API 获取数据
                    this.setState({ checked: [], dataSource, loading: false });
                  }, 2000);
                }}
              />
            }
          />
        </Loader>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## Props

### Table

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| columns | 表格列的配置描述，可以内嵌 `children`，以渲染分组表头。| ColumnProps[] | `[]` |
| data | 数据数组。| Array[] | `[]` |
| title | 表格标题 | String/ReactNode/~~Function(text, key, rowData, rowNumber, columnNumber)~~/Function(data: IColumns, rowNum: number, colNum: number)`@3.0.0+` | - |
| footer | 表格尾部 | String/ReactNode | - |
| bordered | 是否展示外边框和列边框 | Boolean | - |
| onCellHead | 表头单元格点击回调 | ~~`Function(text, key, rowData, rowNumber, columnNumber)`~~ <br/> Function(data: IColumns, colNum: number, rowNum: number, evn: React.MouseEvent<HTMLTableCellElement>) `@3.0.0+` | - |
| onCell | 单元格点击回调 | ~~`Function(text, key, rowData, rowNumber, columnNumber)`~~ Function(data: IColumns, options:{ colNum: number, rowNum: number, keyName: string }, evn: React.MouseEvent<HTMLTableCellElement>) `@3.1.0+` | - |

### ColumnProps

列描述数据对象，是 columns 中的一项，

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| title | 列头显示文字。| ReactNode | - |
| key | 需要的 key，可以忽略这个属性，如果标题带有 `render` 函数，那么这个 `key` 为必须非常重要。| String | - |
| width | 列宽度。| Number | - |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前值的 `key`，行索引数据，当前行号，当前列号。| `Function(text, key, rowData, rowNumber, columnNumber)` | - |