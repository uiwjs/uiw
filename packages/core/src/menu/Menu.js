import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style/menu.less';

export default class Menu extends React.Component {
  static displayName = 'uiw.Menu';
  render() {
    const { prefixCls, className, children, bordered, theme, ...htmlProps } = this.props;
    const cls = classNames(prefixCls, className, { 'w-bordered': bordered, [`${prefixCls}-${theme}`]: theme });
    return (
      <ul {...htmlProps} className={cls} data-menu="menu">
        {children.map((child, key) => React.cloneElement(child, { ...child.props, key }))}
      </ul>
    );
  }
}

Menu.propTypes = {
  prefixCls: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  bordered: PropTypes.bool,
};

Menu.defaultProps = {
  prefixCls: 'w-menu',
  theme: 'light',
  bordered: false,
};
