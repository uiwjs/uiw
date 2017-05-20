import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IconLoading } from '../svgs';
import "./style/index.less";

export default class Buttons extends Component {
  static defaultProps = {
    disabled: false,
    active: false,
    loading: false,
    block: false,
    type: 'default',
    size: 'normal',
    prefixCls: "w-btn",
  };
  static propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    size: PropTypes.string,
    type: PropTypes.string,
  }
  render() {
    const { prefixCls, type, size, active, disabled, block, className, loading, children, ...others } = this.props;
    const cls = classNames(prefixCls,{
        [`${prefixCls}-extra-small`]: size === 'extra-small', //（超小尺寸）Extra small button
        [`${prefixCls}-small`]: size === 'small',             //（小按钮）Small button
        [`${prefixCls}-default`]: size === 'default',         //（默认尺寸）Default button
        [`${prefixCls}-large`]: size === 'large',             //（大按钮）Large button
        
        [`${prefixCls}-default`]: type === 'default',         //  默认样式
        [`${prefixCls}-primary`]: type === 'primary',         // （首选项）Primary
        [`${prefixCls}-success`]: type === 'success',         // （成功）Success
        [`${prefixCls}-info`]: type === 'info',               // （一般信息）Info
        [`${prefixCls}-warn`]: type === 'warn',               // （警告）Warning
        [`${prefixCls}-danger`]: type === 'danger',           // （危险）Danger
        [`${prefixCls}-danger`]: type === 'error',            // （危险）Danger

        [`${prefixCls}-loading`]: loading,                    // （危险）Danger

        'disabled': disabled || loading,    // 禁用状态
        'active': active,        // 激活状态
        'block': block,          // （块级元素）Block level 

        [className]: className
      });
    return (
      <button { ...others } disabled={disabled || loading} className={ cls }>{loading&&IconLoading}{ children }</button>
    );
  }
}
