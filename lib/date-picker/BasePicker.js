var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from '../utils/';
import Input from '../input';
import { isDate, parseTime, dateTimeToStr } from './utils';

function isTimeValid(props, propName, componentName) {
  var dt = props[propName];
  var _isDate = true;
  if (!dt) return;
  if (dt !== '') {
    if (dt instanceof Array) {
      for (var i = 0; i < dt.length; i++) {
        if (!isDate(dt[i])) {
          _isDate = false;break;
        }
      }
    } else if (!isDate(dt)) {
      _isDate = false;
    }
    if (_isDate === false) {
      return new Error('Invalid prop `' + propName + '` supplied to  `' + componentName + '`. Validation failed.');
    }
  }
}

var BasePicker = function (_Component) {
  _inherits(BasePicker, _Component);

  function BasePicker(props, _type, state) {
    _classCallCheck(this, BasePicker);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.type = _type;
    var defaultValue = props.value;
    _this.state = Object.assign({}, state, {
      icon: 'time',
      value: new Date(),
      visible: false, // 菜单是否显示
      defaultValue: defaultValue,
      inputWidth: 0
    }, _extends({}, _this.propsToState(props)));
    return _this;
  }

  BasePicker.prototype.componentDidMount = function componentDidMount() {
    this.input = ReactDOM.findDOMNode(this.refs.input);
    this.setState({
      inputWidth: this.input.getBoundingClientRect().width
    });
  };

  BasePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState(_extends({}, this.propsToState(nextProps)));
  };
  // props与当前state合并


  BasePicker.prototype.propsToState = function propsToState(props) {
    return {
      text: isDate(props.value) ? this.dateToStr(props.value) : '',
      value: isDate(props.value) ? props.value : new Date()
    };
  };
  // 展示隐藏菜单


  BasePicker.prototype.toggleMenu = function toggleMenu(e) {
    var _props = this.props,
        disabled = _props.disabled,
        children = _props.children;
    var visible = this.state.visible;

    if (children && children.length === 0) return;
    if (!disabled) {
      this.setState({ visible: !visible });
    }
  };

  BasePicker.prototype.onMouseDown = function onMouseDown(e) {
    var visible = this.state.visible;

    if (this.refs.input) {
      this.refs.input.focus();
    }
    if (!visible) {
      // 单选展开菜单
      this.toggleMenu(e);
    }
  };

  BasePicker.prototype.handleClickOutside = function handleClickOutside(e) {
    // Ignore clicks on the component it self
    // https://codepen.io/graubnla/pen/EgdgZm
    // Detect a click outside of a React Component
    // https://www.dhariri.com/posts/57c724e4d1befa66e5b8e056
    var domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(e.target)) {
      this.setState({ visible: false });
    }
  };

  BasePicker.prototype.onIconClick = function onIconClick() {
    var onChange = this.props.onChange;

    this.setState({ text: '', value: '', icon: 'time' });
    onChange && onChange();
  };

  BasePicker.prototype.onIconMouseOver = function onIconMouseOver() {
    if (this.state.text !== '') {
      this.setState({ icon: 'close' });
    }
  };

  BasePicker.prototype.onIconMouseOut = function onIconMouseOut() {
    this.setState({ icon: 'time' });
  };

  BasePicker.prototype.dateToStr = function dateToStr(date) {
    var format = this.props.format;

    if (this.type === 'timepicker') {
      return dateTimeToStr(date, format);
    }

    if (this.type === 'timeselect') {
      date = parseTime(date);
      if (!date) return '';
      return (date.hours < 10 ? '0' + date.hours : date.hours) + ':' + (date.minutes < 10 ? '0' + date.minutes : date.minutes);
    }
  };

  BasePicker.prototype.parseDate = function parseDate(date) {
    var _state = this.state,
        value = _state.value,
        defaultValue = _state.defaultValue;

    if (!value) value = defaultValue;
    date = parseTime(date);
    value = new Date(value);
    date.hours > -1 && value.setHours(date.hours);
    date.minutes > -1 && value.setMinutes(date.minutes);
    date.seconds > -1 && value.setSeconds(date.seconds);
    return value;
  };

  BasePicker.prototype.onPicked = function onPicked(date, visible) {
    var onChange = this.props.onChange;

    this.setState({
      visible: visible,
      text: date,
      value: this.parseDate(date)
    });

    onChange && onChange(date, this.parseDate(date));
  };

  BasePicker.prototype.createPickerPanel = function createPickerPanel() {
    return this.pickerPanel(this.state, Object.assign({}, _extends({}, this.props)));
  };

  BasePicker.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        className = _props2.className,
        style = _props2.style,
        disabled = _props2.disabled,
        name = _props2.name,
        placeholder = _props2.placeholder,
        readOnly = _props2.readOnly;
    var text = this.state.text;

    return React.createElement(
      'span',
      { style: style, className: this.classNames(className, 'w-date-base') },
      React.createElement(Input, {
        type: 'text',
        ref: 'input',
        name: name,
        disabled: disabled,
        value: text,
        readOnly: readOnly,
        placeholder: placeholder,
        onMouseDown: this.onMouseDown.bind(this),
        onIconClick: this.onIconClick.bind(this),
        onIconMouseOver: this.onIconMouseOver.bind(this),
        onIconMouseOut: this.onIconMouseOut.bind(this),
        onChange: function onChange(e, value) {
          return _this2.setState({ value: value });
        },
        icon: this.state.icon
      }),
      this.createPickerPanel()
    );
  };

  return BasePicker;
}(Component);

export default BasePicker;


BasePicker.propTypes = {
  prefixCls: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  hideDisabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: function value(props, propName, componentName) {
    return isTimeValid(props, propName, componentName);
  }
};
BasePicker.defaultProps = {
  placeholder: '选择时间',
  readOnly: false,
  disabled: false
};