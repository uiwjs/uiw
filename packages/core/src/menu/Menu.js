import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style/menu.less';

export default class Menu extends React.Component {
  static displayName = 'uiw.Menu';
  render() {
    const { prefixCls, className, children, bordered, theme, inlineIndent, ...htmlProps } = this.props;
    const cls = classNames(prefixCls, className, { 'w-bordered': bordered, [`${prefixCls}-${theme}`]: theme });
    return (
      <ul {...htmlProps} className={cls} data-menu="menu">
        {React.Children.map(children, (child) => {
          const props = {};
          if (child.props.children) {
            props.inlineIndent = inlineIndent
          }
          return React.cloneElement(child, Object.assign({ ...props }, child.props, {}));
        })}
      </ul>
    );
  }
}

Menu.propTypes = {
  prefixCls: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  bordered: PropTypes.bool,
  inlineIndent: PropTypes.number,
};

Menu.defaultProps = {
  prefixCls: 'w-menu',
  theme: 'light',
  inlineIndent: 10,
  bordered: false,
};
