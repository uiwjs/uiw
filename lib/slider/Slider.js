var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Button from './Button';

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      currentValue: props.value,
      firstValue: 0,
      secondValue: 0
    };
    return _this;
  }

  Slider.prototype.componentWillMount = function componentWillMount() {
    var _state = this.state,
        firsValue = _state.firsValue,
        secendValue = _state.secendValue;
    var value = this.props.value;


    if (value instanceof Array) {
      firsValue = this.setResultConversion(value[0]);
      secendValue = this.setResultConversion(value[1]);
    } else {
      firsValue = this.setResultConversion(value);
    }
    this.setState({
      firsValue: firsValue, secendValue: secendValue
    });
  };

  Slider.prototype.componentDidMount = function componentDidMount() {
    var _state2 = this.state,
        firsValue = _state2.firsValue,
        secendValue = _state2.secendValue;

    this.setSliderBar(firsValue, secendValue, true);
  };

  Slider.prototype.getChildContext = function getChildContext() {
    return {
      component: this
    };
  };

  Slider.prototype.getSliderSize = function getSliderSize() {
    var slider = this.refs.slider;

    return parseInt(this.props.vertical ? slider.offsetHeight : slider.offsetWidth, 10);
  };

  Slider.prototype.isRange = function isRange() {
    var value = this.props.value;

    if (value instanceof Array && value.length > 1) return true;
    return false;
  };

  Slider.prototype.isDragging = function isDragging(bool) {
    this.dragging = bool;
  };

  Slider.prototype.onSliderClick = function onSliderClick(event) {
    var _this2 = this;

    var _props = this.props,
        vertical = _props.vertical,
        disabled = _props.disabled;
    var _state3 = this.state,
        firsValue = _state3.firsValue,
        secendValue = _state3.secendValue;

    if (this.dragging) return;
    if (disabled) return;
    var sliderOffset = this.refs.slider.getBoundingClientRect();
    var sliderOffsetValue = 0;
    if (vertical) {
      sliderOffsetValue = (sliderOffset.bottom - event.clientY) / this.getSliderSize() * 100;
    } else {
      sliderOffsetValue = (event.clientX - sliderOffset.left) / this.getSliderSize() * 100;
    }
    sliderOffsetValue = parseInt(sliderOffsetValue, 10);

    if (this.isRange()) {
      var range = secendValue - firsValue;
      // let btn1 = this.refs.btn1.refs.button.style[vertical ? 'bottom' : 'left'];
      // let btn2 = this.refs.btn2.refs.button.style[vertical ? 'bottom' : 'left'];
      // btn1 = parseInt(btn1, 10);
      // btn2 = parseInt(btn2, 10);
      if (range + firsValue > sliderOffsetValue) {
        this.refs.btn1.startPoint = sliderOffsetValue;
        this.setState({ firsValue: sliderOffsetValue }, function () {
          _this2.setSliderBar(sliderOffsetValue, secendValue);
        });
        this.setButtonPosition(this.refs.btn1, sliderOffsetValue);
      } else {
        this.refs.btn2.startPoint = sliderOffsetValue;
        this.setState({ secendValue: sliderOffsetValue }, function () {
          _this2.setSliderBar(firsValue, sliderOffsetValue);
        });
        this.setButtonPosition(this.refs.btn2, sliderOffsetValue);
      }
    } else {
      this.refs.btn1.startPoint = sliderOffsetValue;
      this.setButtonPosition(this.refs.btn1, sliderOffsetValue);
      this.setSliderBar(sliderOffsetValue, secendValue);
    }
  };
  // 刻度显示


  Slider.prototype.stepArray = function stepArray(marks) {
    var _props2 = this.props,
        min = _props2.min,
        max = _props2.max,
        step = _props2.step;

    var pointCount = (max - min) / step;
    var stepWidth = 100 * step / (max - min);
    var result = [];
    for (var i = 1; i < pointCount; i++) {
      result.push(i * stepWidth);
    }
    return result;
  };

  Slider.prototype.setResultConversion = function setResultConversion(num) {
    var _props3 = this.props,
        min = _props3.min,
        max = _props3.max;

    return parseInt((num - min) / (max - min) * 100, 10);
  };
  // 拖拽刻度


  Slider.prototype.setMarkPosition = function setMarkPosition(num) {
    var _props4 = this.props,
        min = _props4.min,
        max = _props4.max,
        step = _props4.step,
        dots = _props4.dots;

    var stepWidth = 100 * step / (max - min); // 实际占用 宽度值
    var rem = num % stepWidth; // 实际间隔余 宽度值
    var range = (step - min) / (max - min) * 100; // 实际间隔 宽度值
    var currentv = parseInt(min + num * (max - min) / 100, 10); // 当前值
    // num，stepWidth 是转换后的值
    // 倍数
    var multiple = parseInt(num / range + 1, 10);
    if (!dots) return num;
    if (currentv % step >= step / 2) {
      return multiple * range;
    } else {
      return num - rem;
    }
  };

  Slider.prototype.onChange = function onChange(firsValue, secendValue) {
    var _props5 = this.props,
        max = _props5.max,
        min = _props5.min,
        onChange = _props5.onChange;
    // 百分百转换值

    firsValue = parseInt(min + firsValue * (max - min) / 100, 10);
    secendValue = parseInt(min + secendValue * (max - min) / 100, 10);
    // 相同值不触发 事件
    if (this._firsValue === firsValue) return;
    if (this.isRange() && this._firsValue === firsValue && this._secendValue === secendValue) return;
    this._firsValue = firsValue;
    this._secendValue = secendValue;

    if (this.isRange()) {
      onChange([firsValue, secendValue]);
    } else {
      onChange(firsValue);
    }
  };

  Slider.prototype.setSliderBar = function setSliderBar(firsValue, secendValue, isMount) {
    var _props6 = this.props,
        value = _props6.value,
        vertical = _props6.vertical;

    var leftv = firsValue > secendValue ? secendValue : firsValue;
    firsValue = this.setMarkPosition(firsValue);
    leftv = this.setMarkPosition(leftv);

    var widthv = firsValue > secendValue ? firsValue - leftv : secendValue - leftv;
    widthv = this.setMarkPosition(widthv);

    if (value instanceof Array && value.length > 1) {
      !isMount && this.onChange(firsValue, secendValue);
      this.refs.bar.style[vertical ? 'bottom' : 'left'] = leftv + '%';
      this.refs.bar.style[vertical ? 'height' : 'width'] = widthv + '%';
    } else {
      !isMount && this.onChange(firsValue, secendValue);
      this.refs.bar.style[vertical ? 'height' : 'width'] = firsValue + '%';
    }
  };
  // 设置按钮的位置


  Slider.prototype.setButtonPosition = function setButtonPosition(comp, num) {
    var vertical = this.props.vertical;

    num = this.setMarkPosition(num);
    if (vertical) {
      comp.refs.button.style.bottom = num + '%';
    } else {
      comp.refs.button.style.left = num + '%';
    }
  };
  // 判断是否冗余过多触发事件


  Slider.prototype.isRedundancyEvent = function isRedundancyEvent() {};

  Slider.prototype.onDragChange = function onDragChange() {
    var _props7 = this.props,
        min = _props7.min,
        max = _props7.max,
        disabled = _props7.disabled,
        onDragChange = _props7.onDragChange;
    var _state4 = this.state,
        firsValue = _state4.firsValue,
        secendValue = _state4.secendValue;

    if (disabled) return;

    // 百分百转换值
    firsValue = parseInt(min + firsValue * (max - min) / 100, 10);
    secendValue = parseInt(min + secendValue * (max - min) / 100, 10);
    // 相同值不触发 事件
    if (this.__firsValue === firsValue && this.__secendValue === secendValue) return;
    if (this.isRange() && this._firsValue === firsValue && this._secendValue === secendValue) return;
    this.__firsValue = firsValue;
    this.__secendValue = secendValue;

    onDragChange(this.isRange() ? [firsValue, secendValue] : firsValue);
  };

  Slider.prototype.onFirstValueChange = function onFirstValueChange(firsValue) {
    var _this3 = this;

    var secendValue = this.state.secendValue;

    this.setState({ firsValue: firsValue }, function () {
      _this3.setButtonPosition(_this3.refs.btn1, firsValue);
      _this3.setSliderBar(firsValue, secendValue);
      _this3.onDragChange();
    });
  };

  Slider.prototype.onSecondValueChange = function onSecondValueChange(secendValue) {
    var _this4 = this;

    var firsValue = this.state.firsValue;

    this.setState({ secendValue: secendValue }, function () {
      _this4.setButtonPosition(_this4.refs.btn2, secendValue);
      _this4.setSliderBar(firsValue, secendValue);
      _this4.onDragChange();
    });
  };

  Slider.prototype.isActive = function isActive(num) {
    var value = this.props.value;
    var _state5 = this.state,
        firsValue = _state5.firsValue,
        secendValue = _state5.secendValue;

    if (value instanceof Array) {
      if (firsValue < secendValue && num > firsValue && num < secendValue) {
        return true;
      }
      if (firsValue > secendValue && num > secendValue && num < firsValue) {
        return true;
      }
      return false;
    } else if (num < firsValue) {
      return true;
    } else {
      return false;
    }
  };
  // 刻度标记


  Slider.prototype.renderMarks = function renderMarks() {
    var _this5 = this;

    var _props8 = this.props,
        prefixCls = _props8.prefixCls,
        vertical = _props8.vertical,
        marks = _props8.marks,
        max = _props8.max,
        min = _props8.min;

    return React.createElement(
      'div',
      { className: prefixCls + '-marks' },
      Object.keys(marks).map(function (item, idx) {
        var _style, _this5$classNames;

        var label = marks[item];
        var style = (_style = {}, _style[vertical ? 'bottom' : 'left'] = parseInt((item - min) / (max - min) * 100, 10) + '%', _style);
        if (label instanceof Object) {
          style = _extends({}, style, label.style);
          label = label.label || '';
        }
        return React.createElement(
          'div',
          { key: idx, className: _this5.classNames(prefixCls + '-marks-text', (_this5$classNames = {}, _this5$classNames['w-active'] = _this5.isActive(item), _this5$classNames)),
            style: style
          },
          label
        );
      })
    );
  };

  Slider.prototype.render = function render() {
    var _classNames,
        _this6 = this;

    var _props9 = this.props,
        prefixCls = _props9.prefixCls,
        marks = _props9.marks,
        className = _props9.className,
        color = _props9.color,
        style = _props9.style,
        disabled = _props9.disabled,
        vertical = _props9.vertical;
    var _state6 = this.state,
        firsValue = _state6.firsValue,
        secendValue = _state6.secendValue;

    return React.createElement(
      'div',
      { ref: 'slider', style: style,
        className: this.classNames('' + prefixCls, className, (_classNames = {
          'w-disabled': disabled
        }, _classNames[prefixCls + '-vertical'] = vertical, _classNames)),
        onClick: this.onSliderClick.bind(this)
      },
      React.createElement(
        'div',
        { className: this.classNames(prefixCls + '-track') },
        React.createElement(
          'div',
          { ref: 'bar', style: { backgroundColor: color }, className: prefixCls + '-bar' },
          ' '
        ),
        React.createElement(Button, { ref: 'btn1', value: firsValue, onChange: this.onFirstValueChange.bind(this) }),
        this.isRange() && React.createElement(Button, { ref: 'btn2', value: secendValue, onChange: this.onSecondValueChange.bind(this) }),
        marks && this.stepArray().map(function (item, idx) {
          var _this6$classNames;

          return React.createElement('div', { key: idx, className: _this6.classNames(prefixCls + '-step', (_this6$classNames = {}, _this6$classNames['w-active'] = _this6.isActive(item), _this6$classNames)), style: vertical ? { 'bottom': item + '%' } : { 'left': item + '%' } });
        }),
        marks && marks instanceof Object && this.renderMarks()
      )
    );
  };

  return Slider;
}(Component);

export default Slider;


Slider.childContextTypes = {
  component: PropTypes.any
};

Slider.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  max: PropTypes.number,
  color: PropTypes.string,
  min: PropTypes.number,
  step: PropTypes.number,
  dots: PropTypes.bool,
  marks: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  tooltip: PropTypes.bool,
  disabled: PropTypes.bool,
  vertical: PropTypes.bool,
  onChange: PropTypes.func
};

Slider.defaultProps = {
  prefixCls: 'w-slider',
  value: 0,
  max: 100,
  min: 0,
  step: 1,
  dots: false,
  tooltip: true,
  disabled: false,
  vertical: false,
  onChange: function onChange() {},
  onDragChange: function onDragChange() {}
};