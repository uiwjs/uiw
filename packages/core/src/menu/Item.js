import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import OverlayTrigger from '../overlay-trigger';
import Menu from './Menu';

const disabledProps = {
  href: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  tabIndex: -1,
};

function checkedMenuItem(node) {
  let isCheck = false;
  if (node) {
    // eslint-disable-next-line
    do {
      if (!node.dataset.menu) {
        isCheck = true;
      }
      if (/^(subitem|divider)$/.test(node.dataset.menu)) {
        isCheck = false;
      }
    } while (!node.dataset.menu && (node = node.parentNode));
  }
  return isCheck;
}

export default class MenuItem extends React.Component {
  static displayName = 'uiw.MenuItem';
  maybeRenderPopover(target, children) {
    if (children == null) {
      return target;
    }
    const { disabled, overlayProps } = this.props;
    return (
      <OverlayTrigger
        placement="rightTop"
        trigger="hover"
        autoAdjustOverflow
        disabled={disabled}
        ref={node => this.popup = node}
        usePortal={false}
        isOutside
        {...overlayProps}
        overlay={
          <Menu bordered onClick={this.onClick} className="w-overlay-content">{children}</Menu>
        }
      >
        {target}
      </OverlayTrigger>
    );
  }
  onClick = (e) => {
    const target = e.currentTarget;
    const related = e.relatedTarget || e.nativeEvent.toElement;
    if (!this.popup || target.children.length < 1) return;
    if (checkedMenuItem(related)) {
      this.popup.hide();
    }
  }
  render() {
    const { prefixCls, className, tagName: TagName, children, disabled, multiline, icon, text, active, ...htmlProps } = this.props;
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
      <li data-menu={hasSubmenu ? 'subitem' : 'item'}>
        {this.maybeRenderPopover(target, children)}
      </li>
    );
  }
}

MenuItem.propTypes = {
  prefixCls: PropTypes.string,
  tagName: PropTypes.string,
  text: PropTypes.node,
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
