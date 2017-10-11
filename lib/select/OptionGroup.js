function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';

var OptionGroup = function (_Component) {
  _inherits(OptionGroup, _Component);

  function OptionGroup() {
    _classCallCheck(this, OptionGroup);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  OptionGroup.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        className = _props.className,
        prefixCls = _props.prefixCls;

    return React.createElement(
      'li',
      { style: style, className: this.classNames(prefixCls + '-warp', className) },
      React.createElement(
        'h2',
        { className: prefixCls + '-title' },
        this.props.label
      ),
      React.createElement(
        'ul',
        { className: '' + prefixCls },
        this.props.children
      )
    );
  };

  return OptionGroup;
}(Component);

export default OptionGroup;


OptionGroup.propTypes = {
  prefixCls: PropTypes.string,
  label: PropTypes.string
};

OptionGroup.defaultProps = {
  prefixCls: 'w-select-group',
  label: ''
};