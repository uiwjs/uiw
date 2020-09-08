import React from 'react';
import { HTMLDivProps } from '@uiw/utils';
import Item from './Item';
import './style/index.less';

export interface BreadcrumbProps extends HTMLDivProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  separator?: JSX.Element | string;
}

function InternalBreadcrumb(props: BreadcrumbProps = {}) {
  const {
    prefixCls = 'w-breadcrumb',
    className,
    separator = '/',
    ...other
  } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return (
    <div {...{ className: cls, ...other }}>
      {React.Children.map(props.children, (element: any) => {
        return React.cloneElement(
          element,
          Object.assign({ separator }, element.props, {}),
        );
      })}
    </div>
  );
}

const Breadcrumb = React.forwardRef<unknown, BreadcrumbProps>(
  InternalBreadcrumb,
);
type Breadcrumb = typeof Breadcrumb & {
  Item: typeof Item;
};

(Breadcrumb as Breadcrumb).Item = Item;

export default Breadcrumb as Breadcrumb;
