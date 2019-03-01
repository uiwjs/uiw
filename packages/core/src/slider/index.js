import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }
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
    const { onChange, step, max, min } = this.props;
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
    let value = Math.floor(percent / 100 * 100) * (max - min) / 100;
    if (value !== this.value && value % step === 0) {
      value += min
      this.value = value;
      onChange && onChange(value);
      this.setState({ value });
    }
  }
  onDragEnd = () => {
    this.move = false;
    this.removeEvent();
  }
  getValueToPercent(value) {
    const { min, max } = this.props;
    return ((value - min) * 100) / (max - min);
  }
  stepArray() {
    const { min, max, step } = this.props;
    const pointCount = (max - min) / step;
    const stepWidth = (100 * step) / (max - min);
    const result = [];
    for (let i = 1; i < pointCount; i += 1) {
      result.push(i * stepWidth);
    }
    return result;
  }
  getInstance = (node) => {
    if (node) {
      this.bar = node;
    }
  }
  render() {
    const { prefixCls, className, value, disabled, max, min, dots, tooltip, progress, ...other } = this.props;
    const leftPostion = this.getValueToPercent(value);
    return (
      <div className={classnames(prefixCls, className, { disabled })} {...other}>
        <div
          className={classnames(`${prefixCls}-bar`)}
          style={{ left: '0%', right: `${100 - leftPostion}%`, backgroundColor: progress ? '' : 'initial' }}
          ref={this.getInstance}
        />
        <div
          className={classnames(`${prefixCls}-handle`)}
          onMouseDown={this.onHandleBtnDown.bind(this)}
          style={{ left: `${leftPostion}%` }}
        >
          {(tooltip || tooltip === false) && <div className={classnames(`${prefixCls}-tooltip`, { open: tooltip })}>{this.state.value}</div>}
        </div>
        {dots && (
          <div className={classnames(`${prefixCls}-dots`)}>
            {this.stepArray().map((val, idx) => {
              return (
                <div key={idx} style={{ left: `${val}%` }}></div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

Slider.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  dots: PropTypes.bool,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  progress: PropTypes.bool,
  tooltip: PropTypes.bool,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  prefixCls: 'w-slider',
  value: 0,
  min: 0,
  max: 100,
  dots: false,
  step: 1,
  disabled: false,
  progress: true,
  tooltip: false,
};
