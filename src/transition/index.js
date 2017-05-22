import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "./style/index.less";

export default class Transition extends Component{
  static defaultProps = {
    prefixCls: "w-animate",
    appear:true,
    leave:true,
    enter:true,
    AppearTimeout:250,
    LeaveTimeout:250,
    EnterTimeout:1500,
  };
  static propTypes = {
    type: PropTypes.string,
    appear: PropTypes.bool,
    leave: PropTypes.bool,
    enter: PropTypes.bool,
    AppearTimeout: PropTypes.number,
    LeaveTimeout: PropTypes.number,
    EnterTimeout: PropTypes.number,
  }
  isPresetAnimate(type){
    //https://daneden.github.io/animate.css/
    return /^(fade-in|fade-left|fade-right|fade-down|fade-up)?$/.test(type);
  }
  render(){
    const { prefixCls, type, appear, AppearTimeout, leave, LeaveTimeout, enter, EnterTimeout, children } = this.props;
    const animateName = classNames({
      [`${prefixCls}-${type}`]: this.isPresetAnimate(type)
    });
    return(
      <CSSTransitionGroup
        transitionName={animateName}
        transitionAppear={appear}
        transitionAppearTimeout={AppearTimeout}
        transitionEnter={enter}
        transitionEnterTimeout={EnterTimeout}
        transitionLeave={leave}
        transitionLeaveTimeout={LeaveTimeout}
        >
        {children}
      </CSSTransitionGroup>
    )
  }
}