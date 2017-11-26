import React from 'react';
import BasePicker from './BasePicker';
import DatePanel from './DatePanel';

export default class DatePicker extends BasePicker {
  constructor(props) {
    // props, type, state
    // BasePicker 组件中使用
    super(props, 'datepicker', {
      prefixCls: 'w-datepicker',
      placeholder: '选择日期',
    });
  }
  panelPreps(props) {
    return { ...(props || this.props) };
  }
  pickerPanel(state) {
    return (
      <DatePanel
        {...this.panelPreps(state) }
        value={state.value}
        visible={state.visible}
        handleClickOutside={this.handleClickOutside.bind(this)}
        // inputWidth={state.inputWidth}
        onPicked={this.onPicked.bind(this)}
      />
    );
  }
}
