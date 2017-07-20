import React from 'react';
import { PropTypes } from '../utils/';
import BasePicker from './BasePicker'
import TimePickerPanel from './TimePickerPanel'

export default class TimePicker extends BasePicker {
  constructor(props) {
    // props, type, state
    // BasePicker 组件中使用
    super(props, 'timepicker', {});
  }
  panelPreps(props) {
    // let defaultValue = 
    return { ...(props || this.props) }
  }
  pickerPanel(state, props) {
    const value = this.dateToStr(state.value);
    return (
      <TimePickerPanel
        {...this.panelPreps(Object.assign(state, props)) }
        value={value}
        visible={state.visible}
        handleClickOutside={this.handleClickOutside.bind(this)}
        inputWidth={state.inputWidth}
        onPicked={this.onPicked.bind(this)}
      />
    )
  }
}

TimePicker.propTypes = Object.assign({
  format: PropTypes.string,
  disabledHours: PropTypes.arrayOf(PropTypes.string),
  disabledMinutes: PropTypes.arrayOf(PropTypes.string),
  disabledSeconds: PropTypes.arrayOf(PropTypes.string),
}, BasePicker.propTypes)
TimePicker.defaultProps = Object.assign({
  format: 'HH:mm:ss',
  disabledHours: [],
  disabledMinutes: [],
  disabledSeconds: []
}, BasePicker.defaultProps)