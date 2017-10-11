var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { createElement } from 'react';
import { Component, PropTypes } from '../utils/';

var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Col.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        tag = _props.tag,
        span = _props.span,
        xs = _props.xs,
        sm = _props.sm,
        md = _props.md,
        lg = _props.lg,
        others = _objectWithoutProperties(_props, ['prefixCls', 'className', 'tag', 'span', 'xs', 'sm', 'md', 'lg']);

    var classList = [];
    ['span', 'offset', 'pull', 'push', 'order'].forEach(function (prop) {
      var num = _this2.props[prop];
      if (num) {
        classList.push(prop !== 'span' ? 'w-col-' + prop + '-' + num : 'w-col-' + num);
      }
    });

    ['xs', 'sm', 'md', 'lg'].forEach(function (size) {
      if (_typeof(_this2.props[size]) === 'object') {
        var props = _this2.props[size];
        Object.keys(props).forEach(function (prop) {
          classList.push(prop !== 'span' ? 'w-col-' + size + '-' + prop + '-' + props[prop] : 'w-col-' + size + '-' + props[prop]);
        });
      } else {
        if (_this2.props[size]) {
          classList.push('w-col-' + size + '-' + Number(_this2.props[size]));
        }
      }
    });

    classList.push(className);

    return createElement(this.props.tag, _extends({
      className: this.classNames('w-col', classList) }, others), this.props.children);
  };

  return Col;
}(Component);

export default Col;


var stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
var objectOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]);

Col.propTypes = {
  prefixCls: PropTypes.string,
  span: stringOrNumber,
  offset: stringOrNumber,
  pull: stringOrNumber,
  push: stringOrNumber,
  className: PropTypes.string,
  children: PropTypes.node,
  xs: objectOrNumber,
  sm: objectOrNumber,
  md: objectOrNumber,
  lg: objectOrNumber,
  tag: PropTypes.string
};

Col.defaultProps = {
  prefixCls: "w-col",
  tag: 'div',
  span: 24
};