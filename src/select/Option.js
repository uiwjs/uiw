import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class Select extends Component {
  parent() { return this.context.component; }
  // 点击单个Item事件
  selectOptionClick() {
    if (this.props.disabled !== true && this.parent().props.disabled !== true) {
      this.parent().onOptionClick(this);
    }
  }
  componentWillMount() {
    const { value } = this.props;
    if (!this.parent().state.selected && value === this.parent().props.value) {
      this.parent().addOptionToValue(this);
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
      </li>
    );
  }
}

Select.contextTypes = {
  component: PropTypes.any
};

Select.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Select.defaultProps = {
  prefixCls: 'w-select',
}
