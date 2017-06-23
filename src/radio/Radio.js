import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }
  handleChange(e) {
    const checked = e.target.checked;
    const { children } = this.props;
    if (checked) {
      if (this.props.onChange) {
        this.props.onChange(e, (this.props.value || children), checked);
      }
    }
  }
  render() {
    const { prefixCls, className, children, onChange, checked, disabled, value, ...other } = this.props;
    const cls = this.classNames(`${prefixCls}`, className, {
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

Radio.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
}

Radio.defaultProps = {
  prefixCls: "w-radio",
  disabled: false,
  onChange: (v) => v,
}
