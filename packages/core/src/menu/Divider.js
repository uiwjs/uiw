import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Divider extends React.Component {
  static displayName = 'uiw.MenuDivider';
  render() {
    const { prefixCls, className, title, ...htmlProps } = this.props;
    const cls = classNames(prefixCls, className);
    if (!title) {
      return <li {...htmlProps} className={cls} />;
    }
    return (
      <li {...htmlProps} className={cls} data-menu="divider">
        <strong>{title}</strong>
      </li>
    );
  }
}

Divider.propTypes = {
  prefixCls: PropTypes.string,
  title: PropTypes.string,
};

Divider.defaultProps = {
  prefixCls: 'w-menu-divider',
};
