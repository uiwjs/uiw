import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class BreadcrumbItem extends Component {
  render() {
    const { prefixCls, href, separator, className, ...other } = this.props;
    return (
      <span {...other} className={this.classNames(prefixCls, className)}>
        <span className={`${prefixCls}-inner`}>
          {href && (
            <a href={href} {...other} className={`${prefixCls}-link`}>
              {this.props.children}
            </a>
          )}
          {!href && this.props.children}
        </span>
        <span className={`${prefixCls}-separator`}>{separator || this.context.separator}</span>
      </span>
    );
  }
}

BreadcrumbItem.contextTypes = {
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};


BreadcrumbItem.propTypes = {
  prefixCls: PropTypes.string,
  href: PropTypes.string,
};
BreadcrumbItem.defaultProps = {
  prefixCls: 'w-breadcrumb-item',
};
