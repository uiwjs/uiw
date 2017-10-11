function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Icon from '../icon/';

var Option = function (_Component) {
  _inherits(Option, _Component);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.mounted = true;
    _this.state = {
      visible: true
    };
    _this.queryChange = _this.queryChange.bind(_this);
    return _this;
  }

  Option.prototype.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  Option.prototype.componentWillMount = function componentWillMount() {
    var selectedLabel = this.parent().state.selectedLabel;
    var _parent$props = this.parent().props,
        multiple = _parent$props.multiple,
        filterable = _parent$props.filterable;

    this.parent().onOptionCreate(this);
    // 初始化搜索过滤方法
    if (filterable && selectedLabel || filterable && multiple && selectedLabel.length > 0) {
      this.queryChange();
    }
  };

  Option.prototype.parent = function parent() {
    return this.context.component;
  };
  // 点击单个Item事件


  Option.prototype.selectOptionClick = function selectOptionClick() {
    if (this.props.disabled !== true) {
      this.parent().onOptionClick(this);
    }
  };

  Option.prototype.isSelected = function isSelected() {
    var selected = this.parent().state.selected;
    var value = this.props.value;

    if (selected) {
      if (Object.prototype.toString.call(selected) === '[object Object]') {
        return value === selected.props.value;
      } else if (Array.isArray(selected)) {
        return selected.map(function (el) {
          return el.props.value;
        }).indexOf(value) > -1;
      }
    }
    return false;
  };

  Option.prototype.isMultiple = function isMultiple() {
    return this.parent().props.multiple;
  };

  Option.prototype.currentLabel = function currentLabel() {
    var _props = this.props,
        label = _props.label,
        value = _props.value;

    return label || (typeof value === 'string' || typeof value === 'number' ? value : '');
  };
  // 搜索过滤方法


  Option.prototype.queryChange = function queryChange(_query) {
    var multiple = this.parent().props.multiple;
    var _parent$state = this.parent().state,
        query = _parent$state.query,
        selectedLabel = _parent$state.selectedLabel;

    if (!_query) {
      _query = multiple ? query : selectedLabel;
    }
    var visible = new RegExp(_query, 'i').test(this.currentLabel());
    // 判断组件是否挂载
    if (this.mounted) {
      this.setState({ visible: visible });
    }
  };

  Option.prototype.render = function render() {
    var _props2 = this.props,
        children = _props2.children,
        disabled = _props2.disabled;
    var visible = this.state.visible;

    if (!visible) return null;
    return React.createElement(
      'li',
      {
        onClick: this.selectOptionClick.bind(this),
        className: this.classNames({
          'disabled': disabled,
          'selected': this.isSelected()
        })
      },
      children || React.createElement(
        'span',
        null,
        this.currentLabel()
      ),
      this.isSelected() && this.isMultiple() && React.createElement(
        'span',
        { className: 'check' },
        React.createElement(Icon, { type: 'check' })
      )
    );
  };

  return Option;
}(Component);

Option.names = "option";
export default Option;


Option.contextTypes = {
  component: PropTypes.any
};

Option.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Option.defaultProps = {
  prefixCls: 'w-select'
};