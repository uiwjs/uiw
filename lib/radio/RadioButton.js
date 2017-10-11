var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { PropTypes } from '../utils/';
import Radio from './Radio';

var RadioButton = function (_Radio) {
  _inherits(RadioButton, _Radio);

  function RadioButton() {
    _classCallCheck(this, RadioButton);

    return _possibleConstructorReturn(this, _Radio.apply(this, arguments));
  }

  RadioButton.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        children = _props.children,
        onChange = _props.onChange,
        checked = _props.checked,
        disabled = _props.disabled,
        value = _props.value,
        other = _objectWithoutProperties(_props, ['prefixCls', 'className', 'children', 'onChange', 'checked', 'disabled', 'value']);

    var cls = this.classNames('' + prefixCls, prefixCls + '-button', className, {
      'disabled': disabled, // 禁用状态
      'checked': checked // 选中
    });
    return React.createElement(
      'label',
      _extends({}, other, { className: cls }),
      React.createElement(
        'span',
        { className: prefixCls + '-inner' },
        React.createElement('input', { type: 'radio', disabled: disabled, checked: checked, value: value || children, onChange: this.handleChange.bind(this) })
      ),
      React.createElement(
        'span',
        { className: prefixCls + '-text' },
        children || value
      )
    );
  };

  return RadioButton;
}(Radio);

export default RadioButton;


RadioButton.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};

RadioButton.defaultProps = {
  prefixCls: "w-radio"
};