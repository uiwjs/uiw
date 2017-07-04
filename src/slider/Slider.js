import React from 'react';
import { Component, PropTypes } from '../utils/';
import Button from './Button';

export default class Slider extends Component {
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
  setBarPosition(num) {
    const { vertical } = this.props;
    this.refs.bar.style[vertical ? 'height' : 'width'] = num + '%';
  }
  onSliderClick(event) {
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
    this.refs.bar.style[vertical ? 'height' : 'width'] = sliderOffsetValue + '%';
    this.refs.btn1.refs.button.style[vertical ? 'bottom' : 'left'] = sliderOffsetValue + '%';
    this.refs.btn1.startPoint = parseInt(sliderOffsetValue, 10);
  }
  render() {
    const { prefixCls, className, style, disabled, vertical } = this.props;
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
        </div>
      </div>
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
  tooltip: true,
  disabled: false,
  vertical: false,
  onChange() { },
  onDragChange() { }
}
