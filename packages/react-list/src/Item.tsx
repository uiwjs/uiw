import React, { Fragment } from 'react';
import { IProps } from '@uiw/utils';

type ElementTag<T = any> = T extends HTMLElement ? React.HTMLProps<T> : T;

export interface ListItemProps<T = HTMLDivElement> extends IProps, ElementTag {
  disabled?: boolean;
  active?: boolean;
  extra?: React.ReactNode;
  href?: string;
  tagName?: T extends HTMLElement ? keyof JSX.IntrinsicElements : T;
}

const Item = React.forwardRef<HTMLDivElement, ListItemProps>((props, ref) => {
  const {
    prefixCls = 'w-list-item',
    className,
    children,
    extra,
    tagName = 'div',
    active = false,
    ...resetProps
  } = props;
  const cls = [prefixCls, className, props.disabled ? 'w-disabled' : null, active ? 'w-active' : null]
    .filter(Boolean)
    .join(' ')
    .trim();
  const TagName = props.href && typeof tagName === 'string' ? 'a' : tagName;
  return React.createElement(
    TagName,
    {
      ...resetProps,
      className: cls,
      ref,
    },
    <Fragment>
      {!extra || resetProps.href ? (
        children
      ) : (
        <>
          <div className={`${prefixCls}-main`}>{children}</div>
          <div className={`${prefixCls}-extra`}>{extra}</div>
        </>
      )}
    </Fragment>,
  );
});

Item.displayName = 'List.Item';

export default Item;
