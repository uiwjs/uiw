var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Alert from '../alert';
import Icon from '../icon';

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message(props) {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      duration: props.duration
    };
    return _this;
  }

  Message.prototype.componentDidMount = function componentDidMount() {
    var duration = this.props.duration;

    if (duration > 0) {
      this.timeout = setTimeout(this.dismiss.bind(this), duration * 1000);
    }
  };

  Message.prototype.dismiss = function dismiss() {
    var onClose = this.props.onClose;

    this.refs.alerts.handleClose();
    onClose && onClose();
  };

  Message.prototype.render = function render() {
    var _props = this.props,
        content = _props.content,
        icon = _props.icon,
        type = _props.type,
        className = _props.className,
        other = _objectWithoutProperties(_props, ['content', 'icon', 'type', 'className']);

    delete other.placement;
    delete other.duration;
    delete other.onClose;
    return React.createElement(
      Alert,
      _extends({ ref: 'alerts', type: type, className: className }, other),
      icon && React.createElement(Icon, { type: icon }),
      React.createElement(
        'span',
        null,
        content
      )
    );
  };

  return Message;
}(Component);

export default Message;


Message.propTypes = {
  content: PropTypes.node,
  duration: PropTypes.number, // 持续时间
  type: PropTypes.string
};