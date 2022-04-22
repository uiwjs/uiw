import React, { useMemo } from 'react';
import { IProps, HTMLUlProps } from '@uiw/utils';
import { MenuItem } from './MenuItem';
import { MenuDivider } from './Divider';
import { SubMenu } from './SubMenu';
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
  setParamHeight?: (height: number) => void;
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
    setParamHeight,
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
    <ul {...htmlProps} ref={ref} className={cls} data-menu="menu">
      {React.Children.map(children, (child: React.ReactNode, key) => {
        if (!React.isValidElement(child)) return child;
        const props: { inlineIndent?: number; inlineCollapsed?: boolean; setParamHeight?: (height: number) => void } =
          {};
        // Sub Menu
        if (child.props.children && child.type === (SubMenu as any)) {
          props.inlineIndent = inlineIndent;
        }
        if ((child.type as typeof child.type & { displayName: string }).displayName === 'uiw.SubMenu') {
          props.setParamHeight = setParamHeight;
        }
        return React.cloneElement(child, Object.assign({ ...props }, child.props, { key: `${key}` }));
      })}
    </ul>
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
