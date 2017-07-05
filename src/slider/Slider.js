import React from 'react';
import { Component, PropTypes } from '../utils/';
import Button from './Button';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: props.value
    }
  }
  getChildContext() {
    return {
      component: this
    };
  }
  getSliderSize() {
    const { slider } = this.refs;
    return parseInt(this.props.vertical ? slider.offsetHeight : slider.offsetWidth, 10);
  }
  isRange() {
    const { value } = this.props;
    if (value instanceof Array && value.length > 1) return true;
    return false;
  }
  isDragging(bool) {
    this.dragging = bool
  }
  setBarPosition(num) {
    const { vertical } = this.props;
    this.refs.bar.style[vertical ? 'height' : 'width'] = num + '%';
    this.setState({
      currentValue: num
    })
  }
  onSliderClick(event) {
    if (this.dragging) return;
    const { vertical, max, min } = this.props;
    if (this.props.disabled) return;
    const sliderOffset = this.refs.slider.getBoundingClientRect();
    let sliderOffsetValue = 0
    if (vertical) {
      sliderOffsetValue = (sliderOffset.bottom - event.clientY) / this.getSliderSize() * 100;
    } else {
      sliderOffsetValue = ((event.clientX - sliderOffset.left) / this.getSliderSize() * 100)
    }
    sliderOffsetValue = parseInt(sliderOffsetValue, 10);
    if (sliderOffsetValue > max || sliderOffsetValue < min) return;
    this.setBarPosition(sliderOffsetValue);
    this.refs.btn1.refs.button.style[vertical ? 'bottom' : 'left'] = sliderOffsetValue + '%';
    this.refs.btn1.startPoint = sliderOffsetValue;
    this.refs.btn1.setState({
      value: sliderOffsetValue
    })
  }
  stepArray() {
    const { min, max, step } = this.props;
    const pointCount = (max - min) / step;
    const stepWidth = 100 * step / (max - min);
    const result = [];
    for (let i = 1; i < pointCount; i++) {
      result.push(i * stepWidth);
    }
    return result
  }
  render() {
    const { prefixCls, marks, className, style, disabled, vertical } = this.props;
    const { currentValue } = this.state;
    return (
      <div ref="slider" style={style}
        className={this.classNames(`${prefixCls}`, className, {
          'w-disabled': disabled,
          [`${prefixCls}-vertical`]: vertical,
        })}
        onClick={this.onSliderClick.bind(this)}
      >
        <div className={this.classNames(`${prefixCls}-track`)}>
          <div ref="bar" className={`${prefixCls}-bar`}> </div>
          <Button ref="btn1" />
          {
            this.isRange() && <Button ref="btn2" />
          }
          {
            marks && this.stepArray().map((item, idx) => {
              return (
                <div key={idx} className={this.classNames(`${prefixCls}-step`, {
                  [`w-active`]: item < currentValue
                })} style={vertical ? { 'bottom': item + '%' } : { 'left': item + '%' }}>
                </div>
              )
            })
          }
          {
            marks && <div className={`${prefixCls}-marks`}>
              {
                Object.keys(marks).map((item, idx) => {
                  console.log("item, idx:", item, idx)
                  return (
                    <div key={idx} className={this.classNames(`${prefixCls}-marks-text`, {
                      [`w-active`]: item < currentValue
                    })}
                      style={vertical ? { 'bottom': item + '%' } : { 'left': item + '%' }}
                    >{marks[item]}</div>
                  )
                })
              }
            </div>
          }
        </div>
      </div >
    )
  }
}

Slider.childContextTypes = {
  component: PropTypes.any
};

Slider.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  marks: PropTypes.object,
  tooltip: PropTypes.bool,
  disabled: PropTypes.bool,
  vertical: PropTypes.bool,
  onChange: PropTypes.func,
}

Slider.defaultProps = {
  prefixCls: 'w-slider',
  value: 0,
  max: 100,
  min: 0,
  step: 1,
  tooltip: true,
  disabled: false,
  vertical: false,
  onChange() { },
  onDragChange() { }
}
