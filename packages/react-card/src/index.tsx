import React, { useMemo } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import { CardWarp, CardFooter, CardBody, CardHead, CardHeadTitle, CardHeadExtra } from './style';
export * from './style';

export interface CardProps extends IProps, Omit<HTMLDivProps, 'title'> {
  active?: boolean;
  bordered?: boolean;
  bodyStyle?: React.CSSProperties;
  bodyClassName?: string;
  title?: React.ReactNode;
  noHover?: boolean;
  extra?: React.ReactNode;
  footer?: React.ReactNode;
}

export default React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    prefixCls = 'w-card',
    className,
    title,
    extra,
    footer,
    bordered = true,
    noHover = false,
    active = false,
    bodyStyle,
    bodyClassName,
    children,
    ...resetProps
  } = props;
  const cls = useMemo(
    () =>
      [
        prefixCls,
        className,
        bordered ? `${prefixCls}-bordered` : null,
        noHover ? `${prefixCls}-no-hover` : null,
        active ? 'active' : null,
      ]
        .filter(Boolean)
        .join(' ')
        .trim(),
    [prefixCls, className, bordered, noHover],
  );

  return (
    <CardWarp
      {...resetProps}
      bordered={bordered}
      active={active}
      noHover={noHover}
      prefix={prefixCls}
      className={cls}
      ref={ref}
    >
      {(title || extra) && (
        <CardHead className={`${prefixCls}-head`}>
          {title && <CardHeadTitle className={`${prefixCls}-head-title`}>{title}</CardHeadTitle>}
          {extra && <CardHeadExtra className={`${prefixCls}-extra`}>{extra}</CardHeadExtra>}
        </CardHead>
      )}
      {children && (
        <CardBody className={[`${prefixCls}-body`, bodyClassName].filter(Boolean).join(' ').trim()} style={bodyStyle}>
          {children}
        </CardBody>
      )}
      {footer && <CardFooter className={`${prefixCls}-footer`}>{footer}</CardFooter>}
    </CardWarp>
  );
});
