import React, { useMemo } from 'react';
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

const Menu = React.forwardRef<HTMLUListElement, MenuProps>((props, ref) => {
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
    <ul ref={ref} {...htmlProps} className={cls} data-menu="menu">
      {React.Children.map(children, (child: React.ReactNode, key) => {
        if (!React.isValidElement(child)) return child;
        const props: { inlineIndent?: number; inlineCollapsed?: boolean } = {};
        // Sub Menu
        if (child.props.children && child.type === (SubMenu as any)) {
          props.inlineIndent = inlineIndent;
        }
        return React.cloneElement(
          child,
          Object.assign({ ...props }, child.props, { key: `${key}` }),
        );
      })}
    </ul>
  );
});

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
