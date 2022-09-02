import React, { Fragment } from 'react';
import { IProps } from '@uiw/utils';
import { ListStyleItemExtra, ListStyleItemMain, ListStyleItemWarp } from './style';

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
      ListStyleItemWarp,
      {
        ...resetProps,
        className: cls,
        as: TagName,
        ref,
        disabled: props.disabled,
        active,
      } as any,
      !extra || resetProps.href ? (
        children
      ) : (
        <Fragment>
          <ListStyleItemMain className={`${prefixCls}-main`}>{children}</ListStyleItemMain>
          <ListStyleItemExtra className={`${prefixCls}-extra`}>{extra}</ListStyleItemExtra>
        </Fragment>
      ),
    );
  },
);

ListItem.displayName = 'List.Item';
