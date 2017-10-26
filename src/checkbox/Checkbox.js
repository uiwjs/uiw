import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class Chackbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
      indeterminate: props.indeterminate,
      value: props.children
    }
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.indeterminate !== nextProps.indeterminate) {
      this.setState({ indeterminate: nextProps.indeterminate, checked: false });
    }
    if (this.props.checked !== nextProps.checked) {
      this.setState({ checked: nextProps.checked });
    }
  }
  handleChange(e) {
    const { onChange, children } = this.props;
    let checked = !this.state.checked;
    this.setState({
      checked: checked,
      indeterminate: false,
      value: children
    });
    onChange(e, checked);
  }
  render() {
    const { prefixCls, className, children, disabled, onChange, ...resetProps } = this.props;
    const { checked, indeterminate } = this.state;
    const cls = this.classNames(prefixCls, {
      'disabled': disabled,             // 禁用状态
      'indeterminate': indeterminate,   // 半选中
      'checked': checked,               // 选中
    });
    delete resetProps.indeterminate;
    return (
      <label className={this.classNames(`${prefixCls}-warpper`, className)} {...resetProps}>
        <span className={cls}>
          <input type="checkbox" disabled={disabled} checked={checked} value={children} onChange={this.handleChange.bind(this)} />
        </span>
        {children && <span>{children}</span>}
      </label>
    )
  }
}

Chackbox.defaultProps = {
  prefixCls: 'w-chackbox',
  checked: false,
  indeterminate: false,
  onChange() { },
};
Chackbox.propTypes = {
  prefixCls: PropTypes.string,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}