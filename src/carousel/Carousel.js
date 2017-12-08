import React from 'react';
// import SlickCarousel from 'react-slick';
import { Component, PropTypes } from '../utils/';

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = (mediaQuery) => {
    return {
      media: mediaQuery,
      matches: false,
      addListener() { },
      removeListener() { },
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}
// Use require over import (will be lifted up)
// make sure matchMedia polyfill run before require('react-slick')
const SlickCarousel = require('react-slick').default;

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
  next() {
    // https://github.com/akiran/react-slick/blob/master/examples/PreviousNextMethods.js
    this.slickcarousel.slickNext();
  }
  prev() {
    this.slickcarousel.slickPrev();
  }
  goTo(num) {
    // https://github.com/akiran/react-slick/blob/master/examples/SlickGoTo.js
    this.slickcarousel.slickGoTo(num);
  }
  render() {
    const { prefixCls } = this.props;
    const props = { ...this.props };
    props.fade = props.effect === 'fade';
    const cls = this.classNames(prefixCls, {
      [`${prefixCls}-vertical`]: props.vertical,
      [props.className]: props.className,
    });

    return (
      <div className={cls} style={props.style} >
        <SlickCarousel ref={(node) => { this.slickcarousel = node; }} {...props} />
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
