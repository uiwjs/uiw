import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Slider extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      style: {
        left: '0%',
        right: `${100 - props.value}%`,
      }
    };
  }
  removeEvent() {
    window.removeEventListener('mousemove', this.onDragging, false);
    window.removeEventListener('mouseup', this.onDragEnd, false);
  }
  onHandleBtnDown() {
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
    onChange && onChange(Math.floor(percent));
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
    const { prefixCls, className, value, ...other } = this.props;
    console.log('value:', value);
    return (
      <div className={classnames(prefixCls, className)}>
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
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  prefixCls: 'w-slider',
  value: 0,
};
