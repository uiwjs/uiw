(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7729],{4934:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=4934,e.exports=t},5301:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(8573),i=n(6320),o=n(8563),u=n(7622),s=n(7937);const a={docinfo:"index_docinfo__3Vx8S",markdown:"index_markdown__hcQCp",markdownWrap:"index_markdownWrap__t60jR"};var l=n(4760);function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{path:t}=e,n=/^http/.test(t||"")?t:"https://github.com/uiwjs/uiw/blob/master/".concat(t);return(0,l.jsxs)("div",{className:a.docinfo,children:["\u72af\u4e86\u9519\u8bef\u8fd8\u662f\u60f3\u5bf9\u6587\u4ef6\u505a\u51fa\u8d21\u732e\uff1f",n&&(0,l.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,l.jsx)("br",{}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/uiw/issues",target:"_blank",rel:"noopener noreferrer",children:"\u53cd\u9988\u5efa\u8bae"}),(0,l.jsx)(s.Divider,{type:"vertical"}),(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw/issues/new",children:"\u63d0\u4ea4bug"}),(0,l.jsx)(s.Divider,{type:"vertical"}),(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"Github"}),(0,l.jsx)(s.Divider,{type:"vertical"}),(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,l.jsx)(s.Divider,{type:"vertical"}),(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt-ssr",children:"@kkt/ssr"}),(0,l.jsx)(s.Divider,{type:"vertical"}),(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://uiw.gitee.io",children:"\u56fd\u5185\u955c\u50cf"})]})}const p=i.ZP.Preview,d=i.ZP.Code,h=i.ZP.Toolbar,m=e=>{var t,n;let{node:u,components:s,data:a,...c}=e;const m=(0,r.useRef)(null),{headings:w,headingsList:f,...j}=c;(0,r.useEffect)((()=>{if(m.current){const e=m.current.parentElement;e&&e.parentElement&&e.parentElement.replaceChild(m.current,e)}}),[m]);const g=null===u||void 0===u||null===(t=u.position)||void 0===t?void 0:t.start.line,k=null===u||void 0===u||null===(n=u.data)||void 0===n?void 0:n.meta,b=(0,o.Mx)(k)||String(g),x=s["".concat(b)];if(b&&"function"===typeof x){const e=a[b].value||"",t=(0,o.aE)(k||"");return(0,l.jsxs)(i.ZP,{ref:m,children:[(0,l.jsx)(p,{style:{background:t.bg||"transparent"},children:(0,l.jsx)(x,{})}),(0,l.jsx)(h,{text:e,children:t.title||"Example"}),(0,l.jsx)(d,{children:(0,l.jsx)("pre",{...j})})]})}return(0,l.jsx)("code",{...j})};function w(e){return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(u.Z,{className:a.markdownWrap,source:e.source||"",disableCopy:!0,wrapperElement:{"data-color-mode":"light"},components:{code:t=>(0,l.jsx)(m,{...e,...t})}}),(0,l.jsx)(c,{path:e.path})]})}},9816:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});const r={components:{19:function(){var e,t=(e=n(8573))&&e.__esModule?e:{default:e},r=n(7937);return function(){return t.default.createElement("div",null,t.default.createElement(r.AutoLink,{text:"uiw uiwjs uiw https://github.com/uiwjs uiwjs http://github.com/uiwjs",target:"__blank"}))}}()},data:{19:{name:19,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _uiw = require("uiw");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.AutoLink, {\n    text: "uiw uiwjs uiw https://github.com/uiwjs uiwjs http://github.com/uiwjs",\n    target: "__blank"\n  }));\n};',language:"jsx",value:"import React from 'react';\nimport { AutoLink } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <AutoLink\n        text=\"uiw uiwjs uiw https://github.com/uiwjs uiwjs http://github.com/uiwjs\"\n        target=\"__blank\"\n      />\n    </div>\n  )\n}"}},source:"AutoLink \u6587\u672c\u8d85\u94fe\u63a5\n===\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-auto-link/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-auto-link.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-auto-link)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-auto-link.svg?label=@uiw/react-auto-link)](https://npmjs.com/@uiw/react-auto-link)\n\n\u5c06\u5b57\u7b26\u4e32\u5448\u73b0\u4e3a\u7eaf\u6587\u672c\uff0c\u5e76\u5c06 URL \u8f6c\u6362\u4e3a\u9002\u5f53\u7684\u94fe\u63a5\u5143\u7d20\u3002\n\n```jsx\nimport { AutoLink } from 'uiw';\n// or\nimport AutoLink from '@uiw/react-auto-link';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n```jsx mdx:preview\nimport React from 'react';\nimport { AutoLink } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <AutoLink\n        text=\"uiw uiwjs uiw https://github.com/uiwjs uiwjs http://github.com/uiwjs\"\n        target=\"__blank\"\n      />\n    </div>\n  )\n}\n```\n\n## API\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| --------- | -------- | --------- | -------- |\n| text | \u9700\u8981\u5904\u7406\u7684\u6587\u672c | String | - |\n",headings:[],headingsList:[]};var i=n(5301),o=n(4760);function u(){return(0,o.jsx)(i.Z,{...r,path:"https://github.com/uiwjs/uiw/tree/master/packages/react-auto-link/README.md"})}}}]);
//# sourceMappingURL=7729.9da408a2.chunk.js.map