import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.range ? props.value : [props.value],
    };
  }
  componentDidMount() {
    const { value, range } = this.props;
    this.setState({ value: range ? value : [value] });
  }
  componentWillReceiveProps(nextPros) {
    if (nextPros.value !== this.props.value) {
      this.setState({
        value: nextPros.range ? nextPros.value : [nextPros.value],
      });
    }
  }
  removeEvent() {
    window.removeEventListener('mousemove', this.onDragging, false);
    window.removeEventListener('mouseup', this.onDragEnd, false);
  }
  onHandleBtnDown(idx, env) {
    const oEvent = env || event;
    const { disabled, vertical, range } = this.props;
    if (disabled) {
      return;
    }
    this.indexBar = idx;
    this.move = true;
    this.startX = oEvent[vertical ? 'clientY' : 'clientX'];
    this.target = oEvent.target;
    this.boxWidth = this.slider[vertical ? 'clientHeight' : 'clientWidth'];
    this.barWidth = this.bar[vertical ? 'clientHeight' : 'clientWidth'];
    this.barOffsetLeft = this.bar[vertical ? 'offsetTop' : 'offsetLeft'];
    const val = this.state.value;
    if (range) {
      if (this.indexBar === 1) {
        this.barWidth = val[1] > val[0] ? this.barWidth + this.barOffsetLeft : this.barOffsetLeft;
      } else {
        this.barWidth = val[0] > val[1] ? this.barWidth + this.barOffsetLeft : this.barOffsetLeft;
      }
    }
    window.addEventListener('mousemove', this.onDragging, true);
    window.addEventListener('mouseup', this.onDragEnd, true);
  }
  onDragging = (env) => {
    if (!this.move) {
      return;
    }
    const { vertical } = this.props;
    const val = this.state.value;
    let value = this.getWidthToValue(env[vertical ? 'clientY' : 'clientX'] - this.startX + this.barWidth);
    if (value !== this.value) {
      val[this.indexBar] = value;
      const barStyl = this.getStyle(val);
      this.bar.style[vertical ? 'top' : 'left'] = barStyl.left;
      this.bar.style[vertical ? 'bottom' : 'right'] = barStyl.right;
      this.onChange(val);
      this.value = value;
    }
  }
  onDragEnd = () => {
    this.move = undefined;
    this.removeEvent();
  }
  getWidthToValue(width) {
    const { step, max, min, vertical } = this.props;

    const equal = (max - min) / step;
    let percent = width / this.slider[vertical ? 'clientHeight' : 'clientWidth'] * 100;

    if (percent <= 0) {
      percent = 0;
    }
    if (percent >= 100) {
      percent = 100;
    }

    const num = equal * (percent / 100) + 0.5;
    const numFloor = Math.floor(num);
    const value = numFloor * step + min;
    return value;
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
  onChange(value) {
    const { onChange} = this.props;
    value = this.getRangeValue(value);
    onChange && onChange(value);
    this.setState({ value });
  }
  onClickMark(env) {
    const { vertical } = this.props;
    const oEvent = env || event;
    if (this.move !== undefined) {
      return;
    }
    const markOffset = this.slider.getBoundingClientRect();
    let value = this.getWidthToValue(oEvent[vertical ? 'clientY' : 'clientX'] - markOffset[vertical ? 'y' : 'x']);
    value = this.getRangeValue(value);
    this.onChange(value);
  }
  getRangeValue(val) {
    if (!this.props.range) {
      return typeof (val) !== 'array' ? [val] : val;
    }
    const { value } = this.state;
    const val1 = value[0];
    const val2 = value[1];
    if (val1 < val2) {
      if (val1 > val) {
        value[0] = val;
      }
      if (val2 < val) {
        value[1] = val;
      }
    }
    if (val1 > val2) {
      if (val1 < val) {
        value[0] = val;
      }
      if (val2 > val) {
        value[1] = val;
      }
    }
    if (val1 > val && val2 < val) {
      const half = val2 + (val1 - val2) / 2;
      if (half >= val) {
        value[1] = val;
      }
      if (half < val) {
        value[0] = val;
      }
    }
    if (val2 > val && val1 < val) {
      const half = val1 + (val2 - val1) / 2;
      if (half >= val) {
        value[0] = val;
      }
      if (half < val) {
        value[1] = val;
      }
    }
    return value;
  }
  stepArray() {
    const { min, max, step } = this.props;
    const equal = (max - min) / step;
    const stepWidth = (100 * step) / (max - min);
    const result = [0];
    for (let i = 1; i < equal; i += 1) {
      result.push(i * stepWidth);
    }
    result.push(100);
    return result;
  }
  getStyle(value) {
    const { range } = this.props;
    value = value || this.state.value;
    const barStyl = { left: '0%', right: '100%' };
    if (!range) {
      barStyl.right = `${100 - this.getValueToPercent(value[0])}%`;
    } else {
      const leftValue = value[0] > value[1] ? value[1] : value[0];
      const rightValue = value[0] > value[1] ? value[0] : value[1];
      barStyl.left = `${this.getValueToPercent(leftValue)}%`;
      barStyl.right = `${100 - this.getValueToPercent(rightValue)}%`;
    }
    return barStyl;
  }
  getInstance = (node) => {
    if (node) {
      this.bar = node;
    }
  }
  render() {
    const { prefixCls, className, value, disabled, max, min, dots, step, range, marks, renderMarks, tooltip, vertical, progress, onChange, ...other } = this.props;
    const barStyl = this.getStyle();
    other.onClick = this.onClickMark.bind(this);
    if (disabled) {
      delete other.onClick;
    }
    return (
      <div
        ref={node => this.slider = node}
        className={classnames(prefixCls, className, {
          disabled,
          [`${prefixCls}-with-marks`]: marks,
          [`${prefixCls}-vertical`]: vertical,
        })}
        {...other}
      >
        <div
          className={classnames(`${prefixCls}-bar`)}
          style={{
            [vertical ? 'top' : 'left']: barStyl.left,
            [vertical ? 'bottom' : 'right']: barStyl.right,
            backgroundColor: progress || 'initial',
          }}
          ref={this.getInstance}
        />
        {this.state.value.map((item, idx) => {
          const lleftPostion = this.getValueToPercent(item);
          return (
            <div
              key={idx}
              className={classnames(`${prefixCls}-handle`)}
              onMouseDown={this.onHandleBtnDown.bind(this, idx)}
              style={{ [vertical ? 'top' : 'left']: `${lleftPostion}%` }}
            >
              {(tooltip || tooltip === false) && <div className={classnames(`${prefixCls}-tooltip`, { open: tooltip })}>{this.getLabelValue(item)}</div>}
            </div>
          );
        })}
        {dots && (
          <div className={classnames(`${prefixCls}-dots`)}>
            {this.stepArray().map((val, idx) => {
              const stepValue = idx * step + min;
              return (
                <div
                  key={idx}
                  style={{
                    [vertical ? 'top' : 'left']: `${val}%`,
                  }}
                  className={classnames(`${prefixCls}-mark`, {
                    'no-marks': marks && marks !== true && !marks[stepValue],
                  })}
                >
                  {marks === true && <div {...(disabled ? {} : { onClick: this.onChange.bind(this, stepValue) })}> {this.getLabelValue(stepValue)} </div>}
                  {marks !== true && marks && marks[stepValue] && (
                    <div style={marks[stepValue].style} {...(disabled ? {} : { onClick: this.onChange.bind(this, stepValue) })}>
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
  value: PropTypes.oneOfType([ PropTypes.number, PropTypes.array ]),
  min: PropTypes.number,
  max: PropTypes.number,
  marks: PropTypes.oneOfType([
    PropTypes.object, PropTypes.bool,
  ]),
  renderMarks: PropTypes.func,
  dots: PropTypes.bool,
  range: PropTypes.bool,
  vertical: PropTypes.bool,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  progress: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  tooltip: PropTypes.bool,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  prefixCls: 'w-slider',
  value: 0,
  min: 0,
  max: 100,
  dots: false,
  range: false,
  step: 1,
  disabled: false,
  progress: true,
  tooltip: false,
};
