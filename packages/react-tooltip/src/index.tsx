import React from 'react';
import OverlayTrigger, {
  OverlayTriggerProps,
} from '@uiw/react-overlay-trigger';
import { IProps } from '@uiw/utils';
import './style/index.less';

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
  const cls = [prefixCls, className, !visibleArrow ? 'no-arrow' : null]
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <OverlayTrigger
      usePortal={usePortal}
      isOpen={isOpen}
      trigger={trigger}
      delay={delay}
      onVisibleChange={onVisibleChange}
      placement={placement}
      {...other}
      overlay={
        <div className={cls}>
          {visibleArrow && <div className={`${prefixCls}-arrow`} />}
          <div className={`${prefixCls}-inner`}>{props.content}</div>
        </div>
      }
    >
      {typeof props.children === 'object' ? (
        props.children
      ) : (
        <span>{props.children}</span>
      )}
    </OverlayTrigger>
  );
};
