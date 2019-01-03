import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/item.less';

export default class BreadcrumbItem extends React.Component {
  render() {
    const { prefixCls, className, active, ...other } = this.props;
    const cls = classnames(prefixCls, className, { active, ['no-separator']: !other['data-separator'] });
    return (
      <span {...{ className: cls, ...other }}>{this.props.children}</span>
    );
  }
}

BreadcrumbItem.propTypes = {
  prefixCls: PropTypes.string,
};

BreadcrumbItem.defaultProps = {
  prefixCls: 'w-breadcrumb-item',
  ['data-separator']: '/',
};
