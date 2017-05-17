
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Buttons extends Component {
  static defaultProps = {
    disabled: false,
    active: false,
    type: 'default',
    size: 'normal',
  };
  static propTypes = {
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    size: PropTypes.string,
    type: PropTypes.string,
  }
  render() {
    const {type, size, active, className, children, ...others } = this.props;
    const cls = classNames({
          'w-btn': true,

          'w-btn-extra-small': size === 'extra-small',  //（超小尺寸）Extra small button
          'w-btn-small': size === 'small',              //（小按钮）Small button
          'w-btn-default': size === 'default',          //（默认尺寸）Default button
          'w-btn-large': size === 'large',              //（大按钮）Large button

          'w-btn-default': type === 'default',  //  默认样式
          'w-btn-primary': type === 'primary',  // （首选项）Primary
          'w-btn-success': type === 'success',  // （首选项）Primary
          'w-btn-info': type === 'info',        // （一般信息）Info
          'w-btn-warn': type === 'warn',        // （警告）Warning
          'w-btn-danger': type === 'danger',    // （危险）Danger
          'w-btn-link': type === 'link',        // （链接）Link

          'disabled': this.props.disabled,    // 禁用状态
          'active': this.props.active,      // 激活状态

          [className]: className
      });
    console.log("cls:::",cls)
    return (
      <button { ...others } className={ cls }>{ children }</button>
    );
  }
}
