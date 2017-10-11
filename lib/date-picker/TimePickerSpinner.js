function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from '../utils/';
import { parseTime, parseTimeStr } from './utils';
;
// 时间滚动内容调整时间

var TimeSpinner = function (_Component) {
  _inherits(TimeSpinner, _Component);

  function TimeSpinner(props) {
    _classCallCheck(this, TimeSpinner);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      // 显示几组数据
      several: (props.format || '').split(":"),
      hours: 0,
      minutes: 0,
      seconds: 0
      // hoursList: this.rangeTime(24, 'hours'),
      // minutesLisit: this.rangeTime(60, 'minutes'),
      // secondsList: this.rangeTime(60, 'seconds'),
    };
    _this.renderItem = _this.renderItem.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  TimeSpinner.prototype.componentDidMount = function componentDidMount() {
    var several = this.state.several;
    var spinner = this.refs.spinner;

    if (spinner.children && spinner.children[0]) {
      spinner.style.width = spinner.children[0].offsetWidth * several.length + 'px';
    }
  };
  // 生成时间


  TimeSpinner.prototype.rangeTime = function rangeTime(end, ty) {
    return TimeSpinner.items(end, ty, this.props);
  };
  // 点击当前节点滚动到顶部


  TimeSpinner.prototype.scrollTopNow = function scrollTopNow(elm) {
    var currentDom = ReactDOM.findDOMNode(elm);
    currentDom.offsetParent.scrollTop = currentDom.offsetTop;
  };

  TimeSpinner.prototype.handleClick = function handleClick(item, e) {
    var _props = this.props,
        onPicked = _props.onPicked,
        value = _props.value;

    if (!item.disabled) {
      var time = parseTime(value);
      time['' + item.ty] = Number(item.value);
      onPicked(parseTimeStr(time), true);
      // 点击当前节点滚动到顶部
      this.scrollTopNow(e.target);
    }
  };

  TimeSpinner.prototype.renderItem = function renderItem(arr) {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        hideDisabled = _props2.hideDisabled;

    return React.createElement(
      'div',
      { className: this.classNames(prefixCls + '-select') },
      React.createElement(
        'ul',
        null,
        arr.map(function (item, idx) {
          if (hideDisabled && item.disabled) return null;
          return React.createElement(
            'li',
            {
              ref: function ref(tag) {
                if (tag && item.checked) {
                  _this2.scrollTopNow(tag);
                }
              },
              key: '' + idx,
              className: _this2.classNames({
                'w-disabled': item.disabled,
                'w-checked': item.checked
              }),
              onClick: function onClick(e) {
                return _this2.handleClick(item, e);
              }
            },
            item.value
          );
        })
      )
    );
  };

  TimeSpinner.prototype.render = function render() {
    var prefixCls = this.props.prefixCls;
    var several = this.state.several;


    return React.createElement(
      'div',
      { ref: 'spinner', className: this.classNames('' + prefixCls) },
      several.indexOf('HH') > -1 && this.renderItem(this.rangeTime(24, 'hours')),
      several.indexOf('mm') > -1 && this.renderItem(this.rangeTime(60, 'minutes')),
      several.indexOf('ss') > -1 && this.renderItem(this.rangeTime(66, 'seconds'))
    );
  };

  return TimeSpinner;
}(Component);

export default TimeSpinner;


TimeSpinner.items = function (end, ty, _ref) {
  var disabledHours = _ref.disabledHours,
      disabledMinutes = _ref.disabledMinutes,
      disabledSeconds = _ref.disabledSeconds,
      value = _ref.value;

  var currentTime = parseTime(value);
  var r = [];
  for (var i = 0; i < end; i++) {
    var time = i < 10 ? '0' + i : i + '';
    var disabledArr = [];
    var checked = false;
    switch (ty) {
      case 'hours':
        disabledArr = disabledHours;if (value && i === currentTime.hours) checked = true;break;
      case 'minutes':
        disabledArr = disabledMinutes;if (value && i === currentTime.minutes) checked = true;break;
      case 'seconds':
        disabledArr = disabledSeconds;if (value && i === currentTime.seconds) checked = true;break;
      default:
        break;
    }
    r.push({
      value: time,
      ty: ty,
      disabled: disabledArr.indexOf(time) > -1 ? true : false,
      checked: checked
    });
  }
  return r;
};
TimeSpinner.propTypes = {
  hours: PropTypes.number, // 时
  minutes: PropTypes.number, // 分
  seconds: PropTypes.number, // 秒
  isShowSeconds: PropTypes.bool // 是否显示秒
};

TimeSpinner.defaultProps = {
  prefixCls: 'w-time-spinner',
  hours: 0, // 时
  minutes: 0, // 分
  seconds: 0 // 秒
};