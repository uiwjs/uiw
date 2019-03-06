import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export class Badge extends React.Component {
  render() {
    const { prefixCls, className, style, color, max, dot, processing, count, children, ...other } = this.props;
    const supProps = {
      className: classnames({ [`${prefixCls}-count`]: !dot, dot }),
    };
    const warpperProps = {
      ...other,
      className: classnames(className, `${prefixCls}`, {
        nowrap: !children,
        [`${prefixCls}-status`]: !children,
        [`${prefixCls}-processing`]: processing,
      }),
    };
    if (count || count === 0) {
      supProps.style = { backgroundColor: color, ...style };
    } else {
      warpperProps.style = style;
    }
    return (
      <span {...warpperProps}>
        {color && (<span className={`${prefixCls}-dot`} style={{ backgroundColor: color }} />)}
        {children}
        {count !== 0 && !color &&
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
  processing: PropTypes.bool,
  color: PropTypes.string,
};

Badge.defaultProps = {
  prefixCls: 'w-badge',
  dot: false,
  max: 99,
};
