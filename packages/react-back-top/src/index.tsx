import React, { useState, useEffect } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import { getScrollPercent, getScrollTop, scrollToAnimate } from './utils';
import { BackTopStyleWarp } from './style';
import BackToUp, { BackToUpProps } from '@uiw/react-back-to-top';
import styled from 'styled-components';
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

const Warpper = styled.div`
  overflow: auto;
  white-space: normal;
  width: 300px;
  height: 300px;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    background: #00000038;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #595959;
  }
  p {
    display: inline;
    background: rgba(0, 0, 0, 0.12);
    color: transparent;
  }
`;

const BackTopStyleBase = (props: BackTopStyleProps) => {
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
  const topShowBelow = !fixed ? 0 : showBelow || 0;
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

  const handleScroll = () => {
    const { clientHeight, scrollHeight, scrollTop } = props.element!;
    const percentage = scrollTop / (scrollHeight - clientHeight);
    const percent = Number.parseInt(Number.parseFloat(`${Number(percentage.toFixed(2)) * 100}`).toString());
    setPercent(percent);
    // if ($dom.current && top > 0) {
    //   $dom.current.style.opacity = scrollTop > top ? '1' : '0';
    // }
  };

  useEffect(() => {
    props.element?.addEventListener('scroll', handleScroll);
  }, [props.element]);

  console.log('content: ', content);
  return (
    <Warpper>
      <BackTopStyleWarp
        {...other}
        top={showBelow}
        className={cls}
        // onClick={() => console.log(123)}
        // fixed={fixed}
        // visible={visible}
        //   ref={ref}
      >
        {content}
        {typeof children !== 'function' ? children : children({ percent, current, scrollToTop: () => {} })}
      </BackTopStyleWarp>
    </Warpper>
  );
};

export default BackTopStyleBase;
// prefixCls?: string;
// /** Scroll bar area @default document.documentElement */
// element?: HTMLElement | null;
// /** Whether to use smooth scrolling* @default true */
// smooth?: boolean;
// /** Classname to add/override styling (note, !important for overrides might be needed) */
// className?: string;
// /** Object to add/override styling */
// style?: React.CSSProperties;
// /** Height after page scroll to be visible @default 120 */
// top?: number;
// /** The Button width & height @default 35 */
// size?: number;
// /** the width of the progress bar */
// strokeWidth?: number;
// /** hide progress icon */
// hideProgress?: boolean;
