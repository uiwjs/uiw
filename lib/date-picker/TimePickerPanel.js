function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Popper from '../popper/';
import TimePickerSpinner from './TimePickerSpinner';

// 单个时间选择弹出层

var TimePickerPanel = function (_Component) {
  _inherits(TimePickerPanel, _Component);

  function TimePickerPanel() {
    _classCallCheck(this, TimePickerPanel);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TimePickerPanel.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        visible = _props.visible,
        handleClickOutside = _props.handleClickOutside,
        inputWidth = _props.inputWidth,
        other = _objectWithoutProperties(_props, ['prefixCls', 'className', 'visible', 'handleClickOutside', 'inputWidth']);

    return React.createElement(
      Popper,
      { ref: 'popper', visible: visible,
        className: this.classNames(prefixCls + '-popper'),
        clickOutside: handleClickOutside
      },
      React.createElement(
        'div',
        { className: this.classNames(className, '' + prefixCls) },
        React.createElement(TimePickerSpinner, other)
      )
    );
  };

  return TimePickerPanel;
}(Component);

export default TimePickerPanel;


TimePickerPanel.propTypes = {
  prefixCls: PropTypes.string
};

TimePickerPanel.defaultProps = {
  prefixCls: 'w-time-picker-panel'
};