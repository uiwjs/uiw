import React, { useMemo, useImperativeHandle } from 'react';
import classnames from 'classnames';
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

function InternalCard(
  props: CardProps = {},
  ref?:
    | ((instance: HTMLDivElement) => void)
    | React.RefObject<HTMLDivElement | null>
    | null,
) {
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
  const divRef = React.createRef<HTMLDivElement>();
  useImperativeHandle(ref, () => divRef.current);
  const cls = useMemo(
    () =>
      classnames(prefixCls, className, {
        [`${prefixCls}-bordered`]: bordered,
        [`${prefixCls}-no-hover`]: noHover,
        active,
      }),
    [prefixCls, className, bordered, noHover],
  );

  return (
    <div {...resetProps} className={cls} ref={divRef}>
      {(title || extra) && (
        <div className={`${prefixCls}-head`}>
          {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
          {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
        </div>
      )}
      {children && (
        <div
          className={classnames(`${prefixCls}-body`, bodyClassName)}
          style={bodyStyle}
        >
          {children}
        </div>
      )}
      {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
    </div>
  );
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(InternalCard);

export default Card;
