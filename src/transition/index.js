import React from 'react';
import Transition, { ENTERED, ENTERING, EXITING, EXITED } from 'react-transition-group/Transition'
import { Component, PropTypes } from '../utils/';
import "./style/index.less";

/**
 * 老的文档
 * https://facebook.github.io/react/docs/animation.html
 * 新的文档
 * https://reactcommunity.org/react-transition-group/
 * 动画效果
 * https://daneden.github.io/animate.css/
 */
export default class Animate extends Component {
  constructor(...args) {
    super(...args);
    this.state = { in: false }
  }

  componentDidMount() {
    if (this.props.animateOnMount || this.props.in === true) {
      this.setState({ in: true })
    }
  }

  componentWillUnmount() {
    if (this.props.animateOnMount) {
      this.setState({ in: false })
    }
  }

  componentWillReceiveProps(nextProps) {
    /* istanbul ignore next */
    if (nextProps.in === undefined) return

    this.setState({
      in: nextProps.in
    })
  }
  render() {
    // // 动画结束删除根节点
    // if (!this.props.visible) {
    //   return false;
    // }
    const { prefixCls, sequence, className, wait, children, duration, ...other } = this.props;
    const transitionIn = this.state.in

    const timeout = {
      enter: wait,
      exit: wait
    }
    // 样式动画
    const sequenceClassNames = sequence ? sequence.split(' ').map(s => `is-${s}`).join(' ') : null;
    const animationStyles = {
      [ENTERING]: 'is-mounting',
      [ENTERED]: 'is-mounted',
      [EXITING]: 'is-unmounting',
      [EXITED]: 'is-unmounted'
    }
    const childStyle = (child) => {
      return Object.assign({}, child.props.style, {
        transitionDuration: `${duration}ms`
      })
    }
    const childClassName = (child, transitionStatus) => {
      return this.classNames(
        prefixCls,
        className,
        sequenceClassNames,
        transitionStatus && animationStyles[transitionStatus],
        child.props.className
      )
    }
    return (
      <Transition
        {...other}
        className={prefixCls}
        in={transitionIn}
        timeout={timeout}
      >
        {status => React.cloneElement(children, {
          className: childClassName(children, status),
          style: childStyle(children)
        })}
      </Transition>
    )
  }
}

Animate.propTypes = {
  animateOnMount: PropTypes.bool,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  duration: PropTypes.number,
  in: PropTypes.bool,
  sequence: PropTypes.string,
  wait: PropTypes.number
};
Animate.defaultProps = {
  prefixCls: "w-animate",
  animateOnMount: true, // 安装动画
  duration: 200,        // 持续时间
  wait: 0
};