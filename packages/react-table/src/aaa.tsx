import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from '../../uiw';

const columns = [
  {
    // title: '姓名',
    width: 90008,
    ellipsis: true,
    // title: ({ key }) => {
    //   return (
    //     <span>字段: {key}</span>
    //   )
    // },
    key: 'name',
  },
  {
    title: '年龄',
    style: { color: 'red' },
    width: 100,
    key: 'age',
  },
];
const dataSource = [
  {
    name: '邓紫棋',
    age: '12',
    info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。',
    edit: '',
  },
  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
];
const Demo = () => (
  <div>
    <Table
      columns={columns}
      scroll={{ x: 100, y: 100 }}
      data={dataSource}
      footer={<div style={{ background: 'red', height: 20 }}></div>}
    />
  </div>
);
