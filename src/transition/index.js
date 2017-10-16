import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { Component, PropTypes } from '../utils/';
import "./style/index.less";

// https://facebook.github.io/react/docs/animation.html

export default class Transition extends Component {
  isPresetAnimate(type) {
    //https://daneden.github.io/animate.css/
    return /^(fade-in|fade-left|fade-right|fade-down|fade-up)?$/.test(type);
  }
  render() {
    const { prefixCls, className, style, type, appear, AppearTimeout, leave, LeaveTimeout, enter, EnterTimeout, children } = this.props;
    const animateName = this.classNames({
      [`${prefixCls}-${type}`]: this.isPresetAnimate(type)
    });
    const cls = this.classNames(prefixCls, className)
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
  }
}

Transition.defaultProps = {
  prefixCls: "w-animate",
  visible: true,
  appear: true,
  leave: true,
  enter: true,
  AppearTimeout: 250,
  LeaveTimeout: 250,
  EnterTimeout: 500,
};
Transition.propTypes = {
  type: PropTypes.oneOf(["fade-in", "fade-left", "fade-right", "fade-down"]),
  visible: PropTypes.bool,
  appear: PropTypes.bool,
  leave: PropTypes.bool,
  enter: PropTypes.bool,
  AppearTimeout: PropTypes.number,
  LeaveTimeout: PropTypes.number,
  EnterTimeout: PropTypes.number,
}