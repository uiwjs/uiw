import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Slider extends React.Component {
  removeEvent() {
    window.removeEventListener('mousemove', this.onDragging, false);
    window.removeEventListener('mouseup', this.onDragEnd, false);
  }
  onHandleBtnDown() {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    this.move = true;
    this.startX = event.clientX;
    this.target = event.target;
    this.boxWidth = event.target.parentNode.clientWidth;
    this.barWidth = this.bar.clientWidth;
    window.addEventListener('mousemove', this.onDragging, true);
    window.addEventListener('mouseup', this.onDragEnd, true);
  }
  onDragging = (env) => {
    if (!this.move) {
      return;
    }
    const { onChange } = this.props;
    const point = env.clientX - this.startX + this.barWidth;
    let percent = point / this.boxWidth * 100;
    if (percent <= 0) {
      percent = 0;
    }
    if (percent >= 100) {
      percent = 100;
    }
    this.target.style.left = `${percent}%`;
    this.bar.style.right = `${100 - percent}%`;
    const value = Math.floor(this.getPercentToValue(percent));
    if (value !== this.value) {
      onChange && onChange(value);
      this.value = value;
    }
  }
  onDragEnd = () => {
    this.move = false;
    this.removeEvent();
  }
  getPercentToValue(percent) {
    const { min, max } = this.props;
    return min + (percent * (max - min) / 100);
  }
  getValueToPercent(value) {
    const { min, max } = this.props;
    return ((value - min) * 100) / (max - min);
  }
  getInstance = (node) => {
    if (node) {
      this.bar = node;
    }
  }
  render() {
    const { prefixCls, className, value, disabled, max, min, ...other } = this.props;
    const leftPostion = this.getValueToPercent(value);
    return (
      <div className={classnames(prefixCls, className, { disabled })} {...other}>
        <div
          className={classnames(`${prefixCls}-bar`)}
          style={{ left: '0%', right: `${100 - leftPostion}%` }}
          ref={this.getInstance}
        />
        <div
          className={classnames(`${prefixCls}-handle`)}
          onMouseDown={this.onHandleBtnDown.bind(this)}
          style={{ left: `${leftPostion}%` }}
        />
      </div>
    );
  }
}

Slider.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  prefixCls: 'w-slider',
  value: 0,
  min: 0,
  max: 100,
  disabled: false,
};
