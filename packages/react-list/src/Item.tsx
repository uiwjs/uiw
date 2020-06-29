import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps, HTMLAnchorProps, AnchorProps } from '@uiw/utils';

export interface ListItemProps
  extends IProps,
    HTMLDivProps,
    Pick<HTMLAnchorProps, AnchorProps> {
  disabled?: boolean;
  active?: boolean;
  extra?: React.ReactNode;
  href?: string;
  tagName?: HTMLElement['tagName'];
}

export default function Item<T>(props = {} as ListItemProps & T) {
  const {
    prefixCls = 'w-list-item',
    className,
    children,
    extra,
    tagName: TagName = 'div',
    active = false,
    ...resetProps
  } = props;
  const cls = classnames(`${prefixCls}`, className, {
    'w-disabled': props.disabled,
    'w-active': active,
  });
  const tagName = props.href && typeof TagName === 'string' ? 'a' : TagName;
  return React.createElement(
    tagName,
    {
      className: cls,
      ...resetProps,
    },
    !extra || resetProps.href ? (
      children
    ) : (
      <>
        <div className={`${prefixCls}-main`}>{children}</div>
        <div className={`${prefixCls}-extra`}>{extra}</div>
      </>
    ),
  );
}
