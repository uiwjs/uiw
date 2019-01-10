import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classnames from 'classnames';
import './style/index.less';

const noop = () => undefined;

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMount: false,
    }
  }
  componentDidMount() {
    if (this.props.isOpen) {
      this.overlayWillOpen();
    }
  }
  overlayWillClose() {
    const { prefixCls } = this.props;
    document.body.classList.remove(`${prefixCls}-open`);
  }
  overlayWillOpen() {
    const { prefixCls } = this.props;
    this.setState({ isMount: true });
    if (this.props.hasBackdrop) {
      // add a class to the body to prevent scrolling of content below the overlay
      document.body.classList.add(`${prefixCls}-open`);
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
      onClose(e);
    }
    backdropProps.onMouseDown && backdropProps.onMouseDown(e);
  }
  onClosed(e) {
    const { onClosed } = this.props;
    this.setState({ isMount: false }, onClosed.bind(this, e));
  }
  maybeRenderChild(child) {
    const { prefixCls } = this.props;
    if (child == null) {
      return null;
    }
    const decoratedChild =
      typeof child === "object" ? (
        React.cloneElement(child, {
          className: classnames(child.props.className, `${prefixCls}-content`),
          tabIndex: 0,
        })
      ) : <span className={`${prefixCls}-content`}>{child}</span>;

    const { onOpening, onOpened, onClosing, /*onClosed, */transitionDuration, transitionName } = this.props;
    return (
      <CSSTransition
        classNames={transitionName}
        onEntering={onOpening}
        onEntered={onOpened}
        onExiting={onClosing}
        onExited={this.onClosed.bind(this)}
        timeout={transitionDuration}
      >
        {decoratedChild}
      </CSSTransition>
    );
  }
  maybeRenderBackdrop() {
    const {
      prefixCls,
      backdropClassName,
      backdropProps,
      hasBackdrop,
      isOpen,
      transitionDuration,
      transitionName,
    } = this.props;
    if (hasBackdrop && isOpen) {
      return (
        <CSSTransition classNames={transitionName} key="__backdrop" timeout={transitionDuration}>
          <div
            {...backdropProps}
            className={classnames(`${prefixCls}-backdrop`, backdropClassName, backdropProps.className)}
            onMouseDown={this.handleBackdropMouseDown.bind(this)}
            tabIndex={this.props.maskClosable ? 0 : null}
          />
        </CSSTransition>
      );
    } else {
      return null;
    }
  }
  handleKeyDown() {}
  render() {
    const { prefixCls, className, isOpen, children } = this.props;
    const childrenWithTransitions = isOpen ? React.Children.map(children, this.maybeRenderChild.bind(this)) : [];
    childrenWithTransitions.unshift(this.maybeRenderBackdrop());
    const cls = classnames(prefixCls, className, { open: this.state.isMount });
    return (
      <TransitionGroup
        appear={true}
        className={cls}
        component="div"
        onKeyDown={this.handleKeyDown}
        ref={this.container}
      >
        {childrenWithTransitions}
      </TransitionGroup>
    );
  }
}

Overlay.propTypes = {
  prefixCls: PropTypes.string,
  isOpen: PropTypes.bool, 
  maskClosable: PropTypes.bool, 
  backdropProps: PropTypes.object, 
  hasBackdrop: PropTypes.bool, 
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
  maskClosable: true,
  backdropProps: {}, 
  hasBackdrop: true,
  transitionDuration: 300,
  transitionName: 'w-overlay',
  onOpening: noop,
  onOpened: noop,
  onClosing: noop,
  onClosed: noop,
};
