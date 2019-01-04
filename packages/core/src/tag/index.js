import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Tag extends React.Component {
  render() {
    const { prefixCls, className, title, children, capsule, color, titleColor, disabled, ...other } = this.props;
    const cls = classnames(`${prefixCls}`, className, {
      'w-disabled': disabled,
      [`${prefixCls}-capsule`]: title && children,
    });
    let conSty = { borderColor: color };
    if (title && color) {
      conSty.backgroundColor = color;
      conSty.color = '#fff';
    } else {
      conSty.color = color;
    }
    const titleSty = {};
    if (titleColor) {
      titleSty.backgroundColor = titleColor || color;
      titleSty.borderColor = titleColor || color;
    }
    return (
      <span className={cls} {...other}>
        {title && <span style={titleSty} className={`${prefixCls}-title`}>{title}</span>}
        {children && <span style={conSty} className={`${prefixCls}-content`}>{children}</span>}
      </span>
    );
  }
}

Tag.propTypes = {
  prefixCls: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

Tag.defaultProps = {
  prefixCls: 'w-tag',
  disabled: false,
  title: '',
};
