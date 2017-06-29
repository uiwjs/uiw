import React from 'react';
import { Component, PropTypes } from '../utils/';
import Popper from '../popper/';
import TimePickerSpinner from './TimePickerSpinner'

// 单个时间选择弹出层
export default class TimePickerPanel extends Component {
  render() {
    const { prefixCls, className, visible, handleClickOutside, inputWidth, ...other } = this.props;
    return (
      <Popper ref="popper" visible={visible}
        className={this.classNames(`${prefixCls}-popper`)}
        clickOutside={handleClickOutside}
        style={{
          minWidth: 161,
        }}
      >
        <div className={this.classNames(className, `${prefixCls}`)}>
          <TimePickerSpinner {...other} />
        </div>
      </Popper>
    );
  }
}

TimePickerPanel.propTypes = {
  prefixCls: PropTypes.string,
}

TimePickerPanel.defaultProps = {
  prefixCls: 'w-time-picker-panel',
}
