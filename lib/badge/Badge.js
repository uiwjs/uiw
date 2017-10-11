var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';

var Badge = function (_Component) {
  _inherits(Badge, _Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Badge.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        style = _props.style,
        max = _props.max,
        dot = _props.dot,
        className = _props.className,
        count = _props.count,
        children = _props.children,
        other = _objectWithoutProperties(_props, ['prefixCls', 'style', 'max', 'dot', 'className', 'count', 'children']);

    return React.createElement(
      'div',
      _extends({}, other, { className: this.classNames(className, '' + prefixCls, {
          nowrap: !children
        }) }),
      children,
      count !== 0 && React.createElement(
        'sup',
        { style: style, className: this.classNames((_classNames = {}, _classNames[prefixCls + '-count'] = !dot, _classNames['w-dot'] = dot, _classNames)) },
        dot ? null : count > max ? max + '+' : count
      )
    );
  };

  return Badge;
}(Component);

export default Badge;


Badge.propTypes = {
  prefixCls: PropTypes.string,
  count: PropTypes.number,
  dot: PropTypes.bool,
  max: PropTypes.number
};

Badge.defaultProps = {
  prefixCls: 'w-badge',
  dot: false,
  max: 99
};