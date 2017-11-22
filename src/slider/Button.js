import React from 'react';
import { Component, PropTypes } from '../utils/';
import Tooltip from '../tooltip/';

export default class Button extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: 0
    // }
    this.onDragging = this.onDragging.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  componentDidMount() {
    const { value } = this.props;
    this.startPoint = value;
    this.parent().setButtonPosition(this, value)
  }
  parent() {
    return this.context.component;
  }
  getStep() {
    return this.parent().props.step;
  }
  getMax() {
    return this.parent().props.max;
  }
  getMin() {
    return this.parent().props.min;
  }
  isDisabled() {
    return this.parent().props.disabled;
  }
  isVertical() {
    return this.parent().props.vertical;
  }
  isTooltip() {
    return this.parent().props.tooltip;
  }
  onDragging(event) {
    const { onChange } = this.props;
    let count = this.parent().getSliderSize();
    let currentX = event.clientX;
    let currentY = event.clientY;
    let move = (this.isVertical() ? (this.startY - currentY) : (currentX - this.startX)) / count * 100;
    let startPoint = this.startPoint + parseInt(move, 10);
    if (startPoint < 0 || startPoint > 100) return;
    if (
      this.startPoint !== startPoint && this.currentPoint !== startPoint
    ) {
      this.parent().isDragging(true);
      this.currentPoint = startPoint;
      onChange(startPoint);
    }
  }
  onDragEnd(event) {
    const { onChange } = this.props;
    window.removeEventListener('mousemove', this.onDragging, true);
    window.removeEventListener('mouseup', this.onDragEnd, true);
    let startPoint = parseInt(this.button.style[this.isVertical() ? 'bottom' : 'left'], 10) || 0;
    if (this.startPoint !== startPoint) {
      onChange(startPoint);
    }
    this.startPoint = startPoint;
    // 拖拽和点击，导致设置值不准确
    this.timeout = setTimeout(() => {
      this.parent().isDragging(false);
      clearTimeout(this.timeout);
    }, 0)
  }
  onButtonDown(event) {
    if (this.isDisabled()) return;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.startPoint = this.startPoint || 0;
    this.currentPoint = this.startPoint;
    window.addEventListener('mousemove', this.onDragging, true);
    window.addEventListener('mouseup', this.onDragEnd, true);
  }
  showNumber(num) {
    return parseInt((this.getMin() + num * (this.getMax() - this.getMin()) / 100), 10)
  }
  render() {
    const { prefixCls, value } = this.props;
    return (
      <div ref={(node) => { this.button = node }} className={`${prefixCls}-btn-wapper`}
        onMouseDown={this.onButtonDown.bind(this)}
      >
        {this.isTooltip() ?
          <Tooltip content={this.showNumber(value)}>
            <div style={{ backgroundColor: this.parent().props.color }} className={`${prefixCls}-btn-inner`}></div>
          </Tooltip> :
          <div className={`${prefixCls}-btn-inner`}></div>
        }
      </div>
    )
  }
}

Button.contextTypes = {
  component: PropTypes.any
};

Button.propTypes = {
  prefixCls: PropTypes.string,
}

Button.defaultProps = {
  prefixCls: 'w-slider',
}
