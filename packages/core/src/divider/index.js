import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export class Divider extends React.PureComponent {
  render() {
    const { prefixCls, className, children, dashed, type, align, ...restProps } = this.props;
    const cls = classnames(className, prefixCls, `${prefixCls}-${type}`, `${prefixCls}-${align}`, {
      [`${prefixCls}-with-text`]: children,
      [`${prefixCls}-dashed`]: !!dashed,
    });
    return (
      <div className={cls} {...restProps}>
        {children && <span className={`${prefixCls}-inner-text`}>{children}</span>}
      </div>
    );
  }
}

Divider.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right', 'center']),
  dashed: PropTypes.bool,
};

Divider.defaultProps = {
  prefixCls: 'w-divider',
  type: 'horizontal',
  align: 'center',
  dashed: false,
};
