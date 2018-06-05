import React from 'react';
import { Component, PropTypes } from '../utils/';
import Checkbox from './';


export default class Group extends Component {
  checkedValuesResult(checkedValues, value, checked) {
    const values = [];
    for (let i = 0; i < checkedValues.length; i += 1) {
      const _value = this.checkboxs[`checkbox${i}`].state.value;
      const _checked = this.checkboxs[`checkbox${i}`].state.checked;
      if ((_checked && value !== _value) || (checked && value === _value)) {
        values.push(_value);
      }
    }
    return values;
  }
  render() {
    const { prefixCls, className, onChange, options, checkedValues, disabled, ...otherProps } = this.props;
    return (
      <div className={this.classNames(prefixCls, className)} {...otherProps}>
        {Array.from(options, (item, i) => {
          const value = item.value ? item.value : item;
          const label = item.label ? item.label : value;
          let props = {};
          if (typeof item === 'object') {
            props = { ...item };
          }
          this.checkboxs = {};
          return (
            <Checkbox
              key={i}
              onChange={(e, checked) => {
                const values = this.checkedValuesResult(options, value, checked);
                onChange(e, values, value, checked, item);
              }}
              disabled={item.disabled === false ? false : disabled}
              checked={checkedValues.indexOf(value) > -1}
              ref={(component) => {
                this.checkboxs[`checkbox${i}`] = component;
              }}
              {...props}
            >
              {label}
            </Checkbox>
          );
        })}
      </div >
    );
  }
}

Group.defaultProps = {
  prefixCls: 'w-checkbox-group',
  options: [],
  disabled: false,
  checkedValues: [],
  onChange() { },
};
Group.propTypes = {
  prefixCls: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  checkedValues: PropTypes.array,
  onChange: PropTypes.func,
};
