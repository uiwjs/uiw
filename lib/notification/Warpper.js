var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Notification from './Notification';

var notify = {};

var Container = function (_Component) {
  _inherits(Container, _Component);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      placement: "",
      visible: true
    };
    _this.addNotify = _this.addNotify.bind(_this);
    return _this;
  }

  Container.prototype.addNotify = function addNotify(porps) {
    if (!notify[porps.placement]) {
      notify[porps.placement] = {};
    }
    notify[porps.placement][porps._key] = porps;
    this.setState({ visible: true, placement: porps.placement });
  };

  Container.prototype.delNotify = function delNotify(_props) {
    var placement = _props.placement,
        _key = _props._key;

    var _notify = {};
    for (var i in notify[placement]) {
      if (i !== _key) _notify[_key] = notify[placement][_key];
    }
    notify[placement] = _notify;
  };

  Container.prototype.render = function render() {
    var _this2 = this;

    var prefixCls = this.props.prefixCls;
    var _state = this.state,
        placement = _state.placement,
        visible = _state.visible;

    if (!visible) return null;
    return React.createElement(
      'div',
      { className: this.classNames(prefixCls, placement) },
      placement && Object.keys(notify[placement]).map(function (key) {
        return React.createElement(Notification, _extends({ delNotify: _this2.delNotify.bind(_this2), key: key }, notify[placement][key]));
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
  prefixCls: "w-notification-warpper"
};