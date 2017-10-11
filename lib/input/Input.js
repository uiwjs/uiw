var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Icon from '../icon';

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      value: props.value,
      placeholder: props.placeholder
    };
    return _this;
  }

  Input.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    this.setState(_extends({}, props));
  };

  Input.prototype.handleKeyUp = function handleKeyUp(e) {
    var _props = this.props,
        onSearch = _props.onSearch,
        onKeyUp = _props.onKeyUp;

    if (e.key === "Enter") {
      onSearch(e, e.target.value);
    }
    onKeyUp(e);
  };
  // Input-Number 等其它组件使用的方法


  Input.prototype.focus = function focus() {
    var _this2 = this;

    setTimeout(function () {
      (_this2.refs.input || _this2.refs.textarea).focus();
    });
  };

  Input.prototype.blur = function blur() {
    var _this3 = this;

    setTimeout(function () {
      (_this3.refs.input || _this3.refs.textarea).blur();
    });
  };

  Input.prototype.handleChange = function handleChange(e) {
    var _props2 = this.props,
        onChange = _props2.onChange,
        length = _props2.length;

    var val = e.target.value;
    if (val.length > length) {
      val = val.slice(0, length);
      e.target.value = val;
    }
    this.setState({ value: val });
    onChange(e, val);
  };

  Input.prototype.handleClick = function handleClick(type, e) {
    if (this.props[type]) {
      this.props[type](e, this.state.value);
    }
  };

  Input.prototype.renderIcon = function renderIcon(type) {
    var _classNames;

    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        preIcon = _props3.preIcon,
        icon = _props3.icon,
        onIconClick = _props3.onIconClick,
        onPreIconClick = _props3.onPreIconClick,
        onIconMouseOut = _props3.onIconMouseOut,
        onPreIconMouseOut = _props3.onPreIconMouseOut,
        onIconMouseOver = _props3.onIconMouseOver,
        onPreIconMouseOver = _props3.onPreIconMouseOver;

    var icons = void 0;

    if (type === 'icon' && typeof icon === 'string') icons = icon;
    if (type === 'preIcon' && typeof preIcon === 'string') icons = preIcon;

    return React.createElement(
      'div',
      { className: this.classNames((_classNames = {}, _classNames[prefixCls + '-icon-left'] = type === 'preIcon' && preIcon, _classNames[prefixCls + '-icon-right'] = type === 'icon' && icon, _classNames['event'] = type === 'preIcon' && onPreIconClick || type === 'icon' && onIconClick || type === 'preIcon' && onPreIconMouseOut || type === 'icon' && onIconMouseOut || type === 'preIcon' && onPreIconMouseOut || type === 'icon' && onIconMouseOver || type === 'preIcon' && onPreIconMouseOver, _classNames)) },
      typeof preIcon === 'string' && icons || typeof icon === 'string' && icons ? React.createElement(Icon, { type: icons,
        onClick: this.handleClick.bind(this, type === 'icon' ? 'onIconClick' : 'onPreIconClick'),
        onMouseOver: this.handleClick.bind(this, type === 'icon' ? 'onIconMouseOver' : 'onPreIconMouseOver'),
        onMouseOut: this.handleClick.bind(this, type === 'icon' ? 'onIconMouseOut' : 'onPreIconMouseOut')
      }) : type === 'icon' ? icon : preIcon
    );
  };

  Input.prototype.render = function render() {
    var _classNames2, _classNames3;

    var _props4 = this.props,
        prefixCls = _props4.prefixCls,
        className = _props4.className,
        style = _props4.style,
        type = _props4.type,
        size = _props4.size,
        length = _props4.length,
        preIcon = _props4.preIcon,
        icon = _props4.icon,
        value = _props4.value,
        onIconClick = _props4.onIconClick,
        onPreIconClick = _props4.onPreIconClick,
        onIconMouseOut = _props4.onIconMouseOut,
        onPreIconMouseOut = _props4.onPreIconMouseOut,
        onIconMouseOver = _props4.onIconMouseOver,
        onPreIconMouseOver = _props4.onPreIconMouseOver,
        other = _objectWithoutProperties(_props4, ['prefixCls', 'className', 'style', 'type', 'size', 'length', 'preIcon', 'icon', 'value', 'onIconClick', 'onPreIconClick', 'onIconMouseOut', 'onPreIconMouseOut', 'onIconMouseOver', 'onPreIconMouseOver']);

    var cls = this.classNames('' + prefixCls, className, {
      'textarea': type === 'textarea',
      'w-disabled': this.props.disabled
    });

    delete other.onSearch;
    // delete other.onChange;

    if (type === 'textarea') return React.createElement('textarea', _extends({
      className: this.classNames(cls, prefixCls + '-inner')
    }, other, {
      value: value,
      placeholder: !value ? this.state.placeholder : '',
      ref: 'textarea',
      type: type,
      style: style,
      onChange: this.handleChange.bind(this)
    }));

    return React.createElement(
      'div',
      { style: style, className: this.classNames(cls, (_classNames2 = {}, _classNames2[prefixCls + '-' + size] = size, _classNames2[prefixCls + '-icon'] = preIcon || icon, _classNames2)) },
      preIcon && this.renderIcon.bind(this)('preIcon'),
      icon && this.renderIcon.bind(this)('icon'),
      React.createElement('input', _extends({}, other, {
        ref: 'input',
        type: type,
        className: this.classNames(prefixCls + '-inner', (_classNames3 = {}, _classNames3[prefixCls + '-p-left'] = preIcon, _classNames3[prefixCls + '-p-right'] = icon, _classNames3)),
        value: value,
        placeholder: !value ? this.state.placeholder : '',
        onChange: this.handleChange.bind(this),
        onKeyUp: this.handleKeyUp.bind(this)
      }))
    );
  };

  return Input;
}(Component);

export default Input;


Input.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small', 'mini']),
  length: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  preIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  onKeyUp: PropTypes.func
};

Input.defaultProps = {
  prefixCls: 'w-input',
  type: "text",
  autoComplete: 'off',
  onChange: function onChange() {},
  onSearch: function onSearch() {},
  onKeyUp: function onKeyUp() {}
};