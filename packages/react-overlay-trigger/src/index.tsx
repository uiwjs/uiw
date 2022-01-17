import React, {
  cloneElement,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
} from 'react';
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
  onMouseEnter?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const normalizeDelay = (delay?: Delay) =>
  delay && typeof delay === 'object' ? delay : { show: delay, hide: delay };

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

    const zIndex = useRef<number>(999);
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
      zIndex: zIndex.current,
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

    useEffect(() => {
      if (isClickOutside) {
        document && document.addEventListener('mousedown', handleClickOutside);
      }
      return () => {
        document &&
          isClickOutside &&
          document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    useEffect(() => {
      if (props.isOpen !== isOpen) {
        setIsOpen(!!props.isOpen);
      }
    }, [props.isOpen]);

    useEffect(() => {
      const styls = getStyle({
        placement: overlayStyl.placement || placement,
        trigger: triggerRef.current as HTMLElement | IBoundingClientRect,
        popup: popupRef.current as HTMLElement | IBoundingClientRect,
        usePortal,
        autoAdjustOverflow,
      });
      setOverlayStyl({ ...styls, zIndex: zIndex.current });
      onVisibleChange(isOpen);
    }, [isOpen]);

    const handleClickOutside = (e: MouseEvent) => {
      const popNode = popupRef.current;
      const childNode = triggerRef.current;
      if (
        popNode &&
        childNode &&
        e.target &&
        !contains(popNode, e.target as HTMLElement) &&
        !contains(childNode, e.target as HTMLElement)
      ) {
        zIndex.current -= 1;
        setIsOpen(false);
        onVisibleChange && onVisibleChange(false);
      }
    };

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
      let isOutside = true;
      if (
        (popupRef.current && contains(popupRef.current, related)) ||
        (triggerRef.current && contains(triggerRef.current, related))
      ) {
        isOutside = false;
      }
      if ((!related || related !== target) && !contains(target, related)) {
        handler(isOutside, e);
      }
    }

    function hide() {
      if (!isOpen) return;
      zIndex.current -= 1;
      setIsOpen(false);
    }

    function show() {
      if (isOpen) return;
      zIndex.current += 1;
      setIsOpen(true);
    }

    function handleEnter(node: HTMLElement, isAppearing: boolean) {
      onEnter && onEnter(node, isAppearing);
      const styls = getStyle({
        placement: overlayStyl.placement || placement,
        trigger: triggerRef.current as HTMLElement | IBoundingClientRect,
        popup: popupRef.current as HTMLElement | IBoundingClientRect,
        usePortal,
        autoAdjustOverflow,
      });
      setOverlayStyl({ ...styls, zIndex: zIndex.current });
    }

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
      triggerProps.onMouseOver = triggerProps.onMouseEnter = (e) => {
        handleMouseOverOut(handleShow, e, 'fromElement');
      };
      triggerProps.onMouseOut = triggerProps.onMouseLeave = (e) => {
        handleMouseOverOut(handleHide, e, 'toElement');
      };
      if (overlayProps.dialogProps) {
        overlayProps.dialogProps!.onMouseLeave = (e) => {
          handleMouseOverOut(handleHide, e, 'toElement');
        };
      }
    }
    overlayProps.style = { ...overlayProps.style, ...overlayStyl };
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
          style={{ ...overlayProps.style, ...overlayStyl }}
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
            Object.assign({
              ...overlay.props,
              ref: popupRef,
              className: [overlay.props && overlay.props.className, placement]
                .filter(Boolean)
                .join(' ')
                .trim(),
            }),
          )}
        </Overlay>
      </React.Fragment>
    );
  },
);