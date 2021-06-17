import React from 'react';
import { IProps } from '@uiw/utils';
import './style/item.less';

export interface BreadcrumbItemProps
  extends IProps,
    React.HTMLAttributes<HTMLOrSVGElement> {
  tagName?: keyof JSX.IntrinsicElements;
  separator?: JSX.Element | string;
  active?: boolean;
  'data-separator'?: JSX.Element | string;
}

export default function BreadcrumbItem<T>(props: BreadcrumbItemProps & T) {
  const {
    prefixCls = 'w-breadcrumb',
    className,
    tagName: TagName = 'span',
    active,
    separator,
    ...other
  } = props;
  const isElm = React.isValidElement(separator);
  const cls = [
    `${prefixCls}-item`,
    className,
    active ? 'active' : null,
    !separator ? 'no-separator' : null,
    isElm ? 'no-before' : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
  const otherProps = { className: cls, ...other } as BreadcrumbItemProps & T;
  if (!isElm) {
    otherProps['data-separator'] = separator;
  }
  return (
    <TagName {...otherProps}>
      {isElm && <span className={`${prefixCls}-separator`}>{separator}</span>}
      {props.children}
    </TagName>
  );
}
