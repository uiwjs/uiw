import React from 'react';
import { Component, PropTypes } from '../utils/';
import Icon from '../icon/';

export default class Option extends Component {
  parent() { return this.context.component; }
  // 点击单个Item事件
  selectOptionClick() {
    if (this.props.disabled !== true) {
      this.parent().onOptionClick(this);
    }
  }
  isSelected() {
    const { selected } = this.parent().state;
    const { value } = this.props;
    if (selected) {
      if (Object.prototype.toString.call(selected) === '[object Object]') {
        return value === selected.props.value;
      } else if (Array.isArray(selected)) {
        return selected.map(el => el.props.value).indexOf(value) > -1;
      }
    }
    return false;
  }
  isMultiple() {
    return this.parent().props.multiple
  }
  currentLabel() {
    const { label, value } = this.props;
    return label || ((typeof value === 'string' || typeof value === 'number') ? value : '');
  }
  render() {
    const { children, disabled } = this.props;
    return (
      <li
        onClick={this.selectOptionClick.bind(this)}
        className={this.classNames({
          'disabled': disabled,
          'selected': this.isSelected()
        })}
      >
        {children || <span>{this.currentLabel()}</span>}
        {this.isSelected() && this.isMultiple() && <span className="check"><Icon type="check" /></span>}
      </li>
    );
  }
}

Option.contextTypes = {
  component: PropTypes.any
};

Option.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Option.defaultProps = {
  prefixCls: 'w-select',
}
