"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9636],{69636:function(n,e,t){t.r(e),e.default="Carousel \u8d70\u9a6c\u706f\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-carousel/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-carousel.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-carousel)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-carousel.svg?label=@uiw/react-carousel)](https://npmjs.com/@uiw/react-carousel)\n\n\u6eda\u52a8\u64ad\u653e\u3002\u5728 v4.15.0+ \u6dfb\u52a0\u3002\n\n## \u57fa\u7840\u7528\u6cd5\n\n\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport { Carousel } from 'uiw';\n\nfunction Demo() {\n  return (\n    <Carousel>\n      <div style={{ height: '100%', background: '#1EABCD' }}>\n        <span>1</span>\n      </div>\n      <div style={{ height: '100%',  background: '#393b46' }}>\n        <span>2</span>\n      </div>\n      <div style={{ height: '100%',  background: '#008EF0' }}>\n        <span>3</span>\n      </div>\n      <div style={{ height: '100%',  background: '#393E48' }}>\n        <span>4</span>\n      </div>\n    </Carousel>\n  );\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u63a7\u5236\u64ad\u653e\u9891\u7387\n\npalyTime\u8bbe\u7f6e\u6bcf\u5e27\u505c\u7559\u65f6\u95f4\uff0cscrollTime\u8bbe\u7f6e\u5207\u6362\u5e27\u7684\u901f\u5ea6\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport { Carousel } from 'uiw';\n\nfunction Demo() {\n  return (\n    <Carousel palyTime={1000} scrollTime={500}>\n      <div style={{ height: '100%', background: '#1EABCD' }}>\n        <span>1</span>\n      </div>\n      <div style={{ height: '100%',  background: '#393b46' }}>\n        <span>2</span>\n      </div>\n      <div style={{ height: '100%',  background: '#008EF0' }}>\n        <span>3</span>\n      </div>\n      <div style={{ height: '100%',  background: '#393E48' }}>\n        <span>4</span>\n      </div>\n    </Carousel>\n  );\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u5207\u6362\u5230\u6307\u5b9a\u5e27\n\n\u624b\u52a8\u5207\u6362\u5230\u6307\u5b9a\u5e27\u7684\u4f4d\u7f6e\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport { Carousel } from 'uiw';\n\nfunction Demo() {\n\n  const ref=React.useRef()\n  const [autoPlay,autoPlaySet]=React.useState(true)\n\n  return (\n      <React.Fragment>\n        <Carousel ref={ref} position={2} autoPlay={autoPlay}>\n          <div style={{ height: '100%', background: '#1EABCD' }}>\n            <span>1</span>\n          </div>\n          <div style={{ height: '100%',  background: '#393b46' }}>\n            <span>2</span>\n          </div>\n          <div style={{ height: '100%',  background: '#008EF0' }}>\n            <span>3</span>\n          </div>\n          <div style={{ height: '100%',  background: '#393E48' }}>\n            <span>4</span>\n          </div>\n        </Carousel>\n        <button onClick={() => ref.current.gotoSlide(1)}>\u8df3\u8f6c</button>\n        <button onClick={() => ref.current.prevSlide()}>\u4e0a\u4e00\u5f20</button>\n        <button onClick={() => ref.current.nextSlide()}>\u4e0b\u4e00\u5f20</button>\n        <button onClick={() =>autoPlaySet(autoPlay?false:true)}>{autoPlay?'\u6682\u505c':'\u5f00\u59cb'}</button>\n      </React.Fragment>\n    );\n  }\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Props\n\n## API\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| width | \u5bbd\u5ea6 | number | 400 |\n| height | \u9ad8\u5ea6 | number | 200 |\n| position | \u8bbe\u7f6e\u521d\u59cb\u5e27\u4f4d\u7f6e | number | 0 |\n| palyTime | \u6bcf\u5e27\u505c\u7559\u65f6\u95f4(ms) | number | 2000 |\n| scrollTime | \u6eda\u52a8\u52a8\u753b\u7684\u901f\u5ea6(ms) | number | 200 |\n| autoPlay | \u662f\u5426\u81ea\u52a8\u64ad\u653e | boolean | true |\n\n\n### ref\n\n```ts\n  // \u8df3\u8f6c\u5230\u6307\u5b9a\u5e27\n  gotoSlide: (slideNumber: number) => void;\n  // \u4e0a\u4e00\u9488\n  prevSlide: () => void;\n  // \u4e0b\u4e00\u5e27\n  nextSlide: () => void;\n  // \u6682\u505c\u64ad\u653e\n  stopPlay: () => void;\n```\n\n\n"}}]);
//# sourceMappingURL=9636.609808d9.chunk.js.map