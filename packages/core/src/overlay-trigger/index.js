import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Overlay from '../overlay';
import contains from './utils';
import './style/index.less';

class RefHolder extends React.PureComponent {
  render = () => this.props.children;
}

const normalizeDelay = delay => delay && typeof delay === 'object' ? delay : { show: delay, hide: delay };
let zIndex = 999;

export default class OverlayTrigger extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.trigger = React.createRef();
    this.popup = React.createRef();
    this.state = {
      show: !!props.visible,
      overlayStyl: {}
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible) {
      !!this.props.visible ? this.show() : this.hide();
    }
  }
  componentDidMount() {
    document && document.addEventListener('mousedown', this.handleClickOutside, true);
    !!this.props.visible && this.setState({ overlayStyl: { ...this.styles() } });
  }
  componentWillUnmount() {
    document && document.removeEventListener('mousedown', this.handleClickOutside, true);
  }
  getTarget = () => ReactDOM.findDOMNode(this.trigger.current);
  getPopupTarget = () => ReactDOM.findDOMNode(this.popup.current);
  getChildProps() {
    return React.Children.only(this.props.children).props;
  }
  handleClickOutside = (e) => {
    const popNode = this.getPopupTarget();
    const child = this.getTarget();
    if (popNode && e.target && !popNode.contains(e.target) && !child.contains(e.target)) {
      this.hide();
    }
  }
  handleClick = (e) => {
    const { onClick } = this.getChildProps();

    if (this.state.show) this.hide();
    else this.show();
    if (onClick) onClick(e, !this.state.show);
  }

  handleShow = () => {
    clearTimeout(this._timeout);
    this._hoverState = 'show';

    const delay = normalizeDelay(this.props.delay);

    if (!delay.show) {
      this.show();
      return;
    }

    this._timeout = setTimeout(() => {
      if (this._hoverState === 'show') this.show();
    }, delay.show);
  };

  handleHide = (isOutside) => {
    clearTimeout(this._timeout);
    if (!isOutside && this.props.isOutside) return;
    this._hoverState = 'hide';

    const delay = normalizeDelay(this.props.delay);

    if (!delay.hide) {
      this.hide();
      return;
    }

    this._timeout = setTimeout(() => {
      if (this._hoverState === 'hide') this.hide();
    }, delay.hide);
  };

  handleMouseOver = e => {
    this.handleMouseOverOut(this.handleShow, e, 'fromElement');
  };

  handleMouseOut = e => {
    this.handleMouseOverOut(this.handleHide, e, 'toElement');
  }

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.
  handleMouseOverOut(handler, e, relatedNative) {
    const target = e.currentTarget;
    const related = e.relatedTarget || e.nativeEvent[relatedNative];
    const popupTarget = this.getPopupTarget();
    const currentTarget = this.getTarget();
    let isOutside = true;
    if (popupTarget && contains(popupTarget, related) || currentTarget && contains(currentTarget, related)) {
      isOutside = false;
    }
    if ((!related || related !== target) && !contains(target, related)) {
      handler(isOutside, e);
    }
  }
  hide() {
    if (!this.state.show) return;
    const { onVisibleChange } = this.props;
    zIndex = zIndex - 1;
    this.setState({ show: false }, () => onVisibleChange(false));
  }

  show() {
    if (this.state.show) return;
    const { onVisibleChange } = this.props;
    zIndex += 1;
    this.setState({
      show: true,
    }, () => {
      onVisibleChange(true);
    });
  }
  onOpening = (node, isAppearing) => {
    this.setState({ overlayStyl: { ...this.styles() } }, this.props.onOpening.bind(this, node, isAppearing));
  }
  styles() {
    const { placement, usePortal } = this.props;
    const sty = {};
    let dom = this.getTarget();
    if (!dom || !document) return sty;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    const rect = dom.getBoundingClientRect();
    const popTarget = this.getPopupTarget();
    if (!popTarget) return;
    const popRect = popTarget.getBoundingClientRect();
    const popStyle = document.defaultView.getComputedStyle(popTarget);

    popRect.width = parseInt(popStyle.width, 10);
    popRect.height = parseInt(popStyle.height, 10);
    popRect.paddingLeft = parseInt(popStyle.paddingLeft, 10);
    popRect.paddingRight = parseInt(popStyle.paddingRight, 10);
    popRect.paddingTop = parseInt(popStyle.paddingTop, 10);
    popRect.paddingBottom = parseInt(popStyle.paddingBottom, 10);

    const diffwidth = popRect.width - rect.width;
    const diffheight = popRect.height - rect.height;

    sty.left = scrollLeft + rect.left;
    sty.top = scrollTop + rect.top;

    if (!usePortal) {
      sty.left = 0;
      sty.top = 0;
    }

    switch (placement) {
      case 'topLeft':
        sty.left = sty.left - popRect.paddingLeft;
        sty.top = sty.top - popRect.height;
        break
      case 'top':
        sty.left = sty.left + (diffwidth > 0 ? -(diffwidth / 2) : Math.abs(diffwidth / 2));
        sty.top = sty.top - popRect.height;
        break
      case 'topRight':
        sty.left = sty.left - popRect.width + rect.width + popRect.paddingLeft;
        sty.top = sty.top - popRect.height;
        break
      case 'leftTop':
        sty.left = sty.left - popRect.width;
        sty.top = sty.top - popRect.paddingTop;
        break
      case 'left':
        sty.left = sty.left - popRect.width
        sty.top = sty.top + (diffheight > 0 ? -(diffheight / 2) : Math.abs(diffheight / 2));
        break
      case 'leftBottom':
        sty.left = sty.left - popRect.width
        sty.top = sty.top - popRect.height + rect.height + popRect.paddingBottom;
        break
      case 'rightTop':
        sty.left = sty.left + rect.width
        sty.top = sty.top - popRect.paddingTop;
        break
      case 'right':
        sty.left = sty.left + rect.width
        sty.top = sty.top + (diffheight > 0 ? -(diffheight / 2) : Math.abs(diffheight / 2))
        break
      case 'rightBottom':
        sty.left = sty.left + rect.width
        sty.top = sty.top - popRect.height + rect.height + popRect.paddingBottom;
        break
      case 'bottomLeft':
        sty.left = sty.left - popRect.paddingLeft;
        sty.top = sty.top + rect.height
        break
      case 'bottom':
        sty.left = sty.left + (diffwidth > 0 ? -(diffwidth / 2) : Math.abs(diffwidth / 2))
        sty.top = sty.top + rect.height
        break
      case 'bottomRight':
        sty.left = sty.left - popRect.width + rect.width + popRect.paddingRight;
        sty.top = sty.top + rect.height
        break
    }
    sty.zIndex = zIndex;
    return sty;
  }
  render() {
    const { prefixCls, className, children, overlay, trigger, placement, disabled, usePortal, ...other } = this.props;
    const child = React.Children.only(children);
    const props = { ...other, placement, dialogProps: {} };
    const triggerProps = { };
    if (trigger === 'click' && !disabled) {
      triggerProps.onClick = this.handleClick;
    }
    if (trigger === 'hover' && !disabled) {
      triggerProps.onMouseOver = this.handleMouseOver;
      triggerProps.onMouseOut = this.handleMouseOut;
      props.dialogProps.onMouseOut = this.handleMouseOut;
    }
    props.style = { ...props.style, ...this.state.overlayStyl };
    return (
      <>
        <RefHolder ref={this.trigger}>
          {cloneElement(child, Object.assign({}, child.props, { ...triggerProps }))}
        </RefHolder>
        <Overlay
          {...props}
          onOpening={this.onOpening}
          className={classNames(prefixCls, className, { [`${placement}`]: placement })}
          usePortal={usePortal}
          isOpen={this.state.show}
          hasBackdrop={false}
        >
          {cloneElement(overlay, { ref: this.popup })}
        </Overlay>
      </>
    );
  }
}

OverlayTrigger.propTypes = {
  prefixCls: PropTypes.string,
  onVisibleChange: PropTypes.func,
  usePortal: PropTypes.bool,
  visible: PropTypes.bool,
  disabled: PropTypes.bool,
  isOutside: PropTypes.bool,
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      show: PropTypes.number,
      hide: PropTypes.number,
    }),
  ]),
  // This position
  placement: PropTypes.oneOf([
    'top', 'topLeft', 'topRight',
    'left', 'leftTop', 'leftBottom',
    'right', 'rightTop', 'rightBottom',
    'bottom', 'bottomLeft', 'bottomRight',
  ]),
  overlay: PropTypes.oneOfType([PropTypes.func, PropTypes.element.isRequired]),
  trigger: PropTypes.oneOf(['click', 'hover']),
};

OverlayTrigger.defaultProps = {
  prefixCls: 'w-overlay-trigger',
  onVisibleChange: () => null,
  onOpening: () => null,
  usePortal: true,
  isOutside: false,
  disabled: false,
  visible: false,
  trigger: 'hover',
};
