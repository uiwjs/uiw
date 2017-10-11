var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import { accAdd, accSub } from '../utils/number';
import { default as Input } from '../input/';
import { default as Icon } from '../icon/';

var InputNumber = function (_Component) {
  _inherits(InputNumber, _Component);

  function InputNumber(props) {
    _classCallCheck(this, InputNumber);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  InputNumber.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({ value: props.value });
    }
  };

  InputNumber.prototype.handleInput = function handleInput(e) {
    var _props = this.props,
        max = _props.max,
        min = _props.min,
        onChange = _props.onChange;

    if (!e) return;
    var val = Number(e.target.value || 0);
    max = Number(max);
    min = Number(min);
    if (val > max) {
      val = max;
    }
    if (val < min) {
      val = min;
    }
    this.setState({ value: val }, function () {
      onChange(e, val);
    });
  };

  InputNumber.prototype.handleClick = function handleClick(type, e) {
    var _this2 = this;

    var value = this.state.value;

    this.refs.input.focus();
    var _props2 = this.props,
        max = _props2.max,
        min = _props2.min,
        step = _props2.step,
        onChange = _props2.onChange;


    value = value ? Number(value) : 0;
    if (type === "up") {
      value = accAdd(value, step);
      if (value > Number(max)) return;
    }
    if (type === "down") {
      value = accSub(value, step);
      if (value < Number(min)) return;
    }

    this.setState({ value: value }, function () {
      onChange(_this2.refs.input, value);
    });
  };

  InputNumber.prototype.renderSelectable = function renderSelectable() {
    var prefixCls = this.props.prefixCls;

    return React.createElement(
      'div',
      { className: prefixCls + '-control' },
      React.createElement(
        'div',
        { className: this.classNames(prefixCls + '-push', 'w-transition-base'), onClick: this.handleClick.bind(this, 'up') },
        React.createElement(Icon, { type: 'arrow-up' })
      ),
      React.createElement(
        'div',
        { className: this.classNames(prefixCls + '-minus', 'w-transition-base'), onClick: this.handleClick.bind(this, 'down') },
        React.createElement(Icon, { type: 'arrow-down' })
      )
    );
  };

  InputNumber.prototype.render = function render() {
    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        defaultValue = _props3.defaultValue,
        onChange = _props3.onChange,
        min = _props3.min,
        max = _props3.max,
        other = _objectWithoutProperties(_props3, ['prefixCls', 'defaultValue', 'onChange', 'min', 'max']);

    return React.createElement(
      'div',
      { className: '' + prefixCls },
      React.createElement(Input, _extends({
        ref: 'input'
      }, other, {
        type: 'number',
        icon: this.renderSelectable.bind(this)(),
        value: this.state.value,
        onChange: this.handleInput.bind(this)
      }))
    );
  };

  return InputNumber;
}(Component);

export default InputNumber;


InputNumber.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InputNumber.defaultProps = {
  prefixCls: 'w-input-number',
  onChange: function onChange(v) {
    return v;
  },
  step: 1
};