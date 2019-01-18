import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getScrollPercent, getScrollTop, ScrollToAnimate } from './utils';
import './style/index.less';

export default class BackTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      current: 0,
    };
  }
  componentDidMount() {
    window && window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount() {
    window && window.removeEventListener('scroll', this.onScroll);
  }
  onScroll = () => {
    this.setState({ percent: getScrollPercent(this.props.offsetTop), current: getScrollTop() });
  }
  scrollToTop() {
    ScrollToAnimate(this.props.offsetTop, this.props.speed, this.state.current);
  };
  render() {
    const { prefixCls, className, content, children, offsetTop, fixed, speed, showBelow, clickable, ...other } = this.props;
    const topShowBelow = !fixed ? 0 : showBelow;
    let visible = this.state.percent >= topShowBelow;
    const cls = classnames(prefixCls, className, {
      [`no-fixed`]: !fixed,
      [`${prefixCls}-show`]: visible,
      [`${prefixCls}-hide`]: !visible,
    });
    return (
      <div onClick={() => clickable && this.scrollToTop()} className={cls} {...other}>
        {content}
        {typeof children !== 'function' ? children : children({ ...this.state, scrollToTop: this.scrollToTop.bind(this) })}
      </div>
    );
  }
}

BackTop.propTypes = {
  prefixCls: PropTypes.string,
  offsetTop: PropTypes.number,
  clickable: PropTypes.bool,
  fixed: PropTypes.bool,
  showBelow: PropTypes.number,
  speed: PropTypes.number,
};

BackTop.defaultProps = {
  prefixCls: 'w-back-top',
  offsetTop: 0,
  clickable: true,
  fixed: true,
  showBelow: 1,
  speed: 100,
};
