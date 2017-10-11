var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Tag from './Tag';
import CheckedTag from './CheckedTag';
import "./style/tag-group.less";

var TagGroup = function (_Component) {
  _inherits(TagGroup, _Component);

  function TagGroup(props) {
    _classCallCheck(this, TagGroup);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      dynamicTags: props.options,
      checkedValues: props.checkedValues
    };
    return _this;
  }

  TagGroup.prototype.getChildContext = function getChildContext() {
    return { component: this };
  };

  TagGroup.prototype.onFieldChange = function onFieldChange(e) {
    this.getValue(e);
  };

  TagGroup.prototype.getValue = function getValue(e) {
    var _props = this.props,
        options = _props.options,
        onChange = _props.onChange;

    onChange(e, this.getFilteredTags(options));
  };

  TagGroup.prototype.getFilteredTags = function getFilteredTags(tags) {
    return tags.map(function (tag) {
      return (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) === 'object' ? tag.value : tag;
    });
  };

  TagGroup.prototype.handleClose = function handleClose(tag, e) {
    var _this2 = this;

    var onChange = this.props.onChange;
    var dynamicTags = this.state.dynamicTags;

    dynamicTags.splice(dynamicTags.indexOf(tag), 1);

    this.setState({ dynamicTags: dynamicTags }, function () {
      onChange(e, _this2.getFilteredTags(dynamicTags));
    });
  };

  TagGroup.prototype.render = function render() {
    var _classNames,
        _this3 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        children = _props2.children,
        options = _props2.options,
        isRadio = _props2.isRadio,
        checkedValues = _props2.checkedValues,
        onChange = _props2.onChange,
        checked = _props2.checked,
        className = _props2.className,
        other = _objectWithoutProperties(_props2, ['prefixCls', 'children', 'options', 'isRadio', 'checkedValues', 'onChange', 'checked', 'className']);

    var cls = this.classNames((_classNames = {}, _classNames['' + prefixCls] = true, _classNames[className] = className, _classNames));

    return React.createElement(
      'div',
      _extends({ className: cls }, other),
      options.map(function (tags, idx) {
        var prop = {};
        var label = '';
        if ((typeof tags === 'undefined' ? 'undefined' : _typeof(tags)) === "object") {
          prop.color = tags.color ? tags.color : "";
        }

        if (typeof tags === "string") label = tags;
        if (tags.label || tags.value) label = tags.label || tags.value;

        if (Array.isArray(checkedValues) && (checked || isRadio)) {
          var isChecked = false;
          if (checkedValues.indexOf(tags) > -1 || checkedValues.indexOf(tags.value) > -1 || checkedValues.indexOf(tags.label) > -1) {
            isChecked = true;
          }
          return React.createElement(
            CheckedTag,
            _extends({ data: tags, checked: isChecked }, prop, { key: Math.random() }),
            label
          );
        }
        return React.createElement(
          Tag,
          _extends({ data: tags }, prop, { key: Math.random(), onClose: _this3.handleClose.bind(_this3, tags) }),
          label
        );
      }),
      children && React.createElement(
        'div',
        {
          className: this.classNames(prefixCls + '-children'),
          onBlur: this.onFieldChange.bind(this),
          onKeyUp: this.onFieldChange.bind(this)
        },
        children
      )
    );
  };

  return TagGroup;
}(Component);

export default TagGroup;
;

TagGroup.childContextTypes = {
  component: PropTypes.any
};

TagGroup.propTypes = {
  prefixCls: PropTypes.string,
  options: PropTypes.array,
  checked: PropTypes.bool,
  isRadio: PropTypes.bool,
  checkedValues: PropTypes.array,
  onChange: PropTypes.func
};

TagGroup.defaultProps = {
  prefixCls: "w-tag-group",
  checkedValues: [],
  onChange: function onChange(v) {
    return v;
  }
};