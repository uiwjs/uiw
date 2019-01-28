import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import OverlayTrigger from '../overlay-trigger';
import Menu from './Menu';

export default class MenuItem extends React.Component {
  static displayName = `uiw.MenuItem`;
  maybeRenderPopover(target, children) {
    if (children == null) {
      return target;
    }
    const { disabled, overlayProps } = this.props;
    return (
      <OverlayTrigger
        placement="rightTop"
        trigger="hover"
        disabled={disabled}
        usePortal={false}
        {...overlayProps}
        overlay={
          <Menu bordered className="w-overlay-content">{children}</Menu>
        }
      >
        {target}
      </OverlayTrigger>
    );
  }
  render() {
    const { prefixCls, className, tagName: TagName, children, disabled, multiline, icon, text, active, ...htmlProps } = this.props;
    const cls = classNames();
    const hasSubmenu = children !== undefined;
    const anchorCls = classNames(prefixCls, className, { active, disabled });
    const target = (
      <TagName
        {...htmlProps}
        {...(disabled ? disabledProps : {})}
        className={anchorCls}
      >
        <Icon className={`${prefixCls}-icon`} type={icon} />
        <div className={`${prefixCls}-text`}>
          {text}
        </div>
        {hasSubmenu && <Icon type="caret-right" />}
      </TagName>
    );
    return (
      <li {...htmlProps} className={cls}>
        {this.maybeRenderPopover(target, children)}
      </li>
    );
  }
}

MenuItem.propTypes = {
  prefixCls: PropTypes.string,
  tagName: PropTypes.string,
  /**
   * 允许多行文本换行
   */
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  overlayProps: PropTypes.object,
};

MenuItem.defaultProps = {
  prefixCls: 'w-menu-item',
  tagName: 'a',
  multiline: false,
  disabled: false,
  active: false,
};


const disabledProps = {
  href: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  tabIndex: -1,
}
