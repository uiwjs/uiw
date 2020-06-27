import React from 'react';
import classnames from 'classnames';
import OverlayTrigger, {
  OverlayTriggerProps,
} from '@uiw/react-overlay-trigger';
import './style/index.less';

export interface PopoverProps extends OverlayTriggerProps {
  content?: React.ReactNode;
  visibleArrow?: boolean;
}

export default class Popover extends React.Component<PopoverProps> {
  public static defaultProps: PopoverProps = {
    prefixCls: 'w-popover',
    placement: 'top',
    usePortal: true,
    isOpen: false,
    visibleArrow: true,
  };
  renderArrow = () => {
    const { prefixCls } = this.props;
    return (
      <div className={`${prefixCls}-arrow`}>
        <svg viewBox="0 0 30 30">
          <path
            fillOpacity="0.2"
            d="M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z"
          />
          <path
            fill="#fff"
            d="M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z"
          />
        </svg>
      </div>
    );
  };
  render() {
    const {
      prefixCls,
      className,
      content,
      visibleArrow,
      ...other
    } = this.props;
    const cls = classnames(prefixCls, className, { 'no-arrow': !visibleArrow });
    return (
      <OverlayTrigger
        {...other}
        overlay={
          <div className={cls}>
            {visibleArrow && this.renderArrow()}
            <div className={`${prefixCls}-inner`}>{this.props.content}</div>
          </div>
        }
      >
        {typeof this.props.children === 'object' ? (
          this.props.children
        ) : (
          <span>{this.props.children}</span>
        )}
      </OverlayTrigger>
    );
  }
}
