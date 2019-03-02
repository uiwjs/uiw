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
  componentDidMount() {
    const { value } = this.props;
    this.setState({
      value: this.getLabelValue(value),
    });
  }
  componentWillReceiveProps(nextPros) {
    if (nextPros.value !== this.props.value) {
      const { value } = this.props;
      this.setState({
        value: this.getLabelValue(value),
      });
    }
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

    const pointCount = (max - min) / step;
    // Value move to
    const num = pointCount * (percent / 100) + 0.5;
    const numFloor = Math.floor(num);
    const value = numFloor * step + min;
    if (value !== this.value) {
      this.target.style.left = `${this.getValueToPercent(value)}%`;
      this.bar.style.right = `${100 - this.getValueToPercent(value)}%`;
      onChange && onChange(value);
      this.setState({ value: this.getLabelValue(value) });
      this.value = value;
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
  getLabelValue(value) {
    const { marks, renderMarks } = this.props;
    if (marks && marks[value] && marks[value].label) {
      return marks[value].label;
    } else if (marks && marks[value] && typeof marks[value] === 'string') {
      return marks[value];
    } else if (renderMarks && typeof renderMarks === 'function' && renderMarks(value)) {
      return renderMarks(value);
    }
    return value;
  }
  stepArray() {
    const { min, max, step } = this.props;
    const pointCount = (max - min) / step;
    const stepWidth = (100 * step) / (max - min);
    const result = [0];
    for (let i = 1; i < pointCount; i += 1) {
      result.push(i * stepWidth);
    }
    result.push(100);
    return result;
  }
  getInstance = (node) => {
    if (node) {
      this.bar = node;
    }
  }
  render() {
    const { prefixCls, className, value, disabled, max, min, dots, step, marks, renderMarks, tooltip, progress, ...other } = this.props;
    const leftPostion = this.getValueToPercent(value);
    return (
      <div className={classnames(prefixCls, className, { disabled, [`${prefixCls}-with-marks`]: marks })} {...other}>
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
              const stepValue = idx * step + min;
              return (
                <div
                  key={idx}
                  style={{ left: `${val}%` }}
                  className={classnames(`${prefixCls}-mark`, {
                    'no-marks': marks && marks !== true && !marks[stepValue],
                  })}
                >
                  {marks === true && <div> {this.getLabelValue(stepValue)} </div>}
                  {marks !== true && marks && marks[stepValue] && (
                    <div style={marks[stepValue].style}>
                      {this.getLabelValue(stepValue)}
                    </div>
                  )}
                </div>
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
  marks: PropTypes.oneOfType([
    PropTypes.object, PropTypes.bool,
  ]),
  renderMarks: PropTypes.func,
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
