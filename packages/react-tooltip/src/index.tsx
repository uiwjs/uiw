import React from 'react';
import OverlayTrigger, { OverlayTriggerProps } from '@uiw/react-overlay-trigger';
import { IProps } from '@uiw/utils';
import { TooltipStyleWarp, TooltipStyleContainerWarp, TooltipStyleArrowWarp, TooltipStyleInnerWarp } from './style';
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
    <TooltipStyleWarp
      as={OverlayTrigger}
      usePortal={usePortal}
      isOpen={isOpen}
      trigger={trigger}
      delay={delay}
      onVisibleChange={onVisibleChange}
      placement={placement}
      {...other}
      overlay={
        <TooltipStyleContainerWarp placement={placement} visibleArrow={visibleArrow} className={cls}>
          {visibleArrow && <TooltipStyleArrowWarp placement={placement} className={`${prefixCls}-arrow`} />}
          <TooltipStyleInnerWarp className={`${prefixCls}-inner`}>{props.content}</TooltipStyleInnerWarp>
        </TooltipStyleContainerWarp>
      }
    >
      {typeof props.children === 'object' ? props.children : <span>{props.children}</span>}
    </TooltipStyleWarp>
  );
};
