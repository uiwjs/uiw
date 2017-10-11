var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { PropTypes } from '../utils/';
import BasePicker from './BasePicker';
import TimePickerPanel from './TimePickerPanel';

var TimePicker = function (_BasePicker) {
  _inherits(TimePicker, _BasePicker);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    // props, type, state
    // BasePicker 组件中使用
    return _possibleConstructorReturn(this, _BasePicker.call(this, props, 'timepicker', {}));
  }

  TimePicker.prototype.panelPreps = function panelPreps(props) {
    // let defaultValue = 
    return _extends({}, props || this.props);
  };

  TimePicker.prototype.pickerPanel = function pickerPanel(state, props) {
    var value = this.dateToStr(state.value);
    return React.createElement(TimePickerPanel, _extends({}, this.panelPreps(Object.assign(state, props)), {
      value: value,
      visible: state.visible,
      handleClickOutside: this.handleClickOutside.bind(this),
      inputWidth: state.inputWidth,
      onPicked: this.onPicked.bind(this)
    }));
  };

  return TimePicker;
}(BasePicker);

export default TimePicker;


TimePicker.propTypes = Object.assign({
  format: PropTypes.string,
  disabledHours: PropTypes.arrayOf(PropTypes.string),
  disabledMinutes: PropTypes.arrayOf(PropTypes.string),
  disabledSeconds: PropTypes.arrayOf(PropTypes.string)
}, BasePicker.propTypes);
TimePicker.defaultProps = Object.assign({
  format: 'HH:mm:ss',
  disabledHours: [],
  disabledMinutes: [],
  disabledSeconds: []
}, BasePicker.defaultProps);