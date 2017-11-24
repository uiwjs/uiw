import React from 'react';
import SlickCarousel from 'react-slick';
import { Component, PropTypes } from '../utils/';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onWindowResized = this.onWindowResized.bind(this);
  }

  componentDidMount() {
    const { autoplay } = this.props;
    if (autoplay) {
      window.addEventListener('resize', this.onWindowResized);
    }
    this.innerSlider = this.slickcarousel && this.slickcarousel.innerSlider;
  }
  componentWillMount() {
    const { autoplay } = this.props;
    if (autoplay) {
      window.removeEventListener('resize', this.onWindowResized);
    }
  }

  // 自动切换
  onWindowResized() {
    const { autoplay } = this.props;
    if (autoplay && this.slickcarousel && this.slickcarousel.innerSlider && this.slickcarousel.innerSlider.autoPlay) {
      this.slickcarousel.innerSlider.autoPlay();
    }
  }

  render() {
    const props = { ...this.props };
    props.fade = props.effect === 'fade';
    let cls = props.prefixCls;
    if (props.vertical) {
      cls = this.classNames(cls, `${cls}-vertical`, {
        [props.className]: props.className,
      });
    }
    return (
      <div className={cls} style={props.style} >
        <SlickCarousel
          ref={(component) => { this.slickcarousel = component; }}
          {...props}
        />
      </div>
    );
  }
}

Carousel.defaultProps = {
  arrows: false, // 左右箭头
  prefixCls: 'w-carousel',
  draggable: false, // 拖拽切换
  fade: false, // 切换效果(渐显)
  dots: true, // 是否显示下标
};
Carousel.propTypes = {
  effect: PropTypes.oneOf(['scrollx', 'fade']),
  dots: PropTypes.bool,
  vertical: PropTypes.bool,
  autoplay: PropTypes.bool,
  easing: PropTypes.string,
  prefixCls: PropTypes.string,
  beforeChange: PropTypes.func,
  afterChange: PropTypes.func,
  fade: PropTypes.bool,
  focusOnSelect: PropTypes.bool,
  initialSlide: PropTypes.number,
  slide: PropTypes.string,
  draggable: PropTypes.bool,
  arrows: PropTypes.bool,
  nextArrow: PropTypes.any,
  prevArrow: PropTypes.any,
};
