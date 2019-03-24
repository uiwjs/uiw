import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Overlay from '../overlay';
import contains from './utils';
import getBoundingClientRect from './util/getBoundingClientRect';
import getScroll from '../utils/getScroll';
import getOuterSizes from './util/getOuterSizes';
import RefHolder from './RefHolder';
import './style/index.less';

const normalizeDelay = delay => ((delay && typeof delay === 'object') ? delay : { show: delay, hide: delay });
let zIndex = 999;

export default class OverlayTrigger extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.trigger = React.createRef();
    this.popup = React.createRef();
    this.state = {
      show: !!props.isOpen,
      overlayStyl: { placement: props.placement },
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      const isOpen = !!this.props.isOpen;
      isOpen ? this.show() : this.hide();
    }
  }
  componentDidMount() {
    if (this.props.isOutsideOther) {
      document && document.addEventListener('mousedown', this.handleClickOutside, true);
    }
    !!this.props.isOpen && this.setState({ overlayStyl: { ...this.styles() } });
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
  handleoFocus = () => {
    this.handleShow();
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

  handleMouseOver = (e) => {
    this.handleMouseOverOut(this.handleShow, e, 'fromElement');
  };

  handleMouseOut = (e) => {
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
    if ((popupTarget && contains(popupTarget, related)) || (currentTarget && contains(currentTarget, related))) {
      isOutside = false;
    }
    if ((!related || related !== target) && !contains(target, related)) {
      handler(isOutside, e);
    }
  }
  hide() {
    if (!this.state.show) return;
    const { onVisibleChange } = this.props;
    zIndex -= 1;
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
  onEnter = (node, isAppearing) => {
    this.setState({ overlayStyl: { ...this.styles() } }, this.props.onEnter.bind(this, node, isAppearing));
  }
  styles() {
    const { usePortal, autoAdjustOverflow } = this.props;
    const { placement } = this.props;
    const sty = {};
    let trigger = this.getTarget();
    let popup = this.getPopupTarget();
    if (!trigger || !popup || !document) {
      return sty;
    }

    const winSizeHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const winSizeWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    sty.placement = placement;
    const scrollTop = getScroll(trigger.ownerDocument.documentElement, true);
    const scrollLeft = getScroll(trigger.ownerDocument.documentElement);
    trigger = { ...getBoundingClientRect(trigger), ...getOuterSizes(trigger) };
    popup = { ...getBoundingClientRect(popup), ...getOuterSizes(popup) };

    const bottom = winSizeHeight - trigger.bottom;
    const right = winSizeWidth - trigger.left - trigger.width;

    sty.top = trigger.top + scrollTop;
    sty.left = trigger.left;

    if (!usePortal) {
      sty.top = trigger.offsetTop;
      sty.left = trigger.offsetLeft;
    }

    if (/^(top)/.test(placement)) {
      sty.top -= popup.height;
    }
    if (/^(right)/.test(placement)) {
      sty.left += trigger.width;
    }
    if (/^(bottom)/.test(placement)) {
      sty.top += trigger.height;
    }
    if (/^(left)/.test(placement)) {
      sty.left -= popup.width;
    }
    switch (sty.placement) {
      case 'bottomLeft':
      case 'topLeft': break;
      case 'bottom':
      // eslint-disable-next-line
      case 'top': sty.left = sty.left - (popup.width - trigger.width) / 2; break;
      case 'bottomRight':
      case 'topRight': sty.left = sty.left + scrollLeft + trigger.width - popup.width; break;
      case 'rightTop':
      case 'leftTop': break;
      case 'right':
      // eslint-disable-next-line
      case 'left': sty.top = sty.top - (popup.height - trigger.height) / 2; break;
      case 'rightBottom':
      case 'leftBottom': sty.top = sty.top - popup.height + trigger.height; break;
      default: break;
    }
    if (autoAdjustOverflow) {
      if (/^(top)/.test(placement) && trigger.top < popup.height && bottom > popup.height) {
        sty.placement = placement.replace(/^top/, 'bottom');
        sty.top = sty.top + popup.height + trigger.height;
      }
      if (/^(bottom)/.test(placement) && bottom < popup.height && trigger.top > popup.height) {
        sty.placement = placement.replace(/^bottom/, 'top');
        sty.top = sty.top - popup.height - trigger.height;
      }
      if (/^(right)/.test(placement) && right < popup.width) {
        sty.placement = placement.replace(/^right/, 'left');
        sty.left = sty.left - trigger.width - popup.width;
      }
      if (/^(left)/.test(placement) && trigger.left < popup.width) {
        sty.placement = placement.replace(/^left/, 'right');
        sty.left = sty.left + trigger.width + popup.width;
      }


      if (/^(left|right)/.test(placement) && usePortal) {
        // Top
        if (
          (/(Top)$/.test(placement) && trigger.top < 0) ||
          (/(right|left)$/.test(placement) && (trigger.top + trigger.height / 2) < popup.height / 2) ||
          (/(Bottom)$/.test(placement) && (trigger.top + trigger.height) < popup.height)
        ) {
          sty.top = scrollTop;
        }
      } else {
        // Top
        if (/(Top)$/.test(placement) && trigger.top < 0) {
          sty.top -= trigger.top;
        }
        if (/(Bottom)$/.test(placement) && trigger.bottom < popup.height) {
          // eslint-disable-next-line
          sty.top = sty.top + (popup.height - trigger.bottom);
        }
        if (/(right|left)$/.test(placement) && trigger.bottom - trigger.height / 2 < popup.height / 2) {
          sty.top = sty.top + popup.height / 2 - (trigger.bottom - trigger.height / 2);
        }
      }
      // Bottom Public Part
      if (/^(left|right)/.test(placement)) {
        if (/(Top)$/.test(placement) && bottom + trigger.height < popup.height) {
          sty.top = sty.top - (popup.height - bottom - trigger.height); // eslint-disable-line
        }
        if (/(right|left)$/.test(placement) && bottom + trigger.height / 2 < popup.height / 2) {
          sty.top = sty.top - (popup.height / 2 - bottom - trigger.height / 2); // eslint-disable-line
        }
        if (/(Bottom)$/.test(placement) && bottom < 0) {
          sty.top = sty.top + bottom; // eslint-disable-line
        }
      }

      if (/^(top|bottom)/.test(placement) && usePortal) {
        // left
        if (
          (/(Left)$/.test(placement) && trigger.left < 0) ||
          (/(top|bottom)$/.test(placement) && trigger.left + trigger.width / 2 < popup.width / 2) ||
          (/(Right)$/.test(placement) && trigger.left + trigger.width < popup.width)
        ) {
          sty.left = scrollLeft;
        }
        // right
        if (/(top|bottom)$/.test(placement) && right + trigger.width / 2 < popup.width / 2) {
          sty.left = trigger.left + trigger.width + right - popup.width;
        }
      } else if (/(top|bottom)$/.test(placement) && right + trigger.width / 2 < popup.width / 2) {
        sty.left = sty.left + (right + trigger.width / 2 - popup.width / 2); // eslint-disable-line
      }
      if (/^(top|bottom)/.test(placement)) {
        if (/(Left)$/.test(placement) && trigger.width + right < popup.width) {
          sty.left = sty.left - (popup.width - trigger.width - right); // eslint-disable-line
        }
        if (/(Right)$/.test(placement) && right < 0) {
          sty.left = sty.left + right; // eslint-disable-line
        }
      }
    }
    sty.zIndex = zIndex;
    return sty;
  }
  render() {
    const { prefixCls, className, children, overlay, trigger, disabled, usePortal, ...other } = this.props;
    const { placement, ...overlayStyl } = this.state.overlayStyl;
    const child = React.Children.only(children);
    const props = { ...other, placement, dialogProps: {} };
    const triggerProps = { };
    if (trigger === 'click' && !disabled) {
      triggerProps.onClick = this.handleClick;
    }
    if (trigger === 'focus' && !disabled) {
      triggerProps.onFocus = this.handleoFocus;
    }
    if (trigger === 'hover' && !disabled) {
      triggerProps.onMouseOver = this.handleMouseOver;
      triggerProps.onMouseOut = this.handleMouseOut;
      props.dialogProps.onMouseOut = this.handleMouseOut;
    }
    props.style = { ...props.style, ...overlayStyl };
    return (
      <React.Fragment>
        <RefHolder ref={this.trigger}>
          {cloneElement(child, Object.assign({}, child.props, { ...triggerProps, className: classnames(child.props.className, { [`${prefixCls}-disabled`]: disabled }) }))}
        </RefHolder>
        <Overlay
          {...props}
          onEnter={this.onEnter}
          className={classnames(prefixCls, className, { [placement]: placement })}
          usePortal={usePortal}
          isOpen={this.state.show}
          hasBackdrop={false}
        >
          {cloneElement(overlay, Object.assign({ ref: this.popup }, overlay.props, {
            className: classnames(overlay.props && overlay.props.className, placement),
          }))}
        </Overlay>
      </React.Fragment>
    );
  }
}

OverlayTrigger.propTypes = {
  prefixCls: PropTypes.string,
  onVisibleChange: PropTypes.func,
  onEnter: PropTypes.func,
  usePortal: PropTypes.bool,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  isOutside: PropTypes.bool,
  isOutsideOther: PropTypes.bool,
  autoAdjustOverflow: PropTypes.bool,
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
  trigger: PropTypes.oneOf(['click', 'hover', 'focus']),
};

OverlayTrigger.defaultProps = {
  prefixCls: 'w-overlay-trigger',
  onVisibleChange: () => null,
  onEnter: () => null,
  usePortal: true,
  isOutside: false,
  isOutsideOther: true,
  disabled: false,
  isOpen: false,
  trigger: 'hover',
};
