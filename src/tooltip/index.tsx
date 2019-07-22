import React from 'react';
import classnames from 'classnames';
import OverlayTrigger, {IOverlayTriggerProps} from '../overlay-trigger';
import { IProps } from '../utils/props';
import './style/index.less';

export interface ITooltipProps extends IProps, IOverlayTriggerProps {
  visibleArrow?: boolean;
  content?: React.ReactNode;
}

export default class Tooltip extends React.Component<ITooltipProps> {
  public static defaultProps: ITooltipProps = {
    prefixCls: 'w-tooltip',
    placement: 'top',
    usePortal: true,
    isOpen: false,
    visibleArrow: true,
  }
  render() {
    const { prefixCls, className, placement, isOpen, trigger, delay, usePortal, visibleArrow, onVisibleChange, ...other } = this.props;
    const cls = classnames(prefixCls, className, { 'no-arrow': !visibleArrow });
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
            <div className={`${prefixCls}-inner`}>{this.props.content}</div>
          </div>
        }
      >
        {typeof this.props.children === 'object' ? this.props.children : <span>{this.props.children}</span>}
      </OverlayTrigger>
    );
  }
}
