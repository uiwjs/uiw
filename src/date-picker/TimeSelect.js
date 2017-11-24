import React from 'react';
import BasePicker from './BasePicker';
import TimeSelectPanel from './TimeSelectPanel';

export default class TimeSelect extends BasePicker {
  constructor(props) {
    // props, type, state
    // BasePicker 组件中使用
    super(props, 'timeselect', {
      className: 'w-timeselect',
    });
  }
  panelPreps(props) {
    const minTime = this.dateToStr(this.props.minTime);
    const maxTime = this.dateToStr(this.props.maxTime);
    return { ...(props || this.props), minTime, maxTime };
  }
  pickerPanel(state, props) {
    const value = this.dateToStr(state.value);
    return (
      <TimeSelectPanel
        {...this.panelPreps(props)}
        value={value}
        visible={state.visible}
        handleClickOutside={this.handleClickOutside.bind(this)}
        inputWidth={state.inputWidth}
        onPicked={this.onPicked.bind(this)}
      />
    );
  }
}
