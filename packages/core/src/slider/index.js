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
    let percent = Math.floor(point / this.boxWidth * 1000000) / 10000;
    if (percent <= 0) {
      percent = 0;
    }
    if (percent >= 100) {
      percent = 100;
    }
    this.target.style.left = `${percent}%`;
    this.bar.style.right = `${100 - percent}%`;
    const { min, max } = this.props;
    onChange && onChange(Math.floor(min + (percent * (max - min) / 100)));
  }
  onDragEnd = () => {
    this.move = false;
    this.removeEvent();
  }
  getInstance = (node) => {
    if (node) {
      this.bar = node;
    }
  }
  render() {
    const { prefixCls, className, value, disabled, ...other } = this.props;
    return (
      <div className={classnames(prefixCls, className, { disabled })} {...other}>
        <div
          className={classnames(`${prefixCls}-bar`)}
          style={{ left: '0%', right: `${100 - value}%` }}
          ref={this.getInstance}
        />
        <div
          className={classnames(`${prefixCls}-handle`)}
          onMouseDown={this.onHandleBtnDown.bind(this)}
          style={{ left: `${this.props.value}%` }}
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
