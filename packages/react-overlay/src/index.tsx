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
import { TransitionProps, TransitionStatus } from 'react-transition-group/Transition';
import Portal, { PortalProps } from '@uiw/react-portal';
import { GetStyledCloneComponent, IProps, noop } from '@uiw/utils';

// import './style/index.less';
import { ContainerWrap, ContentWrap, OverlayWrap, BackdropWrap } from './style';

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

export type transProps = 'enterActive' | 'exitActive' | 'done' | undefined;

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
    onEnter = noop,
    onExiting = noop,
    onEntering = noop,
    onEntered = noop,
    onExit = noop,
    children,
    dialogProps = {},
    ...otherProps
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>();
  // const [isOpen, setIsOpen] = useState(props.isOpen || false);
  const [visible, setVisible] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const overlay = useRef(null);
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
      cloneElement(<ContentWrap as={GetStyledCloneComponent}>{children}</ContentWrap>, {
        ...dialogProps,
        style: { ...children.props.style, ...dialogProps.style },
        className: [children.props.className, `${prefixCls}-content`].filter(Boolean).join(' ').trim(),
        tabIndex: 0,
      })
    ) : (
      <ContentWrap {...dialogProps} className={`${prefixCls}-content`}>
        {children}
      </ContentWrap>
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
  const [trans, transSet] = useState<transProps>(undefined);

  const TransitionGroupComp = (
    <CSSTransition
      // as={CSSTransition}
      classNames={transitionName}
      unmountOnExit={unmountOnExit}
      timeout={timeout!}
      in={isOpen}
      onEnter={(isAppearing: boolean) => {
        // isEnterSet(true)
        // isExitSet(false)

        onEnter(overlay.current!, isAppearing);
      }}
      onEntering={(isAppearing: boolean) => {
        transSet('enterActive');
        onOpening(overlay.current!, isAppearing);
        onEntering(overlay.current!);
      }}
      onEntered={(isAppearing: boolean) => {
        // isEnterSet(true)

        onOpened(overlay.current!, isAppearing);
        onEntered(overlay.current!);
      }}
      onExiting={() => {
        transSet('exitActive');
        onClosing(overlay.current!);
        onExiting(overlay.current!);
      }}
      onExited={() => {
        transSet('done');
        handleClosed(overlay.current!);
        onExit(overlay.current!);
      }}
      ref={cssTransRef}
      nodeRef={overlay}
      {...otherProps}
    >
      {(status: TransitionStatus) => {
        return (
          <OverlayWrap
            // isEnter={isEnter}
            // isActive={isActive}
            // isExit={isExit}
            isOpen={isOpen}
            style={style}
            ref={overlay}
            usePortal={usePortal}
            status={status}
            isOpen={isOpen}
            trans={trans}
            openClass={visible && hasBackdrop && usePortal}
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
              cloneElement(<BackdropWrap />, {
                ...backdropProps,
                trans,
                onMouseDown: handleBackdropMouseDown,
                className: [`${prefixCls}-backdrop`, backdropProps.className].filter(Boolean).join(' ').trim(),
                tabIndex: maskClosable ? 0 : null,
              })}
            {usePortal ? (
              <ContainerWrap ref={container} onMouseDown={handleBackdropMouseDown} className={`${prefixCls}-container`}>
                {cloneElement(decoratedChild, { 'data-status': status })}
              </ContainerWrap>
            ) : (
              cloneElement(decoratedChild, { 'data-status': status })
            )}
          </OverlayWrap>
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

export { ContainerWrap, ContentWrap, OverlayWrap, BackdropWrap };
