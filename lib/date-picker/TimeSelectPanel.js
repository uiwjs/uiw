function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Popper from '../popper/';
import { parseTime } from './utils';

// 单个时间选择弹出层

var TimeSelectPanel = function (_Component) {
  _inherits(TimeSelectPanel, _Component);

  function TimeSelectPanel(props) {
    _classCallCheck(this, TimeSelectPanel);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      inputWidth: 0,
      visible: false // 菜单是否显示
    };
    return _this;
  }

  TimeSelectPanel.prototype.handleClick = function handleClick(item) {
    var onPicked = this.props.onPicked;

    if (!item.disabled) {
      onPicked(item.value);
    }
  };

  TimeSelectPanel.prototype.items = function items() {
    return TimeSelectPanel.items(this.props);
  };

  TimeSelectPanel.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        value = _props.value,
        inputWidth = _props.inputWidth,
        visible = _props.visible,
        handleClickOutside = _props.handleClickOutside;

    return React.createElement(
      Popper,
      { ref: 'popper', visible: visible,
        className: this.classNames(prefixCls + '-popper'),
        clickOutside: handleClickOutside,
        style: {
          minWidth: inputWidth
        }
      },
      React.createElement(
        'div',
        { className: this.classNames(className, '' + prefixCls) },
        this.items().map(function (item, idx) {
          if (item.hideDisabled && item.disabled) return null;
          return React.createElement(
            'div',
            { key: idx,
              className: _this2.classNames({
                'w-selected': value === item.value,
                'w-disabled': item.disabled
              }),
              disabled: item.disabled,
              onClick: function onClick() {
                return _this2.handleClick(item);
              } },
            item.value
          );
        })
      )
    );
  };

  return TimeSelectPanel;
}(Component);

export default TimeSelectPanel;


var compareTime = function compareTime(time1, time2) {
  var value1 = parseTime(time1);
  var value2 = parseTime(time2);
  var minutes1 = value1.minutes + value1.hours * 60;
  var minutes2 = value2.minutes + value2.hours * 60;

  if (minutes1 === minutes2) {
    return 0;
  }

  return minutes1 > minutes2 ? 1 : -1;
};

// 时间转换成字符串
var formatTime = function formatTime(time) {
  return (time.hours < 10 ? '0' + time.hours : time.hours) + ':' + (time.minutes < 10 ? '0' + time.minutes : time.minutes);
};

// 下一个时间段
var nextTime = function nextTime(time, step) {
  var timeValue = parseTime(time);
  var stepValue = parseTime(step);
  var next = {
    hours: timeValue.hours,
    minutes: timeValue.minutes
  };

  next.minutes += stepValue.minutes;
  next.hours += stepValue.hours;

  next.hours += Math.floor(next.minutes / 60);
  next.minutes = next.minutes % 60;

  return formatTime(next);
};

TimeSelectPanel.items = function (_ref) {
  var start = _ref.start,
      end = _ref.end,
      step = _ref.step,
      minTime = _ref.minTime,
      maxTime = _ref.maxTime,
      hideDisabled = _ref.hideDisabled;

  var result = [];
  if (start && end && step) {
    var current = start;
    while (compareTime(current, end) <= 0) {
      result.push({
        value: current,
        hideDisabled: hideDisabled,
        disabled: compareTime(current, minTime || '00:00') <= 0 || compareTime(current, maxTime || '24:60') >= 0
      });
      current = nextTime(current, step);
    }
  }
  return result;
};

TimeSelectPanel.propTypes = {
  prefixCls: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  step: PropTypes.string,
  minTime: PropTypes.string,
  maxTime: PropTypes.string
  // value: PropTypes.string,
};

TimeSelectPanel.defaultProps = {
  prefixCls: 'w-timeselect-panel'
};