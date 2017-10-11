function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Radio from './Radio';

var RadioGroup = function (_Component) {
  _inherits(RadioGroup, _Component);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  RadioGroup.prototype.getChildContext = function getChildContext() {
    return {
      component: this
    };
  };

  RadioGroup.prototype.onChange = function onChange(e, value) {
    if (this.props.onChange) {
      this.props.onChange(e, value);
    }
  };

  RadioGroup.prototype.getValue = function getValue(option) {
    if (typeof option === 'string') {
      return option;
    } else {
      return option.value;
    }
  };

  RadioGroup.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        options = _props.options;


    var children = this.props.children;

    if (options && options.length > 0) {
      children = options.map(function (option, idx) {
        return React.createElement(
          Radio,
          {
            key: idx,
            disabled: option && option.disabled,
            value: _this2.getValue(option),
            onChange: _this2.onRadioChange,
            checked: _this2.props.value === _this2.getValue(option)
          },
          option && option.label
        );
      });
    }

    return React.createElement(
      'div',
      { className: this.classNames('' + prefixCls) },
      React.Children.map(children, function (element) {
        return React.cloneElement(element, Object.assign({}, element.props, {
          onChange: _this2.onChange.bind(_this2),
          checked: element.props.value === _this2.props.value,
          value: element.props.value
        }));
      })
    );
  };

  return RadioGroup;
}(Component);

export default RadioGroup;


RadioGroup.childContextTypes = {
  component: PropTypes.any
};

RadioGroup.propTypes = {
  prefixCls: PropTypes.string
};

RadioGroup.defaultProps = {
  prefixCls: 'w-radio-group'
};