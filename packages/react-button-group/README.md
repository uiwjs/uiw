ButtonGroup 按钮组
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-button-group/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-button-group.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-button-group)
[![npm version](https://img.shields.io/npm/v/@uiw/react-button-group.svg?label=@uiw/react-button-group)](https://npmjs.com/@uiw/react-button-group)

按钮用于开始一个即时操作，触发业务逻辑时使用。

```jsx
import { Button, ButtonGroup } from 'uiw';
// or
import Button from '@uiw/react-button';
import ButtonGroup from '@uiw/react-button-group';
```

### 基本用法

```jsx mdx:preview&codeSandbox=true&codePen=true
import React from 'react';
import { Button, Divider, ButtonGroup } from 'uiw';

function Demo() {
  return <div>
    <ButtonGroup>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">错误按钮</Button>
      <Button type="light">亮按钮</Button>
      <Button type="dark">暗按钮</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button size="small" type="primary">按钮</Button>
      <Button size="small" type="primary">按钮</Button>
      <Button size="small" type="primary">按钮</Button>
      <Button size="small" type="primary">按钮</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button type="light">按钮</Button>
      <Button type="light">按钮</Button>
      <Button type="light">按钮</Button>
      <Button type="light">按钮</Button>
    </ButtonGroup>
    <Divider style={{ maxWidth: 220 }}>添加图标</Divider>
    <ButtonGroup>
      <Button icon="copy" type="primary">复制</Button>
      <Button icon="delete" type="success">删除</Button>
      <Button icon="file-add" type="warning">添加文件</Button>
      <Button icon="map" type="danger">地图</Button>
      <Button icon="linux" type="light">Linux</Button>
      <Button icon="apple" type="dark">Apple</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button icon="copy" type="primary">复制</Button>
      <Button icon="delete" type="primary">删除</Button>
      <Button icon="file-add" type="primary">添加文件</Button>
      <Button icon="map" type="primary">地图</Button>
      <Button icon="linux" type="primary">Linux</Button>
      <Button icon="apple" type="primary">Apple</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button icon="copy">复制</Button>
      <Button icon="delete">删除</Button>
      <Button icon="file-add">添加文件</Button>
      <Button icon="map">地图</Button>
      <Button icon="linux">Linux</Button>
      <Button icon="apple">Apple</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginTop: 5 }}>
      <Button icon="copy" />
      <Button icon="delete" />
      <Button icon="file-add" />
      <Button icon="map" />
      <Button icon="linux" />
      <Button icon="apple" />
    </ButtonGroup>
  </div>
}

export default Demo
```

## Props

### Button.Group

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| vertical | 竖排列 | Boolean | `false` |