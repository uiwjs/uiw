import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import './style/item.less';

const disabledProps = {
  href: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  tabIndex: -1,
};

export default class MenuItem extends React.Component {
  static displayName = 'uiw.MenuItem';
  render() {
    const { prefixCls, className, tagName: TagName, children, disabled, multiline, icon, text, active, overlayProps, addonAfter, ...htmlProps } = this.props;
    const anchorCls = classNames(prefixCls, className, { active, disabled });
    return (
      <TagName
        {...htmlProps}
        {...(disabled ? disabledProps : {})}
        className={anchorCls}
      >
        <Icon className={`${prefixCls}-icon`} type={icon} />
        <div className={`${prefixCls}-text`}>
          {text}
        </div>
        {addonAfter}
      </TagName>
    );
  }
}

MenuItem.propTypes = {
  prefixCls: PropTypes.string,
  tagName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  text: PropTypes.node,
  addonAfter: PropTypes.node,
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

MenuItem.defaultProps = {
  prefixCls: 'w-menu-item',
  tagName: 'a',
  multiline: false,
  disabled: false,
  active: false,
};
