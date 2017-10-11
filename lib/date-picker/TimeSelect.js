var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { PropTypes } from '../utils/';
import BasePicker from './BasePicker';
import TimeSelectPanel from './TimeSelectPanel';

var TimeSelect = function (_BasePicker) {
  _inherits(TimeSelect, _BasePicker);

  function TimeSelect(props) {
    _classCallCheck(this, TimeSelect);

    // props, type, state
    // BasePicker 组件中使用
    return _possibleConstructorReturn(this, _BasePicker.call(this, props, 'timeselect', {}));
  }

  TimeSelect.prototype.panelPreps = function panelPreps(props) {
    var minTime = this.dateToStr(this.props.minTime);
    var maxTime = this.dateToStr(this.props.maxTime);
    return _extends({}, props || this.props, { minTime: minTime, maxTime: maxTime });
  };

  TimeSelect.prototype.pickerPanel = function pickerPanel(state, props) {
    var value = this.dateToStr(state.value);
    return React.createElement(TimeSelectPanel, _extends({}, this.panelPreps(props), {
      value: value,
      visible: state.visible,
      handleClickOutside: this.handleClickOutside.bind(this),
      inputWidth: state.inputWidth,
      onPicked: this.onPicked.bind(this)
    }));
  };

  return TimeSelect;
}(BasePicker);

export default TimeSelect;

TimeSelect.propTypes = Object.assign({
  start: PropTypes.string,
  end: PropTypes.string,
  step: PropTypes.string
}, BasePicker.propTypes);
TimeSelect.defaultProps = Object.assign({
  start: '09:00',
  end: '18:00',
  step: '00:30'
}, BasePicker.defaultProps);