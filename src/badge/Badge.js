import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class Badge extends Component {
  render() {
    const { prefixCls, style, max, dot, status, className, count, children, ...other } = this.props;
    return (
      <div
        {...other}
        className={this.classNames(className, `${prefixCls}`, {
          nowrap: !children,
          [`${prefixCls}-status`]: status,
          [`${prefixCls}-status-${status}`]: status,
        })}
      >
        {status && (<span className={`${prefixCls}-dot`} />)}
        {children}
        {count !== 0 && !status &&
          <sup
            style={style}
            className={this.classNames({
              [`${prefixCls}-count`]: !dot,
              'w-dot': dot,
            })}
          >
            {!dot && count > max ? `${max}+` : count}
          </sup>
        }
      </div>
    );
  }
}

Badge.propTypes = {
  prefixCls: PropTypes.string,
  count: PropTypes.number,
  dot: PropTypes.bool,
  max: PropTypes.number,
  status: PropTypes.oneOf([
    'success', 'processing', 'default', 'error', 'warning',
  ]),
};

Badge.defaultProps = {
  prefixCls: 'w-badge',
  dot: false,
  max: 99,
  status: null,
};
