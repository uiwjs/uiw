import React from 'react';
import { PropTypes } from '../utils/';
import BasePicker from './BasePicker';
import TimeSelectPanel from './TimeSelectPanel';

export default class TimeSelect extends BasePicker {
  static propTypes = Object.assign({
    start: PropTypes.string,
    end: PropTypes.string,
    step: PropTypes.string,
  }, BasePicker.propTypes)
  static defaultProps = Object.assign({
    start: '09:00',
    end: '18:00',
    step: '00:30',
  }, BasePicker.defaultProps)
  constructor(props) {
    // props, type, state
    // BasePicker 组件中使用
    super(props, 'timeselect', {});
  }
  panelPreps(props) {
    const minTime = this.dateToStr(this.props.minTime)
    const maxTime = this.dateToStr(this.props.maxTime)
    return { ...(props || this.props), minTime, maxTime }
  }
  pickerPanel(state, props) {
    const value = this.dateToStr(state.value)
    return (
      <TimeSelectPanel
        {...this.panelPreps(props) }
        value={value}
        visible={state.visible}
        handleClickOutside={this.handleClickOutside.bind(this)}
        inputWidth={state.inputWidth}
        onPicked={this.onPicked.bind(this)}
      />
    )
  }
}