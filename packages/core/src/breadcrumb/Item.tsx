import React from 'react';
import classnames from 'classnames';
import './style/item.less';

export interface IBreadcrumbItemProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls: string;
  separator?: JSX.Element | string;
  active?: boolean;
  'data-separator'?: JSX.Element | string;
}

export default class BreadcrumbItem extends React.Component<IBreadcrumbItemProps> {
  public static defaultProps = {
    prefixCls: 'w-breadcrumb',
  }
  render() {
    const { prefixCls, className, active, separator, ...other } = this.props;
    const isElm = React.isValidElement(separator);
    const cls = classnames(`${prefixCls}-item`, className, { active, 'no-separator': !separator, 'no-before': isElm });
    const props = { className: cls, ...other };
    if (!isElm) {
      props['data-separator'] = separator;
    }
    return (
      <span {...props}>
        {isElm && <span className={`${prefixCls}-separator`}>{separator}</span>}
        {this.props.children}
      </span>
    );
  }
}
