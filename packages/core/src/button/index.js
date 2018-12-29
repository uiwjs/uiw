import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';
import './style/index.less';

export default class Button extends React.Component {
  render() {
    const { prefixCls, type, size, icon, active, disabled, block, basic, intent, className, loading, children, htmlType, ...others } = this.props;
    let types = type;
    const cls = classnames(className, prefixCls, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${types}`]: types,
      [`${prefixCls}-basic`]: basic,
      [`${prefixCls}-loading`]: loading, // 加载
      disabled: disabled || loading, // 禁用状态
      active, // 激活状态
      block, // 块级元素Block level
    });
    return (
      <button {...others} disabled={disabled || loading} type={htmlType} className={cls}>
        {icon && <Icon type={icon} />}
        {children && React.Children.map(children, (child) => {
          if (React.isValidElement(child)) return child;
          return <span> {child} </span>;
        })}
      </button>
    );
  }
}

Button.defaultProps = {
  prefixCls: 'w-btn',
  disabled: false,
  active: false,
  loading: false,
  block: false,
  basic: false,
  htmlType: 'button',
  type: 'light',
  size: 'default',
};
Button.propTypes = {
  prefixCls: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  active: PropTypes.bool,
  basic: PropTypes.bool,
  htmlType: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'light', 'dark', 'link']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
};

