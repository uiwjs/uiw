import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from './Item';
import Divider from './Divider';
import './style/menu.less';

export default class Menu extends React.Component {
  static displayName = 'uiw.Menu';
  static Item = MenuItem;
  static Divider = Divider;
  render() {
    const { prefixCls, className, children, bordered, ...htmlProps } = this.props;
    const cls = classNames(prefixCls, className, { bordered });
    return (
      <ul {...htmlProps} className={cls}>
        {children}
      </ul>
    );
  }
}

Menu.propTypes = {
  prefixCls: PropTypes.string,
  bordered: PropTypes.bool,
};

Menu.defaultProps = {
  prefixCls: 'w-menu',
  bordered: false,
};
