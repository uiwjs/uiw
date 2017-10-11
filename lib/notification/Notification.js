function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Alert from '../alert';

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      visible: true
    };
    _this.onClose = _this.onClose.bind(_this);
    return _this;
  }

  Notification.prototype.onClose = function onClose(e) {
    var _this2 = this;

    var _props = this.props,
        delNotify = _props.delNotify,
        willUnmount = _props.willUnmount;

    this.stopTimer();
    console.log("e", e);
    if (!delNotify) return;
    delNotify(this.props);
    this.setState({
      visible: false
    }, function () {
      willUnmount && willUnmount(_this2.props);
    });
  };

  Notification.prototype.componentDidMount = function componentDidMount() {
    this.startTimer();
  };

  Notification.prototype.duration = function duration() {
    return this.props.duration * 1000;
  };

  Notification.prototype.stopTimer = function stopTimer() {
    clearTimeout(this.timeout);
  };

  Notification.prototype.startTimer = function startTimer() {
    var _this3 = this;

    if (this.props.duration) {
      this.timeout = setTimeout(function () {
        // console.log("props:", this.props)
        _this3.onClose();
      }, this.duration());
    }
  };

  Notification.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        type = _props2.type,
        className = _props2.className,
        message = _props2.message,
        description = _props2.description,
        placement = _props2.placement;

    var transition = 'fade-left';
    if (placement === ('topRight' || 'bottomRight')) {
      transition = 'fade-right';
    }
    return React.createElement(Alert, {
      ref: 'alerts',
      onMouseLeave: this.startTimer.bind(this),
      onMouseEnter: this.stopTimer.bind(this),
      visible: this.state.visible,
      className: this.classNames('' + prefixCls, className),
      type: type,
      closable: true,
      showIcon: type ? true : false,
      onClose: this.onClose,
      transition: transition,
      message: message,
      description: description
    });
  };

  return Notification;
}(Component);

export default Notification;


Notification.propTypes = {
  prefixCls: PropTypes.string,
  message: PropTypes.string,
  duration: PropTypes.number,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  placement: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  type: PropTypes.oneOf(['success', 'warning', 'warn', 'info', 'error'])
};

Notification.defaultProps = {
  prefixCls: 'w-notification',
  duration: 4.5,
  showIcon: false,
  top: 12,
  placement: "topRight",
  onClose: function onClose() {}
};