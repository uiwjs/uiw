(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3372],{4934:function(n){function t(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4934,n.exports=t},3173:function(n,t,e){"use strict";e.d(t,{Z:function(){return g}});var o=e(189),i=e(3782),u=e(1473),r=e(7963),c=e(5142),l=e(2409),a=e(6131),f="index_docinfo__3Vx8S",p=e(9286);function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.path,e=/^http/.test(t||"")?t:"https://github.com/uiwjs/uiw/blob/master/".concat(t);return(0,p.jsxs)("div",{className:f,children:["\u72af\u4e86\u9519\u8bef\u8fd8\u662f\u60f3\u5bf9\u6587\u4ef6\u505a\u51fa\u8d21\u732e\uff1f",e&&(0,p.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,p.jsx)("br",{}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/uiw/issues",target:"_blank",rel:"noopener noreferrer",children:"\u53cd\u9988\u5efa\u8bae"}),(0,p.jsx)(a.Divider,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw/issues/new",children:"\u63d0\u4ea4bug"}),(0,p.jsx)(a.Divider,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"Github"}),(0,p.jsx)(a.Divider,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,p.jsx)(a.Divider,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt-ssr",children:"@kkt/ssr"}),(0,p.jsx)(a.Divider,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://uiw.gitee.io",children:"\u56fd\u5185\u955c\u50cf"})]})}var d=["inline","node","components","data"],m=["data-meta"],_=function(n){var t,e=n.inline,l=n.node,a=n.components,f=n.data,s=(0,i.Z)(n,d),_=(0,u.useRef)(null),g=s,y=g["data-meta"],B=(0,i.Z)(g,m);if((0,u.useEffect)((function(){if(_.current){var n=_.current.parentElement;n&&n.parentElement&&n.parentElement.replaceChild(_.current,n)}}),[_]),e||!(0,c.pN)(y))return(0,p.jsx)("code",(0,o.Z)({},s));var w=null===(t=l.position)||void 0===t?void 0:t.start.line,k=(0,c.Mx)(y)||String(w),E=a["".concat(k)];if(k&&"function"===typeof E){var b=f[k].value||"",N=(0,c.aE)(y);return(0,p.jsx)(r.Z,{ref:_,background:N.bg||N.background,disableCode:"true"===N.nocode,disableToolbar:"true"===N.toolbar,style:{marginBottom:10},toolbar:N.title||"Example",code:(0,p.jsx)("pre",(0,o.Z)({},B)),text:b,children:(0,p.jsx)(E,{})})}return(0,p.jsx)("code",(0,o.Z)({},B))};function g(n){return(0,p.jsxs)(u.Fragment,{children:[(0,p.jsx)(l.Z,{source:n.source||"",disableCopy:!0,warpperElement:{"data-color-mode":"light"},components:{code:function(t){return(0,p.jsx)(_,(0,o.Z)((0,o.Z)({},t),n))}}}),(0,p.jsx)(s,{path:n.path})]})}},6755:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var o=e(189),i={components:{18:function(){var n,t=(n=e(1473))&&n.__esModule?n:{default:n},o=e(6131);return function(){return t.default.createElement("div",null,t.default.createElement(o.Button,{onClick:function(){o.Notify.open({title:"\u6253\u5f00\u901a\u77e5",description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\uff0c\u6ca1\u6709\u72b6\u6001\u989c\u8272\u56fe\u6807\u3002"})}},"\u6253\u5f00\u901a\u77e5"),t.default.createElement(o.Button,{type:"success",onClick:function(){o.Notify.success({title:"\u6210\u529f\u901a\u77e5",description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"})}},"\u6210\u529f\u901a\u77e5"),t.default.createElement(o.Button,{type:"warning",onClick:function(){o.Notify.warning({title:"\u8b66\u544a\u901a\u77e5",description:"\u8fd9\u662f\u4e00\u4e2a\u8b66\u544a\u901a\u77e5\uff0c\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"})}},"\u8b66\u544a\u901a\u77e5"),t.default.createElement(o.Button,{type:"primary",onClick:function(){o.Notify.info({title:"\u8bf4\u660e\u901a\u77e5",description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"})}},"\u8bf4\u660e\u901a\u77e5"),t.default.createElement(o.Button,{type:"danger",onClick:function(){o.Notify.error({title:"\u9519\u8bef\u901a\u77e5",description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"})}},"\u9519\u8bef\u901a\u77e5"))}}(),75:function(){var n,t=(n=e(1473))&&n.__esModule?n:{default:n},o=e(6131);return function(){return t.default.createElement("div",null,t.default.createElement(o.Button,{onClick:function(){o.Notify.success({placement:"topLeft",title:"\u6210\u529f\u901a\u77e5",description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"})}},"\u2196\u4e0a\u5de6\u5f39\u51fa\u901a\u77e5"),t.default.createElement(o.Button,{onClick:function(){o.Notify.warning({placement:"topRight",title:"\u8b66\u544a\u901a\u77e5",description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002",onClose:function(){console.log("~~~~>")}})}},"\u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5"),t.default.createElement(o.Button,{onClick:function(){o.Notify.info({placement:"bottomLeft",title:"\u8bf4\u660e\u901a\u77e5",description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"})}},"\u2199\u4e0b\u5de6\u5f39\u51fa\u901a\u77e5"),t.default.createElement(o.Button,{onClick:function(){o.Notify.error({placement:"bottomRight",title:"\u9519\u8bef\u901a\u77e5",description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"})}},"\u2198\u4e0b\u53f3\u901a\u77e5"))}}(),124:function(){var n,t=(n=e(1473))&&n.__esModule?n:{default:n},o=e(6131);return function(){return t.default.createElement("div",null,t.default.createElement(o.Button,{onClick:function(){o.Notify.success({placement:"topRight",title:"\u8b66\u544a\u901a\u77e5",duration:null,description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u5f39\u51fa\u901a\u77e5\u4e0d\u6d88\u5931\u3002"})}},"\u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5"))}}(),150:function(){var n,t=(n=e(1473))&&n.__esModule?n:{default:n},o=e(6131);return function(){return t.default.createElement("div",null,t.default.createElement(o.Button,{onClick:function(){o.Notify.warning({placement:"topRight",duration:null,description:"\u6807\u9898\u4e0d\u5c55\u793a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5173\u95ed\u6309\u94ae\u5173\u95ed\u3002"})}},"\u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5"),t.default.createElement(o.Button,{onClick:function(){o.Notify.info({placement:"bottomLeft",description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"})}},"\u2199\u4e0b\u5de6\u5f39\u51fa\u901a\u77e5"),t.default.createElement(o.Button,{onClick:function(){o.Notify.error({placement:"bottomRight",description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"})}},"\u2198\u4e0b\u53f3\u901a\u77e5"))}}(),189:function(){var n,t=(n=e(1473))&&n.__esModule?n:{default:n},o=e(6131);return function(){return t.default.createElement("div",null,t.default.createElement(o.Button,{onClick:function(){o.Notify.warning({placement:"topRight",duration:null,title:"\u8b66\u544a\u901a\u77e5\uff0c\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u53ea\u5c55\u793a\u6807\u9898\uff0c\u70b9\u51fb\u6309\u94ae\u5173\u95ed\u3002"})}},"\u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5"))}}(),214:function(){var n,t=(n=e(1473))&&n.__esModule?n:{default:n},o=e(6131);return function(){return t.default.createElement("div",null,t.default.createElement(o.Button,{onClick:function(){o.Notify.error({placement:"bottomRight",icon:null,description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"})}},"\u2198\u4e0b\u53f3\u901a\u77e5"),t.default.createElement(o.Button,{onClick:function(){o.Notify.success({placement:"topRight",title:"\u8b66\u544a\u901a\u77e5",icon:null,duration:null,description:"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"})}},"\u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5"))}}()},data:{18:{name:18,meta:{bg:"#fff"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.open({\n        title: \'\u6253\u5f00\u901a\u77e5\',\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\uff0c\u6ca1\u6709\u72b6\u6001\u989c\u8272\u56fe\u6807\u3002\'\n      });\n    }\n  }, "\\u6253\\u5F00\\u901A\\u77E5"), /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    type: "success",\n    onClick: function onClick() {\n      _uiw.Notify.success({\n        title: \'\u6210\u529f\u901a\u77e5\',\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u6210\\u529F\\u901A\\u77E5"), /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    type: "warning",\n    onClick: function onClick() {\n      _uiw.Notify.warning({\n        title: \'\u8b66\u544a\u901a\u77e5\',\n        description: \'\u8fd9\u662f\u4e00\u4e2a\u8b66\u544a\u901a\u77e5\uff0c\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u8B66\\u544A\\u901A\\u77E5"), /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    type: "primary",\n    onClick: function onClick() {\n      _uiw.Notify.info({\n        title: \'\u8bf4\u660e\u901a\u77e5\',\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u8BF4\\u660E\\u901A\\u77E5"), /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    type: "danger",\n    onClick: function onClick() {\n      _uiw.Notify.error({\n        title: \'\u9519\u8bef\u901a\u77e5\',\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u9519\\u8BEF\\u901A\\u77E5"));\n};',language:"jsx",value:"import React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.open({ title: '\u6253\u5f00\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\uff0c\u6ca1\u6709\u72b6\u6001\u989c\u8272\u56fe\u6807\u3002' });\n        }}\n      >\n        \u6253\u5f00\u901a\u77e5\n      </Button>\n      <Button\n        type=\"success\"\n        onClick={() => {\n          Notify.success({ title: '\u6210\u529f\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u6210\u529f\u901a\u77e5\n      </Button>\n      <Button\n        type=\"warning\"\n        onClick={() => {\n          Notify.warning({\n            title: '\u8b66\u544a\u901a\u77e5',\n            description: '\u8fd9\u662f\u4e00\u4e2a\u8b66\u544a\u901a\u77e5\uff0c\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002'\n          });\n        }}\n      >\n        \u8b66\u544a\u901a\u77e5\n      </Button>\n      <Button\n        type=\"primary\"\n        onClick={() => {\n          Notify.info({ title: '\u8bf4\u660e\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u8bf4\u660e\u901a\u77e5\n      </Button>\n      <Button\n        type=\"danger\"\n        onClick={() => {\n          Notify.error({ title: '\u9519\u8bef\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u9519\u8bef\u901a\u77e5\n      </Button>\n    </div>\n  );\n}"},75:{name:75,meta:{bg:"#fff"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.success({\n        placement: \'topLeft\',\n        title: \'\u6210\u529f\u901a\u77e5\',\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u2196\\u4E0A\\u5DE6\\u5F39\\u51FA\\u901A\\u77E5"), /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.warning({\n        placement: \'topRight\',\n        title: \'\u8b66\u544a\u901a\u77e5\',\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\',\n        onClose: function onClose() {\n          console.log(\'~~~~>\');\n        }\n      });\n    }\n  }, "\\u2197\\u4E0A\\u53F3\\u5F39\\u51FA\\u901A\\u77E5"), /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.info({\n        placement: \'bottomLeft\',\n        title: \'\u8bf4\u660e\u901a\u77e5\',\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u2199\\u4E0B\\u5DE6\\u5F39\\u51FA\\u901A\\u77E5"), /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.error({\n        placement: \'bottomRight\',\n        title: \'\u9519\u8bef\u901a\u77e5\',\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u2198\\u4E0B\\u53F3\\u901A\\u77E5"));\n};',language:"jsx",value:"import React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.success({ placement: 'topLeft', title: '\u6210\u529f\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2196\u4e0a\u5de6\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.warning({\n            placement: 'topRight',\n            title: '\u8b66\u544a\u901a\u77e5',\n            description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002',\n            onClose: () => {\n              console.log('~~~~>')\n            }\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.info({ placement: 'bottomLeft', title: '\u8bf4\u660e\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2199\u4e0b\u5de6\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.error({ placement: 'bottomRight', title: '\u9519\u8bef\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2198\u4e0b\u53f3\u901a\u77e5\n      </Button>\n    </div>\n  );\n}"},124:{name:124,meta:{bg:"#fff"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.success({\n        placement: \'topRight\',\n        title: \'\u8b66\u544a\u901a\u77e5\',\n        duration: null,\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u5f39\u51fa\u901a\u77e5\u4e0d\u6d88\u5931\u3002\'\n      });\n    }\n  }, "\\u2197\\u4E0A\\u53F3\\u5F39\\u51FA\\u901A\\u77E5"));\n};',language:"jsx",value:"import React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.success({\n            placement: 'topRight',\n            title: '\u8b66\u544a\u901a\u77e5',\n            duration: null,\n            description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u5f39\u51fa\u901a\u77e5\u4e0d\u6d88\u5931\u3002'\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n    </div>\n  );\n}"},150:{name:150,meta:{bg:"#fff"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.warning({\n        placement: \'topRight\',\n        duration: null,\n        description: \'\u6807\u9898\u4e0d\u5c55\u793a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5173\u95ed\u6309\u94ae\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u2197\\u4E0A\\u53F3\\u5F39\\u51FA\\u901A\\u77E5"), /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.info({\n        placement: \'bottomLeft\',\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u2199\\u4E0B\\u5DE6\\u5F39\\u51FA\\u901A\\u77E5"), /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.error({\n        placement: \'bottomRight\',\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u2198\\u4E0B\\u53F3\\u901A\\u77E5"));\n};',language:"jsx",value:"import React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.warning({\n            placement: 'topRight',\n            duration: null,\n            description: '\u6807\u9898\u4e0d\u5c55\u793a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5173\u95ed\u6309\u94ae\u5173\u95ed\u3002',\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.info({ placement: 'bottomLeft', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2199\u4e0b\u5de6\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.error({ placement: 'bottomRight', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2198\u4e0b\u53f3\u901a\u77e5\n      </Button>\n    </div>\n  );\n}"},189:{name:189,meta:{bg:"#fff"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.warning({\n        placement: \'topRight\',\n        duration: null,\n        title: \'\u8b66\u544a\u901a\u77e5\uff0c\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u53ea\u5c55\u793a\u6807\u9898\uff0c\u70b9\u51fb\u6309\u94ae\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u2197\\u4E0A\\u53F3\\u5F39\\u51FA\\u901A\\u77E5"));\n};',language:"jsx",value:"import React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.warning({\n            placement: 'topRight',\n            duration: null,\n            title: '\u8b66\u544a\u901a\u77e5\uff0c\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u53ea\u5c55\u793a\u6807\u9898\uff0c\u70b9\u51fb\u6309\u94ae\u5173\u95ed\u3002',\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n    </div>\n  );\n}"},214:{name:214,meta:{bg:"#fff"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.error({\n        placement: \'bottomRight\',\n        icon: null,\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u2198\\u4E0B\\u53F3\\u901A\\u77E5"), /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    onClick: function onClick() {\n      _uiw.Notify.success({\n        placement: \'topRight\',\n        title: \'\u8b66\u544a\u901a\u77e5\',\n        icon: null,\n        duration: null,\n        description: \'\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\'\n      });\n    }\n  }, "\\u2197\\u4E0A\\u53F3\\u5F39\\u51FA\\u901A\\u77E5"));\n};',language:"jsx",value:"import React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.error({ placement: 'bottomRight', icon: null, description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2198\u4e0b\u53f3\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.success({\n            placement: 'topRight',\n            title: '\u8b66\u544a\u901a\u77e5',\n            icon: null,\n            duration: null,\n            description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002'\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n    </div>\n  );\n}"}},source:"Notify \u6d88\u606f\u901a\u77e5\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-notify/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-notify.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-notify)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-notify.svg?label=@uiw/react-notify)](https://npmjs.com/@uiw/react-notify)\n\n\u5168\u5c40\u5c55\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002\n\n```jsx\nimport { Notify } from 'uiw';\n// or\nimport Notify from '@uiw/react-notify';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n```jsx mdx:preview&bg=#fff\nimport React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.open({ title: '\u6253\u5f00\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\uff0c\u6ca1\u6709\u72b6\u6001\u989c\u8272\u56fe\u6807\u3002' });\n        }}\n      >\n        \u6253\u5f00\u901a\u77e5\n      </Button>\n      <Button\n        type=\"success\"\n        onClick={() => {\n          Notify.success({ title: '\u6210\u529f\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u6210\u529f\u901a\u77e5\n      </Button>\n      <Button\n        type=\"warning\"\n        onClick={() => {\n          Notify.warning({\n            title: '\u8b66\u544a\u901a\u77e5',\n            description: '\u8fd9\u662f\u4e00\u4e2a\u8b66\u544a\u901a\u77e5\uff0c\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002'\n          });\n        }}\n      >\n        \u8b66\u544a\u901a\u77e5\n      </Button>\n      <Button\n        type=\"primary\"\n        onClick={() => {\n          Notify.info({ title: '\u8bf4\u660e\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u8bf4\u660e\u901a\u77e5\n      </Button>\n      <Button\n        type=\"danger\"\n        onClick={() => {\n          Notify.error({ title: '\u9519\u8bef\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u9519\u8bef\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\n```\n\n\n### \u5f39\u51fa\u4f4d\u7f6e\n\n```jsx mdx:preview&bg=#fff\nimport React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.success({ placement: 'topLeft', title: '\u6210\u529f\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2196\u4e0a\u5de6\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.warning({\n            placement: 'topRight',\n            title: '\u8b66\u544a\u901a\u77e5',\n            description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002',\n            onClose: () => {\n              console.log('~~~~>')\n            }\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.info({ placement: 'bottomLeft', title: '\u8bf4\u660e\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2199\u4e0b\u5de6\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.error({ placement: 'bottomRight', title: '\u9519\u8bef\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2198\u4e0b\u53f3\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\n```\n\n### \u5f39\u51fa\u901a\u77e5\u4e0d\u6d88\u5931\n\n```jsx mdx:preview&bg=#fff\nimport React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.success({\n            placement: 'topRight',\n            title: '\u8b66\u544a\u901a\u77e5',\n            duration: null,\n            description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u5f39\u51fa\u901a\u77e5\u4e0d\u6d88\u5931\u3002'\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\n```\n\n### \u6807\u9898\u4e0d\u5c55\u793a\n\n```jsx mdx:preview&bg=#fff\nimport React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.warning({\n            placement: 'topRight',\n            duration: null,\n            description: '\u6807\u9898\u4e0d\u5c55\u793a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5173\u95ed\u6309\u94ae\u5173\u95ed\u3002',\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.info({ placement: 'bottomLeft', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2199\u4e0b\u5de6\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.error({ placement: 'bottomRight', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2198\u4e0b\u53f3\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\n```\n\n### \u53ea\u5c55\u793a\u6807\u9898\n\n```jsx mdx:preview&bg=#fff\nimport React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.warning({\n            placement: 'topRight',\n            duration: null,\n            title: '\u8b66\u544a\u901a\u77e5\uff0c\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u53ea\u5c55\u793a\u6807\u9898\uff0c\u70b9\u51fb\u6309\u94ae\u5173\u95ed\u3002',\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\n```\n\n### \u4e0d\u5c55\u793a\u56fe\u6807\n\n```jsx mdx:preview&bg=#fff\nimport React from 'react';\nimport { Button, Notify } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.error({ placement: 'bottomRight', icon: null, description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2198\u4e0b\u53f3\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.success({\n            placement: 'topRight',\n            title: '\u8b66\u544a\u901a\u77e5',\n            icon: null,\n            duration: null,\n            description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002'\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\n```\n\n## Notify\n\n```js\nNotify.open(config);\nNotify.success(config);\nNotify.warning(config);\nNotify.info(config);\nNotify.error(config);\n```\n\n\u53c2\u6570 `config` \u5982\u4e0b\uff1a\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| title | \u901a\u77e5\u63d0\u9192\u6807\u9898\uff0c\u5fc5\u9009 | String/ReactNode | ReactNode |\n| icon | \u8bbe\u7f6e\u4e3a `false` \u5c06\u4e0d\u663e\u793a\u56fe\u6807 | String/ReactNode | ReactNode |\n| description | \u901a\u77e5\u63d0\u9192\u5185\u5bb9\uff0c\u5fc5\u9009 | String/ReactNode | ReactNode |\n| duration | \u9ed8\u8ba4 `4.5` \u79d2\u540e\u81ea\u52a8\u5173\u95ed\uff0c\u914d\u7f6e\u4e3a `null` \u5219\u4e0d\u81ea\u52a8\u5173\u95ed | Number | `4.5` |\n| placement | \u5f39\u51fa\u4f4d\u7f6e\uff0c\u53ef\u9009 | Enum{`topLeft`, `topRight`, `bottomLeft`, `bottomRight`} | `topRight` |\n| onClose | \u5f53\u63d0\u9192\u5173\u95ed\u65f6\u7684\u56de\u8c03\u51fd\u6570 | Function | none |\n\n\u66f4\u591a\u5c5e\u6027\u6587\u6863\u8bf7\u53c2\u8003 [`<Alert>`](#/components/alert)\u3002\n"},u=e(3173),r=e(9286);function c(){return(0,r.jsx)(u.Z,(0,o.Z)((0,o.Z)({},i),{},{path:"https://github.com/uiwjs/uiw/tree/master/packages/react-notify/README.md"}))}}}]);
//# sourceMappingURL=3372.37b3fceb.chunk.js.map