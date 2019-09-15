import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Overlay, { IOverlayProps } from '../overlay';
import contains from './utils';
import getBoundingClientRect, { IBoundingClientRect } from './util/getBoundingClientRect';
import getScroll from '../utils/getScroll';
import getOuterSizes from './util/getOuterSizes';
import RefHolder from './RefHolder';
import { IProps } from '../utils/props';
import './style/index.less';

export interface IOverlayTriggerProps extends IProps, IOverlayProps {
  onVisibleChange?: (isVisbale: boolean) => void;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  overlay?: React.ReactNode | any;
  trigger?: 'click' | 'hover' | 'focus';
  usePortal?: boolean;
  isOpen?: boolean;
  disabled?: boolean;
  isOutside?: boolean;
  isClickOutside?: boolean;
  autoAdjustOverflow?: boolean;
  placement?: Placement;
  delay?: Delay;
}

export interface IOverlayTriggerState {
  show: boolean;
  overlayStyl: OverlayStyl;
}

export type Delay = number | {
  show?: number;
  hide?: number;
};

export type Placement = 'top' | 'topLeft' | 'topRight' |
  'left' | 'leftTop' | 'leftBottom' |
  'right' | 'rightTop' | 'rightBottom' |
  'bottom' | 'bottomLeft' | 'bottomRight';

export type OverlayStyl = {
  placement: Placement;
  top: number;
  bottom: number;
  left: number;
  right: number;
  zIndex: number;
}

interface ITriggerProps {
  onClick?: (e: MouseEvent) => void;
  onFocus?: (e: MouseEvent) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const normalizeDelay = (delay?: Delay) => ((delay && typeof delay === 'object') ? delay : { show: delay, hide: delay });
let zIndex = 999;


export default class OverlayTrigger extends React.Component<IOverlayTriggerProps> {
  public static defaultProps: IOverlayTriggerProps = {
    prefixCls: 'w-overlay-trigger',
    // onEnter: () => null,
    usePortal: true,
    isOutside: false,
    isClickOutside: true,
    disabled: false,
    isOpen: false,
    trigger: 'hover',
    placement: 'top',
  }
  public state: IOverlayTriggerState;
  // React Refs with TypeScript
  // https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315
  private trigger = React.createRef<RefHolder>();
  // private trigger = React.createRef<HTMLDivElement>();
  private popup = React.createRef<HTMLDivElement>();
  private _hoverState!: 'show' | 'hide' | null;
  private _timeout: number[] = [];
  constructor(props: IOverlayTriggerProps & IOverlayProps) {
    super(props);
    // this.trigger = React.createRef();
    // this.popup = React.createRef();
    this.state = {
      show: !!props.isOpen,
      overlayStyl: {
        placement: props.placement as Placement
      } as OverlayStyl,
    };
  }
  componentDidUpdate(prevProps: IOverlayTriggerProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      const isOpen = !!this.props.isOpen;
      isOpen ? this.show() : this.hide();
    }
  }
  componentDidMount() {
    if (this.props.isClickOutside) {
      document && document.addEventListener('mousedown', this.handleClickOutside, true);
    }
    !!this.props.isOpen && this.setState({ overlayStyl: { ...this.styles() } });
  }
  componentWillUnmount() {
    document && document.removeEventListener('mousedown', this.handleClickOutside, true);
  }
  getTarget = () => ReactDOM.findDOMNode(this.trigger.current) as HTMLElement;
  getPopupTarget = () => ReactDOM.findDOMNode(this.popup.current) as HTMLElement;
  getChildProps() {
    return (React.Children.only(this.props.children) as React.ReactElement<any>).props;
  }
  handleClickOutside = (e: MouseEvent) => {
    const popNode = this.getPopupTarget();
    const child = this.getTarget();
    if (popNode && e.target && !popNode.contains(e.target as HTMLElement) && child && !child.contains(e.target as HTMLElement)) {
      this.hide();
    }
  }
  handleClick = (e: MouseEvent) => {
    const { onClick } = this.getChildProps();

    if (this.state.show) this.hide();
    else this.show();
    if (onClick) onClick(e, !this.state.show);
  }
  handleoFocus = () => {
    this.handleShow();
  }
  public clearTimeouts = () => {
    if (this._timeout.length > 0) {
      for (const timeoutId of this._timeout) {
        window.clearTimeout(timeoutId);
      }
      this._timeout = [];
    }
  };
  handleShow = () => {
    this.clearTimeouts();
    this._hoverState = 'show';

    const delay = normalizeDelay(this.props.delay);

    if (!delay.show) {
      this.show();
      return;
    }
    const handle = window.setTimeout(() => {
      if (this._hoverState === 'show') this.show();
    }, delay.show);

    this._timeout.push(handle);
  };

  handleHide = (isOutside: boolean) => {
    this.clearTimeouts();
    if (!isOutside && this.props.isOutside) return;
    this._hoverState = 'hide';

    const delay = normalizeDelay(this.props.delay);

    if (!delay.hide) {
      this.hide();
      return;
    }

    const handle = window.setTimeout(() => {
      if (this._hoverState === 'hide') this.hide();
    }, delay.hide);

    this._timeout.push(handle);
  };

  handleMouseOver = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.handleMouseOverOut(this.handleShow, e, 'fromElement');
  };

  handleMouseOut = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.handleMouseOverOut(this.handleHide, e, 'toElement');
  }

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.
  handleMouseOverOut(handler: Function, e: React.MouseEvent, relatedNative: 'fromElement' | 'toElement') {
    const target = e.currentTarget as HTMLElement;
    const related = (e.relatedTarget || (e.nativeEvent as any)[relatedNative]) as HTMLElement;
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
    this.setState({ show: false }, () => onVisibleChange && onVisibleChange(false));
  }

  show() {
    if (this.state.show) return;
    const { onVisibleChange } = this.props;
    zIndex += 1;
    this.setState({
      show: true,
    }, () => {
      onVisibleChange && onVisibleChange(true);
    });
  }
  onEnter = (node: HTMLElement, isAppearing: boolean) => {
    const { onEnter } = this.props;
    if (onEnter) {
      onEnter(node, isAppearing);
    }
    this.setState({ overlayStyl: { ...this.styles() } });
  }
  styles() {
    const { usePortal, autoAdjustOverflow } = this.props;
    const { placement } = this.props;
    const sty = {} as OverlayStyl;
    let trigger = this.getTarget() as HTMLElement | IBoundingClientRect;
    let popup = this.getPopupTarget() as HTMLElement | IBoundingClientRect;
    if (!trigger || !popup || !document) {
      return sty;
    }

    const winSizeHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const winSizeWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    sty.placement = placement as Placement;
    const scrollTop = getScroll((trigger as HTMLElement).ownerDocument!.documentElement, true);
    const scrollLeft = getScroll((trigger as HTMLElement).ownerDocument!.documentElement);
    trigger = { ...getBoundingClientRect(trigger as HTMLElement), ...getOuterSizes(trigger as HTMLElement) };
    popup = { ...getBoundingClientRect((popup as HTMLElement)), ...getOuterSizes((popup as HTMLElement)) };

    const bottom = winSizeHeight - trigger.bottom;
    const right = winSizeWidth - trigger.left - trigger.width;

    sty.top = trigger.top + scrollTop;
    sty.left = trigger.left;

    if (!usePortal) {
      sty.top = trigger.offsetTop as number;
      sty.left = trigger.offsetLeft as number;
    }

    if (placement && /^(top)/.test(placement)) {
      sty.top -= popup.height;
    }
    if (placement && /^(right)/.test(placement)) {
      sty.left += trigger.width;
    }
    if (placement && /^(bottom)/.test(placement)) {
      sty.top += trigger.height;
    }
    if (placement && /^(left)/.test(placement)) {
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
      if (placement && /^(top)/.test(placement) && trigger.top < popup.height && bottom > popup.height) {
        sty.placement = placement.replace(/^top/, 'bottom') as Placement;
        sty.top = sty.top + popup.height + trigger.height;
      }
      if (placement && /^(bottom)/.test(placement) && bottom < popup.height && trigger.top > popup.height) {
        sty.placement = placement.replace(/^bottom/, 'top') as Placement;
        sty.top = sty.top - popup.height - trigger.height;
      }
      if (placement && /^(right)/.test(placement) && right < popup.width) {
        sty.placement = placement.replace(/^right/, 'left') as Placement;
        sty.left = sty.left - trigger.width - popup.width;
      }
      if (placement && /^(left)/.test(placement) && trigger.left < popup.width) {
        sty.placement = placement.replace(/^left/, 'right') as Placement;
        sty.left = sty.left + trigger.width + popup.width;
      }


      if (placement && /^(left|right)/.test(placement) && usePortal) {
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
        if (placement && /(Top)$/.test(placement) && trigger.top < 0) {
          sty.top -= trigger.top;
        }
        if (placement && /(Bottom)$/.test(placement) && trigger.bottom < popup.height) {
          // eslint-disable-next-line
          sty.top = sty.top + (popup.height - trigger.bottom);
        }
        if (placement && /(right|left)$/.test(placement) && trigger.bottom - trigger.height / 2 < popup.height / 2) {
          sty.top = sty.top + popup.height / 2 - (trigger.bottom - trigger.height / 2);
        }
      }
      // Bottom Public Part
      if (placement && /^(left|right)/.test(placement)) {
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

      if (placement && /^(top|bottom)/.test(placement) && usePortal) {
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
      } else if (placement && /(top|bottom)$/.test(placement) && right + trigger.width / 2 < popup.width / 2) {
        sty.left = sty.left + (right + trigger.width / 2 - popup.width / 2); // eslint-disable-line
      }
      if (placement && /^(top|bottom)/.test(placement)) {
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
    const child: any = React.Children.only(children);
    const props: IOverlayProps = { ...other, dialogProps: {} };
    const triggerProps: ITriggerProps = {};
    if (trigger === 'click' && !disabled) {
      triggerProps.onClick = this.handleClick;
    }
    if (trigger === 'focus' && !disabled) {
      triggerProps.onFocus = this.handleoFocus;
    }
    if (trigger === 'hover' && !disabled) {
      triggerProps.onMouseOver = this.handleMouseOver;
      triggerProps.onMouseOut = this.handleMouseOut;
      props.dialogProps!.onMouseOut = this.handleMouseOut;
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
