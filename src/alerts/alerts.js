import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Alerts extends Component {
  static propTypes = {
    type: PropTypes.string,
  };
  static defaultProps = {
    type: 'default',
  }
  state = {
    visible:true
  }
  handleClose(e){
    e.preventDefault();
    this.setState({visible:false})
    this.props.onClose()
  }
  render() {
    const { type, message, onClose, prefixCls="w-alert", description, className, children, ...others } = this.props;

    const cls = classNames(prefixCls,{
        [`${prefixCls}-default`]: type === 'default',  //  默认样式
        [`${prefixCls}-primary`]: type === 'primary',  // （首选项）Primary
        [`${prefixCls}-success`]: type === 'success',  // （成功）Success
        [`${prefixCls}-info`]:    type === 'info',     // （一般信息）Info
        [`${prefixCls}-warn`]:    type === 'warn',     // （警告）Warning
        [`${prefixCls}-error`]:   type === 'error',    // （危险）Danger

        [className]: className
      });

    const alertsview = !this.state.visible ? null :<div { ...others } className={ cls }>
        {message?<span className={!description?`${prefixCls}-description`:`${prefixCls}-message`}>{message}</span>:null}
        {description?<span className={`${prefixCls}-description`}>{description}</span>:null}
        {children}
        {onClose?(
          <a onClick={this.handleClose.bind(this)} className={`${prefixCls}-close-icon`}>
            
          </a>
        ):null}
      </div>
    return (
      alertsview
    );
  }
}
