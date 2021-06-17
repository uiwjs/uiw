import React, {
  cloneElement,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
} from 'react';
import { findDOMNode } from 'react-dom';
import { IProps, noop } from '@uiw/utils';
import Overlay, { OverlayProps } from '@uiw/react-overlay';
import contains from './utils';
import { IBoundingClientRect } from './util/getBoundingClientRect';
import { getStyle } from './getStyle';
import './style/index.less';

export interface OverlayTriggerProps extends IProps, OverlayProps {
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

export interface OverlayTriggerState {
  show: boolean;
  trigger: OverlayTriggerProps['trigger'];
  overlayStyl: OverlayStyl;
  transitionName: OverlayProps['transitionName'];
}

export type Delay =
  | number
  | {
      show?: number;
      hide?: number;
    };

export type Placement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';

export type OverlayStyl = {
  placement: Placement;
  top: number;
  bottom: number;
  left: number;
  right: number;
  zIndex: number;
};

interface ITriggerProps {
  onClick?: (e: MouseEvent) => void;
  onFocus?: (e: MouseEvent) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const normalizeDelay = (delay?: Delay) =>
  delay && typeof delay === 'object' ? delay : { show: delay, hide: delay };
let zIndex = 999;

export type OverlayTriggerRef = {
  hide: () => void;
  show: () => void;
};

export default React.forwardRef<OverlayTriggerRef, OverlayTriggerProps>(
  (props, ref) => {
    const {
      className,

      prefixCls = 'w-overlay-trigger',
      usePortal = true,
      isOutside = false,
      isClickOutside = true,
      disabled = false,
      isOpen: _ = false,
      trigger = 'hover',
      placement = 'top',

      autoAdjustOverflow,
      transitionName,

      children,
      overlay,
      onVisibleChange = noop,
      onEnter = noop,
      ...other
    } = props;

    const triggerRef = useRef<HTMLElement>();
    const popupRef = useRef<HTMLElement>();
    const timeoutRef = useRef<number[]>([]);
    const hoverStateRef = useRef<'show' | 'hide' | null>(null);
    const [isOpen, setIsOpen] = useState(!!props.isOpen);
    const [overlayStyl, setOverlayStyl] = useState<OverlayStyl>({
      placement,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 0,
    });

    useImperativeHandle(ref, () => ({
      hide: () => hide(),
      show: () => show(),
    }));

    const child: any = React.Children.only(children);
    const overlayProps: OverlayProps = {
      ...other,
      placement,
      isOpen,
      dialogProps: {},
    };
    const triggerProps: ITriggerProps = {};

    function getChildProps() {
      if (child && React.isValidElement(child)) {
        return child.props;
      }
      return {};
    }

    const getTarget = () => findDOMNode(triggerRef.current) as HTMLElement;
    const getPopupTarget = () => findDOMNode(popupRef.current) as HTMLElement;

    useEffect(() => {
      if (isClickOutside) {
        document && document.addEventListener('mousedown', handleClickOutside);
      }
      const styls = getStyle({
        placement: overlayStyl.placement,
        trigger: getTarget() as HTMLElement | IBoundingClientRect,
        popup: getPopupTarget() as HTMLElement | IBoundingClientRect,
        usePortal,
        autoAdjustOverflow,
        zIndex,
      });
      !!props.isOpen && setOverlayStyl({ ...styls });
      return () => {
        document &&
          document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    useEffect(() => {
      if (props.isOpen !== isOpen) {
        setIsOpen(!!props.isOpen);
      }
    }, [props.isOpen]);

    const handleClickOutside = (e: MouseEvent) => {
      const popNode = getPopupTarget();
      const childNode = getTarget();
      if (
        popNode &&
        childNode &&
        e.target &&
        !popNode.contains(e.target as HTMLElement) &&
        !childNode.contains(e.target as HTMLElement)
      ) {
        zIndex -= 1;
        setIsOpen(false);
        onVisibleChange && onVisibleChange(false);
      }
    };

    if (trigger === 'click' && !disabled) {
      triggerProps.onClick = (e) => {
        const { onClick } = getChildProps() as any;
        isOpen ? hide() : show();
        if (onClick) onClick(e, !isOpen);
      };
    }
    if (trigger === 'focus' && !disabled) {
      triggerProps.onFocus = () => handleShow();
    }

    if (trigger === 'hover' && !disabled) {
      triggerProps.onMouseOver = (e) =>
        handleMouseOverOut(handleShow, e, 'fromElement');
      triggerProps.onMouseOut = (e) =>
        handleMouseOverOut(handleHide, e, 'toElement');
      overlayProps.dialogProps!.onMouseOut = (e) =>
        handleMouseOverOut(handleHide, e, 'toElement');
    }
    overlayProps.style = { ...overlayProps.style, ...overlayStyl };
    function clearTimeouts() {
      if (timeoutRef.current.length > 0) {
        for (const timeoutId of timeoutRef.current) {
          window.clearTimeout(timeoutId);
        }
        timeoutRef.current = [];
      }
    }
    function handleShow() {
      clearTimeouts();
      hoverStateRef.current = 'show';

      const delay = normalizeDelay(props.delay);

      if (!delay.show) {
        show();
        return;
      }
      const handle = window.setTimeout(() => {
        if (hoverStateRef.current === 'show') show();
      }, delay.show);
      timeoutRef.current.push(handle);
    }

    function handleHide(isOutside: boolean) {
      clearTimeouts();
      if (!isOutside && props.isOutside) return;
      hoverStateRef.current = 'hide';

      const delay = normalizeDelay(props.delay);

      if (!delay.hide) {
        hide();
        return;
      }

      const handle = window.setTimeout(() => {
        if (hoverStateRef.current === 'hide') hide();
      }, delay.hide);

      timeoutRef.current.push(handle);
    }

    // Simple implementation of mouseEnter and mouseLeave.
    // React's built version is broken: https://github.com/facebook/react/issues/4251
    // for cases when the trigger is disabled and mouseOut/Over can cause flicker
    // moving from one child element to another.
    function handleMouseOverOut(
      handler: Function,
      e: React.MouseEvent,
      relatedNative: 'fromElement' | 'toElement',
    ) {
      const target = e.currentTarget as HTMLElement;
      const related = (e.relatedTarget ||
        (e.nativeEvent as any)[relatedNative]) as HTMLElement;
      const popupTarget = getPopupTarget();
      const currentTarget = getTarget();
      let isOutside = true;
      if (
        (popupTarget && contains(popupTarget, related)) ||
        (currentTarget && contains(currentTarget, related))
      ) {
        isOutside = false;
      }
      if ((!related || related !== target) && !contains(target, related)) {
        handler(isOutside, e);
      }
    }

    function hide() {
      if (!isOpen) return;
      zIndex -= 1;
      setIsOpen(false);
      onVisibleChange && onVisibleChange(false);
    }

    function show() {
      if (isOpen) return;
      zIndex += 1;
      setIsOpen(true);
      onVisibleChange && onVisibleChange(true);
    }

    function handleEnter(node: HTMLElement, isAppearing: boolean) {
      onEnter && onEnter(node, isAppearing);
      const styls = getStyle({
        placement: overlayStyl.placement,
        trigger: getTarget() as HTMLElement | IBoundingClientRect,
        popup: getPopupTarget() as HTMLElement | IBoundingClientRect,
        usePortal,
        autoAdjustOverflow,
        zIndex,
      });
      console.log('>>>getTarget()>>>', triggerRef.current);
      console.log('>>>popupRef()>>>', popupRef.current);
      setOverlayStyl({ ...styls });
    }
    return (
      <React.Fragment>
        {cloneElement(
          child,
          Object.assign({}, child.props, {
            ...triggerProps,
            ref: triggerRef,
            className: [
              child.props.className,
              disabled ? `${prefixCls}-disabled` : null,
            ]
              .filter(Boolean)
              .join(' ')
              .trim(),
          }),
        )}
        <Overlay
          {...overlayProps}
          onEnter={handleEnter}
          className={[prefixCls, className, overlayStyl.placement]
            .filter(Boolean)
            .join(' ')
            .trim()}
          usePortal={usePortal}
          transitionName={transitionName}
          isOpen={isOpen}
          hasBackdrop={false}
        >
          {cloneElement(
            overlay,
            Object.assign(
              { ref: popupRef },
              {
                ...overlay.props,
                className: [
                  overlay.props ? overlay.props.className : null,
                  placement,
                ]
                  .filter(Boolean)
                  .join(' ')
                  .trim(),
              },
            ),
          )}
        </Overlay>
      </React.Fragment>
    );
  },
);
