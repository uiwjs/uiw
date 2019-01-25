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
import PropTypes from 'prop-types';
import { CSSTransition } from "react-transition-group";
import classnames from 'classnames';
import Portal from '../portal';
import './style/index.less';

const noop = () => undefined;

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMount: false,
      isOpen: props.isOpen,
    }
  }
  componentDidMount() {
    if (this.props.isOpen) {
      this.overlayWillOpen();
    }
  }

  overlayWillClose() {
    const { prefixCls } = this.props;
    document.removeEventListener('mousedown', this.handleDocumentClick, false);
    document.body.classList.remove(`${prefixCls}-open`);
    this.setState({ isOpen: false });
  }
  handleDocumentClick = (e) => {
    const { maskClosable, onClose } = this.props;
    const { isOpen } = this.state;
    const domNode = ReactDOM.findDOMNode(this);
    if (isOpen && maskClosable && (domNode.nextSibling === e.target || domNode.nextElementSibling === e.target)) {
      this.setState({ isMount: false }, onClose.bind(this));
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
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen && !this.props.isOpen) {
      this.overlayWillClose();
    } else if (!prevProps.isOpen && this.props.isOpen) {
      this.overlayWillOpen();
    }
  }
  handleBackdropMouseDown(e) {
    const { backdropProps, maskClosable, onClose } = this.props;
    if (maskClosable) {
      onClose(false, e);
    }
    backdropProps.onMouseDown && backdropProps.onMouseDown(e);
  }
  onClosed(e) {
    const { onClosed } = this.props;
    if (this.state.isMount) {
      this.setState({ isMount: false }, onClosed.bind(this, e));
    } else {
      onClosed(e)
    }
    this.overlayWillClose();
  }
  render() {
    const { prefixCls, className, style, isOpen, usePortal, children, unmountOnExit, transitionDuration, transitionName, backdropProps, hasBackdrop, portalProps } = this.props;
    const { onOpening, onOpened, onClosing } = this.props;
    const decoratedChild =
      typeof children === 'object' ? (
        cloneElement(children, {
          className: classnames(children.props.className, `${prefixCls}-content`),
          tabIndex: 0,
        })
      ) : <span className={`${prefixCls}-content`}>{children}</span>;

    const TransitionGroupComp = (
      <CSSTransition
        in={this.state.isOpen}
        unmountOnExit={unmountOnExit}
        classNames={transitionName}
        onEntering={onOpening}
        onEntered={onOpened}
        onExiting={onClosing}
        onExited={this.onClosed.bind(this)}
        timeout={transitionDuration}
        classNames={transitionName}
      >
        {(status) => (
          <div className={classnames(prefixCls, className, { [`${prefixCls}-inline`]: !usePortal })} style={style}>
            {hasBackdrop && cloneElement(<div />, {
              ...backdropProps,
              className: classnames(`${prefixCls}-backdrop`, backdropProps.className),
              onMouseDown: this.handleBackdropMouseDown.bind(this),
              tabIndex: this.props.maskClosable ? 0 : null
            })}
            {cloneElement(decoratedChild, {
              [`data-status`]: status
            })}
          </div>
        )}
      </CSSTransition>
    )
    if (usePortal) {
      return <Portal {...portalProps}> {TransitionGroupComp} </Portal>;
    } else {
      return TransitionGroupComp;
    }
  }
}

Overlay.propTypes = {
  prefixCls: PropTypes.string,
  isOpen: PropTypes.bool,
  usePortal: PropTypes.bool,
  maskClosable: PropTypes.bool,
  portalProps: PropTypes.object,
  backdropProps: PropTypes.object,
  hasBackdrop: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  transitionName: PropTypes.string,
  transitionDuration: PropTypes.number,
  onOpening: PropTypes.func,
  onOpened: PropTypes.func,
  onClosing: PropTypes.func,
  onClosed: PropTypes.func,
};

Overlay.defaultProps = {
  prefixCls: 'w-overlay',
  isOpen: false,
  usePortal: true,
  maskClosable: true,
  backdropProps: {},
  portalProps: {},
  hasBackdrop: true,
  unmountOnExit: true, // 设置 true 销毁根节点
  transitionDuration: 300,
  transitionName: 'w-overlay',
  onOpening: noop,
  onOpened: noop,
  onClosing: noop,
  onClosed: noop,
  onClose: noop,
};
