(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4186],{4934:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4934,e.exports=t},3173:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(189),o=n(3782),i=n(1473),u=n(7963),a=n(5142),f=n(2409),s=n(6131),c="index_docinfo__3Vx8S",l=n(9286);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.path,n=/^http/.test(t||"")?t:"https://github.com/uiwjs/uiw/blob/master/".concat(t);return(0,l.jsxs)("div",{className:c,children:["\u72af\u4e86\u9519\u8bef\u8fd8\u662f\u60f3\u5bf9\u6587\u4ef6\u505a\u51fa\u8d21\u732e\uff1f",n&&(0,l.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,l.jsx)("br",{}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/uiw/issues",target:"_blank",rel:"noopener noreferrer",children:"\u53cd\u9988\u5efa\u8bae"}),(0,l.jsx)(s.Divider,{type:"vertical"}),(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw/issues/new",children:"\u63d0\u4ea4bug"}),(0,l.jsx)(s.Divider,{type:"vertical"}),(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"Github"}),(0,l.jsx)(s.Divider,{type:"vertical"}),(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,l.jsx)(s.Divider,{type:"vertical"}),(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt-ssr",children:"@kkt/ssr"}),(0,l.jsx)(s.Divider,{type:"vertical"}),(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://uiw.gitee.io",children:"\u56fd\u5185\u955c\u50cf"})]})}var m=["inline","node","components","data"],d=["data-meta"],x=function(e){var t,n=e.inline,f=e.node,s=e.components,c=e.data,p=(0,o.Z)(e,m),x=(0,i.useRef)(null),h=p,g=h["data-meta"],_=(0,o.Z)(h,d);if((0,i.useEffect)((function(){if(x.current){var e=x.current.parentElement;e&&e.parentElement&&e.parentElement.replaceChild(x.current,e)}}),[x]),n||!(0,a.pN)(g))return(0,l.jsx)("code",(0,r.Z)({},p));var b=null===(t=f.position)||void 0===t?void 0:t.start.line,j=(0,a.Mx)(g)||String(b),w=s["".concat(j)];if(j&&"function"===typeof w){var v=c[j].value||"",E=(0,a.aE)(g);return(0,l.jsx)(u.Z,{ref:x,background:E.bg||E.background,disableCode:"true"===E.nocode,disableToolbar:"true"===E.toolbar,style:{marginBottom:10},toolbar:E.title||"Example",code:(0,l.jsx)("pre",(0,r.Z)({},_)),text:v,children:(0,l.jsx)(w,{})})}return(0,l.jsx)("code",(0,r.Z)({},_))};function h(e){return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(f.Z,{source:e.source||"",disableCopy:!0,warpperElement:{"data-color-mode":"light"},components:{code:function(t){return(0,l.jsx)(x,(0,r.Z)((0,r.Z)({},t),e))}}}),(0,l.jsx)(p,{path:e.path})]})}},6376:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(189),o={components:{18:function(){var e,t=(e=n(1473))&&e.__esModule?e:{default:e},r=n(6131);return function(){return t.default.createElement(r.Affix,{offsetTop:60},t.default.createElement(r.Button,{type:"primary"},"1 \u5f53\u6309\u94ae\u8ddd\u79bb\u9876\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u9876\u90e8"))}}(),35:function(){var e,t=(e=n(1473))&&e.__esModule?e:{default:e},r=n(6131);return function(){return t.default.createElement(r.Affix,{offsetBottom:10,onChange:function(e){console.log("affixed::",e)}},t.default.createElement(r.Button,{type:"primary",style:{marginLeft:20}},"2 \u5f53\u6309\u94ae\u8ddd\u79bb\u5e95\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u5e95\u90e8"))}}()},data:{18:{name:18,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Affix, {\n    offsetTop: 60\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    type: "primary"\n  }, "1 \\u5F53\\u6309\\u94AE\\u8DDD\\u79BB\\u9876\\u90E8\\u8DDD\\u79BB\\u4E3A 0\\uFF0C\\u6309\\u94AE\\u88AB\\u9489\\u5728\\u9876\\u90E8"));\n};',language:"jsx",value:"import React from 'react';\nimport { Affix, Button } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <Affix offsetTop={60}>\n      <Button type=\"primary\">1 \u5f53\u6309\u94ae\u8ddd\u79bb\u9876\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u9876\u90e8</Button>\n    </Affix>\n  )\n}"},35:{name:35,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Affix, {\n    offsetBottom: 10,\n    onChange: function onChange(affixed) {\n      console.log(\'affixed::\', affixed);\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    type: "primary",\n    style: {\n      marginLeft: 20\n    }\n  }, "2 \\u5F53\\u6309\\u94AE\\u8DDD\\u79BB\\u5E95\\u90E8\\u8DDD\\u79BB\\u4E3A 0\\uFF0C\\u6309\\u94AE\\u88AB\\u9489\\u5728\\u5E95\\u90E8"));\n};',language:"jsx",value:"import React from 'react';\nimport { Affix, Button } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <Affix offsetBottom={10} onChange={(affixed) => {\n      console.log('affixed::', affixed);\n    }}>\n      <Button type=\"primary\" style={{ marginLeft: 20 }}>2 \u5f53\u6309\u94ae\u8ddd\u79bb\u5e95\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u5e95\u90e8</Button>\n    </Affix>\n  )\n}"}},source:"Affix \u56fe\u9489\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-affix/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-affix.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-affix)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-affix.svg?label=@uiw/react-affix)](https://npmjs.com/@uiw/react-affix)\n\n\u4f7f\u7528\u56fe\u9489\uff0c\u53ef\u4ee5\u5c06\u5185\u5bb9\u56fa\u5b9a\u5728\u5c4f\u5e55\u53ef\u89c6\u8303\u56f4\uff0c\u5e76\u4e14\u4e0d\u968f\u9875\u9762\u7684\u6eda\u52a8\u800c\u6eda\u52a8\uff0c\u5e38\u7528\u4e8e\u83dc\u5355\u7b49\u3002\n\n```jsx\nimport { Affix } from 'uiw';\n// or\nimport Affix from '@uiw/react-affix';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n \n```jsx mdx:preview\nimport React from 'react';\nimport { Affix, Button } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <Affix offsetTop={60}>\n      <Button type=\"primary\">1 \u5f53\u6309\u94ae\u8ddd\u79bb\u9876\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u9876\u90e8</Button>\n    </Affix>\n  )\n}\n```\n\n### \u9489\u5728\u5e95\u90e8\n\n\u8fd9\u4e2a\u5b9e\u4f8b\u9700\u8981\u4f60\u7f29\u5c0f\u7a97\u53e3\u9ad8\u5ea6\uff0c\u5c31\u53ef\u4ee5\u6d4b\u8bd5\u770b\u6548\u679c\u5566\u3002\n\n```jsx mdx:preview\nimport React from 'react';\nimport { Affix, Button } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <Affix offsetBottom={10} onChange={(affixed) => {\n      console.log('affixed::', affixed);\n    }}>\n      <Button type=\"primary\" style={{ marginLeft: 20 }}>2 \u5f53\u6309\u94ae\u8ddd\u79bb\u5e95\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u5e95\u90e8</Button>\n    </Affix>\n  )\n}\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| offsetBottom | \t\u8ddd\u79bb\u7a97\u53e3\u5e95\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1 | Number| - |\n| offsetTop | \t\u8ddd\u79bb\u7a97\u53e3\u9876\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1 | Number| - |\n| onChange | \t\t\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570 | Function(affixed) | - |\n"},i=n(3173),u=n(9286);function a(){return(0,u.jsx)(i.Z,(0,r.Z)((0,r.Z)({},o),{},{path:"https://github.com/uiwjs/uiw/tree/master/packages/react-affix/README.md"}))}}}]);
//# sourceMappingURL=4186.9610a2ae.chunk.js.map