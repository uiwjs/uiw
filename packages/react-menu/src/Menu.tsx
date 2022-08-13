import React, { useMemo } from 'react';
import { IProps, HTMLUlProps } from '@uiw/utils';
import { MenuItem } from './MenuItem';
import { MenuDivider } from './Divider';
import { SubMenu } from './SubMenu';
// import './style/menu.less';
import { MenuStyleBase } from './style';
import { useMenuContext, MenuContext } from './hooks';
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
  const store = useMenuContext();
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
    <MenuContext.Provider value={store}>
      <MenuStyleBase
        {...htmlProps}
        params={{
          bordered,
          inlineCollapsed,
          theme,
        }}
        ref={ref}
        className={cls}
        data-menu="menu"
      >
        {React.Children.map(children, (child: React.ReactNode, key) => {
          if (!React.isValidElement(child)) return child;
          const props: { inlineIndent?: number; inlineCollapsed?: boolean } = {};
          // Sub Menu
          if (child.props.children && child.type === (SubMenu as any)) {
            props.inlineIndent = inlineIndent;
          }
          return React.cloneElement(child, Object.assign({ ...props, theme }, child.props, { key: `${key}` }));
        })}
      </MenuStyleBase>
    </MenuContext.Provider>
  );
});

Menu.displayName = 'uiw.Menu';

type Menu = typeof Menu & {
  Item: typeof MenuItem;
  SubMenu: typeof SubMenu;
  Divider: typeof MenuDivider;
};

(Menu as Menu).Item = MenuItem;
(Menu as Menu).SubMenu = SubMenu;
(Menu as Menu).Divider = MenuDivider;

export default Menu as Menu;
