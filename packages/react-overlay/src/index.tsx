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

import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { TransitionProps } from 'react-transition-group/Transition';
import classnames from 'classnames';
import Portal, { PortalProps } from '@uiw/react-portal';
import { IProps } from '@uiw/utils';

import './style/index.less';

const noop = () => undefined;

export interface OverlayProps extends IProps, Omit<TransitionProps, 'timeout'> {
  timeout?: TransitionProps['timeout'];
  isOpen?: boolean;
  usePortal?: boolean;
  maskClosable?: boolean;
  dialogProps?: React.HTMLProps<HTMLElement>
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
  children?: any;
}

export interface OverlayState {
  isMount: boolean;
  isOpen: boolean;
}

export default class Overlay extends React.Component<OverlayProps, OverlayState> {
  public static defaultProps: OverlayProps = {
    isOpen: false,
    prefixCls: 'w-overlay',
    usePortal: true,
    maskClosable: true,
    backdropProps: {},
    portalProps: {},
    hasBackdrop: true,
    unmountOnExit: true, // 设置 true 销毁根节点
    timeout: 300,
    transitionName: 'w-overlay',
    onEnter: noop,
    onOpening: noop,
    onOpened: noop,
    onClosing: noop,
    onClosed: noop,
    onClose: noop,
  }
  public container!: HTMLDivElement | null;
  constructor(props: OverlayProps) {
    super(props);
    this.state = {
      isMount: false,
      isOpen: props.isOpen as boolean,
    };
  }
  componentDidMount() {
    if (this.props.isOpen) {
      this.overlayWillOpen();
    }
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentClick, false);
  }
  overlayWillClose() {
    const { prefixCls } = this.props;
    document.removeEventListener('mousedown', this.handleDocumentClick, false);
    document.body.classList.remove(`${prefixCls}-open`);
    this.setState({ isOpen: false });
  }
  handleDocumentClick = (e: MouseEvent | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { maskClosable, onClose } = this.props;
    const { isOpen } = this.state;
    const domNode = ReactDOM.findDOMNode(this);
    if (isOpen && maskClosable && domNode && (domNode.nextSibling === e.target || domNode.nextElementSibling === e.target)) {
      this.setState({ isMount: false }, () => {
        onClose && onClose(e as React.MouseEvent<HTMLButtonElement, MouseEvent>)
      });
    }
  }
  overlayWillOpen() {
    const { prefixCls, maskClosable, hasBackdrop, usePortal } = this.props;
    this.setState({ isMount: true, isOpen: true });
    if (this.props.hasBackdrop && usePortal) {
      // add a class to the body to prevent scrolling of content below the overlay
      document.body.classList.add(`${prefixCls}-open`);
    }
    if (maskClosable && !hasBackdrop) {
      document.addEventListener('mousedown', this.handleDocumentClick, false);
    }
  }
  componentDidUpdate(prevProps: OverlayProps) {
    if (prevProps.isOpen && !this.props.isOpen) {
      this.overlayWillClose();
    } else if (!prevProps.isOpen && this.props.isOpen) {
      this.overlayWillOpen();
    }
  }
  handleBackdropMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { backdropProps, maskClosable, hasBackdrop, usePortal, onClose } = this.props;
    if (e.target !== this.container && usePortal) {
      return;
    }
    if (maskClosable && hasBackdrop) {
      this.setState({ isMount: false }, onClose!.bind(this, e));
    }
    backdropProps && backdropProps.onMouseDown && backdropProps.onMouseDown(e as React.MouseEvent<HTMLDivElement, MouseEvent>);
  }
  public onClosed = (node: HTMLElement | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { onClosed } = this.props;
    if (this.state.isMount) {
      this.setState({ isMount: false }, () => {
        onClosed && onClosed(node)
      });
    } else {
      onClosed && onClosed(node);
    }
    this.overlayWillClose();
  }
  public render() {
    const { prefixCls, className, style, isOpen, maskClosable, usePortal, children, unmountOnExit,
      timeout, transitionName, hasBackdrop, portalProps, backdropProps = {}, dialogProps = {}, onClose, ...otherProps } = this.props;
    const { onOpening, onOpened, onClosing } = this.props;
    const decoratedChild =
      typeof children === 'object' ? (
        cloneElement(children, {
          ...dialogProps,
          style: { ...children.props.style, ...dialogProps.style},
          className: classnames(children.props.className, `${prefixCls}-content`),
          tabIndex: 0,
        })
      ) : <span {...dialogProps} className={`${prefixCls}-content`}>{children}</span>;

    const TransitionGroupComp = (
      <CSSTransition
        in={this.state.isOpen}
        unmountOnExit={unmountOnExit}
        onEntering={onOpening}
        onEntered={onOpened}
        onExiting={onClosing}
        onExited={this.onClosed}
        timeout={timeout!}
        {...otherProps}
        classNames={transitionName}
      >
        {status => (
          <div
            style={style}
            className={classnames(prefixCls, className, {
              [`${prefixCls}-inline`]: !usePortal,
              [`${prefixCls}-enter-done`]: this.state.isOpen,
            })}
          >
            {hasBackdrop && cloneElement(<div />, {
              ...backdropProps,
              onMouseDown: this.handleBackdropMouseDown.bind(this),
              className: classnames(`${prefixCls}-backdrop`, backdropProps.className),
              tabIndex: this.props.maskClosable ? 0 : null,
            })}
            {usePortal ? (
              <div
                ref={node => this.container = node}
                onMouseDown={this.handleBackdropMouseDown.bind(this)}
                className={classnames(`${prefixCls}-container`)}
              >
                {cloneElement(decoratedChild, { 'data-status': status })}
              </div>
            ) : cloneElement(decoratedChild, { 'data-status': status })}
          </div>
        )}
      </CSSTransition>
    );
    if (usePortal) {
      return <Portal {...portalProps}> {TransitionGroupComp} </Portal>;
    } else {
      return TransitionGroupComp;
    }
  }
}
