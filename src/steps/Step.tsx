import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import Icon, { IIconProps } from '../icon';
import { IProps, HTMLDivProps } from '../utils/props';
import './style/index.less';

export interface IStepProps<T> extends IProps, Omit<HTMLDivProps, 'title'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  progressDot?: boolean;
  itemWidth?: number;
  stepNumber?: string;
  adjustMarginRight?: number;
  icon?: IIconProps<T>['type'];
}

export default class Step<T> extends React.Component<IStepProps<T>> {
  render() {
    const { prefixCls, className, style, status, itemWidth, icon, adjustMarginRight, stepNumber, title, description, progressDot, ...restProps } = this.props;
    const classString = classnames(
      `${prefixCls}-item`,
      `${prefixCls}-item-${status}`,
      className, {
        [`${prefixCls}-custom`]: icon,
      }
    );
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
    } else if ((icon && typeof icon === 'string') || status === 'finish' || status === 'error') {
      iconNode = (<Icon type={classnames({
        [`${icon}`]: icon && typeof icon === 'string',
        check: !icon && status === 'finish',
        close: !icon && status === 'error',
      })}
      />);
    } else {
      iconNode = <span className={`${prefixCls}-icon`}>{stepNumber}</span>;
    }
    return (
      <div {...restProps} className={classString} style={stepItemStyle}>
        <div className={`${prefixCls}-item-tail`} style={stepItemDotStyle}><i /></div>
        <div className={`${prefixCls}-item-head`}>
          <div className={classnames(`${prefixCls}-item-inner`, {
            'is-icon': icon,
          })}
          >
            {iconNode}
          </div>
        </div>
        <div className={`${prefixCls}-item-main`}>
          <div className={`${prefixCls}-item-title`}>
            {title}
          </div>
          {description && <div className={`${prefixCls}-item-description`}>{description}</div>}
        </div>
      </div>
    );
  }
}
