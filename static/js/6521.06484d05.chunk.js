(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6521],{4934:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=4934,e.exports=n},5301:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var a=t(8573),r=t(6320),l=t(8563),o=t(7622),u=t(7937);const c={docinfo:"index_docinfo__3Vx8S",markdown:"index_markdown__hcQCp",markdownWrap:"index_markdownWrap__t60jR"};var d=t(4760);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{path:n}=e,t=/^http/.test(n||"")?n:"https://github.com/uiwjs/uiw/blob/master/".concat(n);return(0,d.jsxs)("div",{className:c.docinfo,children:["\u72af\u4e86\u9519\u8bef\u8fd8\u662f\u60f3\u5bf9\u6587\u4ef6\u505a\u51fa\u8d21\u732e\uff1f",t&&(0,d.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,d.jsx)("br",{}),(0,d.jsx)("a",{href:"https://github.com/uiwjs/uiw/issues",target:"_blank",rel:"noopener noreferrer",children:"\u53cd\u9988\u5efa\u8bae"}),(0,d.jsx)(u.Divider,{type:"vertical"}),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw/issues/new",children:"\u63d0\u4ea4bug"}),(0,d.jsx)(u.Divider,{type:"vertical"}),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"Github"}),(0,d.jsx)(u.Divider,{type:"vertical"}),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,d.jsx)(u.Divider,{type:"vertical"}),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt-ssr",children:"@kkt/ssr"}),(0,d.jsx)(u.Divider,{type:"vertical"}),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://uiw.gitee.io",children:"\u56fd\u5185\u955c\u50cf"})]})}const _=r.ZP.Preview,s=r.ZP.Code,f=r.ZP.Toolbar,g=e=>{var n,t;let{node:o,components:u,data:c,...i}=e;const g=(0,a.useRef)(null),{headings:m,headingsList:E,...p}=i;(0,a.useEffect)((()=>{if(g.current){const e=g.current.parentElement;e&&e.parentElement&&e.parentElement.replaceChild(g.current,e)}}),[g]);const B=null===o||void 0===o||null===(n=o.position)||void 0===n?void 0:n.start.line,w=null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.meta,x=(0,l.Mx)(w)||String(B),v=u["".concat(x)];if(x&&"function"===typeof v){const e=c[x].value||"",n=(0,l.aE)(w||"");return(0,d.jsxs)(r.ZP,{ref:g,children:[(0,d.jsx)(_,{style:{background:n.bg||"transparent"},children:(0,d.jsx)(v,{})}),(0,d.jsx)(f,{text:e,children:n.title||"Example"}),(0,d.jsx)(s,{children:(0,d.jsx)("pre",{...p})})]})}return(0,d.jsx)("code",{...p})};function m(e){return(0,d.jsxs)(a.Fragment,{children:[(0,d.jsx)(o.Z,{className:c.markdownWrap,source:e.source||"",disableCopy:!0,wrapperElement:{"data-color-mode":"light"},components:{code:n=>(0,d.jsx)(g,{...e,...n})}}),(0,d.jsx)(i,{path:e.path})]})}},6157:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const a={components:{19:function(){var e,n=(e=t(8573))&&e.__esModule?e:{default:e},a=t(7937);return function(){return n.default.createElement("div",null,n.default.createElement(a.Row,{gutter:20},n.default.createElement(a.Col,{fixed:!0},n.default.createElement(a.Badge,{count:9},n.default.createElement(a.Avatar,{shape:"square",size:"large"}))),n.default.createElement(a.Col,{fixed:!0},n.default.createElement(a.Badge,{count:100},n.default.createElement(a.Avatar,{shape:"square",size:"large"}))),n.default.createElement(a.Col,null,n.default.createElement(a.Badge,{dot:!0,count:9},n.default.createElement(a.Avatar,{shape:"square",size:"large"})))),n.default.createElement(a.Divider,null),n.default.createElement(a.Badge,{count:12},"\u8bc4\u8bba"))}}(),56:function(){var e,n=(e=t(8573))&&e.__esModule?e:{default:e},a=t(7937);var r={marginRight:20,display:"inline-block"};return function(){return n.default.createElement(a.Row,{gutter:20},n.default.createElement(a.Col,{fixed:!0},n.default.createElement(a.Badge,{count:99},n.default.createElement(a.Avatar,{shape:"square",size:"large"}))),n.default.createElement(a.Col,{fixed:!0},n.default.createElement(a.Badge,{count:100,style:{backgroundColor:"#87d068"}},n.default.createElement(a.Avatar,{shape:"square",size:"large"}))),n.default.createElement(a.Col,{fixed:!0},n.default.createElement(a.Badge,{count:99,max:10,style:r},n.default.createElement(a.Avatar,{shape:"square",size:"large"}))),n.default.createElement(a.Col,{fixed:!0},n.default.createElement(a.Badge,{count:100,max:999,style:r},n.default.createElement(a.Avatar,{shape:"square",size:"large"}))),n.default.createElement(a.Col,{fixed:!0},n.default.createElement(a.Badge,{count:100,max:999,style:r},n.default.createElement(a.Avatar,{shape:"square",size:"large"}))))}}(),99:function(){var e,n=(e=t(8573))&&e.__esModule?e:{default:e},a=t(7937);return function(){return n.default.createElement(a.Row,{gutter:10},n.default.createElement(a.Col,{fixed:!0},n.default.createElement(a.Badge,{count:25})),n.default.createElement(a.Col,{fixed:!0},n.default.createElement(a.Badge,{count:4,style:{backgroundColor:"#fff",color:"#f04134",boxShadow:"rgb(217, 217, 217) 0px 0px 0px 1px inset"}})),n.default.createElement(a.Col,{fixed:!0},n.default.createElement(a.Badge,{count:109,style:{backgroundColor:"#87d068"}})))}}(),124:function(){var e,n=(e=t(8573))&&e.__esModule?e:{default:e},a=t(7937);return function(){return n.default.createElement("div",null,n.default.createElement(a.Badge,{dot:!0,style:{marginRight:10}},"\u6570\u636e\u67e5\u8be2"),n.default.createElement(a.Badge,{dot:!0,count:4},n.default.createElement(a.Icon,{type:"mail-o"})))}}(),146:function(){var e,n=(e=t(8573))&&e.__esModule?e:{default:e},a=t(7937);return function(){return n.default.createElement("div",null,n.default.createElement(a.Badge,{color:"#28a745"}),n.default.createElement(a.Badge,{color:"#008EF0"}),n.default.createElement(a.Badge,{color:"#dc3545"}),n.default.createElement(a.Badge,{color:"#393E48"}),n.default.createElement(a.Badge,{color:"#ffc107"}),n.default.createElement(a.Badge,{color:"#f95c2b"}),n.default.createElement(a.Badge,{color:"#dc3545"}),n.default.createElement(a.Badge,{color:"#c2c2c2"}),n.default.createElement(a.Badge,{color:"#F95C2B",processing:!0}),n.default.createElement("br",null),n.default.createElement(a.Badge,{color:"#28a745"},"Success"),n.default.createElement("br",null),n.default.createElement(a.Badge,{color:"#dc3545"},"Error"),n.default.createElement("br",null),n.default.createElement(a.Badge,{color:"#c2c2c2"},"Default"),n.default.createElement("br",null),n.default.createElement(a.Badge,{color:"#008EF0",processing:!0},"Processing"),n.default.createElement("br",null),n.default.createElement(a.Badge,{color:"#ffc107"},"Warning"),n.default.createElement(a.Badge,{color:"#ffc107",processing:!0},"Warning"))}}()},data:{19:{name:19,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _uiw = require("uiw");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Row, {\n    gutter: 20\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    count: 9\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Avatar, {\n    shape: "square",\n    size: "large"\n  }))), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    count: 100\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Avatar, {\n    shape: "square",\n    size: "large"\n  }))), /*#__PURE__*/_react["default"].createElement(_uiw.Col, null, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    dot: true,\n    count: 9\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Avatar, {\n    shape: "square",\n    size: "large"\n  })))), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    count: 12\n  }, "\\u8BC4\\u8BBA"));\n};',language:"jsx",value:'import React from \'react\';\nimport { Badge, Row, Col, Avatar, Divider } from \'uiw\';\n\nexport default function Demo() {\n  return(\n    <div>\n      <Row gutter={20}>\n        <Col fixed>\n          <Badge count={9}>\n            <Avatar shape="square" size="large" />\n          </Badge>\n        </Col>\n        <Col fixed>\n          <Badge count={100}>\n            <Avatar shape="square" size="large" />\n          </Badge>\n        </Col>\n        <Col>\n          <Badge dot count={9}>\n            <Avatar shape="square" size="large" />\n          </Badge>\n        </Col>\n      </Row>\n      <Divider />\n      <Badge count={12}>\n        \u8bc4\u8bba\n      </Badge>\n    </div>\n  );\n}'},56:{name:56,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _uiw = require("uiw");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nvar styl = {\n  marginRight: 20,\n  display: \'inline-block\'\n};\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Row, {\n    gutter: 20\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    count: 99\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Avatar, {\n    shape: "square",\n    size: "large"\n  }))), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    count: 100,\n    style: {\n      backgroundColor: \'#87d068\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Avatar, {\n    shape: "square",\n    size: "large"\n  }))), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    count: 99,\n    max: 10,\n    style: styl\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Avatar, {\n    shape: "square",\n    size: "large"\n  }))), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    count: 100,\n    max: 999,\n    style: styl\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Avatar, {\n    shape: "square",\n    size: "large"\n  }))), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    count: 100,\n    max: 999,\n    style: styl\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Avatar, {\n    shape: "square",\n    size: "large"\n  }))));\n};',language:"jsx",value:'import React from \'react\';\nimport { Badge, Row, Col, Avatar, Divider } from \'uiw\';\n\nconst styl={ marginRight: 20, display: \'inline-block\' }\n\nexport default function Demo() {\n  return (\n    <Row gutter={20}>\n      <Col fixed>\n        <Badge count={99}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n      <Col fixed>\n        <Badge count={100} style={{ backgroundColor: \'#87d068\' }}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n      <Col fixed>\n        <Badge count={99} max={10} style={styl}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n      <Col fixed>\n        <Badge count={100} max={999} style={styl}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n      <Col fixed>\n        <Badge count={100} max={999} style={styl}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n    </Row>\n  )\n}'},99:{name:99,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _uiw = require("uiw");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Row, {\n    gutter: 10\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    count: 25\n  })), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    count: 4,\n    style: {\n      backgroundColor: \'#fff\',\n      color: \'#f04134\',\n      boxShadow: \'rgb(217, 217, 217) 0px 0px 0px 1px inset\'\n    }\n  })), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    count: 109,\n    style: {\n      backgroundColor: \'#87d068\'\n    }\n  })));\n};',language:"jsx",value:"import React from 'react';\nimport { Badge, Row, Col } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <Row gutter={10}>\n      <Col fixed>\n        <Badge count={25} />\n      </Col>\n      <Col fixed>\n        <Badge count={4} style={{ backgroundColor: '#fff', color: '#f04134', boxShadow: 'rgb(217, 217, 217) 0px 0px 0px 1px inset' }} /> \n      </Col>\n      <Col fixed>\n        <Badge count={109} style={{ backgroundColor: '#87d068' }} /> \n      </Col>\n    </Row>\n  )\n}"},124:{name:124,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _uiw = require("uiw");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    dot: true,\n    style: {\n      marginRight: 10\n    }\n  }, "\\u6570\\u636E\\u67E5\\u8BE2"), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    dot: true,\n    count: 4\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n    type: "mail-o"\n  })));\n};',language:"jsx",value:"import React from 'react';\nimport { Badge, Icon } from 'uiw';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Badge dot style={{ marginRight: 10 }}>\n        \u6570\u636e\u67e5\u8be2\n      </Badge>\n      <Badge dot count={4}>\n        <Icon type='mail-o' />\n      </Badge>\n    </div>\n  );\n}"},146:{name:146,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _uiw = require("uiw");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nreturn function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#28a745"\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#008EF0"\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#dc3545"\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#393E48"\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#ffc107"\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#f95c2b"\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#dc3545"\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#c2c2c2"\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#F95C2B",\n    processing: true\n  }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#28a745"\n  }, "Success"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#dc3545"\n  }, "Error"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#c2c2c2"\n  }, "Default"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#008EF0",\n    processing: true\n  }, "Processing"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#ffc107"\n  }, "Warning"), /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#ffc107",\n    processing: true\n  }, "Warning"));\n};',language:"jsx",value:'import React from \'react\';\nimport { Badge } from \'uiw\';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Badge color="#28a745" />\n      <Badge color="#008EF0" />\n      <Badge color="#dc3545" />\n      <Badge color="#393E48" />\n      <Badge color="#ffc107" />\n      <Badge color="#f95c2b" />\n      <Badge color="#dc3545"/>\n      <Badge color="#c2c2c2"/>\n      <Badge color="#F95C2B" processing />\n      <br />\n      <Badge color="#28a745">Success</Badge>\n      <br />\n      <Badge color="#dc3545">Error</Badge>\n      <br />\n      <Badge color="#c2c2c2">Default</Badge>\n      <br />\n      <Badge color="#008EF0" processing>Processing</Badge>\n      <br />\n      <Badge color="#ffc107">Warning</Badge>\n      <Badge color="#ffc107" processing>Warning</Badge>\n    </div>\n  );\n}'}},source:'Badge \u6807\u8bb0\n===\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-badge/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-badge.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-badge)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-badge.svg?label=@uiw/react-badge)](https://npmjs.com/@uiw/react-badge)\n\n\u51fa\u73b0\u5728\u6309\u94ae\u3001\u56fe\u6807\u65c1\u7684\u6570\u5b57\u6216\u72b6\u6001\u6807\u8bb0\u3002\n\n```jsx\nimport { Badge } from \'uiw\';\n// or\nimport Badge from \'@uiw/react-badge\';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n```jsx mdx:preview\nimport React from \'react\';\nimport { Badge, Row, Col, Avatar, Divider } from \'uiw\';\n\nexport default function Demo() {\n  return(\n    <div>\n      <Row gutter={20}>\n        <Col fixed>\n          <Badge count={9}>\n            <Avatar shape="square" size="large" />\n          </Badge>\n        </Col>\n        <Col fixed>\n          <Badge count={100}>\n            <Avatar shape="square" size="large" />\n          </Badge>\n        </Col>\n        <Col>\n          <Badge dot count={9}>\n            <Avatar shape="square" size="large" />\n          </Badge>\n        </Col>\n      </Row>\n      <Divider />\n      <Badge count={12}>\n        \u8bc4\u8bba\n      </Badge>\n    </div>\n  );\n}\n```\n\n### \u5c01\u9876\u6570\u5b57\n\n\u4e0d\u5305\u88f9\u4efb\u4f55\u5143\u7d20\u5373\u662f\u72ec\u7acb\u4f7f\u7528\uff0c\u53ef\u81ea\u5b9a\u6837\u5f0f\u5c55\u73b0\u3002\n\n```jsx mdx:preview\nimport React from \'react\';\nimport { Badge, Row, Col, Avatar, Divider } from \'uiw\';\n\nconst styl={ marginRight: 20, display: \'inline-block\' }\n\nexport default function Demo() {\n  return (\n    <Row gutter={20}>\n      <Col fixed>\n        <Badge count={99}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n      <Col fixed>\n        <Badge count={100} style={{ backgroundColor: \'#87d068\' }}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n      <Col fixed>\n        <Badge count={99} max={10} style={styl}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n      <Col fixed>\n        <Badge count={100} max={999} style={styl}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n      <Col fixed>\n        <Badge count={100} max={999} style={styl}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n    </Row>\n  )\n}\n```\n\n### \u72ec\u7acb\u4f7f\u7528\n\n\u4e0d\u5305\u88f9\u4efb\u4f55\u5143\u7d20\u5373\u662f\u72ec\u7acb\u4f7f\u7528\uff0c\u53ef\u81ea\u5b9a\u6837\u5f0f\u5c55\u73b0\u3002\n\n```jsx mdx:preview\nimport React from \'react\';\nimport { Badge, Row, Col } from \'uiw\';\n\nexport default function Demo() {\n  return (\n    <Row gutter={10}>\n      <Col fixed>\n        <Badge count={25} />\n      </Col>\n      <Col fixed>\n        <Badge count={4} style={{ backgroundColor: \'#fff\', color: \'#f04134\', boxShadow: \'rgb(217, 217, 217) 0px 0px 0px 1px inset\' }} /> \n      </Col>\n      <Col fixed>\n        <Badge count={109} style={{ backgroundColor: \'#87d068\' }} /> \n      </Col>\n    </Row>\n  )\n}\n```\n\n### \u5c0f\u7ea2\u70b9\n\n\u4ee5\u7ea2\u70b9\u7684\u5f62\u5f0f\u6807\u6ce8\u9700\u8981\u5173\u6ce8\u7684\u5185\u5bb9\u3002\n\n```jsx mdx:preview\nimport React from \'react\';\nimport { Badge, Icon } from \'uiw\';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Badge dot style={{ marginRight: 10 }}>\n        \u6570\u636e\u67e5\u8be2\n      </Badge>\n      <Badge dot count={4}>\n        <Icon type=\'mail-o\' />\n      </Badge>\n    </div>\n  );\n}\n```\n\n### \u72b6\u6001\u70b9\n\n\u7528\u4e8e\u8868\u793a\u72b6\u6001\u7684\u5c0f\u5706\u70b9\uff0c\u53ef\u4ee5\u8bbe\u7f6e `processing={true}` \u8ba9\u72b6\u6001\u70b9\uff0c\u663e\u793a\u52a8\u753b\u6548\u679c\u3002\n\n```jsx mdx:preview\nimport React from \'react\';\nimport { Badge } from \'uiw\';\n\nexport default function Demo() {\n  return (\n    <div>\n      <Badge color="#28a745" />\n      <Badge color="#008EF0" />\n      <Badge color="#dc3545" />\n      <Badge color="#393E48" />\n      <Badge color="#ffc107" />\n      <Badge color="#f95c2b" />\n      <Badge color="#dc3545"/>\n      <Badge color="#c2c2c2"/>\n      <Badge color="#F95C2B" processing />\n      <br />\n      <Badge color="#28a745">Success</Badge>\n      <br />\n      <Badge color="#dc3545">Error</Badge>\n      <br />\n      <Badge color="#c2c2c2">Default</Badge>\n      <br />\n      <Badge color="#008EF0" processing>Processing</Badge>\n      <br />\n      <Badge color="#ffc107">Warning</Badge>\n      <Badge color="#ffc107" processing>Warning</Badge>\n    </div>\n  );\n}\n```\n\n## API\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| style | \u9ed8\u8ba4\u8bbe\u7f6e\u8ba1\u6570\u5706\u70b9\u6837\u5f0f\uff0c\u8bbe\u7f6e `color`\uff0c`style` \u8bbe\u7f6e\u5916\u5c42\u8282\u70b9\u6837\u5f0f | Object | - |\n| count | \u5c55\u793a\u7684\u6570\u5b57 | Number | - |\n| max | \u6700\u5927\u503c\uff0c\u8d85\u8fc7\u6700\u5927\u503c\u4f1a\u663e\u793a \'{max}+\' | Number | `99` |\n| dot | \u4e0d\u5c55\u793a\u6570\u5b57\uff0c\u53ea\u6709\u4e00\u4e2a\u5c0f\u7ea2\u70b9 | Boolean | `false` |\n| processing | \u4e0d\u5c55\u793a\u6570\u5b57\uff0c\u53ea\u6709\u4e00\u4e2a\u5c0f\u7ea2\u70b9 | Boolean | - |\n| color | \u8bbe\u7f6e Badge \u4e3a\u72b6\u6001\u70b9\u7684\u989c\u8272 | String | - |\n',headings:[],headingsList:[]};var r=t(5301),l=t(4760);function o(){return(0,l.jsx)(r.Z,{...a,path:"https://github.com/uiwjs/uiw/tree/master/packages/react-badge/README.md"})}}}]);
//# sourceMappingURL=6521.06484d05.chunk.js.map