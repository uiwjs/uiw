var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition';
import Icon from '../icon';

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      visible: props.visible,
      tranVisible: true
    };
    return _this;
  }

  Alert.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
    this.setState(_extends({}, nextProps));
    if (nextProps.visible !== this.props.visible) {
      this.removeRootDom();
    }
  };
  // 删除根节点


  Alert.prototype.removeRootDom = function removeRootDom() {
    var _this2 = this;

    this.timeout = setTimeout(function () {
      _this2.setState({
        tranVisible: false
      });
      clearTimeout(_this2.timeout);
    }, 300);
  };

  Alert.prototype.handleClose = function handleClose(e) {
    e && e.preventDefault();
    this.setState({ visible: false });
    this.props.onClose(e);
    this.removeRootDom();
  };

  Alert.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        type = _props.type,
        message = _props.message,
        showIcon = _props.showIcon,
        onClose = _props.onClose,
        closable = _props.closable,
        description = _props.description,
        className = _props.className,
        children = _props.children,
        transition = _props.transition,
        visible = _props.visible,
        others = _objectWithoutProperties(_props, ['prefixCls', 'type', 'message', 'showIcon', 'onClose', 'closable', 'description', 'className', 'children', 'transition', 'visible']);

    var icon = void 0;
    if (showIcon) {
      switch (type) {
        case "success":
          icon = React.createElement(Icon, { type: 'circle-check' });break;
        case "info":
          icon = React.createElement(Icon, { type: 'information' });break;
        case "warning":
          icon = React.createElement(Icon, { type: 'question-circle' });break;
        case "error":
          icon = React.createElement(Icon, { type: 'circle-close' });break;
        default:
          break;
      }
    }
    var cls = this.classNames(prefixCls, (_classNames = {}, _classNames[prefixCls + '-' + type] = type, _classNames[prefixCls + '-icon'] = showIcon && icon, _classNames[prefixCls + '-icon-description'] = description, _classNames[className] = className, _classNames));
    return React.createElement(
      Transition,
      _extends({ 'in': this.state.visible, sequence: transition }, others),
      React.createElement(
        'div',
        { className: cls },
        message && React.createElement(
          'span',
          { className: !description ? prefixCls + '-description' : prefixCls + '-message' },
          icon,
          message
        ),
        description && React.createElement(
          'span',
          { className: prefixCls + '-description' },
          description
        ),
        children,
        closable && React.createElement(
          'a',
          { onClick: this.handleClose.bind(this), className: prefixCls + '-close-icon' },
          React.createElement(Icon, { type: 'close' })
        )
      )
    );
  };

  return Alert;
}(Component);

export default Alert;


Alert.propTypes = {
  type: PropTypes.string,
  visible: PropTypes.bool,
  showIcon: PropTypes.bool,
  transition: PropTypes.string,
  message: PropTypes.string,
  closable: PropTypes.bool,
  description: PropTypes.string,
  onClose: PropTypes.func
};
Alert.defaultProps = {
  type: 'default',
  prefixCls: "w-alert",
  transition: "fadeIn",
  visible: true,
  showIcon: false,
  closable: false,
  onClose: function onClose() {}
};