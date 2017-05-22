import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import classNames from 'classnames';
import Transition from '../transition'
import PropTypes from 'prop-types';
import {IconClose} from '../svgs';

export default class Alerts extends Component {
  state = {
    visible:true
  }
  handleClose(e){
    e&&e.preventDefault();
    this.setState({visible:false})
    this.props&&this.props.onClose&&this.props.onClose()
  }
  render() {
    const { prefixCls, type, message, onClose, description, className, children, ...others } = this.props;
    const cls = classNames(prefixCls,{
        [`${prefixCls}-${type}`]: type ,

        // [`${prefixCls}-default`]: type === 'default',  //  默认样式
        // [`${prefixCls}-primary`]: type === 'primary',  // （首选项）Primary
        // [`${prefixCls}-success`]: type === 'success',  // （成功）Success
        // [`${prefixCls}-info`]:    type === 'info',     // （一般信息）Info
        // [`${prefixCls}-warn`]:    type === 'warn',     // （警告）Warning
        // [`${prefixCls}-error`]:   type === 'error',    // （危险）Danger

        [className]: className
      });

    const alertsview = !this.state.visible ? null :<div { ...others } className={ cls }>
        {message&&<span className={!description?`${prefixCls}-description`:`${prefixCls}-message`}>{message}</span>}
        {description&&<span className={`${prefixCls}-description`}>{description}</span>}
        {children}
        {onClose&&<a href="javascript:void(0)" onClick={this.handleClose.bind(this)} className={`${prefixCls}-close-icon`}>{IconClose}</a>}
      </div>
    return (
      <Transition type="fade-in">
        {alertsview}
      </Transition>
    );
  }
}

Alerts.propTypes = {
  type: PropTypes.string,
};
Alerts.defaultProps = {
  type: 'default',
  prefixCls: "w-alert"
}