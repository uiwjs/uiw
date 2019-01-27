import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Item extends React.Component {
  render() {
    const { prefixCls, className, children, active, ...resetProps } = this.props;
    const cls = classnames(`${prefixCls}`, className, {
      'w-disabled': this.props.disabled,
      'w-active': active,
    });

    const tagName = this.props.href ? 'a' : 'div';
    return React.createElement(tagName, {
      className: cls,
      ...resetProps,
    }, children);
  }
}

Item.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  href: PropTypes.string,
};

Item.defaultProps = {
  prefixCls: 'w-list-item',
  disabled: false,
  active: false,
  href: null,
};
