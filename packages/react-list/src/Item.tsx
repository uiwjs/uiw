import React, { Fragment } from 'react';
import { IProps } from '@uiw/utils';

export type TagType = React.ComponentType | keyof JSX.IntrinsicElements;

export interface ListItemProps<Tag extends TagType> extends IProps, React.HTMLProps<Tag> {
  disabled?: boolean;
  active?: boolean;
  extra?: React.ReactNode;
  href?: string;
  tagName?: Tag;
}

export const ListItem = React.forwardRef(
  <Tag extends TagType = 'div'>(props: ListItemProps<Tag>, ref: React.Ref<React.HTMLProps<Tag>>) => {
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
      } as any,
      !extra || resetProps.href ? (
        children
      ) : (
        <Fragment>
          <div className={`${prefixCls}-main`}>{children}</div>
          <div className={`${prefixCls}-extra`}>{extra}</div>
        </Fragment>
      ),
    );
  },
);

ListItem.displayName = 'List.Item';
