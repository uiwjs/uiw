import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Tag extends React.Component {
  render() {
    const { prefixCls, className, style, title, children, visible, color, disabled, bordered, closable, light, onClose, ...other } = this.props;
    const cls = classnames(`${prefixCls}`, className, { [`${prefixCls}-light`]: light, disabled });
    const styl = { ...style };
    if (!light) {
      styl.color = '#fff';
      styl.backgroundColor = color;
    } else {
      styl.color = color;
      styl.borderColor = color;
      if (bordered && light) {
        styl.boxShadow = `inset 0 0 0 1px ${color}`;
      }
    }
    if (!visible) {
      return null;
    }
    return (
      <span className={cls} style={styl} {...other}>
        {title || children}
        {closable && (
          <svg onClick={onClose} className={`${prefixCls}-close`} width="16" height="16" viewBox="0 0 16 16">
            <path d="M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z" />
          </svg>
        )}
      </span>
    );
  }
}

Tag.propTypes = {
  prefixCls: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  visible: PropTypes.bool,
  bordered: PropTypes.bool,
  light: PropTypes.bool,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

Tag.defaultProps = {
  prefixCls: 'w-tag',
  disabled: false,
  visible: true,
  bordered: true,
  color: '#6E6E6E',
  light: false,
  title: '',
};
