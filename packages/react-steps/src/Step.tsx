import React, { CSSProperties } from 'react';
import Icon, { IconProps } from '@uiw/react-icon';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/index.less';

export interface StepProps<T> extends IProps, Omit<HTMLDivProps, 'title'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  progressDot?: boolean;
  itemWidth?: number;
  stepNumber?: string;
  adjustMarginRight?: number;
  icon?: IconProps<T>['type'];
}

export default class Step<T> extends React.Component<StepProps<T>> {
  render() {
    const {
      prefixCls,
      className,
      style,
      status,
      itemWidth,
      icon,
      adjustMarginRight,
      stepNumber,
      title,
      description,
      progressDot,
      ...restProps
    } = this.props;
    const classString = [
      `${prefixCls}-item`,
      `${prefixCls}-item-${status}`,
      className,
      icon ? `${prefixCls}-custom` : null,
    ]
      .filter(Boolean)
      .join(' ')
      .trim();
    const stepItemStyle: CSSProperties = { ...style };
    const stepItemDotStyle: CSSProperties = {};
    if (itemWidth) {
      stepItemStyle.width = itemWidth;
    }
    if (adjustMarginRight) {
      stepItemStyle.marginRight = adjustMarginRight;
      if (progressDot) {
        stepItemDotStyle.paddingRight = Math.abs(adjustMarginRight);
      }
    }
    let iconNode = null;
    if (progressDot) {
      iconNode = <span className={`${prefixCls}-dot`} />;
    } else if (icon && typeof icon !== 'string') {
      iconNode = <span className={`${prefixCls}-icon`}>{icon}</span>;
    } else if (
      (icon && typeof icon === 'string') ||
      status === 'finish' ||
      status === 'error'
    ) {
      iconNode = (
        <Icon
          type={[
            icon && typeof icon === 'string' ? `${icon}` : null,
            !icon && status === 'finish' ? 'check' : null,
            !icon && status === 'error' ? 'close' : null,
          ]
            .filter(Boolean)
            .join(' ')
            .trim()}
        />
      );
    } else {
      iconNode = <span className={`${prefixCls}-icon`}>{stepNumber}</span>;
    }
    return (
      <div {...restProps} className={classString} style={stepItemStyle}>
        <div className={`${prefixCls}-item-tail`} style={stepItemDotStyle}>
          <i />
        </div>
        <div className={`${prefixCls}-item-head`}>
          <div
            className={[`${prefixCls}-item-inner`, icon ? 'is-icon' : null]
              .filter(Boolean)
              .join(' ')
              .trim()}
          >
            {iconNode}
          </div>
        </div>
        <div className={`${prefixCls}-item-main`}>
          <div className={`${prefixCls}-item-title`}>{title}</div>
          {description && (
            <div className={`${prefixCls}-item-description`}>{description}</div>
          )}
        </div>
      </div>
    );
  }
}
