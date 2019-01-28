import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style/menu.less';

export default class Divider extends React.Component {
  static displayName = 'uiw.Divider';
  render() {
    const { prefixCls, className, title, ...htmlProps } = this.props;
    const cls = classNames(prefixCls, className);
    if (!title) {
      return <li {...htmlProps} className={cls} />;
    }
    return (
      <li {...htmlProps} className={cls}>
        <strong>{title}</strong>
      </li>
    );
  }
}

Divider.propTypes = {
  prefixCls: PropTypes.string,
  // disabled: PropTypes.bool,
  // active: PropTypes.bool,
  // href: PropTypes.string,
};

Divider.defaultProps = {
  prefixCls: 'w-menu-divider',
  // disabled: false,
  // active: false,
  // href: null,
};
