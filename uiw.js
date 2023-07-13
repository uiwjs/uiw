(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["uiw"] = factory(require("react"), require("react-dom"));
	else
		root["uiw"] = factory(root["React"], root["ReactDOM"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__156__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 448:
/***/ (function(module) {

/**! 
 * @uiw/copy-to-clipboard v1.0.15 
 * Copy to clipboard. 
 * 
 * Copyright (c) 2023 Kenny Wang 
 * https://github.com/uiwjs/copy-to-clipboard.git 
 * 
 * @website: https://uiwjs.github.io/copy-to-clipboard
 
 * Licensed under the MIT license 
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * *** This styling is an extra step which is likely not required. ***
   * https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard
   * 
   * Why is it here? To ensure:
   * 
   * 1. the element is able to have focus and selection.
   * 2. if element was to flash render it has minimal visual impact.
   * 3. less flakyness with selection and copying which **might** occur if
   *     the textarea element is not visible.
   *
   *   The likelihood is the element won't even render, not even a flash,
   *   so some of these are just precautions. However in IE the element
   *   is visible whilst the popup box asking the user for permission for
   *   the web page to copy to the clipboard.
   *  
   *   Place in top-left corner of screen regardless of scroll position.
   *
   * @typedef CopyTextToClipboard
   * @property {(text: string, method?: (isCopy: boolean) => void) => void} void
   * @returns {void}
   * 
   * @param {string} text 
   * @param {CopyTextToClipboard} cb 
   */
  function copyTextToClipboard(text, cb) {
    if (typeof document === "undefined") return;
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style = {
      position: 'absolute',
      left: '-9999px',
    };
    document.body.appendChild(el);
    const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    let isCopy = false;
    try {
      const successful = document.execCommand('copy');
      isCopy = !!successful;
    } catch (err) {
      isCopy = false;
    }
    document.body.removeChild(el);
    if (selected && document.getSelection) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
    cb && cb(isCopy);
  }

  return copyTextToClipboard;

}));
//# sourceMappingURL=copy-to-clipboard.umd.js.map


/***/ }),

/***/ 858:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(787),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(858);
} else {}


/***/ }),

/***/ 787:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

/***/ }),

/***/ 156:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Affix: () => (/* reexport */ Affix),
  Alert: () => (/* reexport */ react_alert_esm),
  AutoLink: () => (/* reexport */ react_auto_link_esm),
  Avatar: () => (/* reexport */ react_avatar_esm),
  BackTop: () => (/* reexport */ react_back_top_esm),
  Badge: () => (/* reexport */ react_badge_esm),
  Breadcrumb: () => (/* reexport */ react_breadcrumb_esm),
  Button: () => (/* reexport */ esm),
  ButtonGroup: () => (/* reexport */ react_button_group_esm),
  Calendar: () => (/* reexport */ Calendar),
  Card: () => (/* reexport */ react_card_esm),
  Carousel: () => (/* reexport */ react_carousel_esm),
  Cascader: () => (/* reexport */ react_cascader_esm),
  Checkbox: () => (/* reexport */ react_checkbox_esm),
  CheckboxGroup: () => (/* reexport */ CheckboxGroup),
  Circle: () => (/* reexport */ Circle),
  Col: () => (/* reexport */ Col),
  Collapse: () => (/* reexport */ react_collapse_esm),
  CopyToClipboard: () => (/* reexport */ CopyToClipboard),
  DateInput: () => (/* reexport */ DateInput),
  DateInputRange: () => (/* reexport */ DateInputRange),
  DatePicker: () => (/* reexport */ DatePicker),
  DatePickerCaption: () => (/* reexport */ DatePickerCaption),
  DatePickerDay: () => (/* reexport */ DatePickerDay),
  DatePickerMonth: () => (/* reexport */ DatePickerMonth),
  DatePickerYear: () => (/* reexport */ DatePickerYear),
  DayRect: () => (/* reexport */ DayRect),
  Descriptions: () => (/* reexport */ react_descriptions_esm),
  Divider: () => (/* reexport */ react_divider_esm),
  Drawer: () => (/* reexport */ react_drawer_esm),
  Dropdown: () => (/* reexport */ Dropdown),
  Empty: () => (/* reexport */ react_empty_esm),
  FileInput: () => (/* reexport */ react_file_input_esm),
  Form: () => (/* reexport */ react_form_esm),
  FormItem: () => (/* reexport */ FormItem),
  Icon: () => (/* reexport */ Icon),
  Input: () => (/* reexport */ react_input_esm),
  InputNumber: () => (/* reexport */ InputNumber),
  Layout: () => (/* reexport */ react_layout_esm),
  LayoutContent: () => (/* reexport */ LayoutContent),
  LayoutContext: () => (/* reexport */ LayoutContext),
  LayoutFooter: () => (/* reexport */ LayoutFooter),
  LayoutHeader: () => (/* reexport */ LayoutHeader),
  LayoutSider: () => (/* reexport */ LayoutSider),
  Line: () => (/* reexport */ Line),
  List: () => (/* reexport */ react_list_esm),
  ListItem: () => (/* reexport */ ListItem),
  Loader: () => (/* reexport */ react_loader_esm),
  Menu: () => (/* reexport */ react_menu_esm),
  MenuDivider: () => (/* reexport */ MenuDivider),
  MenuItem: () => (/* reexport */ MenuItem),
  Message: () => (/* reexport */ Message),
  Modal: () => (/* reexport */ react_modal_esm),
  MonthPicker: () => (/* reexport */ MonthPicker),
  Notify: () => (/* reexport */ react_notify_esm),
  Overlay: () => (/* reexport */ Overlay),
  OverlayTrigger: () => (/* reexport */ react_overlay_trigger_esm),
  Pagination: () => (/* reexport */ Pagination),
  PinCode: () => (/* reexport */ react_pin_code_esm),
  Popover: () => (/* reexport */ Popover),
  Portal: () => (/* reexport */ Portal),
  Progress: () => (/* reexport */ react_progress_esm),
  Radio: () => (/* reexport */ esm_Radio),
  RadioAbstract: () => (/* reexport */ RadioAbstract),
  RadioButton: () => (/* reexport */ esm_RadioButton),
  RadioGroup: () => (/* reexport */ esm_RadioGroup),
  Rate: () => (/* reexport */ Rate),
  Row: () => (/* reexport */ Row_Row),
  SearchSelect: () => (/* reexport */ SearchSelect),
  SearchTree: () => (/* reexport */ react_search_tree_esm),
  Select: () => (/* reexport */ react_select_esm),
  Slider: () => (/* reexport */ Slider),
  Split: () => (/* reexport */ Split),
  Steps: () => (/* reexport */ react_steps_esm),
  SubMenu: () => (/* reexport */ SubMenu),
  Switch: () => (/* reexport */ react_switch_esm),
  Table: () => (/* reexport */ Table),
  Tabs: () => (/* reexport */ Tabs),
  Tag: () => (/* reexport */ react_tag_esm),
  Textarea: () => (/* reexport */ react_textarea_esm),
  ThemeContext: () => (/* reexport */ ThemeContext),
  TimePicker: () => (/* reexport */ TimePicker),
  TimePickerTime: () => (/* reexport */ TimePickerTime),
  Tooltip: () => (/* reexport */ react_tooltip_esm),
  Transfer: () => (/* reexport */ react_transfer_esm),
  Tree: () => (/* reexport */ Tree),
  TreeChecked: () => (/* reexport */ TreeChecked),
  canUseDOM: () => (/* reexport */ canUseDOM),
  formatter: () => (/* reexport */ formatter),
  getChildKeys: () => (/* reexport */ getChildKeys),
  randomid: () => (/* reexport */ randomid)
});

;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
;// CONCATENATED MODULE: ../utils/esm/noop.js
function noop() {}

;// CONCATENATED MODULE: ../utils/esm/getScroll.js
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} top `true` or `false`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(target, top) {
  if (typeof window === 'undefined') {
    return 0;
  }
  var prop = top ? 'pageYOffset' : 'pageXOffset';
  var method = top ? 'scrollTop' : 'scrollLeft';
  var isWindow = target === window;
  var ret = isWindow ? target[prop] : target[method];
  if (isWindow && typeof ret !== 'number') {
    ret = document.documentElement[method];
  }
  return ret;
}

;// CONCATENATED MODULE: ../react-affix/esm/utils.js

var getTargetRect = target => {
  return target !== window ? target.getBoundingClientRect() : {
    top: 0,
    left: 0,
    bottom: 0
  };
};
var getOffset = (element, target) => {
  var elemRect = element.getBoundingClientRect();
  var targetRect = getTargetRect(target);
  var scrollTop = getScroll(target, true);
  var scrollLeft = getScroll(target);
  var docElem = window.document.body;
  var clientTop = docElem.clientTop || 0;
  var clientLeft = docElem.clientLeft || 0;
  return {
    top: elemRect.top - targetRect.top + scrollTop - clientTop,
    left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
    width: elemRect.width,
    height: elemRect.height
  };
};
var getDefaultTarget = () => typeof window !== 'undefined' ? window : null;

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(664);
;// CONCATENATED MODULE: ../react-affix/esm/index.js


var _excluded = ["prefixCls", "className", "children", "offsetTop", "offsetBottom", "target", "onChange"];




class Affix extends (external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderStyle: undefined,
      affixStyle: undefined
    };
    this.box = void 0;
    this.target = void 0;
    this.events = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
    this.eventHandlers = {};
    this.timeout = void 0;
    this.getInstance = node => {
      if (node) {
        this.box = node;
      }
    };
    this.updatePosition = this.updatePosition.bind(this);
  }
  componentDidMount() {
    var target = this.props.target || getDefaultTarget;
    // Wait for parent component ref has its value
    this.timeout = window.setTimeout(() => {
      this.target = target();
      this.setTargetEventListeners();
    });
  }
  componentWillUnmount() {
    this.clearEventListeners();
    clearTimeout(this.timeout);
  }
  updatePosition() {
    var {
      offsetTop
    } = this.props;
    var {
      offsetBottom
    } = this.props;
    if (!this.box || !this.box.offsetParent) {
      return;
    }
    var elemSize = {
      width: this.box.clientWidth,
      height: this.box.clientHeight
    };
    var offsetMode = {
      top: true,
      bottom: false
    };
    if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
      offsetMode.top = true;
      offsetTop = 0;
    }
    if (typeof offsetBottom === 'number') {
      offsetMode.top = false;
      offsetMode.bottom = true;
    }
    var elemOffset = getOffset(this.box, this.target);
    var box = this.box.getBoundingClientRect();
    var bottom = document.documentElement.clientHeight - box.y - elemOffset.height;
    if (offsetMode.top && box.y < 0) {
      this.setPlaceholderStyle(_extends({}, elemSize));
      this.setAffixStyle({
        position: 'fixed',
        top: offsetTop || 0,
        left: elemOffset.left,
        width: elemOffset.width
      });
    } else if (offsetMode.bottom && bottom < 0) {
      this.setPlaceholderStyle(_extends({}, elemSize));
      this.setAffixStyle({
        position: 'fixed',
        bottom: offsetBottom || 0,
        left: elemOffset.left,
        width: elemOffset.width
      });
    } else {
      this.setPlaceholderStyle();
      this.setAffixStyle();
    }
  }
  setAffixStyle(affixStyle) {
    var {
      onChange
    } = this.props;
    var affixed = !!this.state.affixStyle;
    this.setState({
      affixStyle
    }, () => {
      onChange && onChange(affixed);
    });
  }
  setPlaceholderStyle(placeholderStyle) {
    this.setState({
      placeholderStyle
    });
  }
  // 设置监听事件
  setTargetEventListeners() {
    this.clearEventListeners();
    this.events.forEach(eventName => {
      this.eventHandlers[eventName] = this.updatePosition;
      this.target && this.target.addEventListener(eventName, this.updatePosition, false);
    });
  }
  clearEventListeners() {
    this.events.forEach(eventName => {
      var handler = this.eventHandlers[eventName];
      this.target && this.target.removeEventListener(eventName, handler, false);
    });
  }
  render() {
    var _this$props = this.props,
      {
        prefixCls,
        className,
        children
      } = _this$props,
      resetProps = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var cls = [className, prefixCls].filter(Boolean).join(' ').trim();
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({}, resetProps, {
      ref: this.getInstance,
      style: _extends({}, this.state.placeholderStyle, this.props.style),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: cls,
        style: this.state.affixStyle,
        children: children
      })
    }));
  }
}
Affix.defaultProps = {
  prefixCls: 'w-affix',
  onChange: noop
};

;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ../../node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
;// CONCATENATED MODULE: ../../node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass_addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
;// CONCATENATED MODULE: ../../node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass_removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(156);
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_);
;// CONCATENATED MODULE: ../../node_modules/react-transition-group/esm/config.js
/* harmony default export */ const config = ({
  disabled: false
});
;// CONCATENATED MODULE: ../../node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ const TransitionGroupContext = (external_root_React_commonjs2_react_commonjs_react_amd_react_default().createContext(null));
;// CONCATENATED MODULE: ../../node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};
;// CONCATENATED MODULE: ../../node_modules/react-transition-group/esm/Transition.js









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.only(children), childProps))
    );
  };

  return Transition;
}((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function Transition_noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: Transition_noop,
  onEntering: Transition_noop,
  onEntered: Transition_noop,
  onExit: Transition_noop,
  onExiting: Transition_noop,
  onExited: Transition_noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const esm_Transition = (Transition);
;// CONCATENATED MODULE: ../../node_modules/react-transition-group/esm/CSSTransition.js











var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass_addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass_removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) forceReflow(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(esm_Transition, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? 0 : {};
/* harmony default export */ const esm_CSSTransition = (CSSTransition);
;// CONCATENATED MODULE: ../react-portal/esm/index.js


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function Portal(props) {
  var {
    container
  } = props;
  var defaultNode = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  var containerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(container);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    return () => {
      if (defaultNode.current && containerRef.current) {
        containerRef.current.removeChild(defaultNode.current);
        defaultNode.current = undefined;
      }
    };
  }, []);
  if (!canUseDOM) {
    return null;
  }
  if (!containerRef.current) {
    containerRef.current = document.body;
  }
  if (!defaultNode.current) {
    defaultNode.current = document.createElement('div');
    containerRef.current.appendChild(defaultNode.current);
  }
  return /*#__PURE__*/external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().createPortal(props.children, defaultNode.current);
}

;// CONCATENATED MODULE: ../react-overlay/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const style = ({});
;// CONCATENATED MODULE: ../react-overlay/esm/index.js


var esm_excluded = ["className", "style", "isOpen", "prefixCls", "usePortal", "maskClosable", "backdropProps", "portalProps", "hasBackdrop", "unmountOnExit", "timeout", "transitionName", "onOpening", "onOpened", "onClosing", "onClosed", "onClose", "onEnter", "onExiting", "onEntering", "onEntered", "onExit", "children", "dialogProps"];
/**
 * Overlay 组件
 * ---------------
 * 动画库 react-transition-group 文档
 * 老的文档
 * https://facebook.github.io/react/docs/animation.html
 * 新的文档
 * https://reactcommunity.org/react-transition-group/
 * 动画效果
 * https://daneden.github.io/animate.css/
 */







function Overlay(props) {
  var {
      className,
      style,
      isOpen: _ = false,
      prefixCls = 'w-overlay',
      usePortal = true,
      maskClosable = true,
      backdropProps = {},
      portalProps = {},
      hasBackdrop = true,
      unmountOnExit = true,
      // 设置 true 销毁根节点
      timeout = 300,
      transitionName = 'w-overlay',
      // onEnter = noop,
      onOpening = noop,
      onOpened = noop,
      onClosing = noop,
      onClosed = noop,
      onClose = noop,
      onEnter: _onEnter = noop,
      onExiting: _onExiting = noop,
      onEntering: _onEntering = noop,
      onEntered: _onEntered = noop,
      onExit = noop,
      children,
      dialogProps = {}
    } = props,
    otherProps = _objectWithoutPropertiesLoose(props, esm_excluded);
  var [isOpen, setIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  // const [isOpen, setIsOpen] = useState(props.isOpen || false);
  var [visible, setVisible] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  var container = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var overlay = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (isOpen !== props.isOpen && props.isOpen) {
      setVisible(true);
    }
    if (isOpen !== props.isOpen && !props.isOpen) {
      overlayWillClose();
      setIsOpen(false);
    }
  }, [props.isOpen]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (visible) {
      overlayWillOpen();
      setIsOpen(true);
    }
  }, [visible]);
  var decoratedChild = typeof children === 'object' ? /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(children, _extends({}, dialogProps, {
    style: _extends({}, children.props.style, dialogProps.style),
    className: [children.props.className, prefixCls + "-content"].filter(Boolean).join(' ').trim(),
    tabIndex: 0
  })) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", _extends({}, dialogProps, {
    className: prefixCls + "-content",
    children: children
  }));
  function handleClosed(node) {
    setVisible(false);
    onClosed && onClosed(node);
  }
  function handleBackdropMouseDown(e) {
    if (e.target !== container.current && usePortal) {
      return;
    }
    if (maskClosable && hasBackdrop) {
      overlayWillClose();
      setIsOpen(false);
      onClose && onClose(e);
    }
    backdropProps && backdropProps.onMouseDown && backdropProps.onMouseDown(e);
  }
  function overlayWillOpen() {
    if (hasBackdrop && usePortal) {
      document.body.classList.add(prefixCls + "-open");
    }
  }
  function overlayWillClose() {
    if (hasBackdrop && usePortal) {
      document.body.classList.remove(prefixCls + "-open");
    }
    // if (unmountOnExit) {
    //   setVisible(false)
    // }
  }

  var TransitionGroupComp = /*#__PURE__*/(0,jsx_runtime.jsx)(esm_CSSTransition, _extends({
    classNames: transitionName,
    unmountOnExit: unmountOnExit,
    timeout: timeout,
    in: isOpen,
    onEnter: isAppearing => {
      _onEnter(overlay.current, isAppearing);
    },
    onEntering: isAppearing => {
      onOpening(overlay.current, isAppearing);
      _onEntering(overlay.current);
    },
    onEntered: isAppearing => {
      onOpened(overlay.current, isAppearing);
      _onEntered(overlay.current);
    },
    onExiting: () => {
      onClosing(overlay.current);
      _onExiting(overlay.current);
    },
    onExited: () => {
      handleClosed(overlay.current);
      onExit(overlay.current);
    },
    nodeRef: overlay
  }, otherProps, {
    children: status => {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: style,
        ref: overlay,
        className: [prefixCls, className, !usePortal ? prefixCls + "-inline" : null, isOpen ? prefixCls + "-enter-done" : null].filter(Boolean).join(' ').trim(),
        children: [hasBackdrop && /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)( /*#__PURE__*/(0,jsx_runtime.jsx)("div", {}), _extends({}, backdropProps, {
          onMouseDown: handleBackdropMouseDown,
          className: [prefixCls + "-backdrop", backdropProps.className].filter(Boolean).join(' ').trim(),
          tabIndex: maskClosable ? 0 : null
        })), usePortal ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          ref: container,
          onMouseDown: handleBackdropMouseDown,
          className: prefixCls + "-container",
          children: /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(decoratedChild, {
            'data-status': status
          })
        }) : /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(decoratedChild, {
          'data-status': status
        })]
      });
    }
  }));
  if (visible && usePortal) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Portal, _extends({}, _extends({}, portalProps), {
      children: TransitionGroupComp
    }));
  } else {
    return TransitionGroupComp;
  }
}

;// CONCATENATED MODULE: ../../node_modules/@uiw/icons/fonts/w-icon.json
const w_icon_namespaceObject = JSON.parse('{"adobe":["M20,1 L20,19.0010671 L12.6072222,1 L20,1 Z M7.39861111,1 L-1.68220993e-12,19.0010671 L-1.68220993e-12,1 L7.39861111,1 Z M10.0027778,7.26488497 L14.7138889,19 L11.6269444,19 L10.2172222,15.5814318 L6.77027778,15.5814318 L10.0027778,7.26488497 Z"],"alipay":["M20,13.6918519 L20,3.84592593 C20,1.72148148 18.2785185,0 16.1540741,0 L3.84592593,0 C1.72148148,0 0,1.72148148 0,3.84592593 L0,16.1540741 C0,18.2785185 1.72148148,20 3.84592593,20 L16.1540741,20 C18.0474074,20 19.6207407,18.6311111 19.9407407,16.8325926 C18.9214815,16.3940741 14.5007407,14.4859259 12.1985185,13.3837037 C10.4444444,15.5051852 8.61037037,16.7792593 5.84296296,16.7792593 C3.07555556,16.7792593 1.22962963,15.0755556 1.45481481,12.9896296 C1.6,11.6207407 2.53925926,9.3837037 6.6162963,9.76888889 C8.76444444,9.97037037 9.74814815,10.3733333 11.5022222,10.9511111 C11.9525926,10.1214815 12.3318519,9.20592593 12.6162963,8.23111111 L4.84740741,8.23111111 L4.84740741,7.46074074 L8.69037037,7.46074074 L8.69037037,6.07703704 L4,6.07703704 L4,5.22962963 L8.69037037,5.22962963 L8.69037037,3.23555556 C8.69037037,3.23555556 8.73481481,2.92148148 9.07851852,2.92148148 L11.0014815,2.92148148 L11.0014815,5.22962963 L16.002963,5.22962963 L16.002963,6.07703704 L11.0014815,6.07703704 L11.0014815,7.46074074 L15.0785185,7.46074074 C14.7051852,8.98962963 14.1362963,10.3881481 13.4251852,11.6148148 C14.6074074,12.0444444 20,13.6918519 20,13.6918519 Z M5.53777778,15.4607407 C2.61333333,15.4607407 2.15407407,13.6148148 2.30814815,12.8444444 C2.46222222,12.0740741 3.30962963,11.0755556 4.93333333,11.0755556 C6.80296296,11.0755556 8.47407407,11.5525926 10.48,12.5303704 C9.07259259,14.3674074 7.3362963,15.4607407 5.53777778,15.4607407 Z"],"aliwangwang":["M19.22908,6.57180321 C18.7362766,5.42095221 18.0263471,4.38542657 17.1261272,3.49886285 C16.2259072,2.61229913 15.1744308,1.91554174 14.0058527,1.42781157 C12.7958009,0.92326311 11.510121,0.66858627 10.1854071,0.66858627 C9.07781943,0.66858627 7.99462797,0.846379536 6.96022892,1.20196607 C4.19125976,-0.0930416382 0.900211828,-0.00174239364 0.756274224,0.00306282975 C0.214678494,0.0198811116 -0.143945706,0.560468744 0.0561031671,1.05540675 L1.78335442,5.33205558 C0.856298661,6.83849311 0.368374579,8.55876309 0.368374579,10.3342931 C0.368374579,11.6389113 0.626974342,12.9050877 1.13929463,14.0967831 C1.63209795,15.2476341 2.34202749,16.2831597 3.24224742,17.1697234 C4.14246735,18.0562871 5.19394375,18.7530445 6.36252192,19.2407747 C7.57257364,19.7453232 8.8582536,20 10.1829675,20 C11.5076814,20 12.7933613,19.7453232 14.0058527,19.2407747 C15.1744308,18.7554471 16.2259072,18.0562871 17.1261272,17.1697234 C18.0263471,16.2831597 18.733837,15.2476341 19.22908,14.0967831 C19.7414002,12.9050877 20,11.6389113 20,10.3342931 C20,9.02967498 19.7414002,7.76349862 19.22908,6.57180321 Z M10.6464954,8.42661945 C10.6464954,8.8687 10.2829919,9.22668914 9.83410176,9.22668914 L9.83410176,9.22668914 C9.38521161,9.22668914 9.02170817,8.8687 9.02170817,8.42661945 L9.02170817,6.97303937 C9.02170817,6.53095882 9.38521161,6.17296967 9.83410176,6.17296967 L9.83410176,6.17296967 C10.2829919,6.17296967 10.6464954,6.53095882 10.6464954,6.97303937 L10.6464954,8.42661945 Z M15.3671608,8.42661945 C15.3671608,8.8687 15.0036574,9.22668914 14.5547673,9.22668914 L14.5547673,9.22668914 C14.1058771,9.22668914 13.7423737,8.8687 13.7423737,8.42661945 L13.7423737,6.97303937 C13.7423737,6.53095882 14.1058771,6.17296967 14.5547673,6.17296967 L14.5547673,6.17296967 C15.0036574,6.17296967 15.3671608,6.53095882 15.3671608,6.97303937 L15.3671608,8.42661945 Z"],"android-o":["M4.07398016,6.44514442 C3.91051929,6.44514442 3.77800806,6.57287936 3.77800806,6.73044839 L3.77800806,12.7156816 C3.77800806,12.8732507 3.91051929,13.0009856 4.07398016,13.0009856 C4.23744104,13.0009856 4.36995227,12.8732507 4.36995227,12.7156816 L4.36995227,6.73044839 C4.36995227,6.57287936 4.23744104,6.44514442 4.07398016,6.44514442 Z M4.16300468,5.12738566 C5.0814568,5.12738566 5.82600935,5.84510129 5.82600935,6.73044839 L5.82600935,12.7156816 C5.82600935,13.6010287 5.0814568,14.3187444 4.16300468,14.3187444 C3.24455256,14.3187444 2.5,13.6010287 2.5,12.7156816 L2.5,6.73044839 C2.5,5.84510129 3.24455256,5.12738566 4.16300468,5.12738566 Z M5.90209221,6.62819569 L5.90209221,14.7579973 L14.1042877,14.7579973 L14.1042877,6.62819569 L5.90209221,6.62819569 Z M4.53505963,5.31043693 L15.4713202,5.31043693 L15.4713202,15.1972502 C15.4713202,15.6824356 15.0632927,16.075756 14.5599652,16.075756 L5.44641468,16.075756 C4.94308719,16.075756 4.53505963,15.6824356 4.53505963,15.1972502 L4.53505963,5.31043693 Z M15.9073327,6.42906211 C15.7438718,6.42906211 15.6113606,6.55679705 15.6113606,6.71436609 L15.6113606,12.6995993 C15.6113606,12.8571684 15.7438718,12.9849033 15.9073327,12.9849033 C16.0707935,12.9849033 16.2033048,12.7963549 16.2033048,12.6995993 L16.2033048,6.71436609 C16.2033048,6.55679705 16.0707935,6.42906211 15.9073327,6.42906211 Z M9.01765538,15.2049105 C9.395151,15.2049105 9.70117167,15.4999009 9.70117167,15.8637899 L9.70117167,18.1842373 C9.70117167,19.2928496 9.1045152,20 8.04153784,20 C6.99509657,20 6.37949269,19.3157378 6.31721896,18.1842373 L6.31721896,15.8637899 C6.31721896,15.4999009 6.62323962,15.2049105 7.00073524,15.2049105 C7.37823087,15.2049105 7.68425153,15.4999009 7.68425153,15.8637899 L7.68326089,18.1487766 C7.70822453,18.5952479 7.78648905,18.6822412 8.04153784,18.6822412 C8.28005053,18.6822412 8.33413909,18.6181361 8.33413909,18.1842373 L8.33413909,15.8637899 C8.33413909,15.4999009 8.64015976,15.2049105 9.01765538,15.2049105 Z M13.5586383,15.2049105 C13.9361339,15.2049105 14.2421546,15.4999009 14.2421546,15.8637899 L14.2421546,18.1842373 C14.2421546,19.2928496 13.6454981,20 12.5825208,20 C11.5360795,20 10.9204756,19.3157378 10.8582019,18.1842373 L10.8582019,15.8637899 C10.8582019,15.4999009 11.1642226,15.2049105 11.5417182,15.2049105 C11.9192138,15.2049105 12.2252345,15.4999009 12.2252345,15.8637899 L12.2242438,18.1487766 C12.2492075,18.5952479 12.327472,18.6822412 12.5825208,18.6822412 C12.8210335,18.6822412 12.875122,18.6181361 12.875122,18.1842373 L12.875122,15.8637899 C12.875122,15.4999009 13.1811427,15.2049105 13.5586383,15.2049105 Z M12.6639411,0.271165158 C12.8861029,-0.0230341093 13.3136142,-0.0879234601 13.6188142,0.126230737 C13.9240142,0.340384933 13.9913299,0.752486839 13.769168,1.04668611 L13.769168,1.04668611 L13.0882553,1.94928274 C14.2439039,2.68253194 15.1108008,3.81236851 15.4713993,5.15121253 C15.5879165,5.12484976 15.7108148,5.11130335 15.8369953,5.11130335 C16.7554474,5.11130335 17.5,5.82901899 17.5,6.71436609 L17.5,12.6995993 C17.5,13.5849464 16.7554474,14.3026621 15.8369953,14.3026621 C14.9185432,14.3026621 14.1739906,13.5849464 14.1739906,12.6995993 L14.1739906,6.71436609 C14.1739906,6.39567442 14.2704645,6.09870324 14.4367962,5.84910926 L14.2342372,5.8808147 C13.904776,3.86754294 12.0959084,2.36410577 9.95841577,2.36410577 C7.746647,2.36410577 5.89667151,3.97144135 5.65588732,6.0729355 L4.29711724,5.92827171 C4.48394229,4.29771718 5.40552419,2.89384247 6.72648986,2.01557004 L5.99462688,1.04668611 C5.77246501,0.752486839 5.83978071,0.340384933 6.14498071,0.126230737 C6.45018072,-0.0879234601 6.877692,-0.0230341093 7.09985388,0.271165158 L7.95068917,1.39774461 C8.57641856,1.17040256 9.25342796,1.04634701 9.95841577,1.04634701 C10.617415,1.04634701 11.2526282,1.15490163 11.8446082,1.35524267 Z M8.63615736,3.33742135 C8.88782111,3.33742135 9.09183489,3.53408159 9.09183489,3.77667427 C9.09183489,4.01926696 8.88782111,4.21592719 8.63615736,4.21592719 C8.38449361,4.21592719 8.18047983,4.01926696 8.18047983,3.77667427 C8.18047983,3.53408159 8.38449361,3.33742135 8.63615736,3.33742135 Z M11.3702225,3.33742135 C11.6218863,3.33742135 11.8259,3.53408159 11.8259,3.77667427 C11.8259,4.01926696 11.6218863,4.21592719 11.3702225,4.21592719 C11.1185588,4.21592719 10.914545,4.01926696 10.914545,3.77667427 C10.914545,3.53408159 11.1185588,3.33742135 11.3702225,3.33742135 Z"],"android":["M12.73532,1.8275782 L13.6004468,0.254234987 C13.6465354,0.171670366 13.6164105,0.0662850893 13.5329875,0.0211566008 C13.4482772,-0.0247411233 13.3439985,0.00679753626 13.2994548,0.0891057454 L12.4250587,1.67809008 C11.6897009,1.35321625 10.866543,1.17013817 9.99652404,1.17090741 C9.12804998,1.17013817 8.30643696,1.3521906 7.57339644,1.67655161 L6.69848542,0.0909006285 C6.65368421,0.00731036 6.54811814,-0.0232026521 6.4657251,0.0224386601 C6.3817872,0.0670543249 6.35088981,0.171926778 6.39749337,0.254491399 L7.26313518,1.82629614 C5.562234,2.70014778 4.41336615,4.36297874 4.41439606,6.27273432 L15.5799394,6.27170867 C15.5804544,4.36246591 14.4336463,2.70245549 12.73532,1.8275782 L12.73532,1.8275782 Z M7.45727376,4.25861911 C7.20005301,4.25810628 6.99072321,4.04964343 6.99072321,3.79246233 C6.99072321,3.53656329 7.20005301,3.32630556 7.45753124,3.32630556 C7.71655434,3.32630556 7.92588413,3.53656329 7.92614161,3.79246233 C7.92614161,4.04964343 7.71655434,4.25861911 7.45727376,4.25861911 L7.45727376,4.25861911 Z M15.5418326,6.7001729 L15.5438925,14.7115053 C15.543635,15.1930467 15.2817796,15.6092032 14.8955623,15.8392046 C14.6973041,15.9574105 14.4681484,16.0297187 14.2207119,16.0294622 L14.2207119,16.0294622 L13.3167058,16.0299751 L13.3174782,18.7638384 C13.3174782,19.4453811 12.7626126,19.9994872 12.0777206,19.9989744 C11.9922378,19.9989744 11.9088148,19.9905128 11.8282242,19.9741024 C11.2640894,19.8594863 10.8382204,19.3607652 10.8374479,18.7651205 L10.8374479,18.7651205 L10.8374479,16.0302315 L9.16409693,16.0302315 L9.16486937,18.7651205 C9.16486937,19.361278 8.73977281,19.8594863 8.17486558,19.9748716 C8.09401742,19.991282 8.01033699,20 7.92485422,20 C7.32698978,20 6.82696706,19.5764076 6.71161681,19.01384 C6.69513821,18.933583 6.68638395,18.8505056 6.68638395,18.7653769 L6.68638395,18.7653769 L6.68535403,16.0304879 L5.78469519,16.0304879 C5.26355926,16.0304879 4.81812192,15.729204 4.60261265,15.294073 C4.51532753,15.1181745 4.46177206,14.9227886 4.46202953,14.7127873 L4.46202953,14.7127873 L4.46022719,6.70222419 L15.5418326,6.7001729 Z M2.73950019,6.46888939 C3.4241348,6.46888939 3.97977281,7.02171338 3.97977281,7.70299971 L3.97977281,7.70299971 L3.97977281,12.8727758 C3.97977281,12.9581609 3.97127603,13.0414948 3.95479743,13.1220081 C3.83970466,13.685345 3.33993942,14.1076553 2.7405301,14.1084245 C2.48820144,14.1079117 2.25389625,14.0320138 2.05795532,13.9027822 C1.72271867,13.6820116 1.50102991,13.3043169 1.50077243,12.8727758 L1.50077243,12.8727758 L1.5,7.70325612 C1.50025748,7.02248261 2.05486558,6.46888939 2.73950019,6.46888939 Z M17.2594699,6.46760734 C17.944362,6.46760734 18.4992276,7.0199185 18.4992276,7.70197406 L18.4992276,7.70197406 L18.5,12.8709809 C18.4997425,13.5540621 17.9453919,14.105604 17.2610148,14.105604 C16.5758652,14.1061168 16.0212571,13.5540621 16.0209996,12.8714937 L16.0209996,12.8714937 L16.0204847,7.70248688 C16.0202272,7.02043132 16.5750928,6.46709451 17.2594699,6.46760734 Z M12.5414388,3.32476709 C12.7981446,3.32527991 13.0087618,3.53605047 13.0087618,3.79194951 C13.0087618,4.04913061 12.799432,4.25759346 12.5414388,4.25759346 C12.2834457,4.25759346 12.0728285,4.04964343 12.0733434,3.79143669 C12.0733434,3.53605047 12.2829307,3.32579274 12.5414388,3.32476709 Z"],"apple":["M14.1222584,4.68222045 C15.4725648,4.68222045 16.9029698,5.42546577 17.9224981,6.71020766 C14.5825789,8.56144598 15.1252231,13.3836655 18.5,14.6731574 C18.0354768,15.7134008 17.8127331,16.1783979 17.2147121,17.0986421 C16.3803503,18.383384 15.2040857,19.9828739 13.7462394,19.9968738 C12.4508155,20.0091237 12.1183069,19.1443792 10.3600904,19.1541291 C8.60212114,19.1641291 8.23549641,20.0118737 6.93982533,19.9998738 C5.48197904,19.9861239 4.36702453,18.541633 3.53216835,17.2571411 C1.19793322,13.6649138 0.954175977,9.44944037 2.39372811,7.20895451 C3.41671741,5.61571456 5.03031122,4.68347045 6.54798433,4.68347045 C8.09309867,4.68347045 9.06441935,5.54046504 10.3417963,5.54046504 C11.5811016,5.54046504 12.335859,4.68222045 14.1222584,4.68222045 Z M13.7301702,0 C13.9091563,1.21549233 13.416203,2.40498482 12.767255,3.24697951 C12.0723243,4.14897382 10.8747989,4.84821941 9.71757008,4.81196964 C9.50644566,3.64872698 10.0490898,2.45198453 10.706196,1.64498962 C11.4300512,0.755745231 12.6700982,0.0739995331 13.7301702,0 Z"],"appstore-o":["M2.02020202,1.51515152 C1.74127033,1.51515152 1.51515152,1.74127033 1.51515152,2.02020202 L1.51515152,7.07070707 C1.51515152,7.34963876 1.74127033,7.57575758 2.02020202,7.57575758 L7.07070707,7.57575758 C7.34963876,7.57575758 7.57575758,7.34963876 7.57575758,7.07070707 L7.57575758,2.02020202 C7.57575758,1.74127033 7.34963876,1.51515152 7.07070707,1.51515152 L2.02020202,1.51515152 Z M7.07070707,10.9090909 C8.18643384,10.9090909 9.09090909,11.8135662 9.09090909,12.9292929 L9.09090909,17.979798 C9.09090909,19.0955247 8.18643384,20 7.07070707,20 L2.02020202,20 C0.904475253,20 0,19.0955247 0,17.979798 L0,12.9292929 C0,11.8135662 0.904475253,10.9090909 2.02020202,10.9090909 L7.07070707,10.9090909 Z M17.979798,10.9090909 C19.0955247,10.9090909 20,11.8135662 20,12.9292929 L20,17.979798 C20,19.0955247 19.0955247,20 17.979798,20 L12.9292929,20 C11.8135662,20 10.9090909,19.0955247 10.9090909,17.979798 L10.9090909,12.9292929 C10.9090909,11.8135662 11.8135662,10.9090909 12.9292929,10.9090909 L17.979798,10.9090909 Z M7.07070707,12.4242424 L2.02020202,12.4242424 C1.74127033,12.4242424 1.51515152,12.6503612 1.51515152,12.9292929 L1.51515152,17.979798 C1.51515152,18.2587297 1.74127033,18.4848485 2.02020202,18.4848485 L7.07070707,18.4848485 C7.34963876,18.4848485 7.57575758,18.2587297 7.57575758,17.979798 L7.57575758,12.9292929 C7.57575758,12.6503612 7.34963876,12.4242424 7.07070707,12.4242424 Z M17.979798,12.4242424 L12.9292929,12.4242424 C12.6503612,12.4242424 12.4242424,12.6503612 12.4242424,12.9292929 L12.4242424,17.979798 C12.4242424,18.2587297 12.6503612,18.4848485 12.9292929,18.4848485 L17.979798,18.4848485 C18.2587297,18.4848485 18.4848485,18.2587297 18.4848485,17.979798 L18.4848485,12.9292929 C18.4848485,12.6503612 18.2587297,12.4242424 17.979798,12.4242424 Z M7.07070707,0 C8.18643384,0 9.09090909,0.904475253 9.09090909,2.02020202 L9.09090909,7.07070707 C9.09090909,8.18643384 8.18643384,9.09090909 7.07070707,9.09090909 L2.02020202,9.09090909 C0.904475253,9.09090909 0,8.18643384 0,7.07070707 L0,2.02020202 C0,0.904475253 0.904475253,0 2.02020202,0 L7.07070707,0 Z M17.979798,0 C19.0955247,0 20,0.904475253 20,2.02020202 L20,7.07070707 C20,8.18643384 19.0955247,9.09090909 17.979798,9.09090909 L12.9292929,9.09090909 C11.8135662,9.09090909 10.9090909,8.18643384 10.9090909,7.07070707 L10.9090909,2.02020202 C10.9090909,0.904475253 11.8135662,0 12.9292929,0 L17.979798,0 Z M17.979798,1.51515152 L12.9292929,1.51515152 C12.6503612,1.51515152 12.4242424,1.74127033 12.4242424,2.02020202 L12.4242424,7.07070707 C12.4242424,7.34963876 12.6503612,7.57575758 12.9292929,7.57575758 L17.979798,7.57575758 C18.2587297,7.57575758 18.4848485,7.34963876 18.4848485,7.07070707 L18.4848485,2.02020202 C18.4848485,1.74127033 18.2587297,1.51515152 17.979798,1.51515152 Z"],"appstore":["M7.07070707,10.9090909 C8.18643384,10.9090909 9.09090909,11.8135662 9.09090909,12.9292929 L9.09090909,17.979798 C9.09090909,19.0955247 8.18643384,20 7.07070707,20 L2.02020202,20 C0.904475253,20 0,19.0955247 0,17.979798 L0,12.9292929 C0,11.8135662 0.904475253,10.9090909 2.02020202,10.9090909 L7.07070707,10.9090909 Z M17.979798,10.9090909 C19.0955247,10.9090909 20,11.8135662 20,12.9292929 L20,17.979798 C20,19.0955247 19.0955247,20 17.979798,20 L12.9292929,20 C11.8135662,20 10.9090909,19.0955247 10.9090909,17.979798 L10.9090909,12.9292929 C10.9090909,11.8135662 11.8135662,10.9090909 12.9292929,10.9090909 L17.979798,10.9090909 Z M7.07070707,0 C8.18643384,0 9.09090909,0.904475253 9.09090909,2.02020202 L9.09090909,7.07070707 C9.09090909,8.18643384 8.18643384,9.09090909 7.07070707,9.09090909 L2.02020202,9.09090909 C0.904475253,9.09090909 0,8.18643384 0,7.07070707 L0,2.02020202 C0,0.904475253 0.904475253,0 2.02020202,0 L7.07070707,0 Z M17.979798,0 C19.0955247,0 20,0.904475253 20,2.02020202 L20,7.07070707 C20,8.18643384 19.0955247,9.09090909 17.979798,9.09090909 L12.9292929,9.09090909 C11.8135662,9.09090909 10.9090909,8.18643384 10.9090909,7.07070707 L10.9090909,2.02020202 C10.9090909,0.904475253 11.8135662,0 12.9292929,0 L17.979798,0 Z"],"area-chart":["M9.08745861,2.0538648 C9.28450295,2.0538648 9.44439958,2.21357393 9.44439958,2.41098842 C9.44439958,2.42930245 9.43659318,2.44519257 9.43390132,2.46296795 L9.43390132,2.46296795 L9.44439958,2.46296795 L9.44439958,10.2176138 C9.44439958,10.414759 9.60402703,10.5747374 9.80107136,10.5747374 L9.80107136,10.5747374 L17.5802848,10.5747374 C17.7773291,10.5747374 17.9369566,10.7347159 17.9369566,10.931861 C17.9369566,10.9350929 17.9350723,10.9377862 17.9350723,10.9412874 C17.9356106,10.970105 17.9369566,10.9983841 17.9369566,11.0269324 C17.9369566,15.9824939 13.9215053,20 8.96847829,20 C4.01545129,20 0,15.9824939 0,11.0269324 C0,6.07137086 4.01545129,2.0538648 8.96847829,2.0538648 C9.00024227,2.0538648 9.03173706,2.05601939 9.06350104,2.05628872 L9.06350104,2.05628872 C9.07184581,2.05817398 9.07884465,2.0538648 9.08745861,2.0538648 Z M11.1286979,-8.8817842e-16 C16.0063528,0.0509022354 19.949393,3.99596014 20,8.87611096 C20,9.07325613 19.8401034,9.23323458 19.6433282,9.23323458 C19.6247544,9.23323458 19.6088724,9.22542419 19.5911061,9.22273095 L19.5911061,9.22273095 L19.5911061,9.23323458 L11.1286979,9.23323458 C10.9319228,9.23323458 10.7720262,9.07325613 10.7720262,8.87611096 L10.7720262,8.87611096 L10.7720262,0.409103151 L10.7825244,0.409103151 C10.7798326,0.391327767 10.7720262,0.375437651 10.7720262,0.35712362 C10.7720262,0.159978454 10.9319228,-8.8817842e-16 11.1286979,-8.8817842e-16 Z"],"arrow-down":["M9.36400524,0.765388182 C9.3265251,6.18361654 9.28621008,11.7010447 9.24306018,17.3176727 C6.9263468,15.0340322 4.77529907,12.913737 2.78991699,10.9567871 C2.40493774,10.6445618 1.98814392,10.7356415 1.72257975,10.9920665 C1.47450706,11.231602 1.37013245,11.692215 1.73001445,12.0828586 C4.09763706,14.4084789 6.7045168,16.9739361 9.55065366,19.77923 C9.71166808,19.9273389 9.89601644,20.0013933 10.1036987,20.0013933 C10.311381,20.0013933 10.4910075,19.9273389 10.6425781,19.77923 C13.3685913,17.0291017 15.9295654,14.4439697 18.3255005,12.0238342 C18.5,11.8265381 18.6420725,11.3658011 18.2708348,10.9920665 C17.8995972,10.6183319 17.3861694,10.7634524 17.1782525,10.9920665 C15.2655328,12.9251516 13.1366267,15.0706337 10.7915344,17.4285126 C10.8330485,11.8199717 10.8722548,6.26559692 10.9091532,0.765388182 C10.9091532,0.505249023 10.6967468,2.76401124e-12 10.1419201,2.76401124e-12 C9.58709338,2.76401124e-12 9.36400524,0.468826294 9.36400524,0.765388182 Z"],"arrow-left":["M7.39727345,2.21077392 C7.67341324,1.93425491 8.12633841,1.92915248 8.40891014,2.19937732 C8.69148187,2.46960216 8.69669599,2.91282562 8.4205562,3.18934463 L8.4205562,3.18934463 L2.373,9.244 L19.3043125,9.34868466 C19.6909046,9.35104785 20.0023837,9.66635841 20.0000338,10.0529505 C19.9976573,10.4395426 19.6823467,10.7510217 19.2957546,10.7486719 L2.487,10.645 L8.79010593,16.8045692 C9.04172326,17.0504435 9.06714844,17.4340657 8.86619976,17.7077757 L8.7908324,17.7946019 C8.51165882,18.0681882 8.05870375,18.0685065 7.77912894,17.7953128 L7.77912894,17.7953128 L0.20989415,10.398842 C-0.0675492719,10.127731 -0.0702933194,9.68859574 0.203741272,9.41418482 L0.203741272,9.41418482 Z"],"arrow-right":["M0.695997687,9.34868466 C6.21418714,9.3186208 11.8614965,9.2867337 17.6379259,9.25302337 C14.8305924,6.44274973 12.8025874,4.41123454 11.553911,3.15847778 C11.4109955,2.9790802 11.3956604,2.6040802 11.6660614,2.31109619 C11.9364624,2.01811218 12.4182129,2.02970886 12.5556963,2.17181396 C14.9183559,4.54343669 17.3282985,6.95313517 19.7855241,9.40090942 C19.9289003,9.53100586 20.0005884,9.69861857 20.0005884,9.90374756 C20.0005884,10.1088765 19.9289003,10.2761485 19.7855241,10.4055634 C17.3242091,12.8126678 14.7912145,15.2866465 12.1865404,17.8274994 C11.8800201,18.075058 11.4340574,18.0524465 11.1715088,17.7644958 C10.9089602,17.4765452 10.88187,17.1758701 11.2333391,16.782074 C13.2345994,14.821818 15.3300213,12.7784284 17.5196048,10.6519052 C11.8068483,10.6901004 6.19897921,10.7223515 0.695997687,10.7486585 C0.419342041,10.7486585 9.26601288e-05,10.5372009 9.26601288e-05,10.0294342 C9.26601288e-05,9.52166748 0.388336182,9.34868466 0.695997687,9.34868466 Z"],"arrow-up":["M9.55129093,0.222044494 L1.73065172,7.91841597 C1.4246368,8.33387825 1.42215857,8.6974756 1.72321702,9.00920802 C2.02427546,9.32094043 2.38846618,9.32313031 2.81578916,9.01577766 L9.24369745,2.68173218 L9.24369745,19.3200989 C9.28496783,19.7733663 9.56265001,20.0004431 10.076744,20.0013292 C10.5908379,20.0021425 10.8685201,19.7750657 10.9097905,19.3200989 L10.7990417,2.68173218 L17.1788898,9.00920802 C17.5942815,9.33026775 17.9584756,9.33026775 18.2714721,9.00920802 C18.5844686,8.68814828 18.6048686,8.34558105 18.3326721,7.98150635 L10.6335754,0.222044494 C10.4792786,0.0740148312 10.2936681,0 10.076744,0 C9.85981987,0 9.68466885,0.0740148312 9.55129093,0.222044494 Z"],"arrows-alt":["M9.16274989,10.7621754 C9.4384197,11.03322 9.44216913,11.4764196 9.17112449,11.7520894 L2.43398031,18.6058592 L6.7,18.6048592 C7.08659932,18.6048592 7.4,18.9182599 7.4,19.3048592 C7.4,19.6914586 7.08659932,20.0048592 6.7,20.0048592 L0.7,20.0048592 C0.313400675,20.0048592 3.01980663e-14,19.6914586 3.01980663e-14,19.3048592 L3.01980663e-14,13.3048592 C3.01980663e-14,12.9182599 0.313400675,12.6048592 0.7,12.6048592 C1.08659932,12.6048592 1.4,12.9182599 1.4,13.3048592 L1.40098031,17.6588592 L8.17283582,10.77055 C8.44388047,10.4948802 8.88708009,10.4911307 9.16274989,10.7621754 Z M19.3018964,0 C19.6884957,0 20.0018964,0.313400675 20.0018964,0.7 L20.0018964,6.7 C20.0018964,7.08659932 19.6884957,7.4 19.3018964,7.4 C18.9152971,7.4 18.6018964,7.08659932 18.6018964,6.7 L18.6009161,2.346 L11.8290606,9.23430929 C11.5580159,9.50997909 11.1148163,9.51372852 10.8391465,9.24268388 C10.5634767,8.97163924 10.5597273,8.52843961 10.8307719,8.25276981 L17.5679161,1.399 L13.3018964,1.4 C12.9152971,1.4 12.6018964,1.08659932 12.6018964,0.7 C12.6018964,0.313400675 12.9152971,0 13.3018964,0 L19.3018964,0 Z"],"asterisk":["M10,0 C10.4119963,0 10.7459853,0.34387982 10.7459853,0.768077075 L10.745,8.493 L16.8154827,3.95222445 C17.1184936,3.72555455 17.5315909,3.76782185 17.7861831,4.03518543 L17.857537,4.12210354 C18.0996419,4.46533027 18.0257529,4.94566237 17.692441,5.19499926 L17.692441,5.19499926 L11.268,9.999 L17.692441,14.8050007 C18.0257529,15.0543376 18.0996419,15.5346697 17.857537,15.8778965 C17.6153112,16.2210353 17.1487947,16.2971124 16.8154827,16.0477756 L10.745,11.506 L10.7459853,19.2319229 C10.7459853,19.6561202 10.4119963,20 10,20 C9.58800371,20 9.25401473,19.6561202 9.25401473,19.2319229 L9.254,11.506 L3.18451733,16.0477756 C2.88150642,16.2744455 2.4684091,16.2321781 2.21381688,15.9648146 L2.14246296,15.8778965 C1.90035809,15.5346697 1.97424705,15.0543376 2.30755905,14.8050007 L2.30755905,14.8050007 L8.731,10 L2.30755905,5.19499926 C1.97424705,4.94566237 1.90035809,4.46533027 2.14246296,4.12210354 C2.38468877,3.77896469 2.85120533,3.70288756 3.18451733,3.95222445 L9.254,8.493 L9.25401473,0.768077075 C9.25401473,0.34387982 9.58800371,0 10,0 Z"],"backward":["M10.9028705,2.93100117 L10.902,8.039 L17.5169038,2.44595413 C18.1369923,1.92037754 19.0971295,2.12302523 19.0971295,2.93100117 L19.0971295,17.0705802 C19.0971295,17.8759413 18.1369923,18.0798964 17.5169038,17.5543198 L10.902,11.961 L10.9028705,17.0705802 C10.9028705,17.8759413 9.94273334,18.0798964 9.32264475,17.5543198 L1.23720398,10.717902 C0.791426009,10.3413695 0.791426009,9.66021181 1.23720398,9.28367933 L9.32264475,2.44595413 C9.94273334,1.92037754 10.9028705,2.12302523 10.9028705,2.93100117 Z"],"baidu":["M3.7233025,10.5391892 C5.85481651,10.071003 5.56081458,7.47015333 5.50038085,6.90199847 C5.39584683,6.02727326 4.38480685,4.4960876 3.01443118,4.6193822 C1.29125319,4.77433352 1.0397182,7.31853429 1.0397182,7.31853429 C0.805333325,8.49316529 1.59668853,11.0057093 3.7233025,10.5383561 M7.68007851,6.1730608 C8.85608624,6.1730608 9.80669249,4.79016189 9.80669249,3.08236504 C9.80669249,1.38289891 8.85935293,0 7.6833452,0 C6.50733747,0 5.55101452,1.37540126 5.55101452,3.08319811 C5.55101452,4.79099496 6.5065208,6.17389387 7.68252853,6.17389387 M12.7516118,6.37799642 C14.3277889,6.59459504 15.3339288,4.87846748 15.5380968,3.57887573 C15.7422648,2.2876147 14.7214248,0.779755048 13.6107508,0.521502842 C12.4919101,0.258252206 11.1117344,2.08267908 10.9729002,3.27063923 C10.8258992,4.72851458 11.1770682,6.17805922 12.7450785,6.38382792 M18.9852695,8.56814174 C18.9852695,7.9466703 18.4846495,6.07475834 16.6087539,6.07475834 C14.7344915,6.07475834 14.4772399,7.8408702 14.4772399,9.09047765 C14.4772399,10.2817701 14.5736072,11.9395826 16.9150059,11.8895983 C19.2466045,11.8312833 18.9918029,9.19044625 18.9918029,8.56564252 M16.6169206,14.0130979 C16.6169206,14.0130979 14.1791546,12.0887025 12.7573285,10.0143541 C10.8299825,6.9511497 8.09004787,8.19825793 7.17619186,9.75110346 C6.26151919,11.3197773 4.84050985,12.3019688 4.6404252,12.5643864 C4.43625719,12.8226386 1.70040587,14.3304982 2.30964321,17.0796346 C2.92214724,19.828771 5.05366125,19.7787867 5.05366125,19.7787867 C5.05366125,19.7787867 6.62167155,19.9370703 8.45101691,19.5205345 C10.2803623,19.1039987 11.8483726,19.6205031 11.8483726,19.6205031 C11.8483726,19.6205031 16.1007839,21.0783784 17.2776083,18.2792578 C18.4405492,15.4718064 16.6161039,14.0222617 16.6161039,14.0222617"],"bar-chart":["M3,6 C3.55228475,6 4,6.44771525 4,7 L4,19 C4,19.5522847 3.55228475,20 3,20 L1,20 C0.44771525,20 6.76353751e-17,19.5522847 0,19 L0,7 C-6.76353751e-17,6.44771525 0.44771525,6 1,6 L3,6 Z M8.36512054,12 C8.91740529,12 9.36512054,12.4477153 9.36512054,13 L9.36512054,19 C9.36512054,19.5522847 8.91740529,20 8.36512054,20 L6.36512054,20 C5.81283579,20 5.36512054,19.5522847 5.36512054,19 L5.36512054,13 C5.36512054,12.4477153 5.81283579,12 6.36512054,12 L8.36512054,12 Z M13.69693,0 C14.2492147,-1.01453063e-16 14.69693,0.44771525 14.69693,1 L14.69693,19 C14.69693,19.5522847 14.2492147,20 13.69693,20 L11.69693,20 C11.1446452,20 10.69693,19.5522847 10.69693,19 L10.69693,1 C10.69693,0.44771525 11.1446452,-1.20591542e-16 11.69693,0 L13.69693,0 Z M19,0 C19.5522847,-1.01453063e-16 20,0.44771525 20,1 L20,19 C20,19.5522847 19.5522847,20 19,20 L17,20 C16.4477153,20 16,19.5522847 16,19 L16,1 C16,0.44771525 16.4477153,-1.20591542e-16 17,0 L19,0 Z"],"barcode":["M8.43839542,2.5 L9.32664756,2.5 L9.32664756,15.2294922 L8.43839542,15.2294922 L8.43839542,2.5 Z M6.21776506,2.5 L7.55014328,2.5 L7.55014328,15.2294922 L6.21776506,15.2294922 L6.21776506,2.5 Z M5.32951289,2.5 L5.77363897,2.5 L5.77363897,15.2294922 L5.32951289,15.2294922 L5.32951289,2.5 Z M2.22063039,2.5 L2.66475645,2.5 L2.66475645,15.2294922 L2.22063039,15.2294922 L2.22063039,2.5 Z M3.10888253,2.5 L4.44126075,2.5 L4.44126075,15.2294922 L3.10888253,15.2294922 L3.10888253,2.5 Z M15.5587392,2.5 L16.8911175,2.5 L16.8911175,15.2294922 L15.5587392,15.2294922 L15.5587392,2.5 Z M12.8939828,2.5 L14.226361,2.5 L14.226361,15.2294922 L12.8939828,15.2294922 L12.8939828,2.5 Z M14.6704871,2.5 L15.1146132,2.5 L15.1146132,15.2294922 L14.6704871,15.2294922 L14.6704871,2.5 Z M12.8939828,16.1376953 L17.7793696,16.1376953 L17.7793696,17.5 L12.8939828,17.5 L12.8939828,16.1376953 Z M0,2.5 L1.33237822,2.5 L1.33237822,17.5 L0,17.5 L0,2.5 Z M10.6733524,16.1376953 L12.0057307,16.1376953 L12.0057307,17.5 L10.6733524,17.5 L10.6733524,16.1376953 Z M17.3352436,2.5 L17.7793696,2.5 L17.7793696,15.2294922 L17.3352436,15.2294922 L17.3352436,2.5 Z M18.6676218,2.5 L20,2.5 L20,17.5 L18.6676218,17.5 L18.6676218,2.5 Z M11.5616046,2.5 L12.4498567,2.5 L12.4498567,15.2294922 L11.5616046,15.2294922 L11.5616046,2.5 Z M2.22063039,16.1376953 L3.55300861,16.1376953 L3.55300861,17.5 L2.22063039,17.5 L2.22063039,16.1376953 Z M4.44126075,16.1376953 L9.77077364,16.1376953 L9.77077364,17.5 L4.44126075,17.5 L4.44126075,16.1376953 Z M10.2292264,2.5 L10.6733524,2.5 L10.6733524,15.2294922 L10.2292264,15.2294922 L10.2292264,2.5 Z"],"bell":["M9.98546213,0 C11.0738151,0 11.9560995,0.897956369 11.9560995,2.00564169 L11.9474262,2.16857402 C12.8154358,2.52052079 13.6536505,3.10521908 14.3982383,3.87807132 C15.2598324,4.77237143 15.7643314,5.95615219 15.9194472,7.47478499 L15.9194472,12.9530263 L17.110036,15.0509445 C17.5095265,15.7167459 17.6377183,16.2749986 17.3257968,16.7576931 C17.0403571,17.1994072 16.5294845,17.3525518 15.8350964,17.3412244 L13.1652799,17.3417555 C12.8549424,18.85959 11.5332274,20 9.94980414,20 C8.36638086,20 7.04466588,18.85959 6.73432835,17.3417555 L3.77764595,17.3412244 L3.72235669,17.3388521 C3.09539086,17.2849519 2.6282251,16.9815541 2.52321251,16.3980734 C2.45200959,16.0024491 2.54550135,15.5756677 2.79146293,15.0675726 L4.01624036,12.8871114 L4.01880221,7.41484929 C4.12578521,6.20521083 4.57841144,5.07753145 5.36675672,4.0436623 C6.03387517,3.16877511 6.98677948,2.52517246 8.02078708,2.15401297 C8.01662368,2.10512435 8.01482476,2.05547904 8.01482476,2.00564169 C8.01482476,0.897956369 8.89710916,0 9.98546213,0 Z M11.8025327,17.3422137 L8.09707557,17.3422137 C8.37210013,18.1126198 9.09781066,18.6629055 9.94980414,18.6629055 C10.8017976,18.6629055 11.5275081,18.1126198 11.8025327,17.3422137 Z M10.0815452,3.12397089 C8.72815253,3.12397089 7.23880206,3.76947015 6.40463611,4.86343046 C5.76697658,5.69968397 5.41116271,6.58616367 5.32991538,7.47478499 L5.32991538,13.0648706 C5.32991538,13.1812593 5.30006071,13.2956317 5.24330449,13.3966743 L3.95167509,15.693396 C3.89083954,15.8198362 3.85259204,15.9240447 3.83205632,16.0041304 L15.8455449,16.0042146 C15.9671736,16.0061838 16.0586311,16.0014725 16.1220735,15.9985769 C16.0894627,15.9259816 16.0429416,15.8378504 15.9806338,15.7337983 L14.6937782,13.4666494 C14.6360709,13.3649821 14.6056889,13.2496401 14.6056889,13.1322274 L14.6093789,7.54554741 C14.4878881,6.38390365 14.1034843,5.48192009 13.4601893,4.81420571 C12.4192675,3.73377068 11.1975803,3.12397089 10.0815452,3.12397089 Z M9.98546213,1.33709446 C9.68091977,1.33709446 9.42478227,1.54802154 9.35038998,1.83416683 C9.59577409,1.80261438 9.84002218,1.78687644 10.0815452,1.78687644 C10.2594993,1.78687644 10.4380858,1.79772996 10.6167735,1.81906594 C10.5378669,1.54127232 10.2850925,1.33709446 9.98546213,1.33709446 Z"],"camera-o":["M1.81818182,5.17440428 C1.5671433,5.17440428 1.36363636,5.37241169 1.36363636,5.6166662 L1.36363636,16.2309523 C1.36363636,16.4752068 1.5671433,16.6732142 1.81818182,16.6732142 L18.1818182,16.6732142 C18.4328567,16.6732142 18.6363636,16.4752068 18.6363636,16.2309523 L18.6363636,5.6166662 C18.6363636,5.37241169 18.4328567,5.17440428 18.1818182,5.17440428 L1.81818182,5.17440428 Z M1.81818182,3.84761852 L18.1818182,3.84761852 C19.1859723,3.84761852 20,4.63964815 20,5.6166662 L20,16.2309523 C20,17.2079704 19.1859723,18 18.1818182,18 L1.81818182,18 C0.814027728,18 0,17.2079704 0,16.2309523 L0,5.6166662 C0,4.63964815 0.814027728,3.84761852 1.81818182,3.84761852 Z M1.02868956,9.37589253 C0.652131776,9.37589253 0.346871378,9.07888142 0.346871378,8.71249965 C0.346871378,8.34611788 0.652131776,8.04910677 1.02868956,8.04910677 L5.52835111,8.04910677 C5.90490889,8.04910677 6.21016929,8.34611788 6.21016929,8.71249965 C6.21016929,9.07888142 5.90490889,9.37589253 5.52835111,9.37589253 L1.02868956,9.37589253 Z M14.1365577,9.37589253 C13.7599999,9.37589253 13.4547395,9.07888142 13.4547395,8.71249965 C13.4547395,8.34611788 13.7599999,8.04910677 14.1365577,8.04910677 L19.1118185,8.04910677 C19.4883763,8.04910677 19.7936367,8.34611788 19.7936367,8.71249965 C19.7936367,9.07888142 19.4883763,9.37589253 19.1118185,9.37589253 L14.1365577,9.37589253 Z M9.83742652,15.8956903 C6.95048351,15.8956903 4.61015379,13.6186052 4.61015379,10.8096782 C4.61015379,8.00075132 6.95048351,5.72366615 9.83742652,5.72366615 C12.7243695,5.72366615 15.0646992,8.00075132 15.0646992,10.8096782 C15.0646992,13.6186052 12.7243695,15.8956903 9.83742652,15.8956903 Z M9.83742652,14.5689046 C11.971254,14.5689046 13.7010629,12.8858416 13.7010629,10.8096782 C13.7010629,8.73351487 11.971254,7.05045191 9.83742652,7.05045191 C7.70359908,7.05045191 5.97379016,8.73351487 5.97379016,10.8096782 C5.97379016,12.8858416 7.70359908,14.5689046 9.83742652,14.5689046 Z M6.85230618,4.67301892 L5.65217888,4.04306013 C5.94370442,3.51728961 6.27463603,3.0668862 6.64643356,2.69344646 C7.09908972,2.23879093 7.65882225,2 8.28854118,2 L14.660321,2.00215153 C15.3166233,2.05370623 15.8800646,2.31649088 16.3174665,2.77852222 C16.6715602,3.15255432 16.9850082,3.56825172 17.2576153,4.02477269 L16.0785412,4.69130637 C15.8552319,4.31734198 15.6006096,3.97965967 15.3144792,3.67741771 C15.111657,3.46317499 14.8680851,3.34957491 14.6054529,3.32678576 L8.28854118,3.32678576 C8.03436516,3.32678576 7.82584067,3.41574568 7.62587773,3.61659185 C7.34505615,3.8986538 7.08671236,4.25026398 6.85230618,4.67301892 Z M2.5,3.18059333 C2.5,2.81421155 2.8052604,2.51720044 3.18181818,2.51720044 C3.55837597,2.51720044 3.86363636,2.81421155 3.86363636,3.18059333 L3.86363636,4.28988044 C3.86363636,4.65626221 3.55837597,4.95327332 3.18181818,4.95327332 C2.8052604,4.95327332 2.5,4.65626221 2.5,4.28988044 L2.5,3.18059333 Z"],"caret-down":["M17.7039765,6.58022575 L10.7321242,14.6656665 C10.3481323,15.1114445 9.65348035,15.1114445 9.26948848,14.6656665 L2.29630288,6.58022575 C1.76031423,5.96013716 1.96697652,5 2.79095906,5 L17.2106536,5 C18.0319695,5 18.2399651,5.96013716 17.7039765,6.58022575 Z"],"caret-left":["M13.4197743,2.29630288 L5.37347412,9.2364502 C5.12449137,9.43092855 5,9.68544515 5,10 C5,10.3145549 5.13676453,10.5803019 5.41029358,10.7972412 L13.4197743,17.7039765 C13.7400733,17.9715464 14.0842133,18.0605977 14.4521942,17.9711304 C14.7516022,17.8841654 14.934234,17.6819356 15.0000897,17.3644409 L15.0000897,2.66345215 C14.9471124,2.35097249 14.7717183,2.1418457 14.4739075,2.03607178 C14.0914307,1.94452922 13.7400529,2.03127292 13.4197743,2.29630288 Z"],"caret-right":["M4.99997298,2.64282227 L4.99997298,17.4082642 C5.09237787,17.7285055 5.29866028,17.9191895 5.61882019,17.9803162 C5.9389801,18.0414429 6.25233968,17.9564514 6.55889893,17.7253418 L14.6656665,10.7321242 C14.8885375,10.5329849 14.999973,10.2889901 14.999973,10.0001397 C14.999973,9.71128923 14.8885375,9.46773884 14.6656665,9.26948848 C11.7588863,6.76244709 9.06373939,4.43805189 6.58022575,2.29630288 C6.3482666,2.09913635 5.94128418,1.91293335 5.51852417,2.04302979 C5.23668416,2.12976074 5.06383377,2.32969157 4.99997298,2.64282227 Z"],"caret-up":["M10.6847229,5.28414917 L17.7039765,13.4197743 C17.9440908,13.6970943 18.0427653,14.0152079 18,14.374115 C17.9572347,14.7330221 17.7206217,14.9416504 17.2901611,15 L2.74435425,15 C2.39289347,14.9752197 2.16174316,14.8010559 2.05090332,14.4775085 C1.94006348,14.1539612 1.9968516,13.8270264 2.2212677,13.4967041 L9.31777954,5.28414917 C9.51789347,5.09471639 9.74530029,5 10,5 C10.2546997,5 10.4829407,5.09471639 10.6847229,5.28414917 Z"],"check-square-o":["M1.81818182,1.36363636 C1.5671433,1.36363636 1.36363636,1.5671433 1.36363636,1.81818182 L1.36363636,18.1818182 C1.36363636,18.4328567 1.5671433,18.6363636 1.81818182,18.6363636 L18.1818182,18.6363636 C18.4328567,18.6363636 18.6363636,18.4328567 18.6363636,18.1818182 L18.6363636,1.81818182 C18.6363636,1.5671433 18.4328567,1.36363636 18.1818182,1.36363636 L1.81818182,1.36363636 Z M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M14.9217059,6.56354053 C14.6410521,6.3124843 14.210016,6.33647785 13.9589598,6.61713161 L13.9589598,6.61713161 L9.54702033,11.5492037 L6.71542243,8.51893854 C6.45832765,8.24380578 6.02687198,8.2291831 5.75173921,8.48627788 C5.47660645,8.74337266 5.46198377,9.17482834 5.71907855,9.4499611 L5.71907855,9.4499611 L9.05982608,13.0250982 C9.33334374,13.3178061 9.79907323,13.312746 10.0661666,13.0141645 L10.0661666,13.0141645 L14.975297,7.52628664 C15.2263532,7.24563287 15.2023597,6.81459676 14.9217059,6.56354053 Z"],"check-square":["M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M14.9217059,6.56354053 C14.6410521,6.3124843 14.210016,6.33647785 13.9589598,6.61713161 L13.9589598,6.61713161 L9.54702033,11.5492037 L6.71542243,8.51893854 C6.45832765,8.24380578 6.02687198,8.2291831 5.75173921,8.48627788 C5.47660645,8.74337266 5.46198377,9.17482834 5.71907855,9.4499611 L5.71907855,9.4499611 L9.05982608,13.0250982 C9.33334374,13.3178061 9.79907323,13.312746 10.0661666,13.0141645 L10.0661666,13.0141645 L14.975297,7.52628664 C15.2263532,7.24563287 15.2023597,6.81459676 14.9217059,6.56354053 Z"],"check":["M18.634772,4.24319429 C18.9379152,3.92826502 19.4398767,3.91783318 19.7559344,4.21989412 C20.071992,4.52195506 20.0824612,5.02212445 19.779318,5.33705372 L8.78694296,16.7568067 C8.47777463,17.0779953 7.96350888,17.0815006 7.64995967,16.7645566 L0.228243751,9.26248447 C-0.0791949666,8.95171706 -0.0755938828,8.45145177 0.236286996,8.14511066 C0.548167876,7.83876955 1.05022561,7.84235778 1.35766432,8.15312519 L8.20688921,15.0765078 L18.634772,4.24319429 Z"],"chrome":["M5.38992245,11.9176481 C6.45005231,14.0043112 8.69305116,15.2763649 11.0141754,14.8411923 L8.44755004,19.8737853 C3.66022125,19.1372971 0,14.997435 0,9.99837481 C0,7.97866303 0.602593635,6.09283119 1.62925751,4.51946205 L5.38992245,11.9176481 Z M14.9979775,1.33925945 C16.7499742,2.35472318 18.0779691,3.81648385 18.926041,5.4902915 L10.6458895,5.05507318 C8.30249263,4.92114755 6.07061865,6.23790397 5.30062647,8.4473228 L2.22068057,3.71604532 C4.14007576,1.32808946 7.0191571,0.0113558972 9.96517046,0.000208740108 C11.6725762,-0.0109383947 13.4133794,0.424234231 14.9979775,1.33925945 Z M13.3687657,9.99837481 C13.3687657,11.8618438 11.8622702,13.3682844 9.9986593,13.3682844 C8.13511694,13.3682844 6.62859857,11.8618438 6.62859857,9.99837481 C6.62859857,8.13486011 8.13511692,6.62846518 9.9986593,6.62846518 C11.8622702,6.62846518 13.3687657,8.13486011 13.3687657,9.99837481 Z M14.9979775,18.6574902 C13.2459809,19.6729311 11.3154608,20.0857637 9.44072507,19.9853481 L13.9601888,13.0335275 C15.2435243,11.0584271 15.2211603,8.48078708 13.6923465,6.69539373 L19.3277473,6.40524819 C21.0797667,10.9133772 19.3277701,16.1579487 14.9979775,18.6574902 L14.9979775,18.6574902 Z"],"circle-check-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M14.9217059,6.58259135 C15.2023597,6.83364758 15.2263532,7.26468369 14.975297,7.54533745 L10.0661666,13.0332153 C9.79907323,13.3317969 9.33334374,13.336857 9.05982608,13.0441491 L5.71907855,9.46901192 C5.46198377,9.19387916 5.47660645,8.76242348 5.75173921,8.5053287 C6.02687198,8.24823392 6.45832765,8.26285659 6.71542243,8.53798936 L9.54702033,11.5682545 L13.9589598,6.63618243 C14.210016,6.35552866 14.6410521,6.33153512 14.9217059,6.58259135 Z"],"circle-check":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M14.9217059,6.58259135 C14.6410521,6.33153512 14.210016,6.35552866 13.9589598,6.63618243 L13.9589598,6.63618243 L9.54702033,11.5682545 L6.71542243,8.53798936 C6.45832765,8.26285659 6.02687198,8.24823392 5.75173921,8.5053287 C5.47660645,8.76242348 5.46198377,9.19387916 5.71907855,9.46901192 L5.71907855,9.46901192 L9.05982608,13.0441491 C9.33334374,13.336857 9.79907323,13.3317969 10.0661666,13.0332153 L10.0661666,13.0332153 L14.975297,7.54533745 C15.2263532,7.26468369 15.2023597,6.83364758 14.9217059,6.58259135 Z"],"circle-close-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M12.2066229,6.83655409 C12.4730122,6.5704103 12.9047155,6.57060929 13.1708593,6.83699857 C13.4370031,7.10338784 13.4368041,7.53509119 13.1704149,7.80123498 L13.1704149,7.80123498 L10.975,9.994 L13.1704149,12.1870677 C13.4368041,12.4532115 13.4370031,12.8849148 13.1708593,13.1513041 C12.9047155,13.4176934 12.4730122,13.4178924 12.2066229,13.1517486 L10.01,10.957 L7.81496625,13.1517486 C7.57521591,13.391278 7.20156116,13.4150698 6.93520889,13.223235 L6.85072984,13.1513041 C6.58458604,12.8849148 6.58478504,12.4532115 6.85117431,12.1870677 L6.85117431,12.1870677 L9.046,9.994 L6.85117431,7.80123498 C6.58478504,7.53509119 6.58458604,7.10338784 6.85072984,6.83699857 C7.11687363,6.57060929 7.54857698,6.5704103 7.81496625,6.83655409 L10.01,9.03 Z"],"circle-close":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M12.2066229,6.83655409 L10.01,9.03 L7.81496625,6.83655409 C7.57521591,6.59702468 7.20156116,6.57323292 6.93520889,6.76506765 L6.85072984,6.83699857 C6.58458604,7.10338784 6.58478504,7.53509119 6.85117431,7.80123498 L6.85117431,7.80123498 L9.046,9.994 L6.85117431,12.1870677 C6.58478504,12.4532115 6.58458604,12.8849148 6.85072984,13.1513041 C7.11687363,13.4176934 7.54857698,13.4178924 7.81496625,13.1517486 L10.01,10.957 L12.2066229,13.1517486 C12.4463733,13.391278 12.820028,13.4150698 13.0863803,13.223235 L13.1708593,13.1513041 C13.4370031,12.8849148 13.4368041,12.4532115 13.1704149,12.1870677 L13.1704149,12.1870677 L10.975,9.994 L13.1704149,7.80123498 C13.4368041,7.53509119 13.4370031,7.10338784 13.1708593,6.83699857 C12.9047155,6.57060929 12.4730122,6.5704103 12.2066229,6.83655409 Z"],"circle-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z"],"close-square-o":["M1.81818182,1.36363636 C1.5671433,1.36363636 1.36363636,1.5671433 1.36363636,1.81818182 L1.36363636,18.1818182 C1.36363636,18.4328567 1.5671433,18.6363636 1.81818182,18.6363636 L18.1818182,18.6363636 C18.4328567,18.6363636 18.6363636,18.4328567 18.6363636,18.1818182 L18.6363636,1.81818182 C18.6363636,1.5671433 18.4328567,1.36363636 18.1818182,1.36363636 L1.81818182,1.36363636 Z M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M12.2066229,6.81750327 L10.01,9.011 L7.81496625,6.81750327 C7.57521591,6.57797386 7.20156116,6.5541821 6.93520889,6.74601683 L6.85072984,6.81794775 C6.58458604,7.08433702 6.58478504,7.51604037 6.85117431,7.78218417 L6.85117431,7.78218417 L9.046,9.975 L6.85117431,12.1680169 C6.58478504,12.4341607 6.58458604,12.865864 6.85072984,13.1322533 C7.11687363,13.3986426 7.54857698,13.3988416 7.81496625,13.1326978 L10.01,10.938 L12.2066229,13.1326978 C12.4463733,13.3722272 12.820028,13.3960189 13.0863803,13.2041842 L13.1708593,13.1322533 C13.4370031,12.865864 13.4368041,12.4341607 13.1704149,12.1680169 L13.1704149,12.1680169 L10.975,9.975 L13.1704149,7.78218417 C13.4368041,7.51604037 13.4370031,7.08433702 13.1708593,6.81794775 C12.9047155,6.55155848 12.4730122,6.55135948 12.2066229,6.81750327 Z"],"close-square":["M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M12.2066229,6.81750327 L10.01,9.011 L7.81496625,6.81750327 C7.57521591,6.57797386 7.20156116,6.5541821 6.93520889,6.74601683 L6.85072984,6.81794775 C6.58458604,7.08433702 6.58478504,7.51604037 6.85117431,7.78218417 L6.85117431,7.78218417 L9.046,9.975 L6.85117431,12.1680169 C6.58478504,12.4341607 6.58458604,12.865864 6.85072984,13.1322533 C7.11687363,13.3986426 7.54857698,13.3988416 7.81496625,13.1326978 L10.01,10.938 L12.2066229,13.1326978 C12.4463733,13.3722272 12.820028,13.3960189 13.0863803,13.2041842 L13.1708593,13.1322533 C13.4370031,12.865864 13.4368041,12.4341607 13.1704149,12.1680169 L13.1704149,12.1680169 L10.975,9.975 L13.1704149,7.78218417 C13.4368041,7.51604037 13.4370031,7.08433702 13.1708593,6.81794775 C12.9047155,6.55155848 12.4730122,6.55135948 12.2066229,6.81750327 Z"],"close":["M3.21878052,2.15447998 L9.99678993,8.92744993 L16.7026814,2.22182541 C17.1598053,1.8145752 17.6339389,2.05757141 17.8218994,2.2625885 C18.0098599,2.46760559 18.1171875,2.95117187 17.7781746,3.29731856 L11.0707899,10.0014499 L17.7781746,16.7026814 C18.0764771,16.9529419 18.0764771,17.4433594 17.8370056,17.7165527 C17.5975342,17.9897461 17.1575623,18.148407 16.7415466,17.8244324 L9.99678993,11.0754499 L3.24360657,17.8271179 C2.948349,18.0919647 2.46049253,18.038208 2.21878052,17.7746429 C1.9770685,17.5110779 1.8853302,17.0549164 2.19441469,16.7330362 L8.92278993,10.0014499 L2.22182541,3.29731856 C1.97729492,3.02648926 1.89189987,2.53264694 2.22182541,2.22182541 C2.55175094,1.91100387 3.04367065,1.95437622 3.21878052,2.15447998 Z"],"cloud-download-o":["M5.66804138,8.66808275 C5.67799143,9.04225065 5.41255477,9.36227625 5.05670726,9.40514207 C3.77489725,9.55955044 2.8557604,9.95686777 2.27611216,10.5744566 C1.70116045,11.1870415 1.40285772,11.9847429 1.378298,12.9241005 C1.46740942,13.9322425 1.80021156,14.6871262 2.37490988,15.2269753 C2.9468577,15.7642407 3.80632101,16.0487706 4.97760925,16.056482 L15.6472047,16.0579667 C16.6436062,15.9910788 17.3772633,15.6141659 17.8994412,14.9191156 C18.5577709,14.0428391 18.6961907,13.2537287 18.5814753,12.37175 C18.495413,11.7100676 18.0856972,10.8698107 17.4238667,10.2986362 C16.9193767,9.86325016 16.1231849,9.59778927 15.0226992,9.52911027 C14.6493828,9.50581238 14.3616225,9.17626074 14.3735273,8.78565952 C14.40768,7.66509669 14.1062696,6.66255526 13.4608949,5.7524159 C12.5890819,4.52294193 11.2375437,3.89520144 9.90978452,3.9464203 C8.61147904,3.99650298 7.4077551,4.60893432 6.53898715,5.76781103 C5.92737871,6.58365463 5.6380551,7.54045986 5.66804138,8.66808275 Z M14.5707986,4.89301361 C15.2688663,5.87746331 15.6608503,6.9683604 15.7417568,8.15047622 C16.8099478,8.29597685 17.666352,8.63573408 18.3035237,9.18562753 C19.2481915,10.0008969 19.8196346,11.1728288 19.9502875,12.1773418 C20.1110867,13.4136312 19.9052851,14.5868747 18.9860017,15.8104965 C18.2119634,16.8407882 17.1114625,17.4061653 15.6914844,17.5 L4.97326571,17.5 C3.48431279,17.490201 2.30080915,17.0983958 1.45140777,16.3005014 C0.604756899,15.5051908 0.12247116,14.4112385 0,12.974395 C0.0293593224,11.5984691 0.459369921,10.4485633 1.28988184,9.56369062 C2.00739533,8.79921263 3.01538942,8.30390322 4.29865723,8.06291436 C4.37488487,6.86823662 4.75978597,5.80036392 5.45153486,4.87761848 C6.57711843,3.3761674 8.16299924,2.56930207 9.85882446,2.5038849 C11.6274066,2.43566111 13.4180496,3.26734987 14.5707986,4.89301361 Z M10.15552,7.02064435 C9.77405771,7.02064435 9.4648214,7.34378685 9.4648214,7.74240333 L9.4648214,7.74240333 L9.464,11.885 L8.67733195,11.0747234 C8.43134119,10.8210454 8.05015158,10.7932476 7.77973704,10.9930063 L7.69403906,11.0680228 C7.42430446,11.3461866 7.42721348,11.8001792 7.70053655,12.0820436 L7.70053655,12.0820436 L9.68011734,14.1234863 C9.95344041,14.4053507 10.3936756,14.4083506 10.6634102,14.1301868 L10.6634102,14.1301868 L12.617001,12.1155463 C12.8867356,11.8373825 12.8838266,11.3833899 12.6105035,11.1015255 C12.3371805,10.8196611 11.8969452,10.8166612 11.6272106,11.094825 L11.6272106,11.094825 L10.846,11.9 L10.8462187,7.74240333 C10.8462187,7.37700489 10.5863743,7.07502556 10.2492438,7.02723316 Z"],"cloud-download":["M11.5,2.5 C13.9852814,2.5 16,4.51375071 16,6.99783811 C16,7.08918732 15.9972755,7.1799005 15.9919032,7.26990088 L16,7.26976423 L15.999,8.497 C18.1421954,8.49711747 19.8910789,10.1802769 19.9951047,12.2956514 L20,12.4951958 C20,14.636362 18.3160315,16.3844053 16.1996403,16.4883812 L16,16.4932741 C15.9996653,16.4932741 15.9993306,16.4932741 15.9989959,16.493274 L16,16.5 L4,16.5 C1.79031836,16.4927317 -1.8189894e-12,14.7029389 -1.8189894e-12,12.4951958 C-1.8189894e-12,10.5615262 1.37340211,8.94847778 3.19839432,8.57741965 C3.0701163,8.24470702 3,7.88269974 3,7.50432379 C3,5.84826553 4.34314575,4.50576505 6,4.50576505 C6.55131242,4.50576505 7.06789096,4.654407 7.51180935,4.91378283 C8.26266931,3.47924323 9.76692243,2.5 11.5,2.5 Z M11.4543312,6.5 L9.4543312,6.5 L9.454,11.4216762 L7,11.4203536 L10.4543312,15.4956762 L13.9176042,11.423119 L11.454,11.4226762 L11.4543312,6.5 Z"],"cloud-upload-o":["M5.66804138,8.66808275 C5.67799143,9.04225065 5.41255477,9.36227625 5.05670726,9.40514207 C3.77489725,9.55955044 2.8557604,9.95686777 2.27611216,10.5744566 C1.70116045,11.1870415 1.40285772,11.9847429 1.378298,12.9241005 C1.46740942,13.9322425 1.80021156,14.6871262 2.37490988,15.2269753 C2.9468577,15.7642407 3.80632101,16.0487706 4.97760925,16.056482 L15.6472047,16.0579667 C16.6436062,15.9910788 17.3772633,15.6141659 17.8994412,14.9191156 C18.5577709,14.0428391 18.6961907,13.2537287 18.5814753,12.37175 C18.495413,11.7100676 18.0856972,10.8698107 17.4238667,10.2986362 C16.9193767,9.86325016 16.1231849,9.59778927 15.0226992,9.52911027 C14.6493828,9.50581238 14.3616225,9.17626074 14.3735273,8.78565952 C14.40768,7.66509669 14.1062696,6.66255526 13.4608949,5.7524159 C12.5890819,4.52294193 11.2375437,3.89520144 9.90978452,3.9464203 C8.61147904,3.99650298 7.4077551,4.60893432 6.53898715,5.76781103 C5.92737871,6.58365463 5.6380551,7.54045986 5.66804138,8.66808275 Z M14.5707986,4.89301361 C15.2688663,5.87746331 15.6608503,6.9683604 15.7417568,8.15047622 C16.8099478,8.29597685 17.666352,8.63573408 18.3035237,9.18562753 C19.2481915,10.0008969 19.8196346,11.1728288 19.9502875,12.1773418 C20.1110867,13.4136312 19.9052851,14.5868747 18.9860017,15.8104965 C18.2119634,16.8407882 17.1114625,17.4061653 15.6914844,17.5 L4.97326571,17.5 C3.48431279,17.490201 2.30080915,17.0983958 1.45140777,16.3005014 C0.604756899,15.5051908 0.12247116,14.4112385 0,12.974395 C0.0293593224,11.5984691 0.459369921,10.4485633 1.28988184,9.56369062 C2.00739533,8.79921263 3.01538942,8.30390322 4.29865723,8.06291436 C4.37488487,6.86823662 4.75978597,5.80036392 5.45153486,4.87761848 C6.57711843,3.3761674 8.16299924,2.56930207 9.85882446,2.5038849 C11.6274066,2.43566111 13.4180496,3.26734987 14.5707986,4.89301361 Z M9.68011734,7.13539223 L7.70053655,9.17683491 C7.42721348,9.45869933 7.42430446,9.9126919 7.69403906,10.1908557 C7.96377366,10.4690195 8.40400888,10.4660196 8.67733195,10.1841552 L9.464,9.373 L9.4648214,13.6117662 C9.4648214,13.9771646 9.7246658,14.2791439 10.0617963,14.3269363 L10.15552,14.3335251 C10.5369824,14.3335251 10.8462187,14.0103826 10.8462187,13.6117662 L10.8462187,13.6117662 L10.846,9.358 L11.6272106,10.1640535 C11.8969452,10.4422173 12.3371805,10.4392174 12.6105035,10.157353 C12.8838266,9.87548858 12.8867356,9.421496 12.617001,9.1433322 L10.6634102,7.12869168 C10.3936756,6.85052788 9.95344041,6.85352781 9.68011734,7.13539223 Z"],"cloud-upload":["M11.5,3 C13.9852814,3 16,5.01375071 16,7.49783811 C16,7.58918732 15.9972755,7.6799005 15.9919032,7.76990088 L16,7.76976423 L15.999,8.997 C18.1421954,8.99711747 19.8910789,10.6802769 19.9951047,12.7956514 L20,12.9951958 C20,15.136362 18.3160315,16.8844053 16.1996403,16.9883812 L16,16.9932741 C15.9996653,16.9932741 15.9993306,16.9932741 15.9989959,16.993274 L16,17 L10.999,17 L10.9996688,13.0768434 L13.463273,13.0764006 L10,9.00384337 L6.5456688,13.0791659 L8.9996688,13.0778434 L8.999,17 L4,17 C1.79031836,16.9927317 -1.8189894e-12,15.2029389 -1.8189894e-12,12.9951958 C-1.8189894e-12,11.0615262 1.37340211,9.44847778 3.19839432,9.07741965 C3.0701163,8.74470702 3,8.38269974 3,8.00432379 C3,6.34826553 4.34314575,5.00576505 6,5.00576505 C6.55131242,5.00576505 7.06789096,5.154407 7.51180935,5.41378283 C8.26266931,3.97924323 9.76692243,3 11.5,3 Z"],"coffee":["M1.38197865,8.50468479 L1.38197865,13.5631773 C1.38197865,16.3563179 3.64597172,18.6206981 6.43875483,18.6206981 L10.1164674,18.6206981 C12.9092315,18.6206981 15.1731941,16.3563849 15.1731941,13.5632501 L15.1731941,8.50570164 L1.38197865,8.50468479 Z M11.887167,0.161126688 C12.1790318,0.405797785 12.2173171,0.840778552 11.9726796,1.13268342 C11.3308774,1.89849054 11.1893646,2.41967954 11.3874211,2.76994178 C11.4488712,2.8786161 11.9803359,3.71845921 12.1019698,3.97653935 C12.3777947,4.56177877 12.4141083,5.12932211 12.1755421,5.79896276 C12.0096241,6.26468436 11.7585443,6.7072078 11.424894,7.12657781 L15.306126,7.12640952 C15.7430066,7.14261066 16.0599124,7.25440509 16.2568432,7.46179281 C16.3655095,7.57622922 16.4442154,7.72017702 16.4929381,7.89363623 L16.5522181,7.89203692 L16.5522181,7.89203692 C18.4563755,7.89203692 20,9.43587318 20,11.3402917 C20,13.2447103 18.4563755,14.7885465 16.5522181,14.7885465 L16.4365643,14.7847793 C15.8659428,17.7555445 13.2532898,20 10.1164728,20 L6.43872469,20 C2.88430599,20 0.00288657549,17.1180836 0.00288657549,13.5631773 L0.00286521846,8.33673221 C-0.0167941967,7.90387044 0.0647147488,7.59740722 0.247392055,7.41734256 C0.430069361,7.2372779 0.699557002,7.14030022 1.05585498,7.12640952 L4.00913096,7.12670462 C4.04659087,7.06454857 4.09457662,7.00729401 4.15287076,6.95765169 C4.76165561,6.43922067 5.15955413,5.89859775 5.35998008,5.33601443 C5.47365368,5.01693962 5.46146952,4.82651397 5.33804655,4.56463778 C5.25990012,4.39882836 4.76908244,3.62321744 4.67052633,3.44892126 C4.13215786,2.49681825 4.42865329,1.40483106 5.39929252,0.246650998 C5.64393006,-0.0452538722 6.07885117,-0.0835444104 6.370716,0.161126688 C6.66258084,0.405797785 6.70086613,0.840778552 6.45622859,1.13268342 C5.81442645,1.89849054 5.67291366,2.41967954 5.87097011,2.76994178 C5.93242021,2.8786161 6.46388494,3.71845921 6.58551882,3.97653935 C6.86134377,4.56177877 6.89765735,5.12932211 6.65909115,5.79896276 C6.49317317,6.26468436 6.24209337,6.7072078 5.90844306,7.12657781 L6.76735645,7.12670462 C6.80481636,7.06454857 6.8528021,7.00729401 6.91109625,6.95765169 C7.5198811,6.43922067 7.91777962,5.89859775 8.11820556,5.33601443 C8.23187916,5.01693962 8.21969501,4.82651397 8.09627204,4.56463778 C8.0181256,4.39882836 7.52730793,3.62321744 7.42875181,3.44892126 C6.89038335,2.49681825 7.18687878,1.40483106 8.15751801,0.246650998 C8.40215555,-0.0452538722 8.83707666,-0.0835444104 9.12894149,0.161126688 C9.42080633,0.405797785 9.45909161,0.840778552 9.21445407,1.13268342 C8.57265194,1.89849054 8.43113915,2.41967954 8.6291956,2.76994178 C8.6906457,2.8786161 9.22211043,3.71845921 9.34374431,3.97653935 C9.61956926,4.56177877 9.65588284,5.12932211 9.41731664,5.79896276 C9.25139865,6.26468436 9.00031885,6.7072078 8.66666855,7.12657781 L9.52558193,7.12670462 C9.56304184,7.06454857 9.61102759,7.00729401 9.66932174,6.95765169 C10.2781066,6.43922067 10.6760051,5.89859775 10.8764311,5.33601443 C10.9901047,5.01693962 10.9779205,4.82651397 10.8544975,4.56463778 C10.7763511,4.39882836 10.2855334,3.62321744 10.1869773,3.44892126 C9.64860884,2.49681825 9.94510427,1.40483106 10.9157435,0.246650998 C11.160381,-0.0452538722 11.5953021,-0.0835444104 11.887167,0.161126688 Z M16.5522181,9.27133884 L16.5522181,13.4092446 L16.5522181,13.4092446 C17.6947125,13.4092446 18.6208873,12.4829429 18.6208873,11.3402917 C18.6208873,10.1976406 17.6947125,9.27133884 16.5522181,9.27133884 Z"],"component":["M18.6206897,3.44827586 L15.1724138,3.44827586 C15.1724138,1.54384569 13.6285681,0 11.7241379,0 C9.81970776,0 8.27586207,1.54384569 8.27586207,3.44827586 L4.82758621,3.44827586 C4.06581414,3.44827586 3.44827586,4.06581414 3.44827586,4.82758621 L3.44827586,8.27586207 C1.54384569,8.27586207 0,9.81970776 0,11.7241379 C0,13.6285681 1.54384569,15.1724138 3.44827586,15.1724138 L3.44827586,18.6206897 C3.44827586,19.3824617 4.06581414,20 4.82758621,20 L9.65517241,20 L9.65517241,18.6206897 C9.65517241,17.4780316 10.5814798,16.5517241 11.7241379,16.5517241 C12.866796,16.5517241 13.7931034,17.4780316 13.7931034,18.6206897 L13.7931034,20 L18.6206897,20 C19.3824617,20 20,19.3824617 20,18.6206897 L20,13.7931034 L18.6206897,13.7931034 C17.4780316,13.7931034 16.5517241,12.866796 16.5517241,11.7241379 C16.5517241,10.5814798 17.4780316,9.65517241 18.6206897,9.65517241 L20,9.65517241 L20,4.82758621 C20,4.06581414 19.3824617,3.44827586 18.6206897,3.44827586 Z M15.1724138,11.7241379 C15.1724138,13.6285681 16.7162595,15.1724138 18.6206897,15.1724138 L18.6206897,18.6206897 L15.1724138,18.6206897 C15.1724138,17.3887393 14.5151762,16.2503703 13.4482759,15.6343951 C12.3813756,15.0184199 11.0669003,15.0184199 9.99999998,15.6343951 C8.9330997,16.2503703 8.27586204,17.3887393 8.27586207,18.6206897 L4.82758621,18.6206897 L4.82758621,13.7931034 L3.44827586,13.7931034 C2.30561776,13.7931034 1.37931034,12.866796 1.37931034,11.7241379 C1.37931034,10.5814798 2.30561776,9.65517241 3.44827586,9.65517241 L4.82758621,9.65517241 L4.82758621,4.82758621 L9.65517241,4.82758621 L9.65517241,3.44827586 C9.65517241,2.30561776 10.5814798,1.37931034 11.7241379,1.37931034 C12.866796,1.37931034 13.7931034,2.30561776 13.7931034,3.44827586 L13.7931034,4.82758621 L18.6206897,4.82758621 L18.6206897,8.27586207 C16.7162595,8.27586207 15.1724138,9.81970776 15.1724138,11.7241379 Z"],"copy":["M6.64402323,2.98337365 C6.50425481,2.98337365 6.39095013,3.09596098 6.39095013,3.23484449 C6.39095013,3.373728 6.50425481,3.48631533 6.64402323,3.48631533 L10.3570874,3.48631533 C10.4968558,3.48631533 10.6101605,3.373728 10.6101605,3.23484449 C10.6101605,3.09596098 10.4968558,2.98337365 10.3570874,2.98337365 L6.64402323,2.98337365 Z M10.3570874,1.64143713 C11.0914061,1.64143713 11.7104424,2.13189469 11.9005264,2.8011258 L14.0759495,2.80197723 C14.6973707,2.80612066 15.1980262,3.00706551 15.5076465,3.4396537 C15.774201,3.81207235 15.879581,4.28990427 15.8528891,4.82730538 L15.8509141,17.8393223 C15.8934599,18.3908626 15.7885863,18.8792541 15.5225312,19.2835729 C15.210806,19.7572957 14.7015186,19.9945112 14.071435,20 L3.13995999,19.9994966 C2.37999653,19.9702276 1.81737804,19.7912306 1.46521634,19.3914799 C1.13780371,19.0198228 0.994726378,18.5105985 1.00052078,17.8906025 L1.00066905,4.84136547 C0.988019654,4.24167138 1.15451277,3.73506055 1.51932498,3.36135708 C1.89478337,2.97674795 2.45080497,2.80661504 3.16611214,2.80197723 L5.10058419,2.8011258 C5.2906682,2.13189469 5.90970452,1.64143713 6.64402323,1.64143713 L10.3570874,1.64143713 Z M10.3570874,4.82825185 L6.64402323,4.82825185 C6.0984941,4.82825185 5.61659024,4.55756439 5.32692113,4.14398468 L3.17053164,4.14389938 C2.78783003,4.14638837 2.56911185,4.21331232 2.48868,4.29570448 C2.39760195,4.38900229 2.34526951,4.5482412 2.35100753,4.82730538 L2.3509787,17.8968024 C2.34795309,18.2221592 2.40322906,18.418891 2.48137187,18.5075936 C2.53476561,18.5682026 2.76735914,18.6422022 3.16611214,18.6580635 L14.0654875,18.6580895 C14.2653017,18.6563406 14.3466431,18.6184535 14.3922255,18.5491828 C14.483478,18.4105081 14.5254494,18.2150494 14.5024024,17.8906025 L14.5031763,4.79518866 C14.5173399,4.50150072 14.4758749,4.3134829 14.4071102,4.21740786 C14.3814113,4.18150236 14.2914379,4.14539034 14.071435,4.14391375 L11.6741895,4.14398468 C11.3845204,4.55756439 10.9026165,4.82825185 10.3570874,4.82825185 Z M17.199351,0 C18.193822,0 19,0.801073926 19,1.78924869 L19,15.8720168 C19,16.8601916 18.193822,17.6612655 17.199351,17.6612655 L15.2415624,17.6612655 L15.2415624,16.319329 L17.199351,16.319329 C17.4479687,16.319329 17.6495132,16.1190605 17.6495132,15.8720168 L17.6495132,1.78924869 C17.6495132,1.542205 17.4479687,1.34193652 17.199351,1.34193652 L9.64333812,1.34193652 C9.39472038,1.34193652 9.19317587,1.542205 9.19317587,1.78924869 L9.19317587,1.94562921 L7.84268912,1.94562921 L7.84268912,1.78924869 C7.84268912,0.801073926 8.64886714,0 9.64333812,0 L17.199351,0 Z M8.19610599,11.7512053 C8.56903261,11.7512053 8.87134937,12.051608 8.87134937,12.4221735 C8.87134937,12.7927391 8.56903261,13.0931418 8.19610599,13.0931418 L4.14464574,13.0931418 C3.77171912,13.0931418 3.46940236,12.7927391 3.46940236,12.4221735 C3.46940236,12.051608 3.77171912,11.7512053 4.14464574,11.7512053 L8.19610599,11.7512053 Z M12.2475662,9.06733223 C12.6204929,9.06733223 12.9228096,9.36773495 12.9228096,9.73830049 C12.9228096,10.108866 12.6204929,10.4092687 12.2475662,10.4092687 L4.14464574,10.4092687 C3.77171912,10.4092687 3.46940236,10.108866 3.46940236,9.73830049 C3.46940236,9.36773495 3.77171912,9.06733223 4.14464574,9.06733223 L12.2475662,9.06733223 Z M12.2475662,6.38345919 C12.6204929,6.38345919 12.9228096,6.68386191 12.9228096,7.05442745 C12.9228096,7.42499298 12.6204929,7.72539571 12.2475662,7.72539571 L4.14464574,7.72539571 C3.77171912,7.72539571 3.46940236,7.42499298 3.46940236,7.05442745 C3.46940236,6.68386191 3.77171912,6.38345919 4.14464574,6.38345919 L12.2475662,6.38345919 Z"],"copyright":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M10.1608281,4.65116279 C11.2407883,4.65116279 12.2765676,4.95403249 13.1634208,5.51450758 C13.489141,5.72035686 13.5863156,6.1512791 13.3804664,6.47699935 C13.1746171,6.80271959 12.7436948,6.89989421 12.4179746,6.69404493 C11.7531133,6.27386468 10.9755922,6.04651163 10.1608281,6.04651163 C7.88334672,6.04651163 6.04651163,7.82195536 6.04651163,10 C6.04651163,12.1780446 7.88334672,13.9534884 10.1608281,13.9534884 C10.9621908,13.9534884 11.7276015,13.7335795 12.3854823,13.3262798 C12.7130933,13.1234531 13.143098,13.2246106 13.3459247,13.5522215 C13.5487514,13.8798325 13.4475939,14.3098372 13.119983,14.5126639 C12.2425202,15.0559086 11.2229586,15.3488372 10.1608281,15.3488372 C7.1231311,15.3488372 4.65116279,12.9594879 4.65116279,10 C4.65116279,7.04051208 7.1231311,4.65116279 10.1608281,4.65116279 Z"],"css3":["M1.5,1.98975843e-15 L3.09355753,18.0557267 L9.99986611,20 L16.9059069,18.0557267 L18.5,0 L1.5,0 L1.5,1.98975843e-15 Z M15.0769709,5.85186222 L9.99370717,8.12461495 L9.9813893,8.12993559 L9.99370717,8.12993559 L14.8975585,8.12993559 L14.3352209,14.891627 L10.0014728,16.2147858 L9.99370717,16.2122655 L9.99370717,16.2147858 L5.63639442,14.8672641 L5.35522564,11.4620554 L5.36272348,11.4620554 L7.5103174,11.4620554 L7.51808301,11.4620554 L7.6586674,13.2259871 L9.97389147,13.8373005 L9.99370717,13.8314198 L9.99370717,13.8342201 L12.3908719,13.1282554 L12.5550209,10.2864744 L9.99370717,10.2783534 L5.21464125,10.2615514 L5.05076002,8.13021563 L9.99370717,5.97731728 L10.2818382,5.85214226 L9.99370717,5.85214226 L4.86331417,5.85214226 L4.60544223,3.67124055 L9.99370717,3.67124055 L15.2879814,3.67124055 L15.0769709,5.85186222 L15.0769709,5.85186222 Z"],"cut":["M17.3942881,0.220050708 C17.6573071,-0.0597663173 18.0987937,-0.0747205812 18.380376,0.186649425 C18.6619584,0.448019431 18.677007,0.886738203 18.413988,1.16655523 L18.413988,1.16655523 L10.941,9.115 L14.2096897,12.5914662 C14.7585109,12.3048033 15.3834488,12.1425949 16.0465116,12.1425949 C18.229963,12.1425949 20,13.9015349 20,16.0712974 C20,18.24106 18.229963,20 16.0465116,20 C13.8630603,20 12.0930233,18.24106 12.0930233,16.0712974 C12.0930233,15.0627562 12.4754474,14.1429749 13.104056,13.447339 L9.987,10.131 L6.88349942,13.4336321 C7.51950177,14.1308706 7.90697674,15.0561179 7.90697674,16.0712974 C7.90697674,18.24106 6.13693971,20 3.95348837,20 C1.77003704,20 0,18.24106 0,16.0712974 C0,13.9015349 1.77003704,12.1425949 3.95348837,12.1425949 C4.60972788,12.1425949 5.22862319,12.301482 5.77334311,12.582656 L9.032,9.115 L1.56119435,1.16655523 C1.29817538,0.886738203 1.31322399,0.448019431 1.59480636,0.186649425 C1.87638872,-0.0747205812 2.31787533,-0.0597663173 2.5808943,0.220050708 L9.987,8.1 Z M3.95348837,13.5291958 C2.54066692,13.5291958 1.39534884,14.6673335 1.39534884,16.0712974 C1.39534884,17.4752614 2.54066692,18.6133991 3.95348837,18.6133991 C5.36630983,18.6133991 6.51162791,17.4752614 6.51162791,16.0712974 C6.51162791,14.6673335 5.36630983,13.5291958 3.95348837,13.5291958 Z M16.0465116,13.5291958 C14.6336902,13.5291958 13.4883721,14.6673335 13.4883721,16.0712974 C13.4883721,17.4752614 14.6336902,18.6133991 16.0465116,18.6133991 C17.4593331,18.6133991 18.6046512,17.4752614 18.6046512,16.0712974 C18.6046512,14.6673335 17.4593331,13.5291958 16.0465116,13.5291958 Z"],"d-arrow-left":["M8.39727345,2.21077392 C8.67341324,1.93425491 9.12633841,1.92915248 9.40891014,2.19937732 C9.69148187,2.46960216 9.69669599,2.91282562 9.4205562,3.18934463 L9.4205562,3.18934463 L2.72165154,9.89744874 L9.79010593,16.8045692 C10.0696807,17.0777629 10.070006,17.5210156 9.7908324,17.7946019 C9.51165882,18.0681882 9.05870375,18.0685065 8.77912894,17.7953128 L8.77912894,17.7953128 L1.20989415,10.398842 C0.932450728,10.127731 0.929706681,9.68859574 1.20374127,9.41418482 L1.20374127,9.41418482 Z M17.3972735,2.21077392 C17.6734132,1.93425491 18.1263384,1.92915248 18.4089101,2.19937732 C18.6914819,2.46960216 18.696696,2.91282562 18.4205562,3.18934463 L18.4205562,3.18934463 L11.7216515,9.89744874 L18.7901059,16.8045692 C19.0696807,17.0777629 19.070006,17.5210156 18.7908324,17.7946019 C18.5116588,18.0681882 18.0587037,18.0685065 17.7791289,17.7953128 L17.7791289,17.7953128 L10.2098942,10.398842 C9.93245073,10.127731 9.92970668,9.68859574 10.2037413,9.41418482 L10.2037413,9.41418482 Z"],"d-arrow-right":["M2.54214478,2.15371704 L9.79625873,9.41418482 C9.93208624,9.55447396 10,9.71556193 10,9.89744874 C10,10.0793356 9.93208624,10.2457418 9.79625873,10.3966675 L2.22087106,17.7953128 C1.83778384,18.1121603 1.49706014,18.1121603 1.19869995,17.7953128 C0.900339762,17.4784653 0.900339762,17.151685 1.19869995,16.8149719 L8.27834846,9.89744874 L1.52534485,3.1342926 C1.28786041,2.79147628 1.30977541,2.47983785 1.59108986,2.19937732 C1.8724043,1.91891679 2.18942261,1.9036967 2.54214478,2.15371704 Z M11.5421448,2.15371704 L18.7962587,9.41418482 C18.9320862,9.55447396 19,9.71556193 19,9.89744874 C19,10.0793356 18.9320862,10.2457418 18.7962587,10.3966675 L11.2208711,17.7953128 C10.8377838,18.1121603 10.4970601,18.1121603 10.1987,17.7953128 C9.90033976,17.4784653 9.90033976,17.151685 10.1987,16.8149719 L17.2783485,9.89744874 L10.5253448,3.1342926 C10.2878604,2.79147628 10.3097754,2.47983785 10.5910899,2.19937732 C10.8724043,1.91891679 11.1894226,1.9036967 11.5421448,2.15371704 Z"],"d-caret":["M15.4067807,11.3333333 C16.0247676,11.3333333 16.1797643,11.9734248 15.7777728,12.3868172 L15.7777728,12.3868172 L10.5478836,17.777111 C10.2598897,18.0742963 9.73890077,18.0742963 9.45090688,17.777111 L9.45090688,17.777111 L4.22201765,12.3868172 C3.82002617,11.9734248 3.97602286,11.3333333 4.59200981,11.3333333 L4.59200981,11.3333333 Z M10.5478836,2.22288898 L15.7777728,7.61318284 C16.1797643,8.02657523 16.0247676,8.66666667 15.4067807,8.66666667 L4.59200981,8.66666667 C3.97602286,8.66666667 3.82002617,8.02657523 4.22201765,7.61318284 L9.45090688,2.22288898 C9.73890077,1.92570367 10.2598897,1.92570367 10.5478836,2.22288898 Z"],"dashboard":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10.6668168,1.35860451 L10.6666667,2.39369912 C10.6666667,2.76188896 10.3681898,3.06036579 10,3.06036579 C9.63181017,3.06036579 9.33333333,2.76188896 9.33333333,2.39369912 L9.33318321,1.35860451 C7.99274116,1.46059698 6.73753564,1.86751537 5.63677784,2.51014851 L6.15877881,3.09446789 C6.40395109,3.36915737 6.38002267,3.79058858 6.1053332,4.03576086 C5.83064373,4.28093314 5.40921251,4.25700472 5.16404023,3.98231525 L4.53340815,3.27450606 C3.84646979,3.83354106 3.24681879,4.49571426 2.75805425,5.23742654 L3.60056908,5.74266584 C3.91637417,5.93195636 4.01893449,6.34141725 3.82964397,6.65722234 C3.64035345,6.97302742 3.23089256,7.07558774 2.91508748,6.88629723 L2.11181753,6.40495653 C1.75768783,7.18072865 1.5146333,8.01785313 1.40298769,8.89599619 L2.30982267,8.89627495 C2.67801251,8.89627495 2.97648934,9.19475178 2.97648934,9.56294162 C2.97648934,9.93113145 2.67801251,10.2296083 2.30982267,10.2296083 L1.337,10.229 L1.33716359,10.2601634 C1.37133937,11.419364 1.63314383,12.5214308 2.07942186,13.5232088 L2.91509122,12.96437 C3.22119047,12.7597558 3.63520559,12.8420256 3.83981986,13.1481249 C4.04443413,13.4542241 3.9621643,13.8682392 3.65606505,14.0728535 L2.7173919,14.700288 C4.26101669,17.087054 6.94603919,18.6666667 10,18.6666667 C13.165285,18.6666667 15.934244,16.9697937 17.4468271,14.4360979 L16.3147639,13.6799344 C16.0086647,13.4753201 15.9263949,13.061305 16.1310091,12.7552058 C16.3356234,12.4491065 16.7496385,12.3668367 17.0557378,12.571451 L17.0557378,12.571451 L18.0439281,13.2320607 C18.4186575,12.3003076 18.6361909,11.2884232 18.6636937,10.2292418 L17.5801585,10.2296083 C17.2119687,10.2296083 16.9134919,9.93113145 16.9134919,9.56294162 C16.9134919,9.19475178 17.2119687,8.89627495 17.5801585,8.89627495 L18.5970123,8.89599619 C18.5006889,8.13836912 18.3065505,7.41127445 18.0276555,6.72777056 L17.0774976,7.2196678 C16.7505016,7.38889358 16.3482343,7.26099554 16.1790086,6.93399953 C16.0097828,6.60700352 16.1376808,6.20473628 16.4646768,6.0355105 L16.4646768,6.0355105 L17.4301416,5.53607115 C16.9383368,4.71922617 16.3156413,3.99011093 15.591085,3.37775524 L14.989005,4.16653 C14.7656801,4.45925813 14.3473365,4.51552058 14.0546084,4.29219571 C13.7618803,4.06887084 13.7056178,3.65052723 13.9289427,3.3577991 L14.5095039,2.59748943 C13.374204,1.9044005 12.067013,1.4651436 10.6668168,1.35860451 Z M13.915031,6.81938321 C14.145029,7.10689785 14.0984026,7.52642475 13.8108879,7.75642275 L11.771,9.387 L11.7777778,9.5060681 C11.7777778,10.1991313 11.2489884,10.7686892 10.5728533,10.8332978 L10.4444444,10.8394014 C9.70806478,10.8394014 9.11111111,10.2424478 9.11111111,9.5060681 C9.11111111,8.76968844 9.70806478,8.17273477 10.4444444,8.17273477 C10.643466,8.17273477 10.832303,8.21633986 11.0019229,8.29451745 L12.9779915,6.71524011 C13.2655061,6.48524211 13.685033,6.53186856 13.915031,6.81938321 Z"],"date":["M5.67326018,0 C6.0598595,0 6.37326018,0.31324366 6.37326018,0.699649298 L6.373,2.009 L13.89,2.009 L13.8901337,0.708141199 C13.8901337,0.321735562 14.2035343,0.00849190182 14.5901337,0.00849190182 C14.976733,0.00849190182 15.2901337,0.321735562 15.2901337,0.708141199 L15.29,2.009 L18,2.00901806 C19.1045695,2.00901806 20,2.90399995 20,4.00801605 L20,18.001002 C20,19.1050181 19.1045695,20 18,20 L2,20 C0.8954305,20 0,19.1050181 0,18.001002 L0,4.00801605 C0,2.90399995 0.8954305,2.00901806 2,2.00901806 L4.973,2.009 L4.97326018,0.699649298 C4.97326018,0.31324366 5.28666085,0 5.67326018,0 Z M1.4,7.742 L1.4,18.001002 C1.4,18.3322068 1.66862915,18.6007014 2,18.6007014 L18,18.6007014 C18.3313708,18.6007014 18.6,18.3322068 18.6,18.001002 L18.6,7.756 L1.4,7.742 Z M6.66666667,14.6186466 L6.66666667,16.284778 L5,16.284778 L5,14.6186466 L6.66666667,14.6186466 Z M10.8333333,14.6186466 L10.8333333,16.284778 L9.16666667,16.284778 L9.16666667,14.6186466 L10.8333333,14.6186466 Z M15,14.6186466 L15,16.284778 L13.3333333,16.284778 L13.3333333,14.6186466 L15,14.6186466 Z M6.66666667,10.6417617 L6.66666667,12.3078931 L5,12.3078931 L5,10.6417617 L6.66666667,10.6417617 Z M10.8333333,10.6417617 L10.8333333,12.3078931 L9.16666667,12.3078931 L9.16666667,10.6417617 L10.8333333,10.6417617 Z M15,10.6417617 L15,12.3078931 L13.3333333,12.3078931 L13.3333333,10.6417617 L15,10.6417617 Z M4.973,3.408 L2,3.40831666 C1.66862915,3.40831666 1.4,3.67681122 1.4,4.00801605 L1.4,6.343 L18.6,6.357 L18.6,4.00801605 C18.6,3.67681122 18.3313708,3.40831666 18,3.40831666 L15.29,3.408 L15.2901337,4.33697436 C15.2901337,4.72338 14.976733,5.03662366 14.5901337,5.03662366 C14.2035343,5.03662366 13.8901337,4.72338 13.8901337,4.33697436 L13.89,3.408 L6.373,3.408 L6.37326018,4.32848246 C6.37326018,4.7148881 6.0598595,5.02813176 5.67326018,5.02813176 C5.28666085,5.02813176 4.97326018,4.7148881 4.97326018,4.32848246 L4.973,3.408 Z"],"delete":["M9.12856092,0 L11.102803,0.00487381102 C11.8809966,0.0985789507 12.5627342,0.464975115 13.1253642,1.0831551 C13.583679,1.58672038 13.8246919,2.17271137 13.8394381,2.81137259 L19.3143116,2.81154887 C19.6930068,2.81154887 20,3.12136299 20,3.50353807 C20,3.88571315 19.6930068,4.19552726 19.3143116,4.19552726 L17.478,4.195 L17.4783037,15.8224356 C17.4783037,18.3654005 16.529181,20 14.4365642,20 L5.41874994,20 C3.32701954,20 2.39315828,18.3737591 2.39315828,15.8224356 L2.393,4.195 L0.685688428,4.19552726 C0.306993166,4.19552726 0,3.88571315 0,3.50353807 C0,3.12136299 0.306993166,2.81154887 0.685688428,2.81154887 L6.15581653,2.81128823 C6.17048394,2.29774844 6.36057711,1.7771773 6.7098201,1.26219866 C7.23012695,0.494976667 8.04206594,0.0738475069 9.12856092,0 Z M16.106,4.195 L3.764,4.195 L3.76453514,15.8224356 C3.76453514,17.7103418 4.28461756,18.6160216 5.41874994,18.6160216 L14.4365642,18.6160216 C15.5759705,18.6160216 16.1069268,17.7015972 16.1069268,15.8224356 L16.106,4.195 Z M6.71521035,6.34011422 C7.09390561,6.34011422 7.40089877,6.64992834 7.40089877,7.03210342 L7.40089877,15.0820969 C7.40089877,15.464272 7.09390561,15.7740861 6.71521035,15.7740861 C6.33651508,15.7740861 6.02952192,15.464272 6.02952192,15.0820969 L6.02952192,7.03210342 C6.02952192,6.64992834 6.33651508,6.34011422 6.71521035,6.34011422 Z M9.44248307,6.34011422 C9.82117833,6.34011422 10.1281715,6.64992834 10.1281715,7.03210342 L10.1281715,15.0820969 C10.1281715,15.464272 9.82117833,15.7740861 9.44248307,15.7740861 C9.06378781,15.7740861 8.75679464,15.464272 8.75679464,15.0820969 L8.75679464,7.03210342 C8.75679464,6.64992834 9.06378781,6.34011422 9.44248307,6.34011422 Z M12.1697558,6.34011422 C12.5484511,6.34011422 12.8554442,6.64992834 12.8554442,7.03210342 L12.8554442,15.0820969 C12.8554442,15.464272 12.5484511,15.7740861 12.1697558,15.7740861 C11.7910605,15.7740861 11.4840674,15.464272 11.4840674,15.0820969 L11.4840674,7.03210342 C11.4840674,6.64992834 11.7910605,6.34011422 12.1697558,6.34011422 Z M9.17565461,1.38234438 C8.53434679,1.42689992 8.11102741,1.64646338 7.84152662,2.04385759 C7.6437582,2.33547837 7.5448762,2.58744977 7.52918786,2.81194335 L12.4673768,2.81085985 C12.4530266,2.51959531 12.3382454,2.26423777 12.1153724,2.01935991 C11.7693001,1.63911901 11.3851686,1.43266964 11.0215648,1.38397839 L9.17565461,1.38234438 Z"],"dingding":["M17.4662004,7.47474562 C17.4321515,7.62207529 17.3512853,7.83414072 17.2384983,8.09308378 L17.2406263,8.09308378 L17.227858,8.11763873 C16.5617761,9.61549039 14.8231533,12.5509225 14.8231533,12.5509225 C14.8231533,12.5509225 14.8210253,12.5442257 14.8146411,12.5330644 L14.3060354,13.4616877 L16.7554293,13.4616877 L12.0758314,20 L13.137732,15.5533226 L11.2097121,15.5533226 L11.8800502,12.613426 C11.3373956,12.7518266 10.6968504,12.9393371 9.93926198,13.1960479 C9.93926198,13.1960479 8.91353839,13.8277797 6.98339048,11.9816942 C6.98339048,11.9816942 5.68101946,10.7762696 6.43647977,10.4771457 C6.75781642,10.3499065 7.99421767,10.1869509 8.96886788,10.0485503 C10.2840072,9.86103985 11.092669,9.76282007 11.092669,9.76282007 C11.092669,9.76282007 7.03659191,9.82755583 6.07471004,9.66683255 C5.11282818,9.50834154 3.89132332,7.82074712 3.63170034,6.33852133 C3.63170034,6.33852133 3.22949753,5.5237436 4.49569158,5.90992592 C5.76188563,6.29610824 11.0054186,7.41000985 11.0054186,7.41000985 C11.0054186,7.41000985 4.18499522,5.21345838 3.73171903,4.67771412 C3.27844284,4.14196985 2.39529909,1.75344335 2.51021418,0.284611171 C2.51021418,0.284611171 2.5591595,-0.0814807412 2.91667311,0.0167390401 C2.91667311,0.0167390401 7.95804069,2.43651729 11.4054934,3.76248434 C14.8550742,5.08621912 17.8535068,5.76036398 17.4662004,7.47474562 Z"],"dislike-o":["M15.8074649,0.938738991 C16.2025604,1.3059082 16.4617615,2.07244873 16.5130466,2.5343203 C17.1027527,2.90008545 17.8008575,3.63787842 17.8615933,5.02821515 C18.9151306,5.75898743 19.7150269,7.11120605 18.7162102,9.08723366 C19.2958069,9.62747192 19.9433899,11.2763977 19.1107178,12.6038208 C18.1421782,14.1560822 16.0360565,14.2643585 13.9372676,13.9872944 C14.4977722,15.5523071 14.7073059,16.9955139 13.8205261,18.4753418 C12.9398804,19.7866516 11.7242126,20 11.3078918,20 C10.1704102,20 9.39035034,19.0213318 9.07400513,17.7168884 C8.95928955,17.353241 8.82849121,16.4931641 8.77722168,16.2661133 C8.51171875,14.8261922 7.62136841,13.6754049 6.10617065,12.8137512 C5.47716268,12.4468689 4.76980468,12.1316559 3.98409667,11.8681124 L1.64382935,11.8681124 C1.12294006,11.8681124 0.5,11.3414612 0.5,10.7027462 L0.5,3.06665039 C0.574228923,2.34547834 0.974894206,1.98489232 1.70199585,1.98489232 L4.81132055,1.98489232 C6.17615721,1.67440556 7.53590502,1.3427105 8.89056396,0.989807129 C10.20047,0.636901855 10.4871979,0.519836426 11.4029541,0.267700195 C13.4560699,-0.263748169 14.8805237,0.0286560059 15.8074649,0.938738991 Z M13.4245605,1.36291148 C12.6063843,1.36291148 11.5687971,1.61515295 11.1090088,1.76159668 C10.9467306,1.8132827 10.6630883,1.89682019 10.3639654,1.98328737 L10.0636038,2.06965993 L10.0636038,2.06965993 L9.77645142,2.15155854 C9.45829601,2.24199771 9.21514893,2.31018066 9.21514893,2.31018066 C9.21514893,2.31018066 7.80519104,2.68789673 5.04295141,3.330085 C4.94048337,3.34188372 4.88521116,3.34925142 4.87713478,3.35218811 L4.87713478,10.73172 C6.38840691,11.3143819 7.56512451,12.0204264 8.4072876,12.8498535 C9.67053223,14.0939941 10.0216827,15.2180786 10.2289429,16.6569214 C10.3467898,17.3798708 10.5375415,17.9633204 10.8264923,18.3621674 C10.9138336,18.4827271 11.0216675,18.5667114 11.1684875,18.6133118 C11.3153076,18.6599121 11.5186679,18.663681 11.9511871,18.4285583 C12.3837063,18.1934357 12.941864,17.5759888 13.0456848,16.6569214 C13.115509,15.7644043 12.8754998,14.9902948 12.5541382,14.1756134 C12.44089,13.8885189 12.2991791,13.5737305 12.1968787,13.3543573 C11.9788208,12.9413757 12.3070068,12.2554932 12.9832786,12.4035844 C13.8887024,12.6594696 16.1374207,13.004776 17.4047852,12.4035844 C18.1417542,11.9767014 18.3242289,11.2880503 17.9522095,10.3376312 C17.8090108,10.0982513 17.6439188,9.91410426 17.4569335,9.78518998 C17.2863646,9.68286774 16.9547424,9.24139404 17.3540649,8.74023438 C17.7495117,8.10450745 18.329071,6.81211853 16.863849,6.00580941 C16.5555267,5.82992554 16.5246237,5.53462219 16.5246237,5.4359513 C16.5032349,5.16220093 16.5482635,4.1456604 15.7940063,3.692276 C15.6133359,3.59533759 15.3965302,3.51461792 15.2746582,3.28231812 C15.1955261,3.12754822 15.1705322,2.75390625 15.1705322,2.75390625 C15.0681305,2.12234497 14.9255524,1.53219604 13.4245605,1.36291148 Z M3.51948917,3.34778308 L1.86086471,3.34778308 L1.86086471,10.5053837 L3.51948917,10.5053837 L3.51948917,3.34778308 Z"],"document":["M17.2257134,0 C18.2056248,0 19,0.814027728 19,1.81818182 L19,18.1818182 C19,19.1859723 18.2056248,20 17.2257134,20 L4.54224066,20 C3.56232921,20 2.76795404,19.1859723 2.76795404,18.1818182 L2.767,16.496 L1.66535748,16.4966682 C1.29789069,16.4966682 1,16.1914078 1,15.81485 C1,15.4382922 1.29789069,15.1330318 1.66535748,15.1330318 L2.767,15.133 L2.767,12.714 L1.66535748,12.7143283 C1.29789069,12.7143283 1,12.4090679 1,12.0325101 C1,11.6559523 1.29789069,11.3506919 1.66535748,11.3506919 L2.767,11.35 L2.767,8.919 L1.66535748,8.91952067 C1.29789069,8.91952067 1,8.61426027 1,8.23770249 C1,7.86114471 1.29789069,7.55588431 1.66535748,7.55588431 L2.767,7.555 L2.767,5.122 L1.66535748,5.12236353 C1.29789069,5.12236353 1,4.81710313 1,4.44054534 C1,4.06398756 1.29789069,3.75872716 1.66535748,3.75872716 L2.767,3.758 L2.76795404,1.81818182 C2.76795404,0.814027728 3.56232921,0 4.54224066,0 L17.2257134,0 Z M13.9780482,1.36401786 L4.46613715,1.36401786 C4.37404371,1.36653991 4.29203368,1.4057758 4.22010703,1.48172552 C4.14818038,1.55767524 4.10825169,1.6471796 4.10032095,1.75023859 L4.10032095,1.75023859 L4.1,3.758 L4.94397818,3.75872716 C5.2502005,3.75872716 5.50810609,3.97071355 5.58556845,4.25929106 C5.59053499,4.2761029 5.59428565,4.29298464 5.59726357,4.31015134 C5.60516169,4.35239714 5.60933566,4.39597174 5.60933566,4.44054534 C5.60933566,4.81710313 5.31144497,5.12236353 4.94397818,5.12236353 L4.1,5.122 L4.10032095,7.55324128 L4.97308779,7.55324128 C4.98823966,7.55521266 5.00308423,7.55743323 5.01762151,7.55990298 L4.94397818,7.55588431 C5.05723291,7.55588431 5.16387863,7.5848809 5.25723115,7.63602454 C5.26351301,7.64033727 5.26986751,7.64385089 5.27610847,7.64745657 C5.2958702,7.65846681 5.31492058,7.67111811 5.33326794,7.68470467 C5.35789743,7.70421391 5.38069125,7.72529186 5.40111928,7.74828824 L5.34640151,7.69468342 C5.47532774,7.79516955 5.56738421,7.94276873 5.5981305,8.11243588 C5.60391934,8.14444489 5.60705359,8.17496301 5.60705359,8.2039573 L5.60023234,8.12465525 C5.60621981,8.16142506 5.60933566,8.1991909 5.60933566,8.23770249 C5.60933566,8.59351329 5.34336611,8.88566673 5.00404468,8.91677984 L4.97308779,8.91816809 L4.95811547,8.91936982 C4.95341486,8.91947022 4.94870227,8.91952067 4.94397818,8.91952067 L4.1,8.919 L4.1,11.35 L4.94397818,11.3506919 C5.05519595,11.3506919 5.16004031,11.3786548 5.25218128,11.4280941 C5.31373083,11.4574125 5.36316944,11.4943408 5.40111928,11.5394126 L5.37191228,11.5104022 C5.51707755,11.6354741 5.60933566,11.8229515 5.60933566,12.0325101 C5.60933566,12.0699519 5.60639051,12.1066889 5.60072465,12.1424909 C5.59794829,12.1643849 5.59370208,12.1855562 5.58835098,12.2064022 C5.58507396,12.215892 5.58229493,12.2258188 5.57930457,12.2356501 C5.57522962,12.2511358 5.57000007,12.2658994 5.56422105,12.2804718 C5.51106063,12.4192727 5.41505677,12.5359456 5.29281433,12.61322 C5.2892799,12.6149675 5.28572138,12.6170804 5.28212038,12.6191591 C5.18300606,12.679882 5.06741769,12.7143283 4.94397818,12.7143283 L4.1,12.714 L4.10032095,15.1325994 L4.97308779,15.1325994 C4.98084987,15.1338788 4.98852816,15.1352123 4.99612267,15.1365998 L4.94397818,15.1330318 C5.31144497,15.1330318 5.60933566,15.4382922 5.60933566,15.81485 C5.60933566,16.0373614 5.50532011,16.2349777 5.34439711,16.3594252 C5.33999939,16.3617401 5.33567639,16.3650785 5.33128735,16.3683573 C5.31135455,16.3839525 5.29066647,16.397457 5.26924512,16.4097818 C5.26608728,16.4100718 5.26336073,16.4115494 5.26061464,16.4130093 C5.17857994,16.4603516 5.0853195,16.4889615 4.98617142,16.4953194 L4.97308779,16.4954689 L4.95811547,16.4965173 C4.95341486,16.4966177 4.94870227,16.4966682 4.94397818,16.4966682 L4.1,16.496 L4.10032095,18.2603037 C4.10562034,18.3268876 4.12940509,18.3900486 4.17167517,18.4497868 L4.22010703,18.508384 C4.29289855,18.5849924 4.38305771,18.6281998 4.49058449,18.6380062 L4.49058449,18.6380062 L13.9780482,18.6380062 L13.9780482,1.36401786 Z M17.242323,1.36228602 L15.3042726,1.36228602 L15.3042726,18.6361106 L17.2781005,18.6361106 C17.3690403,18.6368064 17.4544165,18.593565 17.5342291,18.5063865 C17.6140416,18.4192079 17.6587535,18.3299394 17.6683645,18.2385809 L17.6683645,18.2385809 L17.6683645,1.79393422 C17.6578149,1.67833733 17.6131031,1.57889626 17.5342291,1.49561102 C17.455355,1.41232577 17.358053,1.36788411 17.242323,1.36228602 L17.242323,1.36228602 Z"],"dot-chart":["M14.0195274,13.9969614 C14.5722317,13.9969614 15.0202871,14.4450168 15.0202871,14.997721 L15.0202871,16.9992403 C15.0202871,17.5519446 14.5722317,18 14.0195274,18 L1.00075965,18 C0.448055357,18 2.66453526e-14,17.5519446 2.66453526e-14,16.9992403 L2.66453526e-14,14.997721 C2.66453526e-14,14.4450168 0.448055357,13.9969614 1.00075965,13.9969614 L14.0195274,13.9969614 Z M18.9992403,8.0077783 C19.5519446,8.0077783 20,8.45583366 20,9.00853795 L20,11.0100573 C20,11.5627615 19.5519446,12.0108169 18.9992403,12.0108169 L1.00075965,12.0108169 C0.448055357,12.0108169 1.12265752e-12,11.5627615 1.12265752e-12,11.0100573 L1.12265752e-12,9.00853795 C1.12265752e-12,8.45583366 0.448055357,8.0077783 1.00075965,8.0077783 L18.9992403,8.0077783 Z M11.0310808,2 C11.5837851,2 12.0318404,2.44805536 12.0318404,3.00075965 L12.0318404,5.00227895 C12.0318404,5.55498325 11.5837851,6.0030386 11.0310808,6.0030386 L1.00108033,6.0030386 C0.448376035,6.0030386 0.00032067799,5.55498325 0.00032067799,5.00227895 L0.00032067799,3.00075965 C0.00032067799,2.44805536 0.448376035,2 1.00108033,2 L11.0310808,2 Z"],"down-circle-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M6.58558122,7.63613812 L10.0046519,11.0333966 L13.4956665,7.63148686 C13.7653526,7.36868429 14.1970199,7.37426445 14.4598225,7.64395051 C14.7226251,7.91363658 14.7170449,8.3453039 14.4473588,8.60810648 L10.4758462,12.47825 C10.2092302,12.7380608 9.78350334,12.7359904 9.51942697,12.4735988 L5.62443516,8.60345522 C5.35731792,8.33804207 5.35593648,7.90634088 5.62134964,7.63922364 C5.8867628,7.3721064 6.31846398,7.37072496 6.58558122,7.63613812 Z"],"down-circle":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M6.58558122,7.63613812 C6.31846398,7.37072496 5.8867628,7.3721064 5.62134964,7.63922364 C5.35593648,7.90634088 5.35731792,8.33804207 5.62443516,8.60345522 L5.62443516,8.60345522 L9.51942697,12.4735988 C9.78350334,12.7359904 10.2092302,12.7380608 10.4758462,12.47825 L10.4758462,12.47825 L14.4473588,8.60810648 C14.7170449,8.3453039 14.7226251,7.91363658 14.4598225,7.64395051 C14.1970199,7.37426445 13.7653526,7.36868429 13.4956665,7.63148686 L13.4956665,7.63148686 L10.0046519,11.0333966 Z"],"down-square-o":["M1.81818182,1.36363636 C1.5671433,1.36363636 1.36363636,1.5671433 1.36363636,1.81818182 L1.36363636,18.1818182 C1.36363636,18.4328567 1.5671433,18.6363636 1.81818182,18.6363636 L18.1818182,18.6363636 C18.4328567,18.6363636 18.6363636,18.4328567 18.6363636,18.1818182 L18.6363636,1.81818182 C18.6363636,1.5671433 18.4328567,1.36363636 18.1818182,1.36363636 L1.81818182,1.36363636 Z M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M14.4598225,7.6248997 C14.1970199,7.35521364 13.7653526,7.34963347 13.4956665,7.61243605 L13.4956665,7.61243605 L10.0046519,11.0143458 L6.58558122,7.6170873 C6.31846398,7.35167415 5.8867628,7.35305558 5.62134964,7.62017282 C5.35593648,7.88729006 5.35731792,8.31899125 5.62443516,8.58440441 L5.62443516,8.58440441 L9.51942697,12.4545479 C9.78350334,12.7169396 10.2092302,12.71901 10.4758462,12.4591992 L10.4758462,12.4591992 L14.4473588,8.58905566 C14.7170449,8.32625309 14.7226251,7.89458576 14.4598225,7.6248997 Z"],"down-square":["M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M14.4598225,7.6248997 C14.1970199,7.35521364 13.7653526,7.34963347 13.4956665,7.61243605 L13.4956665,7.61243605 L10.0046519,11.0143458 L6.58558122,7.6170873 C6.31846398,7.35167415 5.8867628,7.35305558 5.62134964,7.62017282 C5.35593648,7.88729006 5.35731792,8.31899125 5.62443516,8.58440441 L5.62443516,8.58440441 L9.51942697,12.4545479 C9.78350334,12.7169396 10.2092302,12.71901 10.4758462,12.4591992 L10.4758462,12.4591992 L14.4473588,8.58905566 C14.7170449,8.32625309 14.7226251,7.89458576 14.4598225,7.6248997 Z"],"down":["M10.1025513,12.7783485 L16.8106554,6.0794438 C17.0871744,5.80330401 17.5303978,5.80851813 17.8006227,6.09108986 C18.0708475,6.37366159 18.0657451,6.82658676 17.7892261,7.10272655 L10.5858152,14.2962587 C10.3114043,14.5702933 9.87226896,14.5675493 9.60115804,14.2901058 L2.2046872,6.72087106 C1.93149355,6.44129625 1.93181183,5.98834118 2.20539811,5.7091676 C2.47898439,5.42999401 2.92223711,5.43031926 3.19543076,5.70989407 L10.1025513,12.7783485 Z"],"download":["M19.3107659,12.0514519 C19.6914194,12.0514519 20,12.3646267 20,12.7509475 L20,17.6690264 C19.9938202,18.3388667 19.8725879,18.8692232 19.6014711,19.2629832 C19.2734293,19.7394192 18.692794,19.9546046 17.8541437,20 L1.95063965,19.9982693 C1.30493215,19.9520847 0.783122117,19.6957368 0.444258688,19.2213785 C0.141889579,18.7981068 -0.00168144063,18.2714304 0,17.6625107 L0,12.7509492 C0,12.3646285 0.3085815,12.0514519 0.689234956,12.0514519 C1.06988841,12.0514519 1.37846979,12.3646249 1.37847075,12.7509457 L1.37848021,17.6644834 C1.37755618,17.9967232 1.44266621,18.235573 1.56028228,18.400218 C1.64140402,18.5137764 1.78414309,18.5838993 1.99909415,18.6010088 L17.8165968,18.6020475 C18.2362406,18.5788121 18.4438468,18.5018725 18.4715409,18.4616506 C18.5561601,18.3387527 18.6177678,18.0692372 18.6215319,17.662509 L18.6215319,12.7509475 C18.6215319,12.3646267 18.9301125,12.0514519 19.3107659,12.0514519 Z M9.99004267,0 C10.3706961,0 10.6792767,0.313174842 10.6792767,0.699495587 L10.679,11.569 L13.7412518,8.49006664 C14.0116068,8.2181121 14.4480014,8.22007842 14.7159664,8.49445853 C14.9839314,8.76883864 14.9819939,9.21173039 14.7116389,9.48368493 L10.3562492,13.8648433 C10.0862788,14.136411 9.65063837,14.1348929 9.38251189,13.86145 L5.08653398,9.48029163 C4.81802558,9.20645925 4.81908501,8.76356444 5.08890029,8.4910584 C5.35871558,8.21855235 5.79511316,8.21962756 6.06362157,8.49345994 L9.3,11.794 L9.30080862,0.699495587 C9.30080862,0.313174842 9.60938921,0 9.99004267,0 Z"],"edit":["M2.29171812,13.3600638 L6.81539686,18.1161843 L0.5,20 L2.29171812,13.3600638 Z M12.7049284,2.41181464 L17.2274301,7.16667706 L7.26550878,17.6404299 L2.74300706,12.8855675 L12.7049284,2.41181464 Z M16.1415118,0.347861156 C16.8783654,1.12259394 18.3106609,2.62843788 19.1175863,3.4768634 C19.9245902,4.32524768 19.2036068,5.09020427 19.2036068,5.09020427 L17.6827602,6.68916958 L13.1591207,1.93311092 L14.6798693,0.334186853 L14.6989777,0.315464422 C14.8180473,0.203171183 15.4749058,-0.352994255 16.1415118,0.347861156 Z"],"enter":["M19.3001469,0 C19.6866651,0 20,0.313300846 20,0.699777025 L20,8.97782758 C20,12.6769567 17.0009372,15.6756934 13.3014059,15.6756934 L2.305,15.675 L5.43624386,18.8055827 C5.70952379,19.0788626 5.7094997,19.521961 5.43619005,19.7952707 C5.16288041,20.0685803 4.71978201,20.0686044 4.44650209,19.7953245 L0.205212835,15.5540352 C-0.0680670919,15.2807553 -0.0680430016,14.8376569 0.205266642,14.5643472 L4.4470171,10.3225968 C4.72032674,10.0492871 5.16342514,10.0492631 5.43670506,10.322543 C5.70998499,10.5958229 5.7099609,11.0389213 5.43665126,11.3122309 L2.472,14.276 L13.3014059,14.2761393 C16.2279008,14.2761393 18.6002938,11.9040044 18.6002938,8.97782758 L18.6002938,0.699777025 C18.6002938,0.313300846 18.9136287,0 19.3001469,0 Z"],"environment-o":["M13.3709348,0.805099943 C14.5096054,1.37933521 15.542464,2.35645066 16.496299,3.75921597 C17.0986485,4.76973596 17.4311842,5.88751678 17.4920598,7.10213066 C17.553425,8.32651441 17.2587773,9.61912057 16.6192569,10.9762793 L16.5617409,11.0757331 L10.5385405,19.7177833 C10.2763306,20.0940004 9.73400321,20.0940871 9.4716804,19.717954 L3.61398515,11.3172573 C3.14262456,10.5604581 2.81745341,9.78904561 2.64174611,9.00429036 C2.25522027,7.27796373 2.64244471,4.89779059 4.0101525,3.03002489 C5.34566477,1.20622595 7.20901174,0.315047047 9.09364642,0.0685629558 C10.5316414,-0.119506854 11.9024366,0.0645315952 13.3709348,0.805099943 Z M9.25885863,1.41468007 C7.69454126,1.6192711 6.14999175,2.35797943 5.05871768,3.84824241 C3.93957136,5.37656821 3.61932643,7.34503485 3.92241988,8.69873035 C4.06289153,9.32611388 4.32753226,9.95392836 4.70017135,10.5539579 L10.0048766,18.1601416 L15.4613496,10.3312283 C15.9919549,9.18912065 16.2277471,8.13729382 16.1793792,7.17223846 C16.1297953,6.18292102 15.8628907,5.28575164 15.3989107,4.5049454 C14.5869751,3.31274205 13.717094,2.48980823 12.7939639,2.02427075 C11.5714151,1.40773545 10.4564795,1.25804787 9.25885863,1.41468007 Z M10.0312188,3.85027329 C11.9896358,3.85027329 13.5850651,5.44877757 13.5850651,7.43092315 C13.5850651,9.41306872 11.9896358,11.011573 10.0312188,11.011573 C8.07280191,11.011573 6.47737258,9.41306872 6.47737258,7.43092315 C6.47737258,5.44877757 8.07280191,3.85027329 10.0312188,3.85027329 Z M10.0312188,5.20715113 C8.7901087,5.20715113 7.79180887,6.20737504 7.79180887,7.43092315 C7.79180887,8.65447125 8.7901087,9.65469516 10.0312188,9.65469516 C11.272329,9.65469516 12.2706288,8.65447125 12.2706288,7.43092315 C12.2706288,6.20737504 11.272329,5.20715113 10.0312188,5.20715113 Z"],"environment":["M13.3709348,0.805099943 C14.5096054,1.37933521 15.542464,2.35645066 16.496299,3.75921597 C17.0986485,4.76973596 17.4311842,5.88751678 17.4920598,7.10213066 C17.553425,8.32651441 17.2587773,9.61912057 16.6192569,10.9762793 L16.5617409,11.0757331 L10.5385405,19.7177833 C10.2763306,20.0940004 9.73400321,20.0940871 9.4716804,19.717954 L3.61398515,11.3172573 C3.14262456,10.5604581 2.81745341,9.78904561 2.64174611,9.00429036 C2.25522027,7.27796373 2.64244471,4.89779059 4.0101525,3.03002489 C5.34566477,1.20622595 7.20901174,0.315047047 9.09364642,0.0685629558 C10.5316414,-0.119506854 11.9024366,0.0645315952 13.3709348,0.805099943 Z M10.0312188,2.62679764 C7.34998675,2.62679764 5.19330988,4.78763119 5.19330988,7.43092315 C5.19330988,10.0742151 7.34998675,12.2350486 10.0312188,12.2350486 C12.7124509,12.2350486 14.8691278,10.0742151 14.8691278,7.43092315 C14.8691278,4.78763119 12.7124509,2.62679764 10.0312188,2.62679764 Z M10.0312188,5.20715113 C11.272329,5.20715113 12.2706288,6.20737504 12.2706288,7.43092315 C12.2706288,8.65447125 11.272329,9.65469516 10.0312188,9.65469516 C8.7901087,9.65469516 7.79180887,8.65447125 7.79180887,7.43092315 C7.79180887,6.20737504 8.7901087,5.20715113 10.0312188,5.20715113 Z"],"eye-o":["M5.08925923,14.7812575 C6.83890353,16.1489473 8.30854164,16.5872788 9.99908213,16.5872788 C11.4711695,16.5872788 13.3910914,15.9742173 15.2378869,14.6683383 C16.570419,13.7260976 17.6708255,12.3530959 18.537983,10.5374417 C17.597691,8.9064566 16.5098973,7.57033264 15.2752009,6.52533954 C13.564451,5.07743571 11.6931693,4.41272117 9.96277044,4.41272117 C8.17315577,4.41272117 6.1122309,5.2112 4.35475439,6.88682086 C3.08938698,8.09325294 2.13041907,9.30686705 1.47454449,10.5252727 C2.54037395,12.3139696 3.74584601,13.7311169 5.08925923,14.7812575 Z M9.99908213,18 C8.02614281,18 6.26540717,17.4748462 4.25862012,15.906149 C2.68211393,14.6738006 1.29482989,13.004971 0.0947308533,10.9050997 C-0.0237278138,10.6978268 -0.0315708945,10.442789 0.0739152041,10.2282256 C0.80780563,8.73546004 1.92510465,7.27729191 3.42149342,5.85059845 C5.43785551,3.92814977 7.83346934,3 9.96277044,3 C12.0058629,3 14.1864334,3.77457977 16.1474712,5.43431633 C17.5958754,6.66018236 18.8499416,8.23560279 19.9103911,10.1560851 C20.0198049,10.3542344 20.0295805,10.5945247 19.9366437,10.8013887 C18.9485194,13.0008108 17.6419411,14.6826004 16.0155725,15.8326144 C13.9398762,17.3003504 11.748787,18 9.99908213,18 Z M10.2339532,14.4 C8.1904996,14.4 6.53395318,12.7434536 6.53395318,10.7 C6.53395318,8.65654643 8.1904996,7 10.2339532,7 C12.2774067,7 13.9339532,8.65654643 13.9339532,10.7 C13.9339532,12.7434536 12.2774067,14.4 10.2339532,14.4 Z M10.2339532,13 C11.5042081,13 12.5339532,11.9702549 12.5339532,10.7 C12.5339532,9.42974508 11.5042081,8.4 10.2339532,8.4 C8.96369825,8.4 7.93395318,9.42974508 7.93395318,10.7 C7.93395318,11.9702549 8.96369825,13 10.2339532,13 Z"],"eye":["M9.96277044,2.5 C12.0058629,2.5 14.1864334,3.27457977 16.1474712,4.93431633 C17.5958754,6.16018236 18.8499416,7.73560279 19.9103911,9.65608506 C20.0198049,9.85423439 20.0295805,10.0945247 19.9366437,10.3013887 C18.9485194,12.5008108 17.6419411,14.1826004 16.0155725,15.3326144 C13.9398762,16.8003504 11.748787,17.5 9.99908213,17.5 C8.02614281,17.5 6.26540717,16.9748462 4.25862012,15.406149 C2.68211393,14.1738006 1.29482989,12.504971 0.0947308533,10.4050997 C-0.0237278138,10.1978268 -0.0315708945,9.942789 0.0739152041,9.72822561 C0.80780563,8.23546004 1.92510465,6.77729191 3.42149342,5.35059845 C5.43785551,3.42814977 7.83346934,2.5 9.96277044,2.5 Z M9.99908213,5.90603383 C7.85051404,5.90603383 6.10875546,7.69810813 6.10875546,9.9087438 C6.10875546,12.1193795 7.85051404,13.9114538 9.99908213,13.9114538 C12.1476502,13.9114538 13.8894088,12.1193795 13.8894088,9.9087438 C13.8894088,7.69810813 12.1476502,5.90603383 9.99908213,5.90603383 Z M9.99908213,7.318755 C11.3893321,7.318755 12.5163523,8.47833248 12.5163523,9.9087438 C12.5163523,11.3391551 11.3893321,12.4987326 9.99908213,12.4987326 C8.60883219,12.4987326 7.48181193,11.3391551 7.48181193,9.9087438 C7.48181193,8.47833248 8.60883219,7.318755 9.99908213,7.318755 Z"],"facebook":["M18.8961111,0 L1.10388889,0 C0.494166667,0 0,0.494166667 0,1.10388889 L0,18.8963889 C0,19.5058333 0.494166667,20 1.10388889,20 L10.6825,20 L10.6825,12.255 L8.07611111,12.255 L8.07611111,9.23666667 L10.6825,9.23666667 L10.6825,7.01055556 C10.6825,4.42722222 12.2602778,3.02083333 14.5647222,3.02083333 C15.6686111,3.02083333 16.6172222,3.10277778 16.8938889,3.13972222 L16.8938889,5.83944444 L15.2955556,5.84027778 C14.0422222,5.84027778 13.7997222,6.43583333 13.7997222,7.30972222 L13.7997222,9.23694444 L16.7886111,9.23694444 L16.3994444,12.2552778 L13.7997222,12.2552778 L13.7997222,20 L18.8963889,20 C19.5058333,20 20,19.5058333 20,18.8961111 L20,1.10388889 C20,0.494166667 19.5058333,0 18.8961111,0 L18.8961111,0 Z"],"file-add":["M16.8388383,15.0007046 L13.9738042,15.0007046 L13.9738042,11.9542589 C13.9738042,11.7588698 13.909549,11.5928515 13.7810388,11.4562041 C13.6525285,11.3195567 13.4963964,11.251233 13.3126424,11.251233 C13.1288885,11.251233 12.9727563,11.3195567 12.8442461,11.4562041 C12.7157358,11.5928515 12.6514807,11.7588698 12.6514807,11.9542589 L12.6514807,15.0007046 L9.93337143,15.0007046 C9.74961745,15.0007046 9.59348533,15.0690283 9.46497508,15.2056757 C9.33646484,15.3423231 9.27220971,15.5083413 9.27220971,15.7037305 C9.27220971,15.8991196 9.33646484,16.0651379 9.46497508,16.2017853 C9.59348533,16.3384327 9.74961745,16.4067564 9.93337143,16.4067564 L12.6514807,16.4067564 L12.6514807,19.2969741 C12.6514807,19.4923632 12.7157358,19.6583815 12.8442461,19.7950289 C12.9727563,19.9316763 13.1288885,20 13.3126424,20 C13.4963964,20 13.6525285,19.9316763 13.7810388,19.7950289 C13.909549,19.6583815 13.9738042,19.4923632 13.9738042,19.2969741 L13.9738042,16.4067564 L16.8388383,16.4067564 C17.0225923,16.4067564 17.1787244,16.3384327 17.3072346,16.2017853 C17.4357449,16.0651379 17.5,15.8991196 17.5,15.7037305 C17.5,15.5083413 17.4357449,15.3423231 17.3072346,15.2056757 C17.1787244,15.0690283 17.0225923,15.0007046 16.8388383,15.0007046 Z M17.3552572,5.02744336 L13.3303052,0.480698045 L12.88962,0.00219328565 L3.78015969,0.00219328565 C3.60938445,0.00219328565 3.42082973,-0.00881814038 3.25363927,0.0185045294 C3.0610362,0.0499801883 2.89252504,0.130125142 2.74207186,0.300303457 C2.46101672,0.618206268 2.50267232,1.01746687 2.50267232,1.40824513 L2.50267232,18.5933232 C2.50267232,18.9841015 2.45712911,19.4072464 2.74207186,19.7033107 C3.0270146,19.9993751 3.21788756,19.9993751 3.58539553,19.9993751 L8.61046029,19.9993751 C8.79421428,19.9993751 8.95034639,19.9310514 9.07885664,19.794404 C9.20736689,19.6577566 9.27162201,19.4917383 9.27162201,19.2963492 C9.27162201,19.10096 9.20736689,18.9349418 9.07885664,18.7982944 C8.95034639,18.6616469 8.79421428,18.5933232 8.61046029,18.5933232 L3.84495503,18.5933232 L3.83881281,1.3642931 L11.113584,1.3642931 L11.113584,4.9573716 C11.113584,5.34814986 11.2659145,5.70047623 11.505257,5.95348122 C11.7445995,6.20648621 12.0745417,6.36342345 12.4420496,6.36342345 L16.1770889,6.36342345 L16.1770889,10.5475821 C16.1770889,10.7429713 16.241344,10.9089895 16.3698542,11.0456369 C16.4983645,11.1822844 16.6544966,11.2506081 16.8382506,11.2506081 C17.0220046,11.2506081 17.1781367,11.1822844 17.3066469,11.0456369 C17.4351572,10.9089895 17.4994123,10.7429713 17.4994123,10.5475821 L17.4994123,5.47537652 C17.4995829,5.42590132 17.4997788,5.33285203 17.5,5.19622867 L17.3552572,5.02744336 Z M12.5184409,4.85473281 C12.4769641,4.80184148 12.4516963,4.70854652 12.4426373,4.57484796 L12.4426373,1.52137418 L15.501822,4.95799651 L12.7599299,4.95799651 C12.640414,4.94204538 12.5599177,4.90762414 12.5184409,4.85473281 Z"],"file-excel":["M15.5336935,1.36078656 L14.3091934,0 L4.66164861,0 C3.96587259,0 3.69745022,0.516240645 3.69745022,0.918940882 L3.69745022,4.54990495 L5.05022147,4.54990495 L5.05022147,1.65231191 C5.05022147,1.49764309 5.17972642,1.36831506 5.33012577,1.36831506 L12.2326992,1.36831506 C12.3848666,1.36831506 12.4607275,1.39536077 12.4607275,1.51951183 L12.4607275,6.33974935 L17.374336,6.33974935 C17.5674293,6.33974935 17.64219,6.43910559 17.64219,6.58649791 L17.64219,18.3551379 C17.64219,18.6018372 17.5427649,18.6391348 17.3923656,18.6391348 L5.33012577,18.6391348 C5.17841421,18.6391348 5.05022147,18.5071054 5.05022147,18.3551379 L5.05022147,17.2797529 L3.70585195,17.2797529 L3.70585195,18.9746512 C3.68830357,19.5740762 4.00829472,20 4.66164861,20 L18.0607964,20 C18.7607484,20 19,19.492895 19,19.031053 L19,6.44396558 L19,5.18667048 L18.6504957,4.80720067 L15.5336935,1.36078656 Z M13.8361266,1.51951183 L14.2226173,1.95352728 L16.8187437,4.80720067 L16.9617674,4.98003873 L14.3091934,4.98003873 C14.1088763,4.98003873 13.9821388,4.94696877 13.9289809,4.88082886 C13.8758231,4.81468894 13.8448716,4.71017086 13.8361266,4.56727461 L13.8361266,1.51951183 Z M12.745155,10.6673887 L17.3228723,10.6673887 L17.3228723,12.0008027 L12.745155,12.0008027 L12.745155,10.6673887 Z M12.745155,8.00053511 L17.3228723,8.00053511 L17.3228723,9.33394906 L12.745155,9.33394906 L12.745155,8.00053511 Z M12.745155,13.3342423 L17.3228723,13.3342423 L17.3228723,14.6676563 L12.745155,14.6676563 L12.745155,13.3342423 Z M1,5.6257308 L1,16.2931195 L11.4647417,16.2931195 L11.4647417,5.6257308 L1,5.6257308 Z M6.23301435,11.8301319 L5.59210113,12.8075142 L6.23301435,12.8075142 L6.23301435,13.9996373 L3.01552801,13.9996373 L5.35148739,10.4913668 L3.28236069,7.33382814 L5.01013637,7.33382814 L6.2343518,9.16996719 L7.45725501,7.33382814 L9.18369325,7.33382814 L7.11194213,10.4900547 L9.44921372,13.9996373 L7.6560547,13.9996373 L6.23301435,11.8301319 Z"],"file-jpg":["M8.92767853,9.09725491 C8.66947546,9.09725491 8.49426624,9.12333335 8.40242723,9.14960786 L8.40242723,10.8784314 C8.51101555,10.9045098 8.64444557,10.9133333 8.82774716,10.9133333 C9.50336599,10.9133333 9.92059355,10.5568628 9.92059355,9.95764706 C9.92059355,9.41882354 9.56170633,9.09725491 8.92767853,9.09725491 Z M17.9240911,7.15392157 L17.4096375,7.15392157 L17.4369001,5.26340831 C17.4335792,5.12656854 17.3745612,5.03636642 17.3162929,4.96576125 L12.9016298,0.134117668 C12.8700881,0.0987377557 12.8364194,0.0714171993 12.7990637,0.0505882376 C12.775428,0.0370975708 12.7505165,0.0261898775 12.7247269,0.0180392268 C12.6763071,0.00398812736 12.6473201,0.000237631432 12.6182087,0 L3.37883111,0 C2.96348549,0 2.59146418,0.351960796 2.59146418,0.784313737 L2.59146418,7.15372549 L2.07590886,7.15372549 C1.79056009,7.15372549 1.51689845,7.27182845 1.3151264,7.48205305 C1.11335435,7.69227766 1,7.97740342 1,8.2747059 L1,14.1041177 C1,14.7231732 1.48174385,15.2249898 2.07590886,15.2250981 L2.59146418,15.2250981 L2.59146418,19.2156863 C2.59146418,19.6480392 2.96348549,20 3.37883111,20 L16.6568588,20 C17.071828,20 17.4369001,19.6480392 17.4369001,19.2156863 L17.4369001,15.2252941 L17.9240911,15.2252941 C18.5182562,15.2251859 19,14.7233693 19,14.1043137 L19,8.27490198 C19,7.97759949 18.8866457,7.69247374 18.6848736,7.48224913 C18.4831015,7.27202453 18.2094399,7.15392157 17.9240911,7.15392157 Z M3.9501901,1.3781629 L10.9062497,1.3781629 L10.9062497,5.95516576 C10.9062497,6.05917223 10.9459049,6.15891887 11.0164916,6.23246254 C11.0870783,6.30600622 11.1828144,6.34732263 11.282639,6.34732262 L16.0418654,6.34732262 L16.0418654,7.15411765 L3.9501901,7.15411765 L3.9501901,1.3781629 Z M11.1794276,9.9227451 C11.1794276,10.4960784 10.996126,10.9827451 10.6626451,11.3131373 C10.2286682,11.7388236 9.58654805,11.9298039 8.83640413,11.9298039 C8.66947546,11.9298039 8.51910794,11.9213726 8.40242723,11.9039216 L8.40242723,13.9978431 L7.23247163,13.9978431 L7.23247163,8.22000001 C7.6246693,8.1501961 8.08569562,8.09823531 8.8612458,8.09823531 C9.64507656,8.09823531 10.2038265,8.25450981 10.5794631,8.56745099 C10.9377857,8.86274511 11.1794276,9.34941178 11.1794276,9.9227451 Z M3.38784294,12.8856863 C3.56305217,12.9464706 3.78794478,12.9901961 4.03805549,12.9901961 C4.57215193,12.9901961 4.90544468,12.7378431 4.90544468,11.8256863 L4.90544468,8.14156863 L6.17293571,8.14156863 L6.17293571,11.8429412 C6.17293571,13.5111765 5.40547789,14.0931378 4.17148551,14.0931378 C3.87978379,14.0933334 3.49605487,14.0415686 3.24575597,13.9543137 L3.38784294,12.8856863 Z M3.9501901,18.6218854 L3.9501901,15.2252941 L16.0418654,15.2252941 L16.0418654,18.6218854 L3.9501901,18.6218854 Z M16.6841214,13.7284314 C16.2923002,13.867451 15.5502486,14.0586275 14.8074443,14.0586275 C13.7821598,14.0586275 13.0395436,13.7892157 12.5227611,13.2680392 C12.0056022,12.7641177 11.7218047,11.9996079 11.7304616,11.1392157 C11.7385539,9.1929412 13.097884,8.08078432 14.9410625,8.08078432 C15.6667411,8.08078432 16.2256793,8.2282353 16.5008198,8.36745099 L16.2337716,9.42745098 C15.9251324,9.28843137 15.5414035,9.17549019 14.9243132,9.17549021 C13.8653418,9.17549021 13.0649499,9.80117648 13.0649499,11.0698039 C13.0649499,12.277451 13.7902522,12.99 14.8328506,12.99 C15.1247405,12.99 15.3582901,12.9550981 15.4582214,12.9027451 L15.4582214,11.6778431 L14.5908322,11.6778431 L14.5908322,10.6439216 L16.6841214,10.6439216 L16.6841214,13.7284314 Z M12.2914114,1.51951183 L12.675625,1.95352728 L15.2564552,4.80720067 L15.3986362,4.98003873 L12.761691,4.98003873 C12.5625541,4.98003873 12.4365634,4.94696877 12.3837187,4.88082886 C12.330874,4.81468894 12.3001049,4.71017086 12.2914114,4.56727461 L12.2914114,1.51951183 Z"],"file-pdf":["M17.9240911,7.15392157 L17.4096375,7.15392157 L17.4369001,5.26340831 C17.4335792,5.12656854 17.3745612,5.03636642 17.3162929,4.96576125 L12.9016298,0.134117668 C12.8700881,0.0987377557 12.8364194,0.0714171993 12.7990637,0.0505882376 C12.775428,0.0370975708 12.7505165,0.0261898775 12.7247269,0.0180392268 C12.6763071,0.00398812736 12.6473201,0.000237631432 12.6182087,0 L3.37883111,0 C2.96348549,0 2.59146418,0.351960796 2.59146418,0.784313737 L2.59146418,7.15372549 L2.07590886,7.15372549 C1.79056009,7.15372549 1.51689845,7.27182845 1.3151264,7.48205305 C1.11335435,7.69227766 1,7.97740342 1,8.2747059 L1,14.1041177 C1,14.7231732 1.48174385,15.2249898 2.07590886,15.2250981 L2.59146418,15.2250981 L2.59146418,19.2156863 C2.59146418,19.6480392 2.96348549,20 3.37883111,20 L16.6568588,20 C17.071828,20 17.4369001,19.6480392 17.4369001,19.2156863 L17.4369001,15.2252941 L17.9240911,15.2252941 C18.5182562,15.2251859 19,14.7233693 19,14.1043137 L19,8.27490198 C19,7.97759949 18.8866457,7.69247374 18.6848736,7.48224913 C18.4831015,7.27202453 18.2094399,7.15392157 17.9240911,7.15392157 Z M3.9501901,1.3781629 L10.9062497,1.3781629 L10.9062497,5.95516576 C10.9062497,6.05917223 10.9459049,6.15891887 11.0164916,6.23246254 C11.0870783,6.30600622 11.1828144,6.34732263 11.282639,6.34732262 L16.0418654,6.34732262 L16.0418654,7.15411765 L3.9501901,7.15411765 L3.9501901,1.3781629 Z M3.9501901,18.6218854 L3.9501901,15.2252941 L16.0418654,15.2252941 L16.0418654,18.6218854 L3.9501901,18.6218854 Z M12.2914114,1.51951183 L12.675625,1.95352728 L15.2564552,4.80720067 L15.3986362,4.98003873 L12.761691,4.98003873 C12.5625541,4.98003873 12.4365634,4.94696877 12.3837187,4.88082886 C12.330874,4.81468894 12.3001049,4.71017086 12.2914114,4.56727461 L12.2914114,1.51951183 Z M3,14.2321872 L3,8.23218716 L4.91765953,8.23218716 C5.6443552,8.23218716 6.11804601,8.2622005 6.33874618,8.32222809 C6.67787082,8.41226947 6.96181616,8.60803831 7.19059073,8.9095405 C7.41936529,9.21104269 7.53375085,9.60053402 7.53375085,10.0780262 C7.53375085,10.4463773 7.46781094,10.7560604 7.33592913,11.0070848 C7.20404733,11.2581093 7.03650612,11.4552424 6.83330048,11.59849 C6.63009484,11.7417377 6.42352796,11.8365526 6.21359366,11.8829375 C5.92829832,11.9402366 5.51516458,11.9688857 4.97418002,11.9688857 L4.19500468,11.9688857 L4.19500468,14.2321872 L3,14.2321872 Z M4.19500468,9.24719398 L4.19500468,10.9497861 L4.84902751,10.9497861 C5.32003396,10.9497861 5.63493069,10.9184085 5.79372715,10.8556524 C5.95252361,10.7928963 6.07700202,10.6946708 6.16716611,10.560973 C6.2573302,10.4272752 6.30241157,10.2717515 6.30241157,10.0943973 C6.30241157,9.87611513 6.23916309,9.69603507 6.11266421,9.55415169 C5.98616533,9.41226831 5.82602554,9.32359252 5.63224003,9.28812168 C5.48959236,9.26083641 5.2029556,9.24719398 4.77232113,9.24719398 L4.19500468,9.24719398 Z M8.23514316,8.23218716 L10.4192564,8.23218716 C10.9117946,8.23218716 11.2872484,8.27038596 11.5456291,8.34678471 C11.8928281,8.45046872 12.1902306,8.6346415 12.4378454,8.89930858 C12.6854602,9.16397566 12.87386,9.48798333 13.0030503,9.87134132 C13.1322407,10.2546993 13.1968349,10.7274095 13.1968349,11.2894859 C13.1968349,11.7833492 13.1362778,12.208993 13.0151619,12.56643 C12.8671313,13.0029943 12.6558544,13.3563332 12.3813249,13.6264573 C12.1740821,13.8310968 11.8941739,13.9907132 11.5415919,14.1053113 C11.2778283,14.1898956 10.9252516,14.2321872 10.4838513,14.2321872 L8.23514316,14.2321872 L8.23514316,8.23218716 Z M9.43014784,9.24719398 L9.43014784,13.2212731 L10.3223642,13.2212731 C10.6561059,13.2212731 10.8969884,13.2021737 11.045019,13.1639743 C11.2388045,13.1148609 11.3996172,13.031642 11.5274618,12.9143154 C11.6553064,12.7969888 11.7595991,12.6039484 11.8403431,12.3351885 C11.921087,12.0664287 11.9614584,11.7001295 11.9614584,11.2362799 C11.9614584,10.7724304 11.921087,10.416363 11.8403431,10.1680671 C11.7595991,9.91977119 11.6465593,9.7260487 11.5012201,9.58689385 C11.355881,9.44773899 11.1715184,9.35360623 10.9481268,9.30449275 C10.7812559,9.26629338 10.4542478,9.24719398 9.96709251,9.24719398 L9.43014784,9.24719398 Z M13.9426361,14.2321872 L13.9426361,8.23218716 L18,8.23218716 L18,9.24719398 L15.1376408,9.24719398 L15.1376408,10.667385 L17.6083937,10.667385 L17.6083937,11.6823918 L15.1376408,11.6823918 L15.1376408,14.2321872 L13.9426361,14.2321872 Z"],"file-text":["M12.8890921,0 L17.5,5.19179195 L17.5,19.0909091 C17.5,19.5929861 17.1049571,20 16.6176471,20 L3.38235294,20 C2.89504287,20 2.5,19.5929861 2.5,19.0909091 L2.5,0.909090909 C2.5,0.407013864 2.89504287,0 3.38235294,0 L12.8890921,0 Z M12.3061651,1.36363636 L3.82352941,1.36363636 L3.82352941,18.6363636 L16.1764706,18.6363636 L16.176511,6.34246852 L13.3474204,6.34196239 C12.6417682,6.36999151 12.0962002,6.25589945 11.706457,5.94817639 C11.2531904,5.59029821 11.0867064,4.98037308 11.10865,4.16662087 L11.10865,1.36739306 L12.31,1.367 L12.3061651,1.36363636 Z M10.9239873,14.5454545 C11.2894699,14.5454545 11.585752,14.8507149 11.585752,15.2272727 C11.585752,15.6038305 11.2894699,15.9090909 10.9239873,15.9090909 L5.80882353,15.9090909 C5.44334097,15.9090909 5.14705882,15.6038305 5.14705882,15.2272727 C5.14705882,14.8507149 5.44334097,14.5454545 5.80882353,14.5454545 L10.9239873,14.5454545 Z M13.9789019,10.9090909 C14.3443845,10.9090909 14.6406667,11.2143513 14.6406667,11.5909091 C14.6406667,11.9674669 14.3443845,12.2727273 13.9789019,12.2727273 L5.80882353,12.2727273 C5.44334097,12.2727273 5.14705882,11.9674669 5.14705882,11.5909091 C5.14705882,11.2143513 5.44334097,10.9090909 5.80882353,10.9090909 L13.9789019,10.9090909 Z M10.9239873,7.27272727 C11.2894699,7.27272727 11.585752,7.57798767 11.585752,7.95454545 C11.585752,8.33110324 11.2894699,8.63636364 10.9239873,8.63636364 L5.80882353,8.63636364 C5.44334097,8.63636364 5.14705882,8.33110324 5.14705882,7.95454545 C5.14705882,7.57798767 5.44334097,7.27272727 5.80882353,7.27272727 L10.9239873,7.27272727 Z M12.384,1.45 L12.4321669,1.50876156 L12.4319299,4.18534141 C12.4202482,4.62352755 12.4794774,4.84051752 12.5115121,4.86581065 C12.6070703,4.9412589 12.8701302,4.99627139 13.3219266,4.97883216 L15.5154486,4.97883216 L15.8904383,5.40279396 L16.1764706,5.7215246 L12.384,1.45 Z"],"file-unknown":["M12.8890921,0 L17.5,5.19179195 L17.5,19.0909091 C17.5,19.5929861 17.1049571,20 16.6176471,20 L3.38235294,20 C2.89504287,20 2.5,19.5929861 2.5,19.0909091 L2.5,0.909090909 C2.5,0.407013864 2.89504287,0 3.38235294,0 L12.8890921,0 Z M12.3061651,1.36363636 L3.82352941,1.36363636 L3.82352941,18.6363636 L16.1764706,18.6363636 L16.176511,6.34246852 L13.3474204,6.34196239 C12.6417682,6.36999151 12.0962002,6.25589945 11.706457,5.94817639 C11.2531904,5.59029821 11.0867064,4.98037308 11.10865,4.16662087 L11.10865,1.36739306 L12.31,1.367 L12.3061651,1.36363636 Z M9.01509627,14.9791746 C9.40494433,14.9791746 9.72097863,15.2922622 9.72097863,15.6784753 C9.72097863,16.0646884 9.40494433,16.377776 9.01509627,16.377776 C8.62524821,16.377776 8.30921392,16.0646884 8.30921392,15.6784753 C8.30921392,15.2922622 8.62524821,14.9791746 9.01509627,14.9791746 Z M11.1827155,8.48219134 C11.7596649,9.06011092 11.9556072,9.75942613 11.8818293,10.4800176 C11.8265271,11.0201556 11.4779753,11.5509802 10.9947767,12.0505594 L10.9460794,12.1005594 L10.9460794,12.1005594 L10.8408488,12.2063462 C10.7641308,12.2825287 10.6701753,12.3741416 10.534329,12.5058727 C10.3893855,12.6464238 10.2890121,12.7442705 10.2120648,12.8206852 L10.1115703,12.9218921 C10.0821667,12.9520424 10.0559765,12.9794937 10.0303569,13.006905 C9.82641639,13.2251078 9.76260226,13.3170885 9.72854047,13.4181966 C9.69459728,13.5189526 9.64965619,13.73941 9.60228918,14.0591422 C9.54714237,14.4313887 9.20954705,14.6870941 8.84824894,14.6302762 C8.48695082,14.5734583 8.23876616,14.2256328 8.29391297,13.8533862 C8.35258575,13.4573391 8.4111532,13.1700378 8.47818729,12.9710557 C8.58800251,12.6450833 8.75186564,12.4088935 9.07699042,12.0610316 C9.20092661,11.9284281 9.31857892,11.8121689 9.62440373,11.5156121 C9.85403277,11.2929392 9.95768805,11.1909631 10.0572705,11.0880047 C10.3397662,10.7959324 10.5516497,10.4732459 10.5656029,10.3369643 C10.5996372,10.0045498 10.5199654,9.72020231 10.2601126,9.45991256 C9.9148549,9.11407421 9.49243177,8.95163821 9.06509601,8.9849994 C8.57490635,9.02326746 8.18677184,9.20493363 7.86942647,9.56406039 C7.63826622,9.82565499 7.48192741,10.1361318 7.39737772,10.5061904 C7.31363213,10.8727296 6.9573436,11.0999218 6.60158501,11.0136385 C6.24582642,10.9273551 6.02531631,10.56027 6.10906189,10.1937308 C6.24453674,9.60078215 6.50611003,9.08131772 6.89074945,8.64603703 C7.44488347,8.01894624 8.15005931,7.68888903 8.96509653,7.62526082 C9.77527949,7.56201157 10.5686439,7.86708705 11.1827155,8.48219134 Z M12.384,1.45 L12.4321669,1.50876156 L12.4319299,4.18534141 C12.4202482,4.62352755 12.4794774,4.84051752 12.5115121,4.86581065 C12.6070703,4.9412589 12.8701302,4.99627139 13.3219266,4.97883216 L15.5154486,4.97883216 L15.8904383,5.40279396 L16.1764706,5.7215246 L12.384,1.45 Z"],"filter":["M8.39758257,14.6045785 L9.72069151,15.7481409 C10.0108962,15.9989646 10.0444149,16.4394138 9.79555776,16.7319118 C9.5467006,17.0244098 9.10970466,17.0581934 8.81950001,16.8073697 L7.25478248,15.4549851 C7.10142726,15.3224403 7.01317389,15.1289858 7.01317389,14.9253707 L7.01317389,7.93828102 L1.17082654,1.15503282 C0.781803161,0.703357844 1.10011445,0 1.69354765,0 L18.3064518,0 C18.9000823,0 19.2183221,0.703763592 18.8288983,1.1553514 L12.9794764,7.93852148 L12.9794764,19.3023256 C12.9794764,19.6876405 12.6695659,20 12.287272,20 C11.9049781,20 11.5950677,19.6876405 11.5950677,19.3023256 L11.5950677,7.67770086 C11.5950677,7.50950502 11.6553535,7.34697097 11.7648255,7.22002387 L16.7876956,1.39534884 L3.21108757,1.39534884 L8.22809934,7.22034245 C8.33740066,7.34724658 8.39758257,7.50965028 8.39758257,7.67770086 L8.39758257,14.6045785 Z"],"firefox":["M19.9712023,6.67576398 L19.7396069,8.09784271 C19.7396069,8.09784271 19.4084135,5.46498739 19.0028216,4.4808247 C18.380834,2.97261737 18.1040395,2.98486677 18.1024395,2.98716354 C18.5192312,4.00041856 18.4436327,4.54475125 18.4436327,4.54475125 C18.4436327,4.54475125 17.7056474,2.61968155 15.7540863,2.00721157 C13.5921293,1.32890107 12.4225526,1.51455603 12.2877553,1.54939026 C12.2673557,1.54939026 12.2473561,1.54939026 12.2285565,1.54939026 C12.2445562,1.55053865 12.2601558,1.55206982 12.2757555,1.5532182 C12.2749556,1.553601 12.2741556,1.55398379 12.2741556,1.55436658 C12.2829554,1.56470201 14.662908,1.95247207 15.0848996,2.50752299 C15.0848996,2.50752299 14.0741197,2.50752299 13.0677398,2.78504844 C13.0221407,2.79768064 16.769266,3.23291712 17.5352508,6.81624928 C17.5352508,6.81624928 17.124459,5.9963051 16.6164691,5.85696818 C16.9504624,6.82964706 16.8648641,8.67509566 16.5464705,9.59226945 C16.5056713,9.71016992 16.4636721,9.0823882 15.8368846,8.81175303 C16.0376806,10.1882793 15.8248849,12.3717348 14.8269047,12.9731037 C14.7493063,13.0198046 15.4524923,10.817975 14.9685019,11.6693083 C12.1813574,15.7590765 8.88662303,13.5564814 7.40505253,12.5872476 C8.16423741,12.7453415 9.60540871,12.5627488 10.242996,12.1083727 C10.243796,12.1079899 10.244596,12.1072243 10.245396,12.1068415 C10.9381822,11.6536137 11.348174,11.3224971 11.7165667,11.4009699 C12.0853593,11.4798254 12.3305544,11.1257412 12.0441601,10.8114675 C11.7573659,10.4968111 11.0613797,10.0642541 10.1197985,10.3000551 C9.45581169,10.4665703 8.63302808,11.1697624 7.3766531,10.4577661 C6.41267229,9.91113664 6.3218741,9.45676047 6.31307428,9.14248681 C6.33667381,9.03109384 6.36667321,8.92697394 6.4022725,8.8316583 C6.5130703,8.53499315 6.84986359,8.44541942 7.03705986,8.37498537 C7.35465354,8.42704532 7.62824809,8.52197817 7.91544237,8.66284626 C7.9190423,8.57135856 7.92024227,8.45001295 7.91504238,8.3122072 C7.94264183,8.25976446 7.92544217,8.10205344 7.88144305,7.9087426 C7.85584355,7.71619735 7.81464438,7.51676182 7.74944567,7.33493479 C7.74984567,7.33493479 7.74984567,7.33493479 7.74984567,7.334552 C7.75104564,7.3341692 7.75184563,7.33378641 7.7530456,7.33340362 C7.75464557,7.33263803 7.75584555,7.33148965 7.75704552,7.32995847 C7.75744551,7.32957568 7.75744551,7.32919289 7.75784551,7.32881009 C7.75944547,7.32651333 7.76104544,7.32383377 7.76184543,7.32000584 C7.78184503,7.23387725 7.99664075,7.06736197 8.26423542,6.8882145 C8.50383065,6.72782393 8.78582503,6.55748071 9.00782061,6.42541687 C9.2042167,6.30866479 9.35381372,6.2221534 9.38581309,6.19918578 C9.39781285,6.19038152 9.41221256,6.18042888 9.42821224,6.16856228 C9.43101219,6.16626552 9.43421212,6.16435155 9.43701207,6.16205478 C9.43901203,6.16052361 9.440612,6.15937523 9.44261196,6.15784405 C9.54820985,6.07745737 9.70580671,5.92510546 9.73900605,5.6050899 C9.73900605,5.60432431 9.73900605,5.60355872 9.73940604,5.60279314 C9.74020603,5.59322329 9.74100601,5.58365345 9.741806,5.57408361 C9.74220599,5.56719332 9.74260598,5.56068582 9.74340597,5.55341274 C9.74380596,5.54805363 9.74420595,5.54269452 9.74420595,5.53733541 C9.74460594,5.52470321 9.74500593,5.51168823 9.74540593,5.49867324 C9.74540593,5.49790765 9.74540593,5.49714206 9.74540593,5.49637648 C9.74580592,5.46537018 9.74540593,5.43321551 9.74340597,5.39914687 C9.74220599,5.38000718 9.74100601,5.36316426 9.73740608,5.34746971 C9.73740608,5.34670413 9.73700609,5.34593854 9.73700609,5.34479016 C9.7366061,5.34325898 9.73620611,5.34172781 9.73580612,5.34019663 C9.73500613,5.33751708 9.73420615,5.33483752 9.73340616,5.33215796 C9.73340616,5.33177517 9.73340616,5.33139238 9.73300617,5.33139238 C9.7318062,5.32833003 9.73100621,5.32565047 9.72980624,5.32258812 C9.72980624,5.32258812 9.72980624,5.32258812 9.72980624,5.32220533 C9.69540692,5.24526379 9.56740947,5.21655426 9.03742002,5.20775 C9.03702003,5.20775 9.03662004,5.20775 9.03582006,5.20775 L9.03582006,5.20775 C8.81982436,5.20430486 8.53702999,5.20430486 8.16663737,5.20545324 C7.5170503,5.20813279 7.15825745,4.59795958 7.04385973,4.36177584 C7.20105659,3.53073064 7.65464756,2.93854873 8.40023271,2.5369981 C8.41423243,2.52934223 8.41143249,2.52321753 8.39503282,2.518624 C8.54062992,2.43440938 6.63226792,2.51632724 5.7546854,3.58470456 C4.97550092,3.39943239 4.29671443,3.41206458 3.71152609,3.54336284 C3.59912833,3.54030049 3.45913111,3.5269027 3.29273443,3.49398244 C2.90354218,3.15635837 2.34635327,2.53317017 2.31675386,1.78901914 C2.31675386,1.78901914 2.31515389,1.79055032 2.31195396,1.79284708 C2.31155397,1.785574 2.31075398,1.77868371 2.31035399,1.77141063 C2.31035399,1.77141063 1.12437761,2.64379756 1.30197407,5.02132945 C1.30157408,5.05922603 1.3007741,5.09597423 1.29957412,5.13119125 C0.978780508,5.54767084 0.819583678,5.89792711 0.807583917,5.97525144 C0.523189581,6.52915398 0.234795324,7.36326153 0,8.62916041 C0,8.62916041 0.164396726,8.13076297 0.493990162,7.56614221 C0.25159499,8.27699018 0.0611987813,9.38211569 0.172796559,11.0399954 C0.172796559,11.0399954 0.202395969,10.6725134 0.307193882,10.1431096 C0.388792257,11.1712936 0.74718512,12.4406376 1.6519671,13.9335332 C3.38913251,16.7991271 6.05947933,18.2464702 9.01102055,18.4681078 C9.53501012,18.5094495 10.0665995,18.5105979 10.6013889,18.471553 C10.6505879,18.4681078 10.6997869,18.4646627 10.7489859,18.4608347 C11.3537739,18.4202586 11.9625618,18.3325988 12.5701497,18.1924963 C20.8739843,16.2712546 19.9712023,6.67499839 19.9712023,6.67499839 L19.9712023,6.67576398 Z"],"folder-add":["M15.5110019,9.40874527 C15.887818,9.40874527 16.1932877,9.70802501 16.1932877,10.0772053 L16.193,13.041 L19.2249999,13.0415461 C19.6025707,13.0415461 19.9086522,13.3402276 19.9086522,13.70867 C19.9086522,14.0771123 19.6025707,14.3757939 19.2249999,14.3757939 L16.193,14.375 L16.1932877,17.3401347 C16.1932877,17.709315 15.887818,18.0085947 15.5110019,18.0085947 C15.1341859,18.0085947 14.8287162,17.709315 14.8287162,17.3401347 L14.828,14.375 L11.7970039,14.3757939 C11.4194332,14.3757939 11.1133517,14.0771123 11.1133517,13.70867 C11.1133517,13.3402276 11.4194332,13.0415461 11.7970039,13.0415461 L14.828,13.041 L14.8287162,10.0772053 C14.8287162,9.70802501 15.1341859,9.40874527 15.5110019,9.40874527 Z M1.41650275,2 L7.5327149,2.00155403 C7.9638461,2.03032018 8.31608539,2.14222025 8.58006501,2.37264052 C8.80563903,2.56953763 8.97215702,2.8336355 9.09763253,3.17830062 L9.47793206,4.34720702 C9.49167255,4.38944045 9.50088063,4.43201941 9.50582176,4.47444387 L19.3163477,4.47423658 C19.6939184,4.47423658 20,4.77291812 20,5.14136046 L20,8.72099334 C20,9.08943569 19.6939184,9.38811723 19.3163477,9.38811723 C18.938777,9.38811723 18.6326954,9.08943569 18.6326954,8.72099334 L18.6326954,5.80848435 L1.36729975,5.80848435 L1.36722509,16.1755989 C1.37051113,16.3858924 1.36904802,16.4794799 1.41650275,16.5491108 C1.45446653,16.6048155 1.48403455,16.6159564 1.56655442,16.6181846 L10.5238151,16.6187417 C10.9013858,16.6187417 11.2074674,16.9174232 11.2074674,17.2858655 C11.2074674,17.6543079 10.9013858,17.9529894 10.5238151,17.9529894 L1.57671928,17.9529894 L1.45998709,17.9431925 C0.924378516,17.8526195 0.519362812,17.6522768 0.283469092,17.2887716 C0.0936014889,16.9961914 0.00688536371,16.6314917 0,16.1857702 L0,5.137 L0.0034482218,3.31521139 C0.0390363089,2.96025413 0.158336481,2.65558388 0.378891904,2.4199532 C0.62337074,2.15876391 0.964133609,2.02910246 1.41650275,2 Z M1.46395747,3.33263865 C1.38041709,3.33831097 1.37310707,3.35684304 1.36750414,3.3801709 L1.367,4.474 L8.084,4.474 L7.80207798,3.60419595 C7.75579987,3.4775259 7.71759344,3.40539124 7.66848893,3.36709542 C7.61938441,3.3287996 7.59434188,3.34302902 7.48607865,3.33424777 L1.46395747,3.33263865 Z"],"folder-open":["M2.28207116,3.82782681 C1.93139275,3.89061436 1.7157592,4.01654323 1.59095975,4.20187553 C1.42601097,4.44683125 1.35229976,4.7111041 1.36642402,5.04312449 L1.36642402,16.7613195 L0.00219214494,15.8199344 L0.00283001003,5.07182967 C-0.0229451366,4.49213499 0.127444335,3.95295167 0.449958452,3.47400497 C0.806771203,2.94412338 1.37895412,2.62368924 2.11578248,2.50841391 L2.22403448,2.5 L5.78364338,2.50089037 C6.52617637,2.53835758 7.13918702,2.8504057 7.5673719,3.41670863 C7.95383536,3.9278322 8.03930749,4.3271066 8.05143177,5.05577361 C8.05289264,5.14357156 8.05441458,5.20651435 8.05673655,5.25714322 C8.10252727,5.25681998 8.16561873,5.2543483 8.24999125,5.24771098 L13.8860925,5.24771098 L13.9870677,5.25502564 C14.5731461,5.34040977 15.0767664,5.58357289 15.475608,5.97894537 C15.9106992,6.41025215 16.1077382,7.00704635 16.0901105,7.71349439 L16.0901105,9.51198092 L14.7258786,9.51198092 L14.7260752,7.69755466 C14.7356739,7.3085356 14.6533055,7.05905711 14.5021591,6.90922534 C14.3244518,6.73306379 14.1070169,6.62340783 13.8308199,6.57550784 L8.31495364,6.57252008 C7.46062988,6.65207335 6.81082721,6.32129645 6.71389794,5.55548458 C6.69584787,5.41287583 6.69119406,5.30657387 6.68737876,5.0772749 C6.67947407,4.60220433 6.64376562,4.43539594 6.46860999,4.203741 C6.28652585,3.96292263 6.05309487,3.84409647 5.7483285,3.82782681 L2.28207116,3.82782681 Z M18.0541929,9.33232428 C18.8851491,9.34586199 19.5133485,9.63622951 19.8235275,10.2404607 C20.1178599,10.8138226 20.0344287,11.465691 19.6446869,12.1495456 L19.5904006,12.2303314 L16.7469081,15.8558964 C16.4072818,16.3040608 16.0164881,16.6739616 15.575319,16.9622577 C15.092264,17.2779256 14.4871575,17.4527498 13.7239643,17.5 L2.01621448,17.5 C1.38335385,17.5 0.88557293,17.3585887 0.543818101,17.0226149 C0.123275488,16.6091861 -0.0449570231,16.173181 0.0125925563,15.6292076 C0.0484070969,15.2906793 0.182045605,14.9606796 0.427887186,14.6070125 L3.8727539,10.7736483 C4.41137054,10.2157011 4.89226434,9.83387624 5.33785369,9.627461 C5.74163234,9.44041419 6.22593684,9.34520596 6.78220116,9.33260234 L18.0541929,9.33232428 Z M7.01197487,10.6599374 C6.53566393,10.6510962 6.1729768,10.7111445 5.92413292,10.8264192 C5.65941708,10.9490464 5.29955756,11.2347713 4.91080662,11.632703 L1.53497688,15.3817716 C1.43257155,15.5300848 1.38107021,15.6572594 1.36964886,15.7652169 C1.35499848,15.9036961 1.37308811,15.9505786 1.51328084,16.0883999 C1.55206873,16.1265317 1.71273115,16.1721732 2.01621448,16.1721732 L13.6793641,16.1735939 C14.173415,16.1420849 14.5490628,16.0335548 14.8148728,15.8598527 C15.1225687,15.6587788 15.4003536,15.3958451 15.6557597,15.0589677 L18.4741643,11.4652437 C18.6444618,11.1539559 18.6664278,10.9572147 18.6031488,10.8339467 C18.5530343,10.7363234 18.4008596,10.6659849 18.042777,10.6600581 L7.01197487,10.6599374 Z"],"folder":["M9.56589048,5.83769509 C8.89395444,5.83769509 8.3221677,5.35594737 8.21856163,4.70252955 L7.98356971,3.22049378 C7.94903435,3.00268784 7.75843877,2.84210526 7.53446009,2.84210526 L1.81818182,2.84210526 C1.5671433,2.84210526 1.36363636,3.04239893 1.36363636,3.28947368 L1.36363636,16.7105263 C1.36363636,16.9576011 1.5671433,17.1578947 1.81818182,17.1578947 L18.1818182,17.1578947 C18.4328567,17.1578947 18.6363636,16.9576011 18.6363636,16.7105263 L18.6363636,6.28506352 C18.6363636,6.03798876 18.4328567,5.83769509 18.1818182,5.83769509 L9.56589048,5.83769509 Z M9.56589048,4.49558983 L18.1818182,4.49558983 C19.1859723,4.49558983 20,5.29676449 20,6.28506352 L20,16.7105263 C20,17.6988253 19.1859723,18.5 18.1818182,18.5 L1.81818182,18.5 C0.814027728,18.5 0,17.6988253 0,16.7105263 L0,3.28947368 C0,2.30117466 0.814027728,1.5 1.81818182,1.5 L7.53446009,1.5 C8.4303748,1.5 9.19275712,2.1423303 9.33089856,3.01355405 L9.56589048,4.49558983 Z"],"forward":["M9.0971295,8.03755188 L9.0971295,2.84790039 C9.13471211,2.50546265 9.32401021,2.28468831 9.6650238,2.18557739 C10.0060374,2.08646647 10.3434812,2.17325872 10.6773552,2.44595413 L18.762796,9.28367933 C18.985685,9.48122766 19.0971295,9.72000122 19.0971295,10 C19.0971295,10.2799988 18.985685,10.5192994 18.762796,10.717902 L10.6237488,17.6020203 C10.2899882,17.8323466 9.96312968,17.9007416 9.64317322,17.8072052 C9.32321676,17.7136688 9.14120218,17.5091349 9.0971295,17.1936035 L9.0971295,11.9564819 L2.48309625,17.5543198 C2.15246682,17.8183996 1.80385844,17.9026947 1.43727112,17.8072052 C1.0706838,17.7117157 0.892550258,17.5071818 0.902870501,17.1936035 L0.902870501,2.93100117 C0.89243836,2.60200039 1.04287211,2.36458333 1.35417175,2.21875 C1.66547139,2.07291667 2.0218455,2.13023885 2.42329407,2.39071655 L9.0971295,8.03755188 Z"],"foursquare":["M3.78633413,19.7440129 C3.35375107,20.249831 2.5,19.9557899 2.5,19.300986 L2.50112978,1.51658333 C2.53225238,0.975775261 2.73428875,0.541204054 3.15293254,0.28510109 C3.48682857,0.0808420903 3.93119814,0 4.51023056,0 L16.0961418,0 C16.6374788,-0.00205528134 17.0866187,0.187625298 17.3267207,0.6148851 C17.5138073,0.947804411 17.5430941,1.32788345 17.444885,1.70054773 L16.7972063,4.6141319 C16.6338473,5.16763859 16.3879462,5.57282257 16.008305,5.8109792 C15.6548575,6.03270396 15.1844824,6.11466032 14.5947754,6.10156018 L9.21002244,6.10156018 C9.01599512,6.10156018 8.91920891,6.12364581 8.92231449,6.12131398 C8.96827535,6.08680427 8.96992425,6.08272382 8.96811897,6.14858565 L8.96767966,7.38986145 C8.97163765,7.49915983 8.97376379,7.50467743 8.90087583,7.45400383 C8.88409816,7.44233956 9.06187448,7.47233426 9.36862703,7.47233426 L14.1183976,7.47262427 C14.7250274,7.45580456 15.2299899,7.62693888 15.5678048,8.02026184 C15.8883324,8.39345688 15.9943899,8.87063051 15.9051282,9.44245649 L15.3004458,12.2652548 C15.1761295,12.7629359 14.9380322,13.1420088 14.5483095,13.358556 C14.2447387,13.5272333 13.8718113,13.6135719 13.3914654,13.6359422 L9.53945908,13.6346509 C9.32241952,13.6219392 9.17188084,13.6368174 9.09488092,13.664714 C9.02537377,13.6898961 8.91156481,13.7706165 8.80299577,13.878046 L3.78633413,19.7440129 Z M3.95145973,17.3545581 L7.7159379,12.9548336 C7.99727755,12.6698124 8.28116578,12.4684614 8.58299126,12.3591116 C8.87732396,12.2524763 9.22322417,12.21829 9.58359442,12.2406901 L13.3549624,12.2415731 C13.5873333,12.2303236 13.7435131,12.1941655 13.8219429,12.1505865 C13.8142208,12.1548772 13.849223,12.0991506 13.8839415,11.9617581 L14.476399,9.19961961 C14.502331,9.03133517 14.4843032,8.95022444 14.4485277,8.9085706 C14.4300397,8.88704468 14.3557722,8.86187506 14.1393214,8.86758634 L9.36862703,8.86758634 C8.7736219,8.86758634 8.35603249,8.79713 8.05028103,8.58456365 C7.68841929,8.33298796 7.53508668,7.93507068 7.51666164,7.4141314 L7.51686092,6.1322382 C7.52816872,5.66849243 7.68527637,5.27970605 8.02884237,5.02173952 C8.3295531,4.79595088 8.72239622,4.70630809 9.21002244,4.70630809 L14.6113104,4.70648919 C14.9513118,4.71393776 15.1588765,4.67777249 15.2150651,4.64252419 C15.24506,4.62370777 15.3240566,4.49354114 15.3892473,4.27829505 L16.029017,1.39526334 L4.51023056,1.39526334 C4.20841018,1.39526334 4.01425994,1.42626791 3.94670624,1.45494772 C3.96409516,1.44992638 3.95689221,1.47698451 3.95147919,1.55511781 L3.95145973,17.3545581 Z"],"frown-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M10,11.3985668 C11.8365892,11.3985668 13.378445,12.7672518 13.6073722,14.5741403 C13.6547026,14.9477118 13.3902319,15.2889201 13.0166605,15.3362504 C12.6430891,15.3835808 12.3018808,15.1191101 12.2545505,14.7455387 C12.1116922,13.6179799 11.1476397,12.7622031 10,12.7622031 C8.84672907,12.7622031 7.8796076,13.626197 7.74358499,14.7606611 C7.69875667,15.134541 7.35932659,15.4012901 6.98544668,15.3564618 C6.61156677,15.3116334 6.34481775,14.9722033 6.38964607,14.5983234 C6.60761388,12.7804148 8.15440149,11.3985668 10,11.3985668 Z M5.81395349,6.27906977 C6.58458337,6.27906977 7.20930233,6.90378872 7.20930233,7.6744186 C7.20930233,8.44504849 6.58458337,9.06976744 5.81395349,9.06976744 C5.0433236,9.06976744 4.41860465,8.44504849 4.41860465,7.6744186 C4.41860465,6.90378872 5.0433236,6.27906977 5.81395349,6.27906977 Z M14.1860465,6.27906977 C14.9566764,6.27906977 15.5813953,6.90378872 15.5813953,7.6744186 C15.5813953,8.44504849 14.9566764,9.06976744 14.1860465,9.06976744 C13.4154166,9.06976744 12.7906977,8.44504849 12.7906977,7.6744186 C12.7906977,6.90378872 13.4154166,6.27906977 14.1860465,6.27906977 Z"],"frown":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,11.3985668 C8.15440149,11.3985668 6.60761388,12.7804148 6.38964607,14.5983234 C6.34481775,14.9722033 6.61156677,15.3116334 6.98544668,15.3564618 C7.35932659,15.4012901 7.69875667,15.134541 7.74358499,14.7606611 C7.8796076,13.626197 8.84672907,12.7622031 10,12.7622031 C11.1476397,12.7622031 12.1116922,13.6179799 12.2545505,14.7455387 C12.3018808,15.1191101 12.6430891,15.3835808 13.0166605,15.3362504 C13.3902319,15.2889201 13.6547026,14.9477118 13.6073722,14.5741403 C13.378445,12.7672518 11.8365892,11.3985668 10,11.3985668 Z M5.81395349,6.27906977 C5.0433236,6.27906977 4.41860465,6.90378872 4.41860465,7.6744186 C4.41860465,8.44504849 5.0433236,9.06976744 5.81395349,9.06976744 C6.58458337,9.06976744 7.20930233,8.44504849 7.20930233,7.6744186 C7.20930233,6.90378872 6.58458337,6.27906977 5.81395349,6.27906977 Z M14.1860465,6.27906977 C13.4154166,6.27906977 12.7906977,6.90378872 12.7906977,7.6744186 C12.7906977,8.44504849 13.4154166,9.06976744 14.1860465,9.06976744 C14.9566764,9.06976744 15.5813953,8.44504849 15.5813953,7.6744186 C15.5813953,6.90378872 14.9566764,6.27906977 14.1860465,6.27906977 Z"],"github-o":["M3.77324649,16.1599727 C2.9538396,15.1003527 2.70960228,14.7543857 2.52376242,14.4150835 C2.49980221,14.371138 2.49980221,14.371138 2.48410935,14.3423297 C2.43113718,14.246442 2.39586468,14.1820057 2.36165837,14.1163605 C2.30631762,14.0101561 2.26027235,13.9128404 2.22113777,13.8154284 C2.04770775,13.3837345 2.01481819,13.00321 2.29121366,12.6509984 C2.77710079,12.0318309 3.56497063,12.205559 4.22929319,12.7735293 C4.65719346,13.1393676 5.2950138,13.7941716 5.68390337,14.2597043 C5.93931908,14.5654579 6.4042211,14.8810669 6.74347846,14.9937207 C6.77898265,15.0055102 6.81254409,15.0144873 6.84450693,15.0207779 L7.02182667,14.4609828 C6.33348006,14.2186763 5.70995648,13.8970394 5.15307321,13.4957668 C3.85394485,12.5596559 2.72270671,10.7232977 2.81968456,9.32185199 C2.88094654,8.43654308 3.18012478,7.56942796 3.70928526,6.72573971 C3.66090907,6.24223326 3.63652214,5.8302691 3.63652214,5.48773387 C3.63652214,4.99908544 3.79686415,4.46764948 4.10356867,3.88489684 C4.21441945,3.67427528 4.43124722,3.53966545 4.67039537,3.53300261 C5.22160303,3.51764557 5.75478755,3.57435264 6.26826083,3.70355541 C6.72301463,3.81798289 7.20379692,4.02002146 7.71326126,4.30763211 C8.47530338,4.14961695 9.21392648,4.07026336 9.92881844,4.07026336 C10.6457657,4.07026336 11.3922214,4.1500736 12.1680099,4.30893334 C12.8303278,3.9376387 13.4119382,3.6855261 13.920135,3.5539537 C14.5809284,3.38287395 15.1737682,3.43310504 15.6630539,3.73597681 C15.7304079,3.77766947 15.7896478,3.83107898 15.8379336,3.8936449 C16.1375484,4.28186768 16.3043205,4.79703872 16.3586866,5.43213027 C16.4001442,5.9164267 16.384946,6.39745857 16.3131146,6.87418465 C16.7464532,7.52548853 17.0276786,8.35740116 17.1665465,9.36490345 C17.3929774,11.0076839 16.6420505,12.7005249 15.448915,13.6756968 C14.8928174,14.1302058 14.1286102,14.4869227 13.1551032,14.7566985 C13.2166631,14.9720082 13.2607996,15.1871546 13.2872695,15.4020165 C13.3309259,15.7563844 13.3618304,16.7062338 13.3827009,18.2910929 C14.4845468,17.7178839 15.3403742,17.1515307 15.9483903,16.5971446 C16.9826652,15.6540977 17.7631835,14.3155578 18.2710905,12.7618985 C18.6959144,11.4623858 18.7781897,10.3653942 18.5675472,9.15602706 C18.3113638,7.6851943 17.9413158,6.48718071 17.3835429,5.52452385 C16.7316059,4.39934963 15.6916829,3.33534139 14.4480453,2.55680486 C13.2573011,1.81138042 11.3278329,1.31238764 9.80781754,1.31238764 C8.21192201,1.31238764 6.42574446,1.82938873 5.07134559,2.78486209 C3.75282102,3.71502758 2.66094788,5.11420365 2.02779594,6.48820553 C1.52661598,7.57581526 1.32104903,8.73458449 1.32104903,10.4457826 C1.32104903,11.8317778 1.82480255,13.5160259 2.41896638,14.5699958 C2.88801819,15.4020331 3.55361337,16.1906406 4.53261695,17.0464423 C5.02598506,17.4777229 5.72340688,17.9089441 6.62308484,18.334848 L6.62308484,17.9122502 C5.41811241,17.6322099 4.45981889,17.047817 3.77324649,16.1599727 Z M3.41617992,13.2378724 C3.41605577,13.2348801 3.41586859,13.2319545 3.41562175,13.2290986 C3.41570678,13.2300824 3.41588866,13.2313473 3.41616931,13.232882 L3.41617992,13.2378724 Z M4.82084682,15.3604486 C5.39177508,16.0987472 6.23216551,16.5515402 7.38023625,16.7202026 C7.70419045,16.7677945 7.94413387,17.044007 7.94413387,17.3693371 L7.94413387,19.3430362 C7.94413387,19.8105299 7.46605546,20.1280771 7.0311925,19.9494262 C5.55625775,19.3434919 4.43387105,18.708245 3.65993704,18.0317061 C2.57401218,17.0824386 1.81274206,16.1804739 1.26636418,15.2112701 C0.568112243,13.9726613 0,12.0732365 0,10.4457826 C0,8.55998661 0.237734941,7.21988829 0.826628474,5.94193149 C1.5511531,4.3696419 2.78564403,2.78770889 4.30647886,1.71482172 C5.89455156,0.594500976 7.94848205,0 9.80781754,0 C11.5661799,0 13.7395906,0.562080397 15.1523319,1.44647849 C16.5760295,2.33773543 17.7679751,3.55728709 18.5284663,4.86981434 C19.1768658,5.98888327 19.5889633,7.32303014 19.869253,8.93226474 C20.116753,10.353243 20.0182872,11.6661051 19.5275392,13.167276 C18.9544059,14.9204589 18.0614439,16.4518328 16.8416616,17.5640244 C15.960189,18.3677468 14.6858767,19.1551887 13.0150895,19.9367138 C12.5793466,20.1405362 12.0776006,19.8274592 12.073217,19.3490088 C12.0535307,17.2003779 12.0195479,15.9148977 11.9760045,15.5614466 C11.9366581,15.2420639 11.8383096,14.9126654 11.6785655,14.5720565 C11.4993689,14.189971 11.7240903,13.7415379 12.1389891,13.6532777 C13.2831893,13.4098754 14.1074877,13.072614 14.6096111,12.6622191 C15.4636016,11.9642367 16.0189016,10.7124044 15.8577108,9.54294756 C15.7300982,8.61710412 15.4707628,7.91696292 15.0937734,7.43528587 C14.9762879,7.28517537 14.9301228,7.09181785 14.9672316,6.90527955 C15.0566485,6.45579953 15.0816879,6.0024186 15.0423889,5.54333747 C15.0144275,5.21669897 14.9498036,4.97050933 14.8592262,4.80108596 C14.7140275,4.75295421 14.5179023,4.75541383 14.253285,4.82392338 C13.8227912,4.93537844 13.2724845,5.18320161 12.6123972,5.56926099 C12.4674271,5.65404836 12.2953548,5.68068905 12.1312887,5.64374749 C11.3566914,5.46933708 10.6226146,5.382651 9.92881844,5.382651 C9.23566043,5.382651 8.50960159,5.46917908 7.75021122,5.64319019 C7.58217251,5.68169556 7.40563869,5.65338691 7.25832931,5.56431288 C6.76762824,5.2675991 6.32813848,5.07245267 5.94390064,4.97576878 C5.67349215,4.90772722 5.39476541,4.86576503 5.10717444,4.85002181 C5.00589453,5.10098425 4.95757117,5.3144972 4.95757117,5.48773387 C4.95757117,5.83033692 4.98718743,6.27413675 5.04703611,6.81585866 C5.06400963,6.96949483 5.0258494,7.12415234 4.93928077,7.25257441 C4.45116363,7.97668215 4.18728099,8.69424303 4.13762307,9.4118593 C4.07637565,10.2969577 4.96445665,11.7385948 5.92871323,12.4334077 C6.52345345,12.8619587 7.21962792,13.1828762 8.02132201,13.3954743 C8.38479932,13.4918634 8.59395906,13.8699359 8.48103376,14.2264389 L7.97846507,15.813039 C7.91786297,16.0043587 7.77251324,16.1576384 7.58388718,16.2291442 C7.18281778,16.3811847 6.75463459,16.3811847 6.32469104,16.2384177 C5.75230178,16.0483502 5.08022805,15.5920981 4.66732477,15.097819 C4.56625588,14.9768312 4.44415649,14.8393194 4.31274524,14.6974367 C4.4487977,14.877489 4.61513629,15.0944331 4.82084682,15.3604486 Z"],"github":["M20,10.2504514 C20,12.4838397 19.3641493,14.4925545 18.0924479,16.2765957 C16.8207465,18.060637 15.1779514,19.2952291 13.1640625,19.9803721 C12.9296875,20.0248619 12.7582465,19.9937191 12.6497396,19.8869435 C12.5412326,19.780168 12.4869791,19.6466986 12.4869792,19.4865353 L12.4869792,16.6703305 C12.4869792,15.8072283 12.2612847,15.175473 11.8098958,14.7750648 C12.3046875,14.721677 12.749566,14.6415953 13.1445312,14.5348198 C13.5394965,14.4280442 13.9474826,14.254534 14.3684896,14.0142891 C14.7894965,13.7740441 15.141059,13.4781869 15.4231771,13.1267174 C15.7052951,12.7752479 15.9353298,12.308105 16.1132812,11.7252885 C16.2912326,11.1424721 16.3802083,10.4729005 16.3802083,9.71657375 C16.3802083,8.63992043 16.0373264,7.72343042 15.3515625,6.9671037 C15.6727431,6.15738922 15.6380208,5.24979717 15.2473958,4.24432755 C15.0043403,4.1642459 14.6527778,4.21318469 14.1927083,4.39114391 C13.7326389,4.56910313 13.3333333,4.76485827 12.9947917,4.97840935 L12.5,5.29873596 C11.6927083,5.06738897 10.859375,4.95171547 10,4.95171547 C9.14062499,4.95171547 8.30729166,5.06738897 7.5,5.29873596 C7.36111111,5.20085839 7.1766493,5.08073592 6.94661458,4.93836854 C6.71657986,4.79600116 6.35416667,4.62471541 5.85937499,4.42451127 C5.36458332,4.22430714 4.99131943,4.1642459 4.73958333,4.24432755 C4.35763889,5.24979719 4.32725695,6.15738923 4.6484375,6.9671037 C3.96267361,7.72343042 3.61979167,8.63992043 3.61979167,9.71657375 C3.61979167,10.4729005 3.70876737,11.1402476 3.88671876,11.7186151 C4.06467015,12.2969825 4.29253473,12.7641255 4.57031251,13.120044 C4.84809028,13.4759624 5.19748264,13.7740441 5.61848959,14.0142891 C6.03949654,14.254534 6.44748265,14.4280443 6.84244791,14.5348198 C7.23741317,14.6415953 7.68229165,14.721677 8.17708333,14.7750648 C7.82986111,15.0953914 7.6171875,15.5536364 7.5390625,16.1497998 C7.35677083,16.2387794 7.16145833,16.3055141 6.95312499,16.3500039 C6.74479166,16.3944937 6.49739583,16.4167386 6.21093751,16.4167386 C5.92447919,16.4167386 5.64019099,16.3210856 5.35807291,16.1297794 C5.07595483,15.9384732 4.83506942,15.6604119 4.63541668,15.2955955 C4.47048612,15.0108607 4.25998265,14.7795137 4.00390626,14.6015545 C3.74782986,14.4235953 3.53298612,14.3168197 3.35937501,14.2812279 L3.09895833,14.2411871 C2.91666667,14.2411871 2.79079861,14.2612075 2.72135418,14.3012483 C2.65190974,14.3412891 2.63020835,14.3924524 2.65625001,14.4547382 C2.68229166,14.5170239 2.72135416,14.5793096 2.77343751,14.6415953 C2.82552085,14.7038811 2.88194446,14.7572688 2.94270833,14.8017586 L3.03385416,14.8684934 C3.22482639,14.957473 3.41362848,15.1265342 3.60026042,15.3756771 C3.78689236,15.62482 3.92361111,15.8517181 4.01041667,16.0563712 L4.14062501,16.3633509 C4.25347222,16.7014734 4.44444444,16.9750857 4.71354167,17.1841878 C4.98263889,17.3932899 5.2734375,17.5267593 5.58593749,17.584596 C5.89843749,17.6424328 6.20008679,17.6735757 6.49088542,17.6780246 C6.78168404,17.6824736 7.02256946,17.6669022 7.21354167,17.6313103 L7.51302084,17.5779226 C7.51302084,17.9160451 7.51519097,18.3120044 7.51953125,18.7658004 C7.52387152,19.2195964 7.52604166,19.4598414 7.52604166,19.4865353 C7.52604166,19.6466986 7.46961805,19.780168 7.35677083,19.8869435 C7.24392362,19.9937191 7.07031251,20.024862 6.8359375,19.9803721 C4.8220486,19.2952291 3.17925347,18.060637 1.90755209,16.2765957 C0.635850712,14.4925545 0,12.4838397 0,10.2504514 C0,8.39077752 0.447048612,6.67569548 1.34114584,5.10520531 C2.23524306,3.53471514 3.4483507,2.29122504 4.98046876,1.37473503 C6.51258682,0.458245009 8.1857639,0 10,0 C11.8142361,0 13.4874132,0.458245009 15.0195312,1.37473503 C16.5516493,2.29122504 17.7647569,3.53471514 18.6588542,5.10520531 C19.5529514,6.67569548 20,8.39077752 20,10.2504514 Z"],"global":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M12.0484173,3.48837209 C12.6943954,3.73316368 13.2935211,4.07289922 13.830321,4.49688876 C13.8375175,4.49955698 13.8439329,4.5035935 13.8504647,4.51161526 C13.9752161,4.60791044 14.0954634,4.70955914 14.2130514,4.81924671 C14.2345081,4.83797551 14.2540701,4.85802133 14.2748787,4.87810136 C14.602995,5.18169627 14.9006466,5.52280013 15.165789,5.88928623 C15.2021706,5.94011912 15.2412115,5.98689841 15.2749672,6.03641431 C15.3393207,6.13004127 15.3990537,6.22770477 15.4589031,6.32528274 C15.5063373,6.40290041 15.5538046,6.48180089 15.5979479,6.56205257 C15.6486063,6.65164299 15.6973867,6.74131895 15.7441726,6.8349117 C15.7968255,6.93657751 15.8449244,7.04493097 15.8929568,7.150582 C15.9261308,7.22412893 15.9625124,7.29902709 15.9930438,7.37664476 C16.0658404,7.55854515 16.1314404,7.74181386 16.1899602,7.92906779 C16.2088574,7.99055645 16.2237823,8.05746707 16.2419482,8.11895573 C16.2816373,8.25943039 16.3180356,8.40389025 16.3479021,8.5443478 C16.3641567,8.61787764 16.3777853,8.69142458 16.3913806,8.76497151 C16.4173746,8.91350212 16.4388314,9.05661077 16.4570804,9.20640707 C16.4641772,9.27196648 16.4739831,9.3415282 16.4791852,9.40700207 C16.499329,9.62237488 16.5116279,9.83909889 16.5116279,10.0570886 C16.5116279,10.2710931 16.4993456,10.4851147 16.4804318,10.6964851 C16.4740163,10.7619761 16.4661716,10.8328719 16.4577451,10.8970801 C16.4414906,11.04154 16.4200339,11.1859999 16.3947046,11.3264574 C16.3810096,11.4000044 16.3693588,11.4735513 16.3544338,11.5444642 C16.3147282,11.7344377 16.268607,11.9203404 16.2146412,12.1048748 C15.7064613,11.8708245 15.1079339,11.5284207 14.9519532,11.1511763 C14.6679967,10.4704224 13.9121755,10.1306526 13.6042029,9.25457176 C13.0966047,7.80467086 13.7699065,7.84347969 13.8647248,6.94328227 C13.908303,6.52062683 13.6042029,6.43365329 13.2025752,6.60486372 C12.2674219,6.9981346 11.9502915,6.84697 11.7611534,6.14206535 C11.5719986,5.43851191 11.7611534,5.24323625 11.7611534,5.24323625 C11.12302,5.31278086 11.0989207,4.53568049 11.4297462,4.34040482 C11.6604016,4.20796902 11.8554067,3.80270829 12.0484173,3.48837209 Z M9.37419054,7.79658069 C9.96429148,7.52779229 10.5088696,7.4301288 10.4374027,6.96601342 C10.3665008,6.50716604 10.2008138,6.16479649 9.27928909,6.16479649 C8.35718264,6.16479649 8.75939198,7.4301288 8.00298911,6.67574247 C7.24716795,5.92535846 8.16802789,6.11931713 8.54623763,5.9481067 C8.92453048,5.77554505 9.30272358,5.07067462 8.64113908,5.02115872 C7.97955458,4.97436234 8.12125859,5.31274668 7.60136146,5.12013922 C7.08148097,4.92486355 6.84495861,5.7996103 6.51346829,5.67791578 C6.29511184,5.5963129 5.7096147,5.14557278 5.32168214,4.70282022 C4.53986696,5.37962308 3.90947863,6.23964335 3.48837209,7.21210492 C3.60085774,8.52019708 4.29230877,9.20637291 4.29230877,9.20637291 C4.29230877,9.20637291 4.64706737,10.0570544 6.77473816,11.10308 C6.77473816,11.10308 7.17570097,11.1270939 6.70327121,10.6415986 C6.23082482,10.154735 5.71027952,9.54744255 6.30096215,9.23178937 C6.89174452,8.91348506 7.05811294,8.94025273 7.1997172,9.52469432 C7.34142121,10.1092385 7.81451581,9.76555194 7.86131834,9.20640707 C7.90876907,8.64863051 8.78284309,8.06545461 9.37419054,7.79658069 Z M8.92451384,10.7379451 C9.94152175,10.7379451 9.8466203,11.0535983 10.650557,11.7624539 C11.4544106,12.4660416 11.0287501,13.170912 10.626441,13.7073257 C10.2248799,14.2409857 9.87003816,14.8469099 9.68090006,15.9449828 C9.49184506,17.0391217 8.99529936,16.2593703 8.83026056,15.9918475 C8.66522176,15.7229736 8.4046167,15.4808674 8.47673184,14.3613119 C8.54622099,13.244476 7.78981814,13.9025501 7.5305427,12.4419421 C7.27060244,10.9840537 7.90875244,10.7379451 8.92451384,10.7379451 Z M13.9005248,11.7009653 C14.1721158,11.5284036 14.8213183,11.9791951 14.6803622,12.4539833 C14.5380266,12.9288057 14.0895798,12.661283 13.8647082,12.4539833 C13.6399197,12.2480519 13.6282025,11.8708245 13.9005248,11.7009653 Z"],"heart-off":["M13.6816069,1.68151414 C15.6886881,1.20225236 17.3492986,1.70793555 18.5305552,2.77637221 C19.5626391,3.70988338 20.1587415,5.33450059 19.9630126,7.16572033 C19.8161255,8.53998089 19.0697083,9.93491864 17.720706,11.386568 L10.4473397,18.3091773 C10.1789774,18.5645979 9.75131756,18.5634627 9.48437469,18.306621 L2.26602773,11.360285 C1.19796664,10.2267143 0.516216376,9.15006254 0.232531945,8.11775634 C-0.179041108,6.62007311 -0.0389102525,5.1069236 0.610402012,3.87469373 C1.38014048,2.41392548 2.91616709,1.54639939 5.14169869,1.54639939 C6.66436262,1.54639939 8.26181311,2.29873453 9.94732517,3.76705682 C11.0946237,2.70056091 12.3405404,2.00174132 13.6816069,1.68151414 Z M9.96986805,16.8832036 L16.7307562,10.4500428 C17.8683506,9.22426481 18.4802442,8.08073063 18.593038,7.02544401 C18.7443646,5.60964799 18.3027389,4.40604174 17.5956909,3.76652276 C16.7370508,2.98989 15.5402429,2.62544232 14.0080827,2.99129989 C12.7513412,3.29139148 11.5737369,4.01053975 10.4701027,5.16500603 C10.2073896,5.43981945 9.76565601,5.45085998 9.4889549,5.1895285 C7.85204028,3.64353785 6.39709722,2.89460061 5.14169869,2.89460061 C3.41950102,2.89460061 2.36199017,3.49186778 1.83462163,4.49267941 C1.34644218,5.41912009 1.23828402,6.58702475 1.56270689,7.76757505 C1.78126554,8.56289346 2.34931983,9.45999126 3.25514439,10.4225684 L9.96986805,16.8832036 Z"],"heart-on":["M13.6705038,1.65775755 C15.7733256,1.1643364 17.8346764,1.87952015 18.8050117,3.09161872 C19.7007318,4.21051134 20.1078092,5.37372498 19.9755956,7.08978592 C19.8803055,8.32659959 19.4754445,9.24351338 18.6768484,10.253173 C18.5296466,10.4392792 18.3687155,10.6302896 18.1658464,10.862046 C18.0465566,10.9983221 17.5949329,11.5061955 17.6178177,11.4803526 C16.8186802,12.3827879 14.4625844,14.643494 10.5145935,18.299202 C10.224182,18.5681134 9.76777894,18.5667637 9.47905081,18.2961397 C6.089961,15.1195561 3.89625857,13.0278592 2.89042367,12.0135158 C1.03250481,10.1398805 0.326468943,9.0511668 0.0698691381,7.29291272 C-0.198560664,5.45359801 0.31465113,3.94412412 1.46841698,2.77151837 C2.55037542,1.67189257 4.4852998,1.26441086 6.39590277,1.65285729 C7.51456274,1.88029307 8.70597506,2.61194275 9.99645377,3.83297717 C11.0971959,2.70423085 12.323284,1.97387885 13.6705038,1.65775755 Z"],"home":["M18.1780455,11.3733043 C18.5648068,11.3733043 18.8783387,11.6865112 18.8783387,12.0728715 L18.8779659,17.9472709 C18.9045058,18.7594781 18.8070167,19.291671 18.4437066,19.6266035 C18.105756,19.9381573 17.6163877,20.02774 16.9806726,19.9929477 L3.14358762,19.9921612 C2.50135353,19.9617139 2.00101685,19.6995595 1.76807877,19.1740143 C1.61416876,18.826769 1.54233858,18.4172981 1.54233858,17.9457519 L1.54233858,12.0728715 C1.54233858,11.6865112 1.85587053,11.3733043 2.2426318,11.3733043 C2.62939306,11.3733043 2.94292502,11.6865112 2.94292502,12.0728715 L2.94292502,17.9457519 C2.94292502,18.1775916 2.96768644,18.3651131 3.01196148,18.5083933 L3.048,18.606 L3.04520125,18.5951633 C3.04625563,18.5832362 3.07436346,18.5883277 3.17678453,18.5938132 L17.0178944,18.5948021 C17.2619058,18.6077766 17.4181773,18.5935806 17.4731456,18.5929701 L17.477,18.592 C17.4642876,18.5389055 17.4889447,18.3217509 17.4777523,17.9700942 L17.4777523,12.0728715 C17.4777523,11.6865112 17.7912843,11.3733043 18.1780455,11.3733043 Z M10.4342636,0 C10.6979883,0 10.9335521,0.103647698 11.156261,0.297113339 L19.7806041,8.43584529 C20.0617527,8.70116319 20.0743627,9.14392549 19.8087695,9.42478257 C19.5431762,9.70563964 19.0999544,9.71823663 18.8188059,9.45291873 L10.4018236,1.50898373 L1.15769646,9.47411857 C0.864827408,9.72646706 0.422628974,9.69386478 0.170018608,9.40129935 C-0.082591757,9.10873393 -0.049955647,8.66699392 0.2429134,8.41464544 L9.6885128,0.275913491 L9.77478626,0.212395396 C9.98943808,0.0783954693 10.2025363,0 10.4342636,0 Z"],"html5":["M1.5,0 L3.04714276,18.0004515 L9.98955417,20 L16.9514064,17.9980435 L18.5,0.000301000828 L1.5,0.000301000828 L1.5,0 Z M15.2728204,4.27180375 L15.1759063,5.39092483 L15.1332525,5.88697419 L15.1265788,5.88697419 L10,5.88697419 L9.99274595,5.88697419 L6.98928108,5.88697419 L7.18368949,8.14779141 L9.99245579,8.14779141 L10,8.14779141 L14.3660647,8.14779141 L14.9397146,8.14779141 L14.8877757,8.74076304 L14.3875367,14.55339 L14.3556189,14.926029 L10,16.1781925 L9.9901345,16.1815035 L5.6307435,14.926029 L5.33274732,11.4594025 L6.31726633,11.4594025 L7.46891855,11.4594025 L7.62038301,13.2205584 L9.99042466,13.8842652 L9.99245579,13.8836632 L9.99245579,13.8833622 L12.3662695,13.2187524 L12.6131972,10.3556325 L10,10.3556325 L9.99274595,10.3556325 L5.23728409,10.3556325 L4.71441251,4.27180375 L4.66363419,3.67913312 L9.99274595,3.67913312 L10,3.67913312 L15.3238889,3.67913312 L15.2728204,4.27180375 L15.2728204,4.27180375 Z"],"ie":["M20,10.4661818 C20,10.864 19.9778571,11.2618182 19.9221429,11.648 L7.07642857,11.648 C7.07642857,13.9090909 9.02928572,15.5454545 11.1721429,15.5454545 C12.6228571,15.5454545 14.0178571,14.8181818 14.7657143,13.5338182 L19.4864286,13.5338182 C18.2101463,17.1822691 14.8195172,19.6203177 11.0157143,19.6247273 C9.64285713,19.6247273 8.27,19.2952727 7.04214285,18.6814545 C5.79214285,19.3294545 4.04,20 2.645,20 C0.77,20 0,18.8298182 0,17.0116364 C0,15.9549091 0.223571426,14.8981818 0.502142852,13.8865454 C0.680714277,13.2276364 1.395,11.8865454 1.71857143,11.2843636 C3.09142857,8.75054546 4.8992857,6.31854546 7.02,4.39781819 C5.31214285,5.14763637 3.46,7.03418183 2.25428572,8.42036363 C3.19263107,4.26347792 6.82661309,1.31755167 11.0157143,1.31781819 C11.1828571,1.31781819 11.3507143,1.31781819 11.5178571,1.32945456 C12.9014286,0.681454554 14.8328571,0 16.3507143,0 C18.1585714,0 19.71,0.704727267 19.71,2.78400001 C19.71,3.8749091 19.2971429,5.05672727 18.8728571,6.03418182 C19.6106616,7.39067988 19.998469,8.91556431 20,10.4661818 Z M19.2185714,3.19345455 C19.2185714,1.92072728 18.3257143,1.13672728 17.0978571,1.13672728 C16.16,1.13672728 15.1,1.5229091 14.2628571,1.93236364 C16.0797284,2.65781863 17.6181229,3.96095501 18.6492857,5.64799999 C18.9285714,4.89818181 19.2185714,3.98909089 19.2185714,3.19345455 Z M1.42857143,17.2501818 C1.42857143,18.5687273 2.19857143,19.2843636 3.47071428,19.2843636 C4.4642857,19.2843636 5.5692857,18.8298182 6.43928572,18.3410909 C4.61042927,17.2419252 3.22275532,15.5190784 2.52214285,13.4778182 C2.00857143,14.5687273 1.42857143,16.0232727 1.42857143,17.2501818 Z M7.05357143,9.14763637 L15.1785714,9.14763637 C15.1007143,6.95418182 13.2028571,5.37527273 11.1157143,5.37527273 C9.01714285,5.37527273 7.13142855,6.9549091 7.05285715,9.14763637 L7.05357143,9.14763637 Z"],"inbox":["M16.1572357,0 C16.5350743,0 16.9985025,0.371970594 17.1923315,0.830819576 L17.1923315,0.830819576 L20,7.43797813 L20,18 C20,19.1045695 19.1045695,20 18,20 L2,20 C0.8954305,20 0,19.1045695 0,18 L0,7.43797813 L2.80766845,0.830819576 C3.00149751,0.371970594 3.46492571,0 3.84276431,0 L3.84276431,0 Z M6.74147814,8.83797813 L1.4,8.83797813 L1.4,18 C1.4,18.3313708 1.66862915,18.6 2,18.6 L18,18.6 C18.3313708,18.6 18.6,18.3313708 18.6,18 L18.6,8.83797813 L14.2585219,8.83797813 C13.8018503,10.4846378 12.2920812,11.6933602 10.5,11.6933602 C8.70791875,11.6933602 7.19814975,10.4846378 6.74147814,8.83797813 Z M15.9129821,1.4 L4.08701795,1.4 L1.51978526,7.43797813 L8.02506622,7.43797813 C8.00854619,7.55406117 8,7.67271263 8,7.79336016 C8,9.17407203 9.11928813,10.2933602 10.5,10.2933602 C11.8807119,10.2933602 13,9.17407203 13,7.79336016 C13,7.67271263 12.9914538,7.55406117 12.9749338,7.43797813 L18.4802147,7.43797813 L15.9129821,1.4 Z"],"information-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M9.85480657,7.20930233 C10.2401215,7.20930233 10.552481,7.5216618 10.552481,7.90697674 L10.552481,15.4651343 C10.552481,15.8504492 10.2401215,16.1628087 9.85480657,16.1628087 C9.46949163,16.1628087 9.15713216,15.8504492 9.15713216,15.4651343 L9.15713216,7.90697674 C9.15713216,7.5216618 9.46949163,7.20930233 9.85480657,7.20930233 Z M9.88290177,4.41860465 C10.396655,4.41860465 10.8131343,4.83508395 10.8131343,5.34883721 C10.8131343,5.86259046 10.396655,6.27906977 9.88290177,6.27906977 C9.36914851,6.27906977 8.95266921,5.86259046 8.95266921,5.34883721 C8.95266921,4.83508395 9.36914851,4.41860465 9.88290177,4.41860465 Z"],"information":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M9.85480657,7.20930233 C9.46949163,7.20930233 9.15713216,7.5216618 9.15713216,7.90697674 L9.15713216,7.90697674 L9.15713216,15.4651343 C9.15713216,15.8504492 9.46949163,16.1628087 9.85480657,16.1628087 C10.2401215,16.1628087 10.552481,15.8504492 10.552481,15.4651343 L10.552481,15.4651343 L10.552481,7.90697674 C10.552481,7.5216618 10.2401215,7.20930233 9.85480657,7.20930233 Z M9.88290177,4.41860465 C9.36914851,4.41860465 8.95266921,4.83508395 8.95266921,5.34883721 C8.95266921,5.86259046 9.36914851,6.27906977 9.88290177,6.27906977 C10.396655,6.27906977 10.8131343,5.86259046 10.8131343,5.34883721 C10.8131343,4.83508395 10.396655,4.41860465 9.88290177,4.41860465 Z"],"laptop":["M1.36363636,2.34936676 L1.36363636,13.1443009 L18.6363636,13.1443009 L18.6363636,2.34936676 L1.36363636,2.34936676 Z M19.0909091,1 C19.5929861,1 20,1.40275472 20,1.89957784 L20,13.5940898 C20,14.0909129 19.5929861,14.4936676 19.0909091,14.4936676 L10.56,14.493 L10.56,17.65 L13.9973724,17.6506332 C14.3739302,17.6506332 14.6791906,17.9526993 14.6791906,18.3253166 C14.6791906,18.697934 14.3739302,19 13.9973724,19 L5.98120994,19 C5.60465216,19 5.29939176,18.697934 5.29939176,18.3253166 C5.29939176,17.9526993 5.60465216,17.6506332 5.98120994,17.6506332 L9.197,17.65 L9.197,14.493 L0.909090909,14.4936676 C0.407013864,14.4936676 0,14.0909129 0,13.5940898 L0,1.89957784 C0,1.40275472 0.407013864,1 0.909090909,1 L19.0909091,1 Z"],"left-circle-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M10.7879967,5.64577005 C11.0507993,5.37608399 11.4824666,5.37050382 11.7521527,5.6333064 C12.0218388,5.89610897 12.0274189,6.3277763 11.7646163,6.59746236 L11.7646163,6.59746236 L8.36270656,10.088477 L11.7599651,13.5075477 C12.0253782,13.7746649 12.0239968,14.2063661 11.7568796,14.4717792 C11.4897623,14.7371924 11.0580611,14.735811 10.792648,14.4686937 L10.792648,14.4686937 L6.92250445,10.5737019 C6.66011276,10.3096256 6.65804237,9.88389868 6.91785319,9.61728273 L6.91785319,9.61728273 Z"],"left-circle":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10.7879967,5.64577005 L6.91785319,9.61728273 C6.65804237,9.88389868 6.66011276,10.3096256 6.92250445,10.5737019 L10.792648,14.4686937 C11.0580611,14.735811 11.4897623,14.7371924 11.7568796,14.4717792 C12.0239968,14.2063661 12.0253782,13.7746649 11.7599651,13.5075477 L8.36270656,10.088477 L11.7646163,6.59746236 C12.0274189,6.3277763 12.0218388,5.89610897 11.7521527,5.6333064 C11.4824666,5.37050382 11.0507993,5.37608399 10.7879967,5.64577005 Z"],"left-square-o":["M1.81818182,1.36363636 C1.5671433,1.36363636 1.36363636,1.5671433 1.36363636,1.81818182 L1.36363636,18.1818182 C1.36363636,18.4328567 1.5671433,18.6363636 1.81818182,18.6363636 L18.1818182,18.6363636 C18.4328567,18.6363636 18.6363636,18.4328567 18.6363636,18.1818182 L18.6363636,1.81818182 C18.6363636,1.5671433 18.4328567,1.36363636 18.1818182,1.36363636 L1.81818182,1.36363636 Z M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M10.7879967,5.62671923 L6.91785319,9.59823192 C6.65804237,9.86484786 6.66011276,10.2905747 6.92250445,10.5546511 L10.792648,14.4496429 C11.0580611,14.7167602 11.4897623,14.7181416 11.7568796,14.4527284 C12.0239968,14.1873153 12.0253782,13.7556141 11.7599651,13.4884968 L8.36270656,10.0694262 L11.7646163,6.57841155 C12.0274189,6.30872549 12.0218388,5.87705816 11.7521527,5.61425558 C11.4824666,5.35145301 11.0507993,5.35703317 10.7879967,5.62671923 Z"],"left-square":["M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M10.7879967,5.62671923 L6.91785319,9.59823192 C6.65804237,9.86484786 6.66011276,10.2905747 6.92250445,10.5546511 L10.792648,14.4496429 C11.0580611,14.7167602 11.4897623,14.7181416 11.7568796,14.4527284 C12.0239968,14.1873153 12.0253782,13.7556141 11.7599651,13.4884968 L8.36270656,10.0694262 L11.7646163,6.57841155 C12.0274189,6.30872549 12.0218388,5.87705816 11.7521527,5.61425558 C11.4824666,5.35145301 11.0507993,5.35703317 10.7879967,5.62671923 Z"],"left":["M7.22165154,9.89744874 C9.52208535,7.58981934 11.7700755,5.33826192 13.9656219,3.14277649 C14.1209717,2.97988892 14.2765198,2.59362793 13.9656219,2.24739075 C13.6547241,1.90115356 13.1625366,1.93119812 12.9394989,2.16644287 C10.6628164,4.4490153 8.2816569,6.83439128 5.79602051,9.3225708 C5.5986735,9.48506673 5.5,9.67669271 5.5,9.89744874 C5.5,10.1182048 5.5986735,10.315327 5.79602051,10.4888153 C8.60631704,13.2334646 11.1006865,15.6689637 13.2791289,17.7953128 C13.4962463,18 13.9656219,18.1251984 14.3231659,17.7660828 C14.6807098,17.4069672 14.5432434,17.0530853 14.3809204,16.8845825 C12.3062744,14.866628 9.91985146,12.5375834 7.22165154,9.89744874 Z"],"like-o":["M1.36086471,9.49461632 L1.36086471,16.6522169 L4.38924934,16.6522169 L4.54295141,16.669915 C7.35632613,17.3264467 9.219553,17.7987199 10.1492205,18.0919596 C11.3826979,18.4810282 11.8431033,18.575637 12.6802647,18.6322585 C13.3063982,18.674607 14.0169996,18.4335226 14.3413428,18.103732 C14.5196863,17.9223933 14.6542622,17.5483534 14.7069375,16.9681973 C14.7294857,16.7198551 14.8853604,16.5037105 15.1133359,16.4046624 C15.3618479,16.2966919 15.5685557,16.1212587 15.7419902,15.865589 C15.9011699,15.6309331 16.0058214,15.1954671 16.0246237,14.5640487 C16.0316554,14.3279089 16.1600195,14.1122725 16.363849,13.9941906 C16.9457511,13.6570847 17.2347296,13.2769776 17.2943246,12.8312056 C17.3602481,12.338096 17.1995661,11.7826785 16.7806277,11.1512656 C16.5760317,10.8429039 16.6543442,10.4269441 16.9569335,10.21481 C17.3582156,9.93348616 17.5779653,9.5409083 17.6332748,8.9851434 C17.7214317,8.09931968 17.156275,7.44351055 15.8773623,7.31252406 C14.7624423,7.19833374 13.6323013,7.29247162 12.4832786,7.59641559 C11.9250699,7.74407516 11.4496765,7.16931529 11.6968787,6.64564266 C12.1963307,5.58760445 12.4752151,4.71453762 12.5396762,4.03901467 C12.6253087,3.14162377 12.4181163,2.49152051 11.9338786,1.95581546 C11.5672119,1.55017735 10.9799973,1.31763269 10.7600333,1.36531558 C10.4696082,1.42827276 10.281031,1.59684713 10.0352097,2.18427466 C9.88970681,2.53197598 9.81997894,2.8282418 9.69972942,3.51866179 C9.58547121,4.17468235 9.52195796,4.4707247 9.39107836,4.85968417 C8.99574015,6.03458495 8.02731995,7.25370081 6.7256191,8.09546562 C5.82090012,8.68051601 4.84158756,9.13691545 3.78933455,9.46424884 C3.7242644,9.48449077 3.65652971,9.49478472 3.58840697,9.49478472 L1.36086471,9.49461632 Z M1.31780294,18.0148644 C0.99539565,18.0236275 0.704687342,17.9522771 0.46234885,17.7821144 C0.152432695,17.5645007 0.00594373202,17.2231922 0.00323506505,16.8290895 L0.00584690603,9.50610364 C-0.0283631088,9.11574509 0.0873204717,8.75762347 0.358889377,8.49174573 C0.613590006,8.24238276 0.946645163,8.12370393 1.29943013,8.13188763 L3.48409667,8.13188763 C4.38260664,7.84342441 5.21754484,7.44949057 5.99039908,6.94971253 C7.03799965,6.27226556 7.80960035,5.30092001 8.10483191,4.42352493 C8.20639643,4.12168658 8.25987737,3.87240596 8.36237135,3.28393051 C8.49972371,2.49531346 8.5861607,2.1280525 8.78352472,1.65642103 C9.19468034,0.673901842 9.73158636,0.193946916 10.4734676,0.0331248912 C11.2036464,-0.12516034 12.2666223,0.295791979 12.9392897,1.03995414 C13.684139,1.86397017 14.0127105,2.89492167 13.8911352,4.16897582 C13.838872,4.71667099 13.6870452,5.3301477 13.4372676,6.01270565 C14.3022674,5.8881032 15.1619273,5.86927699 16.0151615,5.95666541 C18.0222793,6.1622348 19.148549,7.46916076 18.9841955,9.12062866 C18.913311,9.83289448 18.6548581,10.4377417 18.2162102,10.9127663 C18.5848501,11.624358 18.7315959,12.3266504 18.6399064,13.01249 C18.5342981,13.8024424 18.0938139,14.4606697 17.3615933,14.9717849 C17.3050365,15.6649876 17.1457321,16.2176207 16.8641529,16.6327126 C16.6297511,16.9782578 16.3448812,17.2576621 16.0130466,17.4656797 C15.9050245,18.1502334 15.6776602,18.6848483 15.3074649,19.061261 C14.6921032,19.6869577 13.5926808,20.0599567 12.589001,19.9920727 C11.6364602,19.9276476 11.0723519,19.8117289 9.74225286,19.3921834 C8.86450134,19.1153193 7.04881088,18.6545996 4.31132055,18.0151077 L1.31780294,18.0148644 Z M3.01948917,9.18352286 C3.01948917,8.80716922 3.32340849,8.50207431 3.69831198,8.50207431 C4.07321546,8.50207431 4.37713478,8.80716922 4.37713478,9.18352286 L4.37713478,16.8619216 C4.37713478,17.2382753 4.07321546,17.5433702 3.69831198,17.5433702 C3.32340849,17.5433702 3.01948917,17.2382753 3.01948917,16.8619216 L3.01948917,9.18352286 Z"],"link":["M6.59804826,7.76149392 C6.90616283,8.06960849 6.90616283,8.56916093 6.59804826,8.8772755 L2.54069262,12.9331788 C1.87296517,13.6727821 1.56444289,14.4019051 1.57841505,15.1440008 C1.59723844,16.1437577 1.85468729,16.6985999 2.4501459,17.3745282 C2.95917162,17.952343 3.6543161,18.3330732 4.60581458,18.4129995 C5.28782629,18.4702887 5.99357124,18.2533909 6.74184089,17.7353468 L11.0989802,13.3782075 C11.4070948,13.0700929 11.9066472,13.0700929 12.2147618,13.3782075 C12.5228764,13.6863221 12.5228764,14.1858745 12.2147618,14.4939891 L7.80898462,18.8997663 L7.70756705,18.9853943 C6.6518052,19.7342877 5.56714438,20.0772623 4.47373102,19.9854151 C3.09518201,19.8696165 2.03254848,19.2876128 1.26611263,18.4176016 C0.442202079,17.4823488 0.0273757905,16.5883337 0.000741207668,15.1737052 C-0.0212740733,14.0044192 0.447199708,12.8972868 1.39718143,11.8465792 L5.48226667,7.76149392 C5.79038125,7.45337934 6.28993368,7.45337934 6.59804826,7.76149392 Z M15.1737052,0.000741207669 C16.5883337,0.0273757905 17.4823488,0.442202079 18.4176016,1.26611263 C19.2876128,2.03254848 19.8696165,3.09518201 19.9854151,4.47373102 C20.0772623,5.56714438 19.7342877,6.6518052 18.9853943,7.70756705 L18.9853943,7.70756705 L18.8997663,7.80898462 L14.4939891,12.2147618 C14.1858745,12.5228764 13.6863221,12.5228764 13.3782075,12.2147618 C13.0700929,11.9066472 13.0700929,11.4070948 13.3782075,11.0989802 L13.3782075,11.0989802 L17.7353468,6.74184089 C18.2533909,5.99357124 18.4702887,5.28782629 18.4129995,4.60581458 C18.3330732,3.6543161 17.952343,2.95917162 17.3745282,2.4501459 C16.6985999,1.85468729 16.1437577,1.59723844 15.1440008,1.57841505 C14.4019051,1.56444289 13.6727821,1.87296517 12.9331788,2.54069262 L12.9331788,2.54069262 L8.8772755,6.59804826 C8.56916093,6.90616283 8.06960849,6.90616283 7.76149392,6.59804826 C7.45337934,6.28993368 7.45337934,5.79038125 7.76149392,5.48226667 L7.76149392,5.48226667 L11.8465792,1.39718143 C12.8972868,0.447199708 14.0044192,-0.0212740733 15.1737052,0.000741207669 Z M11.951334,7.69783939 C12.2594486,8.00595397 12.2594486,8.5055064 11.951334,8.81362098 L9.02659368,11.7383613 C8.7184791,12.0464759 8.21892667,12.0464759 7.9108121,11.7383613 C7.60269752,11.4302467 7.60269752,10.9306943 7.9108121,10.6225797 L10.8355524,7.69783939 C11.143667,7.38972482 11.6432194,7.38972482 11.951334,7.69783939 Z"],"linkedin":["M17.0391667,17.0433333 L14.0775,17.0433333 L14.0775,12.4025 C14.0775,11.2958333 14.055,9.87166667 12.5341667,9.87166667 C10.99,9.87166667 10.7541667,11.0758333 10.7541667,12.3208333 L10.7541667,17.0433333 L7.7925,17.0433333 L7.7925,7.5 L10.6375,7.5 L10.6375,8.80083333 L10.6758333,8.80083333 C11.0733333,8.05083333 12.04,7.25916667 13.4841667,7.25916667 C16.485,7.25916667 17.04,9.23416667 17.04,11.805 L17.04,17.0433333 L17.0391667,17.0433333 Z M4.4475,6.19416667 C3.49416667,6.19416667 2.72833333,5.4225 2.72833333,4.47333333 C2.72833333,3.525 3.495,2.75416667 4.4475,2.75416667 C5.3975,2.75416667 6.1675,3.525 6.1675,4.47333333 C6.1675,5.4225 5.39666667,6.19416667 4.4475,6.19416667 Z M5.9325,17.0433333 L2.9625,17.0433333 L2.9625,7.5 L5.9325,7.5 L5.9325,17.0433333 Z M18.5208333,0 L1.47583333,0 C0.66,0 0,0.645 0,1.44083333 L0,18.5591667 C0,19.3558333 0.66,20 1.47583333,20 L18.5183333,20 C19.3333333,20 20,19.3558333 20,18.5591667 L20,1.44083333 C20,0.645 19.3333333,0 18.5183333,0 L18.5208333,0 Z"],"linux":["M8.73027816,4.70558792 C8.69887878,4.77629501 8.66904938,4.81164856 8.64078995,4.81164856 C8.60580208,4.81902877 8.58830814,4.80045922 8.58830814,4.75593993 C8.58830814,4.66666328 8.65491966,4.61083562 8.78814271,4.58845694 L8.89310634,4.58845694 C8.81595359,4.59583717 8.76167753,4.63488082 8.73027816,4.70558792 Z M9.68672546,4.6720199 C9.63424365,4.61631128 9.57290273,4.59952726 9.50270271,4.62166787 C9.67091363,4.53977143 9.78305425,4.54727066 9.83912456,4.64416558 C9.86020699,4.68892293 9.84966578,4.72237191 9.80750091,4.74451251 C9.77946575,4.75189273 9.73920727,4.72772853 9.68672546,4.6720199 Z M6.05437883,9.54331052 C6.04024912,9.5730694 6.02443729,9.61961228 6.00694335,9.68293918 C5.9894494,9.74626607 5.97016122,9.79649906 5.9490788,9.83363814 C5.92799637,9.87077723 5.8930085,9.91910565 5.84411518,9.9786234 C5.79499759,10.0529016 5.79152123,10.0975399 5.8336861,10.1125384 C5.86172126,10.1199186 5.90556824,10.0938498 5.96522704,10.034332 C6.02488584,9.97481427 6.06873282,9.90779727 6.09676797,9.83328103 C6.1037207,9.81090235 6.11078555,9.78483358 6.11796255,9.75507469 C6.12513954,9.72531581 6.1322044,9.70293713 6.13915712,9.68793866 C6.14610984,9.67294019 6.15138045,9.65615618 6.15496895,9.63758663 C6.15855745,9.61901708 6.16035171,9.60413764 6.16035171,9.59294831 L6.16035171,9.55938029 C6.16035171,9.55938029 6.15687534,9.55009552 6.14992262,9.53152598 C6.1429699,9.51295645 6.13242869,9.50545721 6.11829897,9.50902828 C6.08959098,9.50236229 6.06850855,9.51355163 6.05437883,9.54331052 Z M14.5278358,13.0472401 C14.555871,12.9355848 14.5821119,12.8333333 14.6065585,12.7404856 C14.6310052,12.6476379 14.6484991,12.550981 14.6590403,12.450515 C14.6695816,12.350049 14.6801228,12.2700572 14.690664,12.2105394 C14.7012052,12.1510217 14.7029995,12.0673397 14.6960467,11.9594935 C14.689094,11.8516473 14.6856177,11.7791547 14.6856177,11.7420156 C14.6856176,11.7048765 14.6733943,11.6230991 14.6489477,11.4966834 C14.624501,11.3702676 14.6104835,11.2939659 14.6068949,11.2677781 C14.6033064,11.2415903 14.5858125,11.1486235 14.5544131,10.9888779 C14.5230138,10.8291322 14.5037256,10.7305707 14.4965486,10.6931936 C14.4265728,10.3360871 14.2618383,9.95291173 14.0023449,9.54366761 C13.7428515,9.13442349 13.4905351,8.85540423 13.2453958,8.70660983 C13.4136067,8.85540423 13.6133291,9.16418237 13.8445631,9.63294425 C14.4543837,10.8380599 14.643565,11.8721214 14.4121067,12.735129 C14.334954,13.0327178 14.1597903,13.1890114 13.8866158,13.2040099 C13.6692873,13.2337688 13.5343821,13.1649662 13.4819003,12.9976023 C13.4294185,12.8302383 13.4013834,12.5196747 13.3977949,12.0659113 C13.3942064,11.6121479 13.3539479,11.2140931 13.2770194,10.8717469 C13.2139964,10.5815383 13.1457028,10.3248977 13.0721385,10.1018252 C12.9985743,9.87875262 12.9302806,9.7094841 12.8672576,9.59401964 C12.8042346,9.47855518 12.7499585,9.38737397 12.7044294,9.32047601 C12.6589003,9.25357805 12.6133713,9.19775039 12.5678422,9.15299303 C12.5223131,9.10823566 12.4960722,9.08216688 12.4891195,9.07478669 C12.3908843,8.61340501 12.28222,8.23022967 12.1631267,7.92526067 C12.0440334,7.62029167 11.9406397,7.4119795 11.8529458,7.30032418 C11.7652518,7.18866886 11.6829406,7.06594323 11.6060121,6.93214731 C11.5290837,6.79835138 11.4764897,6.64955698 11.4482303,6.48576411 C11.4201951,6.32958951 11.4412776,6.13056212 11.5114776,5.88868195 C11.5816776,5.64680178 11.5974894,5.46265383 11.5589131,5.33623809 C11.5203367,5.20982236 11.3643491,5.11685562 11.0909503,5.05733787 C10.9857624,5.03495919 10.8297748,4.96794219 10.6229875,4.85628686 C10.4162002,4.74463154 10.2918363,4.68511378 10.2498957,4.67773359 C10.1938254,4.67035339 10.155249,4.57369654 10.1341666,4.38776306 C10.1130841,4.20182957 10.1411193,4.01208695 10.218272,3.8185352 C10.2954248,3.62498345 10.421583,3.52451747 10.5967466,3.51713726 C10.8560157,3.49475859 11.0347678,3.6064139 11.133003,3.85210321 C11.2312382,4.09779253 11.2452558,4.31360392 11.1750558,4.49953741 C11.097903,4.6409516 11.0908382,4.73951301 11.1538612,4.79522164 C11.2168842,4.85093026 11.3220721,4.85283483 11.4694249,4.80093535 C11.5604831,4.77117646 11.6060121,4.6372615 11.6060121,4.39919046 L11.6060121,3.98637528 C11.5710243,3.76306464 11.5237009,3.57713116 11.4640421,3.42857482 C11.4043833,3.28001848 11.3308191,3.16657763 11.2433494,3.08825227 C11.1558797,3.00992691 11.0735685,2.95409925 10.9964158,2.92076929 C10.919263,2.88743933 10.8246164,2.85958501 10.7124757,2.83720635 C9.9624793,2.89672411 9.65061625,3.39512584 9.77688659,4.33241152 C9.77688659,4.44406684 9.77341023,4.4998945 9.76645751,4.4998945 C9.70343449,4.43299655 9.60004084,4.39395289 9.45627658,4.38276355 C9.31251231,4.3715742 9.19689533,4.37347877 9.10942565,4.38847726 C9.02195596,4.40347574 8.9676799,4.3849062 8.94659747,4.33276863 C8.95355019,3.9087641 8.89747988,3.57391718 8.77838655,3.32822787 C8.65929322,3.08253856 8.50162352,2.9560038 8.30537744,2.94862359 C8.11608408,2.94124339 7.97063771,3.0434949 7.86903831,3.25537813 C7.76743891,3.46726135 7.70957435,3.68854839 7.69544464,3.91923923 C7.68849192,4.03089455 7.70071525,4.16849961 7.73211462,4.3320544 C7.76351399,4.4956092 7.80904308,4.63511883 7.86870188,4.75058329 C7.92836068,4.86604776 7.98263674,4.91628075 8.03153006,4.90128226 C8.1015058,4.87890358 8.15757611,4.82676602 8.19974098,4.74486958 C8.22777613,4.67797163 8.20321734,4.64821274 8.12606459,4.65559294 C8.076947,4.65559294 8.02267094,4.60166984 7.96323641,4.49382366 C7.90380188,4.38597748 7.87049612,4.26134729 7.86331913,4.1199331 C7.85636641,3.95637829 7.88787792,3.81877323 7.95785366,3.70711792 C8.0278294,3.59546261 8.14703487,3.54332505 8.31547008,3.55070524 C8.43456341,3.55070524 8.52921009,3.62879254 8.59941011,3.78496714 C8.66961014,3.94114175 8.7029159,4.08624605 8.69932739,4.22028005 C8.69573889,4.35431405 8.69046828,4.43609145 8.68351556,4.46561226 C8.52943435,4.57726759 8.4207701,4.68511377 8.35752279,4.78915081 C8.30145248,4.87842746 8.20512369,4.96579953 8.06853643,5.05126702 C7.93194917,5.13673452 7.86006703,5.1832774 7.85289003,5.19089568 C7.76183185,5.2951708 7.70755579,5.39563678 7.69006185,5.49229362 C7.6725679,5.58895046 7.69880881,5.65596746 7.76878456,5.69334462 C7.86701974,5.75286239 7.95460156,5.82535501 8.03153002,5.91082251 C8.10845849,5.99629 8.16452879,6.0669971 8.19974094,6.1229438 C8.23495309,6.1788905 8.29977037,6.22721892 8.39419277,6.26792905 C8.48861518,6.30863919 8.61297912,6.3328034 8.7672846,6.34042168 C9.09675372,6.35542016 9.454258,6.29959249 9.83979743,6.1729387 C9.85392714,6.16555849 9.93455624,6.13948971 10.0816847,6.09473236 C10.2288132,6.04997501 10.3497008,6.01093136 10.4443475,5.97760141 C10.5389942,5.94427146 10.6423878,5.89594304 10.7545284,5.83261615 C10.866669,5.76928926 10.9402333,5.70417683 10.9752211,5.63727886 C11.0382442,5.53300374 11.108332,5.50324486 11.1854848,5.54800221 C11.2204727,5.57038089 11.2432372,5.60204433 11.2537784,5.64299255 C11.2643196,5.68394076 11.2537784,5.72857909 11.2221548,5.77690752 C11.1905311,5.82523595 11.1326666,5.8605895 11.0485611,5.88296816 C10.9083853,5.92772552 10.710345,6.00771739 10.4544401,6.12294378 C10.1985352,6.23817017 10.0390713,6.3106628 9.97604825,6.34042166 C9.66766156,6.48183586 9.42229789,6.56742239 9.23995725,6.59718128 C9.0647936,6.63432036 8.78791843,6.62682113 8.40933172,6.57468357 C8.33935598,6.5596851 8.30784447,6.56718433 8.31479719,6.59718128 C8.32174991,6.62717822 8.38129657,6.69788532 8.49343718,6.80930257 C8.66860082,6.98047564 8.90342327,7.06225304 9.19790453,7.05463478 C9.31699786,7.04725457 9.44315606,7.02118579 9.57637911,6.97642844 C9.70960217,6.93167109 9.83576036,6.87953353 9.9548537,6.82001576 C10.073947,6.760498 10.1913582,6.69538557 10.3070874,6.62467847 C10.4228165,6.55397137 10.5280044,6.49076351 10.622651,6.43505489 C10.7172977,6.37934626 10.8031974,6.33470794 10.8803502,6.30113992 C10.9575029,6.2675719 11.0188438,6.25828713 11.0643729,6.27328561 C11.109902,6.2882841 11.1397314,6.32923232 11.1538611,6.39613028 C11.1538611,6.41112875 11.1503848,6.42791276 11.1434321,6.44648231 C11.1364793,6.46505186 11.1224618,6.4836214 11.1013793,6.50219094 C11.0802969,6.52076048 11.0592145,6.53754449 11.038132,6.55254297 C11.0170496,6.56754146 10.9872202,6.586111 10.9486438,6.6082516 C10.9100674,6.63039221 10.8785559,6.64717622 10.8541093,6.65860364 C10.8296626,6.67003106 10.7946748,6.6886006 10.7491457,6.71431227 C10.7036166,6.74002394 10.6703108,6.75680795 10.6492284,6.7646643 C10.4529823,6.86893942 10.2164778,7.03261326 9.93971471,7.25568582 C9.66295167,7.47875838 9.42992347,7.63874211 9.24063012,7.73563703 C9.05133676,7.83253194 8.87964948,7.83622204 8.72556827,7.74670734 C8.57843979,7.66481089 8.35763492,7.39329087 8.06315366,6.93214727 C7.90907245,6.70145643 7.82149063,6.61967902 7.8004082,6.68681505 C7.79345547,6.70919373 7.78997911,6.74633281 7.78997911,6.7982323 C7.78997911,6.98416578 7.73738516,7.19438251 7.63219726,7.42888249 C7.52700936,7.66338247 7.42361572,7.86979007 7.32201633,8.04810527 C7.22041694,8.22642048 7.1468527,8.44223187 7.1013236,8.69553947 C7.0557945,8.94884706 7.09605298,9.183228 7.22209905,9.39868229 C7.06084085,9.44343965 6.84183023,9.77828657 6.56506719,10.4032231 C6.28830414,11.0281595 6.12188747,11.55263 6.06581718,11.9766346 C6.05168746,12.1106686 6.04641685,12.3673091 6.05000534,12.7465563 C6.05359383,13.1258035 6.03430565,13.345305 5.99214079,13.4050608 C5.93607048,13.5836141 5.83447108,13.5948034 5.68734259,13.4386288 C5.46306136,13.207938 5.33690317,12.8583307 5.30886801,12.3898068 C5.2947383,12.1814947 5.30875588,11.9731825 5.35092075,11.7648704 C5.3789559,11.6234562 5.37547954,11.5564392 5.34049166,11.5638194 L5.29843893,11.619528 C5.04612254,12.1030503 5.08111041,12.7204875 5.40340254,13.4718397 C5.43839042,13.5611164 5.52597224,13.6652725 5.666148,13.784308 C5.80632377,13.9033435 5.89042923,13.9777407 5.91846439,14.0074996 C6.05864015,14.1786726 6.42309715,14.5153051 7.01183538,15.0173969 C7.60057361,15.5194888 7.92645423,15.8041027 7.98947725,15.8712387 C8.10161786,15.982894 8.16295878,16.1241892 8.1735,16.2951242 C8.18404123,16.4660592 8.13492364,16.6260429 8.02614723,16.7750754 C7.91737083,16.9241079 7.75790687,17.0096944 7.54775537,17.031835 C7.60382568,17.1434903 7.70542508,17.3090688 7.85255356,17.5285703 C7.99968205,17.7480717 8.09780509,17.9488847 8.14692268,18.131009 C8.19604027,18.3131334 8.22059907,18.5753686 8.22059907,18.9177148 C8.54311548,18.7391615 8.56767427,18.3969344 8.29427545,17.8910334 C8.2662403,17.8315157 8.22945817,17.7719979 8.18392909,17.7124802 C8.1384,17.6529624 8.10509424,17.6083241 8.0840118,17.5785652 C8.06292937,17.5488063 8.05586451,17.5264276 8.06281723,17.5114292 C8.08389967,17.4742901 8.12942875,17.4389365 8.19940449,17.4053685 C8.26938024,17.3718005 8.33946812,17.3810853 8.40966814,17.4332228 C8.73218456,17.8200883 9.31385792,17.9540032 10.1546882,17.8349677 C11.086801,17.7233124 11.7070508,17.3996548 12.0154375,16.863995 C12.1766957,16.5814046 12.2959011,16.4697493 12.3730539,16.529029 C12.4571593,16.5737864 12.4921472,16.7672191 12.4780175,17.1093272 C12.4710648,17.2952607 12.3904357,17.6374878 12.2361302,18.1360085 C12.1731072,18.3071816 12.1520247,18.4466912 12.1728829,18.5545374 C12.193741,18.6623836 12.2778465,18.7199968 12.4251993,18.727377 C12.4462817,18.5859628 12.4970814,18.2995634 12.5775984,17.8681786 C12.6581153,17.4367939 12.7054387,17.101947 12.7195684,16.8636379 C12.7336981,16.7074633 12.7109336,16.4340387 12.6512748,16.0433641 C12.591616,15.6526895 12.565375,15.2918928 12.572552,14.9609741 C12.579729,14.6300553 12.6603581,14.3678201 12.8144393,14.1742683 C12.9196272,14.0402343 13.0983794,13.9732173 13.3506958,13.9732173 C13.3576485,13.6980072 13.4785361,13.5008844 13.7133585,13.3818489 C13.9481809,13.2628133 14.2022916,13.2237697 14.4756904,13.2647179 C14.7490892,13.3056661 14.9593529,13.3893481 15.1064814,13.5157638 C15.106145,13.382087 14.9133752,13.2257934 14.5278358,13.0472401 Z M8.47762537,3.95209308 C8.439049,3.85519816 8.39879052,3.7993705 8.35684992,3.78461009 C8.2938269,3.76961162 8.26231539,3.7956804 8.26231539,3.86281643 C8.2764451,3.89995552 8.29393904,3.92233419 8.31479721,3.92995246 C8.38477295,3.92995246 8.40933174,3.98578012 8.38847359,4.09743545 C8.36739116,4.24622984 8.39542631,4.32062704 8.47257906,4.32062704 C8.49366149,4.32062704 8.50420271,4.30943771 8.50420271,4.28705903 C8.5249487,4.16064331 8.51620173,4.04898799 8.47762537,3.95209308 Z M12.8406803,6.35720576 C12.8092809,6.33125602 12.7637518,6.31268647 12.704093,6.30149713 C12.6444342,6.29030778 12.5936345,6.26983368 12.5516939,6.24007481 C12.516706,6.21769613 12.4834003,6.18793725 12.4517766,6.15079816 C12.420153,6.11365907 12.3955942,6.08390019 12.3781002,6.06152151 C12.3606063,6.03914284 12.3413181,6.01497863 12.3202357,5.98902889 C12.2991533,5.96307914 12.2851357,5.9481997 12.2781829,5.94439056 C12.2712302,5.94058142 12.2572126,5.9461761 12.2361302,5.96117458 C12.137895,6.0802101 12.1624538,6.24197937 12.3098066,6.44648241 C12.4571594,6.65098544 12.5938588,6.76811639 12.7199048,6.79787526 C12.7829279,6.80525547 12.8337276,6.77549659 12.8723039,6.70859862 C12.9108803,6.64170065 12.9231036,6.56730345 12.9089739,6.48540702 C12.8948442,6.42588926 12.8720796,6.3831555 12.8406803,6.35720576 Z M11.0377956,4.10850575 C11.0377956,4.02660931 11.0203017,3.95411668 10.9853138,3.89102787 C10.9503259,3.82793905 10.9117495,3.78139616 10.8695847,3.75139921 C10.8274198,3.72140225 10.7959083,3.71021291 10.7750501,3.71783119 C10.6768149,3.7252114 10.6522562,3.75128018 10.7013737,3.79603753 L10.7434265,3.81853524 C10.8416617,3.84829412 10.9047968,3.96363954 10.932832,4.1645715 C10.932832,4.18695017 10.9608671,4.17945094 11.0169374,4.14207379 L11.0377956,4.10850575 Z M11.5790984,1.45270424 C11.5616044,1.43056363 11.5300929,1.40449485 11.4845638,1.3744979 C11.4390347,1.34450096 11.405729,1.32212228 11.3846465,1.30736187 C11.2794586,1.19570655 11.1953532,1.13987889 11.1323302,1.13987889 C11.0693071,1.14725909 11.0290487,1.1751134 11.0115547,1.22344182 C10.9940608,1.27177024 10.9905844,1.32009866 11.0011256,1.36842708 C11.0116669,1.4167555 11.0098726,1.46329839 10.9957429,1.50805574 C10.9887902,1.53781462 10.9677077,1.57685827 10.9324956,1.62518669 C10.8972834,1.67351511 10.876201,1.70696409 10.8692483,1.72553363 C10.8622955,1.74410317 10.8728368,1.77576661 10.9008719,1.82052397 C10.9289071,1.84290264 10.9569422,1.84290264 10.9849774,1.82052397 C11.0130125,1.79814529 11.0515889,1.76469631 11.1007065,1.72017703 C11.1498241,1.67565775 11.202418,1.64220877 11.2584884,1.6198301 C11.2654411,1.61244989 11.2969526,1.60875979 11.3530229,1.60875979 C11.4090932,1.60875979 11.4616871,1.60126055 11.5108047,1.58626208 C11.5599223,1.57126361 11.5914338,1.54519483 11.6053393,1.50805574 C11.6053393,1.4934144 11.5965923,1.47484486 11.5790984,1.45270424 Z M17.8715325,16.7468641 C17.9486852,16.8399498 17.990738,16.9292265 17.9976907,17.014694 C18.0046434,17.1001615 17.9958965,17.1838435 17.9714498,17.2657399 C17.9470032,17.3476364 17.8927271,17.4294138 17.8086216,17.5110721 C17.7245162,17.5927305 17.6422049,17.6652231 17.561688,17.72855 C17.481171,17.7918769 17.3759832,17.8606794 17.2461243,17.9349576 C17.1162655,18.0092358 17.0059191,18.0706581 16.9150852,18.1192246 C16.8242513,18.1677911 16.7121107,18.2254043 16.5786634,18.2920642 C16.445216,18.3587241 16.3505693,18.4070525 16.2947233,18.4370494 C16.0285015,18.5784636 15.7288618,18.7867758 15.3958042,19.0619859 C15.0627465,19.3371961 14.7982068,19.5752671 14.602185,19.776199 C14.4830917,19.8952346 14.2447929,19.9677272 13.8872886,19.9936769 C13.5297844,20.0196267 13.2179213,19.9657036 12.9516995,19.8319077 C12.8254292,19.7650097 12.7220355,19.6776376 12.6415186,19.5697914 C12.5610016,19.4619453 12.5031371,19.3670739 12.4679249,19.2851775 C12.4327127,19.2032811 12.3556721,19.1307884 12.2368031,19.0676996 C12.117934,19.0046108 11.9531995,18.9692573 11.7425994,18.961639 C11.4342127,18.9542588 10.9785854,18.9505687 10.3757175,18.9505687 C10.2424944,18.9505687 10.042772,18.9561633 9.77655014,18.9673527 C9.51032831,18.978542 9.30701738,18.9878268 9.16661734,18.995207 C8.85823066,19.0025872 8.57967337,19.0584149 8.33094549,19.16269 C8.0822176,19.2669651 7.8947185,19.3786204 7.76844817,19.4976559 C7.64217785,19.6166914 7.48977875,19.7227521 7.31125088,19.8158379 C7.132723,19.9089237 6.9452239,19.9516574 6.74875356,19.9440391 C6.54555477,19.9366589 6.15653897,19.8213135 5.58170618,19.5980029 C5.0068734,19.3746922 4.49517577,19.2147085 4.04661331,19.1180517 C3.91339026,19.0882928 3.73463812,19.0529392 3.51035689,19.011991 C3.28607566,18.9710428 3.11091202,18.9375938 2.98486596,18.9116441 C2.85881991,18.8856943 2.72043839,18.8503408 2.5697214,18.8055834 C2.41900441,18.7608261 2.30159319,18.706903 2.21748774,18.6438142 C2.13338228,18.5807253 2.07383562,18.5082327 2.03884774,18.4263363 C1.968872,18.2551632 1.9934308,18.0078074 2.11252413,17.6842688 C2.23161746,17.3607303 2.29475263,17.1580128 2.30192963,17.0761164 C2.30888235,16.9570809 2.29486477,16.8082865 2.2598769,16.6297332 C2.22488902,16.4511799 2.18990115,16.2931007 2.15491329,16.1554957 C2.11992542,16.0178906 2.10411359,15.8820711 2.1074778,15.7480371 C2.11084201,15.6140031 2.14762413,15.5135371 2.21782416,15.4466391 C2.31605934,15.3573625 2.51578178,15.3052249 2.81699148,15.2902265 C3.11820117,15.275228 3.32846482,15.2305897 3.44778244,15.1563115 C3.65815823,15.0222775 3.80539886,14.8920526 3.88950433,14.7656369 C3.97360979,14.6392212 4.01566253,14.4494786 4.01566253,14.1964091 C4.16279101,14.7394491 4.0506504,15.1336947 3.67924068,15.379146 C3.45495944,15.5279404 3.16406669,15.583768 2.80656241,15.546629 C2.56815147,15.5242503 2.41743448,15.5613894 2.35441146,15.6580462 C2.26335329,15.7697015 2.28084723,15.9817038 2.40689328,16.294053 C2.42102299,16.3388104 2.44905815,16.4058274 2.49099875,16.495104 C2.53293934,16.5843807 2.56276874,16.6513977 2.58048695,16.696155 C2.59820515,16.7409124 2.61401698,16.8041202 2.62792244,16.8857786 C2.64182789,16.967437 2.64530425,17.0492144 2.63835152,17.1311108 C2.63835152,17.2427661 2.57880485,17.4250095 2.45971152,17.6778409 C2.34061819,17.9306724 2.2915006,18.1092257 2.31235875,18.2135008 C2.33344118,18.3399165 2.46307573,18.4365734 2.70126239,18.5034713 C2.84143816,18.5482287 3.13760152,18.6170312 3.58975247,18.7098789 C4.04190343,18.8027266 4.3905486,18.8790284 4.63568798,18.9387842 C4.8038989,18.9835416 5.06328014,19.065319 5.4138317,19.1841164 C5.76438325,19.3029139 6.05348176,19.3885004 6.28112721,19.4408761 C6.50877266,19.4932517 6.70322448,19.5081311 6.86448268,19.4855144 C7.16591665,19.440757 7.39199213,19.3366009 7.54270911,19.1730461 C7.6934261,19.0094913 7.7740552,18.830938 7.78459642,18.6373863 C7.79513763,18.4438345 7.76889672,18.2262376 7.7058737,17.9845955 C7.64285068,17.7429534 7.57623916,17.5495207 7.50603914,17.4042973 C7.43583911,17.259074 7.36575123,17.1232545 7.29577549,16.9968388 C6.44776816,15.583411 5.85555358,14.6831453 5.51913173,14.2960418 C5.04253413,13.7453835 4.64656562,13.5965891 4.33122621,13.8496586 C4.25407347,13.9165566 4.20147951,13.8607289 4.17344436,13.6821756 C4.15236192,13.5631401 4.14529707,13.421845 4.15224979,13.2582902 C4.15920251,13.0425978 4.19419038,12.8491651 4.2572134,12.677992 C4.32023642,12.5068189 4.40434188,12.3319557 4.50952978,12.1534025 C4.61471768,11.9748492 4.69175829,11.8185555 4.74065159,11.6845215 C4.7967219,11.5283469 4.88957433,11.260517 5.01920887,10.8810318 C5.14884341,10.5015465 5.25223706,10.211457 5.3293898,10.0107631 C5.40654255,9.81006919 5.51173044,9.58318749 5.64495349,9.33011799 C5.77817653,9.07704849 5.91487595,8.87623556 6.05505172,8.72767921 C6.8259063,7.66373972 7.26045118,6.93833726 7.35868636,6.55147181 C7.2745809,5.71822316 7.21851059,4.56500704 7.19047545,3.09182345 C7.17634574,2.42212961 7.2604512,1.85861545 7.44279183,1.40128099 C7.62513247,0.943946526 7.99654218,0.555176514 8.55702097,0.234970954 C8.83041979,0.0787963504 9.19487679,0.000709048886 9.65039196,0.000709048886 C10.0218017,-0.00667115629 10.3932114,0.043561833 10.7646211,0.151408017 C11.1360308,0.2592542 11.4478939,0.413643271 11.7002102,0.614575228 C12.0996551,0.927162509 12.4202651,1.37914038 12.6620403,1.97050885 C12.9038155,2.56187731 13.0072091,3.11051202 12.9722212,3.61641298 C12.9372334,4.3232459 13.0424213,5.11935546 13.2877849,6.00474167 C13.5261959,6.84537051 13.9922523,7.65624047 14.6859541,8.43735156 C15.0714935,8.87635456 15.4201387,9.48272151 15.7318896,10.2564524 C16.0436405,11.0301833 16.2521099,11.7407063 16.3572978,12.3880215 C16.4133681,12.7525082 16.4308621,13.066881 16.4097796,13.3311399 C16.3886972,13.5953987 16.3466445,13.8018063 16.2836214,13.9503627 C16.2205984,14.098919 16.1505105,14.1806964 16.0733578,14.1956949 C16.003382,14.2106933 15.9210708,14.2814004 15.8264242,14.4078162 C15.7317775,14.5342319 15.6371308,14.6662423 15.5424841,14.8038473 C15.4478374,14.9414524 15.3058674,15.0660826 15.1165741,15.1777379 C14.9272807,15.2893932 14.7135407,15.3415308 14.4753541,15.3341506 C14.3490837,15.3267704 14.2387373,15.3082008 14.144315,15.278442 C14.0498926,15.2486831 13.9710577,15.1984501 13.9078104,15.127743 C13.8445631,15.0570359 13.7972397,14.9994227 13.7658404,14.9549034 C13.734441,14.9103841 13.6941825,14.8340823 13.6450649,14.7259981 C13.5959473,14.6179139 13.5644358,14.5454212 13.5505304,14.5085202 C13.3964492,14.2333101 13.2527971,14.1216548 13.119574,14.1735543 C12.986351,14.2254537 12.8882279,14.4076971 12.8252049,14.7202844 C12.7621819,15.0328717 12.7867407,15.3936684 12.8988813,15.8026744 C13.0390571,16.3235738 13.0425334,17.0489763 12.9093104,17.9788818 C12.8393346,18.4624041 12.9024698,18.8362946 13.0987159,19.1005535 C13.294962,19.3648124 13.5507547,19.487538 13.8660941,19.4687304 C14.1814335,19.4499228 14.479279,19.3179124 14.7596305,19.0726992 C15.1732051,18.7082124 15.4868624,18.4608566 15.7006024,18.3306318 C15.9143424,18.2004069 16.2770052,18.0423277 16.7885906,17.8563942 C17.1600004,17.7223602 17.4298107,17.5865407 17.5980216,17.4489357 C17.7662325,17.3113306 17.8310498,17.1830103 17.7924734,17.0639748 C17.7538971,16.9449393 17.6663152,16.8388786 17.529728,16.7457928 C17.3931407,16.6527071 17.2127065,16.565335 16.9884252,16.4836766 C16.7571913,16.4017802 16.5837097,16.2232269 16.4679806,15.9480168 C16.3522515,15.6728067 16.2996576,15.4030722 16.3101988,15.1388133 C16.32074,14.8745545 16.3750161,14.6979057 16.473027,14.6088672 C16.4799797,14.839558 16.5080148,15.0497748 16.5571324,15.2395174 C16.60625,15.42926 16.6570497,15.579959 16.7095315,15.6916143 C16.7620133,15.8032696 16.8338955,15.9093302 16.9251779,16.0097962 C17.0164604,16.1102622 17.0900246,16.1809693 17.1458707,16.2219175 C17.2017167,16.2628657 17.2770752,16.3111941 17.3719461,16.3669028 C17.4668171,16.4226114 17.5246817,16.457965 17.5455398,16.4729634 C17.6857155,16.5625971 17.7943798,16.6537783 17.8715325,16.7468641 Z"],"loading":["M11,16 C12.1045695,16 13,16.8954305 13,18 C13,19.1045695 12.1045695,20 11,20 C9.8954305,20 9,19.1045695 9,18 C9,16.8954305 9.8954305,16 11,16 Z M4.74123945,13 C6.12195133,13 7.24123945,14.1192881 7.24123945,15.5 C7.24123945,16.8807119 6.12195133,18 4.74123945,18 C3.36052758,18 2.24123945,16.8807119 2.24123945,15.5 C2.24123945,14.1192881 3.36052758,13 4.74123945,13 Z M16.3193286,13.5 C17.4238981,13.5 18.3193286,14.3954305 18.3193286,15.5 C18.3193286,16.6045695 17.4238981,17.5 16.3193286,17.5 C15.2147591,17.5 14.3193286,16.6045695 14.3193286,15.5 C14.3193286,14.3954305 15.2147591,13.5 16.3193286,13.5 Z M18.5,9.31854099 C19.3284271,9.31854099 20,9.99011387 20,10.818541 C20,11.6469681 19.3284271,12.318541 18.5,12.318541 C17.6715729,12.318541 17,11.6469681 17,10.818541 C17,9.99011387 17.6715729,9.31854099 18.5,9.31854099 Z M2.5,6 C3.88071187,6 5,7.11928813 5,8.5 C5,9.88071187 3.88071187,11 2.5,11 C1.11928813,11 0,9.88071187 0,8.5 C0,7.11928813 1.11928813,6 2.5,6 Z M17.7857894,5.20724734 C18.3380741,5.20724734 18.7857894,5.65496259 18.7857894,6.20724734 C18.7857894,6.75953209 18.3380741,7.20724734 17.7857894,7.20724734 C17.2335046,7.20724734 16.7857894,6.75953209 16.7857894,6.20724734 C16.7857894,5.65496259 17.2335046,5.20724734 17.7857894,5.20724734 Z M8,0 C9.65685425,0 11,1.34314575 11,3 C11,4.65685425 9.65685425,6 8,6 C6.34314575,6 5,4.65685425 5,3 C5,1.34314575 6.34314575,0 8,0 Z M15.5,3 C15.7761424,3 16,3.22385763 16,3.5 C16,3.77614237 15.7761424,4 15.5,4 C15.2238576,4 15,3.77614237 15,3.5 C15,3.22385763 15.2238576,3 15.5,3 Z"],"lock":["M10,0 C14.418278,0 18,3.581722 18,8 L18,19 C18,19.5522847 17.5522847,20 17,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,8 C2,3.581722 5.581722,0 10,0 Z M16.6,10.245 L3.4,10.245 L3.4,18.6 L16.6,18.6 L16.6,10.245 Z M10.3612018,11.6234389 C11.1896289,11.6234389 11.8612018,12.2950118 11.8612018,13.1234389 C11.8612018,13.7011904 11.5345638,14.2026515 11.0558821,14.4532279 L11.0554075,16.6220005 C11.0554075,17.0085998 10.7420068,17.3220005 10.3554075,17.3220005 C9.96880815,17.3220005 9.65540748,17.0085998 9.65540748,16.6220005 L9.65525845,14.4472708 C9.18272344,14.1947611 8.86120179,13.6966477 8.86120179,13.1234389 C8.86120179,12.2950118 9.53277467,11.6234389 10.3612018,11.6234389 Z M10,1.4 C6.35492065,1.4 3.4,4.35492065 3.4,8 L3.4,8.845 L16.6,8.845 L16.6,8 C16.6,4.35492065 13.6450793,1.4 10,1.4 Z"],"login":["M9.76076555,0 C15.4157386,0 20,4.4771525 20,10 C20,15.5228475 15.4157386,20 9.76076555,20 C6.56885647,20 3.61836948,18.5634688 1.68988581,16.1544725 C1.46202241,15.8698333 1.51356853,15.4586837 1.80501731,15.2361442 C2.09646608,15.0136047 2.51745178,15.0639465 2.74531518,15.3485857 C4.4225344,17.443711 6.98554674,18.6915888 9.76076555,18.6915888 C14.6758356,18.6915888 18.6602871,14.8002319 18.6602871,10 C18.6602871,5.19976806 14.6758356,1.30841121 9.76076555,1.30841121 C7.02601512,1.30841121 4.49642844,2.51988396 2.81675903,4.5633425 C2.58516542,4.84509553 2.16355149,4.89014431 1.87505796,4.66396176 C1.58656443,4.43777922 1.54043793,4.02601608 1.77203154,3.74426305 C3.70333647,1.39466883 6.61544133,0 9.76076555,0 Z M10.3053281,6.86239745 L13.0119569,9.56902627 C13.2735521,9.83062149 13.2785069,10.2497964 13.0230237,10.5052795 L10.3796339,13.1486694 C10.1241507,13.4041526 9.70497582,13.3991978 9.4433806,13.1376026 C9.18178539,12.8760073 9.1768306,12.4568325 9.43231378,12.2013493 L10.98,10.6534046 L0.669856459,10.6542056 C0.299904952,10.6542056 7.72715225e-14,10.3613078 7.72715225e-14,10 C7.72715225e-14,9.63869222 0.299904952,9.34579439 0.669856459,9.34579439 L10.938,9.34540456 L9.38014161,7.78758389 C9.11854639,7.52598867 9.11359161,7.1068138 9.36907479,6.85133062 C9.62455797,6.59584744 10.0437328,6.60080223 10.3053281,6.86239745 Z"],"logout":["M10.2392344,0 C13.3845587,0 16.2966635,1.39466883 18.2279685,3.74426305 C18.4595621,4.02601608 18.4134356,4.43777922 18.124942,4.66396176 C17.8364485,4.89014431 17.4148346,4.84509553 17.183241,4.5633425 C15.5035716,2.51988396 12.9739849,1.30841121 10.2392344,1.30841121 C5.32416443,1.30841121 1.33971292,5.19976806 1.33971292,10 C1.33971292,14.8002319 5.32416443,18.6915888 10.2392344,18.6915888 C13.0144533,18.6915888 15.5774656,17.443711 17.2546848,15.3485857 C17.4825482,15.0639465 17.9035339,15.0136047 18.1949827,15.2361442 C18.4864315,15.4586837 18.5379776,15.8698333 18.3101142,16.1544725 C16.3816305,18.5634688 13.4311435,20 10.2392344,20 C4.58426141,20 8.8817842e-14,15.5228475 8.8817842e-14,10 C8.8817842e-14,4.4771525 4.58426141,0 10.2392344,0 Z M17.0978642,7.15999289 L19.804493,9.86662172 C20.0660882,10.1282169 20.071043,10.5473918 19.8155599,10.802875 L17.17217,13.4462648 C16.9166868,13.701748 16.497512,13.6967932 16.2359168,13.435198 C15.9743215,13.1736028 15.9693667,12.7544279 16.2248499,12.4989447 L17.7715361,10.9515085 L7.46239261,10.9518011 C7.0924411,10.9518011 6.79253615,10.6589032 6.79253615,10.2975954 C6.79253615,9.93628766 7.0924411,9.64338984 7.46239261,9.64338984 L17.7305361,9.64250854 L16.1726778,8.08517933 C15.9110825,7.82358411 15.9061278,7.40440925 16.1616109,7.14892607 C16.4170941,6.89344289 16.836269,6.89839767 17.0978642,7.15999289 Z"],"mail-o":["M18.3333333,2.5 C19.2538079,2.5 20,3.24619208 20,4.16666667 L20,15.8333333 C20,16.7538079 19.2538079,17.5 18.3333333,17.5 L1.66666667,17.5 C0.746192084,17.5 2.33317167e-15,16.7538079 1.77635684e-15,15.8333333 L1.77635684e-15,4.16666667 C1.66363121e-15,3.24619208 0.746192084,2.5 1.66666667,2.5 L18.3333333,2.5 Z M7.16778842,11.3283763 L2.25878629,16.1802269 L17.5826888,16.1802269 L12.7258856,11.3778956 L10,13.2651744 L7.16778842,11.3283763 Z M18.641191,7.29207207 L13.8450345,10.6082871 L18.641191,15.3441081 L18.641191,7.29207207 Z M1.36233243,7.35321045 L1.36233243,15.1889532 L6.04751587,10.5577581 L1.36233243,7.35321045 Z M18.3176115,3.82130698 L1.69800793,3.82130698 C1.59345552,3.82130698 1.50986643,3.84987713 1.44724066,3.90701743 C1.38461489,3.96415772 1.35642774,4.03810002 1.36267922,4.12884432 L1.36267922,5.7485199 L10,11.6557985 L18.6440397,5.69051298 L18.6440397,4.19917622 C18.6454952,4.06518753 18.6147031,3.96780126 18.5516635,3.90701743 C18.4886239,3.84623359 18.4106065,3.81766344 18.3176115,3.82130698 Z"],"mail":["M7.172,11.334 L10.0016129,13.2687863 L12.73,11.387 L18.844647,17.4201015 C18.6835279,17.47198 18.5117028,17.5 18.3333333,17.5 L1.66666667,17.5 C1.44656147,17.5 1.23642159,17.4573334 1.04406658,17.3798199 L7.172,11.334 Z M20,6.376 L20,15.8333333 C20,16.0799316 19.9464441,16.3140212 19.8503291,16.5246054 L13.856,10.611 L20,6.376 Z M0,6.429 L6.042,10.561 L0.105700422,16.4187119 C0.0373700357,16.2365871 1.90096522e-15,16.0393243 1.77635684e-15,15.8333333 L0,6.429 Z M18.3333333,2.5 C19.2538079,2.5 20,3.24619208 20,4.16666667 L20,4.753 L9.99838709,11.6476481 L0,4.81 L1.77635684e-15,4.16666667 C1.66363121e-15,3.24619208 0.746192084,2.5 1.66666667,2.5 L18.3333333,2.5 Z"],"man":["M19.3085452,0 C19.6904251,0 20,0.310949421 20,0.694524972 L20,5.85751807 C20,6.24109362 19.6904251,6.55204304 19.3085452,6.55204304 C18.9266653,6.55204304 18.6170904,6.24109362 18.6170904,5.85751807 L18.617,2.372 L13.568814,7.61688882 C14.5976008,8.91992131 15.2120055,10.5680038 15.2120055,12.3602253 C15.2120055,16.5795564 11.8066821,20 7.60600274,20 C3.40532342,20 0,16.5795564 0,12.3602253 C0,8.14089426 3.40532342,4.72045062 7.60600274,4.72045062 C9.52451045,4.72045062 11.277117,5.43391202 12.6151844,6.61109301 L17.638,1.389 L13.8926043,1.38904994 C13.5107244,1.38904994 13.2011495,1.07810052 13.2011495,0.694524972 C13.2011495,0.310949421 13.5107244,0 13.8926043,0 L19.3085452,0 Z M7.60600274,6.10950057 C4.1690833,6.10950057 1.38290959,8.90804536 1.38290959,12.3602253 C1.38290959,15.8124053 4.1690833,18.6109501 7.60600274,18.6109501 C11.0429222,18.6109501 13.8290959,15.8124053 13.8290959,12.3602253 C13.8290959,8.90804536 11.0429222,6.10950057 7.60600274,6.10950057 Z"],"map":["M16.2188621,1.94336139 C16.8719625,2.45473339 17.3224525,3.28195096 17.5058442,4.14846 C17.5277356,4.15487837 17.5495085,4.1635955 17.5710179,4.17354667 L19.6159544,5.11962334 C19.850284,5.2280344 20,5.46075582 20,5.71659107 L20,18.0838211 C20,18.5215589 19.5764334,18.8376696 19.1507575,18.7176166 L13.4812801,17.1186587 L6.74047268,18.9758209 C6.61895637,19.0092999 6.49032728,19.0079875 6.36953532,18.9720364 L0.474387945,17.2174711 C0.192770539,17.1336537 0,16.877201 0,16.5863682 L0,3.99949446 C0,3.55938972 0.427852876,3.24293409 0.854762077,3.36728116 L6.5568261,5.02813783 L9.45531671,4.14091868 C9.49560616,4.1285862 9.53617992,4.12022217 9.5766076,4.11560217 C9.68851619,3.45991529 10.0021813,2.82953836 10.5271993,2.21529897 C11.1500745,1.48657256 12.2425855,1.05841547 13.3081598,1.0071619 C14.4132601,0.95400714 15.2566187,1.18993304 16.2188621,1.94336139 Z M1.332921,4.88067678 L1.332921,16.0964567 L6.203,17.545 L6.203,6.298 L1.332921,4.88067678 Z M9.54155068,5.49511149 L7.536,6.108 L7.536,17.387 L12.601,15.993 L12.6013187,12.6982315 C12.6013187,12.3342391 12.8997032,12.0391649 13.2677792,12.0391649 C13.6358551,12.0391649 13.9342397,12.3342391 13.9342397,12.6982315 L13.934,15.876 L18.667079,17.2105145 L18.667079,6.13588259 L17.547277,5.61659848 C17.528312,5.72640456 17.5039187,5.83409766 17.473943,5.93901738 C17.2532957,6.71131967 16.8963495,7.414258 16.3999122,8.04997641 L13.9227269,11.1433946 C13.6437575,11.4917614 13.1032312,11.4728536 12.8498498,11.105865 L10.5349807,7.75291653 C10.1527973,7.21939641 9.88530334,6.74384381 9.73385649,6.31710846 C9.6374954,6.04558953 9.5749832,5.7770584 9.54155068,5.49511149 Z M13.3729153,2.32373861 C12.6463921,2.358684 11.8998709,2.65124703 11.5451804,3.06621358 C11.1177976,3.56622563 10.9078128,4.03405231 10.8664857,4.50800323 C10.8166808,5.07918058 10.849988,5.48166535 10.9915686,5.8806001 C11.0965456,6.17639634 11.3064518,6.5495691 11.6292157,7.00031076 L13.4400083,9.62299842 L15.3499293,7.23802066 C15.7369434,6.74236225 16.0167645,6.19130722 16.1912346,5.58063296 C16.4310136,4.74136651 16.0687876,3.5071375 15.3914441,2.97678337 C14.6961976,2.43241127 14.1705779,2.28537145 13.3729153,2.32373861 Z M13.5098299,3.02068789 C14.6140579,3.02068789 15.5092114,3.90591036 15.5092114,4.99788761 C15.5092114,6.08986486 14.6140579,6.97508733 13.5098299,6.97508733 C12.405602,6.97508733 11.5104484,6.08986486 11.5104484,4.99788761 C11.5104484,3.90591036 12.405602,3.02068789 13.5098299,3.02068789 Z M13.5098299,4.33882104 C13.141754,4.33882104 12.8433694,4.63389519 12.8433694,4.99788761 C12.8433694,5.36188003 13.141754,5.65695418 13.5098299,5.65695418 C13.8779059,5.65695418 14.1762904,5.36188003 14.1762904,4.99788761 C14.1762904,4.63389519 13.8779059,4.33882104 13.5098299,4.33882104 Z"],"meh-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M12.5286188,13.6743435 C12.9139338,13.6743435 13.2262933,13.986703 13.2262933,14.3720179 C13.2262933,14.7573329 12.9139338,15.0696924 12.5286188,15.0696924 L6.94722349,15.0696924 C6.56190855,15.0696924 6.24954907,14.7573329 6.24954907,14.3720179 C6.24954907,13.986703 6.56190855,13.6743435 6.94722349,13.6743435 L12.5286188,13.6743435 Z M5.81395349,6.27906977 C6.58458337,6.27906977 7.20930233,6.90378872 7.20930233,7.6744186 C7.20930233,8.44504849 6.58458337,9.06976744 5.81395349,9.06976744 C5.0433236,9.06976744 4.41860465,8.44504849 4.41860465,7.6744186 C4.41860465,6.90378872 5.0433236,6.27906977 5.81395349,6.27906977 Z M14.1860465,6.27906977 C14.9566764,6.27906977 15.5813953,6.90378872 15.5813953,7.6744186 C15.5813953,8.44504849 14.9566764,9.06976744 14.1860465,9.06976744 C13.4154166,9.06976744 12.7906977,8.44504849 12.7906977,7.6744186 C12.7906977,6.90378872 13.4154166,6.27906977 14.1860465,6.27906977 Z"],"meh":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M12.5286188,13.6743435 L6.94722349,13.6743435 C6.56190855,13.6743435 6.24954907,13.986703 6.24954907,14.3720179 C6.24954907,14.7573329 6.56190855,15.0696924 6.94722349,15.0696924 L6.94722349,15.0696924 L12.5286188,15.0696924 C12.9139338,15.0696924 13.2262933,14.7573329 13.2262933,14.3720179 C13.2262933,13.986703 12.9139338,13.6743435 12.5286188,13.6743435 L12.5286188,13.6743435 Z M5.81395349,6.27906977 C5.0433236,6.27906977 4.41860465,6.90378872 4.41860465,7.6744186 C4.41860465,8.44504849 5.0433236,9.06976744 5.81395349,9.06976744 C6.58458337,9.06976744 7.20930233,8.44504849 7.20930233,7.6744186 C7.20930233,6.90378872 6.58458337,6.27906977 5.81395349,6.27906977 Z M14.1860465,6.27906977 C13.4154166,6.27906977 12.7906977,6.90378872 12.7906977,7.6744186 C12.7906977,8.44504849 13.4154166,9.06976744 14.1860465,9.06976744 C14.9566764,9.06976744 15.5813953,8.44504849 15.5813953,7.6744186 C15.5813953,6.90378872 14.9566764,6.27906977 14.1860465,6.27906977 Z"],"menu-fold":["M19.2956043,16.6083218 C19.6820552,16.6083218 19.9953355,16.9198596 19.9953355,17.3041609 C19.9953355,17.6884622 19.6820552,18 19.2956043,18 L0.699731181,18 C0.313280321,18 2.78532752e-12,17.6884622 2.78532752e-12,17.3041609 C2.78532752e-12,16.9198596 0.313280321,16.6083218 0.699731181,16.6083218 L19.2956043,16.6083218 Z M4.03254685,6.62500173 C4.30428893,6.8967438 4.30305676,7.33855691 4.02979474,7.61181894 L1.69723847,9.94437521 L4.01682048,12.2639572 C4.28856255,12.5356993 4.28733039,12.9775124 4.01406836,13.2507744 C3.74080634,13.5240364 3.29899322,13.5252686 3.02725115,13.2535265 L0.215636596,10.441912 C-0.0561054767,10.1701699 -0.0548733126,9.7283568 0.218388711,9.45509477 L3.04572964,6.62775384 C3.31899167,6.35449182 3.76080478,6.35325965 4.03254685,6.62500173 Z M19.3002688,9.13100315 C19.6867197,9.13100315 20,9.44254093 20,9.82684226 C20,10.2111436 19.6867197,10.5226814 19.3002688,10.5226814 L5.18267993,10.5226814 C4.79622907,10.5226814 4.48294875,10.2111436 4.48294875,9.82684226 C4.48294875,9.44254093 4.79622907,9.13100315 5.18267993,9.13100315 L19.3002688,9.13100315 Z M19.2956043,2 C19.6820552,2 19.9953355,2.31153778 19.9953355,2.6958391 C19.9953355,3.08014043 19.6820552,3.3916782 19.2956043,3.3916782 L0.699731181,3.3916782 C0.313280321,3.3916782 -8.52651283e-13,3.08014043 -8.52651283e-13,2.6958391 C-8.52651283e-13,2.31153778 0.313280321,2 0.699731181,2 L19.2956043,2 Z"],"menu-unfold":["M19.2991685,16.6083218 C19.6856193,16.6083218 19.9988997,16.9198596 19.9988997,17.3041609 C19.9988997,17.6884622 19.6856193,18 19.2991685,18 L0.703295369,18 C0.316844509,18 0.00356418865,17.6884622 0.00356418865,17.3041609 C0.00356418865,16.9198596 0.316844509,16.6083218 0.703295369,16.6083218 L19.2991685,16.6083218 Z M15.9807574,6.49203255 C16.2524994,6.22029048 16.6943126,6.22152264 16.9675746,6.49478466 L16.9675746,6.49478466 L19.7949155,9.32212559 C20.0681775,9.59538762 20.0694097,10.0372007 19.7976676,10.3089428 L19.7976676,10.3089428 L16.9860531,13.1205574 C16.714311,13.3922994 16.2724979,13.3910673 15.9992359,13.1178052 C15.7259738,12.8445432 15.7247417,12.4027301 15.9964837,12.130988 L15.9964837,12.130988 L18.3160657,9.81140603 L15.9835095,7.47884976 C15.7102475,7.20558773 15.7090153,6.76377462 15.9807574,6.49203255 Z M14.8173201,9.13100315 C15.2037709,9.13100315 15.5170512,9.44254093 15.5170512,9.82684226 C15.5170512,10.2111436 15.2037709,10.5226814 14.8173201,10.5226814 L0.699731181,10.5226814 C0.313280321,10.5226814 0,10.2111436 0,9.82684226 C0,9.44254093 0.313280321,9.13100315 0.699731181,9.13100315 L14.8173201,9.13100315 Z M19.2991685,2 C19.6856193,2 19.9988997,2.31153778 19.9988997,2.6958391 C19.9988997,3.08014043 19.6856193,3.3916782 19.2991685,3.3916782 L0.703295369,3.3916782 C0.316844509,3.3916782 0.00356418865,3.08014043 0.00356418865,2.6958391 C0.00356418865,2.31153778 0.316844509,2 0.703295369,2 L19.2991685,2 Z"],"menu":["M3.49700541,15.6016867 C3.88362709,15.6016867 4.19704589,15.9147098 4.19704589,16.3008433 C4.19704589,16.6869769 3.88362709,17 3.49700541,17 L0.700449443,17 C0.31382776,17 0.000408959195,16.6869769 0.000408959195,16.3008433 C0.000408959195,15.9147098 0.31382776,15.6016867 0.700449443,15.6016867 L3.49700541,15.6016867 Z M19.2999595,15.6016867 C19.6865812,15.6016867 20,15.9147098 20,16.3008433 C20,16.6869769 19.6865812,17 19.2999595,17 L5.52869781,17 C5.14207613,17 4.82865733,16.6869769 4.82865733,16.3008433 C4.82865733,15.9147098 5.14207613,15.6016867 5.52869781,15.6016867 L19.2999595,15.6016867 Z M3.49659645,9.3343084 C3.88321813,9.3343084 4.19663693,9.64733151 4.19663693,10.0334651 C4.19663693,10.4195986 3.88321813,10.7326218 3.49659645,10.7326218 L0.700040484,10.7326218 C0.3134188,10.7326218 -1.79412041e-12,10.4195986 -1.79412041e-12,10.0334651 C-1.79412041e-12,9.64733151 0.3134188,9.3343084 0.700040484,9.3343084 L3.49659645,9.3343084 Z M19.2995506,9.3343084 C19.6861722,9.3343084 19.999591,9.64733151 19.999591,10.0334651 C19.999591,10.4195986 19.6861722,10.7326218 19.2995506,10.7326218 L5.52828885,10.7326218 C5.14166717,10.7326218 4.82824837,10.4195986 4.82824837,10.0334651 C4.82824837,9.64733151 5.14166717,9.3343084 5.52828885,9.3343084 L19.2995506,9.3343084 Z M3.49659645,3 C3.88321813,3 4.19663693,3.31302311 4.19663693,3.69915667 C4.19663693,4.08529024 3.88321813,4.39831335 3.49659645,4.39831335 L0.700040484,4.39831335 C0.3134188,4.39831335 -1.79412041e-12,4.08529024 -1.79412041e-12,3.69915667 C-1.79412041e-12,3.31302311 0.3134188,3 0.700040484,3 L3.49659645,3 Z M19.2995506,3 C19.6861722,3 19.999591,3.31302311 19.999591,3.69915667 C19.999591,4.08529024 19.6861722,4.39831335 19.2995506,4.39831335 L5.52828885,4.39831335 C5.14166717,4.39831335 4.82824837,4.08529024 4.82824837,3.69915667 C4.82824837,3.31302311 5.14166717,3 5.52828885,3 L19.2995506,3 Z"],"message":["M9.99967212,0 C15.3421546,0 20,4.41078717 20,9.50041089 C20,14.5038113 15.4470617,18.4420609 9.99967212,18.4420609 C8.82383776,18.4420609 7.66472215,18.2555444 6.56950019,17.896217 C6.1061195,18.3458348 5.94680953,18.4994554 4.96243281,19.448677 C4.25236672,19.9846542 3.58411803,20.1670231 2.98696396,19.8294032 C2.38520468,19.4891796 2.20359422,18.826708 2.3273511,17.9547253 L2.72619634,15.6363992 C0.991478903,14.0023298 -5.5067062e-14,11.841558 -5.5067062e-14,9.50041089 C-5.5067062e-14,4.41068995 4.65729467,0 9.99967212,0 Z M9.99967212,1.3990586 C5.41358584,1.3990586 1.39921922,5.20086368 1.39921922,9.50041089 C1.39921922,11.5450586 2.31196565,13.4284446 3.92034256,14.8307294 C3.92973001,14.8389057 3.92973001,14.8389057 3.93914815,14.8470758 L4.2373081,15.1054691 L4.17041728,15.4942784 C4.10971448,15.8471192 4.06924596,16.0823464 4.03194209,16.2991112 L3.99506091,16.513394 C3.93324306,16.872516 3.86441075,17.2721599 3.70953807,18.1713588 C3.68686557,18.331512 3.68074435,18.4393886 3.67939691,18.5082916 L3.67945227,18.6031678 C3.67924936,18.6076492 3.67879274,18.6103183 3.67789839,18.611383 C3.68539878,18.6013701 3.82129581,18.5575122 4.0536067,18.3884487 L6.22335079,16.2823797 L6.63824234,16.4378322 C7.69910735,16.8353194 8.83963099,17.0430023 9.99967212,17.0430023 C14.7157106,17.0430023 18.6007808,13.6824525 18.6007808,9.50041089 C18.6007808,5.20099275 14.5858917,1.3990586 9.99967212,1.3990586 Z M5.22745564,7.81372377 C6.05542075,7.81372377 6.72661909,8.48484506 6.72661909,9.31271513 C6.72661909,10.1405852 6.05542075,10.8117065 5.22745564,10.8117065 C4.39949054,10.8117065 3.7282922,10.1405852 3.7282922,9.31271513 C3.7282922,8.48484506 4.39949054,7.81372377 5.22745564,7.81372377 Z M10.2246671,7.81372377 C11.0526322,7.81372377 11.7238306,8.48484506 11.7238306,9.31271513 C11.7238306,10.1405852 11.0526322,10.8117065 10.2246671,10.8117065 C9.39670202,10.8117065 8.72550368,10.1405852 8.72550368,9.31271513 C8.72550368,8.48484506 9.39670202,7.81372377 10.2246671,7.81372377 Z M15.2218786,7.81372377 C16.0498437,7.81372377 16.7210421,8.48484506 16.7210421,9.31271513 C16.7210421,10.1405852 16.0498437,10.8117065 15.2218786,10.8117065 C14.3939135,10.8117065 13.7227152,10.1405852 13.7227152,9.31271513 C13.7227152,8.48484506 14.3939135,7.81372377 15.2218786,7.81372377 Z"],"minus-circle-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M14.5875685,9.31818182 C14.9641263,9.31818182 15.2693867,9.62344222 15.2693867,10 C15.2693867,10.3765578 14.9641263,10.6818182 14.5875685,10.6818182 L6.14266724,10.6818182 C5.76610946,10.6818182 5.46084906,10.3765578 5.46084906,10 C5.46084906,9.62344222 5.76610946,9.31818182 6.14266724,9.31818182 L14.5875685,9.31818182 Z"],"minus-circle":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M14.4545455,9.09090909 L6.27272727,9.09090909 C5.82085793,9.09090909 5.45454545,9.45722157 5.45454545,9.90909091 C5.45454545,10.3609602 5.82085793,10.7272727 6.27272727,10.7272727 L6.27272727,10.7272727 L14.4545455,10.7272727 C14.9064148,10.7272727 15.2727273,10.3609602 15.2727273,9.90909091 C15.2727273,9.45722157 14.9064148,9.09090909 14.4545455,9.09090909 L14.4545455,9.09090909 Z"],"minus-square-o":["M1.81818182,1.36363636 C1.5671433,1.36363636 1.36363636,1.5671433 1.36363636,1.81818182 L1.36363636,18.1818182 C1.36363636,18.4328567 1.5671433,18.6363636 1.81818182,18.6363636 L18.1818182,18.6363636 C18.4328567,18.6363636 18.6363636,18.4328567 18.6363636,18.1818182 L18.6363636,1.81818182 C18.6363636,1.5671433 18.4328567,1.36363636 18.1818182,1.36363636 L1.81818182,1.36363636 Z M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M14.686097,9.299131 L5.90909091,9.299131 C5.53253313,9.299131 5.22727273,9.6043914 5.22727273,9.98094918 C5.22727273,10.357507 5.53253313,10.6627674 5.90909091,10.6627674 L5.90909091,10.6627674 L14.686097,10.6627674 C15.0626548,10.6627674 15.3679152,10.357507 15.3679152,9.98094918 C15.3679152,9.6043914 15.0626548,9.299131 14.686097,9.299131 L14.686097,9.299131 Z"],"minus-square":["M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M14.686097,9.299131 L5.90909091,9.299131 C5.53253313,9.299131 5.22727273,9.6043914 5.22727273,9.98094918 C5.22727273,10.357507 5.53253313,10.6627674 5.90909091,10.6627674 L5.90909091,10.6627674 L14.686097,10.6627674 C15.0626548,10.6627674 15.3679152,10.357507 15.3679152,9.98094918 C15.3679152,9.6043914 15.0626548,9.299131 14.686097,9.299131 L14.686097,9.299131 Z"],"minus":["M0.7,10.4 C0.313400675,10.4 0,10.0865993 0,9.7 C0,9.31340068 0.313400675,9 0.7,9 L19.3055622,9 C19.6921615,9 20.0055622,9.31340068 20.0055622,9.7 C20.0055622,10.0865993 19.6921615,10.4 19.3055622,10.4 L0.7,10.4 Z"],"mobile":["M15,0 C16.1045695,0 17,0.8954305 17,2 L17,18 C17,19.1045695 16.1045695,20 15,20 L5,20 C3.8954305,20 3,19.1045695 3,18 L3,2 C3,0.8954305 3.8954305,0 5,0 L15,0 Z M15.6,15.388 L4.4,15.388 L4.4,18 C4.4,18.3313708 4.66862915,18.6 5,18.6 L15,18.6 C15.3313708,18.6 15.6,18.3313708 15.6,18 L15.6,15.388 Z M10,16 C10.5522847,16 11,16.4477153 11,17 C11,17.5522847 10.5522847,18 10,18 C9.44771525,18 9,17.5522847 9,17 C9,16.4477153 9.44771525,16 10,16 Z M15,1.4 L5,1.4 C4.66862915,1.4 4.4,1.66862915 4.4,2 L4.4,13.988 L15.6,13.988 L15.6,2 C15.6,1.66862915 15.3313708,1.4 15,1.4 Z"],"more":["M2.5,7.5 C3.88071187,7.5 5,8.61928813 5,10 C5,11.3807119 3.88071187,12.5 2.5,12.5 C1.11928813,12.5 0,11.3807119 0,10 C0,8.61928813 1.11928813,7.5 2.5,7.5 Z M17.5,7.5 C18.8807119,7.5 20,8.61928813 20,10 C20,11.3807119 18.8807119,12.5 17.5,12.5 C16.1192881,12.5 15,11.3807119 15,10 C15,8.61928813 16.1192881,7.5 17.5,7.5 Z M10.226404,7.5 C11.6071159,7.5 12.726404,8.61928813 12.726404,10 C12.726404,11.3807119 11.6071159,12.5 10.226404,12.5 C8.84569215,12.5 7.72640403,11.3807119 7.72640403,10 C7.72640403,8.61928813 8.84569215,7.5 10.226404,7.5 Z"],"notification":["M10.0261783,18.639914 C10.0320317,18.6403969 10.0376419,18.6404142 10.0430606,18.64004 C10.0410549,18.6401785 10.0390534,18.6403504 10.0370566,18.6405542 L10.0261783,18.639914 Z M9.82940005,18.5160239 L9.83169307,1.47842176 C9.81083811,1.49833542 9.78750109,1.52150492 9.76154015,1.54842825 L4.94102084,6.31579864 C4.81130053,6.44408871 4.63505688,6.51620354 4.45124512,6.51620354 L1.9682784,6.51620354 C1.83205053,6.54640624 1.71612826,6.62103443 1.60260942,6.75820092 C1.47382921,6.91380794 1.39589088,7.14628154 1.38259587,7.44796173 L1.38153697,12.8590284 C1.39221272,13.0488205 1.45639655,13.192984 1.58548673,13.3217773 C1.70754237,13.4435523 1.92775983,13.5306308 2.20726545,13.5596254 L4.51059475,13.5596254 C4.69389034,13.5596254 4.86968266,13.6313369 4.99931819,13.7589918 L9.82940005,18.5160239 Z M10.2066185,0.0186519268 C10.7903792,0.115862052 11.160128,0.541230198 11.2119496,1.18396112 L11.2119496,18.8396335 L11.2065351,18.9247012 C11.1294638,19.5277519 10.7454846,19.9568989 10.1397319,19.9987252 C9.68865768,20.0298712 9.26896604,19.8615139 8.88847362,19.5145278 L4.22396107,14.9212797 L2.14234745,14.9186345 C1.49831003,14.8587903 0.976065802,14.6522843 0.601659104,14.2787385 C0.234286948,13.912211 0.0302874562,13.4540072 -1.27453603e-12,12.8967071 L0.000593766111,7.41974219 C0.026113771,6.81356645 0.198519226,6.29931734 0.531017794,5.89755442 C0.86714387,5.49140833 1.29838925,5.2381631 1.80076436,5.16209052 L1.90579268,5.15418495 L4.16412104,5.15418495 L8.77009748,0.599273526 C9.19803207,0.154629748 9.68251898,-0.0686232006 10.2066185,0.0186519268 Z M16.4174914,2.24588262 C18.6020088,3.6180743 20,6.57679822 20,9.8617262 C20,13.1465267 18.6021175,16.1051546 16.4177336,17.4774176 C16.0958252,17.6796454 15.6684521,17.5865089 15.4631691,17.2693914 C15.2578862,16.952274 15.3524298,16.5312616 15.6743382,16.3290338 C17.4283648,15.2271278 18.6174041,12.7105178 18.6174041,9.8617262 C18.6174041,7.01282831 17.4282758,4.49614412 15.6741557,3.39430397 C15.3522368,3.19209249 15.2576713,2.77108483 15.4629378,2.45395703 C15.6682042,2.13682923 16.0955724,2.04367115 16.4174914,2.24588262 Z M14.1159403,4.93217605 C15.4752226,5.93854544 16.3130777,7.81177412 16.3130777,9.8617262 C16.3130777,12.0268039 15.3780641,13.9901435 13.8924083,14.9457447 C13.5727258,15.1513704 13.1443609,15.062766 12.9356286,14.7478413 C12.7268963,14.4329166 12.8168392,14.0109271 13.1365218,13.8053013 C14.2036649,13.1188953 14.9304818,11.5927265 14.9304818,9.8617262 C14.9304818,8.21832734 14.2755979,6.75417519 13.2852842,6.02097843 C12.9800773,5.79501296 12.918607,5.36809504 13.1479863,5.06743056 C13.3773656,4.76676609 13.8107334,4.70621058 14.1159403,4.93217605 Z"],"opera":["M6.70916667,4.365 C5.6025,5.67 4.8875,7.60083333 4.8375,9.765 L4.8375,10.235 C4.88833333,12.4 5.6025,14.3283333 6.70916667,15.6341667 C8.14333333,17.4975 10.275,18.6791667 12.6583333,18.6791667 C14.1216667,18.6791667 15.4916667,18.2316667 16.6641667,17.4533333 C14.8991667,19.0383333 12.5616667,20 10,20 C9.84,20 9.68083333,19.9966667 9.525,19.9883333 C4.22,19.7408333 0,15.3633333 0,10 C0,4.47583333 4.4775,0 10,0 L10.0375,0 C12.5833333,0.01 14.9041667,0.971666667 16.665,2.54583333 C15.4916667,1.77083333 14.1225,1.32 12.6566667,1.32 C10.275,1.32 8.1425,2.50333333 6.70666667,4.365 L6.70916667,4.365 Z M20,10 C20,12.9633333 18.7125,15.6233333 16.665,17.4541667 C14.1,18.7041667 11.71,17.83 10.9183333,17.2833333 C13.4375,16.73 15.3408333,13.6833333 15.3408333,10 C15.3408333,6.315 13.4383333,3.27083333 10.9183333,2.71666667 C11.7091667,2.17166667 14.1,1.2975 16.665,2.54583333 C18.7125,4.375 20,7.0375 20,10 Z"],"paper-clip":["M3.26370324,8.57901468 C2.99453017,8.85144476 2.55815971,8.85139888 2.28904255,8.5789122 C2.01992538,8.30642553 2.0199707,7.86468321 2.28914377,7.59225313 L8.31841803,1.49869904 C9.6814954,0.444085855 11.0494163,-0.0634259367 12.4102348,0.00632825194 C14.1258309,0.0942679855 15.4624193,0.748186494 16.5955255,1.82083609 C17.7517135,2.91533596 18.5,4.4761857 18.5,6.36786284 C18.5,7.82020638 18.0777556,9.09825417 17.1873382,10.2322297 L8.68369766,18.992369 C7.82306461,19.6971651 6.86800034,20.0383772 5.84464483,19.9965751 C4.54447205,19.9434657 3.57689721,19.5225003 2.85751064,18.812055 C2.01566307,17.9806708 1.5,16.9595407 1.5,15.586809 C1.5,14.4947997 1.87673374,13.4871176 2.65464506,12.5414674 L10.1390133,4.89886776 C10.7397414,4.25929091 11.3262525,3.87857385 11.9260788,3.78745695 C12.7592435,3.66089468 13.5630715,3.94799237 14.125324,4.54188726 C14.6582899,5.10484729 14.8863791,5.80668361 14.8061508,6.60631594 C14.7514821,7.15119754 14.5282081,7.65301591 14.1180011,8.13362927 L7.23878241,15.1818274 C6.97126126,15.4559198 6.5348987,15.4585772 6.26413935,15.1877628 C5.99338001,14.9169484 5.99075494,14.475214 6.25827609,14.2011216 L13.1050596,7.18854878 C13.3043212,6.95383296 13.4095414,6.71734597 13.4348274,6.46532072 C13.4749133,6.06578671 13.3787672,5.76994273 13.1301718,5.507357 C12.8740282,5.23679814 12.515784,5.10884654 12.1306257,5.16735419 C11.8867692,5.20439732 11.5466923,5.42514859 11.1279193,5.87078347 L3.67468228,13.4778958 C3.13824791,14.1329762 2.87837838,14.8280715 2.87837838,15.586809 C2.87837838,16.5407878 3.22343307,17.2240746 3.82004074,17.813267 C4.29545562,18.2827729 4.93985667,18.5631342 5.9002189,18.6023631 C6.57923469,18.6300995 7.20937629,18.4049713 7.75849029,17.9611447 L16.1548885,9.3108071 C16.800384,8.48404341 17.1216216,7.51172274 17.1216216,6.36786284 C17.1216216,4.88582368 16.545304,3.68368344 15.6540647,2.83999601 C14.743984,1.97847246 13.7042594,1.46979297 12.340529,1.39988952 C11.3332737,1.34825863 10.2755553,1.74068233 9.22420262,2.5463929 L3.26370324,8.57901468 Z"],"pause-circle-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M8.05611421,5.45454545 C8.43267199,5.45454545 8.73793239,5.75980585 8.73793239,6.13636364 L8.73793239,13.4084582 C8.73793239,13.7850159 8.43267199,14.0902763 8.05611421,14.0902763 C7.67955643,14.0902763 7.37429603,13.7850159 7.37429603,13.4084582 L7.37429603,6.13636364 C7.37429603,5.75980585 7.67955643,5.45454545 8.05611421,5.45454545 Z M12.6015688,5.45454545 C12.9781265,5.45454545 13.2833869,5.75980585 13.2833869,6.13636364 L13.2833869,13.4084582 C13.2833869,13.7850159 12.9781265,14.0902763 12.6015688,14.0902763 C12.225011,14.0902763 11.9197506,13.7850159 11.9197506,13.4084582 L11.9197506,6.13636364 C11.9197506,5.75980585 12.225011,5.45454545 12.6015688,5.45454545 Z"],"pause-circle":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M8.05611421,5.45454545 C7.67955643,5.45454545 7.37429603,5.75980585 7.37429603,6.13636364 L7.37429603,6.13636364 L7.37429603,13.4084582 C7.37429603,13.7850159 7.67955643,14.0902763 8.05611421,14.0902763 C8.43267199,14.0902763 8.73793239,13.7850159 8.73793239,13.4084582 L8.73793239,13.4084582 L8.73793239,6.13636364 C8.73793239,5.75980585 8.43267199,5.45454545 8.05611421,5.45454545 Z M12.6015688,5.45454545 C12.225011,5.45454545 11.9197506,5.75980585 11.9197506,6.13636364 L11.9197506,6.13636364 L11.9197506,13.4084582 C11.9197506,13.7850159 12.225011,14.0902763 12.6015688,14.0902763 C12.9781265,14.0902763 13.2833869,13.7850159 13.2833869,13.4084582 L13.2833869,13.4084582 L13.2833869,6.13636364 C13.2833869,5.75980585 12.9781265,5.45454545 12.6015688,5.45454545 Z"],"pause":["M14.7798038,2.04371366 C15.1775572,2.04371366 15.5,2.37573542 15.5,2.78530501 L15.5,17.2584086 C15.5,17.6679782 15.1775572,18 14.7798038,18 C14.3820504,18 14.0596076,17.6679782 14.0596076,17.2584086 L14.0596076,2.78530501 C14.0596076,2.37573542 14.3820504,2.04371366 14.7798038,2.04371366 Z M5.22019619,2 C5.61794957,2 5.94039239,2.33202176 5.94039239,2.74159135 L5.94039239,17.214695 C5.94039239,17.6242646 5.61794957,17.9562863 5.22019619,17.9562863 C4.82244282,17.9562863 4.5,17.6242646 4.5,17.214695 L4.5,2.74159135 C4.5,2.33202176 4.82244282,2 5.22019619,2 Z"],"pay-circle-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M7.11302759,5.11190145 C7.39522116,4.83204213 7.85359397,4.82804957 8.13578754,5.10790889 L8.13578754,5.10790889 L9.99506352,6.94980902 L11.844179,5.11389773 C12.1263726,4.83403841 12.5807195,4.83204213 12.8628172,5.11190145 C13.1451067,5.38976449 13.1430937,5.8383569 12.8609002,6.11821622 L12.8609002,6.11821622 L10.4953245,8.45623924 C10.4813298,8.47011813 10.4673352,8.47601191 10.4532447,8.47601191 L10.4532447,8.47601191 L13.7954746,8.47610697 C14.1717008,8.47610697 14.5,8.81547441 14.5,9.18858847 L14.5,9.18858847 L14.5,9.26805938 C14.5,9.64316972 14.1717007,9.92493026 13.7954746,9.92493026 L13.7954746,9.92493026 L10.7174177,9.92493026 L10.7174177,11.1952292 L13.1549796,11.1952292 C13.5313016,11.1952292 13.859505,11.5187214 13.859505,11.8918355 L13.859505,11.8918355 L13.859505,11.9712114 C13.859505,12.3444205 13.5313016,12.6242798 13.1549796,12.6242798 L13.1549796,12.6242798 L10.7174177,12.6242798 L10.7174177,15.5855221 C10.7175195,15.7750443 10.6416492,15.9568332 10.506519,16.0908457 C10.3713887,16.2248581 10.1880836,16.3 9.9969806,16.3 C9.80587761,16.3 9.62257247,16.2248581 9.48744224,16.0908457 C9.352312,15.9568332 9.27644172,15.7750443 9.27654351,15.5855221 L9.27654351,15.5855221 L9.27654351,12.6242798 L6.8248911,12.6242798 C6.44866496,12.6242798 6.15439383,12.3444205 6.15439383,11.9713064 L6.15439383,11.9713064 L6.15439383,11.8918355 C6.15439383,11.5187214 6.44866498,11.1952292 6.8248911,11.1952292 L6.8248911,11.1952292 L9.27654351,11.1952292 L9.27654351,9.92493026 L6.18650486,9.92493026 C5.81018286,9.92493026 5.5,9.62729454 5.5,9.25418049 L5.5,9.25418049 L5.5,9.18858847 C5.5,8.81547439 5.81018288,8.50386474 6.18650486,8.50386474 L6.18650486,8.50386474 L9.51867018,8.50386474 C9.50467554,8.50386476 9.49068089,8.48399703 9.47659038,8.47011813 L9.47659038,8.47011813 L7.11111051,6.12620132 C6.82891694,5.84624696 6.83092987,5.39176077 7.11302759,5.11190145 Z"],"pay":["M11.6708039,8.5371684 C11.503528,8.5371684 11.367924,8.66969751 11.367924,8.83318046 L11.367924,11.0445245 C11.367924,11.2080074 11.503528,11.3405366 11.6708039,11.3405366 L18.3341608,11.3405366 C18.5014367,11.3405366 18.6370406,11.2080074 18.6370406,11.0445245 L18.6370406,8.83318046 C18.6370406,8.66969751 18.5014367,8.5371684 18.3341608,8.5371684 L11.6708039,8.5371684 Z M15.7560704,1.50078586 C16.6780043,1.54459492 17.3414965,1.72693705 17.7606859,2.11278254 C18.1758315,2.49490586 18.389343,3.04833287 18.4311058,3.780032 L18.4311058,5.87677957 C18.4311058,6.2446162 18.1259969,6.54280671 17.7496261,6.54280671 C17.3732552,6.54280671 17.0681464,6.2446162 17.0681464,5.87677957 L17.0692614,3.81811561 C17.0469311,3.43707152 16.9563297,3.20223037 16.8262275,3.08247698 C16.7001691,2.96644576 16.3166736,2.86105282 15.7229752,2.83205429 L2.64726556,2.83155392 C2.1095373,2.85193653 1.76087307,2.95373651 1.59169679,3.09859187 C1.46159434,3.2099907 1.36406148,3.51612459 1.36295936,4.04504207 L1.35992655,15.8147515 C1.40976422,16.3293067 1.52339713,16.6717349 1.66817892,16.8431562 C1.77796835,16.9731466 2.11920075,17.103677 2.62085458,17.1665781 L15.7369661,17.1667184 C16.3509087,17.1790396 16.7131902,17.0871239 16.8347153,16.9638789 C16.9695445,16.8271414 17.0681464,16.4672026 17.0681464,15.8775168 L17.0681464,13.8333741 C17.0681464,13.4655375 17.3732552,13.167347 17.7496261,13.167347 C18.1259969,13.167347 18.4311058,13.4655375 18.4311058,13.8333741 L18.4311058,15.8775168 C18.4311058,16.7789214 18.2469047,17.4513334 17.8161279,17.888207 C17.3720469,18.3385731 16.6660308,18.5176989 15.7229752,18.4986323 L2.54049252,18.4939853 C1.64331868,18.3898604 0.999060442,18.1434145 0.617058313,17.691125 C0.270048552,17.2802664 0.0762555036,16.6962788 0,15.8775168 L0,4.04368747 C0.00182369827,3.16803158 0.2117168,2.50922393 0.693540444,2.09666765 C1.13629026,1.7175679 1.77311668,1.5316328 2.62085458,1.5 L15.7560704,1.50078586 Z M18.3341608,7.20511411 C19.2541784,7.20511411 20,7.93402425 20,8.83318046 L20,11.0445245 C20,11.9436807 19.2541784,12.6725908 18.3341608,12.6725908 L11.6708039,12.6725908 C10.7507863,12.6725908 10.0049647,11.9436807 10.0049647,11.0445245 L10.0049647,8.83318046 C10.0049647,7.93402425 10.7507863,7.20511411 11.6708039,7.20511411 L18.3341608,7.20511411 Z M13.3366431,9.14442223 C12.8766343,9.14442223 12.5037235,9.50414411 12.5037235,9.94788354 C12.5037235,10.391623 12.8766343,10.7513449 13.3366431,10.7513449 C13.7966519,10.7513449 14.1695627,10.391623 14.1695627,9.94788354 C14.1695627,9.50414411 13.7966519,9.14442223 13.3366431,9.14442223 Z"],"picasa":["M18.9825641,14.3766381 C17.4502564,17.5432962 14.3664103,19.6772702 10.9123077,20 L10.9123077,20 L9.07615385,20 C7.98205128,19.8987615 6.91897436,19.6138034 5.90230769,19.1574593 L5.90230769,19.1574593 L5.90230769,14.376895 L5.90230769,14.376895 Z M4.85230769,9.96351303 L4.85230769,18.5793206 C2.98512821,17.4482245 1.52205128,15.7400175 0.720512821,13.7257824 C0.776220017,13.6754284 1.66717495,12.8643498 2.6098808,12.0059679 L2.98786601,11.6617834 C3.86760479,10.8606912 4.70142266,10.1012551 4.85230769,9.96351303 L4.85230769,9.96351303 Z M15.1766667,1.47258338 C18.1523077,3.28742484 20,6.53861966 20,10.0210699 C20,11.1429159 19.8051282,12.2526851 19.4325641,13.3208284 L19.4325641,13.3208284 L15.1766667,13.3208284 Z M5.4425641,1.11156791 C5.49371353,1.15798735 6.2255209,1.82360803 7.0326841,2.55784386 L7.59608964,3.07035675 C8.40579743,3.80693997 9.15117595,4.48508004 9.22692308,4.55419086 C9.13875181,4.63469394 6.91044774,6.66365312 4.70953984,8.66753512 L4.22178114,9.11162731 C2.279598,10.8799279 0.485921626,12.5129081 0.363076923,12.6244925 C0.129487179,11.7572845 0,10.8818542 0,10.0210699 C0,6.24261267 2.08564103,2.8380184 5.4425641,1.11156791 Z M9.99948718,0 C11.4315385,0 12.8182051,0.303972455 14.1225641,0.898042037 L14.1225641,0.898042037 L14.1225641,7.58029703 C13.7810256,7.26912997 6.77153846,0.893673878 6.50717949,0.6531682 C7.63512821,0.229713757 8.80717949,0 9.99948718,0 Z"],"picture":["M19.0909091,2 C19.5929861,2 20,2.39796911 20,2.88888889 L20,17.1111111 C20,17.6020309 19.5929861,18 19.0909091,18 L0.909090909,18 C0.407013864,18 0,17.6020309 0,17.1111111 L0,2.88888889 C0,2.39796911 0.407013864,2 0.909090909,2 L19.0909091,2 Z M5.41498358,8.41650391 L1.35528564,12.4593235 L1.35528564,16.6760254 L18.6397145,16.6760254 L18.6397145,15.243208 L15.4396522,12.1229367 L12.6626905,14.4561124 C12.4973565,14.5726194 12.3372165,14.6241229 12.1822704,14.6106228 C12.0273243,14.5971228 11.8813994,14.5342746 11.7444957,14.4220785 L5.41498358,8.41650391 Z M18.634732,3.33114963 L1.36244722,3.33114963 L1.36244722,10.5609045 L4.96842818,6.9698622 C5.10609945,6.86625615 5.2524821,6.81445312 5.40757613,6.81445312 C5.56267016,6.81445312 5.69937041,6.86096747 5.81767689,6.95399616 L12.2491594,13.0423991 L15.0544045,10.6911214 C15.1877478,10.594062 15.3280547,10.5455322 15.4753252,10.5455322 C15.6225956,10.5455322 15.761728,10.594062 15.8927224,10.6911214 L18.634732,13.3555356 L18.634732,3.33114963 Z M15.2726045,5.22858343 C16.0257201,5.22858343 16.6362408,5.8255371 16.6362408,6.56191676 C16.6362408,7.29829643 16.0257201,7.8952501 15.2726045,7.8952501 C14.5194889,7.8952501 13.9089681,7.29829643 13.9089681,6.56191676 C13.9089681,5.8255371 14.5194889,5.22858343 15.2726045,5.22858343 Z"],"pie-chart":["M1.36909829,18.6151347 L19.3154509,18.6151347 C19.6935169,18.6151347 20,18.9251474 20,19.3075674 C20,19.6899873 19.6935169,20 19.3154509,20 L0.684549146,20 C0.306483092,20 0,19.6899873 0,19.3075674 L0,0.692432639 C0,0.310012652 0.306483092,0 0.684549146,0 C1.0626152,0 1.36909829,0.310012652 1.36909829,0.692432639 L1.36909829,18.6151347 Z M2.83676637,17.3989425 L5.59036035,11.8283319 L8.34395433,13.2209845 L11.7863833,9.04214355 L14.5399773,11.1315641 L18.6712413,4.86418564 L18.6712413,17.3989425 L2.83676637,17.3989425 Z"],"pinterest":["M10.0146193,0 C4.48352199,0 0,4.4725 0,9.98916667 C0,14.2216667 2.63815212,17.8366667 6.36397811,19.2908333 C6.27626248,18.5 6.1977361,17.2883333 6.39822898,16.425 C6.58117873,15.6441667 7.57278309,11.4608333 7.57278309,11.4608333 C7.57278309,11.4608333 7.27287916,10.8608333 7.27287916,9.97666667 C7.27287916,8.59083333 8.08069838,7.55083333 9.08399816,7.55083333 C9.93943444,7.55083333 10.3521156,8.19166667 10.3521156,8.9575 C10.3521156,9.815 9.80660791,11.0966667 9.52341172,12.2841667 C9.28532643,13.2783333 10.0246439,14.0883333 11.0062236,14.0883333 C12.7839272,14.0883333 14.1539618,12.2175 14.1539618,9.51583333 C14.1539618,7.13166667 12.4305585,5.45833333 9.97034376,5.45833333 C7.12167412,5.45833333 5.45173552,7.59333333 5.45173552,9.79083333 C5.45173552,10.6516667 5.78087799,11.5766667 6.19439455,12.075 C6.27709787,12.175 6.2879579,12.2625 6.26540245,12.3625 C6.19021762,12.675 6.02063406,13.3616667 5.98638319,13.4983333 C5.94210768,13.6858333 5.84269663,13.7241667 5.65139301,13.6358333 C4.40248945,13.0608333 3.61889645,11.2375 3.61889645,9.76416667 C3.61889645,6.6175 5.91453991,3.72083333 10.2351614,3.72083333 C13.7087006,3.72083333 16.4103421,6.19333333 16.4103421,9.49 C16.4103421,12.9358333 14.2324882,15.7083333 11.203375,15.7083333 C10.1892152,15.7083333 9.23687398,15.1841667 8.89937764,14.5591667 L8.27367278,16.9325 C8.04895368,17.8033333 7.43494424,18.8925 7.02226306,19.5541667 C7.96040266,19.8416667 8.94866547,20 9.98788689,20 C15.5072888,20 20,15.5291667 20,10.0108333 C20,4.49166667 15.5072888,0.0216666667 9.98788689,0.0216666667 L10.0146193,0 Z"],"play-circle-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M8.18181818,5.90395401 C8.18181818,5.43578211 8.61824416,5.31836036 8.90010261,5.62289936 L8.90010261,5.62289936 L12.575303,9.58493664 C12.7779293,9.80311383 12.7779293,10.1978024 12.575303,10.4159796 L12.575303,10.4159796 L8.90010261,14.3772594 C8.61824416,14.6817984 8.18181818,14.563619 8.18181818,14.0969623 L8.18181818,14.0969623 Z"],"play-circle":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M8.18181818,5.90395401 L8.18181818,14.0969623 C8.18181818,14.563619 8.61824416,14.6817984 8.90010261,14.3772594 L12.575303,10.4159796 C12.7779293,10.1978024 12.7779293,9.80311383 12.575303,9.58493664 L8.90010261,5.62289936 C8.61824416,5.31836036 8.18181818,5.43578211 8.18181818,5.90395401 Z"],"plus-circle-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M10,5.47455848 C10.3765578,5.47455848 10.6818182,5.77981887 10.6818182,6.15637666 L10.681,9.279 L13.8050335,9.27959198 C14.1815913,9.27959198 14.4868517,9.58485238 14.4868517,9.96141017 C14.4868517,10.3379679 14.1815913,10.6432283 13.8050335,10.6432283 L10.681,10.643 L10.6818182,13.7664437 C10.6818182,14.1430015 10.3765578,14.4482619 10,14.4482619 C9.62344222,14.4482619 9.31818182,14.1430015 9.31818182,13.7664437 L9.318,10.643 L6.19496649,10.6432283 C5.81840871,10.6432283 5.51314831,10.3379679 5.51314831,9.96141017 C5.51314831,9.58485238 5.81840871,9.27959198 6.19496649,9.27959198 L9.318,9.279 L9.31818182,6.15637666 C9.31818182,5.77981887 9.62344222,5.47455848 10,5.47455848 Z"],"plus-circle":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,5.47455848 C9.62344222,5.47455848 9.31818182,5.77981887 9.31818182,6.15637666 L9.31818182,6.15637666 L9.318,9.279 L6.19496649,9.27959198 C5.85264123,9.27959198 5.56923944,9.5318733 5.52054097,9.86065607 L5.51314831,9.96141017 C5.51314831,10.3379679 5.81840871,10.6432283 6.19496649,10.6432283 L6.19496649,10.6432283 L9.318,10.643 L9.31818182,13.7664437 C9.31818182,14.1087689 9.57046314,14.3921707 9.89924591,14.4408692 L10,14.4482619 C10.3765578,14.4482619 10.6818182,14.1430015 10.6818182,13.7664437 L10.6818182,13.7664437 L10.681,10.643 L13.8050335,10.6432283 C14.1473588,10.6432283 14.4307606,10.390947 14.479459,10.0621643 L14.4868517,9.96141017 C14.4868517,9.58485238 14.1815913,9.27959198 13.8050335,9.27959198 L13.8050335,9.27959198 L10.681,9.279 L10.6818182,6.15637666 C10.6818182,5.8140514 10.4295369,5.5306496 10.1007541,5.48195113 Z"],"plus-square-o":["M1.81818182,1.36363636 C1.5671433,1.36363636 1.36363636,1.5671433 1.36363636,1.81818182 L1.36363636,18.1818182 C1.36363636,18.4328567 1.5671433,18.6363636 1.81818182,18.6363636 L18.1818182,18.6363636 C18.4328567,18.6363636 18.6363636,18.4328567 18.6363636,18.1818182 L18.6363636,1.81818182 C18.6363636,1.5671433 18.4328567,1.36363636 18.1818182,1.36363636 L1.81818182,1.36363636 Z M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M10.2975939,4.91062796 C9.92103616,4.91062796 9.61577577,5.21588836 9.61577577,5.59244614 L9.61577577,5.59244614 L9.615,9.299 L5.90909091,9.299131 C5.56676565,9.299131 5.28336385,9.55141232 5.23466539,9.88019509 L5.22727273,9.98094918 C5.22727273,10.357507 5.53253313,10.6627674 5.90909091,10.6627674 L5.90909091,10.6627674 L9.615,10.662 L9.61577577,14.3694522 C9.61577577,14.7117775 9.86805709,14.9951793 10.1968399,15.0438777 L10.2975939,15.0512704 C10.6741517,15.0512704 10.9794121,14.74601 10.9794121,14.3694522 L10.9794121,14.3694522 L10.979,10.662 L14.686097,10.6627674 C15.0284222,10.6627674 15.311824,10.410486 15.3605225,10.0817033 L15.3679152,9.98094918 C15.3679152,9.6043914 15.0626548,9.299131 14.686097,9.299131 L14.686097,9.299131 L10.979,9.299 L10.9794121,5.59244614 C10.9794121,5.25012088 10.7271308,4.96671909 10.398348,4.91802062 Z"],"plus-square":["M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M10.2975939,4.91062796 C9.92103616,4.91062796 9.61577577,5.21588836 9.61577577,5.59244614 L9.61577577,5.59244614 L9.615,9.299 L5.90909091,9.299131 C5.56676565,9.299131 5.28336385,9.55141232 5.23466539,9.88019509 L5.22727273,9.98094918 C5.22727273,10.357507 5.53253313,10.6627674 5.90909091,10.6627674 L5.90909091,10.6627674 L9.615,10.662 L9.61577577,14.3694522 C9.61577577,14.7117775 9.86805709,14.9951793 10.1968399,15.0438777 L10.2975939,15.0512704 C10.6741517,15.0512704 10.9794121,14.74601 10.9794121,14.3694522 L10.9794121,14.3694522 L10.979,10.662 L14.686097,10.6627674 C15.0284222,10.6627674 15.311824,10.410486 15.3605225,10.0817033 L15.3679152,9.98094918 C15.3679152,9.6043914 15.0626548,9.299131 14.686097,9.299131 L14.686097,9.299131 L10.979,9.299 L10.9794121,5.59244614 C10.9794121,5.25012088 10.7271308,4.96671909 10.398348,4.91802062 Z"],"plus":["M10,-1.77635684e-15 C10.4232029,-1.69861573e-15 10.7662767,0.343073746 10.7662767,0.766276659 L10.766,9.233 L19.2337233,9.23372334 C19.6569263,9.23372334 20,9.57679709 20,10 C20,10.4232029 19.6569263,10.7662767 19.2337233,10.7662767 L10.766,10.766 L10.7662767,19.2337233 C10.7662767,19.6569263 10.4232029,20 10,20 C9.57679709,20 9.23372334,19.6569263 9.23372334,19.2337233 L9.233,10.766 L0.766276659,10.7662767 C0.343073746,10.7662767 0,10.4232029 0,10 C0,9.57679709 0.343073746,9.23372334 0.766276659,9.23372334 L9.233,9.233 L9.23372334,0.766276659 C9.23372334,0.343073746 9.57679709,-1.85409795e-15 10,-1.77635684e-15 Z"],"poweroff":["M5.07361562,2.32834363 C5.29046374,2.6236019 5.2266459,3.03855991 4.9310745,3.25517829 C2.69142126,4.89657541 1.32752667,7.52434665 1.32752667,10.2844939 C1.32752667,14.8308253 5.3391503,18.6738798 10.0069185,18.6738798 C14.6717829,18.6738798 18.6724733,14.8335479 18.6724733,10.2844939 C18.6724733,7.5536591 17.342534,4.9527074 15.1488571,3.30771433 C14.8556829,3.0878691 14.7964271,2.67223654 15.0165055,2.37937301 C15.2365839,2.08650949 15.6526573,2.02731646 15.9458314,2.24716169 C18.4701166,4.14007108 20,7.13205178 20,10.2844939 C20,15.5780272 15.3933813,20 10.0069185,20 C4.61812407,20 3.01980663e-14,15.5759303 3.01980663e-14,10.2844939 C3.01980663e-14,7.09730095 1.56893509,4.07448486 4.14579799,2.18595352 C4.4413694,1.96933514 4.8567675,2.03308536 5.07361562,2.32834363 Z M10,0 C10.3869523,0 10.7006391,0.313354467 10.7006391,0.69989679 L10.7006391,8.50071788 C10.7006391,8.88726021 10.3869523,9.20061467 10,9.20061467 C9.61304772,9.20061467 9.29936092,8.88726021 9.29936092,8.50071788 L9.29936092,0.69989679 C9.29936092,0.313354467 9.61304772,0 10,0 Z"],"printer":["M5.39767734,0.0204346229 L15.2292883,0.0208285564 C15.85694,0.0423763964 16.3416881,0.224012937 16.6358869,0.629402499 C16.870019,0.952023312 16.9906983,1.35829622 17.0155732,1.87113493 L17.015,3.964 L18.2137151,3.96428287 C18.8413668,3.98583071 19.3261148,4.16746725 19.6203137,4.57285681 C19.8544457,4.89547762 19.975125,5.30175053 20,5.81458924 L20,13.9123389 C19.9981107,14.5379231 19.9541484,15.0061831 19.7812289,15.3295666 C19.5131341,15.8309411 19.017303,16.0527552 18.1907591,16.1187993 L17.016,16.118 L17.0164211,18.0668032 C17.0164211,18.5244038 16.9340883,18.9258347 16.7591414,19.2664921 C16.5133781,19.7450435 16.0437057,19.9857313 15.4421305,20 L4.72478658,20 C4.13097303,20 3.64259551,19.7831749 3.33894863,19.3379195 C3.09561414,18.9811037 2.96902664,18.559141 2.95441204,18.0668032 L2.954,16.118 L1.9348091,16.1187993 C1.19681947,16.1187993 0.634806579,15.898114 0.335358972,15.3860307 C0.111763278,15.0036612 0.00779657364,14.5145062 0.00195846627,13.9103171 L0.00235646553,6.02450226 C-0.0195529111,5.38888452 0.110485952,4.8682898 0.427227446,4.48164692 C0.810188045,4.0141711 1.47442024,3.88827603 2.38283066,3.96388893 L3.016,3.963 L3.01720314,2.08104795 C2.99529377,1.44543021 3.12533263,0.92483549 3.44207412,0.53819261 C3.82503472,0.070716791 4.48926692,-0.0551782744 5.39767734,0.0204346229 Z M15.677,12.151 L4.293,12.151 L4.29321924,18.0464885 C4.30007527,18.2726889 4.35216699,18.4463297 4.44502808,18.5824974 C4.47757678,18.6302255 4.54439807,18.6598922 4.72478658,18.6598922 L15.4260508,18.6600854 C15.5053626,18.6581788 15.5411646,18.6553267 15.5568034,18.6539594 L15.5681141,18.6539248 L15.5681141,18.6539248 C15.6374816,18.518852 15.6773061,18.3246794 15.6773061,18.0668032 L15.677,12.151 Z M14.2989067,16.6846927 C14.6686931,16.6846927 14.9684642,16.9846861 14.9684642,17.3547466 C14.9684642,17.7248072 14.6686931,18.0248005 14.2989067,18.0248005 L5.71990267,18.0248005 C5.35011628,18.0248005 5.05034517,17.7248072 5.05034517,17.3547466 C5.05034517,16.9846861 5.35011628,16.6846927 5.71990267,16.6846927 L14.2989067,16.6846927 Z M14.2989067,14.788386 C14.6686931,14.788386 14.9684642,15.0883794 14.9684642,15.45844 C14.9684642,15.8285005 14.6686931,16.1284939 14.2989067,16.1284939 L5.71990267,16.1284939 C5.35011628,16.1284939 5.05034517,15.8285005 5.05034517,15.45844 C5.05034517,15.0883794 5.35011628,14.788386 5.71990267,14.788386 L14.2989067,14.788386 Z M2.32892323,5.3018215 C1.7603088,5.30399674 1.62881388,5.30399674 1.50850277,5.44262892 C1.38819165,5.5812611 1.32901854,5.64012118 1.34107346,6.00140251 L1.34104182,13.9038029 C1.34477103,14.287661 1.35671079,14.4718479 1.44396087,14.6122468 C1.53121094,14.7526456 1.6234678,14.7786915 1.9348091,14.7786915 L2.954,14.778 L2.954,12.151 L2.81983679,12.1518143 C2.45005039,12.1518143 2.15027929,11.8518209 2.15027929,11.4817604 C2.15027929,11.1116998 2.45005039,10.8117065 2.81983679,10.8117065 L17.2241403,10.8117065 C17.5939267,10.8117065 17.8936978,11.1116998 17.8936978,11.4817604 C17.8936978,11.8518209 17.5939267,12.1518143 17.2241403,12.1518143 L17.016,12.151 L17.016,14.778 L18.1356389,14.7809659 C18.3438556,14.7637536 18.4634113,14.7864401 18.5712667,14.6727059 C18.6791221,14.5589718 18.659757,14.2835733 18.660885,13.9103171 L18.6617266,5.84817342 C18.6497819,5.60998355 18.6281393,5.53006637 18.5538712,5.44262892 C18.479603,5.35519146 18.424012,5.31239868 18.1907591,5.30399674 L2.32892323,5.3018215 Z M14.2989067,12.8920794 C14.6686931,12.8920794 14.9684642,13.1920727 14.9684642,13.5621333 C14.9684642,13.9321938 14.6686931,14.2321872 14.2989067,14.2321872 L5.71990267,14.2321872 C5.35011628,14.2321872 5.05034517,13.9321938 5.05034517,13.5621333 C5.05034517,13.1920727 5.35011628,12.8920794 5.71990267,12.8920794 L14.2989067,12.8920794 Z M16.0839483,5.91427136 C17.1933075,5.91427136 18.0926208,6.81425141 18.0926208,7.92443307 C18.0926208,9.03461472 17.1933075,9.93459478 16.0839483,9.93459478 C14.9745891,9.93459478 14.0752758,9.03461472 14.0752758,7.92443307 C14.0752758,6.81425141 14.9745891,5.91427136 16.0839483,5.91427136 Z M16.0839483,7.25437917 C15.7141619,7.25437917 15.4143908,7.55437252 15.4143908,7.92443307 C15.4143908,8.29449362 15.7141619,8.59448697 16.0839483,8.59448697 C16.4537347,8.59448697 16.7535058,8.29449362 16.7535058,7.92443307 C16.7535058,7.55437252 16.4537347,7.25437917 16.0839483,7.25437917 Z M4.47766164,1.38781408 C4.39616318,1.48729836 4.34386521,1.69666687 4.35592014,2.0579482 L4.355,3.963 L15.676,3.964 L15.6772998,1.90471911 C15.6653552,1.66652924 15.6181107,1.50747817 15.552373,1.41689544 C15.5467023,1.40908146 15.4395852,1.36894437 15.2063324,1.36054243 L5.34376991,1.35836719 C4.78724844,1.31338126 4.49294099,1.36916274 4.47766164,1.38781408 Z"],"qq":["M18.4956198,13.6068179 C18.3618839,11.6758631 17.1236934,10.0574895 16.4079796,9.22028023 C16.5071482,8.97703308 16.7491195,7.56723963 15.8152348,6.60522894 C15.8169349,6.58211757 15.8169349,6.55900621 15.8169349,6.53705041 C15.8169349,2.74331935 13.2368519,0.0121334682 9.99998954,0 C6.7631272,0.0127112535 4.18304419,2.74331937 4.18304419,6.53705041 C4.18304419,6.55958399 4.18304419,6.58269536 4.18474423,6.60522894 C3.25085957,7.56723963 3.49339758,8.97703308 3.59199946,9.22028023 C2.87685235,10.0574895 1.63866184,11.6758631 1.50435927,13.6073956 C1.47999214,14.1152679 1.55536026,14.8548317 1.79166481,15.1835909 C2.08067038,15.5845732 2.87345231,15.1027011 3.44012988,13.8223314 C3.59766625,14.4157157 3.96147324,15.3216813 4.78542245,16.4708941 C3.4066959,16.8002311 3.01398834,18.2233136 3.4775306,19.0015889 C3.80450357,19.5493283 4.55308465,20 5.84340949,20 C8.13902036,20 9.15280655,19.354615 9.60558194,18.9045212 C9.6973837,18.8062978 9.83055293,18.7594973 9.99998954,18.7589195 C10.1694261,18.7589195 10.3025954,18.8062978 10.3943971,18.9045212 C10.8471725,19.354615 11.8609587,20 14.1560029,20 C15.4468944,20 16.1949088,19.5493283 16.5218818,19.0010111 C16.9859907,18.2233136 16.5927165,16.8002311 15.2151233,16.4708941 C16.0385058,15.3211036 16.4028795,14.4157157 16.5604159,13.8223314 C17.1270934,15.1032789 17.9193087,15.5845732 18.2083143,15.1835909 C18.4451855,14.8542539 18.5199869,14.1146902 18.4956198,13.6073956 L18.4956198,13.6068179 Z"],"qrcode":["M1.36339052,1.36363636 L1.36339052,7.72727273 L7.72587959,7.72727273 L7.72587959,1.36363636 L1.36339052,1.36363636 Z M9.08927011,10.9090909 L9.08927011,20 L0,20 L0,10.9090909 L9.08927011,10.9090909 Z M7.72587959,12.2727273 L1.36339052,12.2727273 L1.36339052,18.6363636 L7.72587959,18.6363636 L7.72587959,12.2727273 Z M5.99381387,14.146141 L5.99381387,16.8734137 L3.26703283,16.8734137 L3.26703283,14.146141 L5.99381387,14.146141 Z M9.08927011,0 L9.08927011,9.09090909 L0,9.09090909 L0,0 L9.08927011,0 Z M5.99381387,3.23705009 L3.26703283,3.23705009 L3.26703283,5.96432282 L5.99381387,5.96432282 L5.99381387,3.23705009 Z M19.9925664,16.9316101 L19.9925664,19.998886 L15.3832944,19.998886 L15.3832944,18.6352497 L18.6291758,18.6352497 L18.6291758,16.9316101 L19.9925664,16.9316101 Z M13.8426588,18.6333535 L13.8426588,19.9969899 L10.9058526,19.9969899 L10.9058526,18.6333535 L13.8426588,18.6333535 Z M12.2682678,10.9029735 L12.2682678,16.901918 L10.9048773,16.901918 L10.9048773,10.9029735 L12.2682678,10.9029735 Z M15.5384135,14.145591 L15.5384135,15.5075628 L16.9038428,15.5075628 L16.9038428,16.8711992 L14.175023,16.8711992 L14.175023,14.145591 L15.5384135,14.145591 Z M20,13.8508437 L20,15.3797994 L18.6366095,15.3797994 L18.6366095,13.8508437 L20,13.8508437 Z M19.9899867,10.9443803 L19.9899867,12.3080167 L15.3856451,12.3080167 L15.3856451,10.9443803 L19.9899867,10.9443803 Z M19.9963942,0 L19.9963942,9.09090909 L10.9071241,9.09090909 L10.9071241,0 L19.9963942,0 Z M18.6330037,1.36363636 L12.2705146,1.36363636 L12.2705146,7.72727273 L18.6330037,7.72727273 L18.6330037,1.36363636 Z M16.900938,3.23705009 L16.900938,5.96432282 L14.174157,5.96432282 L14.174157,3.23705009 L16.900938,3.23705009 Z"],"question-circle-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M10,13.6363636 C10.502077,13.6363636 10.9090909,14.0433775 10.9090909,14.5454545 C10.9090909,15.0475316 10.502077,15.4545455 10,15.4545455 C9.49792295,15.4545455 9.09090909,15.0475316 9.09090909,14.5454545 C9.09090909,14.0433775 9.49792295,13.6363636 10,13.6363636 Z M12.6801979,5.33016096 C13.4062304,6.06033413 13.6399501,6.89354474 13.5184358,7.76555944 C13.4220434,8.4572938 12.9989132,9.20105503 12.4337304,9.69167742 C11.7348621,10.2983491 11.5623589,10.4475859 11.430454,10.5808555 L11.3706888,10.6428384 C11.3404787,10.6748705 11.3084508,10.7096692 11.2686352,10.7526599 C11.0309996,11.0092461 10.8624832,11.3041657 10.7314044,11.667752 C10.6578418,11.8717997 10.5948901,12.1760239 10.5483684,12.5732897 C10.5045709,12.9472917 10.1658775,13.2149755 9.79187542,13.171178 C9.41787335,13.1273806 9.15018961,12.7886872 9.19398705,12.4146851 C9.25165092,11.9222726 9.33457799,11.5215143 9.4485874,11.2052753 C9.63806044,10.6797153 9.89656683,10.2273047 10.2681609,9.82607732 C10.438323,9.64234536 10.6339865,9.45508882 10.8827282,9.23330342 C10.9980656,9.13046524 11.4495688,8.73934587 11.5614212,8.6428146 C11.8743142,8.36132074 12.1194723,7.92452154 12.1678493,7.57735669 C12.2335546,7.10584059 12.1198944,6.70064197 11.7132235,6.29165187 C11.2836057,5.85958395 10.6068382,5.65233482 10.0876063,5.71960816 C9.33045563,5.81770702 9.0225055,5.92956724 8.50024708,6.38832425 C8.11835911,6.72377845 7.86638561,7.22077912 7.75052467,7.90690695 C7.68782599,8.27820823 7.3359995,8.52838006 6.96469822,8.46568138 C6.59339695,8.40298269 6.34322511,8.05115621 6.4059238,7.67985493 C6.57119854,6.70109882 6.96726099,5.91989245 7.60030927,5.36381652 C8.3589631,4.69740744 8.91042626,4.49709321 9.9123937,4.36727511 C10.8373198,4.24743872 11.9391065,4.58484308 12.6801979,5.33016096 Z"],"question-circle":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,13.6363636 C9.49792295,13.6363636 9.09090909,14.0433775 9.09090909,14.5454545 C9.09090909,15.0475316 9.49792295,15.4545455 10,15.4545455 C10.502077,15.4545455 10.9090909,15.0475316 10.9090909,14.5454545 C10.9090909,14.0433775 10.502077,13.6363636 10,13.6363636 Z M12.6801979,5.33016096 C11.9391065,4.58484308 10.8373198,4.24743872 9.9123937,4.36727511 C8.91042626,4.49709321 8.3589631,4.69740744 7.60030927,5.36381652 C6.96726099,5.91989245 6.57119854,6.70109882 6.4059238,7.67985493 C6.34322511,8.05115621 6.59339695,8.40298269 6.96469822,8.46568138 C7.3359995,8.52838006 7.68782599,8.27820823 7.75052467,7.90690695 C7.86638561,7.22077912 8.11835911,6.72377845 8.50024708,6.38832425 C9.0225055,5.92956724 9.33045563,5.81770702 10.0876063,5.71960816 C10.6068382,5.65233482 11.2836057,5.85958395 11.7132235,6.29165187 C12.1198944,6.70064197 12.2335546,7.10584059 12.1678493,7.57735669 C12.1194723,7.92452154 11.8743142,8.36132074 11.5614212,8.6428146 C11.4495688,8.73934587 10.9980656,9.13046524 10.8827282,9.23330342 C10.6339865,9.45508882 10.438323,9.64234536 10.2681609,9.82607732 C9.89656683,10.2273047 9.63806044,10.6797153 9.4485874,11.2052753 C9.33457799,11.5215143 9.25165092,11.9222726 9.19398705,12.4146851 C9.15018961,12.7886872 9.41787335,13.1273806 9.79187542,13.171178 C10.1658775,13.2149755 10.5045709,12.9472917 10.5483684,12.5732897 C10.5948901,12.1760239 10.6578418,11.8717997 10.7314044,11.667752 C10.8624832,11.3041657 11.0309996,11.0092461 11.2686352,10.7526599 C11.3084508,10.7096692 11.3404787,10.6748705 11.3706888,10.6428384 L11.430454,10.5808555 C11.5623589,10.4475859 11.7348621,10.2983491 12.4337304,9.69167742 C12.9989132,9.20105503 13.4220434,8.4572938 13.5184358,7.76555944 C13.6399501,6.89354474 13.4062304,6.06033413 12.6801979,5.33016096 Z"],"reddit":["M20,9.78704647 C20,8.58239242 18.9656289,7.60265795 17.6955643,7.60265795 C17.1453146,7.60265795 16.6305866,7.79347956 16.2152743,8.12725853 C16.2018699,8.13509471 16.1880187,8.14250731 16.1748378,8.15055528 C14.6764519,7.24177002 12.6894764,6.66146902 10.4916055,6.58268363 L11.8034472,3.04623612 L15.0776895,3.78834368 C15.0803704,4.76956067 15.9223887,5.56736866 16.9587704,5.56736866 C17.9958223,5.56736866 18.840298,4.76744278 18.840298,3.78389612 C18.840298,2.79992587 17.9958223,2 16.9587704,2 C16.1703696,2 15.4967997,2.46212292 15.2175419,3.1140085 L11.3383153,2.23508544 L9.72733264,6.57463566 C7.43540766,6.61551087 5.35839952,7.20343627 3.80416206,8.1427191 C3.3857221,7.79856248 2.86362164,7.60244616 2.3033187,7.60244616 C1.03280721,7.60244616 -1.687539e-13,8.58239242 -1.687539e-13,9.78683469 C-1.687539e-13,10.5319073 0.40548239,11.2202205 1.06252025,11.6209247 C1.02253052,11.8380081 0.997062207,12.0580566 0.997062207,12.2823408 C0.997062207,15.4350272 5.02798164,18 9.9822392,18 C14.9373904,18 18.9685332,15.4350272 18.9685332,12.2823408 C18.9685332,12.0648338 18.9455224,11.8509272 18.9077667,11.6395621 C19.5824537,11.241823 20,10.5435557 20,9.78704647 L20,9.78704647 Z M13.0377668,12.6150608 C12.2558449,12.6150608 11.6227115,12.0148517 11.6227115,11.2727441 C11.6227115,10.5319073 12.2558449,9.93127457 13.0377668,9.93127457 C13.8196888,9.93127457 14.4539392,10.5319073 14.4539392,11.2727441 C14.4539392,12.0148517 13.8194654,12.6150608 13.0377668,12.6150608 L13.0377668,12.6150608 Z M13.3194821,14.9036494 C13.277035,14.9447364 12.2621002,15.9246826 9.96637736,15.9246826 C7.65792031,15.9246826 6.73525239,14.9316055 6.69660311,14.8888242 C6.56725087,14.7454432 6.58489997,14.528148 6.73636942,14.4053106 C6.88761547,14.2835321 7.11437284,14.2992045 7.24528892,14.4404675 C7.2658423,14.4624935 8.03614714,15.2391227 9.96637736,15.2391227 C11.9287781,15.2391227 12.7900093,14.4347492 12.7991689,14.426913 C12.9376808,14.2922154 13.1668957,14.289674 13.3094289,14.4211948 C13.4517387,14.552292 13.456877,14.7666221 13.3194821,14.9036494 L13.3194821,14.9036494 Z M5.71249846,11.2727441 C5.71249846,10.5319073 6.34540844,9.93127457 7.12867084,9.93127457 C7.90925237,9.93127457 8.54372619,10.5319073 8.54372619,11.2727441 C8.54372619,12.0148517 7.90925237,12.6150608 7.12867084,12.6150608 C6.34563185,12.6150608 5.71249846,12.0148517 5.71249846,11.2727441 L5.71249846,11.2727441 Z"],"reload":["M19.295346,12 C19.683732,11.997321 20,12.315434 20,12.7087815 L20,15.9132194 C20,16.3046684 19.6866632,16.6220005 19.3001428,16.6220005 C18.9136223,16.6220005 18.6002855,16.3046684 18.6002855,15.9132194 L18.6006646,14.7880072 C16.7783174,17.8441657 13.3981233,20 9.75558622,20 C5.34669464,20 1.65005079,17.2790232 0.0473577091,13.0847914 C-0.0921406706,12.7197255 0.0869918429,12.3092534 0.447461376,12.1679763 C0.80793091,12.0266992 1.21323498,12.2081158 1.35273336,12.5731817 C2.75210409,16.2353209 5.94083219,18.5824378 9.75558622,18.5824378 C13.1270432,18.5824378 16.2763668,16.4010153 17.7430824,13.4292559 L16.2715084,13.4386023 C15.884997,13.4412853 15.56952,13.1261356 15.566854,12.7346958 C15.5642216,12.343256 15.8754035,12.0237564 16.2619149,12.0210734 L19.295346,12 Z M10.2444138,0 C14.6533054,0 18.3499492,2.72097676 19.9526423,6.9152086 C20.0921407,7.28027447 19.9130082,7.69074656 19.5525386,7.83202368 C19.1920691,7.9733008 18.786765,7.79188418 18.6472666,7.4268183 C17.2478959,3.76467906 14.0591678,1.4175622 10.2444138,1.4175622 C6.87295684,1.4175622 3.72363319,3.59898468 2.25691759,6.57074409 L3.72849164,6.56139765 C4.11500304,6.5587147 4.43048002,6.87386439 4.43314598,7.26530419 C4.43577836,7.65674399 4.12459654,7.97624361 3.73808514,7.97892656 L0.704653993,8 C0.316268039,8.00267895 4.36983782e-13,7.68456603 4.36983782e-13,7.29121854 L4.36983782e-13,4.0867806 C4.36983782e-13,3.69533161 0.31333676,3.3779995 0.699857241,3.3779995 C1.08637772,3.3779995 1.39971448,3.69533161 1.39971448,4.0867806 L1.39933538,5.21199282 C3.22168264,2.1558343 6.60187665,0 10.2444138,0 Z"],"right-circle-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M8.74858635,5.64577005 L12.6187299,9.61728273 C12.8785407,9.88389868 12.8764703,10.3096256 12.6140786,10.5737019 L8.7439351,14.4686937 C8.47852194,14.735811 8.04682076,14.7371924 7.77970352,14.4717792 C7.51258627,14.2063661 7.51120484,13.7746649 7.776618,13.5075477 L11.1738765,10.088477 L7.77196674,6.59746236 C7.50916416,6.3277763 7.51474433,5.89610897 7.78443039,5.6333064 C8.05411645,5.37050382 8.48578378,5.37608399 8.74858635,5.64577005 Z"],"right-circle":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M8.74858635,5.64577005 C8.48578378,5.37608399 8.05411645,5.37050382 7.78443039,5.6333064 C7.51474433,5.89610897 7.50916416,6.3277763 7.77196674,6.59746236 L7.77196674,6.59746236 L11.1738765,10.088477 L7.776618,13.5075477 C7.51120484,13.7746649 7.51258627,14.2063661 7.77970352,14.4717792 C8.04682076,14.7371924 8.47852194,14.735811 8.7439351,14.4686937 L8.7439351,14.4686937 L12.6140786,10.5737019 C12.8764703,10.3096256 12.8785407,9.88389868 12.6187299,9.61728273 L12.6187299,9.61728273 Z"],"right-square-o":["M1.81818182,1.36363636 C1.5671433,1.36363636 1.36363636,1.5671433 1.36363636,1.81818182 L1.36363636,18.1818182 C1.36363636,18.4328567 1.5671433,18.6363636 1.81818182,18.6363636 L18.1818182,18.6363636 C18.4328567,18.6363636 18.6363636,18.4328567 18.6363636,18.1818182 L18.6363636,1.81818182 C18.6363636,1.5671433 18.4328567,1.36363636 18.1818182,1.36363636 L1.81818182,1.36363636 Z M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M8.74858635,5.62671923 C8.48578378,5.35703317 8.05411645,5.35145301 7.78443039,5.61425558 C7.51474433,5.87705816 7.50916416,6.30872549 7.77196674,6.57841155 L7.77196674,6.57841155 L11.1738765,10.0694262 L7.776618,13.4884968 C7.51120484,13.7556141 7.51258627,14.1873153 7.77970352,14.4527284 C8.04682076,14.7181416 8.47852194,14.7167602 8.7439351,14.4496429 L8.7439351,14.4496429 L12.6140786,10.5546511 C12.8764703,10.2905747 12.8785407,9.86484786 12.6187299,9.59823192 L12.6187299,9.59823192 Z"],"right-square":["M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M8.74858635,5.62671923 C8.48578378,5.35703317 8.05411645,5.35145301 7.78443039,5.61425558 C7.51474433,5.87705816 7.50916416,6.30872549 7.77196674,6.57841155 L7.77196674,6.57841155 L11.1738765,10.0694262 L7.776618,13.4884968 C7.51120484,13.7556141 7.51258627,14.1873153 7.77970352,14.4527284 C8.04682076,14.7181416 8.47852194,14.7167602 8.7439351,14.4496429 L8.7439351,14.4496429 L12.6140786,10.5546511 C12.8764703,10.2905747 12.8785407,9.86484786 12.6187299,9.59823192 L12.6187299,9.59823192 Z"],"right":["M7.05307007,2.15808105 L14.2962587,9.41418482 C14.4320862,9.5496827 14.5,9.71077067 14.5,9.89744874 C14.5,10.0841268 14.4320862,10.2497803 14.2962587,10.3944092 C11.6760845,12.9498393 9.15095523,15.4168071 6.72087106,17.7953128 C6.5962677,17.912323 6.09560574,18.2032928 5.70989407,17.7705688 C5.3241824,17.3378448 5.55848694,16.9602509 5.70989407,16.8045692 C7.97174895,14.594209 10.3279004,12.2918355 12.7783485,9.89744874 L6.03100586,3.13816833 C5.78524099,2.79925826 5.80526899,2.48632792 6.09108986,2.19937732 C6.37691073,1.91242672 6.6975708,1.8986613 7.05307007,2.15808105 Z"],"rollback":["M2.31002808,4.32430661 L13.4291382,4.32430661 C14.9323222,4.3332202 16.3186188,4.84469604 17.588028,5.85873413 C19.4921417,7.37979126 20,9.77059937 20,10.6442261 C20,11.2266439 20,14.1119762 20,19.300223 C19.9151291,19.766741 19.6818447,20 19.3001469,20 C18.918449,20 18.6851647,19.766741 18.6002938,19.300223 C18.6002938,16.1679861 18.592187,13.2826538 18.5759735,10.6442261 C18.5759735,9.34576416 17.2865601,5.89025879 13.4291382,5.72167969 C9.59417725,5.72167969 5.94228109,5.72167969 2.47344971,5.72167969 C3.41463216,6.66485596 4.40236601,7.65355241 5.43665126,8.68776905 C5.59403992,8.84109497 5.7913208,9.24526978 5.49713135,9.60702515 C5.20294189,9.96878052 4.71875649,9.95317983 4.4470171,9.67740321 C4.26585751,9.49355213 2.83951314,8.06792704 0.167984009,5.40052795 C0.0559946696,5.29048603 -1.42108547e-14,5.13733214 -1.42108547e-14,4.94106628 C-1.42108547e-14,4.74480041 0.0684042783,4.57976658 0.205212835,4.44596479 L4.49057007,0.157913208 C4.80293532,-0.0733969681 5.11829572,-0.0577915898 5.43665126,0.204729343 C5.7550068,0.467250276 5.754871,0.797146264 5.43624386,1.19441731 L2.31002808,4.32430661 Z"],"safari":["M10.5912518,9.96625001 C10.5912518,10.1595833 10.5297917,10.3270833 10.406875,10.46875 C10.2839583,10.6104167 10.1295833,10.6810417 9.94375,10.6806269 C9.75041667,10.6806269 9.58291667,10.6191667 9.44125,10.49625 C9.29958333,10.3733334 9.22895833,10.2189583 9.22937316,10.033125 C9.22937316,9.83979168 9.29270833,9.67229168 9.41937499,9.53062501 C9.54604166,9.38895834 9.70229166,9.31833334 9.888125,9.31874817 C10.0739583,9.31916667 10.2377083,9.380625 10.379375,9.503125 C10.5210417,9.625625 10.5916667,9.78 10.5912518,9.96625001 Z M10.75875,10.61375 L14.665,4.129375 C14.5979167,4.18895834 14.346875,4.42145834 13.911875,4.826875 C13.476875,5.23229167 13.01,5.665625 12.51125,6.126875 C12.0125,6.588125 11.5045833,7.060625 10.9875,7.54437499 C10.4704167,8.02812499 10.0352083,8.43916665 9.681875,8.77749999 C9.32854167,9.11583332 9.140625,9.30749999 9.118125,9.35249999 L5.22312499,15.825625 C5.27520833,15.7735416 5.52437499,15.5429166 5.97062499,15.13375 C6.41687499,14.7245833 6.88562499,14.29125 7.376875,13.83375 C7.86812501,13.37625 8.37416668,12.90375 8.89500001,12.41625 C9.41583333,11.92875 9.85104167,11.5158333 10.200625,11.1775 C10.5502083,10.8391667 10.73625,10.65125 10.75875,10.61375 L10.75875,10.61375 Z M17.98,10 C17.98,11.4954167 17.593125,12.875625 16.819375,14.140625 C16.796875,14.125625 16.7335417,14.0847917 16.629375,14.018125 C16.5252083,13.9514583 16.4266667,13.89 16.33375,13.83375 C16.2408334,13.7775 16.179375,13.7495833 16.149375,13.75 C16.0527083,13.75 16.004375,13.7983333 16.004375,13.895 C16.004375,13.9695833 16.2239583,14.1333333 16.663125,14.38625 C16.1127083,15.2195833 15.42625,15.9283333 14.60375,16.5125 C13.78125,17.0966667 12.8827083,17.5077083 11.908125,17.745625 L11.729375,16.998125 C11.721875,16.9235417 11.6660417,16.88625 11.561875,16.88625 C11.5247917,16.88625 11.495,16.9066667 11.4725,16.9475 C11.45,16.9883333 11.4425,17.02375 11.45,17.05375 L11.62875,17.8125 C11.0929167,17.9241667 10.5497916,17.98 9.99937498,17.98 C8.51854165,17.98 7.13458332,17.589375 5.84749997,16.808125 C5.85499997,16.793125 5.90333331,16.716875 5.99249998,16.579375 C6.08166665,16.441875 6.16166665,16.3172917 6.23249997,16.205625 C6.3033333,16.0939583 6.33874997,16.0233333 6.33874997,15.99375 C6.33874997,15.8970833 6.29041663,15.84875 6.19374996,15.84875 C6.14916663,15.84875 6.0858333,15.9027083 6.00374996,16.010625 C5.92166663,16.1185416 5.83791663,16.246875 5.75249996,16.395625 C5.66708329,16.544375 5.61687496,16.63 5.60187495,16.6525 C4.76104162,16.0945833 4.04666662,15.3970833 3.45874995,14.56 C2.87083328,13.7229166 2.46166662,12.8133333 2.23124996,11.83125 L3.00124996,11.66375 C3.07583329,11.64125 3.11312496,11.5854167 3.11312496,11.49625 C3.11312496,11.4591667 3.09270829,11.429375 3.05187496,11.406875 C3.01104162,11.384375 2.97187496,11.376875 2.93437496,11.384375 L2.17562496,11.551875 C2.07145828,11.0160416 2.01937495,10.4989583 2.01937495,10.000625 C2.01937495,8.46770832 2.42479162,7.05770832 3.23562496,5.77062499 C3.25062496,5.77812499 3.31937496,5.82270832 3.44187496,5.90437499 C3.56437496,5.98604166 3.67604163,6.05666666 3.77687497,6.11625 C3.87770831,6.17583334 3.94291664,6.20562501 3.97249997,6.20562501 C4.06916664,6.20562501 4.11749998,6.16104167 4.11749998,6.071875 C4.11749998,6.02729167 4.07104164,5.96958334 3.97812497,5.89875001 C3.8852083,5.82791668 3.76437497,5.74791668 3.61562498,5.65875001 L3.39249999,5.52500001 C3.96541665,4.69166667 4.66854165,3.98854168 5.50187498,3.41562501 C6.33520831,2.84270835 7.24291664,2.44458335 8.22499997,2.22125001 L8.39249997,2.96875001 C8.40749997,3.04333334 8.4633333,3.08062501 8.55999996,3.08062501 C8.59708329,3.08062501 8.62687496,3.06020834 8.64937497,3.01937501 C8.67187498,2.97854167 8.67937498,2.93937501 8.67187498,2.90187501 L8.50437498,2.16500001 C9.03270831,2.06833334 9.53124998,2.02000001 9.99999998,2.02000001 C11.5179167,2.02000001 12.9279167,2.42541668 14.23,3.23625002 C13.94,3.65291668 13.795,3.89479168 13.795,3.96187501 C13.795,4.05854168 13.8395833,4.10687501 13.92875,4.10687501 C14.0104166,4.10687501 14.1889583,3.86875001 14.464375,3.39250001 C15.2902083,3.95041668 15.9877083,4.64229168 16.556875,5.46812501 C17.1260417,6.29395834 17.5260417,7.19062501 17.756875,8.15812501 L17.131875,8.29187501 C17.0572917,8.30687502 17.02,8.36645835 17.02,8.47062501 C17.02,8.50770834 17.0404167,8.53750001 17.08125,8.56000002 C17.1220833,8.58250003 17.1575,8.59000003 17.1875,8.58250003 L17.82375,8.43750002 C17.9279167,8.97333335 17.98,9.49416668 17.98,10 L17.98,10 Z M18.92875,10 C18.92875,8.78708333 18.6925,7.63 18.22,6.52875001 C17.7475,5.42750002 17.113125,4.47875002 16.316875,3.68250002 C15.520625,2.88625002 14.571875,2.25187501 13.470625,1.77937501 C12.369375,1.306875 11.2122917,1.070625 9.999375,1.070625 C8.78645833,1.070625 7.629375,1.306875 6.52812501,1.77937501 C5.42687502,2.25187501 4.47812502,2.88625002 3.68187502,3.68250002 C2.88562502,4.47875002 2.25125001,5.42750002 1.77875001,6.52875001 C1.30625,7.63 1.07,8.78708333 1.07,10 C1.07,11.2129167 1.30625,12.37 1.77875001,13.47125 C2.25125001,14.5725 2.88562502,15.52125 3.68187502,16.3175 C4.47812502,17.11375 5.42687502,17.748125 6.52812501,18.220625 C7.629375,18.693125 8.78645833,18.929375 9.999375,18.929375 C11.2122917,18.929375 12.369375,18.693125 13.470625,18.220625 C14.571875,17.748125 15.520625,17.11375 16.316875,16.3175 C17.113125,15.52125 17.7475,14.5725 18.22,13.47125 C18.6925,12.37 18.92875,11.2129167 18.92875,10 Z M20,10 C20,11.3541667 19.7358333,12.64875 19.2075,13.88375 C18.6791667,15.11875 17.9685417,16.1827083 17.075625,17.075625 C16.1827083,17.9685417 15.11875,18.6791667 13.88375,19.2075 C12.64875,19.7358333 11.3541667,20 10,20 C8.64583333,20 7.35124999,19.7358333 6.11625,19.2075 C4.88125,18.6791667 3.81729167,17.9685417 2.924375,17.075625 C2.03145832,16.1827083 1.32083332,15.11875 0.792499994,13.88375 C0.264166665,12.64875 0,11.3541667 0,10 C0,8.64583333 0.264166665,7.35124999 0.792499994,6.11625 C1.32083332,4.88125 2.03145832,3.81729167 2.924375,2.924375 C3.81729167,2.03145832 4.88125,1.32083332 6.11625,0.792499994 C7.35124999,0.264166665 8.64583333,0 10,0 C11.3541667,0 12.64875,0.264166665 13.88375,0.792499994 C15.11875,1.32083332 16.1827083,2.03145832 17.075625,2.924375 C17.9685417,3.81729167 18.6791667,4.88125 19.2075,6.11625 C19.7358333,7.35124999 20,8.64583333 20,10 L20,10 Z"],"safety":["M2.84210526,3.86504044 L2.84210526,11.2988054 C2.84210526,15.3455734 6.0468039,18.6261272 10,18.6261272 C13.9531961,18.6261272 17.1578947,15.3455734 17.1578947,11.2988054 L17.1578947,3.86837364 L9.9567671,1.44685758 L2.84210526,3.86504044 Z M9.95451486,0 L18.5,2.87358183 L18.5,11.2988054 C18.5,16.1043425 14.6944204,20 10,20 C5.30557963,20 1.5,16.1043425 1.5,11.2988054 L1.5,2.87358183 L9.95451486,0 Z M14.3737014,6.48544473 C14.0967483,6.23334258 13.6725898,6.25880251 13.4263169,6.54231108 L13.4263169,6.54231108 L9.11047784,11.5106915 L6.32211371,8.42587388 C6.07040936,8.1474088 5.64584183,8.13054472 5.37381559,8.38820691 C5.10178936,8.6458691 5.08531523,9.08048613 5.33701959,9.35895121 L5.33701959,9.35895121 L8.62781212,12.9996145 C8.89702337,13.2974478 9.35842515,13.2927747 9.62182714,12.9895471 L9.62182714,12.9895471 L14.4292528,7.45525373 C14.6755257,7.17174516 14.6506545,6.73754688 14.3737014,6.48544473 Z"],"save":["M2.72727273,1.36363636 C1.97415716,1.36363636 1.36363636,1.97415716 1.36363636,2.72727273 L1.36363636,17.2727273 C1.36363636,18.0258428 1.97415716,18.6363636 2.72727273,18.6363636 L17.2727273,18.6363636 C18.0258428,18.6363636 18.6363636,18.0258428 18.6363636,17.2727273 L18.6363636,2.72727273 C18.6363636,1.97415716 18.0258428,1.36363636 17.2727273,1.36363636 L2.72727273,1.36363636 Z M17.2727273,0 C18.7789584,0 20,1.22104159 20,2.72727273 L20,17.2727273 C20,18.7789584 18.7789584,20 17.2727273,20 L2.72727273,20 C1.22104159,20 0,18.7789584 0,17.2727273 L0,2.72727273 C0,1.22104159 1.22104159,0 2.72727273,0 L17.2727273,0 Z M13.9551121,2.43531901 C13.5785543,2.43531901 13.2732939,2.74057941 13.2732939,3.1171372 L13.2732939,3.1171372 L13.2732939,5 C13.2732939,5.37655778 13.5785543,5.68181818 13.9551121,5.68181818 C14.3316699,5.68181818 14.6369303,5.37655778 14.6369303,5 L14.6369303,5 L14.6369303,3.1171372 C14.6369303,2.74057941 14.3316699,2.43531901 13.9551121,2.43531901 Z M2.74352037,0.93895244 L4.10714316,0.945037251 L4.08570734,5.39140486 C4.05609642,5.79699746 4.18569012,6.12543845 4.50077186,6.42819766 C4.81430953,6.72947317 5.24532108,6.86648432 5.88464139,6.82809445 L14.5095222,6.83246994 C14.992486,6.77748966 15.3312375,6.61903949 15.5594272,6.36310688 C15.7883676,6.10633222 15.9058504,5.76031939 15.9048323,5.29028972 L15.9049552,0.941975576 L17.2685916,0.942014114 L17.2685916,5.28882981 C17.2701781,6.07752771 17.0421196,6.74921064 16.57725,7.27059836 C16.1116296,7.79282813 15.4625833,8.09641797 14.5866418,8.19173081 L5.9269026,8.19041981 C4.96826314,8.24995374 4.16175588,7.99357897 3.55595447,7.41146986 C2.95169713,6.83084443 2.66618136,6.10723611 2.72388756,5.33871738 L2.74352037,0.93895244 Z"],"search":["M8.19546398,0 C12.7216937,0 16.390928,3.61950128 16.390928,8.08438239 C16.390928,10.0960164 15.6461041,11.9360453 14.4136555,13.3507563 L19.8015213,18.8243429 C20.0717775,19.0989162 20.0652194,19.5376183 19.7868733,19.8042115 C19.5085273,20.0708046 19.0637973,20.0643354 18.7935411,19.7897621 L13.4110382,14.3206504 C11.9940161,15.4751548 10.1768537,16.1687648 8.19546398,16.1687648 C3.6692342,16.1687648 0,12.5492635 0,8.08438239 C0,3.61950128 3.6692342,0 8.19546398,0 Z M8.19546398,1.38589412 C4.44515931,1.38589412 1.40493668,4.38490947 1.40493668,8.08438239 C1.40493668,11.7838553 4.44515931,14.7828707 8.19546398,14.7828707 C11.9457686,14.7828707 14.9859913,11.7838553 14.9859913,8.08438239 C14.9859913,4.38490947 11.9457686,1.38589412 8.19546398,1.38589412 Z"],"setting-o":["M11.078035,0 C11.3724371,0 11.6350302,0.183056678 11.7339285,0.457230801 L12.4396543,2.41370379 C12.6930786,2.47650967 12.9108093,2.54030436 13.0942558,2.60592238 C13.2952001,2.67779926 13.5540423,2.78741449 13.8746747,2.93586046 L15.5184936,2.06596774 C15.794148,1.92009416 16.1343396,1.97375545 16.3504064,2.19719235 L17.7960017,3.69209722 C17.98787,3.8905102 18.0422042,4.18265582 17.9342767,4.43557836 L17.162857,6.24336136 C17.2913496,6.47797752 17.3939318,6.67854463 17.4711247,6.84658462 C17.5553742,7.02998593 17.6588292,7.28241713 17.7829588,7.60671302 L19.580333,8.37623211 C19.8497082,8.4915611 20.0170118,8.76152727 19.9986241,9.05119919 L19.8669066,11.126215 C19.8494975,11.4004703 19.668825,11.6382294 19.4072566,11.7310995 L17.7049419,12.3355083 C17.6562729,12.5705675 17.6053791,12.772402 17.551477,12.9424906 C17.4883274,13.1417599 17.389065,13.3979932 17.2526724,13.7155635 L18.1084613,15.6068822 C18.2316885,15.879218 18.1635045,16.1990386 17.9395819,16.3990196 L16.3138559,17.8509252 C16.0957241,18.0457347 15.7773686,18.084139 15.5182641,17.9469002 L13.8421792,17.0591354 C13.5477413,17.2124998 13.2783109,17.3348831 13.0324612,17.4263047 C12.8127426,17.5080092 12.5685018,17.5992352 12.2997543,17.6999771 L11.6499659,19.5002547 C11.5529743,19.7689756 11.2984077,19.9507082 11.0099151,19.9571805 L9.10927684,20 C8.81300029,20.0064684 8.54492708,19.8269822 8.44118272,19.5525044 L7.6751041,17.5256808 C7.3232066,17.4026533 7.06612795,17.3070148 6.89898146,17.2366139 C6.74058527,17.1698987 6.53544077,17.0722593 6.28058727,16.9426265 L4.38190658,17.7549437 C4.12577479,17.8645252 3.82821583,17.812324 3.62584584,17.6223069 L2.22106797,16.3032781 C2.00593124,16.1012735 1.94386481,15.7866753 2.0664447,15.519534 L2.88322205,13.7395109 C2.76017205,13.4979963 2.65957084,13.2838441 2.58116863,13.0959926 C2.49857708,12.8981035 2.39862152,12.628586 2.28009144,12.2848943 L0.491710371,11.7412063 C0.190471763,11.6496264 -0.0110085834,11.3694211 0.000465944291,11.0580168 L0.071249487,9.13703967 C0.0806273232,8.88253689 0.2313194,8.65393727 0.463026654,8.5427144 L2.34096885,7.64127468 C2.42759746,7.32228988 2.50386559,7.07419005 2.57165467,6.89274074 C2.63878533,6.7130538 2.74293335,6.47740464 2.8854431,6.18143219 L2.06997455,4.45996626 C1.94312228,4.19217928 2.00336838,3.87420996 2.21965377,3.66998322 L3.62443163,2.34352648 C3.82439931,2.15470767 4.11840992,2.10075785 4.37358276,2.20606012 L6.27210909,2.98952564 C6.4823493,2.85093927 6.67247185,2.73658268 6.84371422,2.6461118 C7.04934485,2.53747289 7.3225817,2.42318736 7.66837893,2.29976859 L8.32789678,0.458652854 C8.42637398,0.183743082 8.68933933,0 8.98430143,0 L11.078035,0 Z M10.5870708,1.37705446 L9.47640909,1.37705446 L8.86948809,3.07134033 C8.79801391,3.27086827 8.63769115,3.42680114 8.43474473,3.49417973 C7.99915007,3.63879796 7.68401915,3.76347045 7.50006723,3.86065605 C7.30479682,3.96382144 7.05649639,4.12077045 6.75923344,4.33037214 C6.56321164,4.46858816 6.30888789,4.49688254 6.08670302,4.40519344 L4.25716409,3.65019697 L3.54351334,4.32405928 L4.2874951,5.89461557 C4.37724721,6.08408357 4.375001,6.30362324 4.2813906,6.49125715 C4.08134734,6.89222649 3.94589193,7.18842613 3.87809235,7.36990353 C3.8103478,7.55123365 3.71917424,7.8615808 3.60874921,8.29154274 C3.55823748,8.48822027 3.42255355,8.65285199 3.23793163,8.74147321 L1.44780841,9.60075854 L1.41171745,10.5802222 L3.03130231,11.0725942 C3.24698647,11.1381646 3.41716675,11.3030041 3.48790571,11.5148681 C3.64831871,11.9953067 3.7761118,12.3491471 3.86857839,12.5706968 C3.95934025,12.788162 4.09417527,13.0648832 4.27239921,13.3979523 C4.37321509,13.5863595 4.38009307,13.810311 4.29102495,14.0044194 L3.53951667,15.6421999 L4.25118794,16.3104301 L6.03251181,15.5483219 C6.22679544,15.465201 6.44877026,15.4739754 6.6357229,15.5721659 C7.00102332,15.7640277 7.27322021,15.8974495 7.44479999,15.9697176 C7.61953128,16.0433131 7.9548478,16.1653796 8.44065086,16.3314709 C8.63693275,16.3985778 8.7926767,16.548807 8.86538101,16.7411617 L9.57250939,18.6120199 L10.4993142,18.591227 L11.0961476,16.9376646 C11.1646975,16.747743 11.3140075,16.5970812 11.5046571,16.5254566 C11.8958011,16.3785088 12.2416349,16.2491584 12.5421977,16.1373911 C12.8039897,16.0400412 13.1223034,15.8867935 13.4934399,15.6776981 C13.7015148,15.5604703 13.9559143,15.5571841 14.1670155,15.6689972 L15.7439676,16.5042547 L16.6305025,15.7125069 L15.8561342,14.0011301 C15.7756691,13.8232999 15.7751619,13.6200892 15.8547382,13.4418685 C16.0370606,13.0335353 16.160351,12.7267619 16.2224704,12.5307434 C16.2832183,12.3390526 16.3456807,12.0622192 16.407072,11.7055024 C16.4492368,11.4605022 16.6216614,11.2569821 16.8582214,11.1729911 L18.5056035,10.5880863 L18.5779926,9.44770174 L16.9575114,8.75391676 C16.7827815,8.67910873 16.6466533,8.53682007 16.5808114,8.36016907 C16.4198441,7.92830106 16.2929314,7.61166725 16.2030747,7.41605965 C16.1143251,7.22286224 15.9738341,6.95669259 15.7830295,6.62172026 C15.677285,6.43607749 15.6644194,6.21248859 15.7481863,6.01618508 L16.4733058,4.31690418 L15.7093237,3.52686246 L14.2211258,4.31440213 C14.0242762,4.41857298 13.7888454,4.4230994 13.5880489,4.32657373 C13.1546705,4.11824271 12.829188,3.97550384 12.6204677,3.90084548 C12.4166956,3.82795707 12.1292655,3.75057315 11.7626377,3.671335 C11.5278825,3.62059807 11.3361711,3.45377367 11.2554479,3.22998614 L10.5870708,1.37705446 Z M10.0237083,5.64149212 C12.459442,5.64149212 14.4339942,7.59383168 14.4339942,10.0021646 C14.4339942,12.4104975 12.459442,14.362837 10.0237083,14.362837 C7.58797468,14.362837 5.61342244,12.4104975 5.61342244,10.0021646 C5.61342244,7.59383168 7.58797468,5.64149212 10.0237083,5.64149212 Z M10.0237083,7.01854658 C8.35715373,7.01854658 7.00614429,8.35435786 7.00614429,10.0021646 C7.00614429,11.6499713 8.35715373,12.9857826 10.0237083,12.9857826 C11.6902629,12.9857826 13.0412723,11.6499713 13.0412723,10.0021646 C13.0412723,8.35435786 11.6902629,7.01854658 10.0237083,7.01854658 Z"],"setting":["M11.078035,0 C11.3724371,0 11.6350302,0.183056678 11.7339285,0.457230801 L12.4396543,2.41370379 C12.6930786,2.47650967 12.9108093,2.54030436 13.0942558,2.60592238 C13.2952001,2.67779926 13.5540423,2.78741449 13.8746747,2.93586046 L15.5184936,2.06596774 C15.794148,1.92009416 16.1343396,1.97375545 16.3504064,2.19719235 L17.7960017,3.69209722 C17.98787,3.8905102 18.0422042,4.18265582 17.9342767,4.43557836 L17.162857,6.24336136 C17.2913496,6.47797752 17.3939318,6.67854463 17.4711247,6.84658462 C17.5553742,7.02998593 17.6588292,7.28241713 17.7829588,7.60671302 L19.580333,8.37623211 C19.8497082,8.4915611 20.0170118,8.76152727 19.9986241,9.05119919 L19.8669066,11.126215 C19.8494975,11.4004703 19.668825,11.6382294 19.4072566,11.7310995 L17.7049419,12.3355083 C17.6562729,12.5705675 17.6053791,12.772402 17.551477,12.9424906 C17.4883274,13.1417599 17.389065,13.3979932 17.2526724,13.7155635 L18.1084613,15.6068822 C18.2316885,15.879218 18.1635045,16.1990386 17.9395819,16.3990196 L16.3138559,17.8509252 C16.0957241,18.0457347 15.7773686,18.084139 15.5182641,17.9469002 L13.8421792,17.0591354 C13.5477413,17.2124998 13.2783109,17.3348831 13.0324612,17.4263047 C12.8127426,17.5080092 12.5685018,17.5992352 12.2997543,17.6999771 L11.6499659,19.5002547 C11.5529743,19.7689756 11.2984077,19.9507082 11.0099151,19.9571805 L9.10927684,20 C8.81300029,20.0064684 8.54492708,19.8269822 8.44118272,19.5525044 L7.6751041,17.5256808 C7.3232066,17.4026533 7.06612795,17.3070148 6.89898146,17.2366139 C6.74058527,17.1698987 6.53544077,17.0722593 6.28058727,16.9426265 L4.38190658,17.7549437 C4.12577479,17.8645252 3.82821583,17.812324 3.62584584,17.6223069 L2.22106797,16.3032781 C2.00593124,16.1012735 1.94386481,15.7866753 2.0664447,15.519534 L2.88322205,13.7395109 C2.76017205,13.4979963 2.65957084,13.2838441 2.58116863,13.0959926 C2.49857708,12.8981035 2.39862152,12.628586 2.28009144,12.2848943 L0.491710371,11.7412063 C0.190471763,11.6496264 -0.0110085834,11.3694211 0.000465944291,11.0580168 L0.071249487,9.13703967 C0.0806273232,8.88253689 0.2313194,8.65393727 0.463026654,8.5427144 L2.34096885,7.64127468 C2.42759746,7.32228988 2.50386559,7.07419005 2.57165467,6.89274074 C2.63878533,6.7130538 2.74293335,6.47740464 2.8854431,6.18143219 L2.06997455,4.45996626 C1.94312228,4.19217928 2.00336838,3.87420996 2.21965377,3.66998322 L3.62443163,2.34352648 C3.82439931,2.15470767 4.11840992,2.10075785 4.37358276,2.20606012 L6.27210909,2.98952564 C6.4823493,2.85093927 6.67247185,2.73658268 6.84371422,2.6461118 C7.04934485,2.53747289 7.3225817,2.42318736 7.66837893,2.29976859 L8.32789678,0.458652854 C8.42637398,0.183743082 8.68933933,0 8.98430143,0 L11.078035,0 Z M10.0237083,7.01854658 C8.35715373,7.01854658 7.00614429,8.35435786 7.00614429,10.0021646 C7.00614429,11.6499713 8.35715373,12.9857826 10.0237083,12.9857826 C11.6902629,12.9857826 13.0412723,11.6499713 13.0412723,10.0021646 C13.0412723,8.35435786 11.6902629,7.01854658 10.0237083,7.01854658 Z"],"share":["M15.8153846,0 C17.5757653,0 19,1.449773 19,3.2346723 C19,5.01957161 17.5757653,6.46934461 15.8153846,6.46934461 C14.8689948,6.46934461 14.0197576,6.05033214 13.4367386,5.38549912 L7.15261285,8.82514052 C7.29248826,9.18940809 7.36923077,9.58567518 7.36923077,10 C7.36923077,10.5415447 7.23812473,11.0522398 7.00630231,11.5009538 L13.0141056,15.2255191 C13.5528137,14.2165053 14.6045882,13.5306554 15.8153846,13.5306554 C17.5757653,13.5306554 19,14.9804284 19,16.7653277 C19,18.550227 17.5757653,20 15.8153846,20 C14.0550039,20 12.6307692,18.550227 12.6307692,16.7653277 L12.634,16.627 L6.10445872,12.5810774 C5.57086177,12.9912437 4.9059594,13.2346723 4.18461538,13.2346723 C2.42423469,13.2346723 1,11.7848993 1,10 C1,8.21510069 2.42423469,6.7653277 4.18461538,6.7653277 C5.03696272,6.7653277 5.81050611,7.10520333 6.38173776,7.65843224 L12.7644192,4.16474612 C12.677473,3.8701237 12.6307692,3.55789277 12.6307692,3.2346723 C12.6307692,1.449773 14.0550039,0 15.8153846,0 Z M15.8153846,14.9260042 C14.8228382,14.9260042 14.0153846,15.7479365 14.0153846,16.7653277 C14.0153846,17.7827189 14.8228382,18.6046512 15.8153846,18.6046512 C16.807931,18.6046512 17.6153846,17.7827189 17.6153846,16.7653277 C17.6153846,15.7479365 16.807931,14.9260042 15.8153846,14.9260042 Z M4.18461538,8.16067653 C3.19206902,8.16067653 2.38461538,8.98260882 2.38461538,10 C2.38461538,11.0173912 3.19206902,11.8393235 4.18461538,11.8393235 C5.17716175,11.8393235 5.98461538,11.0173912 5.98461538,10 C5.98461538,8.98260882 5.17716175,8.16067653 4.18461538,8.16067653 Z M15.8153846,1.39534884 C14.8228382,1.39534884 14.0153846,2.21728112 14.0153846,3.2346723 C14.0153846,4.25206348 14.8228382,5.07399577 15.8153846,5.07399577 C16.807931,5.07399577 17.6153846,4.25206348 17.6153846,3.2346723 C17.6153846,2.21728112 16.807931,1.39534884 15.8153846,1.39534884 Z"],"shopping-cart":["M1.36079465,17.2306501 C2.11234079,17.2306501 2.7215893,17.850949 2.7215893,18.6161263 C2.7215893,19.3813037 2.11234079,20.0016025 1.36079465,20.0016025 C0.609248518,20.0016025 0,19.3813037 0,18.6161263 C0,17.850949 0.609248518,17.2306501 1.36079465,17.2306501 Z M16.783134,17.2306501 C17.5346802,17.2306501 18.1439287,17.850949 18.1439287,18.6161263 C18.1439287,19.3813037 17.5346802,20.0016025 16.783134,20.0016025 C16.0315879,20.0016025 15.4223394,19.3813037 15.4223394,18.6161263 C15.4223394,17.850949 16.0315879,17.2306501 16.783134,17.2306501 Z M19.9719514,0.49668153 C20.0783998,0.863598508 19.8725471,1.24890213 19.5121666,1.35728125 C18.7982969,1.57196699 18.334241,1.8430578 18.1074633,2.13994938 C17.86812,2.45329168 17.7362035,2.83556508 17.7135595,3.27141853 L17.7131084,12.8323625 C17.6732494,13.9462441 17.4168848,14.8238725 16.9164111,15.4524826 C16.3945527,16.1079527 15.5947748,16.477072 14.4917963,16.584084 L3.54966119,16.584084 C2.57344929,16.584084 1.76590691,16.3288555 1.15415016,15.8020123 C0.541978802,15.2748121 0.163433685,14.5112135 0.008805369,13.5421761 L9.09494702e-13,13.4310881 L0.000668719622,7.49295135 C0.045584952,6.46224786 0.368594413,5.61242386 0.977433804,4.97716319 C1.59596426,4.3317909 2.45989589,4.00173686 3.54966119,3.97158166 L13.0679473,3.97158166 C13.4437204,3.97158166 13.7483446,4.28173107 13.7483446,4.66431976 C13.7483446,5.04690844 13.4437204,5.35705785 13.0679473,5.35705785 L3.56830584,5.35679772 C2.82866484,5.37744115 2.30242606,5.57848395 1.95137733,5.94476684 C1.59063754,6.32116134 1.39097484,6.84646532 1.36079465,7.52365699 L1.36079465,13.3730593 C1.47020306,14.007541 1.69724177,14.4550799 2.03296418,14.7442031 C2.37838384,15.0416775 2.8749108,15.1986078 3.54966119,15.1986078 L14.4252585,15.2019282 C15.1263537,15.1317866 15.5906142,14.9175176 15.8592968,14.5800442 C16.1493642,14.2157108 16.323205,13.6205908 16.3527649,12.8071408 L16.3536426,3.23624335 C16.3909201,2.48974988 16.6171412,1.83419612 17.0332736,1.28940618 C17.4619717,0.728165533 18.1639533,0.318084015 19.1266828,0.0285573313 C19.4870634,-0.0798217902 19.865503,0.129764553 19.9719514,0.49668153 Z M13.0679473,11.5360956 C13.4437204,11.5360956 13.7483446,11.846245 13.7483446,12.2288337 C13.7483446,12.6114223 13.4437204,12.9215717 13.0679473,12.9215717 L4.75928089,12.9215717 C4.38350782,12.9215717 4.07888356,12.6114223 4.07888356,12.2288337 C4.07888356,11.846245 4.38350782,11.5360956 4.75928089,11.5360956 L13.0679473,11.5360956 Z M13.0679473,7.84149238 C13.4437204,7.84149238 13.7483446,8.15164179 13.7483446,8.53423048 C13.7483446,8.91681916 13.4437204,9.22696857 13.0679473,9.22696857 L4.75928089,9.22696857 C4.38350782,9.22696857 4.07888356,8.91681916 4.07888356,8.53423048 C4.07888356,8.15164179 4.38350782,7.84149238 4.75928089,7.84149238 L13.0679473,7.84149238 Z"],"shrink":["M8.67198031,10.5613195 C9.05857964,10.5613195 9.37198031,10.8747202 9.37198031,11.2613195 L9.37198031,17.2613195 C9.37198031,17.6479189 9.05857964,17.9613195 8.67198031,17.9613195 C8.28538099,17.9613195 7.97198031,17.6479189 7.97198031,17.2613195 L7.971,12.9073195 L1.19914449,19.7956288 C0.928099848,20.0712986 0.484900222,20.0750481 0.20923042,19.8040034 C-0.0664393831,19.5329588 -0.0701888169,19.0897591 0.200855825,18.8140893 L6.938,11.9603195 L2.67198031,11.9613195 C2.28538099,11.9613195 1.97198031,11.6479189 1.97198031,11.2613195 C1.97198031,10.8747202 2.28538099,10.5613195 2.67198031,10.5613195 L8.67198031,10.5613195 Z M19.792666,0.200855825 C20.0683358,0.471900467 20.0720852,0.915100092 19.8010406,1.19076989 L13.0638964,8.04453971 L17.3299161,8.04353971 C17.7165154,8.04353971 18.0299161,8.35694038 18.0299161,8.74353971 C18.0299161,9.13013903 17.7165154,9.44353971 17.3299161,9.44353971 L11.3299161,9.44353971 C10.9433167,9.44353971 10.6299161,9.13013903 10.6299161,8.74353971 L10.6299161,2.74353971 C10.6299161,2.35694038 10.9433167,2.04353971 11.3299161,2.04353971 C11.7165154,2.04353971 12.0299161,2.35694038 12.0299161,2.74353971 L12.0308964,7.09753971 L18.8027519,0.20923042 C19.0737965,-0.0664393831 19.5169962,-0.0701888169 19.792666,0.200855825 Z"],"smile-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M7.74358499,11.9992836 C7.8796076,13.1337478 8.84672907,13.9977416 10,13.9977416 C11.1476397,13.9977416 12.1116922,13.1419649 12.2545505,12.014406 C12.3018808,11.6408346 12.6430891,11.376364 13.0166605,11.4236943 C13.3902319,11.4710247 13.6547026,11.812233 13.6073722,12.1858044 C13.378445,13.9926929 11.8365892,15.361378 10,15.361378 C8.15440149,15.361378 6.60761388,13.9795299 6.38964607,12.1616213 C6.34481775,11.7877414 6.61156677,11.4483113 6.98544668,11.403483 C7.35932659,11.3586547 7.69875667,11.6254037 7.74358499,11.9992836 Z M5.81395349,6.27906977 C6.58458337,6.27906977 7.20930233,6.90378872 7.20930233,7.6744186 C7.20930233,8.44504849 6.58458337,9.06976744 5.81395349,9.06976744 C5.0433236,9.06976744 4.41860465,8.44504849 4.41860465,7.6744186 C4.41860465,6.90378872 5.0433236,6.27906977 5.81395349,6.27906977 Z M14.1860465,6.27906977 C14.9566764,6.27906977 15.5813953,6.90378872 15.5813953,7.6744186 C15.5813953,8.44504849 14.9566764,9.06976744 14.1860465,9.06976744 C13.4154166,9.06976744 12.7906977,8.44504849 12.7906977,7.6744186 C12.7906977,6.90378872 13.4154166,6.27906977 14.1860465,6.27906977 Z"],"smile":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M7.08636434,11.3988285 L6.98544668,11.403483 C6.61156677,11.4483113 6.34481775,11.7877414 6.38964607,12.1616213 C6.60761388,13.9795299 8.15440149,15.361378 10,15.361378 C11.8365892,15.361378 13.378445,13.9926929 13.6073722,12.1858044 C13.6547026,11.812233 13.3902319,11.4710247 13.0166605,11.4236943 C12.6430891,11.376364 12.3018808,11.6408346 12.2545505,12.014406 C12.1116922,13.1419649 11.1476397,13.9977416 10,13.9977416 C8.84672907,13.9977416 7.8796076,13.1337478 7.74358499,11.9992836 C7.69875667,11.6254037 7.35932659,11.3586547 6.98544668,11.403483 Z M5.81395349,6.27906977 C5.0433236,6.27906977 4.41860465,6.90378872 4.41860465,7.6744186 C4.41860465,8.44504849 5.0433236,9.06976744 5.81395349,9.06976744 C6.58458337,9.06976744 7.20930233,8.44504849 7.20930233,7.6744186 C7.20930233,6.90378872 6.58458337,6.27906977 5.81395349,6.27906977 Z M14.1860465,6.27906977 C13.4154166,6.27906977 12.7906977,6.90378872 12.7906977,7.6744186 C12.7906977,8.44504849 13.4154166,9.06976744 14.1860465,9.06976744 C14.9566764,9.06976744 15.5813953,8.44504849 15.5813953,7.6744186 C15.5813953,6.90378872 14.9566764,6.27906977 14.1860465,6.27906977 Z"],"square-o":["M1.81818182,1.36363636 C1.5671433,1.36363636 1.36363636,1.5671433 1.36363636,1.81818182 L1.36363636,18.1818182 C1.36363636,18.4328567 1.5671433,18.6363636 1.81818182,18.6363636 L18.1818182,18.6363636 C18.4328567,18.6363636 18.6363636,18.4328567 18.6363636,18.1818182 L18.6363636,1.81818182 C18.6363636,1.5671433 18.4328567,1.36363636 18.1818182,1.36363636 L1.81818182,1.36363636 Z M1.81818182,0 L18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 Z"],"star-off":["M3.90171373,12.9368 L0.429195178,9.12686535 L0.370505227,9.05280794 C-0.000364853239,8.51209066 -0.107225083,7.94317829 0.115683237,7.40642547 C0.342375444,6.86056122 0.852560088,6.53650198 1.58774642,6.3916391 L6.13074565,5.67712689 L8.67458358,0.751738528 C8.96429516,0.278520428 9.39026343,0 9.90811712,0 C10.417911,0 10.8438669,0.26937239 11.1500547,0.730423018 L11.1994253,0.818113787 L13.4845909,5.68075027 L18.6528488,6.50816993 C19.3576818,6.63471961 19.8512788,7.01613004 19.9733041,7.64640299 C20.0822157,8.20894243 19.854545,8.75883475 19.3513925,9.31285684 L15.758473,12.9501655 L16.6181218,18.2268966 C16.7042376,18.8654222 16.534251,19.4082818 16.0693177,19.7497377 C15.5917078,20.1005035 14.9818552,20.068472 14.205838,19.7415478 L9.8263118,17.3865013 L5.50818399,19.7023838 C4.90128557,20.0345087 4.28802767,20.0564483 3.76804244,19.706455 C3.2475308,19.3561074 3.03763767,18.7807328 3.1241912,18.0792974 L3.90171373,12.9368 Z M5.35594273,12.4960062 L5.30712816,12.8188636 L4.48336519,18.26544 C4.4580919,18.4708831 4.48068131,18.5328069 4.53438741,18.5689556 C4.58861993,18.6054586 4.66037893,18.6028914 4.85439264,18.4967453 L9.82717072,15.8297334 L10.1517549,16.0042753 L14.7947827,18.5048029 C15.1119905,18.6369613 15.2569894,18.6446146 15.2569383,18.6446146 C15.2695637,18.6353423 15.2830046,18.5924182 15.2611903,18.4287346 L14.2922183,12.4826546 L14.5371948,12.2346515 L18.3549114,8.37066147 C18.5758781,8.12694434 18.639249,7.97388468 18.6262903,7.90695163 C18.6264453,7.9077521 18.6078868,7.89341164 18.4230841,7.86010626 L12.5512243,6.9201747 L9.98067745,1.45027142 C9.93213187,1.38118077 9.91556942,1.3713654 9.90811712,1.3713654 C9.90751393,1.3713654 9.9012195,1.37548103 9.86938975,1.42398249 L7.03104437,6.92376864 L6.68746017,6.97780675 L1.82753342,7.74162935 C1.52543813,7.80137641 1.40555001,7.87752697 1.38285339,7.93217939 C1.35814682,7.99167165 1.37201649,8.07830931 1.47787101,8.24111185 L5.35594273,12.4960062 Z"],"star-on":["M9.88993214,17.5143551 L5.67925514,19.7706633 L5.58137404,19.8151697 C4.86621614,20.0856574 4.19175783,20.0309364 3.67796741,19.5732527 C3.19576628,19.1437087 3.02114918,18.5272631 3.12106237,17.8182442 L3.82494419,12.9582802 L0.644943731,9.61635601 C0.0942731134,9.05561309 -0.12003139,8.36789942 0.0652371375,7.6475266 C0.270499931,6.8494108 0.944591599,6.38981101 1.91626844,6.23594046 L6.1429793,5.59822482 L8.35612232,1.01301762 C8.69987723,0.366097394 9.23663637,-0.0174170702 9.91131194,0.000608459089 C10.5717106,0.0182525484 11.0939504,0.422542671 11.5040044,1.14356762 L13.64475,5.62965664 L18.3837285,6.28808837 C19.1367847,6.41806637 19.6918258,6.81025062 19.9136547,7.46427289 C20.1349495,8.11672079 19.9243574,8.77699895 19.3567704,9.45065589 L15.916492,12.9606774 L16.6886186,17.8170551 C16.81148,18.6567374 16.6644875,19.3222694 16.1027873,19.7179201 C15.5971351,20.0740917 14.964405,20.0740917 14.2364881,19.8236405 L14.1161887,19.7712214 L9.88993214,17.5143551 Z"],"stop-o":["M10,0 C4.47767857,0 0,4.47767857 0,10 C0,15.5223214 4.47767857,20 10,20 C15.5223214,20 20,15.5223214 20,10 C20,4.47767857 15.5223214,0 10,0 Z M10,18.3035714 C5.41517857,18.3035714 1.69642857,14.5848214 1.69642857,10 C1.69642857,8.01339286 2.39508929,6.1875 3.56026786,4.75892857 L15.2410714,16.4397321 C13.8125,17.6049107 11.9866071,18.3035714 10,18.3035714 Z M16.4397321,15.2410714 L4.75892857,3.56026786 C6.1875,2.39508929 8.01339286,1.69642857 10,1.69642857 C14.5848214,1.69642857 18.3035714,5.41517857 18.3035714,10 C18.3035714,11.9866071 17.6049107,13.8125 16.4397321,15.2410714 Z"],"stop":["M10,0 C4.47767857,0 0,4.47767857 0,10 C0,15.5223214 4.47767857,20 10,20 C15.5223214,20 20,15.5223214 20,10 C20,4.47767857 15.5223214,0 10,0 Z M15.2410714,16.4397321 L3.56026786,4.75892857 C3.91741071,4.31919643 4.31919643,3.91741071 4.75892857,3.56026786 L16.4397321,15.2410714 C16.0825893,15.6785714 15.6808036,16.0825893 15.2410714,16.4397321 Z"],"swap-left":["M2.6406503,11.9173152 L19.2310723,11.9173152 C19.6557393,11.9173152 20,12.2716113 20,12.7086576 C20,13.1457039 19.6557393,13.5 19.2310723,13.5 L0.770470992,13.5 C0.0834880204,13.5 -0.258696077,12.6434821 0.229609261,12.1461739 L5.54885399,6.72885877 C5.850706,6.42144154 6.33755745,6.42406316 6.63626714,6.73471432 C6.93497682,7.04536548 6.93242946,7.54640892 6.63057745,7.85382615 L2.6406503,11.9173152 Z"],"swap-right":["M17.6250577,12.0801747 C11.5245859,12.0801747 5.88283114,12.0801747 0.699793471,12.0801747 C0.52406311,12.0801747 2.13162821e-14,12.1722157 2.13162821e-14,12.7900873 C2.13162821e-14,13.407959 0.523635864,13.5 0.699793471,13.5 C9.35391235,13.5 18.294693,13.5 19.298806,13.5 C19.7049103,13.5 20,13.2133484 20,12.7900873 C20,12.559082 19.909729,12.4275208 19.8358612,12.3370514 C19.7403107,12.2304637 19.6827138,12.1681264 19.6630707,12.1500397 L14.3388214,6.67959595 C13.9907379,6.40224202 13.6708088,6.41058145 13.379034,6.70461423 C13.0872592,6.99864701 13.0679956,7.31541643 13.3212433,7.65492249 L17.6250577,12.0801747 Z"],"swap":["M19.29894,13.097555 C19.9200379,13.097555 20.2332042,13.8469628 19.7969407,14.2892722 L14.369746,19.7916791 C14.0983279,20.0668585 13.6553376,20.0697948 13.3802994,19.7982374 C13.1052612,19.52668 13.1023265,19.0834622 13.3737445,18.8082827 L17.6255116,14.497593 L0.703482198,14.497593 C0.317070803,14.497593 0.00382247492,14.1841838 0.00382247492,13.797574 C0.00382247492,13.4109642 0.317070803,13.097555 0.703482198,13.097555 L19.29894,13.097555 Z M6.61970059,0.201762638 C6.89473881,0.473320047 6.89767354,0.91653784 6.62625551,1.19171729 L2.37448841,5.50240698 L19.2965178,5.50240698 C19.6829292,5.50240698 19.9961775,5.81581617 19.9961775,6.20242599 C19.9961775,6.58903581 19.6829292,6.902445 19.2965178,6.902445 L0.701060011,6.902445 C0.0799621139,6.902445 -0.233204177,6.15303716 0.203059275,5.7107278 L5.63025404,0.208320918 C5.90167207,-0.0668585286 6.34466238,-0.0697947706 6.61970059,0.201762638 Z"],"table":["M1.36363636,5.13837546 L1.36363636,17.1578947 L18.6363636,17.1578947 L18.6363636,5.13837546 L1.36363636,5.13837546 Z M0.909090909,1.5 L19.0909091,1.5 C19.5929861,1.5 20,1.90058733 20,2.39473684 L20,17.6052632 C20,18.0994127 19.5929861,18.5 19.0909091,18.5 L0.909090909,18.5 C0.407013864,18.5 0,18.0994127 0,17.6052632 L0,2.39473684 C0,1.90058733 0.407013864,1.5 0.909090909,1.5 Z M6.13636364,3.25901769 C6.13636364,2.88840555 6.44162403,2.58796506 6.81818182,2.58796506 C7.1947396,2.58796506 7.5,2.88840555 7.5,3.25901769 L7.5,17.1578947 C7.5,17.5285069 7.1947396,17.8289474 6.81818182,17.8289474 C6.44162403,17.8289474 6.13636364,17.5285069 6.13636364,17.1578947 L6.13636364,3.25901769 Z M13.0964653,2.61842105 C13.4730231,2.61842105 13.7782835,2.91886155 13.7782835,3.28947368 L13.778,8.284 L18.6888172,8.28485783 C19.065375,8.28485783 19.3706354,8.58529833 19.3706354,8.95591046 C19.3706354,9.3265226 19.065375,9.62696309 18.6888172,9.62696309 L13.778,9.626 L13.778,12.688 L18.7804789,12.6882017 C19.1570367,12.6882017 19.4622971,12.9886422 19.4622971,13.3592543 C19.4622971,13.7298664 19.1570367,14.0303069 18.7804789,14.0303069 L13.778,14.03 L13.7782835,17.1883507 C13.7782835,17.5589629 13.4730231,17.8594034 13.0964653,17.8594034 C12.7199075,17.8594034 12.4146471,17.5589629 12.4146471,17.1883507 L12.414,14.03 L1.00075266,14.0303069 C0.624194872,14.0303069 0.318934474,13.7298664 0.318934474,13.3592543 C0.318934474,12.9886422 0.624194872,12.6882017 1.00075266,12.6882017 L12.414,12.688 L12.414,9.626 L0.909090909,9.62696309 C0.532533125,9.62696309 0.227272727,9.3265226 0.227272727,8.95591046 C0.227272727,8.58529833 0.532533125,8.28485783 0.909090909,8.28485783 L12.414,8.284 L12.4146471,3.28947368 C12.4146471,2.91886155 12.7199075,2.61842105 13.0964653,2.61842105 Z"],"tag-o":["M10.3680419,0 C10.5498787,0 10.7242015,0.0724186232 10.8523536,0.201196798 L19.2012145,8.59106451 C19.7601918,9.17730001 20.0381116,9.83950884 19.9957947,10.5491487 C19.9561893,11.2133202 19.692122,11.8233895 19.1886089,12.3950955 L12.1151532,19.4315469 L12.0000892,19.5235714 C11.3616982,19.9295813 10.7409201,20.0881735 10.1508458,19.9524881 C9.6353684,19.833956 9.09560983,19.5157043 8.47256962,18.9741189 L0.312115394,10.7551198 C0.187561563,10.6296724 0.116663511,10.4608505 0.114365484,10.2842393 L0,1.4733236 C0.00673232467,1.04433781 0.126372899,0.680846621 0.392497458,0.413184628 C0.666034778,0.138067049 1.05459295,0.0223681626 1.58823307,0 L10.3680419,0 Z M10.0839283,1.3629367 L1.61768408,1.36232283 C1.48885752,1.36787606 1.40787883,1.38105306 1.37492876,1.38246021 L1.369,1.382 L1.36901715,1.39736104 C1.36784064,1.41470949 1.36584848,1.44040771 1.36519119,1.47514745 L1.47600132,9.99128452 L9.40451245,17.9793885 C9.83600432,18.3526757 10.1940156,18.5637658 10.4573204,18.6243117 C10.6352857,18.6652342 10.881419,18.6072716 11.2067005,18.4111199 L18.1931122,11.4634648 C18.4708327,11.1468117 18.6118304,10.8210676 18.6328749,10.4681584 C18.651208,10.1607175 18.5240629,9.85776453 18.2224257,9.54119267 L10.0839283,1.3629367 Z M6.47348527,3.21141802 C8.10726533,3.21141802 9.43170575,4.53355435 9.43170575,6.16449217 C9.43170575,7.79542998 8.10726533,9.11756631 6.47348527,9.11756631 C4.83970521,9.11756631 3.51526478,7.79542998 3.51526478,6.16449217 C3.51526478,4.53355435 4.83970521,3.21141802 6.47348527,3.21141802 Z M6.47348527,4.57437532 C5.59375754,4.57437532 4.88059731,5.28629488 4.88059731,6.16449217 C4.88059731,7.04268945 5.59375754,7.75460901 6.47348527,7.75460901 C7.35321299,7.75460901 8.06637322,7.04268945 8.06637322,6.16449217 C8.06637322,5.28629488 7.35321299,4.57437532 6.47348527,4.57437532 Z"],"tag":["M10.3680419,0 C10.5498787,0 10.7242015,0.0724186232 10.8523536,0.201196798 L19.2012145,8.59106451 C19.7601918,9.17730001 20.0381116,9.83950884 19.9957947,10.5491487 C19.9561893,11.2133202 19.692122,11.8233895 19.1886089,12.3950955 L12.1151532,19.4315469 L12.0000892,19.5235714 C11.3616982,19.9295813 10.7409201,20.0881735 10.1508458,19.9524881 C9.6353684,19.833956 9.09560983,19.5157043 8.47256962,18.9741189 L0.312115394,10.7551198 C0.187561563,10.6296724 0.116663511,10.4608505 0.114365484,10.2842393 L0,1.4733236 C0.00673232467,1.04433781 0.126372899,0.680846621 0.392497458,0.413184628 C0.666034778,0.138067049 1.05459295,0.0223681626 1.58823307,0 L10.3680419,0 Z M6.47348527,4.57437532 C5.59375754,4.57437532 4.88059731,5.28629488 4.88059731,6.16449217 C4.88059731,7.04268945 5.59375754,7.75460901 6.47348527,7.75460901 C7.35321299,7.75460901 8.06637322,7.04268945 8.06637322,6.16449217 C8.06637322,5.28629488 7.35321299,4.57437532 6.47348527,4.57437532 Z"],"tags-o":["M0.204617964,9.16550767 C0.0740980033,9.04184986 0.000507565033,8.87232643 0.000507565033,8.69531758 L0.000803337996,3.35893737 C-0.00937532279,3.02485784 0.0769825179,2.72037321 0.270699622,2.46921136 C0.500257217,2.17158091 0.848238294,2.02412739 1.29861129,2 L6.81654766,2 C6.9967639,2 7.16954708,2.06970455 7.29664674,2.19368258 L16.3117527,10.9916608 C16.4982181,11.2123211 16.5845208,11.4830627 16.5517579,11.7661803 C16.5246563,12.0003757 16.4280412,12.2152729 16.2297605,12.439356 L10.78727,17.6753432 C10.5727684,17.8788135 10.302315,17.9935318 10.0051286,17.9935318 C9.72974264,17.9935318 9.47346105,17.8962597 9.18698361,17.6756211 L0.204617964,9.16550767 Z M1.35490847,8.41864477 L9.98276829,16.5987274 L15.105271,11.6740421 L6.53495036,3.31421322 L1.35441968,3.31318113 C1.35441968,3.31834936 1.35463332,5.02017058 1.35490847,8.41864477 Z M9.97643849,3.32073748 L6.98657566,3.32073748 C6.61256818,3.32073748 6.30937521,3.02652827 6.30937521,2.66360282 C6.30937521,2.30067737 6.61256818,2.00646816 6.98657566,2.00646816 L10.2579783,2.00646816 C10.4381945,2.00646816 10.6109777,2.07617271 10.7380774,2.20015073 L19.7531833,10.998129 C19.9396487,11.2187892 20.0259514,11.4895309 19.9931885,11.7726484 C19.9660869,12.0068439 19.8694718,12.221741 19.6711911,12.4458242 L14.2287007,17.6818114 C14.014199,17.8852817 13.7437457,18 13.4465592,18 C13.1711732,18 12.9148917,17.9027279 12.6284142,17.6820893 L11.2865402,16.4107649 C11.018932,16.1572264 11.0138024,15.7411815 11.2750828,15.4815027 C11.5363632,15.2218239 11.9651121,15.2168462 12.2327203,15.4703847 L13.4243922,16.6050097 L18.5467017,11.6805102 L9.97643849,3.32073748 Z M4.49553643,8.16649759 C3.37351398,8.16649759 2.46393507,7.28386996 2.46393507,6.19509361 C2.46393507,5.10631725 3.37351398,4.22368962 4.49553643,4.22368962 C5.61755887,4.22368962 6.52713778,5.10631725 6.52713778,6.19509361 C6.52713778,7.28386996 5.61755887,8.16649759 4.49553643,8.16649759 Z M4.49553643,6.85222827 C4.86954391,6.85222827 5.17273688,6.55801906 5.17273688,6.19509361 C5.17273688,5.83216815 4.86954391,5.53795894 4.49553643,5.53795894 C4.12152895,5.53795894 3.81833598,5.83216815 3.81833598,6.19509361 C3.81833598,6.55801906 4.12152895,6.85222827 4.49553643,6.85222827 Z"],"tags":["M10.2579783,2.00646794 C10.4381945,2.00646794 10.6109777,2.07617271 10.7380774,2.20015073 L19.7531833,10.998129 C19.9396487,11.2187892 20.0259514,11.4895309 19.9931885,11.7726484 C19.9660869,12.0068439 19.8694718,12.221741 19.6711911,12.4458242 L14.2287007,17.6818114 C14.014199,17.8852817 13.7437457,18 13.4465592,18 C13.1711732,18 12.939837,17.90245 12.6533596,17.6818114 L12.4833001,17.5471465 L13.4243922,16.6050097 L17.8611492,12.3395885 C18.0286813,12.1459284 18.1124474,11.9138855 18.1124474,11.6434597 C18.1124474,11.373034 18.0204901,11.1554326 17.8365755,10.9906557 L9.62658497,3.01503224 C9.23058093,2.64479482 8.82205848,2.38384332 8.40101762,2.23217773 C8.10381231,2.12511968 7.83714915,2.06883797 7.67707624,2.03925146 L7.54597231,2.01595878 C7.51125433,2.00948302 7.51031342,2.00742346 7.55265559,2.00676994 L10.2579783,2.00646794 Z M6.81654766,2 C6.9967639,2 7.16954708,2.06970455 7.29664674,2.19368258 L16.3117527,10.9916608 C16.4982181,11.2123211 16.5845208,11.4830627 16.5517579,11.7661803 C16.5246563,12.0003757 16.4280412,12.2152729 16.2297605,12.439356 L10.78727,17.6753432 C10.5727684,17.8788135 10.302315,17.9935318 10.0051286,17.9935318 C9.72974264,17.9935318 9.47346105,17.8962597 9.18698361,17.6756211 L0.204617964,9.16550767 C0.0740980033,9.04184986 0.000507565033,8.87232643 0.000507565033,8.69531758 L0.000803337996,3.35893737 C-0.00937532279,3.02485784 0.0769825179,2.72037321 0.270699622,2.46921136 C0.500257217,2.17158091 0.848238294,2.02412739 1.29861129,2 L6.81654766,2 Z M4.48982737,4.64789569 C3.61009965,4.64789569 2.89693942,5.34399482 2.89693942,6.20267661 C2.89693942,7.0613584 3.61009965,7.75745752 4.48982737,7.75745752 C5.3695551,7.75745752 6.08271533,7.0613584 6.08271533,6.20267661 C6.08271533,5.34399482 5.3695551,4.64789569 4.48982737,4.64789569 Z"],"taobao":["M1.97735213,6.56013503 L0.840832795,8.26240557 L2.93722292,9.52887666 C2.93722292,9.52887666 4.33096968,10.2254412 3.66287926,11.5328828 C3.04472095,12.7695355 0,15.4775554 0,15.4775554 L2.72606608,17.1388553 C4.61509394,13.1420385 4.48839983,13.6746991 4.96064564,12.2368965 C5.44827062,10.7767248 5.55579097,9.6555346 4.73029272,8.83978299 C3.67058001,7.80053395 3.55154201,7.70367278 1.97735213,6.56013503 Z M7.11078478,2.5 L9.62569401,3.19281826 C9.62569401,3.19281826 9.42219328,3.66588533 8.98831731,4.39969581 C19.0670834,1.61345941 19.6622287,6.11314014 19.6622287,6.11314014 L19.6622287,6.11314014 L19.6712449,6.1581547 C19.7486013,6.55624901 20.2859195,9.56760219 19.7966012,14.1067956 C19.2667449,18.9864068 12.7740961,17.1686521 12.7740961,17.1686521 L12.7740961,17.1686521 L13.123487,15.7718201 L14.6285933,16.0884325 C17.4084084,16.256061 17.139641,13.8870227 17.139641,13.8870227 L17.139641,13.8870227 L17.139641,6.98105775 C17.1588371,4.35872525 14.6132365,4.08308345 10.0441908,5.68478988 L10.0441908,5.68478988 L11.1115819,5.96788087 C11.0194408,6.26959485 10.677706,6.75011111 10.2361739,7.27532253 L10.2361739,7.27532253 L16.3410173,7.27532253 L16.3410173,8.48217842 L12.908491,8.48217842 L12.908491,9.99449454 L16.3294996,9.99449454 L16.3294996,11.2050967 L12.908491,11.2050967 L12.908491,13.7342926 C13.4191512,13.5666641 13.8990755,13.3431883 14.3060769,13.0377498 L14.3060769,13.0377498 L14.0065958,11.9388855 L15.6192002,11.4434709 L16.9668764,14.6618038 L14.9779843,15.4775554 L14.6247541,14.1887367 C13.7339892,14.8554828 11.8833312,15.8239645 8.65812247,15.7382988 C5.20637774,15.8239645 6.09716497,11.9388855 6.09716497,11.9388855 L6.09716497,11.9388855 L6.18546692,11.8904657 L8.60821267,11.8904657 C8.59669503,12.3933296 8.38551586,13.201632 8.66964012,13.6486269 C8.90769379,14.013659 9.50665602,14.0769771 9.89446141,14.0956218 L9.89446141,14.0956218 L10.0288339,14.0993464 L10.0288339,11.2050967 L6.51950098,11.2050967 L6.51950098,9.99821913 L10.0288339,9.99821913 L10.0288339,8.48590302 L9.1303906,8.48590302 C8.3432845,9.30165462 7.61760584,9.98332075 7.61760584,9.98332075 L7.61760584,9.98332075 L6.55789313,9.07443258 C7.31044629,8.29967319 8.05916024,7.07044806 8.52758915,6.25097186 C8.13575301,6.40605431 7.74662079,6.56749055 7.36035609,6.73521272 C6.97641224,7.21943192 6.52334019,7.71857117 6.02035835,8.21026122 C6.03955442,8.24005799 4.28105988,7.24925035 4.28105988,7.24925035 C5.98005914,5.8349458 6.98049769,2.89831647 7.09891579,2.53676243 L7.11078478,2.5 Z M3.46707928,2.78309099 C4.45768611,2.78309099 5.26012675,3.48335845 5.26012675,4.35500065 C5.26012675,5.21915035 4.45768611,5.91946112 3.46707928,5.91946112 C2.46881633,5.91946112 1.67400948,5.21544741 1.67017026,4.35500065 C1.67017026,3.48708304 2.46879401,2.78309099 3.46707928,2.78309099 Z"],"time-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M9.06976744,5.58139535 C9.45508238,5.58139535 9.76744186,5.89375483 9.76744186,6.27906977 L9.76744186,11.1627907 L14.6511628,11.1627907 C15.0364777,11.1627907 15.3488372,11.4751502 15.3488372,11.8604651 C15.3488372,12.2457801 15.0364777,12.5581395 14.6511628,12.5581395 L9.06976744,12.5581395 C8.6844525,12.5581395 8.37209302,12.2457801 8.37209302,11.8604651 L8.37209302,6.27906977 C8.37209302,5.89375483 8.6844525,5.58139535 9.06976744,5.58139535 Z"],"time":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M9.06976744,5.58139535 C8.6844525,5.58139535 8.37209302,5.89375483 8.37209302,6.27906977 L8.37209302,6.27906977 L8.37209302,11.8604651 C8.37209302,12.2457801 8.6844525,12.5581395 9.06976744,12.5581395 L9.06976744,12.5581395 L14.6511628,12.5581395 C15.0364777,12.5581395 15.3488372,12.2457801 15.3488372,11.8604651 C15.3488372,11.4751502 15.0364777,11.1627907 14.6511628,11.1627907 L14.6511628,11.1627907 L9.76744186,11.1627907 L9.76744186,6.27906977 C9.76744186,5.89375483 9.45508238,5.58139535 9.06976744,5.58139535 Z"],"twitter":["M20,3.89414472 C19.2641845,4.21529021 18.473566,4.43237024 17.6434684,4.52978778 C18.4904484,4.02991562 19.1413322,3.23830222 19.4472943,2.29557658 C18.6545979,2.75837382 17.7761905,3.09486065 16.8419412,3.27537714 C16.0936587,2.49092304 15.0272067,2 13.846993,2 C11.5811072,2 9.74377622,3.80823319 9.74377622,6.03937612 C9.74377622,6.35566351 9.78013844,6.66428024 9.85026557,6.9601125 C6.44000883,6.7916134 3.41675,5.18332907 1.39293274,2.73919714 C1.03969975,3.33597545 0.837369973,4.03017131 0.837369973,4.77013552 C0.837369973,6.17156737 1.56175733,7.4075684 2.6627534,8.13219126 C1.99031207,8.11096906 1.35760944,7.92917412 0.804384245,7.62694963 C0.803864784,7.64382511 0.803864784,7.6604449 0.803864784,7.67783176 C0.803864784,9.63436461 2.2180954,11.2669394 4.09490539,11.6384556 C3.75076296,11.730248 3.38843941,11.7798517 3.01416828,11.7798517 C2.74950327,11.7798517 2.49263016,11.7547942 2.24199057,11.7074917 C2.76404815,13.3119407 4.27931379,14.4801841 6.07482825,14.5129123 C4.67046738,15.5960113 2.9014454,16.2421376 0.978922899,16.2421376 C0.64776697,16.2421376 0.321286184,16.2232166 1.39282525e-13,16.1856303 C1.81577341,17.3316287 3.9725725,18 6.28962508,18 C13.8368635,18 17.9639754,11.8453081 17.9639754,6.50805421 C17.9639754,6.33316287 17.9598197,6.15852723 17.9520278,5.98491434 C18.7543342,5.41575045 19.4501513,4.70416773 20,3.89414472 L20,3.89414472 Z"],"uiw":["M5.97550739,0 L10.4510148,3.41834667 L8.74152308,8.94934776 L3.20949171,8.94934776 L1.5,3.41834667 L5.97550739,0 Z M5.97550739,20 L1.5,16.5816533 L3.20949171,11.0506522 L8.74152308,11.0506522 L10.4510148,16.5816533 L5.97550739,20 Z M18.5,12.9678909 L13.2386426,14.7649021 L9.98686188,10.0599974 L13.2385083,5.35519519 L18.5,7.15237223 L18.5,12.9678909 Z"],"unlock":["M15.6153336,2.04554828 C16.6081351,2.94132046 17.3834622,3.96804378 17.9372608,5.12249891 C18.104471,5.47106713 17.9574512,5.88918811 17.608883,6.05639824 C17.2603147,6.22360838 16.8421938,6.07658859 16.6749836,5.72802037 C16.2010479,4.74004827 15.5365653,3.86011042 14.6774817,3.08498749 C13.372881,1.90788902 11.8911411,1.33444811 10.2466258,1.40597349 C8.02663277,1.50252829 6.60309088,2.0364856 5.08813003,3.63135168 C3.94694425,4.83272826 3.39086048,6.19593035 3.40012592,7.75916819 L3.4,9.004 L18.0069396,9.00451279 L18.0069396,19.0045128 C18.0069396,19.5567975 17.5592243,20.0045128 17.0069396,20.0045128 L3.00693956,20.0045128 C2.45465481,20.0045128 2.00693956,19.5567975 2.00693956,19.0045128 L2.00638926,9.75414833 C2.00217607,9.72308678 2,9.69137817 2,9.65916156 L2,7.76327633 C1.98870641,5.83714956 2.68627515,4.12710654 4.07307936,2.66715661 C5.86496358,0.780761087 7.63077426,0.118421942 10.1857927,0.00729578292 C12.2101541,-0.0807503525 14.0462744,0.629837614 15.6153336,2.04554828 Z M16.6069396,10.4045128 L3.40693956,10.4045128 L3.40693956,18.6045128 L16.6069396,18.6045128 L16.6069396,10.4045128 Z M10.362347,11.6279517 C10.7489464,11.6279517 11.062347,11.9413524 11.062347,12.3279517 L11.062347,12.3279517 L11.0628217,14.4967243 C11.5415033,14.7473006 11.8681413,15.2487618 11.8681413,15.8265133 C11.8681413,16.6549404 11.1965685,17.3265133 10.3681413,17.3265133 C9.53971422,17.3265133 8.86814135,16.6549404 8.86814135,15.8265133 C8.86814135,15.2533045 9.189663,14.7551911 9.66219801,14.5026814 L9.66219801,14.5026814 L9.66234703,12.3279517 C9.66234703,11.9413524 9.97574771,11.6279517 10.362347,11.6279517 Z"],"up-circle-o":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M9.51942697,7.63613781 C9.78350334,7.37374613 10.2092302,7.37167573 10.4758462,7.63148655 L10.4758462,7.63148655 L14.4473588,11.5016301 C14.7170449,11.7644327 14.7226251,12.1961 14.4598225,12.4657861 C14.1970199,12.7354721 13.7653526,12.7410523 13.4956665,12.4782497 L13.4956665,12.4782497 L10.0046519,9.07633992 L6.58558122,12.4735984 C6.31846398,12.7390116 5.8867628,12.7376302 5.62134964,12.4705129 C5.35593648,12.2033957 5.35731792,11.7716945 5.62443516,11.5062813 L5.62443516,11.5062813 Z"],"up-circle":["M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M9.51942697,7.63613781 L5.62443516,11.5062813 C5.35731792,11.7716945 5.35593648,12.2033957 5.62134964,12.4705129 C5.8867628,12.7376302 6.31846398,12.7390116 6.58558122,12.4735984 L10.0046519,9.07633992 L13.4956665,12.4782497 C13.7653526,12.7410523 14.1970199,12.7354721 14.4598225,12.4657861 C14.7226251,12.1961 14.7170449,11.7644327 14.4473588,11.5016301 L10.4758462,7.63148655 C10.2092302,7.37167573 9.78350334,7.37374613 9.51942697,7.63613781 Z"],"up-square-o":["M1.81818182,1.36363636 C1.5671433,1.36363636 1.36363636,1.5671433 1.36363636,1.81818182 L1.36363636,18.1818182 C1.36363636,18.4328567 1.5671433,18.6363636 1.81818182,18.6363636 L18.1818182,18.6363636 C18.4328567,18.6363636 18.6363636,18.4328567 18.6363636,18.1818182 L18.6363636,1.81818182 C18.6363636,1.5671433 18.4328567,1.36363636 18.1818182,1.36363636 L1.81818182,1.36363636 Z M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M9.51942697,7.61708699 L5.62443516,11.4872305 C5.35731792,11.7526437 5.35593648,12.1843449 5.62134964,12.4514621 C5.8867628,12.7185794 6.31846398,12.7199608 6.58558122,12.4545476 L10.0046519,9.05728911 L13.4956665,12.4591989 C13.7653526,12.7220015 14.1970199,12.7164213 14.4598225,12.4467352 C14.7226251,12.1770492 14.7170449,11.7453818 14.4473588,11.4825793 L10.4758462,7.61243574 C10.2092302,7.35262491 9.78350334,7.35469531 9.51942697,7.61708699 Z"],"up-square":["M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M9.51942697,7.61708699 L5.62443516,11.4872305 C5.35731792,11.7526437 5.35593648,12.1843449 5.62134964,12.4514621 C5.8867628,12.7185794 6.31846398,12.7199608 6.58558122,12.4545476 L10.0046519,9.05728911 L13.4956665,12.4591989 C13.7653526,12.7220015 14.1970199,12.7164213 14.4598225,12.4467352 C14.7226251,12.1770492 14.7170449,11.7453818 14.4473588,11.4825793 L10.4758462,7.61243574 C10.2092302,7.35262491 9.78350334,7.35469531 9.51942697,7.61708699 Z"],"up":["M10.1025513,7.22165154 C13.549533,10.6902823 15.8466074,12.9862104 16.9937744,14.109436 C17.1906416,14.2940129 17.5317688,14.6698914 18.0392151,14.1790161 C18.3775126,13.851766 18.3644409,13.4939982 18,13.1057129 L10.556488,5.67610168 C10.432251,5.55870056 10.2805653,5.5 10.1014311,5.5 C9.92229687,5.5 9.76473264,5.55870056 9.6287384,5.67610168 L2.17555237,13.3108978 C1.93475791,13.6991321 1.94470649,14.025777 2.20539811,14.2908324 C2.46608974,14.5558878 2.78324382,14.5701396 3.15686035,14.3335876 L10.1025513,7.22165154 Z"],"upload":["M19.3107659,12.0514519 C19.6914194,12.0514519 20,12.3646267 20,12.7509475 L20,17.6690264 C19.9938202,18.3388667 19.8725879,18.8692232 19.6014711,19.2629832 C19.2734293,19.7394192 18.692794,19.9546046 17.8541437,20 L1.95063965,19.9982693 C1.30493215,19.9520847 0.783122117,19.6957368 0.444258688,19.2213785 C0.141889579,18.7981068 -0.00168144063,18.2714304 0,17.6625107 L0,12.7509492 C0,12.3646285 0.3085815,12.0514519 0.689234956,12.0514519 C1.06988841,12.0514519 1.37846979,12.3646249 1.37847075,12.7509457 L1.37848021,17.6644834 C1.37755618,17.9967232 1.44266621,18.235573 1.56028228,18.400218 C1.64140402,18.5137764 1.78414309,18.5838993 1.99909415,18.6010088 L17.8165968,18.6020475 C18.2362406,18.5788121 18.4438468,18.5018725 18.4715409,18.4616506 C18.5561601,18.3387527 18.6177678,18.0692372 18.6215319,17.662509 L18.6215319,12.7509475 C18.6215319,12.3646267 18.9301125,12.0514519 19.3107659,12.0514519 Z M9.99004267,0 C10.2138052,0 10.4126627,0.108218607 10.5385735,0.275898908 L14.8199853,4.58384481 C15.0903403,4.85579935 15.0922778,5.2986911 14.8243128,5.57307121 C14.5563478,5.84745133 14.1199533,5.84941764 13.8495983,5.5774631 L13.8495983,5.5774631 L10.679,2.388 L10.6792767,12.0312282 C10.6792767,12.4175489 10.3706961,12.7307237 9.99004267,12.7307237 C9.60938921,12.7307237 9.30080862,12.4175489 9.30080862,12.0312282 L9.3,2.383 L6.17196801,5.5740698 C5.93031044,5.82051895 5.55266265,5.84603478 5.28285432,5.65001654 L5.19724674,5.57647134 C4.92743145,5.3039653 4.92637202,4.86107049 5.19488043,4.58723811 L5.19488043,4.58723811 L9.49085833,0.206079767 C9.60417971,0.0905114571 9.74742341,0.0235159351 9.89543581,0.00518085699 C9.89909017,0.00602663088 9.90269067,0.00555466379 9.90629978,0.00511100628 C9.9298388,0.00139122319 9.95343509,8.63925827e-05 9.97703552,4.14935211e-06 L9.99004267,0 L9.99004267,0 Z"],"user-add":["M9.46727453,0 C12.6508009,0 15.2315589,2.56640935 15.2315589,5.73223573 C15.2315589,7.47655509 14.448084,9.03890148 13.2119914,10.0902571 C13.4822032,10.2238219 13.7275682,10.3582958 13.9497532,10.4930662 C14.4279751,10.7831407 14.9241978,11.1427602 15.4394636,11.5717392 C15.732385,11.8156078 15.7710449,12.2494418 15.5258128,12.5407346 C15.2805808,12.8320274 14.8443213,12.8704723 14.5513999,12.6266038 C14.0866111,12.2396488 13.6455819,11.9200289 13.2293546,11.6675584 C12.8528749,11.4391975 12.384017,11.2042359 11.8239965,10.9643237 C11.1032931,11.2862459 10.3062136,11.4644715 9.46727453,11.4644715 C8.53944258,11.4644715 7.66281089,11.2464759 6.88634681,10.8591798 L6.84481353,10.878634 L6.84481353,10.878634 C4.89437187,11.634739 3.4715441,12.752929 2.55274945,14.2369477 C1.63088171,15.7259301 1.25429819,17.3895789 1.42222738,19.2506112 C1.45637018,19.6289901 1.17559676,19.9632511 0.795102385,19.9972041 C0.414608014,20.031157 0.078478173,19.7519447 0.0443353722,19.3735658 C-0.149844712,17.2216146 0.29386687,15.2614114 1.37469861,13.5156736 C2.32539098,11.9801342 3.72215476,10.7855333 5.54907869,9.93439694 C4.41355013,8.88953631 3.70299014,7.39340475 3.70299014,5.73223573 C3.70299014,2.56640935 6.28374817,0 9.46727453,0 Z M16.868159,12.6926826 C17.2480582,12.6926826 17.5560273,13.0023735 17.5560273,13.3843967 L17.556,15.136 L19.3082859,15.1366553 C19.690309,15.1366553 20,15.4446244 20,15.8245236 C20,16.2044227 19.690309,16.5123919 19.3082859,16.5123919 L17.556,16.512 L17.5560273,18.2646504 C17.5560273,18.6466736 17.2480582,18.9563646 16.868159,18.9563646 C16.4882598,18.9563646 16.1802907,18.6466736 16.1802907,18.2646504 L16.18,16.512 L14.4280321,16.5123919 C14.046009,16.5123919 13.736318,16.2044227 13.736318,15.8245236 C13.736318,15.4446244 14.046009,15.1366553 14.4280321,15.1366553 L16.18,15.136 L16.1802907,13.3843967 C16.1802907,13.0023735 16.4882598,12.6926826 16.868159,12.6926826 Z M9.46727453,1.37573658 C7.04779449,1.37573658 5.08641839,3.32620768 5.08641839,5.73223573 C5.08641839,8.13826378 7.04779449,10.0887349 9.46727453,10.0887349 C11.8867546,10.0887349 13.8481307,8.13826378 13.8481307,5.73223573 C13.8481307,3.32620768 11.8867546,1.37573658 9.46727453,1.37573658 Z"],"user-delete":["M10.5957552,0 C13.8224853,0 16.4382669,2.56640935 16.4382669,5.73223573 C16.4382669,7.47669938 15.644028,9.03915996 14.3909809,10.090518 C14.664623,10.2235258 14.9136176,10.3581474 15.1390658,10.4930662 C15.6237777,10.7831407 16.1267346,11.1427602 16.6489931,11.5717392 C16.9458898,11.8156078 16.9850743,12.2494418 16.7365142,12.5407346 C16.4879541,12.8320274 16.045774,12.8704723 15.7488774,12.6266038 C15.277781,12.2396488 14.8307666,11.9200289 14.4088906,11.6675584 C14.0273537,11.4392287 13.5522104,11.2043 12.9846924,10.9644217 C12.2542265,11.2861908 11.4462112,11.4644715 10.5957552,11.4644715 C9.6553574,11.4644715 8.76685182,11.2464878 7.97986631,10.8592117 L7.93770472,10.878634 L7.93770472,10.878634 C5.96079356,11.634739 4.51865654,12.752929 3.5873929,14.2369477 C2.65301446,15.7259301 2.27132031,17.3895789 2.44152848,19.2506112 C2.47613463,19.6289901 2.19155082,19.9632511 1.80589275,19.9972041 C1.42023467,20.031157 1.0795432,19.7519447 1.04493705,19.3735658 C0.84812174,17.2216146 1.29785495,15.2614114 2.39335469,13.5156736 C3.35678473,11.9803959 4.77218575,10.7859405 6.62343881,9.9348321 C5.47339407,8.88942725 4.75324355,7.3933442 4.75324355,5.73223573 C4.75324355,2.56640935 7.36902513,0 10.5957552,0 Z M17.8192835,14.2393646 C18.088619,13.9725618 18.5261801,13.9716914 18.7966038,14.2374206 C19.0670274,14.5031499 19.0679096,14.9348524 18.7985741,15.2016552 L18.7985741,15.2016552 L17.607,16.381 L18.7985741,17.5612253 C19.0679096,17.8280282 19.0670274,18.2597307 18.7966038,18.5254599 C18.5261801,18.7911891 18.088619,18.7903187 17.8192835,18.5235159 L16.632,17.347 L15.4451813,18.5235159 C15.2027794,18.7636384 14.8241147,18.7883557 14.5536669,18.5971813 L14.467861,18.5254599 C14.1974374,18.2597307 14.1965552,17.8280282 14.4658907,17.5612253 L14.4658907,17.5612253 L15.656,16.381 L14.4658907,15.2016552 C14.1965552,14.9348524 14.1974374,14.5031499 14.467861,14.2374206 C14.7382847,13.9716914 15.1758458,13.9725618 15.4451813,14.2393646 L16.632,15.415 Z M10.5957552,1.37573658 C8.14344035,1.37573658 6.15544635,3.32620768 6.15544635,5.73223573 C6.15544635,8.13826378 8.14344035,10.0887349 10.5957552,10.0887349 C13.0480701,10.0887349 15.0360641,8.13826378 15.0360641,5.73223573 C15.0360641,3.32620768 13.0480701,1.37573658 10.5957552,1.37573658 Z"],"user":["M9.99296258,10.5729355 C12.478244,10.5729355 14.4929626,8.55821687 14.4929626,6.0729355 C14.4929626,3.58765413 12.478244,1.5729355 9.99296258,1.5729355 C7.5076812,1.5729355 5.49296258,3.58765413 5.49296258,6.0729355 C5.49296258,8.55821687 7.5076812,10.5729355 9.99296258,10.5729355 Z M10,0 C13.3137085,0 16,2.6862915 16,6 C16,8.20431134 14.8113051,10.1309881 13.0399615,11.173984 C16.7275333,12.2833441 19.4976819,15.3924771 19.9947005,19.2523727 C20.0418583,19.6186047 19.7690435,19.9519836 19.3853517,19.9969955 C19.0016598,20.0420074 18.6523872,19.7816071 18.6052294,19.4153751 C18.0656064,15.2246108 14.4363723,12.0699838 10.034634,12.0699838 C5.6099956,12.0699838 1.93381693,15.231487 1.39476476,19.4154211 C1.34758036,19.7816499 0.998288773,20.0420271 0.614600177,19.9969899 C0.230911582,19.9519526 -0.0418789616,19.6185555 0.00530544566,19.2523267 C0.500630192,15.4077896 3.28612316,12.3043229 6.97954305,11.1838052 C5.19718955,10.1447285 4,8.21217353 4,6 C4,2.6862915 6.6862915,0 10,0 Z"],"usergroup-add":["M12.3463805,11.1013364 C13.2265567,11.1013364 14.0874144,11.2471388 14.9012279,11.5291825 C15.2643672,11.6550359 15.4547893,12.04596 15.3265475,12.402336 C15.1983057,12.7587121 14.7999626,12.9455876 14.4368233,12.8197343 C13.7716638,12.5892097 13.0678099,12.4699988 12.3463805,12.4699988 C8.88031555,12.4699988 6.07051471,15.2274683 6.07051471,18.6289795 C6.07051471,18.8367718 6.0809751,19.0431943 6.10174374,19.247776 C6.13992287,19.6238599 5.860211,19.95911 5.47698981,19.996578 C5.09376861,20.0340461 4.75215616,19.7595437 4.71397703,19.3834599 C4.68863298,19.133808 4.67587786,18.8821019 4.67587786,18.6289795 C4.67587786,14.471577 8.11007889,11.1013364 12.3463805,11.1013364 Z M16.4921784,12.469798 C16.8736887,12.4715456 17.1873616,12.7822656 17.1927866,13.1638104 L17.192,15.423 L19.3059875,15.4180829 C19.6528465,15.4230146 19.9411725,15.6826968 19.9920418,16.0165053 L20,16.118691 C20.0017477,16.5002013 19.6938612,16.8050788 19.3123163,16.7996538 L19.3123163,16.7996538 L17.192,16.804 L17.1927866,19.1743938 C17.1982115,19.5559386 16.893334,19.8638251 16.5118238,19.8620775 C16.1303135,19.8603298 15.8166405,19.5496098 15.8112156,19.168065 L15.811,16.807 L13.301733,16.8139931 C12.954874,16.8090613 12.666548,16.5493791 12.6156787,16.2155706 L12.6077205,16.1133849 C12.6059728,15.7318746 12.9138593,15.4269972 13.2954042,15.4324221 L13.2954042,15.4324221 L15.811,15.426 L15.8112156,13.1574816 C15.8057907,12.7759368 16.1106681,12.4680503 16.4921784,12.469798 Z M7.67050268,8.21990587 C8.05562101,8.21990587 8.36782111,8.52629138 8.36782111,8.90423706 C8.36782111,9.28218274 8.05562101,9.58856825 7.67050268,9.58856825 C4.20443769,9.58856825 1.39463685,12.3460378 1.39463685,15.7475489 C1.39463685,15.9553413 1.40509723,16.1617638 1.42586588,16.3663455 C1.464045,16.7424294 1.18433314,17.0776795 0.801111945,17.1151475 C0.41789075,17.1526156 0.0762782936,16.8781132 0.0380991673,16.5020293 C0.0127551123,16.2523775 0,16.0006714 0,15.7475489 C0,11.5901465 3.43420103,8.21990587 7.67050268,8.21990587 Z M12.6092723,2.96635395 C14.7916095,2.96635395 16.5607434,4.7025385 16.5607434,6.84423068 C16.5607434,8.98592286 14.7916095,10.7221074 12.6092723,10.7221074 C10.4269351,10.7221074 8.65780123,8.98592286 8.65780123,6.84423068 C8.65780123,4.7025385 10.4269351,2.96635395 12.6092723,2.96635395 Z M12.6092723,4.33501632 C11.1971718,4.33501632 10.0524381,5.45842986 10.0524381,6.84423068 C10.0524381,8.2300315 11.1971718,9.35344503 12.6092723,9.35344503 C14.0213729,9.35344503 15.1661065,8.2300315 15.1661065,6.84423068 C15.1661065,5.45842986 14.0213729,4.33501632 12.6092723,4.33501632 Z M8.02481396,0 C9.26971966,0 10.4198525,0.56958919 11.1625902,1.52057247 C11.3968713,1.82054038 11.3390068,2.25009761 11.0333461,2.4800154 C10.7276854,2.70993319 10.289976,2.65314634 10.0556948,2.35317843 C9.57412927,1.73659357 8.83119077,1.36866238 8.02481396,1.36866238 C6.6127134,1.36866238 5.46797973,2.49207591 5.46797973,3.87787673 C5.46797973,5.08986403 6.35031358,6.12282783 7.5489833,6.34384426 C7.92747905,6.41363311 8.17666175,6.77132498 8.10554845,7.14277141 C8.03443515,7.51421785 7.669955,7.75875964 7.29145926,7.68897079 C5.43632189,7.34691172 4.07334288,5.75124816 4.07334288,3.87787673 C4.07334288,1.73618455 5.84247674,0 8.02481396,0 Z"],"usergroup-delete":["M12.4420313,11.1013364 C13.3105334,11.1013364 14.1599733,11.2471388 14.9629929,11.5291825 C15.3213158,11.6550359 15.5092122,12.04596 15.3826713,12.402336 C15.2561304,12.7587121 14.8630707,12.9455876 14.5047478,12.8197343 C13.8484106,12.5892097 13.1538921,12.4699988 12.4420313,12.4699988 C9.02193791,12.4699988 6.2494044,15.2274683 6.2494044,18.6289795 C6.2494044,18.8367718 6.25972604,19.0431943 6.28021922,19.247776 C6.31789196,19.6238599 6.08169113,19.9574366 5.67614746,19.9987252 C5.27060379,20.0400138 4.94853167,19.7595437 4.91085892,19.3834599 C4.88585101,19.133808 4.87326508,18.8821019 4.87326508,18.6289795 C4.87326508,14.471577 8.26191715,11.1013364 12.4420313,11.1013364 Z M18.8256139,13.7861843 C19.0956136,13.5202273 19.5312702,13.5223154 19.7986801,13.7908482 C20.0660899,14.0593809 20.0639904,14.4926704 19.7939907,14.7586274 L19.7939907,14.7586274 L18.16,16.367 L19.7939907,17.975879 C20.0639904,18.241836 20.0660899,18.6751255 19.7986801,18.9436582 C19.5312702,19.212191 19.0956136,19.2142791 18.8256139,18.9483221 L17.182,17.33 L15.5406093,18.9483221 C15.2976095,19.1876834 14.9204277,19.2099282 14.6524796,19.0162231 L14.5675431,18.9436582 C14.3001333,18.6751255 14.3022327,18.241836 14.5722325,17.975879 L14.5722325,17.975879 L16.205,16.367 L14.5722325,14.7586274 C14.3022327,14.4926704 14.3001333,14.0593809 14.5675431,13.7908482 C14.834953,13.5223154 15.2706096,13.5202273 15.5406093,13.7861843 L17.183,15.404 Z M7.56876625,8.21990587 C7.94877663,8.21990587 8.25683591,8.52629138 8.25683591,8.90423706 C8.25683591,9.28218274 7.94877663,9.58856825 7.56876625,9.58856825 C4.14867284,9.58856825 1.37613932,12.3460378 1.37613932,15.7475489 C1.37613932,15.9553413 1.38646096,16.1617638 1.40695414,16.3663455 C1.44462689,16.7424294 1.16862494,17.0776795 0.790486531,17.1151475 C0.412348126,17.1526156 0.0752665892,16.8781132 0.0375938454,16.5020293 C0.012585937,16.2523775 0,16.0006714 0,15.7475489 C0,11.5901465 3.38865208,8.21990587 7.56876625,8.21990587 Z M12.7014363,2.96635395 C14.8548284,2.96635395 16.6004977,4.7025385 16.6004977,6.84423068 C16.6004977,8.98592286 14.8548284,10.7221074 12.7014363,10.7221074 C10.5480441,10.7221074 8.80237487,8.98592286 8.80237487,6.84423068 C8.80237487,4.7025385 10.5480441,2.96635395 12.7014363,2.96635395 Z M12.7014363,4.33501632 C11.3080649,4.33501632 10.1785142,5.45842986 10.1785142,6.84423068 C10.1785142,8.2300315 11.3080649,9.35344503 12.7014363,9.35344503 C14.0948077,9.35344503 15.2243584,8.2300315 15.2243584,6.84423068 C15.2243584,5.45842986 14.0948077,4.33501632 12.7014363,4.33501632 Z M7.91837818,0 C9.14677229,0 10.2816505,0.56958919 11.014537,1.52057247 C11.2457108,1.82054038 11.1886138,2.25009761 10.8870071,2.4800154 C10.5854005,2.70993319 10.1534966,2.65314634 9.92232282,2.35317843 C9.44714441,1.73659357 8.71405975,1.36866238 7.91837818,1.36866238 C6.52500679,1.36866238 5.39545609,2.49207591 5.39545609,3.87787673 C5.39545609,5.08986403 6.26608726,6.12282783 7.44885863,6.34384426 C7.82233425,6.41363311 8.06821197,6.77132498 7.99804186,7.14277141 C7.92787176,7.51421785 7.56822584,7.75875964 7.19475021,7.68897079 C5.36421815,7.34691172 4.01931678,5.75124816 4.01931678,3.87787673 C4.01931678,1.73618455 5.76498603,0 7.91837818,0 Z"],"verification":["M2.72727273,3.33333333 C1.97415716,3.33333333 1.36363636,3.930287 1.36363636,4.66666667 L1.36363636,15.3333333 C1.36363636,16.069713 1.97415716,16.6666667 2.72727273,16.6666667 L17.2727273,16.6666667 C18.0258428,16.6666667 18.6363636,16.069713 18.6363636,15.3333333 L18.6363636,4.66666667 C18.6363636,3.930287 18.0258428,3.33333333 17.2727273,3.33333333 L2.72727273,3.33333333 Z M17.2727273,2 C18.7789584,2 20,3.19390733 20,4.66666667 L20,15.3333333 C20,16.8060927 18.7789584,18 17.2727273,18 L2.72727273,18 C1.22104159,18 0,16.8060927 0,15.3333333 L0,4.66666667 C0,3.19390733 1.22104159,2 2.72727273,2 L17.2727273,2 Z M8.16666667,13.1333333 L4,13.1333333 C3.62344222,13.1333333 3.31818182,13.4318102 3.31818182,13.8 C3.31818182,14.1681898 3.62344222,14.4666667 4,14.4666667 L4,14.4666667 L8.16666667,14.4666667 C8.54322445,14.4666667 8.84848485,14.1681898 8.84848485,13.8 C8.84848485,13.4318102 8.54322445,13.1333333 8.16666667,13.1333333 L8.16666667,13.1333333 Z M13.75,5.33333333 C12.2256209,5.33333333 10.9848485,6.52447482 10.9848485,8 C10.9848485,8.77302759 11.3254047,9.46800006 11.8688812,9.95452977 C10.8391408,10.5627758 10.1515152,11.6575022 10.1515152,12.9090402 C10.1515152,13.2662051 10.2078201,13.6168504 10.3172774,13.9516079 C10.4319483,14.3023104 10.8156694,14.4957175 11.1743424,14.3835948 C11.5330155,14.2714721 11.7308182,13.8962782 11.6161473,13.5455757 C11.5494668,13.3416441 11.5151515,13.1279418 11.5151515,12.9090402 C11.5151515,11.7335986 12.5129554,10.7757069 13.75,10.7757069 C14.9870446,10.7757069 15.9848485,11.7335986 15.9848485,12.9090402 C15.9848485,13.0815383 15.9635437,13.2508273 15.9218367,13.4147606 C15.8309344,13.7720611 16.0534757,14.1337638 16.4188968,14.2226461 C16.7843178,14.3115284 17.154241,14.0939324 17.2451433,13.7366318 C17.3135782,13.4676418 17.3484848,13.1902722 17.3484848,12.9090402 C17.3484848,11.6575022 16.6608592,10.5627758 15.6313396,9.95339218 C16.1745953,9.46800006 16.5151515,8.77302759 16.5151515,8 C16.5151515,6.52447482 15.2743791,5.33333333 13.75,5.33333333 Z M8.16666667,9.63333333 L4,9.63333333 C3.62344222,9.63333333 3.31818182,9.93181017 3.31818182,10.3 C3.31818182,10.6681898 3.62344222,10.9666667 4,10.9666667 L4,10.9666667 L8.16666667,10.9666667 C8.54322445,10.9666667 8.84848485,10.6681898 8.84848485,10.3 C8.84848485,9.93181017 8.54322445,9.63333333 8.16666667,9.63333333 L8.16666667,9.63333333 Z M13.75,6.66666667 C14.5268073,6.66666667 15.1515152,7.26638618 15.1515152,8 C15.1515152,8.73361382 14.5268073,9.33333333 13.75,9.33333333 C12.9731927,9.33333333 12.3484848,8.73361382 12.3484848,8 C12.3484848,7.26638618 12.9731927,6.66666667 13.75,6.66666667 Z M8.16666667,6.13333333 L4,6.13333333 C3.62344222,6.13333333 3.31818182,6.43181017 3.31818182,6.8 C3.31818182,7.16818983 3.62344222,7.46666667 4,7.46666667 L4,7.46666667 L8.16666667,7.46666667 C8.54322445,7.46666667 8.84848485,7.16818983 8.84848485,6.8 C8.84848485,6.43181017 8.54322445,6.13333333 8.16666667,6.13333333 L8.16666667,6.13333333 Z"],"verticle-left":["M13.8859421,2.20275228 C14.1590739,1.92747624 14.6070655,1.92239675 14.8865593,2.19140691 C15.166053,2.46041707 15.1712103,2.90164821 14.8980785,3.17692425 L14.8980785,3.17692425 L8.27214312,9.85487499 L15.2636028,16.7309475 C15.5401323,17.0029132 15.540454,17.4441734 15.2643213,17.7165299 C14.9881887,17.9888864 14.5401676,17.9892033 14.2636381,17.7172376 L14.2636381,17.7172376 L6.893,10.469 L6.89370691,17.3076249 C6.89370691,17.6900131 6.58171499,18 6.19685345,18 C5.81199192,18 5.5,17.6900131 5.5,17.3076249 L5.5,2.69237509 C5.5,2.30998689 5.81199192,2 6.19685345,2 C6.58171499,2 6.89370691,2.30998689 6.89370691,2.69237509 L6.893,9.249 Z"],"verticle-right":["M13.6062931,9.25610352 L6.61405795,2.20275228 C6.24724783,1.91137478 5.90986903,1.91137478 5.60192154,2.20275228 C5.29397405,2.49412977 5.29397405,2.81885376 5.60192154,3.17692425 L12.2278569,9.85487499 L5.23639721,16.7309475 C4.92268131,17.0346038 4.9150238,17.356486 5.21342468,17.6965942 C5.51182556,18.0367025 5.85280464,18.0435836 6.23636191,17.7172376 L13.6062931,10.4718628 L13.6062931,17.3076249 C13.6062931,17.7692083 13.8385776,18 14.3031465,18 C14.7677155,18 15,17.7692083 15,17.3076249 L15,2.69237509 C15,2.22607557 14.7677155,1.99528387 14.3031465,2 C13.8385776,2.00471613 13.6062931,2.23550783 13.6062931,2.69237509 L13.6062931,9.25610352 Z"],"video-camera":["M1.82283154,10.1460667 C1.57115103,10.1460667 1.36712366,10.3508867 1.36712366,10.603545 L1.36712366,18.1700871 C1.36712366,18.4227453 1.57115103,18.6275653 1.82283154,18.6275653 L14.9906676,18.6275653 C15.2423481,18.6275653 15.4463755,18.4227453 15.4463755,18.1700871 L15.4463755,10.603545 C15.4463755,10.3508867 15.2423481,10.1460667 14.9906676,10.1460667 L1.82283154,10.1460667 Z M14.9906676,8.77363204 C15.9973897,8.77363204 16.8134992,9.59291196 16.8134992,10.603545 L16.8134992,18.1700871 C16.8134992,19.1807201 15.9973897,20 14.9906676,20 L1.82283154,20 C0.81610948,20 0,19.1807201 0,18.1700871 L0,10.603545 C0,9.59291196 0.81610948,8.77363204 1.82283154,8.77363204 L14.9906676,8.77363204 Z M20,12.6907955 L20,16.1729136 C20,16.6075408 19.6026219,16.9326874 19.1785735,16.8450293 L17.746,16.549 L17.746,15.147 L18.6328763,15.3309948 L18.6328763,13.5388772 L17.746,13.728 L17.746,12.325 L19.1737979,12.0196847 C19.5991635,11.9285722 20,12.2541653 20,12.6907955 Z M5.01278674,13.1378266 C4.00606468,13.1378266 3.1899552,13.9571065 3.1899552,14.9677395 C3.1899552,15.9783725 4.00606468,16.7976524 5.01278674,16.7976524 C6.01950881,16.7976524 6.83561829,15.9783725 6.83561829,14.9677395 C6.83561829,13.9571065 6.01950881,13.1378266 5.01278674,13.1378266 Z M5.01278674,14.052783 C5.51614778,14.052783 5.92420252,14.462423 5.92420252,14.9677395 C5.92420252,15.473056 5.51614778,15.8826959 5.01278674,15.8826959 C4.50942571,15.8826959 4.10137097,15.473056 4.10137097,14.9677395 C4.10137097,14.462423 4.50942571,14.052783 5.01278674,14.052783 Z M12.6992895,0.0996970291 C14.8385739,0.0996970291 16.5728065,1.84066686 16.5728065,3.98826198 C16.5728065,6.1358571 14.8385739,7.87682693 12.6992895,7.87682693 C10.5600051,7.87682693 8.82577245,6.1358571 8.82577245,3.98826198 C8.82577245,1.84066686 10.5600051,0.0996970291 12.6992895,0.0996970291 Z M4.10137097,0 C6.24065536,0 7.974888,1.74096983 7.974888,3.88856495 C7.974888,6.03616007 6.24065536,7.7771299 4.10137097,7.7771299 C1.96208659,7.7771299 0.227853943,6.03616007 0.227853943,3.88856495 C0.227853943,1.74096983 1.96208659,0 4.10137097,0 Z M12.6992895,1.47213172 C11.3150466,1.47213172 10.1928961,2.59864161 10.1928961,3.98826198 C10.1928961,5.37788235 11.3150466,6.50439224 12.6992895,6.50439224 C14.0835323,6.50439224 15.2056829,5.37788235 15.2056829,3.98826198 C15.2056829,2.59864161 14.0835323,1.47213172 12.6992895,1.47213172 Z M4.10137097,1.37243469 C2.71712814,1.37243469 1.5949776,2.49894458 1.5949776,3.88856495 C1.5949776,5.27818532 2.71712814,6.40469521 4.10137097,6.40469521 C5.48561381,6.40469521 6.60776434,5.27818532 6.60776434,3.88856495 C6.60776434,2.49894458 5.48561381,1.37243469 4.10137097,1.37243469 Z"],"warning-o":["M17.5091576,19.5 L2.49148361,19.5 C1.48439979,19.5 0.675357727,19.0950413 0.271315864,18.3887333 C-0.132830165,17.6824252 -0.0836634748,16.7598225 0.406711764,15.8582768 L7.98396545,1.92864732 C8.47719485,1.0205279 9.21063271,0.5 9.99532059,0.5 C10.7801126,0.5 11.5128213,1.01989174 12.0074257,1.92720536 L19.5926378,15.8596975 C20.082888,16.7612645 20.1335964,17.6831886 19.7287003,18.3894118 C19.3253043,19.0956987 18.5155956,19.5 17.5091576,19.5 L17.5091576,19.5 Z M9.99609142,1.96223661 C9.7465913,1.96223661 9.46082033,2.2159375 9.22915355,2.64076563 L1.65189987,16.5718158 C1.41448309,17.0090279 1.35892056,17.4017511 1.50073313,17.6494933 C1.6426707,17.8966205 2.00396254,18.038548 2.49150444,18.038548 L17.5091784,18.038548 C17.9974911,18.038548 18.3581372,17.8974051 18.4999706,17.6494933 C18.6410331,17.4023873 18.5862206,17.0098125 18.348158,16.5725792 L10.7630501,2.64076563 C10.53205,2.2159375 10.2448207,1.96223661 9.99609142,1.96223661 L9.99609142,1.96223661 Z M10.0003623,12.9037344 C9.60696623,12.9037344 9.28765358,12.576875 9.28765358,12.1725949 L9.28765358,5.59236049 C9.28765358,5.18875893 9.60696623,4.86119978 10.0003623,4.86119978 C10.3938208,4.86119978 10.7131334,5.18875893 10.7131334,5.59236049 L10.7131334,12.1725737 C10.7131126,12.576875 10.3938,12.9037344 10.0003623,12.9037344 Z M9.99523726,16.4776217 C10.6085917,16.4776217 11.105842,15.9666574 11.105842,15.3363705 C11.105842,14.7060837 10.6086126,14.1951194 9.99523726,14.1951194 C9.38186196,14.1951194 8.88465338,14.7060837 8.88465338,15.3363705 C8.88465338,15.9666574 9.38188279,16.4776217 9.99523726,16.4776217 Z"],"warning":["M19.5907523,15.8607776 L12.0056301,1.92309891 C11.5148908,1.01057747 10.7787819,0.5 9.98933176,0.5 C9.19988163,0.5 8.47444097,1.02144082 7.97303345,1.93396226 L0.409247749,15.8607776 C-0.0814915205,16.7624357 -0.134832745,17.6858205 0.270560564,18.3919383 C0.675953874,19.098056 1.48674049,19.5 2.48955552,19.5 L17.5104445,19.5 C18.5132595,19.5 19.3240461,19.098056 19.7294394,18.3919383 C20.1348327,17.6858205 20.0814915,16.773299 19.5907523,15.8607776 Z M10,4.85620354 C10.3947251,4.85620354 10.7147724,5.18210406 10.7147724,5.58404803 L10.7147724,12.1672384 C10.7147724,12.5692158 10.3947579,12.8950829 10,12.8950829 C9.6052421,12.8950829 9.28522759,12.5692158 9.28522759,12.1672384 L9.28522759,5.58404803 C9.28522759,5.19296741 9.60527494,4.85620354 10,4.85620354 L10,4.85620354 Z M10,16.4799886 C9.38124179,16.4799886 8.89050252,15.9694111 8.89050252,15.3393368 C8.89050252,14.7092624 9.39191004,14.198685 10,14.198685 C10.6187582,14.198685 11.1094975,14.7092624 11.1094975,15.3393368 C11.1094975,15.9694111 10.60809,16.4799886 10,16.4799886 Z"],"weibo":["M14.8116637,9.80140866 C14.0339912,9.65987768 14.4126385,9.26711618 14.4126385,9.26711618 C14.4126385,9.26711618 15.1734442,8.08881081 14.2616596,7.23259532 C13.1310733,6.1718952 10.3849638,7.36768075 10.3849638,7.36768075 C9.33593364,7.67356288 9.61438018,7.22779766 9.76300352,6.47114405 C9.76300352,5.57886267 9.4371344,4.06905983 6.64315781,4.96134121 C3.85215903,5.85766931 1.45487431,8.99892697 1.45487431,8.99892697 C-0.211604897,11.0866601 0.00975232499,12.7000716 0.00975232499,12.7000716 C0.426022125,16.2618754 4.45783025,17.2399306 7.59394275,17.4714908 C10.8927898,17.7140855 15.3461567,16.4039905 16.6957668,13.7114601 C18.046177,11.014883 15.5924252,9.94792503 14.8116193,9.80142952 L14.8116637,9.80140866 Z M13.7679448,12.3499675 C13.7679448,14.4010716 11.1149692,16.3269776 7.83830014,16.4674239 C4.56240882,16.6106445 1.91492222,15.0688225 1.91492222,13.0177184 C1.91492222,10.9633185 4.56238659,9.3165738 7.83830014,9.17466735 C11.1149915,9.03257317 13.7679448,10.3006991 13.7679448,12.3499675 Z M7.18436189,10.5272738 C3.89060376,10.8891425 4.27100662,13.7855944 4.27100662,13.7855944 C4.27100662,13.7855944 4.23709526,14.702907 5.15416883,15.1698654 C7.08142778,16.1495893 9.06595383,15.5567445 10.0690947,14.3410591 C11.0720578,13.1252069 10.4839867,10.168388 7.18436189,10.5272738 Z M7.465164,13.6015728 C7.465164,14.082507 6.96653802,14.526812 6.35300007,14.592686 C5.73886212,14.6604164 5.24281394,14.3270833 5.24281394,13.8445222 C5.24281394,13.3632125 5.68299503,12.8598337 6.29831077,12.7998212 C7.00498276,12.7363043 7.465164,13.1184276 7.465164,13.6015728 Z M8.46770488,12.4510521 C8.57850571,12.6260833 8.49908289,12.8890994 8.29537025,13.0402048 C8.08690201,13.1859703 7.83103342,13.1659035 7.72121037,12.9906846 C7.60609839,12.8195125 7.64945428,12.5450863 7.85965586,12.4015319 C8.1035688,12.230923 8.35750405,12.2804223 8.46770488,12.4510521 Z M13.3275415,2.6463241 C13.6630329,2.58558155 14.8597085,2.36491004 16.0240284,2.62093822 C18.1067997,3.07700798 20.9652656,4.96670208 19.679167,8.98881016 L19.679167,8.98881016 C19.5852108,9.56361158 19.2814974,9.60925193 18.9193391,9.60925193 C18.4866025,9.60925193 18.1375777,9.35397469 18.1375777,8.94738341 C18.1375777,8.59475537 18.2930677,8.23695421 18.2930677,8.23695421 C18.3385347,8.08862307 18.7044486,7.16686737 18.0516881,5.78941738 C16.8536347,3.90160063 14.4433943,3.87435826 14.1585033,3.98220132 C13.9667389,4.05240013 13.7146678,4.09951455 13.5679276,4.12312429 L13.4624324,4.13888358 L13.4624324,4.13888358 L13.4475201,4.14085786 C13.011228,4.14085786 12.6620253,3.8079211 12.6620253,3.40354091 C12.6620253,3.06397086 12.9036049,2.77665359 13.2349852,2.68850179 C13.2349852,2.68850179 13.2420741,2.67763405 13.2532298,2.67523522 C13.2771411,2.67060444 13.3018524,2.64834746 13.3275415,2.6463241 Z M13.9883242,5.25748201 C13.9883242,5.25748201 17.3548384,4.6734816 16.9524799,8.06834774 C16.9524799,8.08841448 16.9497465,8.10443449 16.9452354,8.12245701 C16.9077684,8.36321612 16.6815,8.54763401 16.4163869,8.54763401 C16.1160069,8.54763401 15.8728495,8.32270718 15.8728495,8.04148085 C15.8728495,8.04148085 16.4065869,5.7724587 13.9883242,6.27272951 C13.6892775,6.27272951 13.4500757,6.04613393 13.4500757,5.7680365 C13.4500757,5.48459908 13.6892997,5.25748201 13.9883242,5.25748201 Z"],"weixin":["M14.0002275,7.30073677 C17.2000455,7.30073677 20,9.55838358 20,12.3067649 C20,13.7789685 18.900489,15.1533825 17.5002843,16.2330878 L17.5002843,16.2330878 L18.0002275,18 L16.1000796,16.9202947 C15.4004322,17.1163206 14.7003298,17.312793 14.0002275,17.312793 C10.6002502,17.312793 8.00045491,15.0551463 8.00045491,12.3067649 C8.00045491,9.55838356 10.7003298,7.30073677 14.0002275,7.30073677 Z M7.00011374,2 C10.5001706,2 13.5002843,4.06117437 14.3009212,6.8095557 L14.3009212,6.8095557 L13.6008188,6.8095557 C10.2008416,6.80955572 7.60104628,9.26412146 7.60104628,12.3067649 C7.6010463,12.7974994 7.700671,13.288234 7.80075061,13.7789685 L7.80075061,13.7789685 L7.10064824,13.7789685 C6.20038667,13.7789685 5.50028433,13.5829426 4.60047765,13.3864702 L4.60047765,13.3864702 L2.10030707,14.5644117 L2.79995452,12.5032373 C1.09996589,11.3252958 1.38911105e-12,9.75485601 1.38911105e-12,7.88970753 C1.38911105e-12,4.55235544 3.10019335,2 7.00011374,2 Z M12.1005345,10.0486716 C11.8002957,10.0486716 11.4004322,10.4416164 11.4004322,10.7358785 C11.4004322,11.1283769 11.700671,11.4230855 12.1005345,11.4230855 C12.6004777,11.4230855 13.0003412,11.0305872 13.0007961,10.7358785 C13.0007961,10.3433802 12.6004777,10.0486716 12.1005345,10.0486716 Z M15.9003753,10.0486716 C15.6001365,10.0486716 15.2002729,10.4416164 15.2002729,10.7358785 C15.2002729,11.1283769 15.6005914,11.4230855 15.9003753,11.4230855 C16.500398,11.4230855 16.8006369,11.0305872 16.8006369,10.7358785 C16.8006369,10.3433802 16.4003184,10.0486716 15.9003753,10.0486716 Z M4.80018196,4.84617101 C4.20061413,4.84617101 3.70021609,5.23866935 3.70021609,5.72985042 C3.70021609,6.31882117 4.30023883,6.61352981 4.80018196,6.61352981 C5.30058002,6.61352981 5.60036393,6.31882117 5.70044354,5.72985042 C5.70044354,5.14087965 5.30012509,4.84617101 4.80018196,4.84617101 Z M9.70044354,4.84617101 C9.10042078,4.84617101 8.60047765,5.23866935 8.60047765,5.72985042 C8.60047765,6.31882117 9.20050041,6.61352981 9.70044354,6.61352981 C10.2003867,6.61352981 10.6002502,6.31882117 10.6007051,5.72985042 C10.6007051,5.14087965 10.2003867,4.84617101 9.70044354,4.84617101 Z"],"wifi":["M10.0011448,14 C11.1057143,14 12.0011448,14.8954305 12.0011448,16 C12.0011448,17.1045695 11.1057143,18 10.0011448,18 C8.89657531,18 8.00114481,17.1045695 8.00114481,16 C8.00114481,14.8954305 8.89657531,14 10.0011448,14 Z M10.0011448,10.1472232 C11.9659496,10.1472232 13.7603125,11.1498694 14.8015643,12.7726526 C15.0103418,13.0980308 14.9158182,13.5310496 14.59044,13.7398271 C14.2650618,13.9486046 13.832043,13.8540811 13.6232655,13.5287029 C12.8368707,12.3031123 11.484111,11.5472232 10.0011448,11.5472232 C8.51683955,11.5472232 7.16301749,12.3044899 6.37698566,13.5318829 C6.16849373,13.8574441 5.73555805,13.9523476 5.40999677,13.7438557 C5.08443548,13.5353637 4.98953202,13.1024281 5.19802396,12.7768668 C6.23879807,11.1516924 8.03456236,10.1472232 10.0011448,10.1472232 Z M10.0011448,6.2025291 C13.0606101,6.2025291 15.8635444,7.58416442 17.6768751,9.92708111 C17.9134967,10.2328085 17.8574755,10.6724693 17.5517481,10.9090909 C17.2460207,11.1457126 16.8063599,11.0896913 16.5697383,10.7839639 C15.0209501,8.78284978 12.6264244,7.6025291 10.0011448,7.6025291 C7.41623878,7.6025291 5.02878626,8.79097507 3.46424231,10.7873134 C3.22577079,11.0916001 2.78577835,11.1449538 2.48149169,10.9064823 C2.17720503,10.6680107 2.12385133,10.2280183 2.36232285,9.92373163 C4.18947988,7.59230232 6.98137588,6.2025291 10.0011448,6.2025291 Z M10.0011448,2 C13.9058258,2 17.2439431,3.49990423 19.8199702,6.32060213 C20.0806758,6.60606953 20.0606024,7.04883021 19.775135,7.3095358 C19.4896676,7.5702414 19.0469069,7.55016799 18.7862013,7.2647006 C16.4730805,4.73187976 13.5089106,3.4 10.0011448,3.4 C6.57933443,3.4 3.54796953,4.77164636 1.21131475,7.2707306 C0.947278877,7.55312058 0.504313208,7.56799952 0.221923235,7.30396365 C-0.0604667391,7.03992777 -0.0753456796,6.59696211 0.188690191,6.31457213 C2.7849335,3.53785441 6.1836214,2 10.0011448,2 Z"],"windows":["M20,10.873 L20,20 L8.479,18.537 L8.48025462,10.873 L20,10.873 Z M6.88025462,10.873 L6.879,18.334 L0,17.4606523 L0,10.873 L6.88025462,10.873 Z M20,9.273 L8.48025462,9.273 L8.479,1.463 L20,0 L20,9.273 Z M6.879,1.666 L6.88025462,9.273 L0,9.273 L0,2.53934768 L6.879,1.666 Z"],"woman":["M17.3000692,12.5348272 C17.6866303,12.5348272 18,12.8480343 18,13.2343948 C18,13.6207554 17.6866303,13.9339625 17.3000692,13.9339625 L11.043,13.933 L11.0434059,19.3004323 C11.0434059,19.6867929 10.7300362,20 10.3434751,20 C9.95691399,20 9.6435443,19.6867929 9.6435443,19.3004323 L9.643,13.933 L2.69993081,13.9339625 C2.3133697,13.9339625 2,13.6207554 2,13.2343948 C2,12.8480343 2.3133697,12.5348272 2.69993081,12.5348272 L17.3000692,12.5348272 Z M10.3434751,0 C13.491187,0 16.0429117,2.55040077 16.0429117,5.69647956 C16.0429117,8.84255836 13.491187,11.3929591 10.3434751,11.3929591 C7.1957632,11.3929591 4.64403853,8.84255836 4.64403853,5.69647956 C4.64403853,2.55040077 7.1957632,0 10.3434751,0 Z M10.3434751,1.39913533 C7.96888542,1.39913533 6.04390014,3.32312188 6.04390014,5.69647956 C6.04390014,8.06983725 7.96888542,9.9938238 10.3434751,9.9938238 C12.7180648,9.9938238 14.6430501,8.06983725 14.6430501,5.69647956 C14.6430501,3.32312188 12.7180648,1.39913533 10.3434751,1.39913533 Z"],"zoom-in":["M8.19546398,0 C12.7216937,0 16.390928,3.61950128 16.390928,8.08438239 C16.390928,10.0960164 15.6461041,11.9360453 14.4136555,13.3507563 L19.8015213,18.8243429 C20.0717775,19.0989162 20.0652194,19.5376183 19.7868733,19.8042115 C19.5085273,20.0708046 19.0637973,20.0643354 18.7935411,19.7897621 L13.4110382,14.3206504 C11.9940161,15.4751548 10.1768537,16.1687648 8.19546398,16.1687648 C3.6692342,16.1687648 0,12.5492635 0,8.08438239 C0,3.61950128 3.6692342,0 8.19546398,0 Z M8.19546398,1.38589412 C4.44515931,1.38589412 1.40493668,4.38490947 1.40493668,8.08438239 C1.40493668,11.7838553 4.44515931,14.7828707 8.19546398,14.7828707 C11.9457686,14.7828707 14.9859913,11.7838553 14.9859913,8.08438239 C14.9859913,4.38490947 11.9457686,1.38589412 8.19546398,1.38589412 Z M8.30516902,3.57538731 C8.68787312,3.57538731 8.99811609,3.8898931 8.99811609,4.27785565 L8.998,7.254 L11.9742775,7.25401709 C12.3622401,7.25401709 12.6767459,7.56426005 12.6767459,7.94696415 C12.6767459,8.32966824 12.3622401,8.63991121 11.9742775,8.63991121 L8.998,8.639 L8.99811609,11.6160727 C8.99811609,12.0040352 8.68787312,12.318541 8.30516902,12.318541 C7.92246493,12.318541 7.61222196,12.0040352 7.61222196,11.6160727 L7.612,8.639 L4.63606052,8.63991121 C4.24809797,8.63991121 3.93359218,8.32966824 3.93359218,7.94696415 C3.93359218,7.56426005 4.24809797,7.25401709 4.63606052,7.25401709 L7.612,7.254 L7.61222196,4.27785565 C7.61222196,3.8898931 7.92246493,3.57538731 8.30516902,3.57538731 Z"],"zoom-out":["M8.19546398,0 C12.7216937,0 16.390928,3.61950128 16.390928,8.08438239 C16.390928,10.0960164 15.6461041,11.9360453 14.4136555,13.3507563 L19.8015213,18.8243429 C20.0717775,19.0989162 20.0652194,19.5376183 19.7868733,19.8042115 C19.5085273,20.0708046 19.0637973,20.0643354 18.7935411,19.7897621 L13.4110382,14.3206504 C11.9940161,15.4751548 10.1768537,16.1687648 8.19546398,16.1687648 C3.6692342,16.1687648 0,12.5492635 0,8.08438239 C0,3.61950128 3.6692342,0 8.19546398,0 Z M8.19546398,1.38589412 C4.44515931,1.38589412 1.40493668,4.38490947 1.40493668,8.08438239 C1.40493668,11.7838553 4.44515931,14.7828707 8.19546398,14.7828707 C11.9457686,14.7828707 14.9859913,11.7838553 14.9859913,8.08438239 C14.9859913,4.38490947 11.9457686,1.38589412 8.19546398,1.38589412 Z M11.9742775,7.25401709 C12.3622401,7.25401709 12.6767459,7.56426005 12.6767459,7.94696415 C12.6767459,8.32966824 12.3622401,8.63991121 11.9742775,8.63991121 L4.63606052,8.63991121 C4.24809797,8.63991121 3.93359218,8.32966824 3.93359218,7.94696415 C3.93359218,7.56426005 4.24809797,7.25401709 4.63606052,7.25401709 L11.9742775,7.25401709 Z"]}');
;// CONCATENATED MODULE: ../react-icon/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const esm_style = ({});
;// CONCATENATED MODULE: ../react-icon/esm/index.js


var react_icon_esm_excluded = ["className", "prefixCls", "verticalAlign", "tagName", "color", "type", "spin"];




function Icon(props) {
  var {
      className,
      prefixCls = 'w-icon',
      verticalAlign = 'middle',
      tagName: TagName = 'span',
      color,
      type,
      spin = false
    } = props,
    others = _objectWithoutPropertiesLoose(props, react_icon_esm_excluded);
  var svg = null;
  if (typeof type === 'string') {
    svg = /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
      fill: color,
      viewBox: "0 0 20 20",
      children: (w_icon_namespaceObject[type] || []).map((d, i) => /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
        d: d,
        fillRule: "evenodd"
      }, i))
    });
  } else if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(type)) {
    svg = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(type, {
      fill: color
    });
  } else {
    return null;
  }
  others.style = _extends({
    fill: 'currentColor'
  }, others.style);
  var propps = _extends({}, others, {
    className: [prefixCls, className, prefixCls && verticalAlign ? prefixCls + "-" + verticalAlign : null, spin && prefixCls ? prefixCls + "-spin" : null].filter(Boolean).join(' ').trim()
  });
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TagName, _extends({}, propps), svg);
}

;// CONCATENATED MODULE: ../react-button/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_button_esm_style = ({});
;// CONCATENATED MODULE: ../react-button/esm/index.js


var react_button_esm_excluded = ["prefixCls", "disabled", "active", "loading", "block", "basic", "htmlType", "type", "size", "icon", "className", "children"];





/* harmony default export */ const esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-btn',
      disabled = false,
      active = false,
      loading = false,
      block = false,
      basic = false,
      htmlType = 'button',
      type = 'light',
      size = 'default',
      icon,
      className,
      children
    } = props,
    others = _objectWithoutPropertiesLoose(props, react_button_esm_excluded);
  var cls = [className, prefixCls, size ? prefixCls + "-size-" + size : null, type ? prefixCls + "-" + type : null, basic ? prefixCls + "-basic" : null, loading ? prefixCls + "-loading" : null, disabled || loading ? 'disabled' : null, active ? 'active' : null, block ? 'block' : null].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("button", _extends({}, others, {
    ref: ref,
    type: htmlType,
    disabled: disabled || loading,
    className: cls,
    children: [icon && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      type: icon
    }), children && external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(children, child => {
      if (!child) return child;
      if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) return child;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: child
      });
    })]
  }));
}));

;// CONCATENATED MODULE: ../react-modal/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_modal_esm_style = ({});
;// CONCATENATED MODULE: ../react-modal/esm/CallShow.js


var CallShow_excluded = ["title", "children"];




function CallShow(props) {
  var _ref = props || {},
    {
      title = '提示框',
      children
    } = _ref,
    other = _objectWithoutPropertiesLoose(_ref, CallShow_excluded);
  var dv = document.createElement('div');
  dv.id = 'uiw-modal-call-show-element';
  document.body.appendChild(dv);
  external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().render( /*#__PURE__*/(0,jsx_runtime.jsx)(react_modal_esm, _extends({}, other, {
    title: title,
    isOpen: true,
    onClosed: () => {
      dv.remove();
    },
    children: children
  })), dv);
}

;// CONCATENATED MODULE: ../react-modal/esm/index.js



var react_modal_esm_excluded = ["prefixCls", "className", "children", "useButton", "usePortal", "autoFocus", "isOpen", "title", "cancelText", "cancelButtonProps", "confirmButtonProps", "content", "confirmText", "type", "icon", "maxWidth", "minWidth", "width", "isCloseButtonShown", "onCancel", "onConfirm", "bodyStyle"];









var Modal = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-modal',
      className,
      children,
      useButton = true,
      usePortal = true,
      autoFocus = false,
      isOpen: _ = false,
      title,
      cancelText,
      cancelButtonProps,
      confirmButtonProps,
      content,
      confirmText = '确认',
      type = 'light',
      icon,
      maxWidth = 500,
      minWidth = 320,
      width,
      isCloseButtonShown = true,
      onCancel = noop,
      onConfirm = noop,
      bodyStyle
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_modal_esm_excluded);
  var [isOpen, setIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.isOpen);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (props.isOpen !== isOpen) {
      setIsOpen(props.isOpen);
    }
  }, [props.isOpen]);
  var [loading, setLoading] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  var cls = [prefixCls, className, type ? "" + type : null].filter(Boolean).join(' ').trim();
  function onClose() {
    setIsOpen(false);
  }
  function handleCancel(_x) {
    return _handleCancel.apply(this, arguments);
  }
  function _handleCancel() {
    _handleCancel = _asyncToGenerator(function* (e) {
      setLoading(true);
      try {
        onCancel && (yield onCancel(e));
      } catch (e) {}
      setIsOpen(false);
      setLoading(false);
    });
    return _handleCancel.apply(this, arguments);
  }
  function handleConfirm(_x2) {
    return _handleConfirm.apply(this, arguments);
  }
  function _handleConfirm() {
    _handleConfirm = _asyncToGenerator(function* (e) {
      setLoading(true);
      try {
        onConfirm && (yield onConfirm(e));
      } catch (e) {}
      setIsOpen(false);
      setLoading(false);
    });
    return _handleConfirm.apply(this, arguments);
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Overlay, _extends({
    usePortal: usePortal,
    isOpen: isOpen
  }, other, {
    onClose: onClose,
    className: cls,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-container",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: [prefixCls + "-inner", title ? prefixCls + "-shown-title" : null, icon ? prefixCls + "-shown-icon" : null].filter(Boolean).join(' ').trim(),
        style: {
          maxWidth,
          minWidth,
          width
        },
        children: [(title || icon) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: prefixCls + "-header",
          children: [icon && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
            type: icon
          }), title && /*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
            children: title
          }), isCloseButtonShown && /*#__PURE__*/(0,jsx_runtime.jsx)(esm, {
            basic: true,
            onClick: e => handleCancel(e),
            icon: "close",
            type: "light"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: prefixCls + "-body",
          style: bodyStyle,
          children: children || content
        }), useButton && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: prefixCls + "-footer",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(esm, _extends({
            autoFocus: autoFocus,
            type: type,
            loading: loading,
            disabled: loading
          }, confirmButtonProps, {
            onClick: e => handleConfirm(e),
            children: confirmText
          })), cancelText && /*#__PURE__*/(0,jsx_runtime.jsx)(esm, _extends({}, cancelButtonProps, {
            onClick: e => handleCancel(e),
            children: cancelText
          }))]
        })]
      })
    })
  }));
});
Modal.show = CallShow;
/* harmony default export */ const react_modal_esm = (Modal);

;// CONCATENATED MODULE: ../react-alert/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_alert_esm_style = ({});
;// CONCATENATED MODULE: ../react-alert/esm/index.js


var react_alert_esm_excluded = ["prefixCls", "className", "width"];




/* harmony default export */ const react_alert_esm = (function (props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-alert',
      className,
      width = 400
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_alert_esm_excluded);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react_modal_esm, _extends({}, other, {
    width: width,
    className: cls,
    children: props.children
  }));
});

;// CONCATENATED MODULE: ../react-auto-link/esm/index.js


var react_auto_link_esm_excluded = ["text"];



var delimiter = /((?:https?:\/\/)?(?:(?:[a-z0-9]?(?:[a-z0-9\-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-\\(\\)]*)/gi;
/* harmony default export */ const react_auto_link_esm = (function (props) {
  if (props === void 0) {
    props = {};
  }
  var {
      text = ''
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_auto_link_esm_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
    children: text.split(delimiter).map((word, idx) => {
      var match = word.match(delimiter);
      if (match && match[0]) {
        var url = match[0];
        return /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)("a", _extends({}, other, {
          key: idx,
          href: url.startsWith('http') ? url : "http://" + url
        }), url);
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
        children: word
      }, idx);
    })
  });
});

;// CONCATENATED MODULE: ../react-avatar/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_avatar_esm_style = ({});
;// CONCATENATED MODULE: ../react-avatar/esm/index.js


var react_avatar_esm_excluded = ["prefixCls", "shape", "size", "className", "src", "alt", "icon", "onError"];







/* harmony default export */ const react_avatar_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-avatar',
      shape = 'circle',
      size = 'default',
      className,
      src,
      alt,
      icon,
      onError: _onError = noop
    } = props,
    resetProps = _objectWithoutPropertiesLoose(props, react_avatar_esm_excluded);
  var children = props.children;
  var [isImgExist, setIsImgExist] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(true);
  var cls = [prefixCls, className, size ? prefixCls + "-" + size : null, shape ? prefixCls + "-" + shape : null, src ? prefixCls + "-image" : null].filter(Boolean).join(' ').trim();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setIsImgExist(true);
  }, [props.src]);
  if (isImgExist && src) {
    children = /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: src,
      alt: alt,
      onError: evn => {
        var errorFlag = _onError ? _onError(evn) : undefined;
        if (errorFlag !== false) {
          setIsImgExist(false);
        }
      }
    });
  } else if (icon && typeof icon === 'string') {
    children = /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      type: icon
    });
  } else if (icon && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(icon)) {
    children = icon;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", _extends({}, resetProps, {
    className: cls,
    ref: ref,
    children: children
  }));
}));

;// CONCATENATED MODULE: ../react-back-top/esm/utils.js
/**
 * 获取当前滚动条所在位置
 */
function getScrollTop() {
  var scrollTop = 0;
  if (document && document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}

/**
 * TODO
 * @param {*} position 滚动到何处
 * @param {*} step 步长
 * @param {*} current 滚动条当前位置
 */
function scrollToAnimate(position, step, current) {
  if (position === void 0) {
    position = 0;
  }
  if (step === void 0) {
    step = 100;
  }
  if (current === void 0) {
    current = 0;
  }
  var start = 0;
  var timer = setInterval(() => {
    if (current - start >= position) {
      start += step;
      if (current - start >= position) {
        window.scrollTo(0, current - start);
      } else {
        window.scrollTo(0, position);
      }
    } else {
      clearInterval(timer);
    }
  }, 0);
}
/**
 * 获取滚动条位置百分比
 */
function getScrollPercent(offsetTop) {
  if (offsetTop === void 0) {
    offsetTop = 0;
  }
  var percent = 0;
  if (offsetTop < getScrollTop()) {
    percent = Math.round((getScrollTop() - offsetTop) / (document.body.scrollHeight - offsetTop - window.innerHeight) * 100);
  }
  return percent > 100 ? 100 : percent;
}

;// CONCATENATED MODULE: ../react-back-top/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_back_top_esm_style = ({});
;// CONCATENATED MODULE: ../react-back-top/esm/index.js


var react_back_top_esm_excluded = ["prefixCls", "className", "content", "children", "offsetTop", "fixed", "speed", "showBelow", "clickable"];




/* harmony default export */ const react_back_top_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-back-top',
      className,
      content,
      children,
      offsetTop = 0,
      fixed = true,
      speed = 100,
      showBelow = 1,
      clickable = true
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_back_top_esm_excluded);
  var topShowBelow = !fixed ? 0 : showBelow || 0;
  var [percent, setPercent] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  var [current, setCurrent] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  var visible = percent >= topShowBelow;
  var cls = [prefixCls, className, !fixed ? 'no-fixed' : null, visible ? prefixCls + "-show" : null, !visible ? prefixCls + "-hide" : null].filter(Boolean).join(' ').trim();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    window && window.addEventListener('scroll', onScroll);
    return function () {
      window && window.removeEventListener('scroll', onScroll);
    };
  });
  function onScroll() {
    setPercent(getScrollPercent(offsetTop));
    setCurrent(getScrollTop());
  }
  function scrollToTop() {
    if (typeof offsetTop === 'number' && typeof speed === 'number' && typeof current === 'number') {
      scrollToAnimate(offsetTop, speed, current);
    }
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
    onClick: () => clickable && scrollToTop(),
    className: cls
  }, other, {
    ref: ref,
    children: [content, typeof children !== 'function' ? children : children({
      percent,
      current,
      scrollToTop: scrollToTop
    })]
  }));
}));

;// CONCATENATED MODULE: ../react-badge/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_badge_esm_style = ({});
;// CONCATENATED MODULE: ../react-badge/esm/index.js


var react_badge_esm_excluded = ["prefixCls", "className", "style", "color", "max", "dot", "processing", "count", "children"];




/* harmony default export */ const react_badge_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-badge',
      className,
      style = {},
      color,
      max = 99,
      dot = false,
      processing = false,
      count,
      children
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_badge_esm_excluded);
  var supProps = {
    className: [!dot ? prefixCls + "-count" : null, dot ? 'dot' : null].filter(Boolean).join(' ').trim(),
    style: {}
  };
  var cls = [className, prefixCls, !children ? 'nowrap' : null, !children ? prefixCls + "-status" : null, processing ? prefixCls + "-processing" : null].filter(Boolean).join(' ').trim();
  var warpperProps = {};
  if (count || count === 0) {
    supProps.style = _extends({
      backgroundColor: color
    }, style);
  } else {
    warpperProps.style = style || {};
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", _extends({
    className: cls
  }, other, warpperProps, {
    ref: ref,
    children: [color && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: prefixCls + "-dot",
      style: {
        backgroundColor: color
      }
    }), children, count !== 0 && !color && /*#__PURE__*/(0,jsx_runtime.jsx)("sup", _extends({}, supProps, {
      children: !dot && count && max && count > max ? max + "+" : count
    }))]
  }));
}));

;// CONCATENATED MODULE: ../react-breadcrumb/esm/style/item.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const item = ({});
;// CONCATENATED MODULE: ../react-breadcrumb/esm/Item.js


var Item_excluded = ["prefixCls", "className", "tagName", "active", "separator"];




var BreadcrumbItem = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-breadcrumb',
      className,
      tagName: TagName = 'span',
      active,
      separator
    } = props,
    other = _objectWithoutPropertiesLoose(props, Item_excluded);
  var isElm = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(separator);
  var cls = [prefixCls + "-item", className, active ? 'active' : null, !separator ? 'no-separator' : null, isElm ? 'no-before' : null].filter(Boolean).join(' ').trim();
  var otherProps = _extends({
    className: cls
  }, other);
  if (!isElm) {
    otherProps['data-separator'] = separator;
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TagName, _extends({}, otherProps, {
    ref
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
    children: [isElm && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: prefixCls + "-separator",
      children: separator
    }), props.children]
  }));
});
/* harmony default export */ const Item = (BreadcrumbItem);

;// CONCATENATED MODULE: ../react-breadcrumb/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_breadcrumb_esm_style = ({});
;// CONCATENATED MODULE: ../react-breadcrumb/esm/Breadcrumb.js


var Breadcrumb_excluded = ["prefixCls", "className", "separator"];




var Breadcrumb = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-breadcrumb',
      className,
      separator = '/'
    } = props,
    other = _objectWithoutPropertiesLoose(props, Breadcrumb_excluded);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({}, _extends({
    className: cls
  }, other), {
    ref: ref,
    children: external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(props.children, element => {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(element, Object.assign({
        separator
      }, element.props, {}));
    })
  }));
});
Breadcrumb.Item = Item;
/* harmony default export */ const esm_Breadcrumb = (Breadcrumb);


;// CONCATENATED MODULE: ../react-breadcrumb/esm/index.js



/* harmony default export */ const react_breadcrumb_esm = (esm_Breadcrumb);

;// CONCATENATED MODULE: ../react-button-group/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_button_group_esm_style = ({});
;// CONCATENATED MODULE: ../react-button-group/esm/index.js


var react_button_group_esm_excluded = ["prefixCls", "vertical", "children", "className"];



/* harmony default export */ const react_button_group_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-btn-group',
      vertical = false,
      children,
      className
    } = props,
    resetProps = _objectWithoutPropertiesLoose(props, react_button_group_esm_excluded);
  var cls = [prefixCls, className, vertical && prefixCls + "-vertical"].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: cls
  }, resetProps, {
    ref: ref,
    children: children
  }));
}));

;// CONCATENATED MODULE: ../../node_modules/@uiw/formatter/esm/index.js
/**! 
 * @uiw/formatter v2.0.2 
 * Get a formatted date. 
 * 
 * Copyright (c) 2023 Kenny Wang <wowohoo@qq.com> 
 * https://github.com/uiwjs/date-formatter.git 
 * 
 * @website: https://github.com/uiwjs/date-formatter.git
 
 * Licensed under the MIT license 
 */

var dateRegex = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:/]*)/g;
var timespan = {
    YYYY: ['getFullYear', 4],
    YY: ['getFullYear', 2],
    MM: ['getMonth', 2, 1],
    DD: ['getDate', 2],
    HH: ['getHours', 2],
    mm: ['getMinutes', 2],
    ss: ['getSeconds', 2],
    ms: ['getMilliseconds', 3],
};
function formatter(str, date, utc) {
    if (typeof str !== 'string') {
        date = str;
        str = 'YYYY-MM-DD';
    }
    return str.replace(dateRegex, function (match, key, rest) {
        var args = timespan[key];
        var chars = args[1];
        var name = args[0];
        if (utc === true) {
            name = "getUTC".concat(String(name).slice(3));
        }
        if (!date) {
            date = new Date();
        }
        var val = "00".concat(String(date[name]() + (args[2] || 0)));
        return val.slice(-chars) + (rest || '');
    });
}
formatter.utc = function (str, date) {
    return formatter(str, date, true);
};



;// CONCATENATED MODULE: ../react-overlay-trigger/esm/utils.js
var utils_canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function fallback(context, node) {
  if (node) {
    do {
      if (node === context) return true;
    } while (node = node.parentNode);
  }
  return false;
}
function isDOM(item) {
  return typeof HTMLElement === 'function' ? item instanceof HTMLElement : item && typeof item === 'object' && item.nodeType === 1 && typeof item.nodeName === 'string';
}
var contains = (() => {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return utils_canUseDOM ? function (context, node) {
    if (context && context.contains && typeof context.contains === 'function' && isDOM(node)) {
      return context.contains(node);
    }
    if (context && context.compareDocumentPosition && isDOM(node)) {
      return context === node || !!(context.compareDocumentPosition(node) && 16);
    }
    return fallback(context, node);
  } : fallback;
})();
/* harmony default export */ const utils = (contains);

;// CONCATENATED MODULE: ../react-overlay-trigger/esm/util/getStyleComputedProperty.js
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

;// CONCATENATED MODULE: ../react-overlay-trigger/esm/util/getBordersSize.js
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles["border" + sideA + "Width"]) + parseFloat(styles["border" + sideB + "Width"]);
}

;// CONCATENATED MODULE: ../react-overlay-trigger/esm/util/isBrowser.js
/* harmony default export */ const isBrowser = (typeof window !== 'undefined' && typeof document !== 'undefined');

;// CONCATENATED MODULE: ../react-overlay-trigger/esm/util/isIE.js

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

;// CONCATENATED MODULE: ../react-overlay-trigger/esm/util/getWindowSizes.js

function getSize(axis, body, html, computedStyle) {
  return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? parseInt(html["offset" + axis], 10) + parseInt(computedStyle["margin" + (axis === 'Height' ? 'Top' : 'Left')], 10) + parseInt(computedStyle["margin" + (axis === 'Height' ? 'Bottom' : 'Right')], 10) : 0);
}
function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

;// CONCATENATED MODULE: ../react-overlay-trigger/esm/util/getClientRect.js

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

;// CONCATENATED MODULE: ../react-overlay-trigger/esm/util/getBoundingClientRect.js






/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, true);
      var scrollLeft = getScroll(element);
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
    // eslint-disable-next-line
  } catch (e) {}
  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;
  result.offsetLeft = element.offsetLeft || element.scrollLeft || 0;
  result.offsetTop = element.offsetTop || element.offsetTop || 0;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}

;// CONCATENATED MODULE: ../react-overlay-trigger/esm/util/getOuterSizes.js
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var rect = element.getBoundingClientRect();
  // const window = element.ownerDocument.defaultView;
  // const styles = window.getComputedStyle(element);
  // const x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  // const y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth || element.scrollWidth || rect.width || 0,
    height: element.offsetHeight || element.scrollHeight || rect.height || 0
  };
  return result;
}

;// CONCATENATED MODULE: ../react-overlay-trigger/esm/getStyle.js




function getStyle(options) {
  var {
    trigger: triggerDom,
    popup: popupDom,
    placement,
    usePortal,
    autoAdjustOverflow
  } = options || {};
  var sty = {
    left: 0,
    top: 0,
    placement
  };
  if (!triggerDom || !popupDom || !document) {
    return sty;
  }
  var winSizeHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var winSizeWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  sty.placement = placement;
  var scrollTop = getScroll(triggerDom.ownerDocument.documentElement, true);
  var scrollLeft = getScroll(triggerDom.ownerDocument.documentElement);
  var trigger = _extends({}, getBoundingClientRect(triggerDom), getOuterSizes(triggerDom));
  var popup = _extends({}, getBoundingClientRect(popupDom), getOuterSizes(popupDom));
  var bottom = winSizeHeight - trigger.bottom;
  var right = winSizeWidth - trigger.left - trigger.width;
  sty.top = trigger.top + scrollTop;
  sty.left = trigger.left;
  if (!usePortal) {
    sty.top = trigger.offsetTop;
    sty.left = trigger.offsetLeft;
  }
  if (placement && /^(top)/.test(placement)) {
    sty.top -= popup.height;
  }
  if (placement && /^(right)/.test(placement)) {
    sty.left += trigger.width;
  }
  if (placement && /^(bottom)/.test(placement)) {
    sty.top += trigger.height;
  }
  if (placement && /^(left)/.test(placement)) {
    sty.left -= popup.width;
  }
  switch (sty.placement) {
    case 'bottomLeft':
    case 'topLeft':
      break;
    case 'bottom':
    // eslint-disable-next-line
    case 'top':
      sty.left = sty.left - (popup.width - trigger.width) / 2;
      break;
    case 'bottomRight':
    case 'topRight':
      sty.left = sty.left + scrollLeft + trigger.width - popup.width;
      break;
    case 'rightTop':
    case 'leftTop':
      break;
    case 'right':
    // eslint-disable-next-line
    case 'left':
      sty.top = sty.top - (popup.height - trigger.height) / 2;
      break;
    case 'rightBottom':
    case 'leftBottom':
      sty.top = sty.top - popup.height + trigger.height;
      break;
    default:
      break;
  }
  if (autoAdjustOverflow) {
    if (placement && /^(top)/.test(placement) && trigger.top < popup.height && bottom > popup.height) {
      sty.placement = placement.replace(/^top/, 'bottom');
      sty.top = sty.top + popup.height + trigger.height;
    }
    if (placement && /^(bottom)/.test(placement) && bottom < popup.height && trigger.top > popup.height) {
      sty.placement = placement.replace(/^bottom/, 'top');
      sty.top = sty.top - popup.height - trigger.height;
    }
    if (placement && /^(right)/.test(placement) && right < popup.width) {
      sty.placement = placement.replace(/^right/, 'left');
      sty.left = sty.left - trigger.width - popup.width;
    }
    if (placement && /^(left)/.test(placement) && trigger.left < popup.width) {
      sty.placement = placement.replace(/^left/, 'right');
      sty.left = sty.left + trigger.width + popup.width;
    }
    if (placement && /^(left|right)/.test(placement) && usePortal) {
      // Top
      if (/(Top)$/.test(placement) && trigger.top < 0 || /(right|left)$/.test(placement) && trigger.top + trigger.height / 2 < popup.height / 2 || /(Bottom)$/.test(placement) && trigger.top + trigger.height < popup.height) {
        sty.top = scrollTop;
      }
    } else {
      // Top
      if (placement && /(Top)$/.test(placement) && trigger.top < 0) {
        sty.top -= trigger.top;
      }
      if (placement && /(Bottom)$/.test(placement) && trigger.bottom < popup.height) {
        // eslint-disable-next-line
        sty.top = sty.top + (popup.height - trigger.bottom);
      }
      if (placement && /(right|left)$/.test(placement) && trigger.bottom - trigger.height / 2 < popup.height / 2) {
        sty.top = sty.top + popup.height / 2 - (trigger.bottom - trigger.height / 2);
      }
    }
    // Bottom Public Part
    if (placement && /^(left|right)/.test(placement)) {
      if (/(Top)$/.test(placement) && bottom + trigger.height < popup.height) {
        sty.top = sty.top - (popup.height - bottom - trigger.height); // eslint-disable-line
      }

      if (/(right|left)$/.test(placement) && bottom + trigger.height / 2 < popup.height / 2) {
        sty.top = sty.top - (popup.height / 2 - bottom - trigger.height / 2); // eslint-disable-line
      }

      if (/(Bottom)$/.test(placement) && bottom < 0) {
        sty.top = sty.top + bottom; // eslint-disable-line
      }
    }

    if (placement && /^(top|bottom)/.test(placement) && usePortal) {
      // left
      if (/(Left)$/.test(placement) && trigger.left < 0 || /(top|bottom)$/.test(placement) && trigger.left + trigger.width / 2 < popup.width / 2 || /(Right)$/.test(placement) && trigger.left + trigger.width < popup.width) {
        sty.left = scrollLeft;
      }
      // right
      if (/(top|bottom)$/.test(placement) && right + trigger.width / 2 < popup.width / 2) {
        sty.left = trigger.left + trigger.width + right - popup.width;
      }
    } else if (placement && /(top|bottom)$/.test(placement) && right + trigger.width / 2 < popup.width / 2) {
      sty.left = sty.left + (right + trigger.width / 2 - popup.width / 2); // eslint-disable-line
    }

    if (placement && /^(top|bottom)/.test(placement)) {
      if (/(Left)$/.test(placement) && trigger.width + right < popup.width) {
        sty.left = sty.left - (popup.width - trigger.width - right);
      }
      if (/(Right)$/.test(placement) && right < 0) {
        sty.left = sty.left + right; // eslint-disable-line
      }
    }
  }

  return sty;
}

;// CONCATENATED MODULE: ../react-overlay-trigger/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_overlay_trigger_esm_style = ({});
;// CONCATENATED MODULE: ../react-overlay-trigger/esm/index.js


var react_overlay_trigger_esm_excluded = ["className", "prefixCls", "usePortal", "isOutside", "isClickOutside", "disabled", "isOpen", "trigger", "placement", "autoAdjustOverflow", "transitionName", "children", "overlay", "onVisibleChange", "onEnter"];








var normalizeDelay = delay => delay && typeof delay === 'object' ? delay : {
  show: delay,
  hide: delay
};
/* harmony default export */ const react_overlay_trigger_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var _child$props;
  var {
      className,
      prefixCls = 'w-overlay-trigger',
      usePortal = true,
      isOutside = false,
      isClickOutside = true,
      disabled = false,
      isOpen: _ = false,
      trigger = 'hover',
      placement = 'top',
      autoAdjustOverflow,
      transitionName,
      children,
      overlay,
      onVisibleChange = noop,
      onEnter = noop
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_overlay_trigger_esm_excluded);
  var zIndex = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(999);
  var triggerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  var popupRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  var timeoutRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)([]);
  var hoverStateRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var [isOpen, setIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(!!props.isOpen);
  var [overlayStyl, setOverlayStyl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
    placement,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: zIndex.current
  });
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => ({
    hide: () => _hide(),
    show: () => _show(),
    overlayDom: popupRef
  }));
  var child = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.only(children);
  var overlayProps = _extends({}, other, {
    placement,
    isOpen,
    dialogProps: {}
  });
  var triggerProps = {};
  function getChildProps() {
    if (child && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) {
      return child.props;
    }
    return {};
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (isClickOutside && isOpen) {
      document && document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
    }
    return () => {
      document && isClickOutside && document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (props.isOpen !== isOpen) {
      setIsOpen(!!props.isOpen);
    }
  }, [props.isOpen]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    var styls = getStyle({
      placement: overlayStyl.placement || placement,
      trigger: triggerRef.current,
      popup: popupRef.current,
      usePortal,
      autoAdjustOverflow
    });
    setOverlayStyl(_extends({}, styls, {
      zIndex: zIndex.current
    }));
    onVisibleChange(isOpen);
  }, [isOpen]);
  var handleResize = () => {
    if (isOpen) {
      zIndex.current -= 1;
      setIsOpen(false);
      onVisibleChange && onVisibleChange(false);
    }
  };
  var handleClickOutside = e => {
    var popNode = popupRef.current;
    var childNode = triggerRef.current;
    if (popNode && childNode && e.target && !utils(popNode, e.target) && !utils(childNode, e.target)) {
      zIndex.current -= 1;
      setIsOpen(false);
      onVisibleChange && onVisibleChange(false);
    }
  };
  function clearTimeouts() {
    if (timeoutRef.current.length > 0) {
      for (var timeoutId of timeoutRef.current) {
        window.clearTimeout(timeoutId);
      }
      timeoutRef.current = [];
    }
  }
  function handleShow() {
    var _props$children;
    clearTimeouts();
    hoverStateRef.current = 'show';
    var delay = normalizeDelay(props.delay);
    if (!delay.show && !((_props$children = props.children) != null && _props$children.props.disabled)) {
      _show();
      return;
    }
    var handle = window.setTimeout(() => {
      if (hoverStateRef.current === 'show') _show();
    }, delay.show);
    clearTimeout(handle);
    timeoutRef.current.push(handle);
  }
  function handleHide(isOutside) {
    clearTimeouts();
    if (!isOutside && props.isOutside) return;
    hoverStateRef.current = 'hide';
    var delay = normalizeDelay(props.delay);
    if (!delay.hide) {
      _hide();
      return;
    }
    var handle = window.setTimeout(() => {
      if (hoverStateRef.current === 'hide') _hide();
    }, delay.hide);
    timeoutRef.current.push(handle);
  }

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.
  function handleMouseOverOut(handler, e, relatedNative) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent[relatedNative];
    var isOutside = true;
    if (popupRef.current && utils(popupRef.current, related) || triggerRef.current && utils(triggerRef.current, related)) {
      isOutside = false;
    }
    if ((!related || related !== target) && !utils(target, related)) {
      handler(isOutside, e);
    }
  }
  function _hide() {
    if (!isOpen) return;
    if (zIndex.current <= 999) {
      zIndex.current = 999;
    } else {
      zIndex.current -= 1;
    }
    setIsOpen(false);
  }
  function _show() {
    var _triggerRef$current;
    if (isOpen) return;
    var nodeIndex = (_triggerRef$current = triggerRef.current) == null ? void 0 : _triggerRef$current.style.zIndex;
    if (nodeIndex) {
      zIndex.current = Number(nodeIndex) + 1;
    } else {
      zIndex.current += 1;
    }
    setIsOpen(true);
  }
  function handleEnter(node, isAppearing) {
    onEnter && onEnter(node, isAppearing);
    var styls = getStyle({
      placement: overlayStyl.placement || placement,
      trigger: triggerRef.current,
      popup: popupRef.current,
      usePortal,
      autoAdjustOverflow
    });
    setOverlayStyl(_extends({}, styls, {
      zIndex: zIndex.current
    }));
  }
  if (trigger === 'click' && !disabled) {
    triggerProps.onClick = e => {
      var {
        onClick
      } = getChildProps();
      isOpen ? _hide() : _show();
      if (onClick) onClick(e, !isOpen);
    };
  }
  if (trigger === 'focus' && !disabled) {
    triggerProps.onFocus = () => handleShow();
  }
  if (trigger === 'hover' && !disabled) {
    triggerProps.onMouseOver = triggerProps.onMouseEnter = e => {
      handleMouseOverOut(handleShow, e, 'fromElement');
    };
    triggerProps.onMouseOut = triggerProps.onMouseLeave = e => {
      handleMouseOverOut(handleHide, e, 'toElement');
    };
    if (overlayProps.dialogProps) {
      overlayProps.dialogProps.onMouseLeave = e => {
        handleMouseOverOut(handleHide, e, 'toElement');
      };
    }
  }
  overlayProps.style = _extends({}, overlayProps.style, overlayStyl);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(child, Object.assign({}, child.props, _extends({}, triggerProps, {
      ref: triggerRef,
      style: _extends({}, (_child$props = child.props) == null ? void 0 : _child$props.style, {
        zIndex: zIndex.current
      }),
      className: [child.props.className, disabled ? prefixCls + "-disabled" : null].filter(Boolean).join(' ').trim()
    }))), /*#__PURE__*/(0,jsx_runtime.jsx)(Overlay, _extends({}, overlayProps, {
      style: _extends({}, overlayProps.style, overlayStyl),
      onEnter: handleEnter,
      className: [prefixCls, className, overlayStyl.placement].filter(Boolean).join(' ').trim(),
      usePortal: usePortal,
      transitionName: transitionName,
      isOpen: isOpen,
      hasBackdrop: false,
      children: /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(overlay, Object.assign(_extends({}, overlay.props, {
        ref: popupRef,
        className: [overlay.props && overlay.props.className, placement].filter(Boolean).join(' ').trim()
      })))
    }))]
  });
}));

;// CONCATENATED MODULE: ../react-popover/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_popover_esm_style = ({});
;// CONCATENATED MODULE: ../react-popover/esm/Confirm.js







function Confirm(props) {
  var {
    trigger = 'click',
    placement = 'top',
    confirmText = 'Yes',
    title,
    cancelText = 'No',
    visibleArrow,
    children,
    onConfirm
  } = props;
  var [isOpen, setIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Popover, {
    isOpen: isOpen,
    visibleArrow: visibleArrow,
    content: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        padding: '12px 16px',
        position: 'relative'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
        type: "information",
        style: {
          position: 'absolute',
          top: 13.5,
          fontSize: 14,
          transform: 'rotate(180deg)',
          color: '#faad14'
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          paddingLeft: 20
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            fontSize: 14
          },
          children: title
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            position: 'relative',
            bottom: 0,
            marginTop: 12,
            display: 'flex',
            justifyContent: 'end'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(esm, {
            size: "small",
            onClick: () => setIsOpen(false),
            children: cancelText
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(esm, {
            size: "small",
            type: "primary",
            style: {
              marginLeft: 10
            },
            onClick: () => {
              onConfirm == null ? void 0 : onConfirm();
              setIsOpen(false);
            },
            children: confirmText
          })]
        })]
      })]
    }),
    trigger: trigger,
    placement: placement,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      onClick: () => setIsOpen(true),
      children: children
    })
  });
}

;// CONCATENATED MODULE: ../react-popover/esm/index.js


var react_popover_esm_excluded = ["prefixCls", "className", "content", "visibleArrow"];






class Popover extends (external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Component {
  constructor() {
    super(...arguments);
    this.renderArrow = () => {
      var {
        prefixCls
      } = this.props;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-arrow",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
          viewBox: "0 0 30 30",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
            fillOpacity: "0.2",
            d: "M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
            fill: "#fff",
            d: "M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z"
          })]
        })
      });
    };
  }
  render() {
    var _this$props = this.props,
      {
        prefixCls,
        className,
        visibleArrow
      } = _this$props,
      other = _objectWithoutPropertiesLoose(_this$props, react_popover_esm_excluded);
    var cls = [prefixCls, className, !visibleArrow ? 'no-arrow' : null].filter(Boolean).join(' ').trim();
    return /*#__PURE__*/(0,jsx_runtime.jsx)(react_overlay_trigger_esm, _extends({}, other, {
      overlay: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: cls,
        children: [visibleArrow && this.renderArrow(), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: prefixCls + "-inner",
          children: this.props.content
        })]
      }),
      children: typeof this.props.children === 'object' && this.props.children.type.name !== 'Icon' ? this.props.children : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        style: {
          display: 'block',
          writingMode: 'vertical-rl'
        },
        children: this.props.children
      })
    }));
  }
}
Popover.Confirm = Confirm;
Popover.defaultProps = {
  prefixCls: 'w-popover',
  placement: 'top',
  usePortal: true,
  isOpen: false,
  visibleArrow: true
};

;// CONCATENATED MODULE: ../react-input/esm/style/input.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const input = ({});
;// CONCATENATED MODULE: ../react-input/esm/InputNumber.js


var InputNumber_excluded = ["className", "min", "max", "step", "overLimitColor", "keyboard", "formatter", "prefixCls"];



/* harmony default export */ const InputNumber = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      className,
      min,
      max,
      step,
      overLimitColor,
      keyboard = false,
      prefixCls = 'w-input-number'
    } = props,
    otherProps = _objectWithoutPropertiesLoose(props, InputNumber_excluded);
  var value = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    var _ref;
    return Number.parseFloat((_ref = props.value || 0) == null ? void 0 : _ref.toString());
  }, [props.value]);
  var [isOverLimit, isOverLimitSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(overLimitComp(value));
  function overLimitComp(value) {
    if (typeof min === 'number' && value < min) return true;
    if (typeof max === 'number' && value > max) return true;
    return false;
  }
  var onChange = v => {
    var isOverLimit = overLimitComp(Number.parseFloat(v.target.value));
    isOverLimitSet(isOverLimit);
    props.onChange == null ? void 0 : props.onChange(v);
  };
  var overLimitProps = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (!overLimitColor) return {
      min,
      max
    };
  }, []);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  var inputStyle = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => isOverLimit ? {
    color: overLimitColor == null ? void 0 : overLimitColor.toString()
  } : undefined, [isOverLimit]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, _extends({}, otherProps, {
    className: cls,
    type: "number",
    inputStyle: inputStyle,
    onChange: onChange,
    step: step
  }, overLimitProps));
}));

;// CONCATENATED MODULE: ../react-input/esm/index.js


var react_input_esm_excluded = ["prefixCls", "className", "style", "size", "type", "preIcon", "addonAfter", "inputStyle"];







/* harmony default export */ const react_input_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-input',
      className,
      style,
      size = 'default',
      type = 'text',
      preIcon = null,
      addonAfter,
      inputStyle
    } = props,
    otherProps = _objectWithoutPropertiesLoose(props, react_input_esm_excluded);
  var inputRef = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef(null);
  var addonRef = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef(null);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => inputRef.current);
  var cls = [prefixCls, className, size ? prefixCls + "-" + size : null, addonAfter ? prefixCls + "-addon" : null, props.disabled ? 'disabled' : null].filter(Boolean).join(' ').trim();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    computedInputPadding();
  });
  function computedInputPadding() {
    if (addonRef.current && inputRef.current) {
      var input = window && window.getComputedStyle(addonRef.current, null);
      inputRef.current.style.paddingRight = addonRef.current.clientWidth + parseInt(input.right, 10) * 2 + "px";
    }
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: cls,
    style: style,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      type: preIcon
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", _extends({
      ref: inputRef,
      type: type,
      autoComplete: "off"
    }, otherProps, {
      style: inputStyle,
      className: prefixCls + "-inner"
    })), addonAfter && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: prefixCls + "-addon-after",
      ref: addonRef,
      children: addonAfter
    })]
  });
}));

;// CONCATENATED MODULE: ../react-time-picker/esm/style/time-picker.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const time_picker = ({});
;// CONCATENATED MODULE: ../react-time-picker/esm/Panel.js


var Panel_excluded = ["prefixCls", "className", "count", "date", "type", "disabledHours", "disabledMinutes", "disabledSeconds", "hideDisabled", "onSelected"];



function TimePickerPanel(props) {
  var {
      prefixCls = 'w-timepicker',
      count = 24,
      date,
      type = 'Hours',
      hideDisabled,
      onSelected
    } = props,
    other = _objectWithoutPropertiesLoose(props, Panel_excluded);
  var disableds = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)([]);
  function getMaybeNumber() {
    if (date && type) {
      return new Date(date)["get" + type]();
    }
    return 0;
  }
  function handleClick(num, e) {
    if (!date) return;
    var currentDate = new Date(date);
    currentDate["set" + type](num);
    onSelected && onSelected(type, num, disableds.current, currentDate);
  }
  function getDisabledItem(num) {
    var disabled = props["disabled" + type];
    if (disabled) {
      return disabled(num, type, new Date(date));
    }
    return false;
  }
  function getItemInstance(tag) {
    if (tag && tag.parentNode && tag.dataset['index']) {
      var offsetTop = Number(tag.dataset['index']) * tag.clientHeight;
      if (tag.parentNode.parentNode) {
        tag.parentNode.parentNode.scrollTop = offsetTop;
      }
    }
  }
  var data = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    return [...Array(count)].map((_, idx) => {
      var disabled = getDisabledItem(idx);
      if (disabled) disableds.current.push(idx);
      return {
        count: idx,
        disabled: getDisabledItem(idx)
      };
    }).filter(item => hideDisabled && item.disabled ? false : true);
  }, [hideDisabled]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: prefixCls + "-spinner"
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      children: data.map((item, idx) => {
        var liProps = {};
        if (!item.disabled) {
          liProps.onClick = e => handleClick(item.count, e);
        }
        var currentCount = getMaybeNumber();
        return /*#__PURE__*/(0,jsx_runtime.jsx)("li", _extends({
          "data-index": currentCount === item.count ? idx : undefined,
          ref: tag => tag && getItemInstance(tag)
        }, liProps, {
          className: [item.disabled ? 'disabled' : null, currentCount === item.count ? 'selected' : null, hideDisabled && item.disabled ? 'hide' : null].filter(Boolean).join(' ').trim(),
          children: item.count < 10 ? "0" + item.count : item.count
        }), idx);
      })
    })
  }));
}

;// CONCATENATED MODULE: ../react-time-picker/esm/Time.js


var Time_excluded = ["prefixCls", "className", "precision"];





function TimePickerTime(props) {
  var {
      prefixCls = 'w-timepicker',
      className,
      precision = 'second'
    } = props,
    other = _objectWithoutPropertiesLoose(props, Time_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: [prefixCls, className].filter(Boolean).join(' ').trim(),
    children: [/^(second|minute|hour)$/.test(precision) && /*#__PURE__*/(0,jsx_runtime.jsx)(TimePickerPanel, _extends({
      type: "Hours",
      count: 24
    }, other)), /^(second|minute)$/.test(precision) && /*#__PURE__*/(0,jsx_runtime.jsx)(TimePickerPanel, _extends({
      type: "Minutes",
      count: 60
    }, other)), /^(second)$/.test(precision) && /*#__PURE__*/(0,jsx_runtime.jsx)(TimePickerPanel, _extends({
      type: "Seconds",
      count: 60
    }, other))]
  });
}

;// CONCATENATED MODULE: ../react-time-picker/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_time_picker_esm_style = ({});
;// CONCATENATED MODULE: ../react-time-picker/esm/index.js


var react_time_picker_esm_excluded = ["prefixCls", "className", "disabled", "value", "format", "popoverProps", "allowClear", "onChange", "disabledHours", "disabledMinutes", "disabledSeconds", "hideDisabled", "precision"];










function TimePicker(props) {
  var {
      prefixCls = 'w-timepicker',
      className,
      disabled,
      format = 'HH:mm:ss',
      popoverProps,
      allowClear = true,
      onChange,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      hideDisabled,
      precision
    } = props,
    inputProps = _objectWithoutPropertiesLoose(props, react_time_picker_esm_excluded);
  var [date, setDate] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.value);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setDate(props.value), [props.value]);
  var timeProps = {
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    hideDisabled,
    precision
  };
  var inputValue = date ? formatter(format, new Date(date)) : '';
  var datePickerTime = date || new Date();
  var _props = _extends({}, inputProps, {
    value: inputValue
  });
  if (allowClear && inputValue !== '' && !!inputValue) {
    _props.addonAfter = /*#__PURE__*/(0,jsx_runtime.jsx)(esm, {
      className: prefixCls + "-close-btn",
      icon: "close",
      disabled: props.disabled,
      onClick: () => {
        setDate(undefined);
        onChange && onChange();
      },
      size: props.size,
      basic: true,
      type: "light"
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Popover, _extends({
    trigger: "focus",
    placement: "bottomLeft",
    autoAdjustOverflow: true,
    visibleArrow: false
  }, popoverProps, {
    content: /*#__PURE__*/(0,jsx_runtime.jsx)(TimePickerTime, _extends({
      className: prefixCls + "-popover"
    }, timeProps, {
      date: datePickerTime,
      onSelected: (type, num, disableds, currentDate) => {
        setDate(new Date(currentDate));
        var dataStr = currentDate ? formatter(format, currentDate) : '';
        onChange && onChange(dataStr, currentDate, type, num, disableds);
      }
    })),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, _extends({
      placeholder: "\u8BF7\u9009\u62E9\u65F6\u95F4",
      readOnly: true,
      disabled: disabled
    }, _props, {
      className: [prefixCls + "-input", className].filter(Boolean).join(' ').trim()
    }))
  }));
}

;// CONCATENATED MODULE: ../react-date-picker/esm/style/day.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const day = ({});
;// CONCATENATED MODULE: ../react-date-picker/esm/DatePickerDay.js


var DatePickerDay_excluded = ["date", "row", "col", "index", "today", "panelDate", "disabledDate", "renderDay", "onSelectDay"],
  _excluded2 = ["prefixCls", "className", "weekday", "weekTitle", "date", "today", "panelDate", "disabledDate", "renderDay", "onSelectDay"];




function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
function classnames(obj) {
  return Object.keys(obj || {}).map(keyName => obj[keyName] ? keyName : null).filter(Boolean).join(' ').trim();
}
function DayRect(props) {
  var {
      date: selectedDate,
      col,
      index,
      today,
      panelDate,
      disabledDate,
      renderDay,
      onSelectDay
    } = props,
    other = _objectWithoutPropertiesLoose(props, DatePickerDay_excluded);
  var cls = {
    end: col === 0 || col === 6,
    prev: false,
    today: false,
    selected: false,
    next: false,
    disabled: false
  };
  var date = panelDate;
  if (!date || !isValidDate(date)) date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var week = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => new Date(new Date(date).setDate(1)).getDay(), [date.toDateString()]);
  var lastDay = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => new Date(year, month === 0 ? 12 : month + 1, 0).getDate(), [date.toDateString()]);
  var day = index;
  if (date) {
    day = day - week + 1;
    if (day < 1) {
      cls.prev = true;
    }
    if (day > lastDay) {
      cls.next = true;
    }
  }
  var cellDate = new Date(new Date(date).setDate(day));
  if (today && today.toDateString() === cellDate.toDateString()) {
    cls.today = true;
  }
  if (selectedDate && selectedDate.toDateString() === cellDate.toDateString()) {
    cls.selected = true;
  }
  var divProps = {
    onClick: () => {
      var cellMonth = cellDate.getMonth();
      onSelectDay && onSelectDay(cellDate, {
        year: cellDate.getFullYear(),
        month: cellMonth === 0 ? 12 : cellMonth + 1,
        day: cellDate.getDate()
      });
    }
  };
  if (disabledDate && disabledDate(cellDate, _extends({}, props, cls))) {
    cls.disabled = true;
    delete divProps.onClick;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: classnames(cls)
  }, other, divProps, {
    children: renderDay ? renderDay(cellDate.getDate(), _extends({}, props, cls, {
      date: cellDate
    })) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: cellDate.getDate()
    })
  }));
}
var WEEKTITLE = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var WEEKDAY = ['日', '一', '二', '三', '四', '五', '六'];
function DatePickerDay(props) {
  var {
      prefixCls = 'w-datepicker',
      className,
      weekday = WEEKDAY,
      weekTitle = WEEKTITLE,
      date,
      today,
      panelDate,
      disabledDate,
      renderDay,
      onSelectDay: _onSelectDay
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded2);
  var weekdayLabel = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: prefixCls + "-weekday",
    children: (weekday || []).map((week, idx) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classnames({
        end: idx === 0 || idx === 6
      }),
      title: weekTitle && weekTitle[idx],
      children: week
    }, idx))
  }), [prefixCls, weekday, weekTitle]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({}, other, {
    className: [prefixCls ? prefixCls + "-body" : null, className].filter(Boolean).join(' ').trim(),
    children: [weekdayLabel, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: [prefixCls ? prefixCls + "-day-body" : null].filter(Boolean).join(' ').trim(),
      children: [...Array(6)].map((_, idx) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-week",
        children: [...Array(7)].map((_, col) => /*#__PURE__*/(0,jsx_runtime.jsx)(DayRect, {
          date: date,
          today: today,
          disabledDate: disabledDate,
          renderDay: renderDay,
          panelDate: panelDate,
          col: col,
          row: idx,
          onSelectDay: (curDate, data) => {
            _onSelectDay && _onSelectDay(curDate, data);
          },
          index: idx * 7 + col
        }, col))
      }, idx))
    })]
  }));
}

;// CONCATENATED MODULE: ../react-date-picker/esm/style/year-month.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const year_month = ({});
;// CONCATENATED MODULE: ../react-date-picker/esm/DatePickerMonth.js


var DatePickerMonth_excluded = ["prefixCls", "className", "panelDate", "monthLabel", "onSelected"];




function DatePickerMonth(props) {
  var {
      prefixCls = 'w-datepicker',
      className,
      panelDate = new Date(),
      monthLabel,
      onSelected = noop
    } = props,
    other = _objectWithoutPropertiesLoose(props, DatePickerMonth_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: [prefixCls ? prefixCls + "-month" : null, className].filter(Boolean).join(' ').trim()
  }, other, {
    children: [...Array(12)].map((_, idx) => {
      var selectedMonth = panelDate.getMonth();
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: [selectedMonth === idx ? 'selected' : null].filter(Boolean).join(' ').trim(),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          onClick: () => onSelected(idx, false),
          children: monthLabel && monthLabel[idx] || idx
        })
      }, idx);
    })
  }));
}

;// CONCATENATED MODULE: ../react-date-picker/esm/DatePickerYear.js


var DatePickerYear_excluded = ["prefixCls", "panelNum", "className", "panelDate", "onSelected"];




function DatePickerYear(props) {
  var {
      prefixCls = 'w-datepicker',
      panelNum = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      className,
      onSelected = noop
    } = props,
    other = _objectWithoutPropertiesLoose(props, DatePickerYear_excluded);
  var [activeYear, setActiveYear] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.panelDate);
  function handleSelected(year, idx) {
    if (idx === 0 || idx === panelNum.length - 1) {
      var date = new Date(activeYear);
      date.setFullYear(year);
      setActiveYear(date);
    } else {
      onSelected(year);
    }
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: [prefixCls ? prefixCls + "-year" : null, className].filter(Boolean).join(' ').trim()
  }, other, {
    children: panelNum && panelNum.map((_, idx) => {
      var selectedYear = activeYear.getFullYear();
      var year = selectedYear + panelNum[idx];
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: [selectedYear === year ? 'selected' : null, idx === 0 || idx === panelNum.length - 1 ? 'paging' : null].filter(Boolean).join(' ').trim(),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          onClick: () => handleSelected(year, idx),
          children: year
        })
      }, idx);
    })
  }));
}

;// CONCATENATED MODULE: ../react-date-picker/esm/style/caption.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const caption = ({});
;// CONCATENATED MODULE: ../react-date-picker/esm/DatePickerCaption.js


var DatePickerCaption_excluded = ["prefixCls", "className", "panelDate", "monthLabel", "onSelected", "todayButton"];





function DatePickerCaption_classnames() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }
  return [...arg].filter(Boolean).join(' ').trim();
}
function DatePickerCaption(props) {
  var {
      prefixCls = 'w-datepicker',
      className,
      panelDate = new Date(),
      monthLabel,
      onSelected = noop,
      todayButton
    } = props,
    other = _objectWithoutPropertiesLoose(props, DatePickerCaption_excluded);
  var renderMonth = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    var month = panelDate.getMonth();
    return monthLabel && monthLabel[month] || month + 1;
  }, [panelDate.toDateString(), monthLabel]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
    className: DatePickerCaption_classnames(prefixCls ? prefixCls + "-caption" : null, className)
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: DatePickerCaption_classnames(prefixCls ? prefixCls + "-caption-pane" : null, 'prev'),
      onClick: () => onSelected('prev')
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: DatePickerCaption_classnames(prefixCls ? prefixCls + "-caption-pane" : null, 'month'),
      onClick: () => onSelected('month'),
      children: renderMonth
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: DatePickerCaption_classnames(prefixCls ? prefixCls + "-caption-pane" : null, 'year'),
      onClick: () => onSelected('year'),
      children: panelDate.getFullYear()
    }), todayButton && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: DatePickerCaption_classnames(prefixCls ? prefixCls + "-caption-today" : null),
      onClick: () => onSelected('today'),
      title: todayButton
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: DatePickerCaption_classnames(prefixCls ? prefixCls + "-caption-pane" : null, 'next'),
      onClick: () => onSelected('next')
    })]
  }));
}

;// CONCATENATED MODULE: ../react-date-picker/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_date_picker_esm_style = ({});
;// CONCATENATED MODULE: ../react-date-picker/esm/index.js


var react_date_picker_esm_excluded = ["prefixCls", "className", "weekday", "weekTitle", "monthLabel", "date", "today", "todayButton", "panelDate", "disabledDate", "renderDay", "onChange", "onPanelChange", "showTime"];















var MONTH_LABEL = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
function DatePicker(props) {
  var {
      prefixCls = 'w-datepicker',
      className,
      weekday,
      weekTitle,
      monthLabel = MONTH_LABEL,
      date,
      today = new Date(),
      todayButton,
      panelDate = new Date(),
      disabledDate,
      renderDay,
      onChange = noop,
      onPanelChange = noop,
      showTime
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_date_picker_esm_excluded);
  var [type, setType] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('day');
  var [selectDate, setSelectDate] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(date);
  var [selectPanelDate, setSelectPanelDate] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(panelDate);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (date) {
      setSelectDate(date);
      setSelectPanelDate(date);
    }
  }, [date]);
  var format = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => showTime && showTime.format ? showTime.format : 'HH:mm:ss', [showTime]);
  function handleSelected(curType) {
    if (curType && /^(year|month|time)$/.test(curType)) {
      if (type === 'time') {
        curType = 'day';
      }
      setType(curType);
    } else {
      var currentDate = new Date(selectPanelDate);
      var month = currentDate.getMonth();
      if (curType === 'prev') {
        month -= 1;
      }
      if (curType === 'next') {
        month += 1;
      }
      currentDate.setMonth(month);
      if (curType === 'prev' || curType === 'next') {
        onPanelChange && onPanelChange(new Date(currentDate), curType);
      }
      setSelectPanelDate(curType === 'today' ? today : currentDate);
      curType === 'today' && setSelectDate(today);
      setType('day');
    }
  }
  function onSelectedTime(type, num) {
    (selectPanelDate || new Date())["set" + type](num);
    setSelectPanelDate(new Date(selectPanelDate));
    onChange && onChange(new Date(selectPanelDate));
  }
  function onSelectedDate(type, month, paging) {
    (selectPanelDate || new Date())[type](month);
    setSelectPanelDate(new Date(selectPanelDate));
    setType('day');
    onChange && onChange(new Date(selectPanelDate));
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
    className: [prefixCls, className].filter(Boolean).join(' ').trim()
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DatePickerCaption, {
      todayButton: todayButton,
      panelDate: selectPanelDate,
      monthLabel: monthLabel,
      onSelected: handleSelected
    }), type === 'day' && /*#__PURE__*/(0,jsx_runtime.jsx)(DatePickerDay, {
      prefixCls: prefixCls,
      disabledDate: disabledDate,
      onSelectDay: (selectedDate, dateSource) => {
        setSelectPanelDate(selectedDate);
        onChange(selectedDate, dateSource);
      },
      renderDay: renderDay,
      date: selectDate,
      today: today || new Date(),
      panelDate: selectPanelDate,
      weekday: weekday,
      weekTitle: weekTitle
    }), type === 'month' && /*#__PURE__*/(0,jsx_runtime.jsx)(DatePickerMonth, {
      panelDate: selectPanelDate,
      monthLabel: monthLabel,
      prefixCls: prefixCls,
      onSelected: num => onSelectedDate('setMonth', num)
    }), type === 'year' && /*#__PURE__*/(0,jsx_runtime.jsx)(DatePickerYear, {
      prefixCls: prefixCls,
      panelDate: selectDate || selectPanelDate,
      onSelected: num => onSelectedDate('setFullYear', num)
    }), type === 'time' && /*#__PURE__*/(0,jsx_runtime.jsx)(TimePickerTime, _extends({
      date: selectPanelDate
    }, showTime, {
      className: prefixCls + "-timepicker",
      onSelected: onSelectedTime
    })), showTime && format && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-time-btn",
      onClick: () => handleSelected('time'),
      children: formatter(format, selectDate || selectPanelDate)
    })]
  }));
}

;// CONCATENATED MODULE: ../react-calendar/esm/DayLabel.js


var DayLabel_excluded = ["date", "label"];



function RenderDay(props) {
  var {
    prefixCls,
    day,
    data,
    currentDate
  } = props;
  var dayData = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => (data || []).filter(item => {
    var arr = (item.date && item.date.split('/') || []).map(num => Number(num));
    if (arr.length === 1) {
      return day === arr[0];
    }
    if (currentDate && arr.length === 2) {
      return currentDate.getMonth() + 1 === arr[0] && day === arr[1];
    }
    if (currentDate && arr.length === 3) {
      return currentDate.getFullYear() === arr[0] && currentDate.getMonth() + 1 === arr[1] && day === arr[2];
    }
    return false;
  }), [currentDate, day, data]);
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: prefixCls + "-inner",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-day",
      children: day
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-panel",
      children: dayData && dayData.length > 0 && dayData.map((item, idx) => {
        var {
            label
          } = item,
          other = _objectWithoutPropertiesLoose(item, DayLabel_excluded);
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({}, other, {
          children: label
        }), idx);
      })
    })]
  }), [dayData, day]);
}

;// CONCATENATED MODULE: ../react-calendar/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_calendar_esm_style = ({});
;// CONCATENATED MODULE: ../react-calendar/esm/index.js


var react_calendar_esm_excluded = ["prefixCls", "className", "style", "today", "date", "data", "monthLabel", "titleFormat", "todayLabel", "panelDate", "onPaging", "onSelectDay"];








var esm_MONTH_LABEL = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
function Calendar(props) {
  var {
      prefixCls = 'w-calendar',
      className,
      style,
      today = new Date(),
      date,
      data,
      monthLabel = esm_MONTH_LABEL,
      titleFormat = 'YYYY/MM',
      todayLabel = '今天',
      onPaging,
      onSelectDay: _onSelectDay
    } = props,
    otherProps = _objectWithoutPropertiesLoose(props, react_calendar_esm_excluded);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  var [panelDate, setPanelDate] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.panelDate || new Date());
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (props.panelDate !== panelDate) {
      setPanelDate(panelDate);
    }
  }, [props.panelDate]);
  function handlePaging(type) {
    var currentDate = new Date();
    if (type === 'today') {
      currentDate = today || new Date();
    } else {
      var _month = panelDate.getMonth();
      if (panelDate && type === 'prev') {
        panelDate.setMonth(_month - 1);
      }
      if (panelDate && type === 'next') {
        panelDate.setMonth(_month + 1);
      }
      currentDate = panelDate;
    }
    setPanelDate(new Date(currentDate));
    onPaging && onPaging(type, currentDate.getMonth() + 1, currentDate);
  }
  var titleLable = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: prefixCls + "-title",
    children: formatter(titleFormat, panelDate)
  }), [prefixCls, titleFormat, panelDate]);
  var btngroup = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: prefixCls + "-btn-group",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      type: "down",
      onClick: () => handlePaging('prev')
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: prefixCls + "-btn",
      onClick: () => handlePaging('today'),
      children: todayLabel
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      type: "down",
      onClick: () => handlePaging('next')
    })]
  }), [prefixCls, todayLabel]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: cls,
    style: style,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: prefixCls + "-caption",
      children: [titleLable, btngroup]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(DatePickerDay, _extends({
      onSelectDay: (currentDate, dateSource) => {
        setPanelDate(currentDate);
        _onSelectDay && _onSelectDay(currentDate, dateSource);
      },
      renderDay: (day, propsNext) => /*#__PURE__*/(0,jsx_runtime.jsx)(RenderDay, {
        prefixCls: prefixCls,
        day: day,
        data: data,
        currentDate: propsNext.date
      }),
      date: date,
      today: today,
      panelDate: panelDate || new Date()
    }, otherProps))]
  });
}

;// CONCATENATED MODULE: ../react-card/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_card_esm_style = ({});
;// CONCATENATED MODULE: ../react-card/esm/index.js


var react_card_esm_excluded = ["prefixCls", "className", "title", "extra", "footer", "bordered", "noHover", "active", "bodyStyle", "bodyClassName", "children"];




/* harmony default export */ const react_card_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-card',
      className,
      title,
      extra,
      footer,
      bordered = true,
      noHover = false,
      active = false,
      bodyStyle,
      bodyClassName,
      children
    } = props,
    resetProps = _objectWithoutPropertiesLoose(props, react_card_esm_excluded);
  var cls = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => [prefixCls, className, bordered ? prefixCls + "-bordered" : null, noHover ? prefixCls + "-no-hover" : null, active ? 'active' : null].filter(Boolean).join(' ').trim(), [prefixCls, className, bordered, noHover]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({}, resetProps, {
    className: cls,
    ref: ref,
    children: [(title || extra) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: prefixCls + "-head",
      children: [title && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-head-title",
        children: title
      }), extra && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-extra",
        children: extra
      })]
    }), children && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: [prefixCls + "-body", bodyClassName].filter(Boolean).join(' ').trim(),
      style: bodyStyle,
      children: children
    }), footer && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-footer",
      children: footer
    })]
  }));
}));

;// CONCATENATED MODULE: ../react-carousel/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_carousel_esm_style = ({});
;// CONCATENATED MODULE: ../react-carousel/esm/index.js





function Carousel(props, ref) {
  var {
    position = 0,
    direction = 'horizontal',
    width = 400,
    height = 200,
    palyTime = 2000,
    scrollTime = 200,
    autoPlay = true,
    afterChange,
    beforeChange,
    prefixCls = 'w-carousel',
    className,
    style
  } = props;
  var cls = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => [prefixCls, className].filter(Boolean).join(' ').trim(), [prefixCls, className]);
  var [currentPosition, currentPositionSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(position);
  var [transitionInner, transitionInnerSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(scrollTime * 0.001 + "s ease-in-out");
  var positionRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(currentPosition);
  var childCount = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.count(props.children) + 1;
  var _stopPlay = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({
    stop: () => {},
    after: afterChange,
    before: beforeChange
  });
  external_root_React_commonjs2_react_commonjs_react_amd_react_default().useImperativeHandle(ref, () => ({
    gotoSlide,
    prevSlide: () => gotoSlide(positionRef.current - 1),
    nextSlide: () => gotoSlide(positionRef.current + 1),
    stopPlay: () => _stopPlay.current.stop()
  }), [ref]);
  var gotoSlide = slidNumber => {
    _stopPlay.current.stop();
    var maxSlid = childCount - 1;
    var slidNumberTemp = slidNumber > maxSlid ? maxSlid : slidNumber;
    slidNumberTemp = slidNumber < 0 ? 0 : slidNumberTemp;
    positionRef.current = slidNumberTemp;
    currentPositionSet(slidNumberTemp);
    play();
  };
  var play = function play(ms) {
    if (ms === void 0) {
      ms = palyTime;
    }
    if (autoPlay) {
      var time = setInterval(() => {
        _stopPlay.current.after == null ? void 0 : _stopPlay.current.after(positionRef.current);
        positionRef.current++;
        if (positionRef.current >= childCount) {
          positionRef.current = 0;
        }
        currentPositionSet(positionRef.current);
        _stopPlay.current.before == null ? void 0 : _stopPlay.current.before(positionRef.current);
      }, ms);
      _stopPlay.current.stop = () => {
        clearInterval(time);
      };
    }
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    play();
    return () => {
      _stopPlay.current.stop();
    };
  }, [autoPlay]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    var time;
    if (childCount === currentPosition + 1) {
      time = setTimeout(() => {
        _stopPlay.current.before = () => {
          transitionInnerSet(scrollTime * 0.001 + "s ease-in-out");
          _stopPlay.current.before = props.beforeChange;
        };
        transitionInnerSet('none');
        gotoSlide(0);
      }, scrollTime);
    }
    return () => {
      clearTimeout(time);
    };
  }, [currentPosition]);
  var childrens = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(props.children, child => {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: _extends({
        width,
        height
      }, style),
      children: child
    });
  });
  var innerStyle = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    var style = {
      transform: '',
      display: ''
    };
    switch (direction) {
      case 'horizontal':
        style.transform = "translate3d(" + -(currentPosition * width) + "px, 0px, 0px)";
        style.display = 'flex';
        break;
      case 'vertical':
        style.transform = "translate3d(0px, " + -(currentPosition * height) + "px, 0px)";
        style.display = 'block';
        break;
      default:
        break;
    }
    return style;
  }, [direction, currentPosition, width, height]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: cls,
    style: {
      width,
      height
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: cls + "-content",
      style: _extends({
        width: width * childCount,
        transition: transitionInner
      }, innerStyle),
      children: [childrens, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: _extends({
          width,
          height
        }, style),
        children: childrens == null ? void 0 : childrens[0]
      })]
    })
  });
}
/* harmony default export */ const react_carousel_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(Carousel));

;// CONCATENATED MODULE: ../react-dropdown/esm/index.js


var react_dropdown_esm_excluded = ["prefixCls", "placement", "className", "menu", "children", "disabled"];




function Dropdown(props) {
  var {
      prefixCls = 'w-dropdown',
      placement = 'bottomLeft',
      className,
      menu,
      children,
      disabled
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_dropdown_esm_excluded);
  var cls = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => [prefixCls, className].filter(Boolean).join(' ').trim(), [prefixCls, className]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react_overlay_trigger_esm, _extends({
    isOutside: true,
    autoAdjustOverflow: true,
    className: cls,
    disabled: disabled,
    placement: placement
  }, other, {
    overlay: menu,
    children: /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(children, Object.assign({}, children.props))
  }));
}

;// CONCATENATED MODULE: ../react-menu/esm/style/item.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const style_item = ({});
;// CONCATENATED MODULE: ../react-menu/esm/MenuItem.js


var MenuItem_excluded = ["prefixCls", "className", "tagName", "children", "disabled", "multiline", "icon", "text", "active", "addonAfter", "isSubMenuItem"];





var disabledProps = {
  href: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  tabIndex: -1
};
function Internal(props, ref) {
  var {
      prefixCls = 'w-menu-item',
      className,
      tagName: TagName = 'a',
      disabled = false,
      multiline = false,
      icon,
      text,
      active = false,
      addonAfter,
      isSubMenuItem
    } = props,
    htmlProps = _objectWithoutPropertiesLoose(props, MenuItem_excluded);
  var anchorCls = [prefixCls, active ? 'active' : null, disabled ? 'w-disabled' : null, className].filter(Boolean).join(' ').trim();
  var tagComp = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TagName, _extends({}, htmlProps, disabled ? disabledProps : {}, {
    className: anchorCls,
    ref
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      className: prefixCls + "-icon",
      type: icon
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: [prefixCls && prefixCls + "-text", !multiline && prefixCls + "-multiline"].filter(Boolean).join(' ').trim(),
      children: text
    }), addonAfter]
  }));
  if (isSubMenuItem) {
    return tagComp;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
    children: [" ", tagComp, " "]
  });
}
var MenuItem = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(Internal);
MenuItem.displayName = 'uiw.MenuItem';

;// CONCATENATED MODULE: ../react-menu/esm/Divider.js


var Divider_excluded = ["prefixCls", "className", "title"];


var MenuDivider = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-menu-divider',
      className,
      title
    } = props,
    htmlProps = _objectWithoutPropertiesLoose(props, Divider_excluded);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  if (!title) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("li", _extends({}, htmlProps, {
      ref: ref,
      className: cls
    }));
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("li", _extends({}, htmlProps, {
    ref: ref,
    className: cls,
    "data-menu": "divider",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
      children: title
    })
  }));
});
MenuDivider.displayName = 'uiw.MenuDivider';

;// CONCATENATED MODULE: ../react-menu/esm/style/submenu.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const submenu = ({});
;// CONCATENATED MODULE: ../react-menu/esm/SubMenu.js


var SubMenu_excluded = ["prefixCls", "className", "disabled", "overlayProps", "children", "collapse", "inlineIndent", "inlineCollapsed"];







function checkedMenuItem(node) {
  var isCheck = false;
  if (node) {
    // eslint-disable-next-line
    do {
      if (!node.dataset.menu) {
        isCheck = true;
      }
      if (node.dataset.menu && /^(subitem|divider)$/.test(node.dataset.menu)) {
        isCheck = false;
      }
    } while (!node.dataset.menu && (node = node.parentNode));
  }
  return isCheck;
}
function IconView(_ref) {
  var {
    prefixCls,
    collapse,
    isOpen
  } = _ref;
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
    type: "caret-right",
    className: [prefixCls ? prefixCls + "-collapse-icon" : null, !collapse && isOpen ? 'w-open' : null, !collapse && !isOpen ? 'w-close' : null].filter(Boolean).join(' ').trim()
  }), [prefixCls, collapse, isOpen]);
}
var SubMenu = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function (props, ref) {
  var {
      prefixCls = 'w-menu-subitem',
      className,
      disabled,
      overlayProps = {},
      children,
      collapse = false,
      inlineIndent
    } = props,
    other = _objectWithoutPropertiesLoose(props, SubMenu_excluded);
  var overlayTriggerProps = {};
  var menuProps = {
    bordered: true,
    children,
    inlineIndent,
    className: [prefixCls ? prefixCls + "-overlay" : null].filter(Boolean).join(' ').trim()
  };
  var popupRef = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef(null);
  var refNode = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef();
  var elementSource = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef();
  var [isOpen, setIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(!!overlayProps.isOpen);
  var {
    height,
    setContextHeight,
    ele
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(ThemeContext);
  external_root_React_commonjs2_react_commonjs_react_amd_react_default().useEffect(() => {
    if (refNode.current && refNode.current.style && ele === elementSource.current) {
      var currentHeight = Number(refNode.current.style.height.substr(0, refNode.current.style.height.length - 2));
      // 设置的高度 < '已有展开的高度',
      if (refNode.current.getBoundingClientRect().height < currentHeight) {
        refNode.current.style.height = currentHeight + 'px';
      } else {
        refNode.current.style.height = currentHeight + height + 'px';
      }
    }
  }, [height, ele]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (collapse) setIsOpen(false);
  }, [collapse]);
  function onClick(e) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent.target;
    if (target.children.length < 1) return;
    if (checkedMenuItem(related)) {
      if (popupRef.current) {
        popupRef.current.hide();
      }
    }
  }
  function onEnter(node) {
    node.style.height = '0px';
    refNode.current = node;
    setIsOpen(true);
    if (popupRef.current && popupRef.current.overlayDom.current) {
      setContextHeight({
        height: popupRef.current.overlayDom.current.getBoundingClientRect().height,
        ele: elementSource.current
      });
    }
  }
  function onEntering(node) {
    node.style.height = node.scrollHeight + "px";
  }
  function onEntered(node) {
    // node.style.height = 'initial';
    if (popupRef.current && popupRef.current.overlayDom.current) {
      node.style.height = popupRef.current.overlayDom.current.getBoundingClientRect().height + 'px';
    }
  }
  function onExiting(node) {
    node.style.height = '0px';
    if (popupRef.current && popupRef.current.overlayDom.current) {
      setContextHeight({
        height: -popupRef.current.overlayDom.current.getBoundingClientRect().height,
        ele: elementSource.current
      });
    }
  }
  function onExit(node) {
    node.style.height = node.scrollHeight + "px";
    setIsOpen(false);
  }
  if (!collapse) {
    delete menuProps.onClick;
    menuProps.bordered = false;
    overlayTriggerProps.className = prefixCls + "-collapse";
    overlayTriggerProps.appear = false;
    overlayTriggerProps.isOutside = true;
    overlayTriggerProps.isClickOutside = false;
    overlayTriggerProps.unmountOnExit = false;
    overlayTriggerProps.trigger = 'click';
    overlayTriggerProps.transitionName = "" + prefixCls;
    overlayTriggerProps.onExit = onExit;
    overlayTriggerProps.onExiting = onExiting;
    overlayTriggerProps.onEnter = onEnter;
    overlayTriggerProps.onEntered = onEntered;
    overlayTriggerProps.onEntering = onEntering;
  } else {
    overlayTriggerProps.className = prefixCls + "-popup";
    overlayTriggerProps.trigger = 'hover';
    overlayTriggerProps.usePortal = true;
    menuProps.onClick = onClick;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
    "data-menu": "subitem",
    ref: ref,
    onClick: e => {
      if (collapse) {
        e.stopPropagation();
        return;
      }
      elementSource.current = e.target;
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_overlay_trigger_esm, _extends({
      placement: "rightTop",
      autoAdjustOverflow: true,
      disabled: disabled,
      isOpen: isOpen,
      usePortal: false,
      isOutside: true
    }, overlayTriggerProps, overlayProps, {
      ref: popupRef,
      overlay: /*#__PURE__*/(0,jsx_runtime.jsx)(Menu, _extends({}, menuProps, {
        style: !collapse ? {
          paddingLeft: inlineIndent
        } : {}
      })),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem, _extends({}, other, {
        ref: null,
        disabled: disabled,
        isSubMenuItem: true,
        addonAfter: /*#__PURE__*/(0,jsx_runtime.jsx)(IconView, {
          collapse: collapse,
          prefixCls: prefixCls,
          isOpen: isOpen
        }),
        className: [prefixCls ? prefixCls + "-title" : null, !collapse ? prefixCls + "-collapse-title" : null, className].filter(Boolean).join(' ').trim()
      }))
    }))
  });
});
SubMenu.displayName = 'uiw.SubMenu';

;// CONCATENATED MODULE: ../react-menu/esm/style/menu.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const menu = ({});
;// CONCATENATED MODULE: ../react-menu/esm/Menu.js


var Menu_excluded = ["prefixCls", "className", "children", "bordered", "theme", "inlineIndent", "inlineCollapsed"];






var ThemeContext = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)({});
var Menu = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-menu',
      className,
      children,
      bordered,
      theme = 'light',
      inlineIndent = 10,
      inlineCollapsed
    } = props,
    htmlProps = _objectWithoutPropertiesLoose(props, Menu_excluded);
  var cls = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => [prefixCls, bordered ? 'w-bordered' : null, inlineCollapsed ? prefixCls + "-inline-collapsed" : null, theme ? prefixCls + "-" + theme : null, className].filter(Boolean).join(' ').trim(), [prefixCls, bordered, inlineCollapsed, theme, className]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("ul", _extends({}, htmlProps, {
    ref: ref,
    className: cls,
    "data-menu": "menu",
    children: external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(children, (child, key) => {
      if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) return child;
      var props = {};
      // Sub Menu
      if (child.props.children && child.type === SubMenu) {
        props.inlineIndent = inlineIndent;
      }
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, Object.assign(_extends({}, props), child.props, {
        key: "" + key
      }));
    })
  }));
});
var InternalContextMenu = (props, ref) => {
  var [contextHeight, setContextHeight] = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useState({
    height: 0,
    ele: null
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ThemeContext.Provider, {
    value: _extends({}, contextHeight, {
      setContextHeight
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Menu, _extends({}, props, {
      ref: ref
    }))
  });
};
var ContextMenu = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(InternalContextMenu);
Menu.displayName = 'uiw.Menu';
ContextMenu.displayName = 'uiw.Menu';
ContextMenu.Item = MenuItem;
ContextMenu.SubMenu = SubMenu;
ContextMenu.Divider = MenuDivider;
/* harmony default export */ const esm_Menu = (ContextMenu);

;// CONCATENATED MODULE: ../react-menu/esm/index.js





/* harmony default export */ const react_menu_esm = (esm_Menu);

;// CONCATENATED MODULE: ../react-cascader/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_cascader_esm_style = ({});
;// CONCATENATED MODULE: ../react-cascader/esm/index.js








function Cascader(props) {
  var {
    value,
    onChange,
    onSearch,
    expandTrigger = 'click',
    size,
    disabled,
    allowClear,
    placeholder,
    prefixCls = 'w-cascader',
    className,
    style = {
      width: 200
    },
    option = [],
    others,
    inputProps
  } = props;
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  var [innerIsOpen, setInnerIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  var [selectedValue, setSelectedValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  var [selectIconType, setSelectIconType] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('');
  var [searchText, setSearchText] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('');
  var [searchOn, setSearchOn] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  var [inputValue, setInputValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('');
  var [searchOption, setSearchOption] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (onSearch) {
      var tempOptions = [];
      iteratorOption(option, opt => {
        var label = opt.map(m => m.label).join(' / ');
        tempOptions.push({
          label,
          options: opt
        });
      });
      setSearchOption(tempOptions);
    }
  }, [onSearch]);
  var iteratorOption = function iteratorOption(options, cb, opts) {
    if (opts === void 0) {
      opts = [];
    }
    options.map(opt => {
      var optsTemp = [...opts, opt];
      if (opt.children) {
        iteratorOption(opt.children, cb, optsTemp);
      } else {
        cb == null ? void 0 : cb(optsTemp);
      }
    });
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (value) {
      var valueTemp = [];
      var optChildren = option;
      value == null ? void 0 : value.map(item => {
        var findOpt = optChildren.find(opt => opt.value === item);
        optChildren = (findOpt == null ? void 0 : findOpt.children) || [];
        valueTemp.push(_extends({
          label: item,
          value: item
        }, findOpt));
      });
      setSelectedValue(valueTemp);
    }
  }, [value]);
  function onVisibleChange(isOpen) {
    setInnerIsOpen(isOpen);
  }
  function renderSelectIcon(type) {
    var selectIconType;
    if (type === 'enter' && allowClear && selectedValue.length > 0) {
      selectIconType = 'close';
    } else {
      selectIconType = '';
    }
    setSelectIconType(selectIconType);
  }
  var searchItemClick = options => {
    setSearchText('');
    setInnerIsOpen(false);
    handelChange(false, options);
  };
  var handleItemClick = (optionsItem, level) => {
    selectedValue.splice(level, selectedValue.length - level, optionsItem);
    if (!optionsItem.children) setInnerIsOpen(false);
    handelChange(true, selectedValue);
  };
  var handelChange = (isSeleted, selectedValue) => {
    setSelectedValue([...selectedValue]);
    var value = selectedValue.map(item => item.value);
    onChange == null ? void 0 : onChange(isSeleted, value, selectedValue);
  };
  var onClear = e => {
    e.stopPropagation();
    handelChange(false, []);
  };
  var handelSearch = searchText => {
    setSearchText(searchText);
  };
  var inputChange = e => {
    if (!innerIsOpen) {
      setInnerIsOpen(!innerIsOpen);
    }
    var value = e.target.value;
    onSearch && handelSearch(value);
  };
  var widths = (style == null ? void 0 : style.width) * 0.7 || undefined;
  var trigger = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    return (cb, click) => {
      var triggers = {
        onClick: () => {},
        onMouseOver: () => {}
      };
      var callback = () => {
        cb();
      };
      if (expandTrigger === 'click' || click) {
        triggers.onClick = callback;
      } else if (expandTrigger === 'hover') {
        triggers.onMouseOver = callback;
      }
      return triggers;
    };
  }, []);
  var OptionIter = function OptionIter(option, level) {
    if (level === void 0) {
      level = 0;
    }
    if (!option) return;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(react_menu_esm, {
      bordered: true,
      style: {
        minHeight: 25,
        minWidth: widths,
        overflowY: 'scroll',
        width: widths
      },
      children: !option || option.length === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          color: '#c7c7c7',
          fontSize: 12
        },
        children: '没有数据'
      }) : option.map((opt, index) => {
        var _selectedValue$level, _opt$children;
        var active = ((_selectedValue$level = selectedValue[level]) == null ? void 0 : _selectedValue$level.value) === opt.value;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(react_menu_esm.Item, _extends({
          active: active,
          text: opt.label,
          addonAfter: opt.children ? /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
            type: "right"
          }) : undefined
        }, trigger(() => {
          handleItemClick(opt, level);
        }, !((_opt$children = opt.children) != null && _opt$children.length))), index);
      })
    }, level);
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    var inputValue = selectedValue.map(opt => opt.label).join(' / ');
    setInputValue(inputValue);
  }, [selectedValue]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Dropdown, _extends({
    className: cls,
    trigger: "click",
    style: {
      marginTop: 5
    },
    overlayStyl: {
      width: 100
    },
    disabled: disabled
  }, others, {
    onVisibleChange: onVisibleChange,
    isOpen: innerIsOpen,
    menu: !searchText ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        display: 'flex'
      },
      children: new Array(selectedValue.length + 1).fill(0).map((_, index) => {
        var _selectedValue;
        var options = index ? (_selectedValue = selectedValue[index - 1]) == null ? void 0 : _selectedValue.children : option;
        return OptionIter(options, index);
      }).filter(m => !!m)
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(react_menu_esm, {
      bordered: true,
      style: {
        minHeight: 25,
        minWidth: style == null ? void 0 : style.width,
        overflowY: 'scroll',
        width: style == null ? void 0 : style.width
      },
      children: !searchOption || searchOption.length === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          color: '#c7c7c7',
          fontSize: 12
        },
        children: '没有数据'
      }) : searchOption.filter(opt => opt.label.includes(searchText.trim())).map((opt, index) => {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(react_menu_esm.Item, {
          text: opt.label,
          onClick: () => searchItemClick(opt.options)
        }, index);
      })
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      onMouseLeave: () => renderSelectIcon('leave'),
      onMouseOver: () => renderSelectIcon('enter'),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, _extends({}, inputProps, {
        value: searchOn ? searchText : inputValue,
        onChange: inputChange,
        size: size,
        disabled: disabled,
        placeholder: searchOn ? inputValue : placeholder,
        style: style,
        onFocus: () => onSearch && setSearchOn(true),
        onBlur: () => onSearch && setSearchOn(false),
        readOnly: !onSearch,
        addonAfter: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          style: {
            width: 'auto'
          },
          children: !disabled && selectIconType === 'close' && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
            type: selectIconType,
            onClick: onClear,
            className: prefixCls + "-close"
          })
        })
      }))
    })
  }));
}
/* harmony default export */ const react_cascader_esm = (Cascader);

;// CONCATENATED MODULE: ../react-radio/esm/RadioAbstract.js


var RadioAbstract_excluded = ["prefixCls", "type", "disabled", "value", "className", "style", "children", "size", "checked", "onChange"];


/**
 * Constructs a type by picking all properties from `HTMLInputProps` and then removing `size`.
 * Omit: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittk
 */


var RadioAbstract = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-radio',
      type = 'radio',
      disabled = false,
      value = '',
      className,
      style,
      children,
      size,
      checked: prChecked = false,
      onChange
    } = props,
    other = _objectWithoutPropertiesLoose(props, RadioAbstract_excluded);
  var [checked, setChecked] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(prChecked);
  var [prevChecked, setPrevChecked] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  if (prChecked !== prevChecked) {
    setPrevChecked(prChecked);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (prChecked !== prevChecked) {
      setChecked(prChecked);
    }
  }, [prevChecked]);
  var cls = [prefixCls, className, disabled ? 'disabled' : null, size ? prefixCls + "-" + size : null].filter(Boolean).join(' ').trim();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (checked !== props.checked) {
      setChecked(!!props.checked);
    }
  }, [props.checked]);
  function handleChange(e) {
    e.persist();
    setChecked(e.target.checked);
    onChange && onChange(e);
  }
  var label = children || value;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
    className: cls,
    style,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", _extends({}, _extends({}, other, {
      type,
      disabled,
      value
    }), {
      checked: checked,
      onChange: handleChange,
      ref: ref
    })), label && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-text",
      children: label
    })]
  });
});

;// CONCATENATED MODULE: ../react-radio/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_radio_esm_style = ({});
;// CONCATENATED MODULE: ../react-radio/esm/Radio.js





var Radio = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(RadioAbstract, _extends({
    ref: ref
  }, props));
});
/* harmony default export */ const esm_Radio = (Radio);

;// CONCATENATED MODULE: ../react-radio/esm/style/group.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const group = ({});
;// CONCATENATED MODULE: ../react-radio/esm/RadioGroup.js


var RadioGroup_excluded = ["prefixCls", "className", "name", "value", "onChange", "children"];




var RadioGroup = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-radio-group',
      className,
      name,
      value,
      onChange,
      children
    } = props,
    other = _objectWithoutPropertiesLoose(props, RadioGroup_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({}, other, {
    ref: ref,
    className: [prefixCls, className].filter(Boolean).join(' ').trim(),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_button_group_esm, {
      children: external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.toArray(children).map(child => {
        if (!child) return;
        if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) return child;
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, _extends({}, child.props || {}, {
          checked: child.props.value === value,
          name,
          onChange
        }));
      })
    })
  }));
});
/* harmony default export */ const esm_RadioGroup = (RadioGroup);

;// CONCATENATED MODULE: ../react-radio/esm/RadioButton.js


var RadioButton_excluded = ["prefixCls", "type", "disabled", "value", "className", "style", "children", "size", "checked", "onChange"];



/**
 * Constructs a type by picking all properties from `HTMLInputProps` and then removing `size`.
 * Omit: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittk
 */

var RadioButton = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-radio',
      type = 'button',
      disabled = false,
      value = '',
      className,
      style,
      children,
      size = 'small',
      checked: prChecked = false,
      onChange
    } = props,
    other = _objectWithoutPropertiesLoose(props, RadioButton_excluded);
  var [checked, setChecked] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(prChecked);
  var [prevChecked, setPrevChecked] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  if (prChecked !== prevChecked) {
    setPrevChecked(prChecked);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (prChecked !== prevChecked) {
      setChecked(prChecked);
    }
  }, [prevChecked]);
  var cls = [prefixCls, className, disabled ? 'disabled' : null, size ? prefixCls + "-" + size : null].filter(Boolean).join(' ').trim();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (checked !== props.checked) {
      setChecked(!!props.checked);
    }
  }, [props.checked]);
  console.log('props.checked', props.checked);
  function handleChange(e) {
    e.persist();
    if (!checked) {
      setChecked(!checked);
      onChange && onChange(value);
    }
  }
  var label = children || value;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm, _extends({}, _extends({}, other, {
    className: cls,
    style,
    disabled,
    value
  }), {
    type: checked ? 'primary' : 'light',
    ref: ref,
    onClick: handleChange,
    children: label
  }));
});
/* harmony default export */ const esm_RadioButton = (RadioButton);

;// CONCATENATED MODULE: ../react-radio/esm/index.js








;// CONCATENATED MODULE: ../react-checkbox/esm/style/group.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const style_group = ({});
;// CONCATENATED MODULE: ../react-checkbox/esm/Group.js


var Group_excluded = ["prefixCls", "className", "name", "value", "onChange"];



var CheckboxGroup = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-checkbox-group',
      className,
      name,
      value,
      onChange: _onChange
    } = props,
    other = _objectWithoutPropertiesLoose(props, Group_excluded);
  var valueRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)([]);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  var childs = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.toArray(props.children);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => valueRef.current = value || [], [value]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({}, other, {
    className: cls,
    ref: ref,
    children: external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(childs, element => {
      if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(element)) return;
      if (Array.isArray(value) && element && element.props && element.props.value && value.includes(element.props.value)) {
        if (!valueRef.current.includes(element.props.value)) {
          valueRef.current.push(element.props.value);
        }
      }
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(element, Object.assign({}, element.props, {
        name,
        checked: valueRef.current.includes(element.props.value),
        onChange: e => {
          if (e.target.type && e.target.type !== 'checkbox') return;
          var checked = e.target.checked;
          var include = valueRef.current.includes(element.props.value);
          if (!include && checked) {
            valueRef.current.push(element.props.value);
          } else if (include && !checked) {
            valueRef.current = valueRef.current.filter(val => val !== element.props.value);
          }
          _onChange && _onChange(e, valueRef.current);
        }
      }));
    })
  }));
});

;// CONCATENATED MODULE: ../react-checkbox/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_checkbox_esm_style = ({});
;// CONCATENATED MODULE: ../react-checkbox/esm/Checkbox.js


var Checkbox_excluded = ["className", "prefixCls", "type", "indeterminate", "disabled", "value"];





function InternalCheckbox(props, ref) {
  var {
      className,
      prefixCls = 'w-checkbox',
      type = 'checkbox',
      indeterminate = false,
      disabled = false,
      value = ''
    } = props,
    other = _objectWithoutPropertiesLoose(props, Checkbox_excluded);
  var cls = [className, indeterminate && 'indeterminate'].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(RadioAbstract, _extends({
    ref: ref
  }, other, {
    type: type,
    prefixCls: prefixCls,
    disabled: disabled,
    value: value,
    className: cls
  }));
}
var Checkbox = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(InternalCheckbox);
Checkbox.Group = CheckboxGroup;
/* harmony default export */ const esm_Checkbox = (Checkbox);

;// CONCATENATED MODULE: ../react-checkbox/esm/index.js



/* harmony default export */ const react_checkbox_esm = (esm_Checkbox);

;// CONCATENATED MODULE: ../react-collapse/esm/Panel.js


var esm_Panel_excluded = ["prefixCls", "className", "icon", "children", "isActive", "onItemClick", "disabled", "showArrow", "header", "extra"];





function Panel(props) {
  var {
      prefixCls = 'w-collapse',
      className,
      icon = 'down',
      children: _children,
      isActive,
      onItemClick,
      disabled = false,
      showArrow,
      header,
      extra
    } = props,
    resetProps = _objectWithoutPropertiesLoose(props, esm_Panel_excluded);
  var cls = [prefixCls ? prefixCls + "-item" : null, className, isActive ? prefixCls + "-active" : null, disabled ? prefixCls + "-disabled" : null].filter(Boolean).join(' ').trim();
  var iconRender = typeof icon === 'string' ? /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
    type: icon
  }) : icon;
  var childStyle = child => {
    return Object.assign({}, child && child.props ? child.props.style : {}, {
      transitionDuration: '300ms'
    });
  };
  function getInstance(status, instance) {
    if (!instance) {
      return;
    }
    if (status === 'exited' || status === 'exiting') {
      instance.style.height = '1px';
    }
    if (status === 'entered' || status === 'entering') {
      instance.style.height = instance.scrollHeight + "px";
    }
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
    className: cls
  }, resetProps, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: prefixCls + "-header",
      onClick: onItemClick,
      children: [showArrow && iconRender, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: prefixCls + "-title",
        children: header
      }), extra && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-extra",
        children: extra
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(esm_CSSTransition, {
      in: isActive,
      unmountOnExit: false,
      timeout: 300,
      classNames: prefixCls + "-panel",
      children: status => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement( /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: _children
      }), {
        className: prefixCls + "-panel",
        style: childStyle(_children),
        ref: e => getInstance(status, e)
      })
    })]
  }));
}

;// CONCATENATED MODULE: ../react-collapse/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_collapse_esm_style = ({});
;// CONCATENATED MODULE: ../react-collapse/esm/Collapse.js


var Collapse_excluded = ["prefixCls", "className", "children", "accordion", "bordered", "showArrow", "activeKey", "onChange"];




function toArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey;
}
function InternalCollapse(props, ref) {
  var {
      prefixCls = 'w-collapse',
      className,
      children,
      accordion = false,
      bordered,
      showArrow = true,
      activeKey: propsActiveKey,
      onChange
    } = props,
    resetProps = _objectWithoutPropertiesLoose(props, Collapse_excluded);
  var [activeKey, setActiveKey] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(toArray(propsActiveKey));
  var cls = [prefixCls, className, bordered ? 'w-noborder' : null].filter(Boolean).join(' ').trim();
  function onItemClick(key) {
    var keys = activeKey;
    if (accordion) {
      keys = keys[0] === key ? [] : [key];
    } else {
      keys = [...keys];
      var index = keys.indexOf(key);
      var isActive = index > -1;
      if (isActive) {
        keys.splice(index, 1);
      } else {
        keys.push(key);
      }
    }
    setActiveKey(keys);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (propsActiveKey !== activeKey) {
      setActiveKey(toArray(propsActiveKey));
    }
  }, [propsActiveKey]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (propsActiveKey !== activeKey) {
      onChange && onChange(activeKey);
    }
  }, [activeKey, propsActiveKey]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: cls
  }, resetProps, {
    ref: ref,
    children: external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(children, (child, index) => {
      // 如果没有密钥提供，请使用面板顺序作为默认密钥
      var key = child.key || String(index);
      var {
        disabled
      } = child.props;
      var isActive = false;
      if (accordion) {
        // 手风琴模式下默认选择第一个
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }
      var childProps = _extends({
        prefixCls,
        isActive,
        disabled,
        showArrow,
        onItemClick: disabled ? () => {} : () => onItemClick(key)
      }, child.props);
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, childProps);
    })
  }));
}
var Collapse = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(InternalCollapse);
Collapse.displayName = 'Collapse';
Collapse.Panel = Panel;
/* harmony default export */ const esm_Collapse = (Collapse);

;// CONCATENATED MODULE: ../react-collapse/esm/index.js



/* harmony default export */ const react_collapse_esm = (esm_Collapse);

// EXTERNAL MODULE: ../../node_modules/@uiw/copy-to-clipboard/dist/copy-to-clipboard.umd.js
var copy_to_clipboard_umd = __webpack_require__(448);
var copy_to_clipboard_umd_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard_umd);
;// CONCATENATED MODULE: ../react-copy-to-clipboard/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_copy_to_clipboard_esm_style = ({});
;// CONCATENATED MODULE: ../react-copy-to-clipboard/esm/index.js


var react_copy_to_clipboard_esm_excluded = ["prefixCls", "className", "text", "children", "onClick"];





function CopyToClipboard(props) {
  var {
      prefixCls = 'w-copy-to-clipboard',
      className,
      text = '',
      children,
      onClick = () => null
    } = props,
    resetProps = _objectWithoutPropertiesLoose(props, react_copy_to_clipboard_esm_excluded);
  function handleClick(e) {
    if (!text) {
      return onClick('', false, e);
    }
    copy_to_clipboard_umd_default()(text, isCopy => {
      onClick(text, isCopy, e);
    });
  }
  var otherProps = _extends({}, resetProps, {
    className: [prefixCls, className].filter(Boolean).join(' ').trim(),
    onClick: handleClick
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", _extends({}, otherProps, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: prefixCls + "-select",
      children: text
    }), children]
  }));
}

;// CONCATENATED MODULE: ../react-date-input/esm/style/date-input-range.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const date_input_range = ({});
;// CONCATENATED MODULE: ../react-date-input/esm/DateInputRange.js


var DateInputRange_excluded = ["prefixCls", "bodyStyle", "className", "popoverProps", "datePickerProps", "allowClear", "format", "onChange", "value"];









function DateInputRange(props) {
  var {
      prefixCls = 'w-dateinputrange',
      bodyStyle = undefined,
      className,
      popoverProps,
      datePickerProps,
      allowClear = true,
      format = 'YYYY/MM/DD',
      onChange,
      value
    } = props,
    inputProps = _objectWithoutPropertiesLoose(props, DateInputRange_excluded);
  var [dateRange, setDateRange] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    var valueTemp = [];
    var propsValue = value;
    if (Array.isArray(propsValue) && !!(propsValue != null && propsValue.length)) {
      propsValue.forEach((date, index) => {
        valueTemp[index] = typeof propsValue[index] === 'string' ? new Date(date) : date;
      });
    }
    setDateRange(valueTemp);
  }, [JSON.stringify(value)]);
  function handleChange(cdate, idx) {
    var changeValue = [...dateRange];
    changeValue[idx] = cdate;
    setDateRange(changeValue);
    onChange && onChange(cdate, changeValue);
  }
  function clearDateRange() {
    setDateRange([]);
    onChange && onChange(undefined, []);
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: [prefixCls + "-contents", prefixCls + "-inner"].filter(Boolean).join(' ').trim(),
    style: _extends({
      width: 300
    }, bodyStyle),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Popover, _extends({
      trigger: "focus",
      placement: "bottomLeft",
      autoAdjustOverflow: true
    }, popoverProps, {
      content: /*#__PURE__*/(0,jsx_runtime.jsx)(DatePicker, _extends({
        date: dateRange[0],
        className: prefixCls + "-popover"
      }, datePickerProps, {
        onChange: selectedDate => handleChange(selectedDate, 0)
      })),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, _extends({
        placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
        readOnly: true
      }, inputProps, {
        // onChange={(v) => console.log('v', v)}
        value: dateRange[0] ? formatter(format, dateRange[0]) : '',
        className: [prefixCls, className].filter(Boolean).join(' ').trim()
      }))
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      type: "swap-right",
      verticalAlign: "baseline",
      style: {
        fontSize: 21,
        top: -1,
        margin: '0px 8px 0px 5px'
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Popover, _extends({
      trigger: "focus",
      placement: "bottomLeft",
      autoAdjustOverflow: true
    }, popoverProps, {
      content: /*#__PURE__*/(0,jsx_runtime.jsx)(DatePicker, _extends({
        date: dateRange[1],
        className: prefixCls + "-popover"
      }, datePickerProps, {
        onChange: selectedDate => handleChange(selectedDate, 1)
      })),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, _extends({
        placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
        readOnly: true
      }, inputProps, {
        value: dateRange[1] ? formatter(format, dateRange[1]) : ''
        // onChange={(v) => console.log('v2', v)}
        ,
        className: [prefixCls, className].filter(Boolean).join(' ').trim()
      }))
    })), allowClear && dateRange.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      className: prefixCls + "-close-btn",
      color: "#a5a5a5",
      onClick: () => clearDateRange(),
      type: "close"
    })]
  });
}

;// CONCATENATED MODULE: ../react-date-input/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_date_input_esm_style = ({});
;// CONCATENATED MODULE: ../react-date-input/esm/index.js


var react_date_input_esm_excluded = ["prefixCls", "className", "popoverProps", "datePickerProps", "allowClear", "autoClose", "format", "onChange"];









function DateInput(props) {
  var {
      prefixCls = 'w-dateinput',
      className,
      popoverProps,
      datePickerProps,
      allowClear = true,
      autoClose = false,
      format = 'YYYY/MM/DD',
      onChange
    } = props,
    inputProps = _objectWithoutPropertiesLoose(props, react_date_input_esm_excluded);
  var [date, setDate] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.value);
  var value = date || '';
  inputProps.value = typeof value === 'string' ? value : formatter(format, value);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (props.value !== date) {
      setDate(props.value);
    }
  }, [props.value]);
  function handleChange(cdate) {
    autoClose && setIsOpen(false);
    setDate(cdate);
    onChange && onChange(cdate);
  }
  if (allowClear && inputProps.value) {
    inputProps.addonAfter = /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      className: prefixCls + "-close-btn",
      onClick: () => handleChange(undefined),
      type: "close"
    });
  }
  var [isOpen, setIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Popover, _extends({
    trigger: "focus",
    placement: "bottomLeft",
    autoAdjustOverflow: true,
    isOpen: isOpen,
    onVisibleChange: open => setIsOpen(open)
  }, popoverProps, {
    content: /*#__PURE__*/(0,jsx_runtime.jsx)(DatePicker, _extends({
      date: value && new Date(value) || undefined,
      className: prefixCls + "-popover"
    }, datePickerProps, {
      onChange: selectedDate => handleChange(selectedDate)
    })),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, _extends({
      placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
      readOnly: true
    }, inputProps, {
      className: [prefixCls, className].filter(Boolean).join(' ').trim()
    }))
  }));
}

;// CONCATENATED MODULE: ../react-descriptions/esm/DescriptionsItem.js
var DescriptionsItem = _ref => {
  var {
    children
  } = _ref;
  return children;
};
/* harmony default export */ const esm_DescriptionsItem = (DescriptionsItem);

;// CONCATENATED MODULE: ../react-descriptions/esm/Cell.js


var Cell_excluded = ["prefixCls", "className", "tagName", "layout", "bordered", "label", "isLastCell", "colon", "span", "children", "column"];



function Cell(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls,
      className,
      tagName: TagName = 'td',
      layout,
      bordered,
      label,
      colon,
      span,
      children
    } = props,
    other = _objectWithoutPropertiesLoose(props, Cell_excluded);
  var labelProps = {
    className: [prefixCls ? prefixCls + "-item-label" : null, className, colon ? prefixCls + "-item-colon" : null, !label ? prefixCls + "-item-no-label" : null].filter(Boolean).join(' ').trim()
  };
  if (layout === 'horizontal') {
    if (!bordered) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(TagName, _extends({}, other, {
        colSpan: span,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", _extends({}, labelProps, {
          children: label
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: prefixCls ? prefixCls + "-item-content" : '',
          children: children
        })]
      }));
    }
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", _extends({}, labelProps, {
        children: label
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(TagName, _extends({}, other, {
        colSpan: span ? span * 2 - 1 : span,
        className: prefixCls ? prefixCls + "-item-content" : '',
        children: children
      }))]
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TagName, {
    colSpan: span,
    className: prefixCls + "-item-" + (TagName === 'td' ? 'content' : 'label'),
    children: children
  });
}
/* harmony default export */ const esm_Cell = (Cell);

;// CONCATENATED MODULE: ../react-descriptions/esm/Row.js






function Row(props) {
  if (props === void 0) {
    props = {};
  }
  var {
    prefixCls,
    layout,
    bordered,
    column,
    colon,
    children = []
  } = props;
  function handleCell(isHead) {
    return children.map((child, index) => /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)(esm_Cell, _extends({}, child.props, {
      prefixCls: prefixCls,
      key: index,
      column: column,
      tagName: isHead ? 'th' : 'td',
      isLastCell: children.length - 1 === index,
      layout: layout,
      colon: colon,
      bordered: bordered
    }), isHead ? child.props.label : child.props.children));
  }
  var cls = prefixCls ? prefixCls + "-row" : '';
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
    children: [layout === 'vertical' && /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
      className: cls,
      children: handleCell(true)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
      className: cls,
      children: handleCell()
    })]
  });
}

;// CONCATENATED MODULE: ../react-descriptions/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_descriptions_esm_style = ({});
;// CONCATENATED MODULE: ../react-descriptions/esm/index.js


var react_descriptions_esm_excluded = ["prefixCls", "className", "title", "bordered", "column", "size", "colon", "children", "layout"];







var generateChildrenRows = (children, column) => {
  var rows = [];
  var columns = null;
  var leftSpans;
  children.forEach((node, index) => {
    var itemNode = node;
    if (!columns) {
      leftSpans = column;
      columns = [];
      rows.push(columns);
    }

    // Always set last span to align the end of Descriptions
    var lastItem = index === children.length - 1;
    if (lastItem) {
      itemNode = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(itemNode, {
        span: leftSpans
      });
    }
    // Calculate left fill span
    var {
      span = 1
    } = itemNode.props;
    columns.push(itemNode);
    leftSpans -= span;
    if (leftSpans <= 0) {
      columns = null;
    }
  });
  return rows;
};
function InternalDescriptions(props, ref) {
  var {
      prefixCls = 'w-descriptions',
      className,
      title,
      bordered,
      column = 3,
      size,
      colon = true,
      children,
      layout = 'horizontal'
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_descriptions_esm_excluded);
  var cls = [prefixCls, className, prefixCls && layout ? prefixCls + "-" + layout : null, bordered ? prefixCls + "-bordered" : null, size ? prefixCls + "-" + size : null].filter(Boolean).join(' ').trim();
  var cloneChildren = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.toArray(children);
  var childs = generateChildrenRows(cloneChildren, column);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: cls,
    ref: ref,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", _extends({}, other, {
      children: [title && /*#__PURE__*/(0,jsx_runtime.jsx)("caption", {
        className: prefixCls + "-title",
        children: title
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
        className: prefixCls + "-tbody",
        children: childs.map((child, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(Row, {
          prefixCls: prefixCls,
          bordered: bordered,
          colon: colon,
          column: column,
          layout: layout,
          children: child
        }, index))
      })]
    }))
  });
}
var Descriptions = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(InternalDescriptions);
Descriptions.Item = esm_DescriptionsItem;
/* harmony default export */ const react_descriptions_esm = (Descriptions);

;// CONCATENATED MODULE: ../react-divider/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_divider_esm_style = ({});
;// CONCATENATED MODULE: ../react-divider/esm/index.js


var react_divider_esm_excluded = ["prefixCls", "className", "children", "dashed", "type", "align"];



/* harmony default export */ const react_divider_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-divider',
      className,
      children,
      dashed = false,
      type = 'horizontal',
      align = 'center'
    } = props,
    restProps = _objectWithoutPropertiesLoose(props, react_divider_esm_excluded);
  var cls = [className, prefixCls, prefixCls && type ? prefixCls + "-" + type : null, prefixCls && align ? prefixCls + "-" + align : null, children ? prefixCls + "-with-text" : null, !!dashed ? prefixCls + "-dashed" : null].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: cls
  }, restProps, {
    ref: ref,
    children: children && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: prefixCls + "-inner-text",
      children: children
    })
  }));
}));

;// CONCATENATED MODULE: ../react-drawer/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_drawer_esm_style = ({});
;// CONCATENATED MODULE: ../react-drawer/esm/index.js


var react_drawer_esm_excluded = ["prefixCls", "className", "style", "placement", "size", "title", "footer", "icon", "isCloseButtonShown", "bodyProps", "timeout", "isOpen", "maskClosable"];







/* harmony default export */ const react_drawer_esm = (function (props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-drawer',
      className,
      style,
      placement = 'right',
      size = 260,
      title,
      footer,
      icon,
      isCloseButtonShown = true,
      bodyProps,
      timeout = 300,
      isOpen = false,
      maskClosable = true
    } = props,
    overlayProps = _objectWithoutPropertiesLoose(props, react_drawer_esm_excluded);
  var cls = [className, prefixCls, placement].filter(Boolean).join(' ').trim();
  var bodyCls = [bodyProps ? bodyProps.className : null, prefixCls ? prefixCls + "-body-inner" : null].filter(Boolean).join(' ').trim();
  var styl = _extends({}, style, {
    [/^(top|bottom)$/.test(placement) ? 'height' : 'width']: size
  });
  var footerView = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => footer ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: prefixCls + "-footer",
    children: footer
  }) : null, [footer]);
  var iconView = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => icon ? /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
    type: icon
  }) : null, [icon]);
  var titleView = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => title ? /*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
    children: title
  }) : null, [title]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Overlay, _extends({
    className: cls,
    timeout: timeout,
    isOpen: isOpen,
    maskClosable: maskClosable
  }, overlayProps, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: prefixCls + "-wrapper",
      style: styl,
      children: [(title || icon) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: prefixCls + "-header",
        children: [iconView, titleView, title && isCloseButtonShown && /*#__PURE__*/(0,jsx_runtime.jsx)(esm, {
          basic: true,
          onClick: props.onClose,
          icon: "close",
          type: "light"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-body",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({}, bodyProps, {
          className: bodyCls,
          children: props.children
        }))
      }), footerView]
    })
  }));
});

;// CONCATENATED MODULE: ../react-empty/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_empty_esm_style = ({});
;// CONCATENATED MODULE: ../react-empty/esm/index.js


var react_empty_esm_excluded = ["prefixCls", "className", "icon", "iconProps", "size", "description", "children"];




var Empty = props => {
  var {
      prefixCls = 'w-empty',
      className,
      icon,
      iconProps,
      size = 64,
      description = '暂无数据',
      children
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_empty_esm_excluded);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
    className: cls
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-icon",
      children: icon ? icon : /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", _extends({
        viewBox: "0 0 1024 1024",
        width: size,
        height: size
      }, iconProps, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M20.48 860.16a491.52 102.4 0 1 0 983.04 0 491.52 102.4 0 1 0-983.04 0Z",
          fill: "#F5F5F5"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M225.28 409.6l573.44-8.06912 112.78336 183.296H102.4z",
          fill: "#C4C5C7"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M266.24 61.44h491.52a40.96 40.96 0 0 1 40.96 40.96v532.48a40.96 40.96 0 0 1-40.96 40.96H266.24a40.96 40.96 0 0 1-40.96-40.96V102.4a40.96 40.96 0 0 1 40.96-40.96z",
          fill: "#F5F5F7"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M348.16 143.36h327.68a40.96 40.96 0 0 1 40.96 40.96v122.88a40.96 40.96 0 0 1-40.96 40.96H348.16a40.96 40.96 0 0 1-40.96-40.96V184.32a40.96 40.96 0 0 1 40.96-40.96zM327.68 409.6h368.64a20.48 20.48 0 0 1 0 40.96H327.68a20.48 20.48 0 0 1 0-40.96zM327.68 491.52h368.64a20.48 20.48 0 0 1 0 40.96H327.68a20.48 20.48 0 0 1 0-40.96z",
          fill: "#EBECEC"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M673.44384 607.58016v13.43488c0 25.14944-20.0704 45.52704-44.8512 45.52704H382.95552l-2.2528-0.06144c-23.7568-1.16736-42.63936-21.07392-42.63936-45.4656v-13.45536c0-12.55424-10.0352-22.7328-22.44608-22.7328H102.4v250.30656C102.4 860.2624 122.49088 880.64 147.29216 880.64h719.31904c24.7808 0 44.89216-20.3776 44.89216-45.50656V584.82688H695.88992c-12.3904 0-22.44608 10.17856-22.44608 22.7328z",
          fill: "#E0E0E0"
        })]
      }))
    }), description && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-description",
      children: description
    }), children && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-footer",
      children: children
    })]
  }));
};
/* harmony default export */ const react_empty_esm = (Empty);

;// CONCATENATED MODULE: ../react-file-input/esm/Input.js


var Input_excluded = ["className", "dataLabel", "prefixCls"];



/* harmony default export */ const Input = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      className,
      dataLabel = 'Browse',
      prefixCls = 'w-fileinput'
    } = props,
    other = _objectWithoutPropertiesLoose(props, Input_excluded);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, _extends({
    ref: ref,
    "data-label": dataLabel,
    className: cls
  }, other, {
    type: "file"
  }));
}));

;// CONCATENATED MODULE: ../react-file-input/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_file_input_esm_style = ({});
;// CONCATENATED MODULE: ../react-file-input/esm/List.js





var Picture = props => {
  var {
    className,
    prefixCls = 'w-fileinput-list',
    dataList = [],
    uploadType,
    size = 'middle',
    shape = 'round',
    readonly,
    children,
    showFileIcon = {
      showPreviewIcon: true,
      showRemoveIcon: true
    },
    onPreview,
    onAdd,
    onRemove
  } = props;
  var cls = [prefixCls, prefixCls + "-size-" + size, prefixCls + "-shape-" + shape, className].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: cls,
    children: [children && !readonly && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(children) && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(children, {
      onClick: onAdd
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: dataList.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: prefixCls + "-" + uploadType,
        children: [uploadType === 'picture' && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: prefixCls + "-info " + prefixCls + "-" + uploadType + "-info",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: item['dataURL'],
            alt: ""
          }), (showFileIcon == null ? void 0 : showFileIcon.showPreviewIcon) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: prefixCls + "-actions",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: prefixCls + "-actions-search",
              onClick: () => onPreview == null ? void 0 : onPreview(item),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
                type: "search",
                style: {
                  color: '#fff',
                  fontSize: 16
                }
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: prefixCls + "-" + uploadType + "-text",
          children: item.name
        }), (showFileIcon == null ? void 0 : showFileIcon.showRemoveIcon) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: prefixCls + "-" + uploadType + "-icon",
          onClick: () => onRemove == null ? void 0 : onRemove(index),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
            type: "delete",
            style: {
              color: '#999'
            }
          })
        })]
      }, index))
    })]
  });
};
/* harmony default export */ const List = (Picture);

;// CONCATENATED MODULE: ../react-file-input/esm/Card.js





var Card = props => {
  var {
    className,
    prefixCls = 'w-fileinput-card',
    dataList = [],
    maxNumber = 3,
    shape = 'round',
    size = 'middle',
    readonly,
    children,
    showFileIcon = {
      showPreviewIcon: true,
      showRemoveIcon: true
    },
    onAdd,
    onPreview,
    onRemove
  } = props;
  var cls = [prefixCls, prefixCls + "-size-" + size, prefixCls + "-shape-" + shape, className].filter(Boolean).join(' ').trim();
  var isAction = showFileIcon.showPreviewIcon || showFileIcon.showRemoveIcon ? true : false;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: cls,
    children: [dataList.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: prefixCls + "-box",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-box-info",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: item['dataURL'],
          alt: ""
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: isAction ? prefixCls + "-actions" : '',
        children: [(showFileIcon == null ? void 0 : showFileIcon.showPreviewIcon) && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: prefixCls + "-actions-remove",
          onClick: () => onPreview == null ? void 0 : onPreview(item),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
            type: "search",
            style: {
              color: '#fff',
              fontSize: 16
            }
          })
        }), (showFileIcon == null ? void 0 : showFileIcon.showRemoveIcon) && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: prefixCls + "-actions-remove",
          onClick: () => onRemove == null ? void 0 : onRemove(index),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
            type: "delete",
            style: {
              color: '#fff',
              fontSize: 16
            }
          })
        })]
      })]
    }, index)), maxNumber > dataList.length && !readonly && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-box " + prefixCls + "-btn",
      onClick: onAdd,
      children: children
    })]
  });
};
/* harmony default export */ const esm_Card = (Card);

;// CONCATENATED MODULE: ../react-file-input/esm/utils.js
var openFileDialog = inputRef => {
  if (inputRef.current) inputRef.current.click();
};
var getAcceptTypeString = accept => {
  return accept && accept.length > 0 ? accept.map(item => "." + item).join(', ') : 'image/*';
};
var getBase64 = file => {
  var reader = new FileReader();
  return new Promise(resolve => {
    reader.addEventListener('load', () => resolve(String(reader.result)));
    reader.readAsDataURL(file);
  });
};
var getListFiles = (files, dataURLKey) => {
  var promiseFiles = [];
  for (var i = 0; i < files.length; i += 1) {
    promiseFiles.push(getBase64(files[i]));
  }
  return Promise.all(promiseFiles).then(fileListBase64 => {
    var fileList = fileListBase64.map((base64, index) => ({
      [dataURLKey]: base64,
      file: files[index],
      name: files[index].name
    }));
    return fileList;
  });
};
var isUploadType = type => {
  return ['picture', 'text', 'card'].includes(type);
};

;// CONCATENATED MODULE: ../react-file-input/esm/FileList.js








var FileList = props => {
  var {
    uploadType,
    value = [],
    multiple = false,
    maxNumber = 3,
    onChange
  } = props;
  var inputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var inValue = value || [];
  var [fileList, setFileList] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setFileList(inValue);
  }, [value]);
  var handleClickInput = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => openFileDialog(inputRef), [inputRef]);
  var onFileUpload = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    if (inputRef.current) inputRef.current.value = '';
    handleClickInput();
  }, [handleClickInput]);
  var onInputChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (e) {
      var files = e.target.files;
      if (!files) return;
      var updatedFileList = yield getListFiles(files, 'dataURL');
      var updatedList = [...fileList, ...updatedFileList];
      if (maxNumber < updatedList.length) {
        updatedList = updatedList.slice(0, maxNumber);
      }
      setFileList(updatedList);
      onChange == null ? void 0 : onChange(updatedList);
    });
    return function onInputChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var onRemove = index => {
    var updatedList = [...fileList];
    updatedList.splice(index, 1);
    setFileList(updatedList);
    onChange == null ? void 0 : onChange(updatedList);
  };
  var Comp;
  if (uploadType === 'card') {
    Comp = esm_Card;
  }
  if (uploadType === 'picture' || uploadType === 'text') {
    Comp = List;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      type: "file",
      ref: inputRef,
      multiple: multiple,
      style: {
        display: 'none'
      },
      onChange: onInputChange
    }), Comp && /*#__PURE__*/(0,jsx_runtime.jsx)(Comp, _extends({}, props, {
      maxNumber: maxNumber || 3,
      dataList: fileList,
      onAdd: onFileUpload,
      onRemove: onRemove
    }))]
  });
};
/* harmony default export */ const esm_FileList = (FileList);

;// CONCATENATED MODULE: ../react-file-input/esm/index.js







function Upload(props) {
  var {
    uploadType = 'input'
  } = props;
  if (uploadType === 'input') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Input, _extends({}, props));
  }
  if (isUploadType(uploadType)) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FileList, _extends({}, props));
  }
  return null;
}
/* harmony default export */ const react_file_input_esm = (Upload);

;// CONCATENATED MODULE: ../react-grid/esm/style/col.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const col = ({});
;// CONCATENATED MODULE: ../react-grid/esm/Col.js


var Col_excluded = ["prefixCls", "className", "fixed", "span", "grow", "align"];



function Col(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-col',
      className,
      fixed,
      span,
      grow,
      align
    } = props,
    other = _objectWithoutPropertiesLoose(props, Col_excluded);
  var cls = [prefixCls, className, span ? prefixCls + "-" + span : null, fixed ? prefixCls + "-fixed" : null, align ? prefixCls + "-align-" + align : null, fixed ? prefixCls + "-grow-" + grow : null].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: cls
  }, other, {
    children: props.children
  }));
}

;// CONCATENATED MODULE: ../react-grid/esm/style/row.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const row = ({});
;// CONCATENATED MODULE: ../react-grid/esm/Row.js


var Row_excluded = ["prefixCls", "className", "gutter", "justify", "align"];



function Row_Row(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-row',
      className,
      gutter = 0,
      justify,
      align
    } = props,
    other = _objectWithoutPropertiesLoose(props, Row_excluded);
  var cls = [prefixCls, className, align ? prefixCls + "-align-" + align : null, justify ? prefixCls + "-justify-" + justify : null].filter(Boolean).join(' ').trim();
  var gutterStyl = !gutter ? {} : {
    paddingLeft: gutter / 2,
    paddingRight: gutter / 2
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({}, other, {
    className: cls,
    children: external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.toArray(props.children).map(child => {
      if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) return child;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, Object.assign({}, child.props, {
        style: _extends({}, child.props.style, gutterStyl)
      }));
    })
  }));
}

;// CONCATENATED MODULE: ../react-grid/esm/index.js



;// CONCATENATED MODULE: ../react-form/esm/style/form-item.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const form_item = ({});
;// CONCATENATED MODULE: ../react-form/esm/FormItem.js


var FormItem_excluded = ["prefixCls", "className", "required", "style", "label", "labelFor", "labelClassName", "labelStyle", "help", "inline", "initialValue", "validator", "hasError"];





class FormItem extends (external_root_React_commonjs2_react_commonjs_react_amd_react_default()).PureComponent {
  render() {
    var _this$props = this.props,
      {
        prefixCls,
        className,
        required,
        style,
        label,
        labelFor,
        labelClassName,
        labelStyle,
        help,
        inline,
        hasError
      } = _this$props,
      otherProps = _objectWithoutPropertiesLoose(_this$props, FormItem_excluded);
    var cls = [prefixCls, className, hasError ? prefixCls + "-error" : null].filter(Boolean).join(' ').trim();
    var labelCls = ['w-form-label', labelClassName].filter(Boolean).join(' ').trim();
    if (inline) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
        className: cls,
        style: style
      }, otherProps, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Row_Row, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Col, {
            fixed: true,
            className: labelCls,
            children: [required && /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
              style: {
                color: 'red'
              },
              children: "*"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
              style: labelStyle,
              htmlFor: labelFor,
              children: label
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col, {
            className: "w-form-row",
            children: this.props.children
          })]
        }), help && /*#__PURE__*/(0,jsx_runtime.jsx)(Row_Row, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col, {
            className: "w-form-help",
            children: help
          })
        })]
      }));
    }
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
      className: cls,
      style: style
    }, otherProps, {
      children: [label && /*#__PURE__*/(0,jsx_runtime.jsxs)((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, {
        children: [required && /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
          style: {
            color: 'red'
          },
          children: "*"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
          className: labelCls,
          style: labelStyle,
          htmlFor: labelFor,
          children: label
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col, {
        className: "w-form-row",
        children: this.props.children
      }), help && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "w-form-help",
        children: help
      })]
    }));
  }
}
FormItem.defaultProps = {
  prefixCls: 'w-form-item'
};

;// CONCATENATED MODULE: ../react-form/esm/style/form.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const style_form = ({});
;// CONCATENATED MODULE: ../react-form/esm/Form.js


var Form_excluded = ["prefixCls", "className", "fields", "children", "resetOnSubmit", "onSubmitError", "onChange", "onSubmit", "afterSubmit"],
  Form_excluded2 = ["children", "validator", "name", "help", "label", "labelFor", "labelClassName", "labelStyle", "inline", "initialValue"];





function newFormState(fields, cb) {
  var state = {
    initial: {},
    current: {},
    submitting: false,
    errors: {}
  };
  for (var name in fields) {
    var props = fields[name];
    if (!props) continue;
    var {
      initialValue,
      currentValue: _currentValue
    } = cb(_extends({}, props, {
      name
    }));
    state.initial[name] = Array.isArray(initialValue) ? [...initialValue] : initialValue;
    state.current[name] = _currentValue;
  }
  return state;
}
function newInitialValue(value) {
  return value === null || value === undefined ? '' : value;
}
var isPromise = promise => promise && typeof promise.then === 'function';
function Form(props, ref) {
  var {
      prefixCls = 'w-form',
      className,
      fields,
      children,
      resetOnSubmit,
      onSubmitError,
      onChange,
      onSubmit,
      afterSubmit
    } = props,
    others = _objectWithoutPropertiesLoose(props, Form_excluded);
  var initData = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => newFormState(fields, _ref => {
    var {
      initialValue
    } = _ref;
    initialValue = newInitialValue(initialValue);
    return {
      initialValue,
      currentValue: initialValue
    };
  }), []);
  var [data, setData] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(initData);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => ({
    onSubmit: handleSubmit,
    resetForm: handleReset,
    getFieldValues: () => data.current,
    getError: () => data.errors,
    setFields: setFields,
    setFieldValue: setFieldValue
  }), [data]);
  var formUnits = {};
  for (var name in fields) {
    var itemProps = fields[name];
    if (!itemProps) continue;
    var error = data.errors[name];
    if (typeof itemProps.initialValue === 'boolean') {
      itemProps.checked = itemProps.initialValue;
    }
    var childField = controlField(_extends({}, itemProps, {
      name
    }));
    var help = error || itemProps.help;
    var labelFor = itemProps.labelFor;
    formUnits[name] = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)(FormItem, _extends({}, itemProps, {
      key: name,
      children: childField,
      help: help,
      labelFor: labelFor,
      name: name,
      hasError: !!error
    }));
  }
  function setFields(fields) {
    var tempData = _extends({}, data, {
      current: fields
    });
    setData(tempData);
  }
  function setFieldValue(fieldName, value) {
    var tempData = _extends({}, data, {
      current: _extends({}, data.current, {
        [fieldName]: value
      })
    });
    setData(tempData);
  }
  function handleChange(name, validator, element, cb) {
    return (env, list) => {
      var value = env && env.target && 'value' in env.target ? env.target.value : env;
      // 控件 Checkbox.Group 多选值的处理
      value = list || value;
      // 控件 Checkbox 值的处理
      if (!list && element && env && env.target && /(radio)/.test(env.target.type)) {
        // 控件 Switch/Radio/Checkbox 值的处理
        value = env.target.value ? env.target.value : env.target.checked;
      }
      if (!list && element && env && env.target && /(checkbox)/.test(env.target.type)) {
        // 控件 Switch/Radio/Checkbox 值的处理
        value = env.target.checked;
      }
      var nextState = {
        current: _extends({}, data.current, {
          [name]: value
        })
      };
      var error = validator && validator(value);
      if (!error) {
        nextState.errors = _extends({}, data.errors);
        delete nextState.errors[name];
      }
      if (env && env.persist && typeof env.persist === 'function') env.persist();
      setData(_extends({}, data, nextState));
      if (cb) {
        cb(env);
      }
      onChange && onChange(_extends({}, data, nextState));
    };
  }
  function handleSubmit(e) {
    e && e.preventDefault();
    var {
      initial,
      current
    } = data;
    setData(_extends({}, data, {
      submitting: true
    }));
    var nextState = {
      submitting: false
    };
    var onError = evn => setData(_extends({}, data, nextState, {
      errors: onSubmitError && onSubmitError(evn) || {}
    }));
    var onSuccess = response => {
      if (resetOnSubmit) {
        nextState.current = initial;
      }
      setData(_extends({}, data, nextState, {
        errors: {}
      }));
      afterSubmit && afterSubmit({
        state: data,
        response,
        reset: handleReset
      });
    };
    try {
      var afterSubmitPromise = onSubmit ? onSubmit({
        initial,
        current
      }, e) : undefined;
      if (afterSubmitPromise && isPromise(afterSubmitPromise)) {
        return afterSubmitPromise.then(onSuccess).catch(onError);
      } else {
        return onSuccess(afterSubmitPromise);
      }
    } catch (evn) {
      onError(evn);
    }
  }
  function canSubmit() {
    var {
      submitting,
      current = {}
    } = data;
    var passesValidators = true;
    for (var _name in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, _name)) {
        var fieldsProps = fields[_name];
        if (!fieldsProps) continue;
        if (fieldsProps.validator && fieldsProps.validator(current[_name])) {
          passesValidators = false;
          break;
        }
      }
    }
    return !submitting && passesValidators;
  }
  function handleReset() {
    var {
      initial
    } = data;
    var initials = _extends({}, initial);
    Object.entries(initials).map(_ref2 => {
      var [key, value] = _ref2;
      if (Array.isArray(value)) {
        initials[key] = [...value];
      }
    });
    setData(_extends({}, data, {
      initial,
      current: initials,
      errors: {}
    }));
  }
  function controlField(_ref3) {
    var {
        children,
        validator,
        name
      } = _ref3,
      other = _objectWithoutPropertiesLoose(_ref3, Form_excluded2);
    var element = typeof children !== 'function' ? children : children({
      onChange: handleChange(name, validator),
      onSubmit: handleSubmit,
      canSubmit: canSubmit
    });
    if (!element || external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.count(element) !== 1 || !name) return element;
    var props = _extends({
      name: element.props.name || name
    }, other);
    var hasCurrentValue = Object.prototype.hasOwnProperty.call(data.current, name);
    props.id = element.props.id;
    props.value = hasCurrentValue ? data.current && data.current[name] : props.value;
    // : element.props.value;

    var type = element.props.type;
    if (type === 'checkbox' || type === 'switch' || typeof props.value === 'boolean') {
      props.checked = !!props.value;
      delete props.value;
    }
    props.onChange = handleChange(name, validator, element, element.props.onChange);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(element, props);
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("form", _extends({}, others, {
    className: [prefixCls, className].filter(Boolean).join(' ').trim(),
    onSubmit: handleSubmit,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("fieldset", {
      disabled: data.submitting,
      children: typeof children === 'function' ? children({
        fields: formUnits,
        state: data,
        resetForm: handleReset,
        canSubmit: canSubmit
      }) : children
    })
  }));
}
/* harmony default export */ const esm_Form = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(Form));

;// CONCATENATED MODULE: ../react-form/esm/index.js




/* harmony default export */ const react_form_esm = (esm_Form);

;// CONCATENATED MODULE: ../react-list/esm/Item.js


var esm_Item_excluded = ["prefixCls", "className", "children", "extra", "tagName", "active"];



var ListItem = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-list-item',
      className,
      children,
      extra,
      tagName = 'div',
      active = false
    } = props,
    resetProps = _objectWithoutPropertiesLoose(props, esm_Item_excluded);
  var cls = [prefixCls, className, props.disabled ? 'w-disabled' : null, active ? 'w-active' : null].filter(Boolean).join(' ').trim();
  var TagName = props.href && typeof tagName === 'string' ? 'a' : tagName;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TagName, _extends({}, resetProps, {
    className: cls,
    ref
  }), !extra || resetProps.href ? children : /*#__PURE__*/(0,jsx_runtime.jsxs)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-main",
      children: children
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-extra",
      children: extra
    })]
  }));
});
ListItem.displayName = 'List.Item';

;// CONCATENATED MODULE: ../react-list/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_list_esm_style = ({});
;// CONCATENATED MODULE: ../react-list/esm/index.js


var react_list_esm_excluded = ["prefixCls", "bordered", "striped", "noHover", "active", "size", "renderItem", "className", "children", "header", "footer", "dataSource"];






function InternalList(props, ref) {
  var {
      prefixCls = 'w-list',
      bordered = true,
      striped = false,
      noHover = false,
      active = false,
      size = 'default',
      renderItem,
      className,
      children,
      header,
      footer,
      dataSource = []
    } = props,
    resetProps = _objectWithoutPropertiesLoose(props, react_list_esm_excluded);
  var items;
  if (dataSource && dataSource.length > 0) {
    items = dataSource.map((item, index) => renderItem && renderItem(item, index));
  } else {
    items = children;
  }
  var childrenList = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(items, (child, index) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child) && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, {
    key: index
  }));
  var classString = [prefixCls, className, striped ? prefixCls + "-striped" : null, noHover ? prefixCls + "-no-hover" : null, active ? prefixCls + "-active" : null, bordered ? prefixCls + "-bordered" : null, size && size !== 'default' ? prefixCls + "-size-" + size : null].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
    className: classString
  }, resetProps, {
    ref: ref,
    children: [header && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-header",
      children: header
    }), childrenList, footer && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-footer",
      children: footer
    })]
  }));
}
var esm_List = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(InternalList);
esm_List.Item = ListItem;
/* harmony default export */ const react_list_esm = (esm_List);

;// CONCATENATED MODULE: ../../node_modules/@uiw/react-layout/esm/Layout.js


var Layout_excluded = ["prefixCls", "className", "hasSider", "children"];


var LayoutContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createContext({
  addSider: () => null,
  removeSider: () => null
});
var Layout = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-layout',
      className,
      hasSider,
      children
    } = props,
    other = _objectWithoutPropertiesLoose(props, Layout_excluded);
  var [siders, setSiders] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  var addSider = id => {
    setSiders(state => [...state, id]);
  };
  var removeSider = id => {
    setSiders(state => [...state.filter(currentId => currentId !== id)]);
  };
  var cls = [prefixCls, className, typeof hasSider === 'boolean' && hasSider || siders.length > 0 ? prefixCls + "-has-sider" : null].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(LayoutContext.Provider, {
    value: {
      addSider,
      removeSider
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("section", _extends({
      ref: ref,
      className: cls
    }, other, {
      children: children
    }))
  });
});
Layout.displayName = 'Layout';
/* harmony default export */ const esm_Layout = (Layout);
;// CONCATENATED MODULE: ../../node_modules/@uiw/react-layout/esm/Header.js


var Header_excluded = ["prefixCls", "className", "children"];


var LayoutHeader = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var _ref = props || {},
    {
      prefixCls = 'w-layout-header',
      className,
      children
    } = _ref,
    other = _objectWithoutPropertiesLoose(_ref, Header_excluded);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("header", _extends({
    ref: ref,
    className: cls
  }, other, {
    children: children
  }));
});
;// CONCATENATED MODULE: ../../node_modules/@uiw/react-layout/esm/Footer.js


var Footer_excluded = ["prefixCls", "className", "children"];


var LayoutFooter = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-layout-footer',
      className,
      children
    } = props,
    other = _objectWithoutPropertiesLoose(props, Footer_excluded);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("footer", _extends({
    ref: ref,
    className: cls
  }, other, {
    children: children
  }));
});
;// CONCATENATED MODULE: ../../node_modules/@uiw/react-layout/esm/Sider.js


var Sider_excluded = ["prefixCls", "className", "style", "children", "width", "collapsedWidth", "collapsed", "addSider", "removeSider"];



function randomid() {
  return parseInt(String(Math.random() * 1e15), 10).toString(36);
}
var Sider = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var _ref = props,
    {
      prefixCls = 'w-layout-sider',
      className,
      style,
      children,
      width = 200,
      collapsedWidth = 80,
      collapsed = false,
      addSider,
      removeSider
    } = _ref,
    other = _objectWithoutPropertiesLoose(_ref, Sider_excluded);
  var [sliderId] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)("w-layout-" + randomid());
  var [rawWidth, setRawWidth] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(collapsed ? collapsedWidth : width);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (addSider) {
      addSider(sliderId);
    }
    return () => {
      if (removeSider) {
        removeSider(sliderId);
      }
    };
  }, []);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => setRawWidth(collapsed ? collapsedWidth : width), [width, collapsedWidth, collapsed]);
  var divStyle = _extends({}, style, {
    flex: "0 0 " + rawWidth,
    maxWidth: rawWidth,
    minWidth: rawWidth,
    width: rawWidth
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    ref: ref,
    className: [prefixCls, className].filter(Boolean).join(' ').trim(),
    style: divStyle
  }, other, {
    children: children
  }));
});
var LayoutSider = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(LayoutContext.Consumer, {
    children: context => /*#__PURE__*/(0,jsx_runtime.jsx)(Sider, _extends({
      ref: ref
    }, props, context))
  });
});
;// CONCATENATED MODULE: ../../node_modules/@uiw/react-layout/esm/Content.js


var Content_excluded = ["prefixCls", "className", "children"];


var LayoutContent = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-layout-content',
      className,
      children
    } = props,
    other = _objectWithoutPropertiesLoose(props, Content_excluded);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("main", _extends({
    ref: ref,
    className: cls
  }, other, {
    children: children
  }));
});
;// CONCATENATED MODULE: ../../node_modules/@uiw/react-layout/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_layout_esm_style = ({});
;// CONCATENATED MODULE: ../../node_modules/@uiw/react-layout/esm/index.js






esm_Layout.Header = LayoutHeader;
esm_Layout.Footer = LayoutFooter;
esm_Layout.Sider = LayoutSider;
esm_Layout.Content = LayoutContent;





/* harmony default export */ const react_layout_esm = (esm_Layout);
;// CONCATENATED MODULE: ../react-loader/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_loader_esm_style = ({});
;// CONCATENATED MODULE: ../react-loader/esm/index.js


var react_loader_esm_excluded = ["prefixCls", "className", "size", "loading", "tip", "vertical", "color", "bgColor", "children", "indicator", "fullscreen"];




/* harmony default export */ const react_loader_esm = (function (props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-loader',
      className,
      size = 'default',
      loading = true,
      tip,
      vertical,
      color,
      bgColor,
      children,
      indicator,
      fullscreen = false
    } = props,
    otherProps = _objectWithoutPropertiesLoose(props, react_loader_esm_excluded);
  var cls = [prefixCls, className, size ? prefixCls + "-" + size : null].filter(Boolean).join(' ').trim();
  var indicatorView = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    viewBox: "25 25 50 50",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none",
      strokeWidth: "5",
      strokeMiterlimit: "10"
    })
  }), []);
  var tipsView = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: [prefixCls + "-tips", fullscreen ? prefixCls + "-fullscreen" : null].filter(Boolean).join(' ').trim(),
    style: {
      color,
      backgroundColor: bgColor
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: prefixCls + "-tips-nested",
      children: [indicator || indicatorView, tip && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: [prefixCls + "-text", vertical ? prefixCls + "-vertical" : null].filter(Boolean).join(' ').trim(),
        children: tip
      })]
    })
  }), [fullscreen, bgColor, prefixCls, vertical, tip]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
    className: cls
  }, otherProps, {
    children: [(loading || fullscreen) && tipsView, children && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(children, Object.assign({}, children.props, {
      className: [prefixCls + "-warp", loading ? prefixCls + "-blur" : null].filter(Boolean).join(' ').trim()
    }))]
  }));
});

;// CONCATENATED MODULE: ../react-message/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_message_esm_style = ({});
;// CONCATENATED MODULE: ../react-message/esm/index.js


var react_message_esm_excluded = ["prefixCls", "className", "type", "title", "description", "showIcon", "icon", "rounded", "isCloseButtonShown"];







class Message extends (external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Component {
  constructor(props) {
    super(props);
    this.handleClosed = e => {
      var {
        onClose
      } = this.props;
      this.setState({
        isOpen: false
      });
      onClose && onClose(e);
    };
    this.renderIcon = () => {
      var {
        type,
        showIcon
      } = this.props;
      var icon = this.props.icon;
      if (!icon && showIcon) {
        switch (type) {
          case 'success':
            icon = 'circle-check';
            break;
          case 'warning':
            icon = 'warning';
            break;
          case 'info':
            icon = 'information';
            break;
          case 'error':
            icon = 'circle-close';
            break;
          default:
            break;
        }
      }
      return icon;
    };
    this.state = {
      isOpen: true
    };
  }
  render() {
    var _this$props = this.props,
      {
        prefixCls,
        className,
        type,
        title,
        description,
        showIcon,
        rounded,
        isCloseButtonShown
      } = _this$props,
      elementProps = _objectWithoutPropertiesLoose(_this$props, react_message_esm_excluded);
    var children = description || this.props.children;
    var cls = [prefixCls, className, prefixCls + "-" + type, rounded ? prefixCls + "-rounded" : null, showIcon ? prefixCls + "-icon" : null, showIcon ? "" + prefixCls + (title ? '-title' : '') + (children ? '-description' : '') : null].filter(Boolean).join(' ').trim();
    var Child = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
      className: cls
    }, elementProps, {
      children: [isCloseButtonShown && /*#__PURE__*/(0,jsx_runtime.jsx)(esm, {
        basic: true,
        onClick: this.handleClosed,
        icon: "close",
        type: "light"
      }), showIcon && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
        type: this.renderIcon()
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: prefixCls + "-title",
        children: title
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: prefixCls + "-description",
        children: children
      })]
    }));
    if (!isCloseButtonShown) {
      return Child;
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_CSSTransition, {
      in: this.state.isOpen,
      unmountOnExit: true,
      timeout: 300,
      classNames: prefixCls,
      children: Child
    });
  }
}
Message.defaultProps = {
  prefixCls: 'w-message',
  rounded: true,
  isCloseButtonShown: false
};

;// CONCATENATED MODULE: ../react-month-picker/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_month_picker_esm_style = ({});
;// CONCATENATED MODULE: ../react-month-picker/esm/index.js


var react_month_picker_esm_excluded = ["prefixCls", "format", "onChange", "className", "popoverProps", "pickerCaptionProps", "allowClear", "monthLabel"];









var react_month_picker_esm_MONTH_LABEL = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
function MonthPicker(props) {
  var {
      prefixCls = 'w-monthpicker',
      format = 'YYYY/MM',
      onChange = () => {},
      className,
      popoverProps,
      pickerCaptionProps = {},
      allowClear = true,
      monthLabel = react_month_picker_esm_MONTH_LABEL
    } = props,
    inputProps = _objectWithoutPropertiesLoose(props, react_month_picker_esm_excluded);
  var [isOpen, setIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  var [panelDate, setPanelDate] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(new Date());
  var [type, setType] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('month');
  var [date, setDate] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.value);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setDate(props.value), [props.value]);
  inputProps.value = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => typeof date === 'string' ? date : date ? formatter(format, date) : '', [format, date]);
  if (allowClear && inputProps.value) {
    inputProps.addonAfter = /*#__PURE__*/(0,jsx_runtime.jsx)(esm, {
      className: prefixCls + "-close-btn",
      icon: "close",
      onClick: () => {
        setDate('');
        onChange && onChange();
      },
      size: inputProps.size,
      basic: true,
      type: "light"
    });
  }
  function handleSelectedDate(type, num, paging) {
    var curPanelDate = new Date(new Date(panelDate)[type](num));
    if (!paging) {
      setType('month');
    }
    var curDate = formatter(format, new Date(curPanelDate));
    setDate(curDate);
    setPanelDate(curPanelDate);
    onChange && onChange(curPanelDate, curDate);
    if (type === 'setMonth') {
      setIsOpen(false);
    }
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Popover, _extends({
    trigger: "focus",
    placement: "bottomLeft",
    autoAdjustOverflow: true,
    isOpen: isOpen
  }, popoverProps, {
    onVisibleChange: open => setIsOpen(open),
    content: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: prefixCls + "-popover",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DatePickerCaption, _extends({
        panelDate: panelDate,
        monthLabel: monthLabel
      }, pickerCaptionProps, {
        onSelected: captionType => {
          if (/^(month|year)$/.test(captionType)) {
            setType(captionType);
          } else {
            var year = new Date(panelDate).getFullYear();
            var curPanelDate = new Date(new Date(panelDate).setFullYear(captionType === 'next' ? year + 1 : year - 1));
            setPanelDate(curPanelDate);
          }
        }
      })), type === 'month' && /*#__PURE__*/(0,jsx_runtime.jsx)(DatePickerMonth, {
        panelDate: panelDate,
        monthLabel: monthLabel,
        onSelected: (month, paging) => handleSelectedDate('setMonth', month, paging)
      }), type === 'year' && /*#__PURE__*/(0,jsx_runtime.jsx)(DatePickerYear, {
        panelDate: panelDate,
        onSelected: (year, paging) => handleSelectedDate('setFullYear', year, paging)
      })]
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, _extends({
      placeholder: "\u8BF7\u8F93\u5165\u65E5\u671F",
      readOnly: true
    }, inputProps, {
      className: [prefixCls, className].filter(Boolean).join(' ').trim()
    }))
  }));
}

;// CONCATENATED MODULE: ../utils/esm/randomid.js
/**
 * Returns a random text
 */
function randomid_randomid() {
  return parseInt(String(Math.random() * 1e15), 10).toString(36);
}

;// CONCATENATED MODULE: ../react-notify/esm/Container.js


var Container_excluded = ["description", "isOpen"];



var notifys = {};
var timer = {};
class Container extends (external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Component {
  constructor() {
    super(...arguments);
    this.state = {
      notifys: {}
    };
  }
  create(props) {
    var {
      placement,
      key
    } = props;
    if (!notifys[placement]) {
      notifys[placement] = {};
    }
    props.isOpen = false;
    notifys[placement][key] = props;
    if (props.duration) {
      timer[key] = setTimeout(() => {
        this.closed(key, placement);
      }, props.duration);
    }
    this.setState({
      notifys,
      placement
    }, () => {
      notifys[placement][key].isOpen = true;
      this.setState({
        notifys
      });
    });
  }
  closed(key, placement) {
    if (!key || !placement || !notifys[placement][key]) {
      return;
    }
    notifys[placement][key].isOpen = false;
    var props = notifys[placement][key];
    this.setState({
      notifys
    }, () => {
      clearTimeout(timer[key]);
      delete timer[key];
      delete notifys[placement][key];
      if (props && props.willUnmount) {
        props.willUnmount(props, notifys);
      }
    });
  }
  render() {
    var {
      prefixCls
    } = this.props;
    var {
      placement
    } = this.state;
    return /*#__PURE__*/(0,jsx_runtime.jsx)((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, {
      children: placement && Object.keys(this.state.notifys[placement]).map(key => {
        var _this$state$notifys$p = this.state.notifys[placement][key],
          {
            description,
            isOpen
          } = _this$state$notifys$p,
          alertProps = _objectWithoutPropertiesLoose(_this$state$notifys$p, Container_excluded);
        if (alertProps.type === 'open') {
          delete alertProps.type;
        }
        return /*#__PURE__*/(0,jsx_runtime.jsx)(react_alert_esm, _extends({
          className: prefixCls,
          useButton: false,
          width: 320
        }, alertProps, {
          usePortal: false,
          hasBackdrop: false,
          isOpen: isOpen,
          content: description
        }), key);
      })
    });
  }
}
Container.defaultProps = {
  prefixCls: 'w-notify',
  placement: 'topRight'
};

;// CONCATENATED MODULE: ../react-notify/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_notify_esm_style = ({});
;// CONCATENATED MODULE: ../react-notify/esm/index.js







var esm_notifys = {};
var notifysDom = {};
function NotificationCreate(props, type) {
  if (type === void 0) {
    type = 'open';
  }
  if (!props.placement) {
    props.placement = 'topRight';
  }
  props.type = type;
  if (!props.icon && props.icon !== null) {
    switch (props.type) {
      case 'success':
        props.icon = 'circle-check';
        break;
      case 'warning':
        props.icon = 'warning';
        break;
      case 'info':
        props.icon = 'information';
        break;
      case 'error':
        props.icon = 'circle-close';
        break;
      default:
        break;
    }
  }
  switch (props.type) {
    case 'info':
      props.type = 'primary';
      break;
    case 'error':
      props.type = 'danger';
      break;
    default:
      break;
  }
  if (props.placement && !esm_notifys[props.placement]) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.className = ['w-notify-warpper', props.placement].filter(Boolean).join(' ').trim();
    notifysDom[props.placement] = div;
    esm_notifys[props.placement] = external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().render( /*#__PURE__*/(0,jsx_runtime.jsx)(Container, {}), div);
  }
  if (props.duration !== null) {
    props.duration = (props.duration || 4.5) * 1000;
  }
  if (esm_notifys[props.placement]) {
    esm_notifys[props.placement].create(_extends({}, props, {
      duration: props.duration,
      key: randomid_randomid(),
      willUnmount(nprops, notifysChild) {
        if (!nprops) return;
        nprops.onClose && nprops.onClose();
        var keys = Object.keys(notifysChild[props.placement]);
        if (keys.length === 0 && esm_notifys[props.placement]) {
          delete esm_notifys[props.placement];
          if (notifysDom[props.placement]) {
            document.body.removeChild(notifysDom[props.placement]);
          }
        }
      }
    }));
  }
}
['open', 'success', 'warning', 'info', 'error'].forEach(type => {
  NotificationCreate[type] = function (options) {
    if (options === void 0) {
      options = {};
    }
    return NotificationCreate(options, type);
  };
});
/* harmony default export */ const react_notify_esm = (NotificationCreate);

;// CONCATENATED MODULE: ../react-select/esm/Option.js



/* harmony default export */ const Option = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)("option", _extends({}, props, {
  ref: ref
}))));

;// CONCATENATED MODULE: ../react-select/esm/Group.js



/* harmony default export */ const Group = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)("optgroup", _extends({}, props, {
  ref: ref
}))));

;// CONCATENATED MODULE: ../react-select/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_select_esm_style = ({});
;// CONCATENATED MODULE: ../react-select/esm/index.js


var react_select_esm_excluded = ["prefixCls", "className", "size"];





var InternalSelect = (props, ref) => {
  var {
      prefixCls = 'w-select',
      className,
      size = 'default'
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_select_esm_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("select", _extends({}, other, {
    ref: ref,
    className: [prefixCls, className, size ? prefixCls + "-" + size : null].filter(Boolean).join(' ').trim()
  }));
};
var Select = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(InternalSelect);
Select.Option = Option;
Select.Group = Group;
/* harmony default export */ const react_select_esm = (Select);

;// CONCATENATED MODULE: ../react-pagination/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_pagination_esm_style = ({});
;// CONCATENATED MODULE: ../react-pagination/esm/index.js


var react_pagination_esm_excluded = ["className", "style", "prefixCls", "alignment", "size", "total", "pageSize", "pageSizeOptions", "current", "onChange", "onShowSizeChange", "divider"];





function Pagination(props) {
  var {
      className,
      style,
      prefixCls = 'w-pagination',
      alignment = 'left',
      size = 'default',
      total = 0,
      pageSize = 10,
      // The number of pages displayed.
      pageSizeOptions = [],
      current: currentNumber = 1,
      onChange = () => null,
      onShowSizeChange,
      divider
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_pagination_esm_excluded);
  var [current, setCurrent] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(currentNumber);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setCurrent(currentNumber), [currentNumber]);
  var cls = [prefixCls, className, divider ? 'divider' : null, size].filter(Boolean).join(' ').trim();
  var initPageSoure = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    var data = [{
      type: 'prev',
      disabled: current === 1
    }];
    var count = Math.ceil(total / pageSize);
    var itemCount = count <= 5 ? count : 5;
    var num = 0;
    var basic = 0;
    if (current > 3 && count > 5) {
      data.push({
        label: 1
      });
    }
    if (current > 4 && count > 6) {
      data.push({
        type: 'jumpPrev',
        label: '•••',
        goto: 5
      });
    }
    while (num < itemCount) {
      num += 1;
      if (current > 3 && count > 5) {
        basic = current - 3;
      }
      var label = num + basic;
      if (count - current === 0 && count > 5) {
        label -= 2;
      }
      if (count - current === 1 && count > 5) {
        label -= 1;
      }
      if (label <= count) {
        data.push({
          label,
          active: current === label
        });
      }
    }
    if (current + 3 < count && count > 6) {
      data.push({
        type: 'jumpNext',
        label: '•••',
        goto: 5
      });
    }
    if (current + 2 < count && count > 5) {
      data.push({
        label: count
      });
    }
    data.push({
      type: 'next',
      disabled: current === count
    });
    return data;
    // return [
    //   { type: 'prev', disabled: true },
    //   { type: 'jumpPrev', label: '•••', goto: 5 },
    //   { label: 1 },
    //   { label: 2, active: true },
    //   { label: 3 },
    //   { label: 4 },
    //   { type: 'jumpPrev', label: '•••', goto: 5 },
    //   { type: 'next' },
    // ];
  }, [current, total, pageSize]);
  function handleClick(item) {
    if (item.active || item.disabled) {
      return;
    }
    var count = Math.ceil(total / pageSize);
    var state = {};
    if (item.label) {
      state.current = item.label;
    }
    if (item.type === 'prev') {
      state.current = current - 1 > 0 ? current - 1 : 1;
    }
    if (item.type === 'next') {
      state.current = current + 1 <= count ? current + 1 : count;
    }
    if (/^(jumpPrev|jumpNext)/.test(item.type) && item.goto) {
      state.current = item.type === 'jumpPrev' ? current - item.goto : current + item.goto;
      if (state.current > count) {
        state.current = count;
      }
      if (state.current < 1) {
        state.current = 1;
      }
    }
    setCurrent(state.current);
    onChange && onChange(state.current, total, pageSize);
  }
  var onSizeChange = e => {
    var sizeCount = Number(e.target.value);
    var count = Math.ceil(total / sizeCount);
    var newCurrent = current > count ? count : current;
    onShowSizeChange && onShowSizeChange(newCurrent, sizeCount);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", _extends({
    className: cls,
    style: _extends({}, style, {
      textAlign: alignment
    })
  }, other, {
    children: [initPageSoure.map((item, idx) => {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      var label = /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        children: item.label
      });
      if (/^(prev|next)$/.test(item.type)) {
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        label = /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: "arrow " + item.type
        });
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        className: [item.active ? 'active' : null, item.disabled ? 'disabled' : null].filter(Boolean).join(' ').trim(),
        onClick: () => handleClick(item),
        children: label
      }, idx);
    }), pageSizeOptions.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
      className: prefixCls + "-options",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_select_esm, {
        size: size,
        defaultValue: pageSize,
        onChange: onSizeChange,
        children: pageSizeOptions.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)(react_select_esm.Option, {
          value: item,
          children: [item, "\u6761/\u9875"]
        }, index))
      })
    })]
  }));
}

;// CONCATENATED MODULE: ../react-pin-code/esm/style/input.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const style_input = ({});
;// CONCATENATED MODULE: ../react-pin-code/esm/index.js


var react_pin_code_esm_excluded = ["prefixCls", "placeholder", "value", "autoFocus", "className", "size", "style", "disabled", "onChange", "onBlur", "onFocus"];






function InternalPinCode(props, ref) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-pin-code',
      placeholder = '○',
      value = [],
      autoFocus,
      className,
      size = 'default',
      style,
      disabled,
      onChange = noop,
      onBlur = noop,
      onFocus = noop
    } = props,
    otherProps = _objectWithoutPropertiesLoose(props, react_pin_code_esm_excluded);
  var [input] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({});
  var [placehold, setPlacehold] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(placeholder);
  var [values, setValues] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(value);
  var cls = [prefixCls, className, size ? prefixCls + "-" + size : null, disabled ? 'disabled' : null].filter(Boolean).join(' ').trim();
  function handleChange(e, idx) {
    var val = e.target.value;
    val = val.charAt(val.length - 1);
    var arr = [...values];
    if (Number(val) > -1 && val) {
      e.currentTarget.value = val;
      arr[idx] = val;
      if (input[idx + 1]) {
        input[idx + 1].focus();
      }
      setValues(arr);
    } else if (!val) {
      arr[idx] = '';
      setValues(arr);
    }
  }
  function handleKeyDown(e, idx) {
    var val = e.currentTarget.value;
    var key = e.key.toLocaleLowerCase();
    if (!val && input[idx - 1] && /(backspace|delete)/.test(key)) {
      input[idx - 1].focus();
    }
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (values !== value) {
      onChange(values);
    }
  }, [values]);
  function handleBlur(event) {
    setPlacehold(placeholder);
    onBlur(event);
  }
  function handleFocus(event) {
    setPlacehold('');
    onFocus(event);
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: cls,
    style: style
  }, otherProps, {
    ref: ref,
    children: [...values].map((val, key) => {
      var inpProps = {
        min: 0,
        type: 'text',
        inputMode: 'numeric',
        autoComplete: 'off',
        value: val,
        onChange: e => handleChange(e, key),
        onKeyDown: e => handleKeyDown(e, key),
        onBlur: e => handleBlur(e),
        onFocus: e => handleFocus(e),
        className: prefixCls + "-inner",
        placeholder: placehold,
        disabled,
        size
      };
      if (autoFocus && key === 0) {
        inpProps.autoFocus = true;
      }
      var child = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)(react_input_esm, _extends({
        ref: instance => {
          if (instance) {
            input[key] = instance;
          }
        }
      }, inpProps, {
        key: key
      }));
      return child;
    })
  }));
}
/* harmony default export */ const react_pin_code_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(InternalPinCode));

;// CONCATENATED MODULE: ../react-progress/esm/utils.js



function IconProgress(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
    type: props.type
  });
}

;// CONCATENATED MODULE: ../react-progress/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_progress_esm_style = ({});
;// CONCATENATED MODULE: ../react-progress/esm/style/circle.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const circle = ({});
;// CONCATENATED MODULE: ../react-progress/esm/Circle.js


var Circle_excluded = ["prefixCls", "style", "type", "className", "showText", "percent", "format", "strokeWidth", "width", "status"];






class Circle extends (external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Component {
  relativeStrokeWidth(type, elm) {
    var {
      strokeWidth,
      percent
    } = this.props;
    if (elm && elm.parentNode) {
      var {
        width
      } = elm.parentNode.getBoundingClientRect();
      var _strokeWidth = (strokeWidth / width * 100).toFixed(1);
      var radius = parseInt((50 - parseFloat(_strokeWidth) / 2).toString(), 10);
      elm.setAttribute('stroke-width', _strokeWidth);
      elm.setAttribute('d', "M 50 50 m 0 -" + radius + " a " + radius + " " + radius + " 0 1 1 0 " + radius * 2 + " a " + radius + " " + radius + " 0 1 1 0 -" + radius * 2);
      if (type === 'track') {
        // 计算周长
        var perimeter = 2 * Math.PI * radius;
        elm.setAttribute('style', "stroke-dasharray:" + perimeter + "px," + perimeter + "px;stroke-dashoffset:" + (1 - percent / 100) * perimeter + "px;transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;");
      }
    }
  }
  render() {
    var _this$props = this.props,
      {
        prefixCls,
        style,
        className,
        showText,
        percent,
        format,
        width,
        status
      } = _this$props,
      resetProps = _objectWithoutPropertiesLoose(_this$props, Circle_excluded);
    var cls = [prefixCls, className, prefixCls + "-circle", showText ? prefixCls + "-show-text" : null, status ? prefixCls + "-status-" + status : null, parseInt(percent.toString(), 10) >= 100 ? prefixCls + "-status-success" : null].filter(Boolean).join(' ').trim();
    var progressInfo;
    var progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in this.props) ? 'success' : status;
    if (showText) {
      var percentView = percent + "%";
      if (progressStatus === 'exception') {
        percentView = /*#__PURE__*/(0,jsx_runtime.jsx)(IconProgress, {
          type: "close"
        });
      } else if (progressStatus === 'success') {
        percentView = /*#__PURE__*/(0,jsx_runtime.jsx)(IconProgress, {
          type: "check"
        });
      }
      progressInfo = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: prefixCls + "-text",
        style: {
          fontSize: width * 0.16 + 6
        },
        children: format ? format(percent) : percentView
      });
    }
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
      className: cls,
      style: style
    }, resetProps, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
        viewBox: "0 0 100 100",
        width: "" + width,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          ref: this.relativeStrokeWidth.bind(this, 'bg'),
          className: prefixCls + "-trail",
          fill: "none"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          ref: this.relativeStrokeWidth.bind(this, 'track'),
          strokeLinecap: "round",
          className: prefixCls + "-stroke",
          fill: "none"
        })]
      }), progressInfo]
    }));
  }
}
Circle.defaultProps = {
  prefixCls: 'w-progress',
  showText: true,
  percent: 0,
  // 百分比（必填）
  width: 126,
  // 圆圈进度条画布宽度
  strokeWidth: 6 // 进度条大小设置
};



;// CONCATENATED MODULE: ../react-progress/esm/style/line.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const line = ({});
;// CONCATENATED MODULE: ../react-progress/esm/Line.js


var Line_excluded = ["prefixCls", "style", "className", "showText", "percent", "format", "strokeWidth", "width", "status"];






class Line extends (external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Component {
  render() {
    var _this$props = this.props,
      {
        prefixCls,
        style,
        className,
        showText,
        percent,
        format,
        strokeWidth,
        status
      } = _this$props,
      resetProps = _objectWithoutPropertiesLoose(_this$props, Line_excluded);
    var cls = [prefixCls, className, prefixCls + "-line", showText ? prefixCls + "-show-text" : null, status ? prefixCls + "-status-" + status : null, parseInt(percent.toString(), 10) >= 100 ? prefixCls + "-status-success" : null].filter(Boolean).join(' ').trim();
    var progressInfo;
    if (showText) {
      var progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in this.props) ? 'success' : status;
      var percentView = percent + "%";
      if (progressStatus === 'exception') {
        percentView = /*#__PURE__*/(0,jsx_runtime.jsx)(IconProgress, {
          type: "circle-close"
        });
      } else if (progressStatus === 'success') {
        percentView = /*#__PURE__*/(0,jsx_runtime.jsx)(IconProgress, {
          type: "circle-check"
        });
      }
      progressInfo = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: prefixCls + "-text",
        children: format ? format(percent) : percentView
      });
    }
    var percentStyle = {
      width: percent + "%",
      height: strokeWidth
    };
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
      className: cls,
      style: style
    }, resetProps, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-bar",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: prefixCls + "-inner",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: prefixCls + "-bg",
            style: percentStyle
          })
        })
      }), progressInfo]
    }));
  }
}
Line.defaultProps = {
  prefixCls: 'w-progress',
  showText: true,
  // 是否显示进度条文字内容
  percent: 0,
  // 百分比（必填）
  width: 126,
  // 圆圈进度条画布宽度
  strokeWidth: 6 // 进度条大小设置
};



;// CONCATENATED MODULE: ../react-progress/esm/index.js




/* harmony default export */ const react_progress_esm = ({
  Line: Line,
  Circle: Circle
});

;// CONCATENATED MODULE: ../react-rate/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_rate_esm_style = ({});
;// CONCATENATED MODULE: ../react-rate/esm/index.js


var react_rate_esm_excluded = ["prefixCls", "count", "value", "className", "allowHalf", "character", "readOnly", "disabled", "onChange", "onHoverChange", "color"];





function Rate(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-rate',
      count = 5,
      value: defValue = 0,
      className,
      allowHalf,
      character = '★',
      readOnly = false,
      disabled,
      onChange = noop,
      onHoverChange = noop,
      color
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_rate_esm_excluded);
  var [value, setValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(defValue);
  var [hoverCount, setHoverCount] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(-1);
  var cls = [prefixCls, className, disabled ? 'disabled' : null].filter(Boolean).join(' ').trim();
  var [prevValue, setPrevValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  if (defValue !== prevValue) {
    setPrevValue(defValue);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (value !== prevValue) {
      setValue(defValue);
    }
  }, [prevValue]);
  function _onMouseLeave() {
    setHoverCount(-1);
  }
  function getValue(e, key) {
    e.persist();
    var currentValue = key;
    var isLeft = e.clientX - e.currentTarget.getBoundingClientRect().left <= e.currentTarget.getBoundingClientRect().width / 2;
    if (allowHalf) {
      e.persist();
      currentValue = isLeft ? key + 0.5 : key + 1;
    } else {
      currentValue = key + 1;
    }
    return currentValue;
  }
  function onMouseMove(e, key) {
    var currentValue = getValue(e, key);
    if (hoverCount !== currentValue) {
      setHoverCount(currentValue);
      onHoverChange(currentValue);
    }
  }
  function onClick(e, key) {
    if (readOnly) return;
    var currentValue = getValue(e, key);
    setValue(currentValue);
    onChange(currentValue);
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({}, other, {
    className: cls,
    onMouseLeave: () => _onMouseLeave(),
    children: [...Array(count)].map((_, idx) => {
      var halfon = value <= idx + 0.5 && Math.ceil(value) - 1 === idx && hoverCount === -1 || hoverCount === idx + 0.5;
      var activeCls = [prefixCls + "-hight", idx + 1 <= value && hoverCount === -1 ? 'star-on' : null, idx + 1 <= hoverCount ? 'hover-on' : null, halfon ? 'half-on' : null].filter(Boolean).join(' ').trim();
      var props = {};
      if (!readOnly) {
        props.onClick = e => onClick(e, idx);
        props.onMouseMove = e => onMouseMove(e, idx);
      }
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", _extends({}, props, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          style: {
            color
          },
          className: activeCls,
          children: character
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: prefixCls + "-bg",
          children: character
        })]
      }), idx);
    })
  }));
}

;// CONCATENATED MODULE: ../react-tag/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_tag_esm_style = ({});
;// CONCATENATED MODULE: ../react-tag/esm/index.js


var react_tag_esm_excluded = ["prefixCls", "className", "style", "title", "children", "visible", "color", "disabled", "bordered", "closable", "light", "onClose"];




/* harmony default export */ const react_tag_esm = (function (props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-tag',
      className,
      style,
      title = '',
      children,
      visible = true,
      color = '#6E6E6E',
      disabled = false,
      bordered = true,
      closable,
      light = false,
      onClose
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_tag_esm_excluded);
  var cls = [prefixCls, className, light ? prefixCls + "-light" : null, disabled ? 'disabled' : null].filter(Boolean).join(' ').trim();
  var styl = _extends({}, style);
  if (!light) {
    styl.color = '#fff';
    styl.backgroundColor = color;
  } else {
    styl.color = color;
    styl.borderColor = color;
    if (bordered && light) {
      styl.boxShadow = "inset 0 0 0 1px " + color;
    }
  }
  if (!visible) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", _extends({
    className: cls,
    style: styl
  }, other, {
    children: [title || children, !disabled && closable ? /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
      onClick: onClose,
      className: prefixCls + "-close",
      width: "15",
      height: "15",
      viewBox: "0 0 16 16",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
        d: "M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z"
      })
    }) : null]
  }));
});

;// CONCATENATED MODULE: ../react-search-select/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_search_select_esm_style = ({});
;// CONCATENATED MODULE: ../react-search-select/esm/index.js


var react_search_select_esm_excluded = ["allowClear", "disabled", "valueAmount", "size", "option", "maxTagCount", "loading", "labelInValue", "prefixCls", "className", "mode", "style", "isOpen", "value", "defaultValue", "showSearch", "tagProps", "placeholder", "onSearch", "onChange", "onSelect"];












var TagSize = {
  large: 25,
  default: 20,
  small: 17
};
function SearchSelect(props) {
  var _style$width;
  var {
      allowClear = false,
      disabled = false,
      valueAmount,
      size = 'default',
      option = [],
      maxTagCount,
      loading = false,
      labelInValue = false,
      prefixCls = 'w-search-select',
      className,
      mode = 'single',
      style,
      value,
      defaultValue,
      showSearch = false,
      tagProps = {},
      placeholder,
      onSearch,
      onChange,
      onSelect
    } = props,
    others = _objectWithoutPropertiesLoose(props, react_search_select_esm_excluded);
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  var isMultiple = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => mode === 'multiple', [mode]);
  var [innerIsOpen, setInnerIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  var [selectedValue, setSelectedValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  var [selectedLabel, setSelectedLabel] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('');
  var [selectIconType, setSelectIconType] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('');
  var inputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var omitTagCount = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => maxTagCount && selectedValue.length > maxTagCount ? selectedValue.length - maxTagCount : 0, [selectedValue.length]);
  var divRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var tagContentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var [tagClientWidth, setTagClientWidth] = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useState(180);
  var valueVerify = value => {
    return value !== undefined && value !== '';
  };
  var valueRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  valueRef.current = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => selectedValue, [selectedValue]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!valueVerify(value) && valueVerify(defaultValue)) {
      selectedValueChange(defaultValue);
    }
  }, []);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (disabled) {
      setInnerIsOpen(false);
    }
  }, [disabled]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (valueVerify(value)) {
      selectedValueChange(value);
    } else {
      setSelectedValue([]);
      setSelectedLabel('');
    }
  }, [JSON.stringify(value)]);
  var getSelectOption = (option, value) => {
    var findResult = option.find(item => item.value === value);
    return findResult;
  };
  function selectedValueChange(changeValue) {
    var opts = [];
    if (labelInValue) {
      if (Array.isArray(changeValue)) {
        opts = changeValue;
      } else {
        opts.push(changeValue);
      }
    } else {
      if (Array.isArray(changeValue)) {
        opts = changeValue.map(v => getSelectOption(option, v)).filter(m => !!m);
      } else {
        var findResult = getSelectOption(option, changeValue);
        if (findResult) {
          setSelectedLabel(findResult.label);
          opts.push(findResult);
        }
      }
    }
    if (!isMultiple && opts.length > 0) setSelectedLabel(opts[0].label || '');
    setSelectedValue(opts.slice(0, valueAmount));
  }
  function removeSelectItem(index) {
    var selectedValue = valueRef.current;
    selectedValue.splice(index, 1);
    var values = [...selectedValue];
    return values;
  }
  var selectedLabelChange = value => {
    setSelectedLabel(value);
    showSearch && (onSearch == null ? void 0 : onSearch(value));
  };
  function handleItemClick(item) {
    setInnerIsOpen(false);
    var values = [item];
    setSelectedLabel(item.label);
    var resultValue = item.value;
    handleChange(resultValue, values);
  }
  function handleItemsClick(index, item) {
    var values = index !== -1 ? removeSelectItem(index) : [...selectedValue.slice(0, valueAmount ? valueAmount - 1 : undefined), item];
    var resultValue = values.map(item => item.value);
    handleChange(resultValue, values);
  }
  function handleChange(resultValue, values) {
    setSelectedLabel('');
    onSelect && onSelect(resultValue);
    handleSelectChange(resultValue, values); // 支持form组件

    value === undefined && setSelectedValue(values); // 如果受控于父组件则不需要内部维护状态
  }

  // 渲染icon
  function renderSelectIcon(type) {
    var selectIconType;
    if (type === 'enter' && allowClear && (selectedValue.length > 0 || selectedLabel)) {
      selectIconType = 'close';
    } else {
      selectIconType = '';
    }
    setSelectIconType(selectIconType);
  }
  // handle change
  function handleInputChange(value) {
    setInnerIsOpen(true);
    setSelectIconType(showSearch && value ? 'loading' : '');
    // setSelectedLabel(value);
    // showSearch && onSearch && onSearch(value);
    selectedLabelChange(value);
  }
  // 清除选中的值
  function resetSelectedValue(e) {
    var _inputRef$current;
    e.stopPropagation();
    (_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.focus();
    setSelectedValue([]);
    handleInputChange('');
    setInnerIsOpen(false);
    handleSelectChange('', []);
  }
  function handleSelectChange(value, options) {
    if (!onChange) return;
    onChange(labelInValue ? options : value);
  }
  function inputKeyDown(e) {
    if (isMultiple && selectedValue.length > 0 && !selectedLabel && e.keyCode === 8) {
      handleItemsClick(selectedValue.length - 1);
    }
  }
  function onVisibleChange(isOpen) {
    var selectedValue = valueRef.current;
    setInnerIsOpen(isOpen);
    if (!isOpen) selectedLabelChange('');
    if (!isMultiple && selectedValue.length > 0) {
      setSelectedLabel(selectedValue[0].label);
    }
  }
  external_root_React_commonjs2_react_commonjs_react_amd_react_default().useEffect(() => {
    var _tagContentRef$curren;
    if ((_tagContentRef$curren = tagContentRef.current) != null && _tagContentRef$curren.clientWidth) {
      var _tagContentRef$curren2;
      setTagClientWidth((_tagContentRef$curren2 = tagContentRef.current) == null ? void 0 : _tagContentRef$curren2.clientWidth);
    }
  }, [tagContentRef.current]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Dropdown, _extends({
    className: cls,
    trigger: "click",
    style: {
      marginTop: 5
    },
    overlayStyl: {
      width: 100
    },
    disabled: disabled
  }, others, {
    onVisibleChange: onVisibleChange,
    isOpen: innerIsOpen,
    menu: /*#__PURE__*/(0,jsx_runtime.jsx)(react_menu_esm, {
      bordered: true,
      style: {
        minHeight: 25,
        maxHeight: 280,
        minWidth: (_style$width = style == null ? void 0 : style.width) != null ? _style$width : 200,
        overflowY: 'scroll',
        width: style == null ? void 0 : style.width
      },
      children: !option || option.length === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          color: '#c7c7c7',
          fontSize: 12
        },
        children: loading ? '正在加载数据...' : '没有数据'
      }) : option.map(item => {
        var index = selectedValue.findIndex(finds => finds.value === item.value);
        return /*#__PURE__*/(0,jsx_runtime.jsx)(react_menu_esm.Item, {
          active: index !== -1,
          text: item.label,
          onClick: () => isMultiple ? handleItemsClick(index, item) : handleItemClick(item)
        }, index);
      })
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: divRef,
      onMouseOver: () => renderSelectIcon('enter'),
      onMouseLeave: () => renderSelectIcon('leave'),
      onClick: () => {
        var _inputRef$current2;
        return (_inputRef$current2 = inputRef.current) == null ? void 0 : _inputRef$current2.focus();
      },
      style: _extends({
        width: '100%',
        maxWidth: 'none'
      }, style),
      children: isMultiple ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: [prefixCls + "-inner", prefixCls + "-search-" + showSearch, prefixCls + "-" + size].filter(Boolean).join(' ').trim(),
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          ref: tagContentRef,
          className: [prefixCls + "-tag-content", disabled && prefixCls + "-tag-content-disabled"].filter(Boolean).join(' ').trim(),
          children: [isMultiple && selectedValue.slice(0, maxTagCount).map((item, index) => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(react_tag_esm, _extends({
              style: _extends({
                height: TagSize[size],
                margin: 1,
                display: 'flex',
                alignItems: 'center'
              }, tagProps.style),
              color: "#393E48"
            }, tagProps, {
              closable: true,
              disabled: disabled,
              onClose: e => {
                e.stopPropagation();
                handleItemsClick(index, item);
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                style: {
                  maxWidth: tagClientWidth - 63,
                  textOverflow: 'ellipsis',
                  overflow: 'auto'
                },
                children: item.label
              })
            }), index);
          }), !!omitTagCount && /*#__PURE__*/(0,jsx_runtime.jsxs)(react_tag_esm, {
            style: {
              height: 20,
              margin: 1,
              display: 'flex',
              alignItems: 'center'
            },
            disabled: true,
            children: ["+", omitTagCount, " \u2026", ' ']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, {
            style: {
              flex: 1,
              width: showSearch ? 0 : 50
            },
            className: prefixCls + "-input-contents",
            readOnly: !showSearch,
            size: size,
            ref: inputRef,
            disabled: disabled,
            onKeyDown: inputKeyDown,
            onChange: e => handleInputChange(e.target.value),
            value: selectedLabel,
            placeholder: selectedValue.length ? '' : placeholder
          })]
        }), !disabled && (selectIconType === 'close' || selectIconType === 'loading' && loading) && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
          className: prefixCls + "-multiple-colse",
          type: selectIconType,
          spin: loading && selectIconType === 'loading',
          onClick: resetSelectedValue
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, {
        className: prefixCls + "-search-" + showSearch,
        readOnly: !showSearch,
        size: size,
        ref: inputRef,
        disabled: disabled,
        onChange: e => handleInputChange(e.target.value),
        value: selectedLabel,
        placeholder: placeholder,
        addonAfter: !disabled && (selectIconType === 'close' || selectIconType === 'loading' && loading) && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
          type: selectIconType,
          className: prefixCls + "-singe-colse",
          color: "#393e48",
          spin: loading && selectIconType === 'loading',
          onClick: resetSelectedValue
        })
      })
    })
  }));
}

;// CONCATENATED MODULE: ../../node_modules/@uiw/react-split/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_split_esm_style = ({});
;// CONCATENATED MODULE: ../../node_modules/@uiw/react-split/esm/index.js


var react_split_esm_excluded = ["prefixCls", "className", "children", "mode", "visiable", "renderBar", "lineBar", "disable", "onDragEnd", "onDragging"];




class Split extends (external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false
    };
    this.warpper = void 0;
    this.paneNumber = void 0;
    this.startX = void 0;
    this.startY = void 0;
    this.move = void 0;
    this.target = void 0;
    this.boxWidth = void 0;
    this.boxHeight = void 0;
    this.preWidth = void 0;
    this.nextWidth = void 0;
    this.preHeight = void 0;
    this.nextHeight = void 0;
    this.preSize = void 0;
    this.nextSize = void 0;
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragging = this.onDragging.bind(this);
  }

  componentWillUnmount() {
    this.removeEvent();
  }

  removeEvent() {
    window.removeEventListener('mousemove', this.onDragging, false);
    window.removeEventListener('mouseup', this.onDragEnd, false);
  }

  onMouseDown(paneNumber, env) {
    if (!env.target || !this.warpper) {
      return;
    }

    this.paneNumber = paneNumber;
    this.startX = env.clientX;
    this.startY = env.clientY;
    this.move = true;
    this.target = env.target.parentNode;
    var prevTarget = this.target.previousElementSibling;
    var nextTarget = this.target.nextElementSibling;
    this.boxWidth = this.warpper.clientWidth;
    this.boxHeight = this.warpper.clientHeight;

    if (prevTarget) {
      this.preWidth = prevTarget.clientWidth;
      this.preHeight = prevTarget.clientHeight;
    }

    if (nextTarget) {
      this.nextWidth = nextTarget.clientWidth;
      this.nextHeight = nextTarget.clientHeight;
    }

    window.addEventListener('mousemove', this.onDragging);
    window.addEventListener('mouseup', this.onDragEnd, false);
    this.setState({
      dragging: true
    });
  }

  onDragging(env) {
    if (!this.move) {
      return;
    }

    if (!this.state.dragging) {
      this.setState({
        dragging: true
      });
    }

    var {
      mode,
      onDragging
    } = this.props;
    var nextTarget = this.target.nextElementSibling;
    var prevTarget = this.target.previousElementSibling;
    var x = env.clientX - this.startX;
    var y = env.clientY - this.startY;
    this.preSize = 0;
    this.nextSize = 0;

    if (mode === 'horizontal') {
      this.preSize = this.preWidth + x > -1 ? this.preWidth + x : 0;
      this.nextSize = this.nextWidth - x > -1 ? this.nextWidth - x : 0;

      if (this.preSize === 0 || this.nextSize === 0) {
        return;
      }

      this.preSize = (this.preSize / this.boxWidth >= 1 ? 1 : this.preSize / this.boxWidth) * 100;
      this.nextSize = (this.nextSize / this.boxWidth >= 1 ? 1 : this.nextSize / this.boxWidth) * 100;

      if (prevTarget && nextTarget) {
        prevTarget.style.width = this.preSize + "%";
        nextTarget.style.width = this.nextSize + "%";
      }
    }

    if (mode === 'vertical' && this.preHeight + y > -1 && this.nextHeight - y > -1) {
      this.preSize = this.preHeight + y > -1 ? this.preHeight + y : 0;
      this.nextSize = this.nextHeight - y > -1 ? this.nextHeight - y : 0;
      this.preSize = (this.preSize / this.boxHeight >= 1 ? 1 : this.preSize / this.boxHeight) * 100;
      this.nextSize = (this.nextSize / this.boxHeight >= 1 ? 1 : this.nextSize / this.boxHeight) * 100;

      if (this.preSize === 0 || this.nextSize === 0) {
        return;
      }

      if (prevTarget && nextTarget) {
        prevTarget.style.height = this.preSize + "%";
        nextTarget.style.height = this.nextSize + "%";
      }
    }

    onDragging && onDragging(this.preSize, this.nextSize, this.paneNumber);
  }

  onDragEnd() {
    var {
      onDragEnd
    } = this.props;
    this.move = false;
    onDragEnd && onDragEnd(this.preSize, this.nextSize, this.paneNumber);
    this.removeEvent();
    this.setState({
      dragging: false
    });
  }

  render() {
    var _this$props = this.props,
        {
      prefixCls,
      className,
      children,
      mode,
      visiable,
      renderBar,
      lineBar,
      disable
    } = _this$props,
        other = _objectWithoutPropertiesLoose(_this$props, react_split_esm_excluded);

    var {
      dragging
    } = this.state;
    var cls = [prefixCls, className, prefixCls + "-" + mode, dragging ? 'dragging' : null].filter(Boolean).join(' ').trim();
    var child = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.toArray(children);
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
      className: cls
    }, other, {
      ref: node => this.warpper = node,
      children: external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(child, (element, idx) => {
        var props = Object.assign({}, element.props, {
          className: [prefixCls + "-pane", element.props.className].filter(Boolean).join(' ').trim(),
          style: _extends({}, element.props.style)
        });
        var visiableBar = visiable === true || visiable && visiable.includes(idx + 1) || false;
        var barProps = {
          className: [prefixCls + "-bar", lineBar ? prefixCls + "-line-bar" : null, !lineBar ? prefixCls + "-large-bar" : null].filter(Boolean).join(' ').trim()
        };

        if (disable === true || disable && disable.includes(idx + 1)) {
          barProps.className = [barProps.className, disable ? 'disable' : null].filter(Boolean).join(' ').trim();
        }

        var BarCom = null;

        if (idx !== 0 && visiableBar && renderBar) {
          BarCom = renderBar(_extends({}, barProps, {
            onMouseDown: this.onMouseDown.bind(this, idx + 1)
          }));
        } else if (idx !== 0 && visiableBar) {
          BarCom = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement('div', _extends({}, barProps), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            onMouseDown: this.onMouseDown.bind(this, idx + 1)
          }));
        }

        return /*#__PURE__*/(0,jsx_runtime.jsxs)((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, {
          children: [BarCom, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(element, _extends({}, props))]
        }, idx);
      })
    }));
  }

}
Split.defaultProps = {
  prefixCls: 'w-split',
  visiable: true,
  mode: 'horizontal'
};

;// CONCATENATED MODULE: ../react-steps/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_steps_esm_style = ({});
;// CONCATENATED MODULE: ../react-steps/esm/Step.js


var Step_excluded = ["prefixCls", "className", "style", "status", "itemWidth", "icon", "adjustMarginRight", "stepNumber", "title", "description", "progressDot"];





function Step(props) {
  var {
      prefixCls = 'w-steps',
      className,
      style,
      status,
      itemWidth,
      icon,
      adjustMarginRight,
      stepNumber,
      title,
      description,
      progressDot
    } = props,
    restProps = _objectWithoutPropertiesLoose(props, Step_excluded);
  var classString = [prefixCls + "-item", prefixCls + "-item-" + status, className, icon ? prefixCls + "-custom" : null].filter(Boolean).join(' ').trim();
  var stepItemStyle = _extends({}, style);
  var stepItemDotStyle = {};
  if (itemWidth) {
    stepItemStyle.width = itemWidth;
  }
  if (adjustMarginRight) {
    stepItemStyle.marginRight = adjustMarginRight;
    if (progressDot) {
      stepItemDotStyle.paddingRight = Math.abs(adjustMarginRight);
    }
  }
  var iconNode = null;
  if (progressDot && !icon) {
    iconNode = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: prefixCls + "-dot"
    });
  } else if (icon && typeof icon !== 'string') {
    iconNode = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: prefixCls + "-icon",
      children: icon
    });
  } else if (icon && typeof icon === 'string' || status === 'finish' || status === 'error') {
    iconNode = /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      type: [icon && typeof icon === 'string' ? "" + icon : null, !icon && status === 'finish' ? 'check' : null, !icon && status === 'error' ? 'close' : null].filter(Boolean).join(' ').trim()
    });
  } else {
    iconNode = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: prefixCls + "-icon",
      children: stepNumber
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({}, restProps, {
    className: classString,
    style: stepItemStyle,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-item-tail",
      style: stepItemDotStyle,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        style: {
          paddingRight: '100%'
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-item-head",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: [prefixCls + "-item-inner", !!icon && 'is-icon'].filter(Boolean).join(' ').trim(),
        children: iconNode
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: [prefixCls + "-item-main", !!icon && 'is-icon-main'].filter(Boolean).join(' ').trim(),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-item-title",
        children: title
      }), description && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-item-description",
        children: description
      })]
    })]
  }));
}

;// CONCATENATED MODULE: ../react-steps/esm/Steps.js


var Steps_excluded = ["prefixCls", "style", "className", "children", "current", "status", "progressDot", "direction"];



function InternalSteps(props) {
  var {
      prefixCls = 'w-steps',
      style = {},
      children,
      current,
      status = 'process',
      progressDot = false,
      direction = 'horizontal'
    } = props,
    resetProps = _objectWithoutPropertiesLoose(props, Steps_excluded);
  var warpRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var [lastStepOffsetWidth, setLastStepOffsetWidth] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  var filteredChildren = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.toArray(children).filter(c => !!c);
  var lastIndex = filteredChildren.length - 1; // 最后一个节点的索引数字
  var classString = [prefixCls, prefixCls + "-" + direction, !!progressDot ? prefixCls + "-dot" : null].filter(Boolean).join(' ').trim();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => calcStepOffsetWidth());

  // 计算每一步的宽度
  function calcStepOffsetWidth() {
    var domNode = warpRef.current;
    if (domNode && domNode.lastChild) {
      var width = (domNode.lastChild.offsetWidth || 0) + 1;
      if (width === lastStepOffsetWidth || Math.abs(width - lastStepOffsetWidth) <= 3) {
        return;
      }
      setLastStepOffsetWidth(width);
    }
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: classString,
    style: style
  }, resetProps, {
    ref: warpRef,
    children: external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(children, (child, index) => {
      var childProps = _extends({
        stepNumber: "" + (index + 1),
        prefixCls,
        progressDot
      }, child.props);
      if (index !== lastIndex && direction !== 'vertical') {
        childProps.itemWidth = 100 / lastIndex + "%";
        childProps.adjustMarginRight = -Math.round(lastStepOffsetWidth / lastIndex + 1);
      }
      if (progressDot && direction !== 'vertical') {
        childProps.itemWidth = 100 / filteredChildren.length + "%";
        childProps.adjustMarginRight = 0;
      }
      // 错误前面
      if (status === 'error' && index === current - 1) {
        childProps.className = prefixCls + "-next-error";
      }
      if (!child.props.status) {
        if (index === current) {
          childProps.status = status;
        } else if (index < current) {
          childProps.status = 'finish';
        } else {
          childProps.status = 'wait';
        }
      }
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, childProps);
    })
  }));
}
InternalSteps.Step = Step;
/* harmony default export */ const Steps = (InternalSteps);

;// CONCATENATED MODULE: ../react-steps/esm/index.js



/* harmony default export */ const react_steps_esm = (Steps);

;// CONCATENATED MODULE: ../react-slider/esm/Dots.js



function Dots(props) {
  var {
    prefixCls,
    data,
    step,
    min,
    vertical,
    marks,
    markRender
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: prefixCls + "-dots",
    children: data.map((val, idx) => {
      var stepValue = idx * step + min;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          [vertical ? 'top' : 'left']: val + "%"
        },
        className: [prefixCls + "-mark", marks && marks !== true && !marks[stepValue] ? 'no-marks' : null].filter(Boolean).join(' ').trim(),
        children: [marks === true && markRender && markRender(stepValue), marks !== true && marks && marks[stepValue] && markRender && markRender(stepValue, marks[stepValue])]
      }, idx);
    })
  });
}

;// CONCATENATED MODULE: ../react-slider/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_slider_esm_style = ({});
;// CONCATENATED MODULE: ../react-slider/esm/index.js


var react_slider_esm_excluded = ["prefixCls", "value", "min", "max", "dots", "step", "disabled", "progress", "tooltip", "className", "marks", "renderMarks", "vertical", "onChange"];





function Slider(props) {
  var {
      prefixCls = 'w-slider',
      value = 0,
      min = 0,
      max = 100,
      dots = false,
      step = 1,
      disabled = false,
      progress = true,
      tooltip = false,
      className,
      marks,
      renderMarks,
      vertical,
      onChange
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_slider_esm_excluded);
  var bar = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef(null);
  var slider = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef(null);
  var indexBar = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef();
  var startX = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef();
  var curValue = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef();
  var barWidth = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef();
  var barOffsetLeft = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef();
  var move = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef();
  var [arrValue, setArrValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(Array.isArray(value) ? value : [value]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setArrValue(Array.isArray(value) ? value : [value]), [value]);
  other.onClick = evn => {
    if (move.current !== undefined) {
      return;
    }
    var markOffset = slider.current.getBoundingClientRect();
    var vals = getWidthToValue(evn[vertical ? 'clientY' : 'clientX'] - markOffset[vertical ? 'y' : 'x']);
    var curr = getRangeValue(vals);
    handleChange(curr);
  };
  function getRangeValue(val) {
    if (!Array.isArray(value)) {
      return Array.isArray(val) ? val : [val];
    }
    var newData = [...arrValue];
    var val1 = newData[0];
    var val2 = newData[1];
    if (val1 < val2 && val1 > val || val1 > val2 && val1 < val) {
      newData[0] = val;
    }
    if (val1 < val2 && val2 < val || val1 > val2 && val2 > val) {
      newData[1] = val;
    }
    if (val1 > val && val2 < val) {
      var half = val2 + (val1 - val2) / 2;
      if (half >= val) {
        newData[1] = val;
      }
      if (half < val) {
        newData[0] = val;
      }
    }
    if (val2 > val && val1 < val) {
      var _half = val1 + (val2 - val1) / 2;
      if (_half >= val) {
        newData[0] = val;
      }
      if (_half < val) {
        newData[1] = val;
      }
    }
    return newData;
  }
  function handleChange(val) {
    setArrValue([...val]);
    onChange && onChange(arrValue.length === 1 ? val[0] : val);
  }
  function getWidthToValue(width) {
    var equal = (max - min) / step;
    var percent = 0;
    if (slider.current) {
      percent = width / slider.current[vertical ? 'clientHeight' : 'clientWidth'] * 100;
    }
    if (percent <= 0) {
      percent = 0;
    }
    if (percent >= 100) {
      percent = 100;
    }
    var num = equal * (percent / 100) + 0.5;
    var numFloor = Math.floor(num);
    var vals = numFloor * step + min;
    return vals;
  }
  function onHandleBtnDown(idx, env) {
    if (disabled) {
      return;
    }
    indexBar.current = idx;
    move.current = true;
    startX.current = env[vertical ? 'clientY' : 'clientX'];
    if (bar.current) {
      barWidth.current = bar.current[vertical ? 'clientHeight' : 'clientWidth'];
      barOffsetLeft.current = bar.current[vertical ? 'offsetTop' : 'offsetLeft'];
    }
    var vals = [...arrValue];
    if (Array.isArray(value)) {
      barWidth.current = indexBar.current === 1 && vals[1] > vals[0] || indexBar.current !== 1 && vals[0] > vals[1] ? barWidth.current + barOffsetLeft.current : barOffsetLeft.current;
    }
    window.addEventListener('mousemove', onDragging);
    window.addEventListener('mouseup', onDragEnd);
  }
  function onDragging(env) {
    if (!move.current) {
      return;
    }
    var vals = [...arrValue];
    var valueToWidth = getWidthToValue(env[vertical ? 'clientY' : 'clientX'] - startX.current + barWidth.current);
    if (valueToWidth !== curValue.current) {
      vals[indexBar.current] = valueToWidth;
      var _barStyl = getStyle(vals);
      if (bar.current) {
        bar.current.style[vertical ? 'top' : 'left'] = _barStyl.left;
        bar.current.style[vertical ? 'bottom' : 'right'] = _barStyl.right;
      }
      handleChange(vals);
      curValue.current = valueToWidth;
    }
  }
  function onDragEnd() {
    move.current = undefined;
    window.removeEventListener('mousemove', onDragging, false);
    window.removeEventListener('mouseup', onDragEnd, false);
  }
  var stepArray = () => {
    var equal = (max - min) / step;
    var stepWidth = 100 * step / (max - min);
    var result = [0];
    for (var i = 1; i < equal; i += 1) {
      result.push(i * stepWidth);
    }
    result.push(100);
    return result;
  };
  function getValueToPercent(vals) {
    return (vals - min) * 100 / (max - min);
  }
  function getStyle(val) {
    val = val || arrValue;
    var barStyl = {
      left: '0%',
      right: '100%'
    };
    if (!Array.isArray(value)) {
      barStyl.right = 100 - getValueToPercent(val[0]) + "%";
    } else {
      var leftValue = val[0] > val[1] ? val[1] : val[0];
      var rightValue = val[0] > val[1] ? val[0] : val[1];
      barStyl.left = getValueToPercent(leftValue) + "%";
      barStyl.right = 100 - getValueToPercent(rightValue) + "%";
    }
    return barStyl;
  }
  function getLabelValue(val) {
    if (marks && marks !== true && marks[val] && marks[val].label) {
      return marks[val].label;
    } else if (marks && marks !== true && marks[val] && typeof marks[val] === 'string') {
      return marks[val];
    } else if (renderMarks && typeof renderMarks === 'function' && renderMarks(val)) {
      return renderMarks(val);
    }
    return val;
  }
  var barStyl = getStyle();
  if (disabled) {
    delete other.onClick;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
    ref: slider,
    className: [prefixCls, className, disabled ? 'disabled' : null, marks ? prefixCls + "-with-marks" : null, vertical ? prefixCls + "-vertical" : null].filter(Boolean).join(' ').trim()
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: bar,
      className: prefixCls + "-bar",
      style: _extends({
        [vertical ? 'top' : 'left']: barStyl.left,
        [vertical ? 'bottom' : 'right']: barStyl.right
      }, progress !== true ? {
        backgroundColor: progress || 'initial'
      } : {})
    }), [...arrValue].map((item, idx) => {
      var lleftPostion = getValueToPercent(item);
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-handle",
        onMouseDown: evn => onHandleBtnDown(idx, evn),
        style: {
          [vertical ? 'top' : 'left']: lleftPostion + "%"
        },
        children: (tooltip || tooltip === false) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: [prefixCls + "-tooltip", tooltip ? 'open' : null].filter(Boolean).join(' ').trim(),
          children: getLabelValue(item)
        })
      }, idx);
    }), dots && /*#__PURE__*/(0,jsx_runtime.jsx)(Dots, {
      prefixCls: prefixCls,
      min: min,
      step: step,
      marks: marks,
      vertical: !!vertical,
      data: stepArray(),
      markRender: function markRender(stepValue, mark) {
        if (mark === void 0) {
          mark = {};
        }
        if (!mark) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [" ", getLabelValue(stepValue), " "]
          });
        }
        var other = typeof mark === 'object' ? mark : {};
        delete other.label;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({}, other, {
          children: [" ", getLabelValue(stepValue), " "]
        }));
      }
    })]
  }));
}

;// CONCATENATED MODULE: ../react-switch/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_switch_esm_style = ({});
;// CONCATENATED MODULE: ../react-switch/esm/index.js


var react_switch_esm_excluded = ["prefixCls"];




/* harmony default export */ const react_switch_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-switch'
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_switch_esm_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(RadioAbstract, _extends({
    prefixCls: prefixCls
  }, _extends({}, other, {
    type: 'checkbox'
  }), {
    ref: ref
  }));
}));

;// CONCATENATED MODULE: ../react-table/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_table_esm_style = ({});
;// CONCATENATED MODULE: ../react-table/esm/util.js

/**
 * Get colspan number
 * @param {Array} date
 */
function getColspanNum(data, num) {
  if (data === void 0) {
    data = [];
  }
  if (num === void 0) {
    num = 1;
  }
  var childs = [];
  for (var i = 0; i < data.length; i += 1) {
    if (data[i].children) {
      childs = childs.concat(data[i].children || []);
    }
  }
  if (childs && childs.length > 0) {
    num = getColspanNum(childs, num + 1);
  }
  return num;
}

/**
 * Get rowspan number
 * @param {Array} date
 */
function getRowspanNum(data, child) {
  if (data === void 0) {
    data = [];
  }
  if (child === void 0) {
    child = [];
  }
  var childs = [];
  for (var i = 0; i < data.length; i += 1) {
    if (!data[i].children) {
      childs.push(data[i]);
    } else if (data[i].children && data[i].children.length > 0) {
      childs = childs.concat(getRowspanNum(data[i].children, child));
    }
  }
  return childs;
}
/**
 * JSON Array => Array
 * @param {Array} date
 */
function getLevelItems(data, result) {
  if (!result) {
    result = {
      header: [],
      render: {}
    };
  }
  if (result && !result.header) {
    result.header = [];
  }
  if (result && !result.render) {
    result.render = {};
  }
  var child = [];
  var levelTop = [];
  for (var i = 0; i < data.length; i += 1) {
    if (data[i].render && data[i].key) {
      result.render[data[i].key] = data[i].render;
    }
    if (data[i].ellipsis && data[i].key) {
      if (!result.ellipsis) result.ellipsis = {};
      result.ellipsis[data[i].key] = true;
    }
    if (result.header.length === 0) {
      // Calculation rowspan
      if (data[i].children && data[i].children && data[i].children.length > 0) {
        data[i].colSpan = getRowspanNum(data[i].children).length;
      }
      levelTop.push(data[i]);
    }
    if (data[i] && data[i].children) {
      child = child.concat(data[i].children.map(item => {
        // Calculation rowspan
        if (item.children && item.children.length > 0) {
          item.colSpan = getRowspanNum(item.children).length;
        }
        return item;
      }));
    }
  }
  // level 1
  if (result.header.length === 0) {
    var num = getColspanNum(levelTop);
    result.header.push(levelTop.map(item => {
      if (num === 1) return item;
      if (!item.children || item.children && item.children.length === 0) {
        item.rowSpan = num;
      }
      return item;
    }));
  }
  if (child && child.length > 0) {
    var _num = getColspanNum(child);
    result.header.push(child.map(item => {
      if (_num === 1) return item;
      if (!item.children || item.children && item.children.length === 0) {
        item.rowSpan = _num;
      }
      return item;
    }));
    result = getLevelItems(child, result);
  }
  return result;
}

/**
 * Get all columns keys
 * @param {Array} data
 */
function getAllColumnsKeys(data, keys) {
  if (keys === void 0) {
    keys = [];
  }
  for (var i = 0; i < data.length; i += 1) {
    if (data[i].children) {
      keys = keys.concat(getAllColumnsKeys(data[i].children || []));
    } else if (data[i].key) {
      keys.push(data[i]);
    } else {
      keys.push(_extends({}, data[i], {
        key: i.toString()
      }));
    }
  }
  return keys;
}
function locationFixed(fixed, location, index) {
  var _location$index, _location$index2;
  if (!fixed) return {};
  if (fixed === 'right') return {
    right: (_location$index = location[index]) == null ? void 0 : _location$index.right
  };
  return {
    left: (_location$index2 = location[index]) == null ? void 0 : _location$index2.left
  };
}

;// CONCATENATED MODULE: ../react-table/esm/ThComponent.js


var ThComponent_excluded = ["title", "key", "render", "children", "ellipsis", "fixed"];



class ThComponent extends external_root_React_commonjs2_react_commonjs_react_amd_react_.Component {
  constructor() {
    super(...arguments);
    this.wrapper = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createRef();
  }
  componentDidMount() {
    this.props.updateLocation({
      width: this.wrapper.current.getBoundingClientRect().width
    }, "" + this.props.rowNum + this.props.colNum, this.props.item.key, this.props.item.colSpan);
  }
  render() {
    var {
      colNum,
      rightNum,
      prefixCls,
      item,
      titleNode,
      onCellHead,
      rowNum,
      locationWidth
    } = this.props;
    var {
        fixed = false
      } = item,
      thProps = _objectWithoutPropertiesLoose(item, ThComponent_excluded);
    var cls = '';
    if (fixed) {
      if (fixed === 'right') {
        var rightCls = rightNum === 1 ? prefixCls + "-fixed-right-first" : '';
        cls = prefixCls + '-fixed-right ' + rightCls;
      } else {
        cls = prefixCls + '-fixed-true';
      }
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)("th", _extends({
      ref: this.wrapper
    }, thProps, {
      style: _extends({}, thProps.style, locationFixed(fixed, locationWidth, "" + rowNum + colNum)),
      className: prefixCls + "-tr-children-" + ((item == null ? void 0 : item.align) || 'left') + " " + (item.className || '') + " " + cls,
      onClick: evn => onCellHead == null ? void 0 : onCellHead(item, colNum, rowNum, evn),
      children: titleNode
    }), colNum);
  }
}

;// CONCATENATED MODULE: ../react-table/esm/Thead.js


var Thead_excluded = ["prefixCls", "className", "data", "onCellHead", "locationWidth", "updateLocation"],
  Thead_excluded2 = ["title", "key", "render", "children", "ellipsis", "fixed"];





function TheadComponent(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-table',
      className,
      data = [],
      onCellHead = noop,
      locationWidth,
      updateLocation
    } = props,
    other = _objectWithoutPropertiesLoose(props, Thead_excluded);
  var rightFixedNum = 0;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("thead", _extends({
    className: [prefixCls, className].filter(Boolean).join(' ').trim()
  }, other, {
    children: data && data.length > 0 && data.map((tds, rowNum) => /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
      children: (tds || []).map((item, colNum) => {
        var {
            title,
            ellipsis,
            fixed = false
          } = item,
          thProps = _objectWithoutPropertiesLoose(item, Thead_excluded2);
        var titleNode = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: ellipsis ? (thProps.className || '') + " " + prefixCls + "-ellipsis" : undefined,
          children: typeof title === 'function' ? title(item, colNum, rowNum) : title
        });
        if (thProps.colSpan === 0) {
          return null;
        }
        if (fixed === 'right') {
          rightFixedNum = rightFixedNum + 1;
        }
        return /*#__PURE__*/(0,jsx_runtime.jsx)(ThComponent, {
          colNum: colNum,
          rightNum: rightFixedNum,
          item: item,
          prefixCls: prefixCls,
          onCellHead: onCellHead,
          rowNum: rowNum,
          titleNode: titleNode,
          locationWidth: locationWidth,
          updateLocation: updateLocation
        }, colNum);
      })
    }, rowNum))
  }));
}

;// CONCATENATED MODULE: ../react-table/esm/Expandable.js


/**
 * 可展开配置
 */
function ExpandableComponent(_ref) {
  var {
    defaultExpand,
    onClick: _onClick,
    expandIcon
  } = _ref;
  var [expand, setExpand] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(defaultExpand);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    onClick: () => {
      setExpand(!expand);
      _onClick(expand);
      // record: T, index: number, expanded: boolean
    },

    children: expandIcon(expand)
  });
}

;// CONCATENATED MODULE: ../react-table/esm/TableTr.js










function TableTr(props) {
  var {
    rowKey,
    data,
    keys,
    render,
    ellipsis,
    prefixCls,
    onCell = noop,
    isExpandedDom,
    hierarchy,
    indentSize,
    childrenColumnName,
    locationWidth,
    header
  } = props;
  var [isOpacity, setIsOpacity] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  var [childrenIndex, setChildrenIndex] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  var [expandIndex, setExpandIndex] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setIsOpacity(!!(data != null && data.find(it => it[childrenColumnName])));
    setChildrenIndex((keys == null ? void 0 : keys.findIndex(it => it.key === 'uiw-expanded')) === -1 ? 0 : 1);
  }, [data]);
  var IconDom = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    return (key, isOpacity) => {
      var flag = expandIndex.includes(key);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
        type: flag ? 'minus-square-o' : 'plus-square-o',
        style: {
          marginRight: 10,
          opacity: isOpacity ? 1 : 0,
          marginLeft: hierarchy * indentSize,
          float: 'left',
          marginTop: 3.24
        },
        onClick: () => {
          setExpandIndex(flag ? expandIndex.filter(it => it !== key) : [...expandIndex, key]);
        }
      });
    };
  }, [expandIndex]);
  var getIndex = key => {
    var j = 0;
    var i = header.findIndex(it => {
      j = it.findIndex(item => item.key === key);
      return j > -1;
    });
    return "" + i + j;
  };
  if (!Array.isArray(data) || !data.length) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, {
    children: data.map((trData, rowNum) => {
      var key = rowKey ? trData[rowKey] : rowNum;
      var rightFixedNum = 0;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
          children: keys.map((keyName, colNum) => {
            var objs = {
              children: trData[keyName.key]
            };
            if (render[keyName.key]) {
              var child = render[keyName.key](trData[keyName.key], keyName.key, trData, rowNum, colNum);
              if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) {
                objs.children = child;
              } else {
                if (child.props) {
                  objs = _extends({}, child.props, {
                    children: objs.children
                  });
                  if (child.props.rowSpan === 0 || child.props.colSpan === 0) return null;
                }
                if (child.children) {
                  objs.children = child.children;
                }
              }
            }
            var isHasChildren = Array.isArray(trData[childrenColumnName]);
            if (colNum === childrenIndex && (isOpacity || hierarchy || isHasChildren)) {
              objs.children = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [IconDom(key, isHasChildren), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  style: {
                    paddingLeft: hierarchy * indentSize
                  }
                }), objs.children]
              });
            }
            if (keyName.fixed) {
              if (keyName.fixed === 'right') {
                rightFixedNum = rightFixedNum + 1;
                var cls = rightFixedNum === 1 ? prefixCls + "-fixed-right-first" : '';
                objs.className = prefixCls + "-fixed-right " + cls;
              } else {
                objs.className = prefixCls + "-fixed-true";
              }
            }
            return /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)("td", _extends({}, objs, {
              style: keyName.fixed ? _extends({}, locationFixed(keyName.fixed, locationWidth, "" + getIndex(keyName.key || 'undefined'))) : {},
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: ellipsis && ellipsis[keyName.key] ? prefixCls + "-ellipsis" : undefined,
                children: objs.children
              }),
              key: colNum,
              className: [prefixCls + '-tr-children-' + (keyName.align || 'left'), keyName.className, objs.className].filter(it => it).join(' ').trim(),
              onClick: evn => onCell(trData, {
                rowNum,
                colNum,
                keyName: keyName.key
              }, evn)
            }));
          })
        }, key), isExpandedDom(trData, rowNum), expandIndex.includes(key) && /*#__PURE__*/(0,jsx_runtime.jsx)(TableTr, _extends({}, props, {
          data: trData[childrenColumnName],
          hierarchy: hierarchy + 1
        }))]
      }, rowNum);
    })
  });
}

;// CONCATENATED MODULE: ../react-table/esm/index.js


var react_table_esm_excluded = ["prefixCls", "className", "columns", "data", "title", "footer", "bordered", "onCell", "onCellHead", "empty", "children", "expandable", "rowKey", "scroll"];









// 展开配置


function Table(props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-table',
      className,
      columns = [],
      data = [],
      title,
      footer,
      bordered,
      onCell = noop,
      onCellHead = noop,
      empty,
      expandable,
      rowKey,
      scroll
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_table_esm_excluded);
  var [expandIndex, setExpandIndex] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  var [locationWidth, setLocationWidth] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({});
  var finalLocationWidth = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({});
  var updateLocation = function updateLocation(params, index, key, colSpan) {
    if (colSpan === void 0) {
      colSpan = 0;
    }
    finalLocationWidth.current = _extends({}, finalLocationWidth.current, {
      [index]: _extends({}, finalLocationWidth.current[index], params, {
        key: key,
        colSpan
      })
    });
    if (index === "" + (header.length - 1) + (header[header.length - 1].length - 1)) {
      setLocationWidth(computed());
    }
  };
  var deepClumnsLocation = (params, fistIndex) => {
    var initialValue = 0,
      headerIndex = 0,
      deepParams = [];
    params.forEach((_, index) => {
      var i = "" + fistIndex + headerIndex;
      if (typeof params[index] === 'number') {
        initialValue = params[index] + initialValue;
        deepParams.push(params[index]);
        return;
      }
      if (finalLocationWidth.current[i]) {
        finalLocationWidth.current[i].left = initialValue;
        initialValue = finalLocationWidth.current[i].width + initialValue;
        if (Array.isArray(params[index].children)) {
          deepParams.push(...params[index].children);
        } else {
          deepParams.push(finalLocationWidth.current[i].width);
        }
      }
      headerIndex += 1;
    });
    initialValue = 0, headerIndex = header[fistIndex].length - 1;
    for (var _index = params.length - 1; _index >= 0; _index--) {
      var i = "" + fistIndex + headerIndex;
      if (typeof params[_index] === 'number') {
        initialValue = params[_index] + initialValue;
        continue;
      }
      if (finalLocationWidth.current[i]) {
        finalLocationWidth.current[i].right = initialValue;
        initialValue = finalLocationWidth.current[i].width + initialValue;
      }
      headerIndex -= 1;
    }
    if (deepParams.filter(it => typeof it !== 'number').length) deepClumnsLocation(deepParams, fistIndex + 1);
  };
  var computed = () => {
    deepClumnsLocation(columns, 0);
    return finalLocationWidth.current;
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    var childKey = (expandable == null ? void 0 : expandable.childrenColumnName) || 'children';
    var deep = params => {
      var arr1 = [];
      var arr = params.map((it, index) => {
        if (Array.isArray(it[childKey])) {
          arr1.push(...deep(it[childKey]));
        }
        return rowKey ? it[rowKey] : index;
      });
      return [...arr1, ...arr];
    };
    if (expandable) {
      if (expandable.defaultExpandAllRows) {
        setExpandIndex(deep(data));
        return;
      }
      if (expandable.defaultExpandedRowKeys) {
        setExpandIndex(expandable.defaultExpandedRowKeys);
        return;
      }
    }
  }, []);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (expandable) {
      if (expandable.expandedRowKeys && JSON.stringify(expandable.expandedRowKeys) !== JSON.stringify(expandIndex)) {
        setExpandIndex(expandable.expandedRowKeys);
      }
    }
  }, [expandable == null ? void 0 : expandable.expandedRowKeys]);
  var isExpandedDom = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    return (record, index) => {
      if (!expandable) {
        return false;
      }
      if (!expandable.expandedRowRender) {
        return false;
      }
      var flag = true;
      if (expandable.rowExpandable) {
        flag = expandable.rowExpandable(record);
      }
      return flag && /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
        style: expandIndex.includes(rowKey ? record[rowKey] : index) ? {} : {
          display: 'none'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          style: {
            paddingLeft: 16
          },
          colSpan: columns.length + 1,
          children: expandable.expandedRowRender(record, index, true)
        })
      });
    };
  }, [expandable, expandIndex]);
  var self = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    var keys = getAllColumnsKeys(columns);
    var selfColumns = [];
    if (expandable != null && expandable.expandedRowRender) {
      keys = [{
        key: 'uiw-expanded',
        align: 'center'
      }, ...keys];
      selfColumns = [{
        title: '',
        key: 'uiw-expanded',
        width: 50,
        align: 'center',
        render: (text, key, record, index) => {
          var _expandable$defaultEx;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ExpandableComponent, {
            defaultExpand: expandable.defaultExpandAllRows === undefined ? !!((_expandable$defaultEx = expandable.defaultExpandedRowKeys) != null && _expandable$defaultEx.includes(rowKey ? record[rowKey] : index)) : !!expandable.defaultExpandAllRows,
            onClick: expand => {
              expandable.onExpand == null ? void 0 : expandable.onExpand(expand, record, index);
              if (expand) {
                var result = expandIndex.filter(it => rowKey ? it !== record[rowKey] : it !== index);
                expandable.onExpandedRowsChange ? expandable.onExpandedRowsChange(result) : setExpandIndex(result);
              } else {
                var _result = [...expandIndex, rowKey ? record[rowKey] : index];
                expandable.onExpandedRowsChange ? expandable.onExpandedRowsChange(_result) : setExpandIndex(_result);
              }
            },
            expandIcon: expand => {
              if (expandable.rowExpandable && !(expandable.rowExpandable != null && expandable.rowExpandable(record))) {
                return null;
              }
              if (expandable.expandIcon) {
                return expandable.expandIcon(expand, record, index);
              }
              return expand ? /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
                type: "minus-square-o"
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
                type: "plus-square-o"
              });
            }
          });
        }
      }, ...columns];
    } else {
      selfColumns = [...columns];
    }
    return {
      keys,
      selfColumns
    };
  }, [columns, expandIndex]);
  var style = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    var style = {
      table: {},
      div: {}
    };
    if (scroll) {
      if (scroll.x !== undefined) {
        style.table.minWidth = '100%';
        style.table.width = scroll.x;
        style.div.overflowX = 'auto';
        style.div.overflowY = 'hidden';
      }
      if (scroll.y !== undefined) {
        style.div.maxHeight = scroll.y;
        style.div.overflowY = 'scroll';
      }
    }
    return style;
  }, [scroll]);
  var cls = [prefixCls, className, bordered ? prefixCls + "-bordered" : null].filter(Boolean).join(' ').trim();
  var {
    header,
    render,
    ellipsis
  } = getLevelItems(self.selfColumns);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
      className: cls
    }, other, {
      style: _extends({}, other.style, style.div),
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        style: _extends({
          tableLayout: ellipsis ? 'fixed' : 'auto'
        }, style.table),
        children: [title && /*#__PURE__*/(0,jsx_runtime.jsx)("caption", {
          children: title
        }), columns && columns.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(TheadComponent, {
          onCellHead: onCellHead,
          data: header,
          locationWidth: locationWidth,
          updateLocation: updateLocation
        }), data && data.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(TableTr, {
            rowKey: rowKey,
            locationWidth: locationWidth,
            data: data,
            header: header,
            keys: self.keys,
            render: render,
            ellipsis: ellipsis,
            prefixCls: prefixCls,
            onCell: onCell,
            hierarchy: 0,
            isExpandedDom: isExpandedDom,
            indentSize: typeof (expandable == null ? void 0 : expandable.indentSize) === 'number' ? expandable == null ? void 0 : expandable.indentSize : 16,
            childrenColumnName: (expandable == null ? void 0 : expandable.childrenColumnName) || 'children'
          })
        }), data && data.length === 0 && empty && /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              colSpan: self.keys.length,
              style: {
                position: 'relative',
                left: 0
              },
              children: empty
            })
          })
        }), props.children]
      })
    })), footer && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: prefixCls + "-footer",
      children: footer
    })]
  });
}

;// CONCATENATED MODULE: ../react-tabs/esm/Pane.js


var Pane_excluded = ["prefixCls", "className", "label"];


/* harmony default export */ const Pane = (function (props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-tabs-pane',
      className
    } = props,
    resetProps = _objectWithoutPropertiesLoose(props, Pane_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: [prefixCls, className].filter(Boolean).join(' ').trim()
  }, resetProps));
});

;// CONCATENATED MODULE: ../react-tabs/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_tabs_esm_style = ({});
;// CONCATENATED MODULE: ../react-tabs/esm/index.js


var react_tabs_esm_excluded = ["prefixCls", "className", "children", "type", "activeKey", "onTabClick"];







Tabs.Pane = Pane;
var labelWidth = 0;
function Tabs(props) {
  var _flowNav$nav;
  var {
      prefixCls = 'w-tabs',
      className,
      children,
      type = 'default',
      onTabClick
    } = props,
    elementProps = _objectWithoutPropertiesLoose(props, react_tabs_esm_excluded);
  var [activeKey, setActiveKey] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.activeKey);
  var [slideStyle, setSlideStyle] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
    width: 0,
    left: 0
  });
  var activeItem = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  var cls = [prefixCls, className, type ? prefixCls + "-" + type : null].filter(Boolean).join(' ').trim();
  var [flowNav, flowNavSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
    content: 0,
    nav: [],
    flowLeft: -1,
    displayStart: 0,
    displayEnd: 0
  });
  var [hiddenNav, hiddenNavSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  var deviation = 15;
  var [nodes, nodesSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var divContentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(node => {
    if (node !== null) {
      nodesSet(nodes);
      node.addEventListener('scroll', e => {
        var {
          clientWidth,
          scrollLeft
        } = e.target;
        flowNav.displayStart = scrollLeft;
        flowNav.displayEnd = clientWidth + scrollLeft;
        flowNavSet(_extends({}, flowNav));
      });
      flowNav.displayEnd = node.getBoundingClientRect().width;
      flowNavSet(_extends({}, flowNav));
    }
  }, []);
  var divNavRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)((node, key, itemKey, activeKey) => {
    if (node !== null) {
      // node.addEventListener('click', (e: any) => {
      //   activeItem.current = node;
      // });
      divNavWidthChange(node.getBoundingClientRect().width, key);
      if (itemKey === activeKey) {
        activeItem.current = node;
      }
    }
  }, []);
  var divNavWidthChange = (width, index) => {
    var curWidth = 0;
    flowNav.nav.slice(0, index + 1).forEach(nav => curWidth += nav.width);
    flowNav.nav[index] = {
      width,
      curWidth: Math.floor(curWidth),
      index
    };
    flowNavSet(flowNav);
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    showHideenNav();
  }, [flowNav.displayEnd > ((_flowNav$nav = flowNav.nav[flowNav.nav.length - 1]) == null ? void 0 : _flowNav$nav.curWidth)]);
  var showHideenNav = () => {
    var hiddenNav = [];
    if (flowNav.nav.length > 0) {
      flowNav.nav.forEach(item => {
        var curWidth = item.curWidth - deviation;
        if (flowNav.displayStart > 0 || flowNav.displayEnd > 0) {
          if (curWidth < flowNav.displayStart || curWidth > flowNav.displayEnd) {
            hiddenNav.push(item.index);
          }
        }
      });
      hiddenNavSet(hiddenNav);
    }
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setActiveKey((props == null ? void 0 : props.activeKey) || ''), [props.activeKey]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => calcSlideStyle(), [activeKey]);
  function calcSlideStyle() {
    if (activeItem.current && type === 'line') {
      labelWidth = activeItem.current.clientWidth;
      setSlideStyle({
        width: activeItem.current.clientWidth,
        left: activeItem.current.offsetLeft
      });
    }
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _extends({
    className: cls
  }, elementProps, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          overflow: 'hidden'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: prefixCls + "-bar",
          ref: divContentRef,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: prefixCls + "-nav",
            style: {
              width: 'max-content'
            },
            children: [renderNav(children), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              style: slideStyle,
              className: prefixCls + "-slide"
            })]
          })
        })
      }), hiddenNav.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(Popover, {
        trigger: "click",
        placement: "bottomRight",
        visibleArrow: false,
        content: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: prefixCls + "-nav-hidden",
          children: renderNav(hiddenNav.map(idx => children[idx]))
        }),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          onClick: showHideenNav,
          className: prefixCls + "-flow-content",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: "\u2026"
          })
        })
      })]
    }), external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(children, item => {
      if (!item || activeKey !== item.key) {
        return null;
      }
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(item, Object.assign({}, item.props, {}));
    })]
  }));
  function renderNav(children) {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(children, (item, key) => {
      if (!item) {
        return null;
      }
      var divProps = {
        className: [prefixCls + "-item", item.key === activeKey ? 'active' : null, item.props.disabled ? 'disabled' : null].filter(Boolean).join(' ').trim(),
        children: item.props.label
      };
      if (!item.props.disabled) {
        divProps.onClick = e => {
          setActiveKey(item.key);
          onTabClick && onTabClick(item.key, item, e);
          calcSlideStyle();
        };
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
        ref: _ref => divNavRef(_ref, key, item.key, activeKey)
      }, divProps), key);
    });
  }
}

;// CONCATENATED MODULE: ../react-textarea/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_textarea_esm_style = ({});
;// CONCATENATED MODULE: ../react-textarea/esm/index.js


var react_textarea_esm_excluded = ["prefixCls", "className"];



/* harmony default export */ const react_textarea_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-textarea',
      className
    } = props,
    restProps = _objectWithoutPropertiesLoose(props, react_textarea_esm_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("textarea", _extends({
    className: [prefixCls, className].filter(Boolean).join(' ').trim()
  }, restProps, {
    ref: ref,
    children: props.children
  }));
}));

;// CONCATENATED MODULE: ../react-tooltip/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_tooltip_esm_style = ({});
;// CONCATENATED MODULE: ../react-tooltip/esm/index.js


var react_tooltip_esm_excluded = ["prefixCls", "className", "placement", "isOpen", "trigger", "delay", "usePortal", "visibleArrow", "onVisibleChange"];





/* harmony default export */ const react_tooltip_esm = (function (props) {
  if (props === void 0) {
    props = {};
  }
  var {
      prefixCls = 'w-tooltip',
      className,
      placement = 'top',
      isOpen = false,
      trigger,
      delay,
      usePortal = true,
      visibleArrow = true,
      onVisibleChange
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_tooltip_esm_excluded);
  var cls = [prefixCls, className, !visibleArrow ? 'no-arrow' : null].filter(Boolean).join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react_overlay_trigger_esm, _extends({
    usePortal: usePortal,
    isOpen: isOpen,
    trigger: trigger,
    delay: delay,
    onVisibleChange: onVisibleChange,
    placement: placement
  }, other, {
    overlay: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: cls,
      children: [visibleArrow && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-arrow"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-inner",
        children: props.content
      })]
    }),
    children: typeof props.children === 'object' ? props.children : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: props.children
    })
  }));
});

;// CONCATENATED MODULE: ../react-tree/esm/TreeNode.js


var TreeNode_excluded = ["prefixCls", "renderTitle", "icon", "iconAnimation", "isSelected", "openKeys", "selectedKeys", "data", "level", "parent", "onItemClick", "onItemSelected"];







var Label = _ref => {
  var {
    label,
    className
  } = _ref;
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: className,
    children: label
  }), [label]);
};
function TreeNode(props) {
  var {
      prefixCls,
      renderTitle,
      icon,
      iconAnimation,
      isSelected,
      openKeys,
      selectedKeys,
      data,
      level,
      parent,
      onItemClick = noop,
      onItemSelected = noop
    } = props,
    other = _objectWithoutPropertiesLoose(props, TreeNode_excluded);
  var isOpen = false;
  var node = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useRef(null);
  if (parent && (parent.key || parent.key === 0)) {
    isOpen = !!(openKeys && openKeys.indexOf(parent.key) > -1);
  }
  var onExit = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    node.current.style.height = node.current.scrollHeight + "px";
  }, []);
  var onExiting = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    node.current.style.height = '1px';
  }, []);
  var onEnter = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    node.current.style.height = '1px';
  }, []);
  var onEntering = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    node.current.style.height = node.current.scrollHeight + "px";
  }, []);
  var onEntered = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    node.current.style.height = 'initial';
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_CSSTransition, {
    nodeRef: node,
    classNames: prefixCls,
    in: isOpen,
    timeout: 200,
    onExit: onExit,
    onExiting: onExiting,
    onEnter: onEnter,
    onEntered: onEntered,
    onEntering: onEntering,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      ref: node,
      className: [level !== 1 && isOpen ? [prefixCls + "-open"] : null, level !== 1 && !isOpen ? [prefixCls + "-close"] : null].filter(Boolean).join(' ').trim(),
      children: data.map((item, idx) => {
        item.parent = parent;
        var selected = !!(selectedKeys && selectedKeys.indexOf(item.key) > -1);
        var noChild = !item.children;
        var itemIsOpen = openKeys && openKeys.indexOf(item.key) > -1 && !!item.children;
        var iconItem = typeof icon === 'function' ? icon(item, {
          isOpen: !!itemIsOpen,
          noChild,
          openKeys,
          selectedKeys
        }) : icon;
        var childKeys = noChild ? [] : getChildKeys(item.children);
        var checkedKeys = selectedKeys ? selectedKeys.filter(key => childKeys.indexOf(key) > -1) : [];
        var isHalfChecked = checkedKeys.length > 0 && childKeys.length !== checkedKeys.length;
        var disabledObj = {
          onClick: onItemSelected,
          disabled: null,
          disabledMouse: null,
          disabledClass: undefined,
          disabledStyle: undefined
        };
        if (item.disabled) {
          disabledObj.onClick = undefined;
          disabledObj.disabled = 'disabled';
          disabledObj.disabledMouse = prefixCls + "-disabled-mouse";
          disabledObj.disabledClass = prefixCls + "-disabled-ele";
          disabledObj.disabledStyle = {
            color: '#00000040'
          };
        }
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
          style: {
            display: item.hideNode ? 'none' : 'block'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: prefixCls + "-label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                display: noChild ? 'none' : 'auto'
              },
              className: prefixCls + "-switcher",
              onClick: evn => onItemClick(item, evn),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
                type: iconItem || 'caret-right',
                className: [typeof icon === 'function' ? prefixCls + "-switcher-noop" : null, noChild ? 'no-child' : null, !iconAnimation ? 'no-animation' : null, itemIsOpen ? 'open' : null].filter(Boolean).join(' ').trim()
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              onClick: evn => disabledObj.onClick == null ? void 0 : disabledObj.onClick(item, evn),
              className: [prefixCls + "-title", selected && isSelected ? 'selected' : null, disabledObj.disabled, disabledObj.disabledMouse].filter(Boolean).join(' ').trim(),
              children: renderTitle ? renderTitle(item, {
                selected,
                noChild,
                openKeys,
                isHalfChecked,
                selectedKeys,
                disabled: item.disabled,
                disabledClass: disabledObj.disabledClass,
                disabledStyle: disabledObj.disabledStyle
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Label, {
                label: item.label,
                className: disabledObj.disabledClass
              })
            })]
          }), item.children && /*#__PURE__*/(0,jsx_runtime.jsx)(TreeNode, _extends({}, other, {
            prefixCls,
            icon,
            iconAnimation,
            isSelected,
            openKeys,
            selectedKeys,
            onItemClick,
            onItemSelected,
            renderTitle,
            prefixCls: prefixCls,
            data: item.children,
            level: level + 1,
            parent: item
          }))]
        }, idx);
      })
    })
  });
}

;// CONCATENATED MODULE: ../react-tree/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_tree_esm_style = ({});
;// CONCATENATED MODULE: ../react-tree/esm/index.js


var react_tree_esm_excluded = ["prefixCls", "icon", "data", "openKeys", "selectedKeys", "defaultExpandAll", "showLine", "iconAnimation", "isSelected", "checkStrictly", "multiple", "onExpand", "onSelected", "className", "autoExpandParent", "renderTitle", "onChange", "value"];





/**
 * a contains b
 * @param {Array} a
 * @param {Array} b
 */
var isContained = (a, b) => {
  if (!(a instanceof Array) || !(b instanceof Array)) return false;
  if (a.length < b.length) return false;
  var aStr = a.toString();
  for (var i = 0, len = b.length; i < len; i += 1) {
    if (aStr.indexOf(b[i]) === -1) return false;
  }
  return true;
};
var getChildKeys = function getChildKeys(childs, result, depth) {
  if (childs === void 0) {
    childs = [];
  }
  if (result === void 0) {
    result = [];
  }
  childs.forEach(item => {
    if (!item.hideNode) {
      result.push(item.key);
    }
    if (typeof depth === 'number' && !(depth - 1)) return;
    if (item.children && item.children.length > 0) {
      result = result.concat(getChildKeys(item.children, undefined, depth ? depth - 1 : undefined));
    }
  });
  return result;
};
var getParentKeys = function getParentKeys(childs, result) {
  if (childs === void 0) {
    childs = {};
  }
  if (result === void 0) {
    result = [];
  }
  if (childs.key) {
    result.push(childs.key);
  }
  if (childs.parent) {
    result = getParentKeys(childs.parent, result);
  }
  return result;
};
var getParentSelectKeys = function getParentSelectKeys(childs, selectedKeys, result) {
  if (childs === void 0) {
    childs = {};
  }
  if (selectedKeys === void 0) {
    selectedKeys = [];
  }
  if (result === void 0) {
    result = [];
  }
  if (childs.key && childs.children && isContained(selectedKeys, getChildKeys(childs.children, undefined, 1))) {
    result.push(childs.key);
    if (childs.parent && !childs.parent.parent) {
      if (isContained(selectedKeys, getChildKeys(childs.children))) {
        selectedKeys = selectedKeys.concat(result);
      }
      if (isContained(selectedKeys, getChildKeys(childs.parent.children))) {
        result.push(childs.parent.key);
      }
    }
  }
  if (childs.parent) {
    result = getParentSelectKeys(childs.parent, selectedKeys, result);
  }
  return result;
};
function Tree(props) {
  var {
      prefixCls = 'w-tree',
      icon = 'caret-right',
      data = [],
      openKeys = [],
      selectedKeys = [],
      defaultExpandAll = false,
      showLine = false,
      iconAnimation = true,
      isSelected = true,
      checkStrictly = false,
      multiple = false,
      onExpand = noop,
      onSelected = noop,
      className,
      autoExpandParent = true,
      renderTitle,
      onChange,
      value
    } = props,
    elementProps = _objectWithoutPropertiesLoose(props, react_tree_esm_excluded);
  var [curOpenKeys, setCurOpenKeys] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(openKeys);
  var [curSelectedKeys, setCurSelectedKeys] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(value || selectedKeys);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setCurSelectedKeys(props.value || props.selectedKeys || []);
  }, [JSON.stringify(props.selectedKeys), JSON.stringify(props.value)]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setCurOpenKeys(openKeys);
  }, [JSON.stringify(openKeys)]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    var arrOpenKeys = [...curOpenKeys];
    if (defaultExpandAll) {
      arrOpenKeys = getChildKeys(data);
    } else if (autoExpandParent) {
      arrOpenKeys.push(...getChildKeys(data || [], undefined, 1));
    }
    setCurOpenKeys(arrOpenKeys);
  }, []);
  var cls = [className, prefixCls, showLine ? prefixCls + "-line" : null].filter(Boolean).join(' ').trim();
  function onItemClick(item, evn) {
    if (!item.children) {
      return;
    }
    // const { onExpand } = this.props;
    // const { openKeys } = this.state;
    var currentKeys = [...curOpenKeys];
    var key = currentKeys.find(v => v === item.key);
    var cls = evn.currentTarget.className.replace(/(\s)open/g, '');
    var expanded = false;
    if (!key && item.key) {
      currentKeys.push(item.key);
      evn.currentTarget.className = [cls, 'open'].filter(Boolean).join(' ').trim();
      expanded = true;
    } else {
      currentKeys = currentKeys.filter(v => v !== item.key);
      evn.currentTarget.className = cls;
    }
    setCurOpenKeys(currentKeys);
    onExpand && onExpand(item.key, expanded, item, evn);
  }
  function onItemSelected(item, evn) {
    // const { onSelected, multiple, checkStrictly } = this.props;
    var selKeys = [...curSelectedKeys];
    var findKey = selKeys.find(v => v === item.key);
    var selected = false;
    if (!findKey && findKey !== 0) {
      selected = true;
      selKeys.push(item.key);
    } else {
      selKeys = selKeys.filter(v => v !== item.key);
    }
    if (checkStrictly) {
      if (!findKey) {
        selKeys = selKeys.concat(getChildKeys(item.children).filter(val => selKeys.indexOf(val) === -1));
        selKeys = selKeys.concat(getParentSelectKeys(item, selKeys));
        selKeys = Array.from(new Set(selKeys)); // Remove duplicates.
      } else {
        selKeys = selKeys.filter(val => getChildKeys(item.children).indexOf(val) === -1);
        selKeys = selKeys.filter(val => getParentKeys(item.parent).indexOf(val) === -1);
      }
    }
    if (!multiple) {
      selKeys = !findKey ? [item.key] : [];
    }
    setCurSelectedKeys(selKeys);
    onSelected && onSelected(selKeys, item.key, selected, item, evn);
    onChange == null ? void 0 : onChange(item.key, selKeys);
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _extends({
    className: cls
  }, elementProps, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeNode, {
      icon,
      iconAnimation,
      isSelected,
      openKeys: curOpenKeys,
      selectedKeys: curSelectedKeys,
      prefixCls,
      renderTitle,
      onItemClick: onItemClick,
      onItemSelected: onItemSelected,
      data: data,
      level: 1
    })
  }));
}

;// CONCATENATED MODULE: ../react-tree-checked/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_tree_checked_esm_style = ({});
;// CONCATENATED MODULE: ../react-tree-checked/esm/index.js


var react_tree_checked_esm_excluded = ["prefixCls"];






function TreeChecked(_ref) {
  var {
      prefixCls = 'w-treechecked'
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, react_tree_checked_esm_excluded);
  props.className = [prefixCls, props.className].filter(Boolean).join(' ').trim();
  props.checkStrictly = true;
  props.isSelected = false;
  props.multiple = true;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Tree, _extends({
    renderTitle: (item, node) => {
      var checkedProps = {};
      if (node.isHalfChecked) {
        checkedProps.indeterminate = true;
      }
      if (node.selected) {
        checkedProps.checked = true;
      } else {
        checkedProps.checked = false;
      }
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_checkbox_esm, _extends({
          className: prefixCls + "-checked",
          disabled: node.disabled
        }, checkedProps)), item.label && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: node.disabledClass,
          children: item.label
        })]
      });
    }
  }, props));
}

;// CONCATENATED MODULE: ../react-search-tree/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_search_tree_esm_style = ({});
;// CONCATENATED MODULE: ../react-search-tree/esm/SearchTagInput.js











var SearchTagInput_TagSize = {
  large: 25,
  default: 20,
  small: 17
};
function SearchTagInput(props) {
  var {
    prefixCls = 'w-search-tree',
    size = 'default',
    disabled = false,
    allowClear = false,
    loading = false,
    selectCloseDrop = false,
    className,
    style,
    placeholder,
    tagProps = {},
    content,
    options,
    values,
    onChange,
    onSearch,
    emptyOption
    // ...others
  } = props;
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  var [innerIsOpen, setInnerIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  var [selectedOption, setSelectedOption] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(values);
  var optionRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  var [searchValue, searchValueSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('');
  optionRef.current = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => selectedOption, [selectedOption]);
  var [selectIconType, setSelectIconType] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('');
  var inputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setSelectedOption(values);
  }, [JSON.stringify(values)]);
  function renderSelectIcon(type) {
    var selectIconType = type === 'enter' && allowClear && (!!selectedOption.length || searchValue) ? 'close' : '';
    setSelectIconType(selectIconType);
  }
  var handleSelectChange = function handleSelectChange(selectedAll, selectd, isChecked) {
    if (isChecked === void 0) {
      isChecked = true;
    }
    setSelectedOption(selectedAll);
    searchValueChange('');
    onChange == null ? void 0 : onChange(selectedAll, selectd, isChecked);
  };
  var removeSelectItem = index => {
    var selectedOption = optionRef.current;
    var curreentItem = selectedOption[index];
    selectedOption.splice(index, 1);
    handleSelectChange([...selectedOption], curreentItem, false);
  };
  function handleInputChange(value) {
    setInnerIsOpen(true);
    searchValueChange(value);
    setSelectIconType(value ? 'loading' : '');
  }
  var searchValueChange = value => {
    searchValueSet(value);
    onSearch == null ? void 0 : onSearch(value);
  };

  // 清除选中的值
  function resetSelectedValue(e) {
    var _inputRef$current;
    e.stopPropagation();
    (_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.focus();
    handleInputChange('');
    setInnerIsOpen(false);
    setSelectedOption([]);
    handleSelectChange([]);
  }
  function inputKeyDown(e) {
    if (selectedOption.length > 0 && !searchValue && e.keyCode === 8) {
      removeSelectItem(selectedOption.length - 1);
    }
  }
  var newContent = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (emptyOption) {
      return typeof emptyOption === 'boolean' ? /*#__PURE__*/(0,jsx_runtime.jsx)(react_empty_esm, {
        style: {
          minWidth: 200,
          width: style == null ? void 0 : style.width
        }
      }) : emptyOption;
    }
    var newProps = _extends({}, content.props, {
      onSelected: function onSelected(selectedAll, selectd, isChecked) {
        if (isChecked === void 0) {
          isChecked = true;
        }
        setInnerIsOpen(!selectCloseDrop);
        handleSelectChange(selectedAll, selectd, isChecked);
      },
      values: selectedOption,
      options
    });
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(content, newProps);
  }, [JSON.parse(JSON.stringify(selectedOption)), options, emptyOption]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Dropdown, {
    className: cls,
    trigger: "click",
    onVisibleChange: isOpen => {
      setInnerIsOpen(isOpen);
      if (!isOpen) searchValueChange('');
    },
    disabled: disabled,
    isOpen: innerIsOpen,
    menu: /*#__PURE__*/(0,jsx_runtime.jsx)(react_card_esm, {
      bodyStyle: emptyOption === true ? {
        padding: 0
      } : undefined,
      children: newContent
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      onMouseOver: () => renderSelectIcon('enter'),
      onMouseLeave: () => renderSelectIcon('leave'),
      onClick: () => {
        var _inputRef$current2;
        return (_inputRef$current2 = inputRef.current) == null ? void 0 : _inputRef$current2.focus();
      },
      style: _extends({
        minWidth: (style == null ? void 0 : style.width) || 200,
        maxWidth: 'none'
      }, style),
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: [prefixCls + "-inner", prefixCls + "-" + size].filter(Boolean).join(' ').trim(),
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'flex',
            flexFlow: 'wrap',
            width: '100%'
          },
          children: [selectedOption.map((item, index) => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(react_tag_esm, _extends({
              style: {
                height: SearchTagInput_TagSize[size],
                margin: 1,
                display: 'flex',
                alignItems: 'center'
              },
              className: prefixCls + "-tag",
              closable: true,
              color: "#393E48"
            }, tagProps, {
              disabled: disabled,
              onClose: e => {
                e.stopPropagation();
                removeSelectItem(index);
              },
              children: item.label
            }), index);
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, {
            ref: inputRef,
            className: prefixCls + "-input-contents",
            size: size,
            disabled: disabled,
            onKeyDown: inputKeyDown,
            onChange: e => handleInputChange(e.target.value),
            value: searchValue,
            placeholder: selectedOption.length ? '' : placeholder
          })]
        }), !disabled && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          style: {
            height: 25,
            width: 14
          },
          className: prefixCls + "-close-tag-contents",
          children: (selectIconType === 'close' || selectIconType === 'loading' && loading) && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
            type: selectIconType,
            spin: loading && selectIconType === 'loading',
            onClick: resetSelectedValue
          })
        })]
      })
    })
  });
}
/* harmony default export */ const esm_SearchTagInput = (SearchTagInput);

;// CONCATENATED MODULE: ../react-search-tree/esm/index.js


var react_search_tree_esm_excluded = ["onChange", "onSearch", "multiple", "options", "value", "emptyOption", "treeProps"];





// type TreeCheckedsProps = TreeCheckedProps & Partial<DropContent<SearchTagInputOption>>
function TreeCheckeds(props) {
  var [selectOption, selectOptionSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({});
  var [keys, keysSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    var _props$values;
    var selectOption = {};
    var keys = (_props$values = props.values) == null ? void 0 : _props$values.map(opt => {
      selectOption[opt.key] = opt.label;
      return opt.key;
    });
    selectOptionSet(selectOption);
    keysSet(keys || []);
  }, [props.values]);
  var onSelected = (_, item, isChecked, evn) => {
    var curSelectOption = getOptionsRecursion([evn], selectOption, isChecked);
    var isNumberKey = false;
    if (typeof item === 'number') isNumberKey = true;
    var option = Object.entries(curSelectOption).map(_ref => {
      var [key, label] = _ref;
      return {
        key: isNumberKey ? Number.parseInt(key) : key,
        label
      };
    });
    props.onSelected == null ? void 0 : props.onSelected(option, {
      key: evn.key,
      label: evn.label
    }, isChecked);
  };
  var getOptionsRecursion = (childrens, selectOption, isAdd) => {
    var addOrDel = (key, label, isAdd) => {
      if (isAdd) {
        selectOption[key] = label;
      } else {
        delete selectOption[key];
      }
    };
    var iteratorParent = child => {
      // 向上迭代
      if (child.parent) {
        var selectCount = child.parent.children.filter(child => !selectOption[child.key]).length;
        addOrDel(child.parent.key, child.parent.label, selectCount === 0);
        iteratorParent(child.parent);
      }
    };
    childrens.forEach(child => {
      var _child$children, _child$label;
      if (!!((_child$children = child.children) != null && _child$children.length)) {
        selectOption = getOptionsRecursion(child.children, selectOption, isAdd);
      }
      addOrDel(child.key, (_child$label = child.label) == null ? void 0 : _child$label.toString(), isAdd);
      iteratorParent(child);
    });
    return selectOption;
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TreeChecked, _extends({
    defaultExpandAll: true
  }, props, {
    data: props.options,
    selectedKeys: keys,
    onSelected: onSelected
  }));
}
function SingeTree(props) {
  var [keys, keysSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    var _props$values2;
    var keys = [];
    if ((_props$values2 = props.values) != null && _props$values2.length) keys[0] = props.values[0].key;
    keysSet(keys);
  }, [props.values]);
  var onSelected = (_1, _2, isChecked, evn) => {
    var {
      key,
      label
    } = evn;
    var cur = {
      key,
      label
    };
    props.onSelected == null ? void 0 : props.onSelected(isChecked ? [cur] : [], cur, isChecked);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Tree, _extends({
    defaultExpandAll: true
  }, props, {
    multiple: false,
    data: props.options,
    selectedKeys: keys,
    onSelected: onSelected
  }));
}
function SearchTree(props) {
  var {
      onChange,
      onSearch,
      multiple = true,
      options = [],
      value = [],
      emptyOption = !options.length,
      treeProps
    } = props,
    other = _objectWithoutPropertiesLoose(props, react_search_tree_esm_excluded);
  var [selectedValues, selectedValuesSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(Array.isArray(value) ? value : [value]);
  var [selectedOptions, selectedOptionSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(options);
  var [isEmpty, isEmptySet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(emptyOption);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    selectedValuesSet(Array.isArray(value) ? value : []);
  }, [JSON.stringify(value)]);
  var selectedChange = (resultValue, cur, isChecked) => {
    selectedValuesSet(resultValue);
    onChange == null ? void 0 : onChange(cur, resultValue, isChecked);
  };

  // 防抖
  var debounce = (fn, ms) => {
    var timeoutId;
    return searchValue => {
      onSearch == null ? void 0 : onSearch(searchValue);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(searchValue);
      }, ms);
    };
  };
  var selectedSearch = searchValue => {
    var hiddenNodeForSeach = function hiddenNodeForSeach(childrens, parentIsHide) {
      if (parentIsHide === void 0) {
        parentIsHide = true;
      }
      childrens.forEach(child => {
        var _child$children2;
        var isHide = !child.label.includes(searchValue.trim()) && parentIsHide;
        if (!!((_child$children2 = child.children) != null && _child$children2.length)) {
          hiddenNodeForSeach(child.children, isHide);
          var find = child.children.find(item => !item.hideNode);
          child.hideNode = isHide && !find;
        } else {
          child.hideNode = isHide;
        }
      });
    };
    hiddenNodeForSeach(options);
    selectedOptionSet([...options]);
    var isEmpt = true;
    options.forEach(opt => isEmpt = isEmpt && !!opt.hideNode);
    isEmptySet(typeof emptyOption === 'boolean' && isEmpt ? isEmpt : emptyOption);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_SearchTagInput, _extends({}, other, {
    emptyOption: isEmpty,
    selectCloseDrop: !multiple,
    onSearch: selectedSearch,
    onChange: selectedChange,
    values: selectedValues,
    options: selectedOptions,
    content: multiple ? /*#__PURE__*/(0,jsx_runtime.jsx)(TreeCheckeds, _extends({}, treeProps)) : /*#__PURE__*/(0,jsx_runtime.jsx)(SingeTree, _extends({}, treeProps))
  }));
}
/* harmony default export */ const react_search_tree_esm = (SearchTree);

;// CONCATENATED MODULE: ../react-transfer/esm/style/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const react_transfer_esm_style = ({});
;// CONCATENATED MODULE: ../react-transfer/esm/index.js










var CheckedStatus = /*#__PURE__*/function (CheckedStatus) {
  CheckedStatus[CheckedStatus["UnChecked"] = 0] = "UnChecked";
  CheckedStatus[CheckedStatus["AllChecked"] = 1] = "AllChecked";
  CheckedStatus[CheckedStatus["Indeterminate"] = 2] = "Indeterminate";
  return CheckedStatus;
}(CheckedStatus || {});
function Transfer(props) {
  var {
    placeholder,
    options,
    value = [],
    showSearch = false,
    selectedAll = false,
    bodyStyle,
    style,
    className,
    prefixCls = 'w-transfer'
  } = props;
  var cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  var [searchValueLeft, searchValueLeftSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('');
  var [searchValueRight, searchValueRightSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('');
  var [selectedOptions, selectedOptionSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(options || []);
  var selectedOptionsShowCount = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(0);
  var [selectOption, selectOptionSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(new Map());
  var [leftSelectOption, leftSelectOptionSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(new Map());
  var [leftSelectedKeys, leftSelectedKeySet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  var [rightSelectedKeys, rightSelectedKeySet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  var [rightOpions, rightOpionSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  var [selectAllChecked, selectAllCheckedSet] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
    left: CheckedStatus.UnChecked,
    right: CheckedStatus.UnChecked
  });
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (value) {
      rightOpionSet(value || []);
      value == null ? void 0 : value.forEach(selectd => selectOption.set(selectd.key, selectd.label));
      hiddenNode(child => !!(value != null && value.find(selectd => child.key === selectd.key)));
    }
  }, [JSON.stringify(value)]);
  var hiddenNode = callBackfn => {
    selectedOptionsShowCount.current = 0;
    var hiddenNodeForSeach = childrens => {
      childrens.forEach(child => {
        var _child$children;
        var isHide = callBackfn(child); // && parentIsHide;
        if (!!((_child$children = child.children) != null && _child$children.length)) {
          hiddenNodeForSeach(child.children);
          var find = child.children.find(item => !item.hideNode);
          child.hideNode = isHide && !find;
        } else {
          child.hideNode = isHide;
        }
        if (!child.hideNode) {
          selectedOptionsShowCount.current++;
        }
      });
    };
    hiddenNodeForSeach(selectedOptions);
    selectedOptionSet([...selectedOptions]);
  };
  var getOptionsRecursion = (childrens, selectOption, isAdd) => {
    var addOrDel = (key, label, isAdd) => {
      if (isAdd) {
        selectOption.set(key, label);
      } else {
        selectOption.delete(key);
      }
    };
    var iteratorParent = child => {
      if (child.parent) {
        var selectCount = child.parent.children.filter(child => !selectOption.get(child.key) && !child.hideNode).length;
        addOrDel(child.parent.key, child.parent.label, selectCount === 0);
        iteratorParent(child.parent);
      }
    };
    childrens.forEach(child => {
      var _child$children2, _child$label;
      if (!!((_child$children2 = child.children) != null && _child$children2.length)) {
        selectOption = getOptionsRecursion(child.children, selectOption, isAdd);
      }
      addOrDel(child.key, (_child$label = child.label) == null ? void 0 : _child$label.toString(), isAdd);
      iteratorParent(child);
    });
    return selectOption;
  };
  var leftTreeOnSelected = (selectedKeys, _1, isChecked, evn) => {
    leftSelectedKeySet(selectedKeys);
    var selectOptionTemp = getOptionsRecursion([evn], leftSelectOption, isChecked);
    leftSelectOptionSet(selectOptionTemp);
  };
  var rightTreeOnSelected = selectedKeys => {
    rightSelectedKeySet(selectedKeys);
  };
  var transferClick = transferType => {
    if (transferType === 'left') {
      leftSelectOption.forEach((value, key) => {
        selectOption.set(key, value);
      });
      leftSelectOptionSet(new Map());
      leftSelectedKeySet([]);
    } else {
      rightSelectedKeys.forEach(key => {
        selectOption.delete(key);
      });
      rightSelectedKeySet([]);
    }
    selectOptionSet(selectOption);
    var option = [];
    selectOption.forEach((label, key) => option.push({
      key,
      label
    }));
    props.onChange == null ? void 0 : props.onChange(transferType, option);
  };
  var searchValueLeftChange = searchValue => {
    hiddenNode(child => {
      var searchIsMatch = !child.label.includes(searchValue.trim());
      if (!searchIsMatch) {
        var isSekected = rightOpions.find(selected => selected.key === child.key);
        searchIsMatch = !!isSekected;
      }
      return searchIsMatch;
    });
    searchValueLeftSet(searchValue);
    props.onSearch == null ? void 0 : props.onSearch('left', searchValue);
  };
  var searchValueRightChange = searchValue => {
    searchValueRightSet(searchValue);
    rightOpions.forEach(option => {
      var isHide = !option.label.includes(searchValue.trim());
      option.hideNode = isHide;
    });
    rightOpionSet(rightOpions);
    props.onSearch == null ? void 0 : props.onSearch('right', searchValue);
  };
  var selectAllLeftChange = e => {
    var isChecked = e.target.checked;
    selectAllChecked.left = isChecked ? 1 : 0;
    if (isChecked) {
      var keys = [];
      var selectedOptionsRecursion = selectedOptions => {
        selectedOptions.forEach(child => {
          var _child$children3;
          if ((_child$children3 = child.children) != null && _child$children3.length) {
            selectedOptionsRecursion(child.children);
          }
          if (!child.hideNode) {
            leftSelectOption.set(child.key, child.label);
            keys.push(child.key);
          }
        });
      };
      selectedOptionsRecursion(selectedOptions);
      leftSelectOptionSet(leftSelectOption);
      leftSelectedKeySet(keys);
    } else {
      leftSelectedKeySet([]);
      leftSelectOptionSet(new Map());
    }
    selectAllCheckedSet(selectAllChecked);
  };
  var selectAllRightChange = e => {
    var isChecked = e.target.checked;
    selectAllChecked.right = isChecked ? 1 : 0;
    if (isChecked) {
      var keys = rightOpions.map(child => child.key);
      rightSelectedKeySet(keys);
    } else {
      rightSelectedKeySet([]);
    }
    selectAllCheckedSet(selectAllChecked);
  };
  var Arrow = props => /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
    onClick: () => props.click(),
    type: "down-square-o",
    className: prefixCls + "-arrow",
    style: _extends({
      fontSize: 20,
      stroke: '#e9e9e9',
      fill: '#333'
    }, props.style)
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: cls,
    style: _extends({
      width: 400
    }, style),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(react_card_esm, {
      bodyStyle: {
        padding: '5px 9px'
      },
      title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [selectedAll && /*#__PURE__*/(0,jsx_runtime.jsx)(react_checkbox_esm, {
          indeterminate: leftSelectedKeys.length < selectedOptionsShowCount.current && !!leftSelectedKeys.length,
          checked: leftSelectedKeys.length >= selectedOptionsShowCount.current && !!leftSelectedKeys.length,
          onChange: selectAllLeftChange
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
          style: {
            marginLeft: 3
          },
          children: [leftSelectedKeys.length, "/", selectedOptionsShowCount.current]
        })]
      }),
      className: prefixCls + "-card",
      children: [showSearch && /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, {
        placeholder: placeholder,
        value: searchValueLeft,
        onChange: e => searchValueLeftChange(e.target.value)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-cheked-content",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeChecked, {
          defaultExpandAll: true,
          placeholder: placeholder || '搜索选项',
          data: selectedOptions,
          selectedKeys: leftSelectedKeys,
          onSelected: leftTreeOnSelected
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: prefixCls + "-arrow-content",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Arrow, {
        click: () => transferClick('left'),
        style: {
          transform: 'rotate(-90deg)',
          background: leftSelectedKeys.length > 0 ? '#393E48' : 'none'
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Arrow, {
        click: () => transferClick('right'),
        style: {
          transform: 'rotate(90deg)',
          background: rightSelectedKeys.length > 0 ? '#393E48' : 'none'
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(react_card_esm, {
      bodyStyle: {
        padding: '5px 9px'
      },
      className: prefixCls + "-card",
      title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [selectedAll && /*#__PURE__*/(0,jsx_runtime.jsx)(react_checkbox_esm, {
          indeterminate: rightSelectedKeys.length < rightOpions.length && !!rightSelectedKeys.length,
          checked: rightSelectedKeys.length === rightOpions.length && !!rightSelectedKeys.length,
          onChange: selectAllRightChange
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
          style: {
            marginLeft: 3
          },
          children: [rightSelectedKeys.length, "/", rightOpions.length]
        })]
      }),
      children: [showSearch && /*#__PURE__*/(0,jsx_runtime.jsx)(react_input_esm, {
        placeholder: placeholder,
        value: searchValueRight,
        onChange: e => searchValueRightChange(e.target.value)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: prefixCls + "-cheked-content",
        style: bodyStyle,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeChecked, {
          data: rightOpions,
          selectedKeys: rightSelectedKeys,
          onSelected: rightTreeOnSelected
        })
      })]
    })]
  });
}
/* harmony default export */ const react_transfer_esm = (Transfer);

;// CONCATENATED MODULE: ./src/index.ts

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});