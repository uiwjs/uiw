import React from 'react';
import classnames from 'classnames';
import { getScrollPercent, getScrollTop, ScrollToAnimate } from './utils';
import { IProps, HTMLDivProps } from '../utils/props';
import './style/index.less';

export interface IBackTopProps extends IProps, HTMLDivProps {
  offsetTop?: number;
  clickable?: boolean;
  content?: JSX.Element | string;
  fixed?: boolean;
  /**
   * 滚动距离多少时显示组件
   */
  showBelow?: number;
  speed?: number;
}

export interface IBackTopState {
  percent: number;
  current: number;
}

export default class BackTop extends React.Component<IBackTopProps, IBackTopState> {
  public static defaultProps: IBackTopProps = {
    prefixCls: 'w-back-top',
    offsetTop: 0,
    clickable: true,
    fixed: true,
    showBelow: 1,
    speed: 100,
  }
  public state = {
    percent: 0,
    current: 0,
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
  }
  public render() {
    const { prefixCls, className, content, children, offsetTop, fixed, speed, showBelow, clickable, ...other } = this.props;
    const topShowBelow = !fixed ? 0 : (showBelow || 0);
    const visible = this.state.percent >= topShowBelow;
    const cls = classnames(prefixCls, className, {
      'no-fixed': !fixed,
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
