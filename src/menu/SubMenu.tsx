import React from 'react';
import classnames from 'classnames';
import MenuItem from './MenuItem';
import Menu, { IMenuProps } from './Menu';
import { CSSTransition } from 'react-transition-group';
import OverlayTrigger, { IOverlayTriggerProps } from '../overlay-trigger';
import Icon from '../icon';
import { IProps } from '../utils/props';
import './style/submenu.less';

export interface ISubMenuProps extends IProps {
  overlayProps?: IOverlayTriggerProps;
  collapse?: boolean;
  disabled?: boolean;
  active?: boolean;
  inlineIndent?: number;
}

export interface ISubMenuState {
  isOpen: boolean;
}

function checkedMenuItem(node?: HTMLElement) {
  let isCheck = false;
  if (node) {
    // eslint-disable-next-line
    do {
      if (!node.dataset.menu) {
        isCheck = true;
      }
      if (node.dataset.menu && /^(subitem|divider)$/.test(node.dataset.menu)) {
        isCheck = false;
      }
    } while (!node.dataset.menu && (node = node.parentNode as HTMLElement));
  }
  return isCheck;
}


export default class SubMenu extends React.Component<ISubMenuProps, ISubMenuState> {
  public static defaultProps: ISubMenuProps = {
    prefixCls: 'w-menu-subitem',
    overlayProps: {},
    collapse: false,
    active: false,
  }
  static state: ISubMenuState;
  static displayName: string = 'uiw.SubMenu';
  constructor(props: ISubMenuProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  public popup!: OverlayTrigger;
  onClick = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const target = e.currentTarget;
    const related = (e.relatedTarget || e.nativeEvent.toElement) as HTMLElement;
    if (!this.popup || target.children.length < 1) return;
    if (checkedMenuItem(related)) {
      this.popup.hide();
    }
  }
  onExit = (node: HTMLElement) => {
    this.setState({ isOpen: false });
    node.style.height = `${node.scrollHeight}px`;
  }
  onExiting = (node: HTMLElement) => {
    node.style.height = '0px';
  }
  onEnter = (node: HTMLElement) => {
    node.style.height = '1px';
    this.setState({ isOpen: true });
  }
  onEntering = (node: HTMLElement) => {
    node.style.height = `${node.scrollHeight}px`;
  }
  onEntered = (node: HTMLElement) => {
    node.style.height = 'initial';
  }
  render() {
    const { prefixCls, className, disabled, overlayProps, children, collapse, inlineIndent, ...other } = this.props;
    const overlayTriggerProps = { ...overlayProps } as IOverlayTriggerProps & CSSTransition.CSSTransitionProps;
    const menuProps: IMenuProps = { bordered: true, children, inlineIndent, className: classnames(`${prefixCls}-overlay`) };
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
          ref={node => {
            if (node) {
              this.popup = node;
            }
          }}
          usePortal={false}
          isOutside
          {...overlayTriggerProps}
          overlay={
            <Menu {...menuProps} style={{ paddingLeft: inlineIndent }} />
          }
        >
          <MenuItem
            {...other}
            disabled={disabled}
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
