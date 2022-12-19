import React, { useState, useEffect } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import { getScrollPercent, getScrollTop, scrollToAnimate } from './utils';
import { BackTopStyleWarp } from './style';
export * from './style';

interface ChildrenFunction {
  scrollToTop: () => void;
  percent: number;
  current: number;
}

export interface BackTopStyleProps extends IProps, Omit<HTMLDivProps, 'children'> {
  offsetTop?: number;
  clickable?: boolean;
  content?: JSX.Element | string;
  fixed?: boolean;
  /**
   * 滚动距离多少时显示组件
   */
  showBelow?: number;
  speed?: number;
  children?: React.ReactNode | ((props: ChildrenFunction) => React.ReactNode);
  element?: HTMLElement;
}

export interface IBackTopState {
  percent: number;
  current: number;
}

const BackTopStyleBase = React.forwardRef<HTMLDivElement, BackTopStyleProps>((props, ref) => {
  const {
    prefixCls = 'w-back-top',
    className,
    content,
    children,
    offsetTop = 0,
    fixed = true,
    speed = 100,
    showBelow = 1,
    clickable = true,
    ...other
  } = props;
  const topShowBelow = fixed ? showBelow : 0;
  const [percent, setPercent] = useState(0);
  const [current, setCurrent] = useState(0);

  const visible = percent >= topShowBelow;

  const cls = [
    prefixCls,
    className,
    !fixed ? 'no-fixed' : null,
    visible ? `${prefixCls}-show` : null,
    !visible ? `${prefixCls}-hide` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  const styles: React.CSSProperties = {
    width: 'inherit !important',
    height: 'inherit !important',
    position: fixed ? 'fixed' : 'sticky',
    opacity: offsetTop === 0 ? 1 : 0,
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return function () {
      window && window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScroll = () => {
    setPercent(getScrollPercent(offsetTop));
    setCurrent(getScrollTop());
  };

  const scrollToTop = () => {
    if (typeof offsetTop === 'number' && typeof speed === 'number' && typeof current === 'number') {
      scrollToAnimate(offsetTop, speed, current);
    }
  };

  return (
    <BackTopStyleWarp
      className={cls}
      top={offsetTop}
      as={BackTopStyleWarp}
      onClick={() => clickable && scrollToTop()}
      size={undefined}
      visible={visible.toString()}
      fixed={`${fixed}`}
      {...other}
      style={styles}
    >
      {content}
      {typeof children !== 'function' ? children : children({ percent, current, scrollToTop: scrollToTop })}
    </BackTopStyleWarp>
  );
});

export default BackTopStyleBase;
