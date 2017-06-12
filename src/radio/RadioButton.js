import React from 'react';
import {Component, PropTypes} from '../utils/';
import Radio from './Radio';

export default class RadioButton extends Radio {
  render() {
    const {prefixCls,className,children,onChange,checked,disabled,value,...other} = this.props;
    const cls = this.classNames(`${prefixCls}`,`${prefixCls}-button`,className,{
      'disabled': disabled, // 禁用状态
      'checked': checked,   // 选中
    });
    return (
      <label {...other} className={cls}>
        <span className={`${prefixCls}-inner`}>
          <input type="radio" disabled={disabled} checked={checked} value={value || children} onChange={this.handleChange.bind(this)} />
        </span>
        <span className={`${prefixCls}-text`}>{children || value}</span>
      </label>
    )
  }
}

RadioButton.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  checked: PropTypes.bool
}

RadioButton.defaultProps = {
  prefixCls: "w-radio",
}
