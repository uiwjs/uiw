import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/buttons-group.less';

export default class ButtonGroup extends React.Component {
  render() {
    const { prefixCls, vertical, children, className, ...resetProps } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-vertical`]: vertical,
      [className]: className,
    });

    return (
      <div className={cls} {...resetProps}>
        {children}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  prefixCls: PropTypes.string,
  vertical: PropTypes.bool,
};
ButtonGroup.defaultProps = {
  prefixCls: 'w-btn-group',
  vertical: false,
};
