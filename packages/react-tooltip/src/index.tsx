import React from 'react';
import OverlayTrigger, { OverlayTriggerProps } from '@uiw/react-overlay-trigger';
import { IProps } from '@uiw/utils';
import { TooltipWarp, TooltipContainerWarp, TooltipArrowWarp, TooltipInnerWarp } from './style';
export interface TooltipProps extends IProps, OverlayTriggerProps {
  visibleArrow?: boolean;
  content?: React.ReactNode;
}

export default (props: TooltipProps = {}) => {
  const {
    prefixCls = 'w-tooltip',
    className,
    placement = 'top',
    isOpen = false,
    trigger,
    delay,
    usePortal = true,
    visibleArrow = true,
    onVisibleChange,
    ...other
  } = props;
  const cls = [prefixCls, className, !visibleArrow ? 'no-arrow' : null].filter(Boolean).join(' ').trim();
  return (
    <TooltipWarp
      as={OverlayTrigger}
      usePortal={usePortal}
      isOpen={isOpen}
      trigger={trigger}
      delay={delay}
      onVisibleChange={onVisibleChange}
      placement={placement}
      {...other}
      overlay={
        <TooltipContainerWarp placement={placement} visibleArrow={visibleArrow} className={cls}>
          {visibleArrow && <TooltipArrowWarp placement={placement} className={`${prefixCls}-arrow`} />}
          <TooltipInnerWarp className={`${prefixCls}-inner`}>{props.content}</TooltipInnerWarp>
        </TooltipContainerWarp>
      }
    >
      {typeof props.children === 'object' ? props.children : <span>{props.children}</span>}
    </TooltipWarp>
  );
};
