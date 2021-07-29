import React, { Fragment } from 'react';
import { IProps } from '@uiw/utils';
import './style/item.less';

type ElementTag<T = any> = T extends HTMLElement ? React.HTMLAttributes<T> : T;

export interface BreadcrumbItemProps<T = any> extends IProps, ElementTag {
  tagName?: T extends HTMLElement ? keyof JSX.IntrinsicElements : T;
  separator?: JSX.Element | string;
  active?: boolean;
  'data-separator'?: JSX.Element | string;
}

type RefElement<T = HTMLSpanElement> = T extends HTMLElement ? T : never;

const BreadcrumbItem = React.forwardRef<RefElement, BreadcrumbItemProps>(
  (props, ref) => {
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
    const otherProps = { className: cls, ...other };
    if (!isElm) {
      otherProps['data-separator'] = separator;
    }
    return React.createElement(
      TagName,
      {
        ...otherProps,
        ref,
      },
      <Fragment>
        {isElm && <span className={`${prefixCls}-separator`}>{separator}</span>}
        {props.children}
      </Fragment>,
    );
  },
);

export default BreadcrumbItem;
