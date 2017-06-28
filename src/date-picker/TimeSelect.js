import React from 'react';
import { PropTypes } from '../utils/';
import BasePicker from './BasePicker'
import TimeSelectPanel from './TimeSelectPanel'
import { isDate } from './utils';

export default class TimeSelect extends BasePicker {
  constructor(props) {
    // props, type, state
    // BasePicker 组件中使用
    super(props, 'timeselect', {});
  }
  pickerPanel(state, props) {
    const _props = props || this.props
    const value = this.dateToStr(state.value)
    return (
      <TimeSelectPanel
        {..._props}
        value={value}
        onPicked={this.onPicked.bind(this)}
      />
    )
  }
}

TimeSelect.propTypes = {
  prefixCls: PropTypes.string,
  placeholder: PropTypes.string,

  start: PropTypes.string,
  end: PropTypes.string,
  step: PropTypes.string,

  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: (props, propName, componentName) => {
    let dt = props[propName];
    let _isDate = true;
    if (dt instanceof Array) {
      for (let i = 0; i < dt.length; i++) {
        if (!isDate(dt[i])) {
          _isDate = false;
          break;
        }
      }
    } else if (!isDate(dt)) {
      _isDate = false;
    }
    if (_isDate === false) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
}

TimeSelect.defaultProps = {
  prefixCls: 'w-timeselect',
}
