/**
 * Overlay 组件
 * ---------------
 * 动画库 react-transition-group 文档
 * 老的文档
 * https://facebook.github.io/react/docs/animation.html
 * 新的文档
 * https://reactcommunity.org/react-transition-group/
 * 动画效果
 * https://daneden.github.io/animate.css/
 */
import React, { cloneElement, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionProps } from 'react-transition-group/Transition';
import Portal, { PortalProps } from '@uiw/react-portal';
import { IProps, noop } from '@uiw/utils';

import './style/index.less';

export interface OverlayProps extends IProps, Omit<TransitionProps, 'timeout'> {
  timeout?: TransitionProps['timeout'];
  isOpen?: boolean;
  usePortal?: boolean;
  maskClosable?: boolean;
  dialogProps?: React.HTMLProps<HTMLElement>;
  backdropProps?: React.HTMLProps<HTMLDivElement>;
  portalProps?: PortalProps;
  hasBackdrop?: boolean;
  unmountOnExit?: boolean;
  transitionName?: string;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onOpening?: (node: HTMLElement, isAppearing: boolean) => void;
  onOpened?: (node: HTMLElement, isAppearing: boolean) => void;
  onClosing?: (node: HTMLElement) => void;
  onClosed?: (node: HTMLElement | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClose?: (evn: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default function Overlay(props: OverlayProps) {
  const {
    className,
    style,
    isOpen: _ = false,
    prefixCls = 'w-overlay',
    usePortal = true,
    maskClosable = true,
    backdropProps = {},
    portalProps = {},
    hasBackdrop = true,
    unmountOnExit = true, // 设置 true 销毁根节点
    timeout = 300,
    transitionName = 'w-overlay',
    // onEnter = noop,
    onOpening = noop,
    onOpened = noop,
    onClosing = noop,
    onClosed = noop,
    onClose = noop,
    children,
    dialogProps = {},
    ...otherProps
  } = props;

  const [isOpen, setIsOpen] = useState(props.isOpen || false);
  const [visible, setVisible] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen !== props.isOpen && props.isOpen) {
      setVisible(true);
    }
    if (isOpen !== props.isOpen && !props.isOpen) {
      overlayWillClose();
      setIsOpen(false);
    }
  }, [props.isOpen]);

  useEffect(() => {
    if (visible) {
      overlayWillOpen();
      setIsOpen(true);
    }
  }, [visible]);

  const decoratedChild =
    typeof children === 'object' ? (
      cloneElement(children, {
        ...dialogProps,
        style: { ...children.props.style, ...dialogProps.style },
        className: [children.props.className, `${prefixCls}-content`].filter(Boolean).join(' ').trim(),
        tabIndex: 0,
      })
    ) : (
      <span {...dialogProps} className={`${prefixCls}-content`}>
        {children}
      </span>
    );

  function handleClosed(node: HTMLElement | React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setVisible(false);
    onClosed && onClosed(node);
  }

  function handleBackdropMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target !== container.current && usePortal) {
      return;
    }
    if (maskClosable && hasBackdrop) {
      overlayWillClose();
      setIsOpen(false);
      onClose && onClose(e);
    }
    backdropProps && backdropProps.onMouseDown && backdropProps.onMouseDown(e);
  }

  function overlayWillOpen() {
    if (hasBackdrop && usePortal) {
      document.body.classList.add(`${prefixCls}-open`);
    }
  }

  function overlayWillClose() {
    if (hasBackdrop && usePortal) {
      document.body.classList.remove(`${prefixCls}-open`);
    }
    // if (unmountOnExit) {
    //   setVisible(false)
    // }
  }

  const TransitionGroupComp = (
    <CSSTransition
      classNames={transitionName}
      unmountOnExit={unmountOnExit}
      timeout={timeout!}
      {...otherProps}
      in={isOpen}
      onEntering={onOpening}
      onEntered={onOpened}
      onExiting={onClosing}
      onExited={handleClosed}
    >
      {(status) => {
        return (
          <div
            style={style}
            ref={overlay}
            className={[
              prefixCls,
              className,
              !usePortal ? `${prefixCls}-inline` : null,
              isOpen ? `${prefixCls}-enter-done` : null,
            ]
              .filter(Boolean)
              .join(' ')
              .trim()}
          >
            {hasBackdrop &&
              cloneElement(<div />, {
                ...backdropProps,
                onMouseDown: handleBackdropMouseDown,
                className: [`${prefixCls}-backdrop`, backdropProps.className].filter(Boolean).join(' ').trim(),
                tabIndex: maskClosable ? 0 : null,
              })}
            {usePortal ? (
              <div ref={container} onMouseDown={handleBackdropMouseDown} className={`${prefixCls}-container`}>
                {cloneElement(decoratedChild, { 'data-status': status })}
              </div>
            ) : (
              cloneElement(decoratedChild, { 'data-status': status })
            )}
          </div>
        );
      }}
    </CSSTransition>
  );
  if (visible && usePortal) {
    return <Portal {...{ ...portalProps }}>{TransitionGroupComp}</Portal>;
  } else {
    return TransitionGroupComp;
  }
}
