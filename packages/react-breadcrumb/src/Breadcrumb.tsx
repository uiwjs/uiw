import React from 'react';
import classnames from 'classnames';
import { HTMLDivProps } from '@uiw/utils';
import BreadcrumbItem from './Item';
import './style/index.less';

export interface BreadcrumbProps extends HTMLDivProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  separator?: JSX.Element | string;
}

export default class Breadcrumb extends React.Component<BreadcrumbProps> {
  public static defaultProps: BreadcrumbProps = {
    prefixCls: 'w-breadcrumb',
  }
  static Item: typeof BreadcrumbItem;
  public render() {
    const { prefixCls, className, separator, ...other } = this.props;
    const cls = classnames(prefixCls, className);
    return (
      <div {...{ className: cls, ...other }}>
        {React.Children.map(this.props.children, (element: any) => {
          return React.cloneElement(element, Object.assign({ separator }, element.props, {}));
        })}
      </div>
    );
  }
}
