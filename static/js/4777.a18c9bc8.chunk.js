(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4777],{4934:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4934,e.exports=t},3173:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(189),a=r(3782),o=r(1473),c=r(7963),i=r(5142),s=r(2409),p=r(6131),u="index_docinfo__3Vx8S",h=r(9286);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.path,r=/^http/.test(t||"")?t:"https://github.com/uiwjs/uiw/blob/master/".concat(t);return(0,h.jsxs)("div",{className:u,children:["\u72af\u4e86\u9519\u8bef\u8fd8\u662f\u60f3\u5bf9\u6587\u4ef6\u505a\u51fa\u8d21\u732e\uff1f",r&&(0,h.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,h.jsx)("br",{}),(0,h.jsx)("a",{href:"https://github.com/uiwjs/uiw/issues",target:"_blank",rel:"noopener noreferrer",children:"\u53cd\u9988\u5efa\u8bae"}),(0,h.jsx)(p.Divider,{type:"vertical"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw/issues/new",children:"\u63d0\u4ea4bug"}),(0,h.jsx)(p.Divider,{type:"vertical"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"Github"}),(0,h.jsx)(p.Divider,{type:"vertical"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,h.jsx)(p.Divider,{type:"vertical"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt-ssr",children:"@kkt/ssr"}),(0,h.jsx)(p.Divider,{type:"vertical"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://uiw.gitee.io",children:"\u56fd\u5185\u955c\u50cf"})]})}var d=["inline","node","components","data"],b=["data-meta"],f=function(e){var t,r=e.inline,s=e.node,p=e.components,u=e.data,l=(0,a.Z)(e,d),f=(0,o.useRef)(null),m=l,k=m["data-meta"],g=(0,a.Z)(m,b);if((0,o.useEffect)((function(){if(f.current){var e=f.current.parentElement;e&&e.parentElement&&e.parentElement.replaceChild(f.current,e)}}),[f]),r||!(0,i.pN)(k))return(0,h.jsx)("code",(0,n.Z)({},l));var j=null===(t=s.position)||void 0===t?void 0:t.start.line,x=(0,i.Mx)(k)||String(j),w=p["".concat(x)];if(x&&"function"===typeof w){var v=u[x].value||"",y=(0,i.aE)(k);return(0,h.jsx)(c.Z,{ref:f,background:y.bg||y.background,disableCode:"true"===y.nocode,disableToolbar:"true"===y.toolbar,style:{marginBottom:10},toolbar:y.title||"Example",code:(0,h.jsx)("pre",(0,n.Z)({},g)),text:v,children:(0,h.jsx)(w,{})})}return(0,h.jsx)("code",(0,n.Z)({},g))};function m(e){return(0,h.jsxs)(o.Fragment,{children:[(0,h.jsx)(s.Z,{source:e.source||"",disableCopy:!0,warpperElement:{"data-color-mode":"light"},components:{code:function(t){return(0,h.jsx)(f,(0,n.Z)((0,n.Z)({},t),e))}}}),(0,h.jsx)(l,{path:e.path})]})}},6281:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(189),a={components:{},data:{},source:"\u5728 Create React App \u4e2d\u4f7f\u7528\n===\n\n\u8981\u5f00\u59cb\u4f7f\u7528 [uiw](https://github.com/uiwjs/uiw) \u548c [Create React App](https://github.com/facebook/create-react-app) (CRA)\uff0c\u6b64\u65f6\u6211\u4eec\u9700\u8981\u5bf9 [create-react-app](https://github.com/facebook/create-react-app) \u7684\u9ed8\u8ba4\u914d\u7f6e\u8fdb\u884c\u81ea\u5b9a\u4e49\uff0c\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 [react-app-rewired](https://github.com/timarney/react-app-rewired) \uff08\u4e00\u4e2a\u5bf9 [create-react-app](https://github.com/facebook/create-react-app) \u8fdb\u884c\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u793e\u533a\u89e3\u51b3\u65b9\u6848\uff09\u3002\n\n> \u4e5f\u53ef\u4ee5\u4f7f\u7528 [`kkt@6x`](https://github.com/kktjs/kkt) \u65b0\u7684\u7248\u672c\uff0c\u662f\u57fa\u4e8e [create-react-app@3x](https://github.com/facebook/create-react-app) \u8f7b\u5ea6\u7ef4\u62a4\u57fa\u4e8e `TypeScript` \u91cd\u5199\u7684\u7248\u672c\uff0c\u6b64\u5de5\u5177\u53ef\u4ee5\u5728\u4e0d `eject` \u4e5f\u4e0d\u521b\u5efa\u989d\u5916 react-scripts \u7684\u60c5\u51b5\u4e0b\u4fee\u6539 [create-react-app@3x](https://github.com/facebook/create-react-app) \u5185\u7f6e\u7684 webpack \u914d\u7f6e\uff0c\u7136\u540e\u4f60\u5c06\u62e5\u6709 [create-react-app](https://github.com/facebook/create-react-app) \u7684\u4e00\u5207\u7279\u6027\uff0c\u4e14\u53ef\u4ee5\u6839\u636e\u4f60\u7684\u9700\u8981\u53bb\u914d\u7f6e `webpack` \u7684 `plugins`, `loaders` \u7b49\uff0c\u8fd9\u91cc\u662f [kkt \u4f7f\u7528\u6559\u7a0b](#kkt)\u3002\n\n\u8bf7\u6309\u7167\u4e0b\u5217\u6b65\u9aa4\u64cd\u4f5c\uff1a\n\n1. \u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Node LTS\u3002 [\u8bf7\u53c2\u9605\u6b64\u5904\u83b7\u53d6\u8bf4\u660e](https://docs.npmjs.com/getting-started/installing-node)\n2. \u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u65b0\u7684 `CRA` \u9879\u76ee\uff1a\n\n```bash\nnpx create-react-app my-app\n```\n\n\u6b64\u65f6\uff0c\u60a8\u5c06\u80fd\u591f\u5728\u672c\u5730\u542f\u52a8\u9ed8\u8ba4 `CRA` \u5e94\u7528\u7a0b\u5e8f\uff1a\n\n```bash\ncd my-app\nyarn start\n```\n\n\u6709\u5173 Create React App \u7684\u66f4\u591a\u4fe1\u606f\uff0c[\u8bf7\u53c2\u9605CRA\u81ea\u8ff0\u6587\u4ef6](https://github.com/facebook/create-react-app)\u3002\n\n3. \u5b89\u88c5 [uiw](https://github.com/uiwjs/uiw) \u5305\uff1a\n\n```bash\nyarn add uiw\n```\n\n4. \u6253\u5f00 `src/App.js` \u5e76\u5c06\u5185\u5bb9\u66ff\u6362\u4e3a\uff1a\n\n```jsx\nimport React, { Component } from 'react';\nimport { Button } from 'uiw';\n\nexport default class App extends Component {\n  render() {\n    return <Button size=\"small\" type=\"primary\">Click Me</Button>;\n  }\n}\n```"},o=r(3173),c=r(9286);function i(){return(0,c.jsx)(o.Z,(0,n.Z)((0,n.Z)({},a),{},{path:"https://github.com/uiwjs/uiw/tree/master/website/src/routes/guide/create-react-app/README.md"}))}}}]);
//# sourceMappingURL=4777.a18c9bc8.chunk.js.map