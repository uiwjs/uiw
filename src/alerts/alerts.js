import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import classNames from 'classnames';
import Transition from '../transition'
import PropTypes from 'prop-types';
import {IconClose,InformationCircled,QuestionCircle,CheckmarkCircled,CloseCircled} from '../svgs';

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
    const { prefixCls, type, message, showIcon, onClose, description, className, children, ...others } = this.props;
    let icon;
    if(showIcon){
      switch(type){
        case "success": icon = CheckmarkCircled;break;
        case "info": icon = InformationCircled;break;
        case "warn": icon = QuestionCircle;break;
        case "error": icon = CloseCircled;break;
      }
    }
    const cls = classNames(prefixCls,{
        [`${prefixCls}-${type}`]: type ,
        [`${prefixCls}-icon`]: showIcon&&icon,
        [`${prefixCls}-icon-description`]: description,
        [className]: className
      });

    const alertsview = !this.state.visible ? null :<div { ...others } className={ cls }>
        {message&&<span className={!description?`${prefixCls}-description`:`${prefixCls}-message`}>{icon}{message}</span>}
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