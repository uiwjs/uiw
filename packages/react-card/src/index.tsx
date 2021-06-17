import React, { useMemo } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/index.less';

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
    <div {...resetProps} className={cls} ref={ref}>
      {(title || extra) && (
        <div className={`${prefixCls}-head`}>
          {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
          {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
        </div>
      )}
      {children && (
        <div
          className={[`${prefixCls}-body`, bodyClassName]
            .filter(Boolean)
            .join(' ')
            .trim()}
          style={bodyStyle}
        >
          {children}
        </div>
      )}
      {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
    </div>
  );
});
