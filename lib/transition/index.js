function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Component, PropTypes } from '../utils/';
import "./style/index.less";

// https://facebook.github.io/react/docs/animation.html

var Transition = function (_Component) {
  _inherits(Transition, _Component);

  function Transition() {
    _classCallCheck(this, Transition);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Transition.prototype.isPresetAnimate = function isPresetAnimate(type) {
    //https://daneden.github.io/animate.css/
    return (/^(fade-in|fade-left|fade-right|fade-down|fade-up)?$/.test(type)
    );
  };

  Transition.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        style = _props.style,
        type = _props.type,
        appear = _props.appear,
        AppearTimeout = _props.AppearTimeout,
        leave = _props.leave,
        LeaveTimeout = _props.LeaveTimeout,
        enter = _props.enter,
        EnterTimeout = _props.EnterTimeout,
        children = _props.children;

    var animateName = this.classNames((_classNames = {}, _classNames[prefixCls + '-' + type] = this.isPresetAnimate(type), _classNames));
    var cls = this.classNames(prefixCls, className);
    // 动画结束删除根节点
    if (!this.props.visible) {
      return false;
    }

    return React.createElement(CSSTransitionGroup, {
      transitionName: animateName,
      transitionAppear: appear,
      transitionAppearTimeout: AppearTimeout,
      transitionEnter: enter,
      transitionEnterTimeout: Number(EnterTimeout),
      transitionLeave: leave,
      transitionLeaveTimeout: Number(LeaveTimeout),
      component: this.props.component,
      className: cls,
      style: style
    }, children);
  };

  return Transition;
}(Component);

export default Transition;


Transition.defaultProps = {
  prefixCls: "w-animate",
  visible: true,
  appear: true,
  leave: true,
  enter: true,
  AppearTimeout: 250,
  LeaveTimeout: 250,
  EnterTimeout: 500
};
Transition.propTypes = {
  type: PropTypes.oneOf(["fade-in", "fade-left", "fade-right", "fade-down"]),
  visible: PropTypes.bool,
  appear: PropTypes.bool,
  leave: PropTypes.bool,
  enter: PropTypes.bool,
  AppearTimeout: PropTypes.number,
  LeaveTimeout: PropTypes.number,
  EnterTimeout: PropTypes.number
};