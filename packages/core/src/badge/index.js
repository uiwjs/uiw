import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export class Badge extends React.Component {
  render() {
    const { prefixCls, style, max, dot, status, className, count, children, ...other } = this.props;
    const supProps = {
      className: classnames({
        [`${prefixCls}-count`]: !dot,
        'w-dot': dot,
      }),
    };
    const warpperProps = {
      ...other,
      className: classnames(className, `${prefixCls}`, {
        nowrap: !children,
        [`${prefixCls}-status`]: status,
        [`${prefixCls}-status-${status}`]: status,
      }),
    };
    if (dot || status) {
      warpperProps.style = style;
    } else {
      supProps.style = style;
    }
    return (
      <span {...warpperProps}>
        {status && (<span className={`${prefixCls}-dot`} />)}
        {children}
        {count !== 0 && !status &&
          <sup {...supProps}>
            {!dot && count > max ? `${max}+` : count}
          </sup>
        }
      </span>
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
