import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuItem from './MenuItem';
import Menu from './Menu';
import OverlayTrigger from '../overlay-trigger';
import Icon from '../icon';
import './style/submenu.less';

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

export default class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  onClick = (e) => {
    const target = e.currentTarget;
    const related = e.relatedTarget || e.nativeEvent.toElement;
    if (!this.popup || target.children.length < 1) return;
    if (checkedMenuItem(related)) {
      this.popup.hide();
    }
  }
  onExit = (node) => {
    this.setState({ isOpen: false });
    node.style.height = `${node.scrollHeight}px`;
  }
  onExiting = (node) => {
    node.style.height = '0px';
  }
  onEnter = (node) => {
    node.style.height = '1px';
    this.setState({ isOpen: true });
  }
  onEntering = (node) => {
    node.style.height = `${node.scrollHeight}px`;
  }
  onEntered = (node) => {
    node.style.height = 'initial';
  }
  render() {
    const { prefixCls, className, disabled, overlayProps, children, collapse, ...other } = this.props;
    const overlayTriggerProps = { ...overlayProps };
    const menuProps = { bordered: true, children, className: classnames(`${prefixCls}-overlay`) };
    if (collapse) {
      delete menuProps.onClick;
      menuProps.bordered = false;
      overlayTriggerProps.className = `${prefixCls}-collapse`;
      overlayTriggerProps.appear = true;
      overlayTriggerProps.isOutside = true;
      overlayTriggerProps.isClickOutside = false;
      overlayTriggerProps.unmountOnExit = false;
      overlayTriggerProps.trigger = 'click';
      overlayTriggerProps.transitionName = `${prefixCls}`;
      overlayTriggerProps.onExit = this.onExit;
      overlayTriggerProps.onExiting = this.onExiting;
      overlayTriggerProps.onEnter = this.onEnter;
      overlayTriggerProps.onEntered = this.onEntered;
      overlayTriggerProps.onEntering = this.onEntering;
    } else {
      overlayTriggerProps.className = `${prefixCls}-popup`;
      menuProps.onClick = this.onClick;
    }
    return (
      <li data-menu="subitem">
        <OverlayTrigger
          placement="rightTop"
          trigger="hover"
          autoAdjustOverflow
          disabled={disabled}
          ref={node => this.popup = node}
          usePortal={false}
          isOutside
          {...overlayTriggerProps}
          overlay={
            <Menu {...menuProps} />
          }
        >
          <MenuItem
            {...other}
            disabled={disabled}
            children={children}
            isSubMenuItem
            addonAfter={
              <Icon
                type="caret-right"
                className={classnames(`${prefixCls}-collapse-icon`, {
                  'w-open': collapse && this.state.isOpen,
                  'w-close': collapse && !this.state.isOpen,
                })}
              />
            }
            className={classnames(className, `${prefixCls}-title`, { [`${prefixCls}-collapse-title`]: collapse })}
          />
        </OverlayTrigger>
      </li>
    );
  }
}

SubMenu.propTypes = {
  prefixCls: PropTypes.string,
  overlayProps: PropTypes.object,
  collapse: PropTypes.bool,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

SubMenu.defaultProps = {
  prefixCls: 'w-menu-subitem',
  overlayProps: {},
  collapse: false,
  active: false,
};
