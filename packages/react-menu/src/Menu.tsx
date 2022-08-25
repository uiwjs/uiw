import React, { useMemo, createContext } from 'react';
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
}
interface MenuContextType {
  // 需要加上或者减去的高度
  height: number;
  // 事件源dom
  ele: EventTarget | null;
}
export const ThemeContext = createContext(
  {} as MenuContextType & {
    setContextHeight: React.Dispatch<React.SetStateAction<MenuContextType>>;
  },
);

export const Menu = React.forwardRef<HTMLUListElement, MenuProps>((props, ref) => {
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
    <ul {...htmlProps} ref={ref} className={cls} data-menu="menu">
      {React.Children.map(children, (child: React.ReactNode, key) => {
        if (!React.isValidElement(child)) return child;
        const props: { inlineIndent?: number; inlineCollapsed?: boolean } = {};
        // Sub Menu
        if (child.props.children && child.type === (SubMenu as any)) {
          props.inlineIndent = inlineIndent;
        }
        return React.cloneElement(child, Object.assign({ ...props }, child.props, { key: `${key}` }));
      })}
    </ul>
  );
});

const InternalContextMenu = (props: MenuProps, ref?: React.ForwardedRef<HTMLUListElement>) => {
  const [contextHeight, setContextHeight] = React.useState<MenuContextType>({ height: 0, ele: null });
  return (
    <ThemeContext.Provider value={{ ...contextHeight, setContextHeight }}>
      <Menu {...props} ref={ref} />
    </ThemeContext.Provider>
  );
};

const ContextMenu: ContextMenuComponent = React.forwardRef<HTMLUListElement>(
  InternalContextMenu,
) as unknown as ContextMenuComponent;

Menu.displayName = 'uiw.Menu';
ContextMenu.displayName = 'uiw.Menu';

type ContextMenuComponent = React.FC<React.PropsWithRef<MenuProps>> & {
  Item: typeof MenuItem;
  SubMenu: typeof SubMenu;
  Divider: typeof MenuDivider;
};

ContextMenu.Item = MenuItem;
ContextMenu.SubMenu = SubMenu;
ContextMenu.Divider = MenuDivider;

export default ContextMenu;
