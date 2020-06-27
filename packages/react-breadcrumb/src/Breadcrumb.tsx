import React from 'react';
import classnames from 'classnames';
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
  const cls = classnames(prefixCls, className);
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

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<BreadcrumbProps> {
  Item: typeof Item;
}

const Breadcrumb = React.forwardRef<unknown, BreadcrumbProps>(
  InternalBreadcrumb,
) as CompoundedComponent;
Breadcrumb.Item = Item;

export default Breadcrumb;
