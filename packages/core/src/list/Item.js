import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class List extends React.Component {
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

List.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  href: PropTypes.string,
};

List.defaultProps = {
  prefixCls: 'w-list-item',
  disabled: false,
  active: false,
  href: null,
};
