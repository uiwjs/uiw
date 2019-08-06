import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '../utils/props';
import './style/index.less';

export interface ICardProps extends IProps, Omit<HTMLDivProps, 'title'> {
  active?: boolean;
  bordered?: boolean;
  bodyStyle?: React.CSSProperties;
  bodyClassName?: string;
  title?: React.ReactNode;
  noHover?: boolean;
  extra?: React.ReactNode;
  footer?: React.ReactNode;
}

export default class Card extends React.Component<ICardProps, {}> {
  public static defaultProps: ICardProps = {
    prefixCls: 'w-card',
    bordered: true,
    noHover: false,
    active: false,
  }
  public render() {
    const { prefixCls, className, title, extra, footer, bordered, noHover, active, bodyStyle, bodyClassName, children, ...resetProps } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-no-hover`]: noHover,
      active,
    });

    return (
      <div {...resetProps} className={cls}>
        {(title || extra) && (
          <div className={`${prefixCls}-head`}>
            {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
            {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
          </div>
        )}
        {children && <div className={classnames(`${prefixCls}-body`, bodyClassName)} style={bodyStyle}>{children}</div>}
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
    );
  }
}
