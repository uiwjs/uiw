var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Message from './Message';

export function isEmpty(obj) {
  if (obj === null || obj === undefined) return true;
  if (typeof obj === 'number' && isNaN(obj)) return true;
  if (obj.length !== undefined) return obj.length === 0;
  if (obj instanceof Date) return false;
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') return Object.keys(obj).length === 0;
  return false;
}

var Container = function (_Component) {
  _inherits(Container, _Component);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      message: {}
    };
    _this.addMessage = _this.addMessage.bind(_this);
    return _this;
  }

  Container.prototype.addMessage = function addMessage(msg) {
    var message = this.state.message;
    message[msg.id] = msg;
    this.setState({ message: message, placement: msg.placement, currentId: msg.id });
  };

  Container.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className;
    var _state = this.state,
        message = _state.message,
        currentId = _state.currentId;

    if (isEmpty(message)) return null;

    var cls = this.classNames(prefixCls);
    var _placement = message[currentId].placement;
    if (_placement) {
      var _classNames;

      cls = this.classNames(className, cls, (_classNames = {}, _classNames[prefixCls + '-top'] = _placement === 'top', _classNames[prefixCls + '-bottom'] = _placement === 'bottom', _classNames[prefixCls + '-top-left'] = _placement === 'topLeft', _classNames[prefixCls + '-top-right'] = _placement === 'topRight', _classNames[prefixCls + '-bottom-left'] = _placement === 'bottomLeft', _classNames[prefixCls + '-bottom-right'] = _placement === 'bottomRight', _classNames));
    }
    return React.createElement(
      'div',
      { className: cls },
      Object.keys(message).map(function (key) {
        return React.createElement(Message, _extends({ key: key }, message[key]));
      })
    );
  };

  return Container;
}(Component);

export default Container;


Container.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
};
Container.defaultProps = {
  placement: "top", // 位置
  prefixCls: "w-message"
};