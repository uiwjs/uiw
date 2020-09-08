import React, { useImperativeHandle, useMemo } from 'react';
import { IProps, HTMLUlProps } from '@uiw/utils';
import MenuItem from './MenuItem';
import Divider from './Divider';
import SubMenu from './SubMenu';
import './style/menu.less';

export interface MenuProps extends IProps, HTMLUlProps {
  /** 主题颜色 */
  theme?: 'light' | 'dark';
  /**
   * 垂直是否收起菜单
   * Default: `false`
   */
  inlineCollapsed?: boolean;
  /**
   * 菜单缩进宽度 Default: `10`
   */
  inlineIndent?: number;
  bordered?: boolean;
}

function InternalMenu(
  props: MenuProps = {},
  ref?:
    | ((instance: HTMLUListElement) => void)
    | React.RefObject<HTMLUListElement | null>
    | null,
) {
  const {
    prefixCls = 'w-menu',
    className,
    children,
    bordered,
    theme = 'light',
    inlineIndent = 10,
    inlineCollapsed,
    ...htmlProps
  } = props;
  const menuRef = React.createRef<HTMLUListElement>();
  useImperativeHandle(ref, () => menuRef.current);
  const cls = useMemo(
    () =>
      [
        prefixCls,
        bordered ? 'w-bordered' : null,
        inlineCollapsed ? `${prefixCls}-inline-collapsed` : null,
        theme ? `${prefixCls}-${theme}` : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')
        .trim(),
    [prefixCls, bordered, inlineCollapsed, theme, className],
  );

  return (
    <ul ref={menuRef} {...htmlProps} className={cls} data-menu="menu">
      {React.Children.map(children, (child: React.ReactNode) => {
        if (!React.isValidElement(child)) return child;
        const props: { inlineIndent?: number; inlineCollapsed?: boolean } = {};
        // Sub Menu
        if (child.props.children && child.type === SubMenu) {
          props.inlineIndent = inlineIndent;
        }
        return React.cloneElement(
          child,
          Object.assign({ ...props }, child.props, {}),
        );
      })}
    </ul>
  );
}

const Menu = React.forwardRef<HTMLUListElement, MenuProps>(InternalMenu);

type Menu = typeof Menu & {
  Item: typeof MenuItem;
  SubMenu: typeof SubMenu;
  Divider: typeof Divider;
};

(Menu as Menu).Item = MenuItem;
(Menu as Menu).SubMenu = SubMenu;
(Menu as Menu).Divider = Divider;
(Menu as Menu).displayName = 'uiw.Menu';

export default Menu as Menu;
