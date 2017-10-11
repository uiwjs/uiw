var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Tag from './Tag';

var CheckedTag = function (_Component) {
  _inherits(CheckedTag, _Component);

  function CheckedTag() {
    var _temp, _this, _ret;

    _classCallCheck(this, CheckedTag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      checked: false || _this.props.checked,
      checkedValue: []
    }, _this.handleChange = function (checked, e) {
      var data = _this.props.data;

      var _this$parent$props = _this.parent().props,
          options = _this$parent$props.options,
          onChange = _this$parent$props.onChange,
          isRadio = _this$parent$props.isRadio;

      var checkedValue = _this.state.checkedValue;


      var children = data.value;
      if (options && checked) {
        var values = [];
        if (isRadio) {
          values.push(children);
        } else {
          values = [].concat(checkedValue);
          var idx = values.indexOf(children);
          idx > -1 ? values.splice(idx, 1) : values.push(children);
        }
        _this.setState({ checkedValue: values, checked: !_this.state.checked }, function () {
          //父组件的props.onChange
          onChange && onChange(e, values, options);
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CheckedTag.prototype.componentDidMount = function componentDidMount() {
    var checkedValues = this.parent().props.checkedValues;

    this.setState({
      checkedValue: checkedValues
    });
  };

  CheckedTag.prototype.parent = function parent() {
    return this.context.component;
  };

  CheckedTag.prototype.render = function render() {
    var props = _objectWithoutProperties(this.props, []);

    return React.createElement(
      Tag,
      _extends({}, props, { checked: this.state.checked, onClick: this.handleChange }),
      this.props.children
    );
  };

  return CheckedTag;
}(Component);

export default CheckedTag;

CheckedTag.contextTypes = {
  component: PropTypes.any
};