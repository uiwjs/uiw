import React from 'react';
import classnames from 'classnames';
import { HTMLSpanProps } from '@uiw/utils';
import './style/item.less';

export interface BreadcrumbItemProps extends HTMLSpanProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  tagName?: keyof JSX.IntrinsicElements | any;
  separator?: JSX.Element | string;
  active?: boolean;
  'data-separator'?: JSX.Element | string;
}

export default function BreadcrumbItem<T>(
  props = {} as BreadcrumbItemProps & T,
) {
  const {
    prefixCls = 'w-breadcrumb',
    className,
    tagName: TagName = 'span',
    active,
    separator,
    ...other
  } = props;
  const isElm = React.isValidElement(separator);
  const cls = classnames(`${prefixCls}-item`, className, {
    active,
    'no-separator': !separator,
    'no-before': isElm,
  });
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
