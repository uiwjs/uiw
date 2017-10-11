var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';

var Breadcrumb = function (_Component) {
  _inherits(Breadcrumb, _Component);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Breadcrumb.prototype.getChildContext = function getChildContext() {
    return {
      separator: this.props.separator
    };
  };

  Breadcrumb.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        separator = _props.separator,
        other = _objectWithoutProperties(_props, ['prefixCls', 'className', 'separator']);

    return React.createElement(
      'div',
      _extends({}, other, { className: this.classNames(prefixCls, className) }),
      this.props.children
    );
  };

  return Breadcrumb;
}(Component);

export default Breadcrumb;


Breadcrumb.childContextTypes = {
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

Breadcrumb.propTypes = {
  prefixCls: PropTypes.string,
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

Breadcrumb.defaultProps = {
  prefixCls: "w-breadcrumb",
  separator: '/'
};