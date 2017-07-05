import React from 'react';
// import ReactDOM from 'react-dom';
import { Component, PropTypes } from '../utils/';
import Tooltip from '../tooltip/';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
    this.onDragging = this.onDragging.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  componentDidMount() {
    let num = this.getValue()
    this.setState({
      value: num
    })
    this.startPoint = num;
    this.setButtonPosition(num);
    this.parent().setBarPosition(num)
  }
  parent() {
    return this.context.component;
  }
  getValue() {
    return this.parent().props.value;
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
  setButtonPosition(num) {
    if (this.isVertical()) {
      this.refs.button.style.bottom = num + '%';
    } else {
      this.refs.button.style.left = num + '%';
    }
  }
  onDragging(event) {
    let count = this.parent().getSliderSize();
    let currentX = event.clientX;
    let currentY = event.clientY;
    let move = (this.isVertical() ? (this.startY - currentY) : (currentX - this.startX)) / count * 100;
    let startPoint = this.startPoint + parseInt(move, 10);
    if (startPoint > this.getMax() || startPoint < this.getMin()) return;

    this.parent().isDragging(true);

    if (
      this.startPoint !== startPoint &&
      this.currentPoint !== startPoint
    ) {
      this.currentPoint = startPoint
      this.setButtonPosition(startPoint)
      this.setState({
        value: startPoint
      })
      this.parent().setBarPosition(startPoint)
      this.parent().props.onDragChange(this.parent(), startPoint);
    }
  }
  onDragEnd(event) {
    window.removeEventListener('mousemove', this.onDragging, true);
    window.removeEventListener('mouseup', this.onDragEnd, true);
    let startPoint = parseInt(this.refs.button.style[this.isVertical() ? 'bottom' : 'left'], 10) || 0;
    if (this.startPoint !== startPoint) {
      this.parent().props.onChange(this.parent(), startPoint);
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
  render() {
    const { prefixCls } = this.props;
    return (
      <div ref="button" className={`${prefixCls}-btn-wapper`}
        onMouseDown={this.onButtonDown.bind(this)}
      >
        {this.isTooltip() ?
          <Tooltip content={this.state.value}>
            <div className={`${prefixCls}-btn-inner`}></div>
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
