import React from 'react';
import classnames from 'classnames';
import { IProps } from '@uiw/utils';

export interface ListItemProps
  extends IProps,
    React.AllHTMLAttributes<HTMLElement> {
  disabled?: boolean;
  active?: boolean;
  extra?: React.ReactNode;
  href?: string;
  tagName?: keyof JSX.IntrinsicElements | any;
}

export default function Item<T>(props = {} as ListItemProps & T) {
  const {
    prefixCls = 'w-list-item',
    className,
    children,
    extra,
    tagName = 'div',
    active = false,
    ...resetProps
  } = props;
  const cls = classnames(`${prefixCls}`, className, {
    'w-disabled': props.disabled,
    'w-active': active,
  });
  const TagName = props.href && typeof tagName === 'string' ? 'a' : tagName;
  return (
    <TagName className={cls} {...resetProps}>
      {!extra || resetProps.href ? (
        children
      ) : (
        <>
          <div className={`${prefixCls}-main`}>{children}</div>
          <div className={`${prefixCls}-extra`}>{extra}</div>
        </>
      )}
    </TagName>
  );
}
