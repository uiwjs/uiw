import React, { Fragment } from 'react';
import { IProps } from '@uiw/utils';
import { BreadcrumbWarpItem, BreadcrumbSeparator } from './style';

type ElementTag<T = any> = T extends HTMLElement ? React.HTMLAttributes<T> : T;

export interface BreadcrumbItemProps<T = any> extends IProps, ElementTag {
  tagName?: T extends HTMLElement ? keyof JSX.IntrinsicElements : T;
  separator?: JSX.Element | string;
  active?: boolean;
  'data-separator'?: JSX.Element | string;
}

type RefElement<T = HTMLSpanElement> = T extends HTMLElement ? T : never;

const BreadcrumbItem = React.forwardRef<RefElement, BreadcrumbItemProps>((props, ref) => {
  const { prefixCls = 'w-breadcrumb', className, tagName: TagName = 'span', active, separator, ...other } = props;
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
  const otherProps = { className: cls, ...other, as: TagName };
  if (!isElm) {
    otherProps['data-separator'] = separator;
  }
  return React.createElement(
    BreadcrumbWarpItem,
    {
      ...otherProps,
      noSeparator: !separator,
      noBefore: isElm,
      active,
      ref,
    },
    <Fragment>
      {isElm && <BreadcrumbSeparator className={`${prefixCls}-separator`}>{separator}</BreadcrumbSeparator>}
      {props.children}
    </Fragment>,
  );
});

export default BreadcrumbItem;
