var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';

var Switch = function (_Component) {
  _inherits(Switch, _Component);

  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      _checked: props.checked
    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({ _checked: nextProps.checked });
    }
  };

  Switch.prototype.onChange = function onChange(e) {
    var onChange = this.props.onChange;

    this.setState({
      _checked: e.target.checked
    });
    onChange && onChange(e, e.target.checked);
  };

  Switch.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        style = _props.style,
        size = _props.size,
        disabled = _props.disabled,
        checkedChildren = _props.checkedChildren,
        unCheckedChildren = _props.unCheckedChildren,
        color = _props.color,
        unColor = _props.unColor;
    var _checked = this.state._checked;


    var cls = this.classNames(prefixCls, className, (_classNames = {}, _classNames[prefixCls + '-disabled'] = disabled, _classNames[prefixCls + '-checked'] = _checked, _classNames[prefixCls + '-' + size] = size, _classNames[prefixCls + '-color'] = color || unColor ? true : false, _classNames));

    return React.createElement(
      'label',
      { style: _extends({
          backgroundColor: _checked ? color : unColor
        }, style), className: cls },
      React.createElement('input', { disabled: disabled, checked: _checked, onChange: this.onChange, type: 'checkbox' }),
      React.createElement(
        'span',
        null,
        _checked ? checkedChildren : unCheckedChildren
      )
    );
  };

  return Switch;
}(Component);

export default Switch;


Switch.propTypes = {
  prefixCls: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  unColor: PropTypes.string,
  checkedChildren: PropTypes.string,
  size: PropTypes.oneOf(['mini', 'small', 'default', 'large']),
  unCheckedChildren: PropTypes.string,
  onChange: PropTypes.func
};

Switch.defaultProps = {
  prefixCls: "w-switch",
  size: 'default',
  disabled: false
};