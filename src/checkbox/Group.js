import React from 'react';
import { Component, PropTypes } from '../utils/';
import Checkbox from './';


export default class Group extends Component {
  checkedValuesResult(checkedValues, value, checked) {
    let values = []
    for (let i = 0; i < checkedValues.length; i++) {
      let _value = this.refs['checkbox' + i].state.value;
      let _checked = this.refs['checkbox' + i].state.checked;
      if ((_checked && value !== _value) || (checked && value === _value)) {
        values.push(_value)
      }
    }
    return values;
  }
  render() {
    const { prefixCls, style, onChange, options, checkedValues, disabled, className } = this.props;
    return (
      <div style={style} className={this.classNames(prefixCls, className)}>
        {Array.from(options, (item, i) => {
          let value = item.value ? item.value : item;
          return (
            <Checkbox
              key={i}
              onChange={(e, checked) => {
                let values = this.checkedValuesResult(options, value, checked);
                onChange(e, values, value, checked)
              }}
              disabled={item.disabled === false ? false : disabled}
              checked={checkedValues.indexOf(value) > -1 ? true : false}
              ref={`checkbox${i}`}>{value}
            </Checkbox>
          )
        })}
      </div >
    )
  }
}

Group.defaultProps = {
  prefixCls: 'w-checkbox-group',
  options: [],
  checkedValues: [],
  onChange() { },
};
Group.propTypes = {
  prefixCls: PropTypes.string,
  options: PropTypes.array,
  checkedValues: PropTypes.array,
  onChange: PropTypes.func,
}