var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Alert from '../alert';

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message(props) {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      duration: props.duration,
      visible: true,
      removeRootElm: false
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

    this.setState({ visible: false });
    onClose && onClose();
  };
  /**
   * 动画完成之后删除根节点
   */


  Message.prototype.onTransitionendExit = function onTransitionendExit() {
    if (!this.state.removeRootElm) {
      this.setState({ removeRootElm: true });
    }
  };

  Message.prototype.render = function render() {
    var _props = this.props,
        content = _props.content,
        type = _props.type,
        className = _props.className,
        other = _objectWithoutProperties(_props, ['content', 'type', 'className']);

    var _state = this.state,
        removeRootElm = _state.removeRootElm,
        visible = _state.visible;
    // delete other.placement;
    // delete other.onClose;

    delete other.duration;
    if (removeRootElm) {
      return null;
    }
    return React.createElement(
      'span',
      null,
      React.createElement(Alert, _extends({ showIcon: true, type: type, transition: 'fadeIn down', onTransitionendExit: this.onTransitionendExit.bind(this), visible: visible, message: content, className: className }, other))
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