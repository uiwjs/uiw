import React from 'react';
import {Component, PropTypes} from '../utils/';
import Transition from '../transition';
import {IconClose,InformationCircled,QuestionCircle,CheckmarkCircled,CloseCircled} from '../svgs';

export default class Alert extends Component {
  state = {
    visible:true,
    tranVisible:true,
  }
  handleClose(e){
    e&&e.preventDefault();
    this.setState({visible:false})
    this.props&&this.props.onClose&&this.props.onClose()
    this.timeout = setTimeout(()=>{
      this.setState({
        tranVisible:false
      })
      clearTimeout(this.timeout)
    },300)
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
    const cls = this.classNames(prefixCls,{
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
      <Transition visible={this.state.tranVisible} type="fade-in">
        {alertsview}
      </Transition>
    );
  }
}

Alert.propTypes = {
  type: PropTypes.string,
};
Alert.defaultProps = {
  type: 'default',
  prefixCls: "w-alert"
}