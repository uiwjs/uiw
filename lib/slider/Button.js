function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Tooltip from '../tooltip/';

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    // this.state = {
    //   value: 0
    // }
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onDragging = _this.onDragging.bind(_this);
    _this.onDragEnd = _this.onDragEnd.bind(_this);
    return _this;
  }

  Button.prototype.componentDidMount = function componentDidMount() {
    var value = this.props.value;

    this.startPoint = value;
    this.parent().setButtonPosition(this, value);
  };

  Button.prototype.parent = function parent() {
    return this.context.component;
  };

  Button.prototype.getStep = function getStep() {
    return this.parent().props.step;
  };

  Button.prototype.getMax = function getMax() {
    return this.parent().props.max;
  };

  Button.prototype.getMin = function getMin() {
    return this.parent().props.min;
  };

  Button.prototype.isDisabled = function isDisabled() {
    return this.parent().props.disabled;
  };

  Button.prototype.isVertical = function isVertical() {
    return this.parent().props.vertical;
  };

  Button.prototype.isTooltip = function isTooltip() {
    return this.parent().props.tooltip;
  };

  Button.prototype.onDragging = function onDragging(event) {
    var onChange = this.props.onChange;

    var count = this.parent().getSliderSize();
    var currentX = event.clientX;
    var currentY = event.clientY;
    var move = (this.isVertical() ? this.startY - currentY : currentX - this.startX) / count * 100;
    var startPoint = this.startPoint + parseInt(move, 10);
    if (startPoint < 0 || startPoint > 100) return;
    if (this.startPoint !== startPoint && this.currentPoint !== startPoint) {
      this.parent().isDragging(true);
      this.currentPoint = startPoint;
      onChange(startPoint);
    }
  };

  Button.prototype.onDragEnd = function onDragEnd(event) {
    var _this2 = this;

    var onChange = this.props.onChange;

    window.removeEventListener('mousemove', this.onDragging, true);
    window.removeEventListener('mouseup', this.onDragEnd, true);
    var startPoint = parseInt(this.refs.button.style[this.isVertical() ? 'bottom' : 'left'], 10) || 0;
    if (this.startPoint !== startPoint) {
      onChange(startPoint);
    }
    this.startPoint = startPoint;
    // 拖拽和点击，导致设置值不准确
    this.timeout = setTimeout(function () {
      _this2.parent().isDragging(false);
      clearTimeout(_this2.timeout);
    }, 0);
  };

  Button.prototype.onButtonDown = function onButtonDown(event) {
    if (this.isDisabled()) return;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.startPoint = this.startPoint || 0;
    this.currentPoint = this.startPoint;
    window.addEventListener('mousemove', this.onDragging, true);
    window.addEventListener('mouseup', this.onDragEnd, true);
  };

  Button.prototype.showNumber = function showNumber(num) {
    return parseInt(this.getMin() + num * (this.getMax() - this.getMin()) / 100, 10);
  };

  Button.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        value = _props.value;

    return React.createElement(
      'div',
      { ref: 'button', className: prefixCls + '-btn-wapper',
        onMouseDown: this.onButtonDown.bind(this)
      },
      this.isTooltip() ? React.createElement(
        Tooltip,
        { content: this.showNumber(value) },
        React.createElement('div', { style: { backgroundColor: this.parent().props.color }, className: prefixCls + '-btn-inner' })
      ) : React.createElement('div', { className: prefixCls + '-btn-inner' })
    );
  };

  return Button;
}(Component);

export default Button;


Button.contextTypes = {
  component: PropTypes.any
};

Button.propTypes = {
  prefixCls: PropTypes.string
};

Button.defaultProps = {
  prefixCls: 'w-slider'
};