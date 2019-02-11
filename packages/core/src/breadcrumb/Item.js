import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/item.less';

export default class BreadcrumbItem extends React.Component {
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

BreadcrumbItem.propTypes = {
  prefixCls: PropTypes.string,
};

BreadcrumbItem.defaultProps = {
  prefixCls: 'w-breadcrumb',
};
