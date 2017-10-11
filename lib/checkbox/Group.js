var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Checkbox from './';

var Group = function (_Component) {
  _inherits(Group, _Component);

  function Group(props) {
    _classCallCheck(this, Group);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.checkedValuesResult = _this.checkedValuesResult.bind(_this);
    return _this;
  }

  Group.prototype.checkedValuesResult = function checkedValuesResult(checkedValues, value, checked) {
    var values = [];
    for (var i = 0; i < checkedValues.length; i++) {
      var _value = this.refs['checkbox' + i].state.value;
      var _checked = this.refs['checkbox' + i].state.checked;
      if (_checked && value !== _value || checked && value === _value) {
        values.push(_value);
      }
    }
    return values;
  };

  Group.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        style = _props.style,
        onChange = _props.onChange,
        options = _props.options,
        checkedValues = _props.checkedValues,
        disabled = _props.disabled,
        className = _props.className;


    var attr = {};
    return React.createElement(
      'div',
      { style: style, className: this.classNames(prefixCls, className) },
      Array.from(options, function (item, i) {
        var value = item.value ? item.value : item;
        attr = { key: i };
        if (checkedValues.indexOf(value) > -1) {
          attr.checked = true;
        }
        if (disabled) {
          attr.disabled = item.disabled === false ? false : disabled;
        }
        if (onChange) {
          attr.onChange = function (e, checked) {
            var values = _this2.checkedValuesResult(options, value, checked);
            onChange(e, values, value, checked);
          };
        }
        return React.createElement(
          Checkbox,
          _extends({ ref: 'checkbox' + i }, attr),
          value
        );
      })
    );
  };

  return Group;
}(Component);

export default Group;


Group.defaultProps = {
  prefixCls: 'w-checkbox-group',
  options: [],
  checkedValues: [],
  onChange: function onChange(e) {
    return e;
  }
};
Group.propTypes = {
  prefixCls: PropTypes.string,
  options: PropTypes.array,
  checkedValues: PropTypes.array,
  onChange: PropTypes.func
};