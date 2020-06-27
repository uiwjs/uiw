import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '@uiw/utils';
import { getScrollPercent, getScrollTop, ScrollToAnimate } from './utils';
import './style/index.less';

export interface BackTopProps extends IProps, HTMLDivProps {
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

export default (props: BackTopProps = {}) => {
  const { prefixCls = 'w-back-top', className, content, children, offsetTop = 0, fixed = true, speed = 100, showBelow = 1, clickable = true, ...other } = props;
  const topShowBelow = !fixed ? 0 : (showBelow || 0);
  const [percent, setPercent] = useState(0);
  const [current, setCurrent] = useState(0);
  const visible = percent >= topShowBelow;
  const cls = classnames(prefixCls, className, {
    'no-fixed': !fixed,
    [`${prefixCls}-show`]: visible,
    [`${prefixCls}-hide`]: !visible,
  });
  useEffect(() => {
    window && window.addEventListener('scroll', onScroll);
    return function() {
      window && window.removeEventListener('scroll', onScroll);
    }
  });
  function onScroll() {
    setPercent(getScrollPercent(offsetTop));
    setCurrent(getScrollTop());
  }
  function scrollToTop() {
    ScrollToAnimate(offsetTop, speed, current);
  }
  return (
    <div onClick={() => clickable && scrollToTop()} className={cls} {...other}>
      {content}
      {typeof children !== 'function' ? children : children({ percent, current, scrollToTop: scrollToTop })}
    </div>
  );
}
