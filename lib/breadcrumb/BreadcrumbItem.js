var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';

var BreadcrumbItem = function (_Component) {
  _inherits(BreadcrumbItem, _Component);

  function BreadcrumbItem() {
    _classCallCheck(this, BreadcrumbItem);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  BreadcrumbItem.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        href = _props.href,
        separator = _props.separator,
        className = _props.className,
        other = _objectWithoutProperties(_props, ['prefixCls', 'href', 'separator', 'className']);

    if (href) {
      return React.createElement(
        'span',
        { className: this.classNames('' + prefixCls, className) },
        React.createElement(
          'a',
          _extends({ href: href }, other, { className: prefixCls + '-link' }),
          React.createElement(
            'span',
            { className: prefixCls + '-inner' },
            this.props.children
          ),
          React.createElement(
            'span',
            { className: prefixCls + '-separator' },
            separator ? separator : this.context.separator
          )
        )
      );
    }
    return React.createElement(
      'span',
      _extends({}, other, { className: this.classNames(prefixCls, className) }),
      React.createElement(
        'span',
        { className: prefixCls + '-inner' },
        this.props.children
      ),
      React.createElement(
        'span',
        { className: prefixCls + '-separator' },
        separator ? separator : this.context.separator
      )
    );
  };

  return BreadcrumbItem;
}(Component);

export default BreadcrumbItem;


BreadcrumbItem.contextTypes = {
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

BreadcrumbItem.propTypes = {
  prefixCls: PropTypes.string,
  href: PropTypes.string
};
BreadcrumbItem.defaultProps = {
  prefixCls: "w-breadcrumb-item"
};