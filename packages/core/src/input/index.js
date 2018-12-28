import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';
import './style/input.less';

export default class Input extends React.Component {
  static defaultProps = {
    prefixCls: 'w-input',
    preIcon: null,
    type: 'text',
    size: 'default',
  }
  render() {
    const { prefixCls, size, type, preIcon, addonAfter, ...props } = this.props;
    const cls = classnames(prefixCls, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-addon`]: addonAfter,
    });
    return (
      <div className={cls}>
        <Icon type={preIcon} />
        <input
          type={type}
          {...props}
          className={classnames(`${prefixCls}-inner`, {
            
          })}
        />
        {addonAfter && (
          <span className={`${prefixCls}-addon-after`} ref={this.addonAfter}>
            {addonAfter}
          </span>
        )}
      </div>
    );
  }
}

Input.propTypes = {
  prefixCls: PropTypes.string,
  preIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.string,
  size: PropTypes.oneOf(['large', 'default', 'small']),
};
