(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[3],{1275:function(e,t,i){},1276:function(e,t,i){},787:function(e,t,i){"use strict";i.d(t,"a",(function(){return T}));var n=i(1),a=i(4),r=i(2),o=i(29),s=i.n(o),c=i(181),l=i(33),h=i(5),d=i(8),u=i(6),p=i(7),g=i(0),m=i.n(g),v=i(11),f=i.n(v),b=i(984),C=i(66),x=i.n(C),y=i(26),L=i(25),S=i(58),w=i(50);i(988);function E(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function O(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?E(Object(i),!0).forEach((function(t){Object(y.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):E(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var z=function(e){Object(u.a)(a,e);var t,i=(t=a,function(){var e,i=Object(w.a)(t);if(j()){var n=Object(w.a)(this).constructor;e=Reflect.construct(i,arguments,n)}else e=i.apply(this,arguments);return Object(S.a)(this,e)});function a(e){var t;return Object(h.a)(this,a),(t=i.call(this,e)).state={dragging:!1},t.warpper=void 0,t.paneNumber=void 0,t.startX=void 0,t.startY=void 0,t.move=void 0,t.target=void 0,t.boxWidth=void 0,t.boxHeight=void 0,t.preWidth=void 0,t.nextWidth=void 0,t.preHeight=void 0,t.nextHeight=void 0,t.preSize=void 0,t.nextSize=void 0,t.onDragEnd=t.onDragEnd.bind(Object(L.a)(t)),t.onDragging=t.onDragging.bind(Object(L.a)(t)),t}return Object(d.a)(a,[{key:"componentWillUnmount",value:function(){this.removeEvent()}},{key:"removeEvent",value:function(){window.removeEventListener("mousemove",this.onDragging,!1),window.removeEventListener("mouseup",this.onDragEnd,!1)}},{key:"onMouseDown",value:function(e,t){if(t.target&&this.warpper){this.paneNumber=e,this.startX=t.clientX,this.startY=t.clientY,this.move=!0,this.target=t.target.parentNode;var i=this.target.previousElementSibling,n=this.target.nextElementSibling;this.boxWidth=this.warpper.clientWidth,this.boxHeight=this.warpper.clientHeight,i&&(this.preWidth=i.clientWidth,this.preHeight=i.clientHeight),n&&(this.nextWidth=n.clientWidth,this.nextHeight=n.clientHeight),window.addEventListener("mousemove",this.onDragging),window.addEventListener("mouseup",this.onDragEnd,!1),this.setState({dragging:!0})}}},{key:"onDragging",value:function(e){if(this.move){this.state.dragging||this.setState({dragging:!0});var t=this.props,i=t.mode,n=t.onDragging,a=this.target.nextElementSibling,r=this.target.previousElementSibling,o=e.clientX-this.startX,s=e.clientY-this.startY;if(this.preSize=0,this.nextSize=0,"horizontal"===i){if(this.preSize=this.preWidth+o>-1?this.preWidth+o:0,this.nextSize=this.nextWidth-o>-1?this.nextWidth-o:0,0===this.preSize||0===this.nextSize)return;this.preSize=100*(this.preSize/this.boxWidth>=1?1:this.preSize/this.boxWidth),this.nextSize=100*(this.nextSize/this.boxWidth>=1?1:this.nextSize/this.boxWidth),r&&a&&(r.style.width="".concat(this.preSize,"%"),a.style.width="".concat(this.nextSize,"%"))}if("vertical"===i&&this.preHeight+s>-1&&this.nextHeight-s>-1){if(this.preSize=this.preHeight+s>-1?this.preHeight+s:0,this.nextSize=this.nextHeight-s>-1?this.nextHeight-s:0,this.preSize=100*(this.preSize/this.boxHeight>=1?1:this.preSize/this.boxHeight),this.nextSize=100*(this.nextSize/this.boxHeight>=1?1:this.nextSize/this.boxHeight),0===this.preSize||0===this.nextSize)return;r&&a&&(r.style.height="".concat(this.preSize,"%"),a.style.height="".concat(this.nextSize,"%"))}n&&n(this.preSize,this.nextSize,this.paneNumber)}}},{key:"onDragEnd",value:function(){var e=this.props.onDragEnd;this.move=!1,e&&e(this.preSize,this.nextSize,this.paneNumber),this.removeEvent(),this.setState({dragging:!1})}},{key:"render",value:function(){var e=this,t=this.props,i=t.prefixCls,a=t.className,o=t.children,s=t.mode,c=t.visiable,l=t.lineBar,h=t.disable,d=(t.onDragEnd,t.onDragging,Object(r.a)(t,["prefixCls","className","children","mode","visiable","lineBar","disable","onDragEnd","onDragging"])),u=this.state.dragging,p=[i,a,"".concat(i,"-").concat(s),u?"dragging":null].filter(Boolean).join(" ").trim(),g=m.a.Children.toArray(o);return m.a.createElement("div",Object(n.a)({className:p},d,{ref:function(t){return e.warpper=t}}),m.a.Children.map(g,(function(t,n){var a=Object.assign({},t.props,{className:["".concat(i,"-pane"),t.props.className].filter(Boolean).join(" ").trim(),style:O({},t.props.style)}),r=!0===c||c&&c.includes(n+1)||!1,o={className:["".concat(i,"-bar"),l?"".concat(i,"-line-bar"):null,l?null:"".concat(i,"-large-bar")].filter(Boolean).join(" ").trim()};return(!0===h||h&&h.includes(n+1))&&(o.className=[o.className,h?"disable":null].filter(Boolean).join(" ").trim()),m.a.createElement(m.a.Fragment,null,0!==n&&r&&m.a.createElement("div",O({},o),m.a.createElement("div",{onMouseDown:e.onMouseDown.bind(e,n+1)})),m.a.cloneElement(t,O({},a)))})))}}]),a}(m.a.Component);z.defaultProps={prefixCls:"w-split",visiable:!0,mode:"horizontal"};var H=i(989),D=i(992),M=(i(993),function(e){var t=e||{},i=t.codePenOption,n=t.codeSandboxOption,a=t.prefixCls,o=i||{},s=o.includeModule,c=Object(r.a)(o,["includeModule"]);if(c&&c.js){var l=(s||[]).join("|");c.js=c.js.replace(/import([\s\S]*?)(?=['"])['"].*['"]( *;|;)?/gm,(function(e){return l&&new RegExp("from\\s+['\"](".concat(l,")['\"](s.+)?;?")).test(e)?e:"/** ".concat(e," **/")}))}return m.a.createElement("div",{className:"".concat(a,"-thirdparty")},i&&m.a.createElement(D.a,c,m.a.createElement("svg",{height:"12",fill:"currentColor",viewBox:"0 0 69 69"},m.a.createElement("path",{d:"M68.974125,23.6022271 C68.9669375,23.556228 68.956875,23.5159788 68.951125,23.4728545 C68.9369583,23.3892382 68.9192128,23.3062677 68.8979375,23.2241717 C68.885,23.1752977 68.8663125,23.127861 68.8505,23.0804244 C68.8278442,23.0077868 68.8029153,22.9358778 68.77575,22.8648035 C68.7562939,22.8157401 68.7342205,22.7677555 68.709625,22.7210562 C68.6804108,22.6530301 68.6463004,22.5872128 68.6075625,22.5241224 C68.5816874,22.4766857 68.5515,22.4321241 68.52275,22.386125 C68.4142531,22.2169066 68.2885197,22.0593814 68.1475625,21.9160713 C68.10875,21.8772595 68.0728125,21.8355728 68.0325625,21.8010735 C67.9775701,21.7523865 67.9214935,21.704938 67.864375,21.6587636 C67.818375,21.6242643 67.77525,21.589765 67.72925,21.5581406 L67.680375,21.5207662 L36.1445,0.497723998 C35.1485978,-0.165907999 33.8514022,-0.165907999 32.8555,0.497723998 L1.32106248,21.5207662 L1.27218748,21.5581406 C1.16574994,21.6321432 1.06485681,21.713817 0.970312494,21.8025109 C0.928625004,21.8355728 0.891249961,21.8772595 0.850999999,21.9160713 C0.800687478,21.9678203 0.750375025,22.0224443 0.704374952,22.0770683 C0.618968308,22.1722554 0.543358166,22.275796 0.47868744,22.386125 L0.392437472,22.5241224 C0.355916851,22.587711 0.322339729,22.6529454 0.291812498,22.7196187 C0.235417041,22.8356642 0.187844895,22.9557936 0.149499967,23.0789869 C0.133687434,23.127861 0.11643744,23.1752977 0.103499962,23.2241717 C0.0819374527,23.3046702 0.0675624468,23.3880436 0.0517499808,23.4728545 C0.0431249503,23.5159787 0.0330624597,23.5562279 0.0273124842,23.6022271 C0.0114999508,23.7272873 0,23.8566599 0,23.9874699 L0,45.0105121 C0,45.1398847 0.0115000182,45.2692572 0.0287499444,45.3986298 C0.0330624597,45.4403165 0.0431249503,45.4834407 0.0517499808,45.5265649 C0.0661249867,45.6113758 0.0819374527,45.6918743 0.103499962,45.7752478 C0.11643744,45.8241218 0.133687434,45.8715585 0.149499967,45.918995 C0.172499936,45.9908687 0.195499972,46.0627423 0.227124972,46.1360534 C0.245812493,46.1849275 0.27024999,46.2309267 0.290374971,46.2798007 C0.323437498,46.3459245 0.355062497,46.4106108 0.392437472,46.478172 C0.421187484,46.5227337 0.448499968,46.5687328 0.47868744,46.6132945 C0.585037244,46.7827707 0.710436736,46.9395172 0.852437459,47.0804732 C0.979968483,47.2145679 1.12112666,47.3350078 1.27362494,47.4398414 L1.32106248,47.4786532 L32.8555,68.5016954 C33.8511677,69.1661015 35.1488322,69.1661015 36.1445,68.5016954 L67.680375,47.4786532 L67.72925,47.4412789 C67.77525,47.4096545 67.818375,47.3751552 67.864375,47.3406558 C67.9215088,47.2940078 67.9775854,47.2460798 68.0325625,47.1969085 C68.0728125,47.1609716 68.10875,47.1221599 68.1475625,47.0819107 C68.2902677,46.9406867 68.4161661,46.7834372 68.52275,46.6132945 C68.5515,46.5672953 68.5816874,46.5227337 68.6075625,46.478172 C68.646375,46.4106108 68.6794375,46.3459245 68.7081875,46.2798007 C68.732625,46.2309267 68.7570625,46.1849275 68.77575,46.1360534 C68.8045,46.0641798 68.8275,45.9908687 68.8505,45.918995 C68.8663125,45.8715584 68.885,45.8241218 68.8979375,45.7752478 C68.9195,45.6918743 68.9353125,45.6113759 68.951125,45.5265649 C68.956875,45.4834407 68.9669375,45.4403165 68.974125,45.4000673 C68.991375,45.2706947 69,45.1413222 69,45.0119496 L69,23.9889074 C69,23.8566599 68.991375,23.7272873 68.974125,23.6022271 Z M38,9 L61,24.1907448 L50.7281277,31 L38.0014231,22.5649276 L38.0014231,9 L38,9 Z M30.997154,9 L30.997154,22.5649276 L18.2740828,31 L8,24.1907448 L31,9 L30.997154,9 Z M6,29 L13,34 L6,39 L6,29 L6,29 Z M31,60 L8,44.8082815 L18.2732954,38 L30.9971538,46.434203 L30.9971538,60 L31,60 Z M34.4985607,41 L24,34 L34.4985607,27 L45,34 L34.4985607,41 Z M38,60 L38,46.4333333 L50.7268564,38 L61,44.8073077 L38,60 L38,60 Z M63,39 L56,34 L63,29 L63,39 L63,39 Z"}))),n&&m.a.createElement(H.a,n,m.a.createElement("svg",{height:"12",fill:"currentColor",viewBox:"0 0 69 69"},m.a.createElement("path",{d:"M32,38.2764838 L11,24 L11,35.7160031 L22.0526316,43.2306536 L22.0526316,54.3200601 L32,60 L32,38.2764838 Z M38,38.2764838 L38,60 L47.9473684,54.3200601 L47.9473684,43.2306536 L59,35.7160031 L59,24 L38,38.2764838 Z M46.296506,13 L35.5021904,21.0761293 L24.7078748,13.004586 L15,18.6913552 L35.5021904,33 L56,18.6913552 L46.296506,13.004586 L46.296506,13 Z M37.1676303,0.571217481 L63.7371606,15.5989936 C65.1342563,16.3900364 66,17.8813846 66,19.4990592 L66,49.4964682 C66.0011469,51.1157433 65.1356391,52.6091811 63.7371606,53.4010064 L37.1676303,68.4287825 C35.8224939,69.1904058 34.1819333,69.1904058 32.8367968,68.4287825 L6.26726663,53.4010064 C4.86707992,52.6103421 4,51.1166819 4,49.4964682 L4,19.4990592 C4,17.8813846 4.86574257,16.3900364 6.26283836,15.5989936 L32.8323686,0.571217481 C34.1775051,-0.190405827 35.8180656,-0.190405827 37.1632021,0.571217481 L37.1676303,0.571217481 Z"}))))}),P={full:m.a.createElement("svg",{viewBox:"0 0 1024 1024"},m.a.createElement("path",{d:"M909 959H780a30 30 0 0 1 0-60h99a20 20 0 0 0 20-20v-99a30 30 0 0 1 60 0v129a50 50 0 0 1-50 50z m20-685a30 30 0 0 1-30-30v-99a20 20 0 0 0-20-20h-99a30 30 0 0 1 0-60h129a50 50 0 0 1 50 50v129a30 30 0 0 1-30 30z m-157 28v420a50 50 0 0 1-50 50H302a50 50 0 0 1-50-50V302a50 50 0 0 1 50-50h420a50 50 0 0 1 50 50z m-60 30a20 20 0 0 0-20-20H332a20 20 0 0 0-20 20v360a20 20 0 0 0 20 20h360a20 20 0 0 0 20-20V332zM244 125h-99a20 20 0 0 0-20 20v99a30 30 0 0 1-60 0V115a50 50 0 0 1 50-50h129a30 30 0 0 1 0 60zM95 750a30 30 0 0 1 30 30v99a20 20 0 0 0 20 20h99a30 30 0 0 1 0 60H115a50 50 0 0 1-50-50V780a30 30 0 0 1 30-30z"})),bgPlaid:m.a.createElement("svg",{width:"100%",height:"100%",preserveAspectRatio:"none",style:{display:"block"}},m.a.createElement("pattern",{id:"pattern",x:"0",y:"0",width:"16",height:"16",patternUnits:"userSpaceOnUse"},m.a.createElement("rect",{fill:"rgba(0, 0, 0, 0.06)",x:"0",width:"8",height:"8",y:"0"}),m.a.createElement("rect",{fill:"rgba(0, 0, 0, 0.06)",x:"8",width:"8",height:"8",y:"8"})),m.a.createElement("rect",{fill:"url(#pattern)",x:"0",y:"0",width:"100%",height:"100%"})),copy:m.a.createElement("svg",{viewBox:"0 0 1024 1024"},m.a.createElement("path",{d:"M869.865 46.545a107.706 107.706 0 0 1 107.59 107.567v599.412a107.706 107.706 0 0 1-107.59 107.567h-148.41v8.797a107.683 107.683 0 0 1-107.567 107.567H154.112A107.683 107.683 0 0 1 46.545 869.888V270.476a107.683 107.683 0 0 1 107.567-107.567h148.433v-8.797a107.706 107.706 0 0 1 107.59-107.567h459.73z m-715.73 861.091h459.73a37.841 37.841 0 0 0 37.771-37.748V270.476c0-20.806-16.942-37.749-37.748-37.749H154.135c-20.806 0-37.771 16.943-37.771 37.749v599.412c0 20.83 16.965 37.748 37.771 37.748z m753.501-154.112V154.112c0-20.806-16.965-37.748-37.771-37.748h-459.73c-20.806 0-37.771 16.942-37.771 37.748v8.797h241.524a107.683 107.683 0 0 1 107.567 107.567v520.797h148.41c20.806 0 37.771-16.92 37.771-37.749z m-384-381.16a34.91 34.91 0 0 1 0 69.818H244.364a34.91 34.91 0 0 1 0-69.818h279.272z m0 162.909a34.91 34.91 0 0 1 0 69.818H244.364a34.91 34.91 0 0 1 0-69.818h279.272z m-93.09 162.909a34.91 34.91 0 0 1 0 69.818H244.363a34.91 34.91 0 0 1 0-69.818h186.181z"}))},k=i(994),N=i(995),W=i.n(N),B=i(996),Z=i.n(B);function R(e){return V.apply(this,arguments)}function V(){return(V=Object(l.a)(s.a.mark((function e(t){var i,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=[],n=Object(k.transform)(t,{presets:["es2015","react"],plugins:[[W.a,{removeAll:!0}],[Z.a,{loose:!0}]]}).code,e.abrupt("return",{code:n,specifiers:i});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i(1275),i(1276);var T=function(e){Object(u.a)(i,e);var t=Object(p.a)(i);function i(){var e;Object(h.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).demoDom=m.a.createRef(),e.editor=m.a.createRef(),e.language="",e.initHeight=3,e.playerId="".concat(parseInt(String(1e9*Math.random()),10).toString(36)),e.state={errorMessage:"",fullScreen:!1,copied:!1,showEdit:!1,width:1},e}return Object(d.a)(i,[{key:"componentDidMount",value:function(){var e=this.props.language;this.language="string"===typeof e?e:e&&e.name||"",this.props.noPreview||this.executeCode(this.props.code),window.addEventListener("popstate",(function(e){document.body.style.overflow="inherit"}),!1)}},{key:"componentDidUpdate",value:function(e){var t=this.props.language;this.language="string"===typeof t?t:t&&t.name||"",e.noPreview!==this.props.noPreview&&this.executeCode(this.props.code)}},{key:"executeCode",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var i,n,a,r,o,l,h,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(/(jsx|js)/.test(this.language)){e.next=2;break}return e.abrupt("return");case 2:for(r in e.prev=2,i=["context","React","ReactDOM","Component"],n=[this,m.a,f.a,g.Component],a=this.props.dependencies)i.push(r),n.push(a[r]);return t=t.replace("_mount_","document.getElementById('".concat(this.playerId,"')")),o="".concat(t),e.next=11,R(o);case 11:l=e.sent,h=l.code,i.push(h),Object(c.a)(Function,i).apply(null,n),this.setState({errorMessage:""}),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),d="",d=e.t0&&e.t0.message?e.t0.message:JSON.stringify(e.t0),this.setState({errorMessage:d});case 23:case"end":return e.stop()}}),e,this,[[2,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onCopyCode",value:function(){var e=this,t=this.props.code;x()(t||"",(function(t){e.setState({copied:t})})),setTimeout((function(){e.setState({copied:!1})}),2e3)}},{key:"onFullScreen",value:function(){var e=this,t=this.state.fullScreen;this.setState({fullScreen:!t},(function(){document.body.style.overflow=t?"inherit":"hidden",!t&&e.demoDom.current&&(e.demoDom.current.style.maxWidth="inherit")}))}},{key:"initOldHeight",value:function(){var e=this.demoDom.current;3===this.initHeight&&e&&(this.initHeight=e.clientHeight)}},{key:"onSwitchSource",value:function(){var e=this,t=this.state.width;this.initOldHeight(),this.setState({width:1===t?"50%":1,showEdit:!0},(function(){e.editor&&e.editor.current&&e.editor.current.editor&&e.editor.current.editor.setSize("100%",1!==t?e.initHeight:"100%")}))}},{key:"render",value:function(){var e=this,t=this.props,i=t.style,o=t.prefixCls,s=t.language,c=t.className,l=t.editProps,h=t.codePenOption,d=t.codeSandboxOption,u=t.code,p=(t.dependencies,t.btnText),g=t.btnHideText,v=t.onlyEdit,f=t.bordered,C=t.noCode,x=t.noPreview,y=t.noScroll,L=t.bgWhite,S=Object(r.a)(t,["style","prefixCls","language","className","editProps","codePenOption","codeSandboxOption","code","dependencies","btnText","btnHideText","onlyEdit","bordered","noCode","noPreview","noScroll","bgWhite"]),w=!(!C&&!x)&&(!C||!x),E=1!==this.state.width&&[w?1:2];return m.a.createElement(z,Object(n.a)({visiable:E,className:[c,o,y?"".concat(o,"-noScroll"):null,w?"".concat(o,"-OneItem"):null,f?"".concat(o,"-bordered"):null,this.state.fullScreen?"".concat(o,"-fullScreen"):null].filter(Boolean).join(" ").trim(),style:Object(a.a)({flex:1},i)},S),!x&&!v&&m.a.createElement("div",{ref:this.demoDom,className:["".concat(o,"-demo"),L?null:"".concat(o,"-demo-bgPlaid"),this.state.errorMessage?"".concat(o,"-demo-error"):null].filter(Boolean).join(" ").trim(),style:Object(a.a)({flex:1},1===this.state.width?{width:"100%"}:{})},this.state.errorMessage&&m.a.createElement("pre",null,m.a.createElement("code",null,this.state.errorMessage)),m.a.createElement("div",{className:["".concat(o,"-demo-source"),this.state.errorMessage?"error":null].filter(Boolean).join(" ").trim(),id:this.playerId})),(!C||v)&&m.a.createElement("div",{style:{overflow:"hidden",width:v?"100%":this.state.width}},(this.state.showEdit||v)&&m.a.createElement(b.a,Object(n.a)({value:(u||"").replace(/\n$/,""),ref:this.editor,options:{theme:"monokai",mode:s}},l,{onChange:function(t,i){e.executeCode(t.getValue()),l&&l.onChange&&l.onChange(t,i)}}))),!w&&!(C&&x)&&!v&&m.a.createElement("div",{style:{flex:1,width:29},className:"".concat(o,"-bar")},m.a.createElement(M,{prefixCls:o,codePenOption:h,codeSandboxOption:d}),m.a.createElement("div",{className:"".concat(o,"-bar-btn"),onClick:this.onSwitchSource.bind(this)},1===this.state.width?p:g),m.a.createElement("div",{className:["".concat(o,"-bar-iconbtns"),this.state.copied?"".concat(o,"-bar-copied"):null].filter(Boolean).join(" ").trim(),onClick:this.onCopyCode.bind(this)},P.copy),m.a.createElement("div",{className:["".concat(o,"-bar-iconbtns"),this.state.fullScreen?"".concat(o,"-bar-copied"):null].filter(Boolean).join(" ").trim(),onClick:this.onFullScreen.bind(this)},P.full)))}}]),i}(m.a.PureComponent);T.defaultProps={prefixCls:"w-code-preview",language:"jsx",code:"",btnText:"Code",btnHideText:"Hide Editor",editProps:{},noCode:!1,bgWhite:!1,onlyEdit:!1,noPreview:!1,bordered:!0}},988:function(e,t,i){},993:function(e,t,i){}}]);
//# sourceMappingURL=vendors-code-preview.ce074d12.chunk.js.map