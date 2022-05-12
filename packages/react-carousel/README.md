Carousel 走马灯
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-carousel/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-carousel.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-carousel)
[![npm version](https://img.shields.io/npm/v/@uiw/react-carousel.svg?label=@uiw/react-carousel)](https://npmjs.com/@uiw/react-carousel)

滚动播放。在 v4.15.0+ 添加。

```jsx
import { Carousel } from 'uiw';
// or
import Carousel from '@uiw/react-carousel';
```

## 基础用法

最简单的用法。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Carousel } from 'uiw';

function Demo() {
  return (
    <div style={{ display:'flex' }}>
      <Carousel>
        <div style={{ height: '100%', background: '#1EABCD' }}>
          <span>1</span>
        </div>
        <div style={{ height: '100%',  background: '#393b46' }}>
          <span>2</span>
        </div>
        <div style={{ height: '100%',  background: '#008EF0' }}>
          <span>3</span>
        </div>
        <div style={{ height: '100%',  background: '#393E48' }}>
          <span>4</span>
        </div>
      </Carousel>
      <span style={{marginLeft:10}}/>
      <Carousel direction="vertical" >
        <div style={{ height: '100%', background: '#1EABCD' }}>
          <span>1</span>
        </div>
        <div style={{ height: '100%',  background: '#393b46' }}>
          <span>2</span>
        </div>
        <div style={{ height: '100%',  background: '#008EF0' }}>
          <span>3</span>
        </div>
        <div style={{ height: '100%',  background: '#393E48' }}>
          <span>4</span>
        </div>
      </Carousel>
    </div>
  );
}

export default Demo
```

## 控制播放频率

palyTime设置每帧停留时间，scrollTime设置切换帧的速度

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Carousel } from 'uiw';

function Demo() {
  return (
    <Carousel palyTime={1000} scrollTime={500}>
      <div style={{ height: '100%', background: '#1EABCD' }}>
        <span>1</span>
      </div>
      <div style={{ height: '100%',  background: '#393b46' }}>
        <span>2</span>
      </div>
      <div style={{ height: '100%',  background: '#008EF0' }}>
        <span>3</span>
      </div>
      <div style={{ height: '100%',  background: '#393E48' }}>
        <span>4</span>
      </div>
    </Carousel>
  );
}

export default Demo
```

## 切换到指定帧

手动切换到指定帧的位置

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx mdx:preview
import React from 'react';
import { Carousel } from 'uiw';

function Demo() {

  const ref=React.useRef()
  const [autoPlay,autoPlaySet]=React.useState(true)

  return (
    <React.Fragment>
      <Carousel
        ref={ref}
        position={2}
        autoPlay={autoPlay}
        afterChange={(current)=>console.log('after',current)}
        beforeChange={(current)=>console.log('before',current)}
      >
        <div style={{ height: '100%', background: '#1EABCD' }}>
          <span>1</span>
        </div>
        <div style={{ height: '100%',  background: '#393b46' }}>
          <span>2</span>
        </div>
        <div style={{ height: '100%',  background: '#008EF0' }}>
          <span>3</span>
        </div>
        <div style={{ height: '100%',  background: '#393E48' }}>
          <span>4</span>
        </div>
      </Carousel>
      <button onClick={() => ref.current.gotoSlide(1)}>跳转</button>
      <button onClick={() => ref.current.prevSlide()}>上一张</button>
      <button onClick={() => ref.current.nextSlide()}>下一张</button>
      <button onClick={() =>autoPlaySet(autoPlay?false:true)}>{autoPlay?'暂停':'开始'}</button>
    </React.Fragment>
  );
}

export default Demo
```

## Props

## API

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| width | 宽度 | number | 400 |
| height | 高度 | number | 200 |
| position | 设置初始帧位置 | number | 0 |
| palyTime | 每帧停留时间(ms) | number | 2000 |
| scrollTime | 滚动动画的速度(ms) | number | 200 |
| autoPlay | 是否自动播放 | boolean | true |
| afterChange | 切换面板前的回调 | (current) => void | - |
| beforeChange | 切换面板后的回调 | (current) => void | - |
| direction | 滚动方位`horizontal`横向，`vertical`竖向 | horizontal \| vertical | horizontal |

### ref

```ts
  // 跳转到指定帧
  gotoSlide: (slideNumber: number) => void;
  // 上一针
  prevSlide: () => void;
  // 下一帧
  nextSlide: () => void;
  // 暂停播放
  stopPlay: () => void;
```


